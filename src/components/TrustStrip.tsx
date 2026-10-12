import { BadgeCheck, Landmark, Network, Scale } from 'lucide-react';
import { site } from '@/content/site';

const items = [
  { icon: BadgeCheck, label: `ORIAS n° ${site.legal.orias}`, detail: 'Courtier en assurance', href: 'https://www.orias.fr' },
  { icon: Landmark, label: "Contrôlé par l'ACPR", detail: 'Autorité de contrôle prudentiel' },
  { icon: Scale, label: 'Courtier indépendant', detail: 'Aucun lien avec un assureur' },
  { icon: Network, label: `Plus de ${site.insurersCount} compagnies`, detail: `Réseau ${site.network}` },
];

/** Bandeau de réassurance : immatriculation, contrôle, indépendance, étendue de la comparaison. */
export function TrustStrip() {
  return (
    <section aria-label="Garanties professionnelles" className="border-b border-line bg-paper">
      <ul className="container-page grid grid-cols-2 gap-x-6 gap-y-6 py-8 lg:grid-cols-4">
        {items.map(({ icon: Icon, label, detail, href }) => (
          <li key={label} className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-pearl text-petrol ring-1 ring-line">
              <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="text-sm leading-snug">
              {href ? (
                <a className="font-semibold text-ink underline decoration-mist underline-offset-4 hover:decoration-petrol" href={href} rel="noopener">
                  {label}
                </a>
              ) : (
                <span className="font-semibold text-ink">{label}</span>
              )}
              <span className="block text-slate">{detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
