import { cabinetPages, cabinetPath } from './cabinet';
import { groupedOffers, offerPath, universes } from './offers';
import { profilePath, profiles } from './profiles';
import { sectorPath, sectors } from './sectors';
import type { Universe } from './types';

export interface NavLink {
  href: string;
  label: string;
  hint?: string;
}

export interface NavMenu {
  id: string;
  label: string;
  /** Page d'aiguillage de l'univers. */
  href: string;
  allLabel: string;
  groups: { title?: string; links: NavLink[] }[];
}

const offerGroups = (universe: Universe) =>
  groupedOffers(universe).map(({ group, offers }) => ({
    title: group,
    links: offers.map((offer) => ({ href: offerPath(offer), label: offer.name, hint: offer.tagline })),
  }));

const universeMenu = (universe: Universe): NavMenu => ({ id: universe, label: universes[universe].name, href: universes[universe].path, allLabel: universes[universe].allLabel, groups: offerGroups(universe) });

export const menus: NavMenu[] = [
  universeMenu('proteger'),
  universeMenu('preparer'),
  universeMenu('financer'),
  {
    id: 'vous-etes',
    label: 'Vous êtes',
    href: '/vous-etes',
    allLabel: 'Tous les profils',
    groups: [
      { links: profiles.map((profile) => ({ href: profilePath(profile.slug), label: profile.name, hint: profile.tagline })) },
      { title: 'Par métier', links: [{ href: '/metiers', label: 'Métiers du bâtiment', hint: 'Maçon, couvreur, plombier, électricien…' }] },
    ],
  },
  {
    id: 'cabinet',
    label: 'Le cabinet',
    href: '/cabinet',
    allLabel: 'Découvrir le cabinet',
    groups: [
      { links: cabinetPages.map((page) => ({ href: cabinetPath(page.slug), label: page.name, hint: page.tagline })) },
      {
        title: 'Nous joindre',
        links: [
          { href: '/secteurs', label: "Zones d'intervention", hint: 'Chalon-sur-Saône et 100 km alentour' },
          { href: '/contact', label: 'Contact', hint: 'Téléphone, e-mail, message' },
        ],
      },
    ],
  },
  {
    id: 'informer',
    label: "S'informer",
    href: '/guides',
    allLabel: 'Tous les guides',
    groups: [
      {
        links: [
          { href: '/guides', label: 'Guides pratiques', hint: 'Bâtiment, vigne, dirigeant, épargne' },
          { href: '/faq', label: 'Questions fréquentes', hint: 'Les réponses courtes' },
          { href: '/lexique', label: 'Lexique', hint: "Les mots de l'assurance, en clair" },
          { href: '/sinistre', label: 'En cas de sinistre', hint: 'Les bons réflexes' },
        ],
      },
    ],
  },
];

/** Les trois actions mises en avant sur tout le site. */
export const actions = {
  simulate: { href: '/simulateurs', label: 'Faire une simulation' },
  callback: { href: '/etre-rappele', label: 'Être rappelé' },
  booking: { href: '/rendez-vous', label: 'Prendre rendez-vous' },
} as const;

export const legalLinks: NavLink[] = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/confidentialite', label: 'Confidentialité' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/reclamations', label: 'Réclamations' },
];

export const sectorLinks: NavLink[] = sectors.map((sector) => ({ href: sectorPath(sector.slug), label: sector.name }));
