import type { CardItem } from '@/components/Cards';
import { guidePath, guides } from '@/content/guides';
import { getOffer, offerPath } from '@/content/offers';
import { profilePath, profiles } from '@/content/profiles';
import { getSimulator, simulatorPath } from '@/content/simulators';

/** Cartes construites à partir de références de contenu, pour le maillage entre pages. */
export const offerCards = (refs: readonly string[]): CardItem[] =>
  refs.map((ref) => {
    const offer = getOffer(ref);
    return { href: offerPath(offer), title: offer.name, text: offer.tagline, tag: offer.mandatory ? 'Obligatoire' : undefined };
  });

export const simulatorCards = (slugs: readonly string[]): CardItem[] =>
  slugs.map((slug) => {
    const simulator = getSimulator(slug);
    return { href: simulatorPath(slug), title: simulator.name, text: simulator.tagline, tag: 'Simulateur' };
  });

export const profileCards = (slugs: readonly string[]): CardItem[] =>
  slugs.map((slug) => {
    const profile = profiles.find((item) => item.slug === slug);
    if (!profile) throw new Error(`Profil inconnu : ${slug}`);
    return { href: profilePath(slug), title: profile.name, text: profile.tagline };
  });

/** Guides qui citent l'offre donnée. */
export const guideCardsFor = (offerRef: string): CardItem[] =>
  guides.filter((guide) => guide.offers.includes(offerRef)).map((guide) => ({ href: guidePath(guide.slug), title: guide.title, text: guide.summary, tag: 'Guide' }));
