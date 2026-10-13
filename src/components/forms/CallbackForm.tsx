'use client';

import { ArrowRight, CircleCheck, PhoneCall } from 'lucide-react';
import { useId, useState } from 'react';
import { site } from '@/content/site';
import { DemoNotice, ErrorText, Honeypot, SendFailure, TextField } from './Field';
import { useLeadSubmit } from './useLeadSubmit';

interface Props {
  /** Page d'où part la demande, pour comparer les emplacements. */
  source: string;
  title?: string;
}

/** Formulaire de rappel : trois champs, présent sur la plupart des pages. */
export function CallbackForm({ source, title = 'Être rappelé' }: Props) {
  const id = useId();
  const lead = useLeadSubmit('rappel', source);
  const [fields, setFields] = useState({ prenom: '', nom: '', telephone: '', creneau: '' });

  const set = (name: keyof typeof fields) => (value: string) => {
    lead.clearError(name);
    setFields((previous) => ({ ...previous, [name]: value }));
  };

  if (lead.status === 'sent') {
    return (
      <div className="animate-rise rounded-3xl border border-line bg-paper p-7 shadow-lift sm:p-8" role="status">
        <CircleCheck className="size-10 text-petrol" strokeWidth={1.4} aria-hidden="true" />
        <p className="mt-4 font-serif text-2xl font-medium text-ink">Demande enregistrée</p>
        <p className="mt-2 text-slate">Merci {fields.prenom}. Nous vous rappelons au {fields.telephone}, aux heures d'ouverture du cabinet.</p>
        {lead.demo && <DemoNotice />}
      </div>
    );
  }

  return (
    <form
      noValidate
      className="grid gap-4 rounded-3xl border border-line bg-paper p-7 shadow-lift sm:p-8"
      aria-labelledby={`${id}-title`}
      onSubmit={(event) => {
        event.preventDefault();
        void lead.submit(fields, false);
      }}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-pearl text-petrol ring-1 ring-line">
          <PhoneCall className="size-5" strokeWidth={1.6} aria-hidden="true" />
        </span>
        <p id={`${id}-title`} className="font-serif text-2xl leading-tight font-medium text-ink">
          {title}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id={`${id}-prenom`} label="Prénom" value={fields.prenom} onChange={set('prenom')} error={lead.errors.prenom} autoComplete="given-name" />
        <TextField id={`${id}-nom`} label="Nom" value={fields.nom} onChange={set('nom')} error={lead.errors.nom} autoComplete="family-name" />
      </div>
      <TextField id={`${id}-telephone`} label="Téléphone" type="tel" inputMode="tel" value={fields.telephone} onChange={set('telephone')} error={lead.errors.telephone} autoComplete="tel" />
      <div>
        <label htmlFor={`${id}-creneau`} className="mb-1.5 block text-sm font-semibold text-ink">
          Créneau souhaité <span className="font-normal text-slate">(facultatif)</span>
        </label>
        <select id={`${id}-creneau`} className="field" value={fields.creneau} onChange={(event) => set('creneau')(event.target.value)}>
          <option value="">Peu importe</option>
          <option value="matin">Le matin</option>
          <option value="midi">Entre midi et deux</option>
          <option value="apres-midi">L'après-midi</option>
        </select>
      </div>
      <Honeypot value={lead.website} onChange={lead.setWebsite} />
      <ErrorText id={`${id}-form-error`} message={lead.errors.form} />
      {lead.status === 'failed' && <SendFailure />}
      <button type="submit" className="btn w-full" disabled={lead.status === 'sending'}>
        {lead.status === 'sending' ? 'Envoi en cours…' : 'Être rappelé'}
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
      <p className="text-[0.8rem] leading-relaxed text-slate">
        Gratuit et sans engagement. Vos coordonnées servent uniquement à vous rappeler ; elles ne sont ni cédées ni revendues par {site.name}.{' '}
        <a className="link" href="/confidentialite">
          En savoir plus
        </a>
        .
      </p>
    </form>
  );
}
