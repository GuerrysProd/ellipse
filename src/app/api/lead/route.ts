import { parseLead } from '@/lib/leads';

const MIN_FILL_TIME_MS = 2500;

/** Réception d'une demande : validation, filtre anti-robots, transmission au CRM par webhook. */
export async function POST(request: Request) {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return Response.json({ ok: false, errors: { form: 'Requête invalide.' } }, { status: 400 });
  }

  const result = parseLead(input);
  if (!result.ok) return Response.json({ ok: false, errors: result.errors }, { status: 422 });
  const { lead } = result;

  // Champ piège rempli ou envoi trop rapide : on répond « ok » sans rien transmettre,
  // pour ne pas indiquer au robot qu'il a été détecté.
  if (lead.website !== '' || lead.elapsedMs < MIN_FILL_TIME_MS) return Response.json({ ok: true });

  const record = {
    receivedAt: new Date().toISOString(),
    kind: lead.kind,
    fields: lead.fields,
    // Preuve de l'accord à être recontacté : la demande de rappel vaut accord, les autres formulaires portent une case.
    consent: { given: lead.kind === 'rappel' ? true : lead.consent, at: new Date().toISOString() },
    context: lead.context,
    source: lead.source,
    attribution: lead.attribution,
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    // Sans webhook, rien n'est transmis. Le journal ne contient aucune donnée personnelle.
    console.warn(`[lead] LEAD_WEBHOOK_URL absent : demande « ${lead.kind} » depuis ${lead.source} non transmise.`);
    // En production, le visiteur voit le message d'échec et le numéro de téléphone : aucune demande n'est perdue en silence.
    const demo = process.env.LEAD_DEMO_MODE === 'true' || process.env.NODE_ENV !== 'production';
    if (!demo) return Response.json({ ok: false, errors: { form: 'Service indisponible.' } }, { status: 503 });
    // Mode démonstration (préversion, développement) : la demande est acceptée sans être transmise, et le formulaire l'annonce.
    return Response.json({ ok: true, demo: true });
  }

  try {
    const response = await fetch(webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record), signal: AbortSignal.timeout(8000) });
    if (!response.ok) throw new Error(`Webhook HTTP ${response.status}`);
  } catch (error) {
    console.error('[lead] Transmission échouée :', error instanceof Error ? error.message : error);
    return Response.json({ ok: false, errors: { form: 'Transmission impossible.' } }, { status: 502 });
  }

  return Response.json({ ok: true });
}
