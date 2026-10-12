import { Calculator } from 'lucide-react';
import { CardGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { simulatorPath, simulators } from '@/content/simulators';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Simulateurs gratuits : assurance, prévoyance, retraite',
  description: "Seize simulateurs gratuits pour artisans, vignerons, dirigeants et particuliers : décennale, récolte, prévoyance, retraite, crédit, transmission.",
  path: '/simulateurs',
});

const groups = [
  { title: 'Votre activité', slugs: ['decennale', 'couverture-btp', 'recolte', 'couverture-exploitation', 'perte-exploitation', 'homme-cle'] },
  { title: 'Vous et vos proches', slugs: ['prevoyance', 'emprunteur'] },
  { title: 'Votre épargne et votre transmission', slugs: ['per', 'assurance-vie', 'retraite', 'transmission', 'bilan-patrimonial', 'tresorerie'] },
  { title: 'Vos financements', slugs: ['credit', 'regroupement-credits'] },
];

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Simulateurs', path: '/simulateurs' }]}
        eyebrow="Gratuit et sans engagement"
        icon={Calculator}
        title="Faites le point en quelques minutes"
        intro="Chaque simulateur pose quelques questions, puis donne un premier résultat chiffré ou une lecture de votre situation. Un courtier peut ensuite l'affiner avec vous."
      />
      {groups.map((group, index) => (
        <Section key={group.title} eyebrow={`${String(index + 1).padStart(2, '0')} / ${String(groups.length).padStart(2, '0')}`} title={group.title} muted={index % 2 === 1}>
          <CardGrid
            items={group.slugs.map((slug) => {
              const simulator = simulators.find((item) => item.slug === slug)!;
              return { href: simulatorPath(slug), title: simulator.name, text: simulator.tagline, tag: `${simulator.steps.length} étapes` };
            })}
          />
        </Section>
      ))}
      <Section>
        <p className="max-w-3xl text-sm text-slate">
          Les résultats sont des estimations fondées sur vos réponses et sur des hypothèses indiquées avec chaque résultat. Ils ne constituent ni une offre, ni un tarif, ni un conseil personnalisé.
        </p>
      </Section>
      <CtaBand source="simulateurs" />
    </>
  );
}
