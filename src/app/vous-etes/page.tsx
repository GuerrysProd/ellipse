import { Actions } from '@/components/Actions';
import { CardGrid, PhotoCardGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { photos, profilePhotos } from '@/content/images';
import { profilePath, profiles } from '@/content/profiles';
import { tradePath, trades } from '@/content/trades';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Vous êtes artisan, vigneron, dirigeant ou particulier',
  description: "Choisissez votre profil : artisan du bâtiment, vigneron, agriculteur, dirigeant, indépendant ou particulier, et voyez les assurances à regarder en priorité.",
  path: '/vous-etes',
});

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Vous êtes', path: '/vous-etes' }]} title="Commencez par votre métier" intro="Les mêmes contrats ne répondent pas aux mêmes risques. Chaque page rassemble, pour un profil, ce qu'il faut regarder en priorité." photo={photos.vendange}>
        <Actions onDark />
      </PageHero>
      <Section eyebrow="Par profil" title="Qui êtes-vous ?">
        <PhotoCardGrid items={profiles.map((profile) => ({ href: profilePath(profile.slug), title: profile.name, text: profile.tagline, photo: photos[profilePhotos[profile.slug]] }))} />
      </Section>
      <Section eyebrow="Bâtiment et travaux publics" title="Par métier du bâtiment" muted>
        <CardGrid items={trades.map((trade) => ({ href: tradePath(trade.slug), title: trade.name }))} columns={4} />
      </Section>
      <CtaBand source="vous-etes" />
    </>
  );
}
