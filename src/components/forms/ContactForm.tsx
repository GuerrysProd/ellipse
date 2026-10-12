'use client';

import { CircleCheck, Send } from 'lucide-react';
import { useId, useState } from 'react';
import { ConsentBox, ErrorText, Honeypot, SendFailure, TextField } from './Field';
import { useLeadSubmit } from './useLeadSubmit';

const SUBJECTS = [
  'Assurance du bâtiment',
  'Assurance viticole ou agricole',
  "Assurance de l'entreprise",
  'Prévoyance, santé, emprunteur',
  'Épargne, retraite, transmission',
  'Crédit, regroupement de crédits',
  'Sinistre en cours',
  'Partenariat',
  'Autre demande',
];

interface Props {
  source: string;
  /** Formulaire d'audit : remplace le sujet par la liste des contrats à faire relire. */
  variant?: 'contact' | 'audit';
  defaultSubject?: string;
}

const CONTRACTS = ['Décennale et responsabilité civile', "Multirisque et perte d'exploitation", 'Véhicules et engins', 'Récolte, cave, exploitation', 'Prévoyance et santé', 'Assurance de prêt', 'Assurance-vie et épargne retraite'];

/** Formulaire de contact, et sa variante pour la demande d'audit des contrats. */
export function ContactForm({ source, variant = 'contact', defaultSubject = '' }: Props) {
  const id = useId();
  const isAudit = variant === 'audit';
  const lead = useLeadSubmit(isAudit ? 'audit' : 'contact', source);
  const [fields, setFields] = useState({ prenom: '', nom: '', email: '', telephone: '', sujet: defaultSubject, message: '' });
  const [contracts, setContracts] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);

  const set = (name: keyof typeof fields) => (value: string) => {
    lead.clearError(name);
    setFields((previous) => ({ ...previous, [name]: value }));
  };

  if (lead.status === 'sent') {
    return (
      <div className="animate-rise rounded-3xl border border-line bg-paper p-7 shadow-lift sm:p-8" role="status">
        <CircleCheck className="size-10 text-petrol" strokeWidth={1.4} aria-hidden="true" />
        <p className="mt-4 font-serif text-2xl font-medium text-ink">Message envoyé</p>
        <p className="mt-2 text-slate">Merci {fields.prenom}. Nous revenons vers vous rapidement, par téléphone ou par e-mail.</p>
      </div>
    );
  }

  return (
    <form
      noValidate
      className="grid gap-4 rounded-3xl border border-line bg-paper p-7 shadow-lift sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const { sujet, ...common } = fields;
        void lead.submit(isAudit ? { ...common, contrats: contracts.join(', ') } : fields, consent);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id={`${id}-prenom`} label="Prénom" value={fields.prenom} onChange={set('prenom')} error={lead.errors.prenom} autoComplete="given-name" />
        <TextField id={`${id}-nom`} label="Nom" value={fields.nom} onChange={set('nom')} error={lead.errors.nom} autoComplete="family-name" />
        <TextField id={`${id}-email`} label="E-mail" type="email" inputMode="email" value={fields.email} onChange={set('email')} error={lead.errors.email} autoComplete="email" />
        <TextField id={`${id}-telephone`} label="Téléphone" type="tel" inputMode="tel" value={fields.telephone} onChange={set('telephone')} error={lead.errors.telephone} autoComplete="tel" />
      </div>

      {isAudit ? (
        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-ink">
            Contrats à faire relire <span className="font-normal text-slate">(facultatif)</span>
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {CONTRACTS.map((contract) => (
              <label key={contract} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-silver px-4 py-2 text-[0.95rem] transition-colors hover:border-mist has-checked:border-petrol has-checked:bg-pearl">
                <input
                  type="checkbox"
                  className="size-5 shrink-0 accent-petrol"
                  checked={contracts.includes(contract)}
                  onChange={(event) => setContracts((previous) => (event.target.checked ? [...previous, contract] : previous.filter((item) => item !== contract)))}
                />
                <span>{contract}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : (
        <div>
          <label htmlFor={`${id}-sujet`} className="mb-1.5 block text-sm font-semibold text-ink">
            Sujet <span aria-hidden="true" className="text-steel">*</span>
          </label>
          <select id={`${id}-sujet`} className="field" value={fields.sujet} aria-invalid={Boolean(lead.errors.sujet)} onChange={(event) => set('sujet')(event.target.value)}>
            <option value="">Choisir…</option>
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <ErrorText id={`${id}-sujet-error`} message={lead.errors.sujet} />
        </div>
      )}

      <div>
        <label htmlFor={`${id}-message`} className="mb-1.5 block text-sm font-semibold text-ink">
          {isAudit ? 'Précisions' : 'Message'} {isAudit ? <span className="font-normal text-slate">(facultatif)</span> : <span aria-hidden="true" className="text-steel">*</span>}
        </label>
        <textarea id={`${id}-message`} rows={4} className="field" value={fields.message} aria-invalid={Boolean(lead.errors.message)} onChange={(event) => set('message')(event.target.value)} />
        <ErrorText id={`${id}-message-error`} message={lead.errors.message} />
      </div>

      <Honeypot value={lead.website} onChange={lead.setWebsite} />
      <ConsentBox
        id={`${id}-consent`}
        checked={consent}
        error={lead.errors.consent}
        onChange={(checked) => {
          lead.clearError('consent');
          setConsent(checked);
        }}
      />
      <ErrorText id={`${id}-form-error`} message={lead.errors.form} />
      {lead.status === 'failed' && <SendFailure />}
      <button type="submit" className="btn" disabled={lead.status === 'sending'}>
        {lead.status === 'sending' ? 'Envoi en cours…' : isAudit ? 'Demander mon audit' : 'Envoyer le message'}
        <Send className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}
