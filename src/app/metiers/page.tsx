import { Actions } from '@/components/Actions';
import { CardGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { photos } from '@/content/images';
import { simulatorPath } from '@/content/simulators';
import { tradePath, trades } from '@/content/trades';
import { offerCards } from '@/lib/links';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Assurance par métier du bâtiment',
  description: "Maçon, couvreur, plombier, électricien, peintre, menuisier, terrassier : les activités à déclarer et les risques propres à chaque métier du bâtiment.",
  path: '/metiers',
});

const simulate = { href: simulatorPath('decennale'), label: 'Étudier ma décennale' };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Métiers du bâtiment', path: '/metiers' }]} title="L'assurance, métier par métier" intro="Une attestation décennale ne couvre que les activités qu'elle mentionne. Voici, pour chaque métier, ce qu'il faut déclarer et surveiller." eyebrow="Bâtiment et travaux publics" photo={photos.chantier}>
        <Actions simulate={simulate} onDark />
      </PageHero>
      <Section eyebrow="Sept métiers" title="Choisissez le vôtre">
        <CardGrid items={trades.map((trade) => ({ href: tradePath(trade.slug), title: trade.name, text: trade.intro }))} />
      </Section>
      <Section eyebrow="Le socle" title="Les assurances communes à tous les métiers" muted>
        <CardGrid items={offerCards(['proteger/decennale', 'proteger/rc-pro-batiment', 'proteger/engins-de-chantier', 'proteger/flotte-automobile', 'proteger/protection-juridique', 'proteger/prevoyance'])} />
      </Section>
      <CtaBand source="metiers" simulate={simulate} />
    </>
  );
}
