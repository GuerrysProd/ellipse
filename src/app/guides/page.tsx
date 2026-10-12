import { PhotoCardGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { guidePath, guides, guideThemes } from '@/content/guides';
import { guidePhoto } from '@/content/images';
import { pageMetadata } from '@/lib/seo';
import { slugify } from '@/lib/text';

export const metadata = pageMetadata({
  title: "Guides pratiques d'assurance",
  description: "Des guides clairs sur la décennale, l'assurance récolte, la prévoyance du dirigeant, le PER, l'assurance-vie et la transmission.",
  path: '/guides',
});

export default function Page() {
  const themes = guideThemes.filter((theme) => guides.some((guide) => guide.theme === theme));
  return (
    <>
      <PageHero crumbs={[{ name: 'Guides', path: '/guides' }]} eyebrow="S'informer" title="Guides pratiques" intro="Des réponses complètes aux questions que l'on nous pose le plus souvent, écrites pour être comprises sans dictionnaire.">
        <ul className="flex flex-wrap gap-2">
          {themes.map((theme) => (
            <li key={theme}>
              <a href={`#${slugify(theme)}`} className="btn-glass min-h-10 px-4 py-2 text-sm">
                {theme}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>
      {themes.map((theme, index) => (
        <Section key={theme} id={slugify(theme)} eyebrow="Guides" title={theme} muted={index % 2 === 1}>
          <PhotoCardGrid columns={4} items={guides.filter((guide) => guide.theme === theme).map((guide) => ({ href: guidePath(guide.slug), title: guide.title, text: guide.summary, photo: guidePhoto(guide.slug, guide.theme) }))} />
        </Section>
      ))}
      <CtaBand source="guides" />
    </>
  );
}
