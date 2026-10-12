// Source unique des informations du cabinet : affichage, données structurées, mentions de pied de page.
// Les valeurs connues proviennent du site actuel (octobre 2026). Les champs vides sont à obtenir du cabinet
// et s'affichent dans un encadré « À compléter » tant qu'ils ne sont pas renseignés.

export const site = {
  name: 'Ellipse Solutions',
  legalName: 'Ellipse Solutions 360',
  url: 'https://www.ellipsefrance.com',
  tagline: "Protéger aujourd'hui, préparer demain",
  description:
    "Courtier indépendant en assurance à Chalon-sur-Saône : artisans du bâtiment, vignerons, agriculteurs, dirigeants et particuliers, dans un rayon de 100 km.",

  founder: {
    name: 'Yoann Janet',
    role: 'Courtier en assurance, fondateur du cabinet',
    slug: 'yoann-janet',
  },

  phone: { display: '06 14 70 75 20', e164: '+33614707520' },
  email: 'yoann.janet@ellipsefrance.com',
  bookingUrl: 'https://calendly.com/yoann-janet-ellipsefrance',

  // À COMPLÉTER : adresse affichable et horaires. Omis des données structurées tant qu'ils sont vides.
  address: { streetAddress: '', postalCode: '', addressLocality: 'Chalon-sur-Saône', addressCountry: 'FR' },
  hours: '',

  baseCity: 'Chalon-sur-Saône',
  radiusKm: 100,
  areaServed: ['Saône-et-Loire', "Côte-d'Or", 'Jura', 'Ain'],

  legal: {
    form: 'SASU au capital de 1 000 €',
    siret: '927 775 502 00010',
    rcs: '927 775 502 R.C.S. Chalon-sur-Saône',
    orias: '24005501',
    oriasCategory: 'courtier en assurance',
    acpr: "Autorité de contrôle prudentiel et de résolution (ACPR), 4 place de Budapest, CS 92459, 75436 Paris Cedex 09",
    mediator: "La Médiation de l'Assurance, TSA 50110, 75441 Paris Cedex 09, www.mediation-assurance.org",
    // À COMPLÉTER : catégorie d'immatriculation à l'ORIAS pour l'intermédiation en crédit (univers « Financer »).
    creditStatus: '',
    // À COMPLÉTER : hébergeur du site et directeur de la publication.
    host: '',
    publisher: 'Yoann Janet',
  },

  insurersCount: 87,
  network: 'NousAssurons',

  social: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/ellipse-solutions360' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61556134926553' },
    { name: 'Instagram', url: 'https://www.instagram.com/ellipsesolutionsfrance/' },
  ],
} as const;

/** Tant que le site n'est pas validé, il demande aux moteurs de ne pas l'indexer. */
export const isIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === 'true';

export const showTodos = process.env.NEXT_PUBLIC_SHOW_TODOS !== 'false';
