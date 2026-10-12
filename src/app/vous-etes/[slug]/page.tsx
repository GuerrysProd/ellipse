import { Actions } from '@/components/Actions';
import { CardGrid, InfoGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { profileIcons } from '@/components/icons';
import { photos, profilePhotos } from '@/content/images';
import { profilePath, profiles } from '@/content/profiles';
import { simulatorPath } from '@/content/simulators';
import { tradePath, trades } from '@/content/trades';
import { offerCards, simulatorCards } from '@/lib/links';
import { pageMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return profiles.map((profile) => ({ slug: profile.slug }));
}

const find = (slug: string) => profiles.find((profile) => profile.slug === slug)!;

export async function generateMetadata({ params }: Props) {
  const profile = find((await params).slug);
  return pageMetadata({ title: profile.title, description: profile.description, path: profilePath(profile.slug) });
}

export default async function Page({ params }: Props) {
  const profile = find((await params).slug);
  const simulate = { href: simulatorPath(profile.simulators[0]), label: 'Faire le point' };
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Vous êtes', path: '/vous-etes' },
          { name: profile.name, path: profilePath(profile.slug) },
        ]}
        eyebrow="Vous êtes"
        icon={profileIcons[profile.slug]}
        title={profile.h1}
        intro={profile.intro}
        photo={photos[profilePhotos[profile.slug]]}
      >
        <Actions simulate={simulate} onDark />
      </PageHero>

      <Section eyebrow="Ce qui compte" title="Vos enjeux">
        <InfoGrid items={profile.stakes} />
      </Section>

      <Section eyebrow="Nos solutions" title="À regarder en priorité" muted>
        <CardGrid items={offerCards(profile.offers)} />
      </Section>

      <Section eyebrow="Gratuit et sans engagement" title="Faites le point">
        <CardGrid items={simulatorCards(profile.simulators)} />
      </Section>

      {profile.slug === 'artisan-btp' && (
        <Section eyebrow="Par métier" title="Votre métier" intro="Chaque métier du bâtiment a ses activités à déclarer et ses risques propres." muted>
          <CardGrid items={trades.map((trade) => ({ href: tradePath(trade.slug), title: trade.name }))} columns={4} />
        </Section>
      )}

      <Section eyebrow="Vos questions" title="Questions fréquentes">
        <FaqList items={profile.faq} />
      </Section>

      <CtaBand source={`profil:${profile.slug}`} simulate={simulate} />
    </>
  );
}
