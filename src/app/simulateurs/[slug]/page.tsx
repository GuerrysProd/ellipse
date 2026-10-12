import { BadgeCheck, Clock, LockKeyhole, Phone, UserRound } from 'lucide-react';
import { BulletList, CardGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { simulatorIcons } from '@/components/icons';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { SimulatorTool } from '@/components/SimulatorTool';
import { getSimulator, simulatorPath, simulators } from '@/content/simulators';
import { site } from '@/content/site';
import { offerCards } from '@/lib/links';
import { pageMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return simulators.map((simulator) => ({ slug: simulator.slug }));
}

export async function generateMetadata({ params }: Props) {
  const simulator = getSimulator((await params).slug);
  return pageMetadata({ title: simulator.title, description: simulator.description, path: simulatorPath(simulator.slug) });
}

export default async function Page({ params }: Props) {
  const simulator = getSimulator((await params).slug);
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Simulateurs', path: '/simulateurs' },
          { name: simulator.name, path: simulatorPath(simulator.slug) },
        ]}
        eyebrow="Simulateur gratuit"
        icon={simulatorIcons[simulator.slug]}
        title={simulator.h1}
        intro={simulator.intro}
      />

      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:items-start">
          <SimulatorTool slug={simulator.slug} />
          <aside className="grid gap-4 lg:sticky lg:top-28">
            <ul className="grid gap-4 rounded-3xl border border-line bg-paper p-7 shadow-soft">
              {[
                { icon: Clock, title: `${simulator.steps.length} étapes`, text: 'Quelques minutes suffisent.' },
                { icon: LockKeyhole, title: 'Confidentiel', text: 'Vos réponses ne sont ni cédées ni revendues.' },
                { icon: UserRound, title: 'Commenté par un courtier', text: `${site.founder.name} peut reprendre le résultat avec vous.` },
                { icon: BadgeCheck, title: 'Sans engagement', text: 'Une estimation, pas une offre.' },
              ].map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-pearl text-petrol ring-1 ring-line">
                    <Icon className="size-4.5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-ink">{title}</span>
                    <span className="block text-slate">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a href={`tel:${site.phone.e164}`} className="surface-dark flex items-center gap-4 rounded-3xl p-6 text-white transition-transform duration-300 hover:-translate-y-0.5">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10">
                <Phone className="size-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-white/70">Vous préférez en parler ?</span>
                <span className="block font-serif text-2xl font-medium">{site.phone.display}</span>
              </span>
            </a>
          </aside>
        </div>
      </Section>

      <Section eyebrow="Mode d'emploi" title="Comprendre ce simulateur">
        <div className="grid max-w-3xl gap-8">
          {simulator.explain.map((block) => (
            <div key={block.heading}>
              <h3 className="text-xl">{block.heading}</h3>
              <p className="mt-2">{block.text}</p>
            </div>
          ))}
          <div>
            <h3 className="mb-3 text-xl">Ce que l'outil ne fait pas</h3>
            <BulletList items={simulator.limits} />
          </div>
        </div>
      </Section>

      <Section eyebrow="Nos solutions" title="Les solutions concernées" muted>
        <CardGrid items={offerCards(simulator.offers)} />
      </Section>

      <Section eyebrow="Vos questions" title="Questions fréquentes">
        <FaqList items={simulator.faq} />
      </Section>

      <CtaBand source={`simulateur:${simulator.slug}:fin`} title="Vous préférez en parler ?" />
    </>
  );
}
