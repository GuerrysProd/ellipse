import Link from 'next/link';
import { BulletList, CardGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { cabinetPath } from '@/content/cabinet';
import { guidePath, guides } from '@/content/guides';
import { guidePhoto } from '@/content/images';
import { simulatorPath } from '@/content/simulators';
import { site } from '@/content/site';
import { offerCards, simulatorCards } from '@/lib/links';
import { articleSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

const find = (slug: string) => guides.find((guide) => guide.slug === slug)!;
const dateFormat = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export async function generateMetadata({ params }: Props) {
  const guide = find((await params).slug);
  return pageMetadata({ title: guide.title, description: guide.description, path: guidePath(guide.slug) });
}

export default async function Page({ params }: Props) {
  const guide = find((await params).slug);
  const path = guidePath(guide.slug);
  const simulate = guide.simulator ? { href: simulatorPath(guide.simulator), label: 'Simuler ma situation' } : undefined;
  return (
    <>
      <JsonLd data={articleSchema({ title: guide.title, description: guide.description, path, date: guide.date })} />
      <PageHero
        crumbs={[
          { name: 'Guides', path: '/guides' },
          { name: guide.title, path },
        ]}
        eyebrow={guide.theme}
        title={guide.h1}
        intro={guide.summary}
        photo={guidePhoto(guide.slug, guide.theme)}
      >
        <p className="text-sm text-white/75">
          Par{' '}
          <Link href={cabinetPath(site.founder.slug)} className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
            {site.founder.name}
          </Link>
          , courtier en assurance · Publié le <time dateTime={guide.date}>{dateFormat.format(new Date(guide.date))}</time>
        </p>
      </PageHero>

      <Section>
        <article className="mx-auto grid max-w-3xl gap-12 text-[1.06rem]">
          {guide.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-3xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <div className="mt-4">
                  <BulletList items={section.list} />
                </div>
              )}
            </div>
          ))}
          <aside className="rounded-3xl border border-line bg-pearl p-7 sm:p-9">
            <p className="eyebrow mb-3">En bref</p>
            <h2 className="mb-5 text-3xl">À retenir</h2>
            <BulletList items={guide.takeaways} />
          </aside>
          <p className="text-[0.82rem] leading-relaxed text-slate">
            Ce guide a une valeur d'information générale. Il ne remplace pas l'étude de votre situation. {site.name} est {site.legal.oriasCategory} (ORIAS {site.legal.orias}) et ne délivre ni conseil fiscal ni
            conseil juridique.
          </p>
        </article>
      </Section>

      <Section eyebrow="Aller plus loin" title="Simulateur et solutions concernées" muted>
        <CardGrid items={[...(guide.simulator ? simulatorCards([guide.simulator]) : []), ...offerCards(guide.offers)]} />
      </Section>

      <Section eyebrow="Vos questions" title="Questions fréquentes">
        <FaqList items={guide.faq} />
      </Section>

      <CtaBand source={`guide:${guide.slug}`} simulate={simulate} title="Appliquer ce guide à votre situation" />
    </>
  );
}
