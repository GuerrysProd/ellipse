// Photographies du site. Elles proviennent d'Unsplash (licence gratuite, usage commercial autorisé)
// et sont créditées sur la page des mentions légales. À remplacer par des photos du cabinet dès qu'elles existent.

export interface Photo {
  /** Identifiant Unsplash, tel qu'il apparaît dans l'adresse de l'image. */
  id: string;
  alt: string;
  credit: string;
  /** Point d'intérêt de l'image, pour les recadrages (valeur CSS object-position). */
  focus?: string;
}

const photo = (id: string, alt: string, credit: string, focus?: string): Photo => ({ id, alt, credit, focus });

export const photos = {
  chalonQuais: photo('photo-1757511720353-d8938dcf1bf2', 'Façades anciennes au bord de la Saône, à Chalon-sur-Saône', 'nika tchokhonelidze', 'center 62%'),
  chalonCathedrale: photo('photo-1650390456116-d33b6d515cbb', 'Cathédrale de Chalon-sur-Saône', 'Rayyân', 'center 30%'),
  chalonColombages: photo('photo-1669301864282-577fac5dc4d4', 'Maison à colombages du centre ancien de Chalon-sur-Saône', 'snap wander'),
  saone: photo('photo-1611431380333-548944660ee4', 'La Saône bordée d\'arbres par temps calme', 'Adrien Fu'),
  villageBourgogne: photo('photo-1635935261763-e73db48d9037', 'Village de Bourgogne au bord d\'une rivière', 'Mr Xerty'),
  vignoble: photo('photo-1625848782606-0db52d93190c', 'Coteaux de vignes en Bourgogne sous un ciel nuageux', 'Peter Herrmann'),
  chateauVignes: photo('photo-1589819482236-b583fe65f1d5', 'Château entouré de vignes en Bourgogne', 'Baudouin Wisselmann'),
  vignesCouchant: photo('photo-1755090249373-dfbf3a462f6c', 'Vignoble au coucher du soleil', 'Elodie Debard'),
  vendange: photo('photo-1605673349837-1d83a7740e30', 'Mains gantées coupant une grappe de raisin noir', 'Vindemia Winery'),
  machineVendange: photo('photo-1625740905704-9f1045f98bab', 'Machine à vendanger au travail dans les rangs de vigne', 'Zac Edmonds'),
  cave: photo('photo-1701622669938-fa4e09a1f1fe', 'Cave voûtée et rangées de fûts de chêne', 'Kristina Kutleša'),
  futs: photo('photo-1566467021572-37fbefe8fcb2', 'Fûts de vin empilés dans un chai', 'Svetlana Gumerova'),
  chantier: photo('photo-1504307651254-35680f356dfd', 'Ouvriers sur un chantier de gros œuvre, vus du dessus', 'Etienne Girardet'),
  echafaudage: photo('photo-1664662568348-24b1482b6354', 'Bâtiment en construction entouré d\'échafaudages', 'Thatselby'),
  betonniere: photo('photo-1647735282077-c12699af40be', 'Deux chefs de chantier devant des camions toupies', 'Remy Gieling'),
  macon: photo('photo-1773601103174-306ffa23d441', 'Maçon montant un mur de briques', 'AJOY DAS'),
  couvreur: photo('photo-1726589004565-bedfba94d3a2', 'Couvreur au travail sur un toit de tuiles', 'Christer Lässman'),
  pelle: photo('photo-1630288214173-a119cf823388', 'Pelle mécanique sur un chantier de terrassement', 'Billy Freeman'),
  charolaises: photo('photo-1786035752588-16cd11122a52', 'Vaches blanches dans un pré', 'Pierre Goiffon'),
  tracteurChamp: photo('photo-1615811361523-6bd03d7748e7', 'Tracteur dans un champ, vu du ciel', 'Chris Ensminger'),
  tracteurCouchant: photo('photo-1606739211185-2c846d734a6d', 'Tracteur travaillant un champ au coucher du soleil', 'Ethereal Optics'),
  atelier: photo('photo-1545262722-9e0d80a0bc01', 'Artisan debout dans son atelier', 'Alev Takil'),
  dirigeant: photo('photo-1789757112859-7a907ef6719c', 'Chef d\'entreprise souriant, bras croisés', 'Carlos Gil'),
  conseil: photo('photo-1551434678-e076c223a692', 'Deux personnes échangeant devant un ordinateur', 'Tim van der Kuip'),
  bureau: photo('photo-1560264418-c4445382edbc', 'Équipe au travail dans un bureau', 'Arlington Research'),
  famille: photo('photo-1758687126877-b37052a20a4d', 'Famille réunie sur un canapé', 'Vitaly Gariev'),
  retraite: photo('photo-1625690987114-86f5af994b49', 'Couple de retraités marchant bras dessus bras dessous', 'Hector Reyes'),
  promenade: photo('photo-1614526261628-295d39158f96', 'Couple marchant sur un chemin de campagne dans la brume', 'Wedding Dreamz'),
  beauneToits: photo('photo-1678199075520-3b3463427e8f', 'Toit de tuiles vernissées des Hospices de Beaune', 'Gerard Avril'),
  pommard: photo('photo-1592229338506-d4631f32b2b5', 'Panneau viticole et vélos au bord des vignes de la Côte de Beaune', 'Ian Taylor'),
  dijon: photo('photo-1773678401653-6722e9026d22', 'Place historique de Dijon vue du ciel', 'Daniel Tischer'),
  dijonRue: photo('photo-1650612549964-ad9eb6e343b0', 'Rue ancienne de Dijon', 'Zhu Yunxiao'),
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export const photoSrc = (item: Photo) => `https://images.unsplash.com/${item.id}`;

const byGroup: Record<string, PhotoKey> = {
  'Bâtiment et travaux publics': 'chantier',
  'Vigne et agriculture': 'vignoble',
  'Entreprise et dirigeant': 'atelier',
  'Vous et vos proches': 'famille',
  'Épargne et retraite': 'retraite',
  Entreprise: 'conseil',
  Transmission: 'beauneToits',
  Professionnels: 'atelier',
  Particuliers: 'chalonColombages',
};

const byOffer: Record<string, PhotoKey> = {
  decennale: 'echafaudage',
  'rc-pro-batiment': 'macon',
  'dommages-ouvrage': 'betonniere',
  'engins-de-chantier': 'pelle',
  'assurance-viticole': 'chateauVignes',
  'assurance-agricole': 'tracteurChamp',
  'aleas-climatiques': 'vignesCouchant',
  'multirisque-exploitation': 'tracteurCouchant',
  'stocks-de-vin': 'cave',
  'materiel-agricole': 'machineVendange',
  'assurance-elevage': 'charolaises',
  'perte-exploitation': 'bureau',
  'flotte-automobile': 'betonniere',
  'protection-juridique': 'conseil',
  'cyber-risques': 'bureau',
  'responsabilite-dirigeant': 'dirigeant',
  'sante-prevoyance-collective': 'bureau',
  'assurance-emprunteur': 'chalonColombages',
  'auto-habitation': 'villageBourgogne',
  'assurance-vie': 'promenade',
  'retraite-dirigeant': 'dirigeant',
  'epargne-projets': 'famille',
  'immobilier-en-assurance-vie': 'dijonRue',
  'tresorerie-entreprise': 'bureau',
  'protection-des-associes': 'atelier',
  dependance: 'retraite',
  'bilan-patrimonial': 'conseil',
  'credit-professionnel': 'dirigeant',
  'financement-materiel': 'pelle',
  'immobilier-professionnel': 'chantier',
  'credit-immobilier': 'chalonColombages',
  'pret-personnel': 'famille',
  'regroupement-de-credits': 'conseil',
};

export const offerPhoto = (slug: string, group: string): Photo => photos[byOffer[slug] ?? byGroup[group] ?? 'vignoble'];

export const profilePhotos: Record<string, PhotoKey> = {
  'artisan-btp': 'echafaudage',
  vigneron: 'vendange',
  agriculteur: 'charolaises',
  dirigeant: 'atelier',
  independant: 'dirigeant',
  particulier: 'famille',
};

export const tradePhotos: Record<string, PhotoKey> = {
  macon: 'macon',
  couvreur: 'couvreur',
  'plombier-chauffagiste': 'echafaudage',
  electricien: 'chantier',
  'platrier-peintre': 'echafaudage',
  menuisier: 'atelier',
  terrassier: 'pelle',
};

export const sectorPhotos: Record<string, PhotoKey> = {
  'chalon-sur-saone': 'chalonCathedrale',
  'cote-chalonnaise': 'vignoble',
  beaune: 'beauneToits',
  dijon: 'dijon',
  macon: 'vignesCouchant',
  tournus: 'saone',
  'le-creusot-montceau': 'atelier',
  autun: 'villageBourgogne',
  louhans: 'tracteurChamp',
  charolais: 'charolaises',
  jura: 'chateauVignes',
  'bourg-en-bresse': 'tracteurCouchant',
};

export const themePhotos: Record<string, PhotoKey> = {
  Bâtiment: 'chantier',
  'Vigne et agriculture': 'vignesCouchant',
  Dirigeant: 'atelier',
  'Épargne et retraite': 'promenade',
  Transmission: 'beauneToits',
  Comprendre: 'conseil',
};

const byGuide: Record<string, PhotoKey> = {
  'assurance-decennale-obligations': 'chantier',
  'lire-attestation-decennale': 'echafaudage',
  'changer-assureur-decennale': 'betonniere',
  'dommages-ouvrage-qui-doit-souscrire': 'macon',
  'assurance-recolte-vigne': 'vignesCouchant',
  'assurer-cave-stocks-vin': 'cave',
  'prevoyance-dirigeant-statut': 'atelier',
  'homme-cle-entreprise': 'dirigeant',
  'per-ou-assurance-vie': 'promenade',
  'clause-beneficiaire': 'beauneToits',
  'courtier-agent-difference': 'conseil',
  'declarer-un-sinistre': 'pelle',
};

export const guidePhoto = (slug: string, theme: string): Photo => photos[byGuide[slug] ?? themePhotos[theme] ?? 'conseil'];
