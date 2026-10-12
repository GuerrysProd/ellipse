import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cabinetPages, cabinetPath } from '@/content/cabinet';
import { legalLinks, sectorLinks, type NavLink } from '@/content/navigation';
import { offerPath, offersOf } from '@/content/offers';
import { site } from '@/content/site';
import { Logo } from './Logo';
import { Orbits } from './Orbits';

function Column({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <p className="eyebrow mb-4 text-mist">{title}</p>
      <ul className="grid gap-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-white/70 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const offerLinks = (universe: 'proteger' | 'preparer' | 'financer') => offersOf(universe).map((offer) => ({ href: offerPath(offer), label: offer.name }));

export function Footer() {
  return (
    <footer className="surface-dark relative overflow-hidden text-white">
      <Orbits className="-top-64 -right-64 size-[52rem] opacity-30" />

      <div className="container-page relative grid gap-12 pt-16 pb-12 lg:grid-cols-[1.1fr_3fr]">
        <div>
          <Logo onDark />
          <div className="hairline mt-8 max-w-64 via-mist/50" />
          <p className="mt-5 max-w-64 text-[0.7rem] leading-relaxed font-medium tracking-[0.26em] text-mist uppercase">Nous vous protégeons aujourd'hui pour préparer demain</p>

          <address className="mt-8 grid gap-3 text-sm not-italic">
            <a className="flex items-center gap-3 text-white/80 transition-colors hover:text-white" href={`tel:${site.phone.e164}`}>
              <Phone className="size-4 text-mist" aria-hidden="true" />
              {site.phone.display}
            </a>
            <a className="flex items-center gap-3 text-white/80 transition-colors hover:text-white" href={`mailto:${site.email}`}>
              <Mail className="size-4 text-mist" aria-hidden="true" />
              {site.email}
            </a>
            <span className="flex items-center gap-3 text-white/80">
              <MapPin className="size-4 text-mist" aria-hidden="true" />
              {site.baseCity} et {site.radiusKm} km alentour
            </span>
          </address>

          <ul className="mt-6 flex flex-wrap gap-2 text-sm">
            {site.social.map((network) => (
              <li key={network.name}>
                <a className="inline-flex min-h-9 items-center rounded-full border border-white/15 px-4 text-white/80 transition-colors hover:border-white/50 hover:text-white" href={network.url} rel="noopener">
                  {network.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="eyebrow mb-3 text-mist">Membre du réseau</p>
            <Image src="/brand/nousassurons-blanc.png" alt={`Réseau ${site.network}`} width={812} height={233} className="h-auto w-44 opacity-90" />
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Column title="Protéger" links={[{ href: '/proteger', label: 'Toutes les protections' }, ...offerLinks('proteger')]} />
          <div className="grid content-start gap-10">
            <Column title="Préparer" links={[{ href: '/preparer', label: 'Toutes les solutions' }, ...offerLinks('preparer')]} />
            <Column title="Financer" links={[{ href: '/financer', label: 'Tous les financements' }, ...offerLinks('financer'), { href: '/simulateurs', label: 'Tous les simulateurs' }]} />
          </div>
          <Column
            title="Le cabinet"
            links={[
              { href: '/cabinet', label: 'Découvrir le cabinet' },
              ...cabinetPages.map((page) => ({ href: cabinetPath(page.slug), label: page.name })),
              { href: '/vous-etes', label: 'Vous êtes' },
              { href: '/metiers', label: 'Métiers du bâtiment' },
              { href: '/contact', label: 'Contact' },
            ]}
          />
          <Column
            title="S'informer"
            links={[
              { href: '/guides', label: 'Guides pratiques' },
              { href: '/faq', label: 'Questions fréquentes' },
              { href: '/lexique', label: 'Lexique' },
              { href: '/sinistre', label: 'En cas de sinistre' },
              { href: '/audit-gratuit', label: 'Audit gratuit de vos contrats' },
            ]}
          />
        </div>
      </div>

      <div className="container-page relative border-t border-white/10 py-7 text-sm">
        <p className="eyebrow mb-3 text-mist">
          <Link href="/secteurs" className="transition-colors hover:text-white">
            Zones d'intervention
          </Link>
        </p>
        <ul className="flex flex-wrap gap-2">
          {sectorLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="inline-flex min-h-8 items-center rounded-full border border-white/10 px-3 text-white/70 transition-colors hover:border-white/40 hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page relative border-t border-white/10 py-8 text-[0.82rem] leading-relaxed text-white/55">
        <ul className="mb-5 flex flex-wrap gap-x-5 gap-y-1 text-white/75">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p>
          {site.legalName}, {site.legal.form}. SIRET {site.legal.siret}, {site.legal.rcs}. Immatriculé à l'ORIAS sous le n° {site.legal.orias} en qualité de {site.legal.oriasCategory} (
          <a className="underline underline-offset-2 hover:text-white" href="https://www.orias.fr" rel="noopener">
            www.orias.fr
          </a>
          ). Garantie financière et responsabilité civile professionnelle conformes au Code des assurances. Activité soumise au contrôle de l'{site.legal.acpr}.
        </p>
        <p className="mt-2">
          Le cabinet n'est pas conseiller en investissements financiers et ne délivre ni conseil fiscal ni conseil juridique. Les informations et simulateurs du site sont fournis à titre indicatif. Les supports en
          unités de compte présentent un risque de perte en capital.
        </p>
        <p className="mt-2">
          Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager. Aucun versement, de quelque nature que ce soit, ne peut être exigé d'un particulier avant
          l'obtention d'un ou plusieurs prêts d'argent.
        </p>
        <p className="mt-4 text-white/40">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
