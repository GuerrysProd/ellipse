export interface Faq {
  q: string;
  a: string;
}

export type Universe = 'proteger' | 'preparer' | 'financer';

/** Une page d'offre. Toutes suivent le même gabarit (src/components/templates/OfferTemplate.tsx). */
export interface Offer {
  slug: string;
  universe: Universe;
  /** Sous-groupe affiché dans le menu et sur la page d'aiguillage. */
  group: string;
  /** Intitulé court : menu, cartes, fil d'Ariane. */
  name: string;
  /** Accroche d'une ligne : menu et cartes. */
  tagline: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Mention « obligatoire » pour les assurances imposées par la loi. */
  mandatory?: boolean;
  audience: string[];
  covers: { name: string; text: string }[];
  /** Ce qu'il faut vérifier avant de signer. */
  checks: string[];
  role: string;
  faq: Faq[];
  /** Simulateur vers lequel pointe le bouton principal. */
  simulator?: string;
  /** Offres voisines, au format « univers/slug ». */
  related: string[];
}

export interface Profile {
  slug: string;
  name: string;
  tagline: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  stakes: { name: string; text: string }[];
  /** Offres recommandées, au format « univers/slug ». */
  offers: string[];
  simulators: string[];
  faq: Faq[];
}

export interface Trade {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Activités à faire figurer sur l'attestation. */
  activities: string[];
  risks: { name: string; text: string }[];
  offers: string[];
  faq: Faq[];
}

export interface Sector {
  slug: string;
  name: string;
  department: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  towns: string[];
  /** Ce qui caractérise le tissu économique local. */
  context: string;
  offers: string[];
  profiles: string[];
  faq: Faq[];
}

export interface Guide {
  slug: string;
  theme: 'Bâtiment' | 'Vigne et agriculture' | 'Dirigeant' | 'Épargne et retraite' | 'Transmission' | 'Comprendre';
  title: string;
  description: string;
  h1: string;
  summary: string;
  /** Date de publication au format AAAA-MM-JJ. */
  date: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
  takeaways: string[];
  offers: string[];
  simulator?: string;
  faq: Faq[];
}

/** Page éditoriale simple : cabinet, pages légales. */
export interface ContentPage {
  slug: string;
  name: string;
  tagline?: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { heading: string; paragraphs?: string[]; list?: string[]; todo?: string }[];
  faq?: Faq[];
}
