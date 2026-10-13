import { ArrowRight, BadgeCheck, CalendarDays, MapPin, Network } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Actions } from '@/components/Actions';
import { BulletList, CardGrid, InfoGrid, PhotoCardGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { offerIcons, profileIcons, simulatorIcons } from '@/components/icons';
import { Orbits } from '@/components/Orbits';
import { Photo } from '@/components/Photo';
import { Section } from '@/components/Section';
import { Todo } from '@/components/Todo';
import { TrustStrip } from '@/components/TrustStrip';
import { cabinetPath } from '@/content/cabinet';
import { faqCategories } from '@/content/faq';
import { guidePath, guides } from '@/content/guides';
import { guidePhoto, photos, profilePhotos, type Photo as PhotoData } from '@/content/images';
import { actions, sectorLinks } from '@/content/navigation';
import { getOffer, offerPath, universes } from '@/content/offers';
import { profilePath, profiles } from '@/content/profiles';
import { getSimulator, simulatorPath, simulators } from '@/content/simulators';
import { site } from '@/content/site';
import type { Universe } from '@/content/types';
import { simulatorCards } from '@/lib/links';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `${site.name} : courtier en assurance à ${site.baseCity}`,
  description: site.description,
  path: '/',
});

const method = [
  { name: 'Écouter', text: 'Un premier échange pour comprendre votre activité et ce qui vous amène.' },
  { name: "Auditer l'existant", text: 'Vos contrats relus un par un, avec un état des lieux écrit.' },
  { name: 'Comparer', text: `Plus de ${site.insurersCount} compagnies consultées, une recommandation motivée.` },
  { name: 'Suivre', text: 'Un point annuel et le même interlocuteur en cas de sinistre.' },
];

const quickSimulators = ['decennale', 'recolte', 'prevoyance', 'bilan-patrimonial'];

const panels: { universe: Universe; eyebrow: string; photo: PhotoData; offers: string[] }[] = [
  { universe: 'proteger', eyebrow: "Aujourd'hui", photo: photos.echafaudage, offers: ['proteger/decennale', 'proteger/assurance-viticole', 'proteger/perte-exploitation', 'proteger/homme-cle', 'proteger/prevoyance'] },
  { universe: 'preparer', eyebrow: 'Demain', photo: photos.vignesCouchant, offers: ['preparer/assurance-vie', 'preparer/per', 'preparer/retraite-dirigeant', 'preparer/transmission', 'preparer/bilan-patrimonial'] },
];

/** Un guide par thème, pour varier les sujets présentés à l'accueil. */
const featuredGuides = ['assurance-decennale-obligations', 'assurance-recolte-vigne', 'prevoyance-dirigeant-statut', 'clause-beneficiaire'].map((slug) => guides.find((guide) => guide.slug === slug)!);

const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties;

export default function HomePage() {
  return (
    <>
      {/* Premier écran : Chalon-sur-Saône, la signature du cabinet, les trois actions. */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Photo photo={photos.chalonQuais} sizes="100vw" priority className="-z-20" />
        <span aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/85 to-ink/25" />
        {/* Sur petit écran, le texte recouvre toute la photo : le voile est renforcé. */}
        <span aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/45 lg:hidden" />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-linear-to-t from-ink to-transparent" />
        <Orbits className="-top-24 -right-56 -z-10 size-[58rem] opacity-70" />

        <div className="container-page grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.25fr_1fr] lg:py-24">
          <div className="animate-rise">
            <p className="flex items-center gap-4 text-[0.72rem] font-semibold tracking-[0.3em] text-mist uppercase">
              <span className="h-px w-10 bg-mist/70" aria-hidden="true" />
              Courtier en assurance · {site.baseCity}
            </p>
            <h1 className="mt-7 text-5xl leading-[1.02] text-white sm:text-7xl xl:text-[5.5rem]">
              Protéger aujourd'hui,
              <span className="block text-mist italic">préparer demain.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-white/80 sm:text-xl">
              {site.name} assure les artisans du bâtiment, les vignerons, les agriculteurs et les dirigeants de Bourgogne du Sud, puis les aide à préparer leur retraite et leur transmission.
            </p>
            <Actions className="mt-10" onDark />

            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <BadgeCheck className="size-4.5 text-mist" strokeWidth={1.6} aria-hidden="true" />
                ORIAS n° {site.legal.orias}
              </li>
              <li className="flex items-center gap-2.5">
                <Network className="size-4.5 text-mist" strokeWidth={1.6} aria-hidden="true" />
                Plus de {site.insurersCount} compagnies comparées
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4.5 text-mist" strokeWidth={1.6} aria-hidden="true" />
                {site.radiusKm} km autour de {site.baseCity}
              </li>
            </ul>
          </div>

          <aside className="animate-float hidden rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-lift backdrop-blur-xl lg:block">
            <p className="eyebrow text-mist">Gratuit · quelques minutes</p>
            <p className="mt-3 font-serif text-3xl leading-tight font-medium">Faites le point sur votre situation</p>
            <ul className="mt-6 grid gap-2">
              {quickSimulators.map((slug) => {
                const simulator = getSimulator(slug);
                const Icon = simulatorIcons[slug];
                return (
                  <li key={slug}>
                    <Link href={simulatorPath(slug)} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 transition-all duration-300 hover:border-white/40 hover:bg-white/15">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                        <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-semibold">{simulator.name}</span>
                        <span className="block text-sm text-white/75">{simulator.tagline}</span>
                      </span>
                      <ArrowRight className="size-4 text-white/75 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href={actions.simulate.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white">
              Les {simulators.length} simulateurs
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <TrustStrip />

      <Section eyebrow="Vos métiers, vos risques" title="Vous êtes…" intro="Chaque métier a ses risques. Commencez par le vôtre.">
        <PhotoCardGrid items={profiles.map((profile) => ({ href: profilePath(profile.slug), title: profile.name, text: profile.tagline, photo: photos[profilePhotos[profile.slug]], icon: profileIcons[profile.slug] }))} />
      </Section>

      <Section eyebrow="Gratuit et sans engagement" title="Faites le point en quelques minutes" intro="Des simulateurs pensés pour les situations que nous rencontrons le plus souvent." muted>
        <CardGrid items={simulatorCards(['decennale', 'recolte', 'prevoyance', 'perte-exploitation', 'per', 'bilan-patrimonial', 'emprunteur', 'transmission'])} columns={4} />
        <p className="mt-10" data-reveal>
          <Link href="/simulateurs" className="link-arrow">
            Tous les simulateurs
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </p>
      </Section>

      {/* Les deux univers, calqués sur la signature du cabinet. */}
      <Section eyebrow="Deux temps, un seul interlocuteur" title="Protéger aujourd'hui, préparer demain">
        <div className="grid gap-6 lg:grid-cols-2">
          {panels.map(({ universe, eyebrow, photo, offers }, index) => {
            const info = universes[universe];
            return (
              <article key={universe} data-reveal style={delay(index * 120)} className="group relative isolate flex min-h-[34rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-ink p-7 text-white shadow-soft sm:p-10">
                <Photo photo={photo} sizes="(min-width: 1024px) 50vw, 100vw" className="-z-20 transition-transform duration-[1500ms] ease-out group-hover:scale-105" decorative />
                <span aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/75 to-ink/20" />
                <p className="eyebrow text-mist">{eyebrow}</p>
                <h3 className="mt-3 font-serif text-5xl font-medium text-white sm:text-6xl">{info.name}</h3>
                <p className="mt-4 max-w-md text-white/80">{info.intro}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {offers.map((ref) => {
                    const offer = getOffer(ref);
                    const Icon = offerIcons[offer.slug];
                    return (
                      <li key={ref}>
                        <Link href={offerPath(offer)} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-sm font-medium backdrop-blur-md transition-colors hover:border-white/60 hover:bg-white/20">
                          {Icon && <Icon className="size-4" strokeWidth={1.7} aria-hidden="true" />}
                          {offer.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link href={info.path} className="btn-light mt-8 self-start">
                  {info.allLabel}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Troisième univers : le financement des projets. */}
        <div data-reveal className="mt-6 grid items-center gap-8 rounded-[2rem] border border-line bg-pearl p-7 sm:p-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">Et pour vos projets</p>
            <h3 className="mt-3 font-serif text-4xl font-medium text-ink sm:text-5xl">{universes.financer.name}</h3>
            <p className="mt-3 max-w-2xl text-slate">{universes.financer.intro}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {['financer/credit-professionnel', 'financer/financement-materiel', 'financer/credit-immobilier', 'financer/regroupement-de-credits'].map((ref) => {
                const offer = getOffer(ref);
                const Icon = offerIcons[offer.slug];
                return (
                  <li key={ref}>
                    <Link href={offerPath(offer)} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-silver bg-paper px-4 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-petrol hover:text-petrol hover:shadow-soft">
                      {Icon && <Icon className="size-4 text-steel" strokeWidth={1.7} aria-hidden="true" />}
                      {offer.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link href={universes.financer.path} className="btn justify-self-start">
            {universes.financer.allLabel}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      <Section eyebrow="Notre démarche" title="Une méthode en quatre temps" intro="La même pour une décennale et pour une retraite." dark>
        <InfoGrid items={method} numbered onDark />
        <p className="mt-10" data-reveal>
          <Link href={cabinetPath('demarche')} className="btn-glass">
            Notre démarche en détail
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </p>
      </Section>

      {/* Le fondateur et le réseau. */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div data-reveal className="relative">
            <span aria-hidden="true" className="absolute -top-5 -left-5 h-full w-full rounded-[2rem] border border-mist/60" />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
              <Image src="/brand/portrait-fondateur.jpg" alt={`${site.founder.name}, fondateur du cabinet`} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[40%_25%]" />
            </div>
            <p className="absolute -right-3 -bottom-5 flex items-center gap-3 rounded-2xl border border-line bg-paper px-5 py-3.5 text-sm shadow-lift sm:-right-6">
              <BadgeCheck className="size-5 text-petrol" strokeWidth={1.6} aria-hidden="true" />
              <span>
                <span className="block font-semibold text-ink">Courtier en assurance</span>
                <span className="block text-slate">ORIAS n° {site.legal.orias}</span>
              </span>
            </p>
          </div>

          <div data-reveal style={delay(120)}>
            <p className="eyebrow mb-4">Votre interlocuteur</p>
            <h2 className="text-4xl sm:text-5xl">{site.founder.name}</h2>
            <p className="mt-5 text-lg text-slate">
              {site.founder.role}. Il étudie votre dossier, se déplace sur le chantier ou au domaine quand c'est utile, et reste votre interlocuteur de la première étude au sinistre.
            </p>
            <div className="mt-6">
              <BulletList items={['Une recommandation écrite et motivée avant toute signature', 'La nature de sa rémunération indiquée avant toute proposition', 'La liberté de ne rien changer si vos contrats conviennent']} />
            </div>
            <Todo>Quelques lignes de parcours, et un portrait en haute définition.</Todo>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={cabinetPath(site.founder.slug)} className="btn">
                Faire connaissance
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href={actions.booking.href} className="btn-outline">
                <CalendarDays className="size-4.5" strokeWidth={1.8} aria-hidden="true" />
                {actions.booking.label}
              </Link>
            </div>
          </div>
        </div>

        <div data-reveal className="surface-dark relative mt-20 grid items-center gap-8 overflow-hidden rounded-[2rem] p-8 text-white sm:p-12 lg:grid-cols-[auto_1fr_auto]">
          <Orbits className="-top-40 -right-32 size-[30rem] opacity-50" />
          <Image src="/brand/nousassurons-blanc.png" alt={`Réseau ${site.network}`} width={812} height={233} className="relative h-auto w-52" />
          <div className="relative lg:border-l lg:border-white/15 lg:pl-10">
            <p className="eyebrow text-mist">Membre du réseau {site.network}</p>
            <p className="mt-2 font-serif text-3xl leading-tight font-medium sm:text-4xl">
              Plus de <span className="text-mist">{site.insurersCount} compagnies</span> comparées pour vous
            </p>
          </div>
          <Link href={cabinetPath('compagnies-partenaires')} className="btn-glass relative">
            En savoir plus
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* La zone d'intervention. */}
      <Section muted>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <p className="eyebrow mb-4">Près de chez vous</p>
            <h2 className="text-4xl sm:text-5xl">
              Autour de {site.baseCity}, dans un rayon de {site.radiusKm} km
            </h2>
            <p className="mt-5 text-lg text-slate">Le cabinet se déplace sur les chantiers, dans les domaines et dans les entreprises. Les rendez-vous peuvent aussi se tenir en visioconférence.</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {sectorLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-silver bg-paper px-4 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-petrol hover:text-petrol hover:shadow-soft">
                    <MapPin className="size-3.5 text-steel" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link href="/secteurs" className="link-arrow">
                Toutes les zones d'intervention
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
          <div data-reveal style={delay(120)} className="grid grid-cols-5 gap-4">
            <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-[2rem] shadow-lift">
              <Photo photo={photos.chalonCathedrale} sizes="(min-width: 1024px) 30vw, 60vw" />
            </div>
            <div className="col-span-2 grid grid-rows-2 gap-4">
              <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
                <Photo photo={photos.chalonColombages} sizes="(min-width: 1024px) 20vw, 40vw" />
              </div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
                <Photo photo={photos.vignoble} sizes="(min-width: 1024px) 20vw, 40vw" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="S'informer" title="Guides pratiques" intro="Écrits pour être lus entre deux chantiers.">
        <PhotoCardGrid columns={4} items={featuredGuides.map((guide) => ({ href: guidePath(guide.slug), title: guide.title, tag: guide.theme, photo: guidePhoto(guide.slug, guide.theme) }))} />
        <p className="mt-10" data-reveal>
          <Link href="/guides" className="link-arrow">
            Tous les guides
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </p>
      </Section>

      <Section eyebrow="Vos questions" title="Questions fréquentes" muted>
        <FaqList items={faqCategories[0].items} />
        <p className="mt-10" data-reveal>
          <Link href="/faq" className="link-arrow">
            Toutes les questions
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </p>
      </Section>

      <CtaBand source="accueil:fin" />
    </>
  );
}
