import { Actions } from '@/components/Actions';
import { BulletList, CardGrid, InfoGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { CallbackForm } from '@/components/forms/CallbackForm';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { tradeIcons } from '@/components/icons';
import { photos, tradePhotos } from '@/content/images';
import { simulatorPath } from '@/content/simulators';
import { tradePath, trades } from '@/content/trades';
import { offerCards } from '@/lib/links';
import { pageMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return trades.map((trade) => ({ slug: trade.slug }));
}

const find = (slug: string) => trades.find((trade) => trade.slug === slug)!;
const simulate = { href: simulatorPath('decennale'), label: 'Étudier ma décennale' };

export async function generateMetadata({ params }: Props) {
  const trade = find((await params).slug);
  return pageMetadata({ title: trade.title, description: trade.description, path: tradePath(trade.slug) });
}

export default async function Page({ params }: Props) {
  const trade = find((await params).slug);
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Métiers du bâtiment', path: '/metiers' },
          { name: trade.name, path: tradePath(trade.slug) },
        ]}
        eyebrow="Bâtiment et travaux publics"
        icon={tradeIcons[trade.slug]}
        title={trade.h1}
        intro={trade.intro}
        photo={photos[tradePhotos[trade.slug]]}
      >
        <Actions simulate={simulate} onDark />
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16">
          <div data-reveal>
            <p className="eyebrow mb-4">Votre attestation</p>
            <h2 className="text-3xl sm:text-4xl">Les activités à faire figurer sur votre attestation</h2>
            <p className="mt-3 max-w-2xl text-slate">Seules les activités inscrites sont garanties. Cochez mentalement celles que vous exercez, même occasionnellement.</p>
            <div className="mt-6">
              <BulletList items={trade.activities} />
            </div>
          </div>
          <div data-reveal className="lg:sticky lg:top-28">
            <CallbackForm source={`metier:${trade.slug}`} title="Faire relire mon attestation" />
          </div>
        </div>
      </Section>

      <Section eyebrow="Vos risques" title="Les risques propres au métier" muted>
        <InfoGrid items={trade.risks} />
      </Section>

      <Section eyebrow="Nos solutions" title="Les assurances à prévoir">
        <CardGrid items={offerCards(trade.offers)} />
      </Section>

      <Section eyebrow="Vos questions" title="Questions fréquentes" muted>
        <FaqList items={trade.faq} />
      </Section>

      <CtaBand source={`metier:${trade.slug}:fin`} simulate={simulate} />
    </>
  );
}
