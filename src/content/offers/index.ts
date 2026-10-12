import type { Offer, Universe } from '../types';
import { financer } from './financer';
import { preparer } from './preparer';
import { protegerAgricole } from './proteger-agricole';
import { protegerBtp } from './proteger-btp';
import { protegerEntreprise } from './proteger-entreprise';
import { protegerPersonnes } from './proteger-personnes';

export const offers: Offer[] = [
  ...protegerBtp,
  ...protegerAgricole,
  ...protegerEntreprise,
  ...protegerPersonnes,
  ...preparer,
  ...financer,
];

interface UniverseInfo {
  name: string;
  path: string;
  tagline: string;
  intro: string;
  /** Libellé du lien vers la page d'aiguillage. */
  allLabel: string;
  /** Intitulés du gabarit d'offre, accordés à l'univers. */
  labels: { audience: string; coversEyebrow: string; covers: string };
}

export const universes: Record<Universe, UniverseInfo> = {
  proteger: {
    name: 'Protéger',
    path: '/proteger',
    tagline: "Aujourd'hui : votre activité, vos revenus, vos proches",
    intro:
      "Les assurances qui permettent à une entreprise, une exploitation ou un foyer de tenir quand survient un sinistre, un arrêt de travail ou un litige.",
    allLabel: 'Toutes les protections',
    labels: { audience: "À qui s'adresse-t-elle ?", coversEyebrow: 'Les garanties', covers: 'Ce que le contrat prévoit' },
  },
  preparer: {
    name: 'Préparer',
    path: '/preparer',
    tagline: 'Demain : votre épargne, votre retraite, votre transmission',
    intro:
      "Les contrats d'assurance qui servent à épargner, à compléter une retraite et à transmettre, pour le dirigeant comme pour le particulier.",
    allLabel: 'Toutes les solutions',
    labels: { audience: "À qui s'adresse cette solution ?", coversEyebrow: 'Le fonctionnement', covers: 'Ce que le contrat prévoit' },
  },
  financer: {
    name: 'Financer',
    path: '/financer',
    tagline: 'Vos projets : crédit professionnel, immobilier, regroupement',
    intro:
      "Le financement d'un investissement, d'un achat immobilier ou d'un projet personnel, et le regroupement de crédits existants. Nous présentons votre dossier à plusieurs établissements.",
    allLabel: 'Tous les financements',
    labels: { audience: "À qui s'adresse ce financement ?", coversEyebrow: 'Le fonctionnement', covers: 'Comment il se construit' },
  },
};

export const offerPath = (offer: Offer) => `/${offer.universe}/${offer.slug}`;

/** Retrouve une offre à partir d'une référence « univers/slug ». */
export function getOffer(ref: string): Offer {
  const [universe, slug] = ref.split('/');
  const offer = offers.find((item) => item.universe === universe && item.slug === slug);
  if (!offer) throw new Error(`Offre inconnue : ${ref}`);
  return offer;
}

export function offersOf(universe: Universe): Offer[] {
  return offers.filter((offer) => offer.universe === universe);
}

/** Offres d'un univers, regroupées par sous-groupe, dans l'ordre de déclaration. */
export function groupedOffers(universe: Universe): { group: string; offers: Offer[] }[] {
  const groups: { group: string; offers: Offer[] }[] = [];
  for (const offer of offersOf(universe)) {
    const existing = groups.find((item) => item.group === offer.group);
    if (existing) existing.offers.push(offer);
    else groups.push({ group: offer.group, offers: [offer] });
  }
  return groups;
}
