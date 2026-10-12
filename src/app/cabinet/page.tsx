import { Actions } from '@/components/Actions';
import { CardGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { TrustStrip } from '@/components/TrustStrip';
import { cabinetPages, cabinetPath } from '@/content/cabinet';
import { photos } from '@/content/images';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Le cabinet : courtier indépendant à ${site.baseCity}`,
  description: `${site.name}, cabinet de courtage en assurance indépendant à ${site.baseCity} : démarche, fondateur, compagnies comparées, rémunération, avis clients.`,
  path: '/cabinet',
});

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Le cabinet', path: '/cabinet' }]}
        title={`Un courtier indépendant à ${site.baseCity}`}
        intro="Un courtier travaille pour son client, pas pour un assureur. Voici comment nous le faisons, avec qui, et comment nous sommes rémunérés."
        eyebrow="Le cabinet"
        photo={photos.conseil}
      >
        <Actions onDark />
      </PageHero>
      <TrustStrip />
      <Section eyebrow="Tout savoir" title="Qui nous sommes, comment nous travaillons">
        <CardGrid
          items={[
            ...cabinetPages.map((page) => ({ href: cabinetPath(page.slug), title: page.name, text: page.tagline })),
            { href: '/secteurs', title: "Zones d'intervention", text: `${site.baseCity} et ${site.radiusKm} km alentour` },
            { href: '/contact', title: 'Contact', text: 'Téléphone, e-mail, message' },
          ]}
        />
      </Section>
      <CtaBand source="cabinet" />
    </>
  );
}
