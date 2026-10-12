import type { CSSProperties } from 'react';
import type { Crumb } from '@/components/Breadcrumb';
import { BulletList } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import type { LucideIcon } from '@/components/icons';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { Todo } from '@/components/Todo';
import type { ContentPage } from '@/content/types';

interface Props {
  page: ContentPage;
  crumbs: Crumb[];
  icon?: LucideIcon;
  /** Bloc affiché à droite du texte : portrait, encart. */
  aside?: React.ReactNode;
  /** Les pages légales se terminent sans bloc d'appel à l'action. */
  withCta?: boolean;
}

/** Gabarit des pages éditoriales simples : pages du cabinet et pages légales. */
export function ContentTemplate({ page, crumbs, icon, aside, withCta = true }: Props) {
  return (
    <>
      <PageHero crumbs={crumbs} icon={icon} eyebrow={page.tagline} title={page.h1} intro={page.intro} />
      <Section>
        <div className={aside ? 'grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-16' : ''}>
          <div className="grid max-w-3xl gap-12">
            {page.sections.map((section, index) => (
              <div key={section.heading} data-reveal style={{ '--reveal-delay': `${Math.min(index, 3) * 60}ms` } as CSSProperties}>
                <h2 className="text-2xl sm:text-3xl">{section.heading}</h2>
                <div className="hairline mt-4 max-w-24 bg-linear-to-r from-steel to-transparent" />
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <div className="mt-5">
                    <BulletList items={section.list} />
                  </div>
                )}
                {section.todo && <Todo>{section.todo}</Todo>}
              </div>
            ))}
          </div>
          {aside && (
            <div data-reveal className="lg:sticky lg:top-28">
              {aside}
            </div>
          )}
        </div>
      </Section>
      {page.faq && (
        <Section eyebrow="Vos questions" title="Questions fréquentes" muted>
          <FaqList items={page.faq} />
        </Section>
      )}
      {withCta && <CtaBand source={`page:${page.slug}`} />}
    </>
  );
}
