// Demandes entrantes : définition partagée entre les formulaires (contrôle de saisie) et la route /api/lead (validation).

export const LEAD_KINDS = ['rappel', 'simulation', 'contact', 'audit'] as const;
export type LeadKind = (typeof LEAD_KINDS)[number];

export interface LeadRequest {
  kind: LeadKind;
  fields: Record<string, string>;
  consent: boolean;
  /** Données propres au formulaire : simulateur, réponses, résultat affiché. */
  context: Record<string, unknown>;
  /** Page d'où part la demande. */
  source: string;
  attribution: Record<string, string>;
  /** Temps passé avant l'envoi, pour écarter les soumissions automatiques. */
  elapsedMs: number;
  /** Champ piège : doit rester vide. */
  website: string;
}

export type FieldErrors = Record<string, string>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_FR = /^(?:\+33|0033|0)[1-9]\d{8}$/;

export const normalizePhone = (value: string) => value.replace(/[\s.\-()]/g, '');

type Rule = (value: string) => string | null;

const rules = {
  name: (label: string): Rule => (value) => (value.trim().length >= 2 ? null : `Indiquez votre ${label}.`),
  phone: ((value) => (PHONE_FR.test(normalizePhone(value)) ? null : 'Indiquez un numéro à 10 chiffres, par exemple 06 12 34 56 78.')) as Rule,
  email: ((value) => (EMAIL.test(value.trim()) ? null : 'Indiquez une adresse e-mail valide.')) as Rule,
  required: (message: string): Rule => (value) => (value.trim() ? null : message),
  message: ((value) => (value.trim().length >= 10 ? null : 'Décrivez votre demande en quelques mots.')) as Rule,
};

export const SLOTS = ['', 'matin', 'midi', 'apres-midi'] as const;

interface KindSchema {
  required: Record<string, Rule>;
  optional: Record<string, number>;
  consent: boolean;
}

/** Champs attendus pour chaque type de demande. Les champs facultatifs indiquent leur longueur maximale. */
export const LEAD_SCHEMAS: Record<LeadKind, KindSchema> = {
  rappel: {
    required: { prenom: rules.name('prénom'), nom: rules.name('nom'), telephone: rules.phone },
    optional: { creneau: 20 },
    consent: false,
  },
  simulation: {
    required: { prenom: rules.name('prénom'), nom: rules.name('nom'), email: rules.email, telephone: rules.phone },
    optional: {},
    consent: true,
  },
  contact: {
    required: {
      prenom: rules.name('prénom'),
      nom: rules.name('nom'),
      email: rules.email,
      telephone: rules.phone,
      sujet: rules.required('Choisissez un sujet.'),
      message: rules.message,
    },
    optional: {},
    consent: true,
  },
  audit: {
    required: { prenom: rules.name('prénom'), nom: rules.name('nom'), email: rules.email, telephone: rules.phone },
    optional: { contrats: 300, message: 2000 },
    consent: true,
  },
};

export function validateFields(kind: LeadKind, fields: Record<string, string>, consent: boolean): FieldErrors {
  const schema = LEAD_SCHEMAS[kind];
  const errors: FieldErrors = {};
  for (const [name, rule] of Object.entries(schema.required)) {
    const error = rule(fields[name] ?? '');
    if (error) errors[name] = error;
  }
  if (schema.consent && !consent) errors.consent = 'Votre accord est nécessaire pour traiter la demande.';
  return errors;
}

const text = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

/** Validation côté serveur : ne fait confiance à aucun champ reçu et écarte les clés inconnues. */
export function parseLead(input: unknown): { ok: true; lead: LeadRequest } | { ok: false; errors: FieldErrors } {
  if (typeof input !== 'object' || input === null) return { ok: false, errors: { form: 'Requête invalide.' } };
  const raw = input as Record<string, unknown>;
  const kind = raw.kind;
  if (typeof kind !== 'string' || !(LEAD_KINDS as readonly string[]).includes(kind)) {
    return { ok: false, errors: { form: 'Type de demande inconnu.' } };
  }
  const schema = LEAD_SCHEMAS[kind as LeadKind];
  const rawFields = (typeof raw.fields === 'object' && raw.fields !== null ? raw.fields : {}) as Record<string, unknown>;

  const fields: Record<string, string> = {};
  for (const name of Object.keys(schema.required)) fields[name] = text(rawFields[name], name === 'message' ? 2000 : 160);
  for (const [name, max] of Object.entries(schema.optional)) fields[name] = text(rawFields[name], max);
  if (fields.telephone) fields.telephone = normalizePhone(fields.telephone);
  if (fields.email) fields.email = fields.email.toLowerCase();
  if ('creneau' in fields && !(SLOTS as readonly string[]).includes(fields.creneau)) fields.creneau = '';

  const consent = raw.consent === true;
  const errors = validateFields(kind as LeadKind, fields, consent);
  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const attribution: Record<string, string> = {};
  if (typeof raw.attribution === 'object' && raw.attribution !== null) {
    for (const [key, value] of Object.entries(raw.attribution).slice(0, 15)) {
      if (typeof value === 'string') attribution[key.slice(0, 40)] = value.slice(0, 300);
    }
  }

  // Le contexte est conservé tel quel, borné en taille.
  let context: Record<string, unknown> = {};
  if (typeof raw.context === 'object' && raw.context !== null && JSON.stringify(raw.context).length <= 6000) {
    context = raw.context as Record<string, unknown>;
  }

  return {
    ok: true,
    lead: {
      kind: kind as LeadKind,
      fields,
      consent,
      context,
      source: text(raw.source, 120),
      attribution,
      elapsedMs: typeof raw.elapsedMs === 'number' && Number.isFinite(raw.elapsedMs) ? raw.elapsedMs : 0,
      website: text(raw.website, 200),
    },
  };
}
