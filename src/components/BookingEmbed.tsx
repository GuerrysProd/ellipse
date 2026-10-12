'use client';

import { CalendarDays, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { site } from '@/content/site';

/** Agenda de prise de rendez-vous, chargé seulement à la demande : aucun service tiers n'est appelé avant le clic. */
export function BookingEmbed() {
  const [visible, setVisible] = useState(false);

  if (!visible) {
    return (
      <div className="rounded-3xl border border-line bg-paper p-7 shadow-lift sm:p-9">
        <span className="grid size-12 place-items-center rounded-full bg-pearl text-petrol ring-1 ring-line">
          <CalendarDays className="size-5" strokeWidth={1.6} aria-hidden="true" />
        </span>
        <p className="mt-5 font-serif text-3xl font-medium text-ink">Choisir un créneau</p>
        <p className="mt-2 max-w-xl text-slate">L'agenda est fourni par Calendly. En l'affichant, vous acceptez que ce service dépose ses propres cookies.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="btn" onClick={() => setVisible(true)}>
            <CalendarDays className="size-4.5" aria-hidden="true" />
            Afficher l'agenda
          </button>
          <a className="btn-outline" href={site.bookingUrl} rel="noopener" target="_blank">
            Ouvrir dans un nouvel onglet
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

  return <iframe title="Agenda de prise de rendez-vous" src={site.bookingUrl} className="h-[720px] w-full rounded-3xl border border-line bg-paper shadow-lift" loading="lazy" />;
}
