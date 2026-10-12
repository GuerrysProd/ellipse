import {
  BadgeCheck,
  Banknote,
  Beef,
  BookA,
  BookOpen,
  Briefcase,
  Building,
  Building2,
  Calculator,
  Car,
  CircleHelp,
  ClipboardList,
  CloudHail,
  Coins,
  Compass,
  Construction,
  Droplets,
  Factory,
  FileSearch,
  Gavel,
  Gift,
  Grape,
  Hammer,
  HandCoins,
  HandHeart,
  Handshake,
  HardHat,
  HeartPulse,
  Home,
  Hourglass,
  KeyRound,
  Landmark,
  Layers,
  LineChart,
  MapPin,
  Network,
  PaintRoller,
  Percent,
  Phone,
  Pickaxe,
  PiggyBank,
  Ruler,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Sprout,
  Star,
  Stethoscope,
  Store,
  Sunset,
  Tractor,
  TrendingDown,
  Truck,
  Umbrella,
  User,
  Users,
  Wallet,
  Warehouse,
  Wheat,
  Wine,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export type { LucideIcon };

/** Icône de chaque page, par identifiant. Une page sans entrée reçoit l'icône par défaut de sa famille. */
export const offerIcons: Record<string, LucideIcon> = {
  'assurance-btp': HardHat,
  decennale: Building2,
  'rc-pro-batiment': ShieldCheck,
  'dommages-ouvrage': Home,
  'tous-risques-chantier': Construction,
  'engins-de-chantier': Pickaxe,
  'assurance-viticole': Grape,
  'assurance-agricole': Wheat,
  'aleas-climatiques': CloudHail,
  'multirisque-exploitation': Warehouse,
  'stocks-de-vin': Wine,
  'materiel-agricole': Tractor,
  'assurance-elevage': Beef,
  'multirisque-professionnelle': Store,
  'perte-exploitation': TrendingDown,
  'flotte-automobile': Truck,
  'protection-juridique': Gavel,
  'cyber-risques': ShieldAlert,
  'responsabilite-dirigeant': Scale,
  'homme-cle': KeyRound,
  'sante-prevoyance-collective': Users,
  prevoyance: Umbrella,
  'mutuelle-sante': HeartPulse,
  'assurance-emprunteur': Landmark,
  'auto-habitation': Car,
  'assurance-vie': Sprout,
  per: PiggyBank,
  'retraite-dirigeant': Sunset,
  'epargne-projets': Wallet,
  'immobilier-en-assurance-vie': Building,
  'contrat-de-capitalisation': Coins,
  'tresorerie-entreprise': Banknote,
  'protection-des-associes': Handshake,
  transmission: Gift,
  dependance: HandHeart,
  'bilan-patrimonial': ClipboardList,
  'credit-professionnel': Briefcase,
  'financement-materiel': Truck,
  'immobilier-professionnel': Factory,
  'credit-immobilier': Home,
  'pret-personnel': HandCoins,
  'regroupement-de-credits': Layers,
};

export const simulatorIcons: Record<string, LucideIcon> = {
  decennale: Building2,
  'couverture-btp': HardHat,
  recolte: Grape,
  'couverture-exploitation': Tractor,
  'perte-exploitation': TrendingDown,
  'homme-cle': KeyRound,
  prevoyance: Umbrella,
  emprunteur: Landmark,
  per: PiggyBank,
  'assurance-vie': LineChart,
  retraite: Hourglass,
  transmission: Gift,
  'bilan-patrimonial': Compass,
  tresorerie: Banknote,
  credit: Percent,
  'regroupement-credits': Layers,
};

export const profileIcons: Record<string, LucideIcon> = {
  'artisan-btp': HardHat,
  vigneron: Grape,
  agriculteur: Tractor,
  dirigeant: Briefcase,
  independant: User,
  particulier: Home,
};

export const tradeIcons: Record<string, LucideIcon> = {
  macon: Hammer,
  couvreur: Home,
  'plombier-chauffagiste': Droplets,
  electricien: Zap,
  'platrier-peintre': PaintRoller,
  menuisier: Ruler,
  terrassier: Pickaxe,
};

export const cabinetIcons: Record<string, LucideIcon> = {
  demarche: Compass,
  'qui-sommes-nous': Landmark,
  'yoann-janet': User,
  'compagnies-partenaires': Network,
  remuneration: Coins,
  'avis-clients': Star,
  partenaires: Handshake,
};

/** Icônes des liens de menu et de pied de page qui ne sont ni des offres ni des pages du cabinet. */
export const linkIcons: Record<string, LucideIcon> = {
  '/metiers': Wrench,
  '/secteurs': MapPin,
  '/contact': Phone,
  '/guides': BookOpen,
  '/faq': CircleHelp,
  '/lexique': BookA,
  '/sinistre': Siren,
  '/audit-gratuit': FileSearch,
  '/simulateurs': Calculator,
};

export const defaultIcons = { offer: ShieldCheck, simulator: Calculator, profile: User, trade: Hammer, sector: MapPin, cabinet: BadgeCheck, guide: BookOpen, health: Stethoscope, industry: Factory };

/** Icône d'un lien interne, déduite de son adresse. */
export function iconForHref(href: string): LucideIcon | undefined {
  const [, section, slug] = href.split('/');
  if (!slug) return linkIcons[href];
  if (section === 'proteger' || section === 'preparer' || section === 'financer') return offerIcons[slug];
  if (section === 'simulateurs') return simulatorIcons[slug];
  if (section === 'vous-etes') return profileIcons[slug];
  if (section === 'metiers') return tradeIcons[slug];
  if (section === 'cabinet') return cabinetIcons[slug];
  if (section === 'secteurs') return MapPin;
  if (section === 'guides') return BookOpen;
  return undefined;
}
