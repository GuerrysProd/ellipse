import type { Metadata } from 'next';
import { site } from '@/content/site';

/** Balises d'une page : titre, description, adresse canonique et aperçu de partage. */
export function pageMetadata(input: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  // Le nom du cabinet n'est ajouté que si le titre reste sous la longueur affichée par les moteurs.
  const branded = `${input.title} | ${site.name}`;
  const title = input.title.includes(site.name) || branded.length > 62 ? input.title : branded;
  return {
    title: { absolute: title },
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: { type: 'website', locale: 'fr_FR', siteName: site.name, title, description: input.description, url: input.path },
    ...(input.noindex && { robots: { index: false, follow: true } }),
  };
}
