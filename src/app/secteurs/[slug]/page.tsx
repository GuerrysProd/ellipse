import { Actions } from '@/components/Actions';
import { CardGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { CallbackForm } from '@/components/forms/CallbackForm';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { MapPin } from 'lucide-react';
import { photos, sectorPhotos } from '@/content/images';
import { sectorPath, sectors } from '@/content/sectors';
import { site } from '@/content/site';
import { offerCards, profileCards } from '@/lib/links';
import { pageMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

const find = (slug: string) => sectors.find((sector) => sector.slug === slug)!;

export async function generateMetadata({ params }: Props) {
  const sector = find((await params).slug);
  return pageMetadata({ title: sector.title, description: sector.description, path: sectorPath(sector.slug) });
}

export default async function Page({ params }: Props) {
  const sector = find((await params).slug);
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Zones d'intervention", path: '/secteurs' },
          { name: sector.name, path: sectorPath(sector.slug) },
        ]}
        eyebrow={sector.department}
        icon={MapPin}
        title={sector.h1}
        intro={sector.intro}
        photo={photos[sectorPhotos[sector.slug]]}
      >
        <Actions onDark />
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16">
          <div data-reveal>
            <p className="eyebrow mb-4">Sur le terrain</p>
            <h2 className="text-3xl sm:text-4xl">Ce que nous y rencontrons</h2>
            <p className="mt-4 max-w-2xl">{sector.context}</p>
            <h3 className="mt-8 text-xl">Communes desservies</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {sector.towns.map((town) => (
                <li key={town} className="inline-flex min-h-9 items-center gap-2 rounded-full border border-line bg-pearl px-3.5 text-sm text-ink">
                  <MapPin className="size-3.5 text-steel" aria-hidden="true" />
                  {town}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-sm text-slate">
              {site.name}, {site.legal.oriasCategory} immatriculé à l'ORIAS sous le n° {site.legal.orias}, compare plus de {site.insurersCount} compagnies.
            </p>
          </div>
          <div data-reveal className="lg:sticky lg:top-28">
            <CallbackForm source={`secteur:${sector.slug}`} />
          </div>
        </div>
      </Section>

      <Section eyebrow="Nos solutions" title={`Les demandes les plus fréquentes : ${sector.name}`} muted>
        <CardGrid items={offerCards(sector.offers)} columns={4} />
      </Section>

      <Section eyebrow="Vos métiers" title="Vous êtes…">
        <CardGrid items={profileCards(sector.profiles)} />
      </Section>

      <Section eyebrow="Vos questions" title="Questions fréquentes" muted>
        <FaqList items={sector.faq} />
      </Section>

      <CtaBand source={`secteur:${sector.slug}:fin`} title={`Un courtier près de chez vous : ${sector.name}`} />
    </>
  );
}
