import { Actions } from '@/components/Actions';
import { CardGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { Todo } from '@/components/Todo';
import { photos } from '@/content/images';
import { groupedOffers, offerPath, universes } from '@/content/offers';
import type { Universe } from '@/content/types';
import { simulatorCards } from '@/lib/links';

const settings = {
  proteger: {
    photo: photos.echafaudage,
    starterIntro: "Si vous ne savez pas par où commencer, un diagnostic ou une simulation donne un premier repère en quelques minutes.",
    simulators: ['couverture-btp', 'couverture-exploitation', 'prevoyance', 'perte-exploitation'],
  },
  preparer: {
    photo: photos.promenade,
    starterIntro: "Avant de choisir un contrat, mesurez l'enjeu : ce que vous pouvez épargner, ce qu'il vous manquera, ce que paieraient vos héritiers.",
    simulators: ['bilan-patrimonial', 'retraite', 'per', 'transmission'],
  },
  financer: {
    photo: photos.conseil,
    starterIntro: "Avant de solliciter une banque, mesurez la mensualité et le coût total de votre projet, ou l'effet réel d'un regroupement.",
    simulators: ['credit', 'regroupement-credits', 'emprunteur', 'bilan-patrimonial'],
  },
};

/** Page d'aiguillage d'un univers : toutes ses offres, regroupées. */
export function UniverseTemplate({ universe }: { universe: Universe }) {
  const info = universes[universe];
  const groups = groupedOffers(universe);
  const { photo, starterIntro, simulators } = settings[universe];
  return (
    <>
      <PageHero crumbs={[{ name: info.name, path: info.path }]} eyebrow={info.tagline} title={`${info.name} : toutes nos solutions`} intro={info.intro} photo={photo}>
        <Actions onDark />
      </PageHero>

      {groups.map(({ group, offers }, index) => (
        <Section key={group} eyebrow={`${String(index + 1).padStart(2, '0')} / ${String(groups.length).padStart(2, '0')}`} title={group} muted={index % 2 === 1}>
          <CardGrid items={offers.map((offer) => ({ href: offerPath(offer), title: offer.name, text: offer.tagline, tag: offer.mandatory ? 'Obligatoire' : undefined }))} />
        </Section>
      ))}

      <Section eyebrow="Premier repère" title="Par où commencer ?" intro={starterIntro} muted={groups.length % 2 === 1}>
        <CardGrid items={simulatorCards(simulators)} columns={4} />
      </Section>

      {universe === 'financer' && (
        <Section>
          <div className="max-w-3xl text-sm leading-relaxed text-slate">
            <p className="font-semibold text-ink">Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.</p>
            <p className="mt-2">Aucun versement, de quelque nature que ce soit, ne peut être exigé d'un particulier avant l'obtention d'un ou plusieurs prêts d'argent.</p>
            <Todo>Statut du cabinet pour l'intermédiation en crédit : catégorie d'immatriculation à l'ORIAS et établissements partenaires, à indiquer ici et dans les mentions légales.</Todo>
          </div>
        </Section>
      )}

      <CtaBand source={`univers:${universe}`} />
    </>
  );
}
