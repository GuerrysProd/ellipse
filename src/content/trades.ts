import type { Trade } from './types';

const baseOffers = ['proteger/decennale', 'proteger/rc-pro-batiment', 'proteger/flotte-automobile', 'proteger/prevoyance'];

/** Pages par métier du bâtiment : ce que l'attestation doit mentionner, et les risques propres au métier. */
export const trades: Trade[] = [
  {
    slug: 'macon',
    name: 'Maçon',
    title: 'Assurance décennale maçon : étude par un courtier',
    description:
      "Assurance décennale et responsabilité civile du maçon : activités à déclarer, risques du gros œuvre, pièces à fournir. Courtier à Chalon-sur-Saône.",
    h1: 'Assurance du maçon',
    intro:
      "Le gros œuvre porte la structure : c'est le métier où un désordre coûte le plus cher. Les assureurs regardent de près les techniques employées et la taille des chantiers.",
    activities: ['Maçonnerie et béton armé', 'Fondations superficielles', 'Dallages et chapes', 'Enduits de façade', 'Ouverture de murs porteurs, reprise en sous-œuvre', 'Assainissement et petits terrassements'],
    risks: [
      { name: 'Fissures et tassements', text: "Les désordres de structure relèvent directement de la décennale et se révèlent parfois des années après." },
      { name: 'Interventions sur l\'existant', text: "Ouvrir un mur porteur engage votre responsabilité sur tout le bâtiment : la garantie des existants est indispensable." },
      { name: 'Engins et échafaudages', text: "Bétonnière, mini-pelle, échafaudage : du matériel exposé au vol et aux accidents." },
    ],
    offers: [...baseOffers, 'proteger/engins-de-chantier'],
    faq: [
      { q: 'La reprise en sous-œuvre est-elle couverte d\'office ?', a: "Non. C'est une activité à déclarer expressément, que tous les assureurs n'acceptent pas." },
      { q: 'Je pose aussi du carrelage : dois-je le déclarer ?', a: "Oui. Toute activité exercée, même accessoire, doit figurer sur l'attestation." },
    ],
  },
  {
    slug: 'couvreur',
    name: 'Couvreur, charpentier',
    title: 'Assurance décennale couvreur et charpentier',
    description:
      "Assurance décennale du couvreur et du charpentier : étanchéité, travail en hauteur, photovoltaïque. Étude comparative par un courtier à Chalon-sur-Saône.",
    h1: 'Assurance du couvreur et du charpentier',
    intro:
      "L'eau est la première cause de sinistre dans le bâtiment. La couverture est donc tarifée à part, et la description de vos techniques compte autant que votre chiffre d'affaires.",
    activities: ['Couverture en tuiles, ardoises, zinc, bac acier', 'Charpente bois traditionnelle et industrielle', 'Zinguerie', 'Étanchéité de toitures-terrasses', 'Pose de fenêtres de toit', 'Pose de panneaux photovoltaïques'],
    risks: [
      { name: 'Infiltrations', text: "Un défaut d'étanchéité dégrade l'ouvrage et son contenu : les montants montent vite." },
      { name: 'Travail en hauteur', text: "Le risque d'accident du travail est élevé : la faute inexcusable de l'employeur doit être garantie." },
      { name: 'Photovoltaïque', text: "Une activité à part, avec des exigences de qualification, que beaucoup de contrats excluent par défaut." },
    ],
    offers: [...baseOffers, 'proteger/sante-prevoyance-collective'],
    faq: [
      { q: "L'étanchéité est-elle comprise dans la couverture ?", a: "Non. L'étanchéité de toiture-terrasse est une activité distincte, à déclarer séparément." },
      { q: 'Puis-je poser du photovoltaïque avec ma décennale actuelle ?', a: "Seulement si l'activité est inscrite sur votre attestation, souvent sous condition de qualification." },
    ],
  },
  {
    slug: 'plombier-chauffagiste',
    name: 'Plombier, chauffagiste',
    title: 'Assurance décennale plombier chauffagiste',
    description:
      "Assurance décennale du plombier et du chauffagiste : dégâts des eaux, pompes à chaleur, gaz. Étude comparative par un courtier à Chalon-sur-Saône.",
    h1: 'Assurance du plombier et du chauffagiste',
    intro:
      "Vos sinistres sont fréquents et rarement spectaculaires : une fuite derrière une cloison, une chaudière mal réglée. Les énergies renouvelables ont ajouté des activités que tous les contrats ne couvrent pas.",
    activities: ['Plomberie sanitaire', 'Chauffage et chaudières gaz, fioul, bois', 'Pompes à chaleur et climatisation', 'Chauffe-eau solaire et thermodynamique', 'Ventilation', 'Entretien et dépannage'],
    risks: [
      { name: 'Dégâts des eaux', text: "Ils touchent l'ouvrage, le mobilier du client et parfois les voisins : responsabilité civile et décennale se complètent." },
      { name: 'Énergies renouvelables', text: "Pompes à chaleur, géothermie, solaire : des activités à déclarer, souvent liées à une qualification." },
      { name: 'Travaux par point chaud', text: "La soudure est une cause classique d'incendie sur chantier : vérifiez les conditions du contrat." },
    ],
    offers: baseOffers,
    faq: [
      { q: "L'entretien de chaudières relève-t-il de la décennale ?", a: "Non, il relève de la responsabilité civile professionnelle. D'où l'intérêt d'avoir les deux." },
      { q: 'La géothermie est-elle assurable ?', a: "Oui, auprès de certains assureurs, à condition de la déclarer et de justifier de la compétence." },
    ],
  },
  {
    slug: 'electricien',
    name: 'Électricien',
    title: 'Assurance décennale électricien',
    description:
      "Assurance décennale de l'électricien : incendie, domotique, bornes de recharge, photovoltaïque. Étude comparative par un courtier à Chalon-sur-Saône.",
    h1: "Assurance de l'électricien",
    intro:
      "Le métier est bien accepté par les assureurs, mais il s'élargit vite : bornes de recharge, domotique, photovoltaïque. Chaque extension doit apparaître sur l'attestation.",
    activities: ['Installations électriques courants forts', 'Courants faibles, domotique, alarmes', 'Bornes de recharge pour véhicules', 'Chauffage électrique', 'Photovoltaïque', 'Dépannage et mise en conformité'],
    risks: [
      { name: 'Incendie', text: "Un défaut d'installation peut détruire le bâtiment : c'est le sinistre majeur du métier." },
      { name: 'Nouvelles activités', text: "Les bornes de recharge et le photovoltaïque exigent qualification et déclaration." },
      { name: 'Dommages immatériels', text: "Une panne qui arrête l'activité d'un client professionnel coûte davantage que la réparation." },
    ],
    offers: baseOffers,
    faq: [
      { q: 'Faut-il une qualification pour les bornes de recharge ?', a: "Oui au-delà d'une certaine puissance, et l'assureur la demande en général pour garantir l'activité." },
      { q: 'Les alarmes et la vidéosurveillance sont-elles couvertes ?', a: "Ce sont des activités de courants faibles, à déclarer. La responsabilité en cas de défaillance mérite une attention particulière." },
    ],
  },
  {
    slug: 'platrier-peintre',
    name: 'Plâtrier, peintre',
    title: 'Assurance décennale plâtrier et peintre',
    description:
      "Assurance décennale du plâtrier, du plaquiste et du peintre : isolation, façade, revêtements. Étude comparative par un courtier à Chalon-sur-Saône.",
    h1: 'Assurance du plâtrier et du peintre',
    intro:
      "La peinture intérieure seule relève rarement de la décennale. Tout change dès que vous isolez, posez des cloisons ou traitez une façade.",
    activities: ['Plâtrerie, plaques de plâtre, cloisons', 'Isolation thermique par l\'intérieur', 'Isolation thermique par l\'extérieur', 'Peinture intérieure et extérieure', 'Ravalement et imperméabilisation de façade', 'Revêtements de sols et de murs'],
    risks: [
      { name: "Isolation par l'extérieur", text: "Une activité à fort enjeu, qui touche à l'étanchéité de la façade et exige une déclaration précise." },
      { name: 'Dommages chez le client', text: "Taches, mobilier abîmé, sols rayés : des sinistres fréquents en site occupé." },
      { name: 'Travaux de rénovation énergétique', text: "Ils supposent souvent une qualification, que l'assureur vérifie." },
    ],
    offers: baseOffers,
    faq: [
      { q: 'Un peintre a-t-il besoin d\'une décennale ?', a: "Oui dès qu'il réalise des travaux qui touchent à l'étanchéité ou à l'isolation : façade, imperméabilisation, isolation." },
      { q: "L'isolation par l'extérieur est-elle difficile à assurer ?", a: "Elle est plus sélective. L'expérience et la qualification font la différence." },
    ],
  },
  {
    slug: 'menuisier',
    name: 'Menuisier',
    title: 'Assurance décennale menuisier',
    description:
      "Assurance décennale du menuisier : fenêtres, escaliers, agencement, atelier. Étude comparative par un courtier à Chalon-sur-Saône.",
    h1: 'Assurance du menuisier',
    intro:
      "Entre l'atelier et le chantier, le menuisier cumule deux risques : celui du fabricant et celui du poseur. Les deux doivent être couverts.",
    activities: ['Menuiseries extérieures : fenêtres, portes, volets', 'Menuiseries intérieures et escaliers', 'Agencement et cuisines', 'Parquets et terrasses bois', 'Vérandas et pergolas', 'Fabrication en atelier'],
    risks: [
      { name: 'Étanchéité des menuiseries extérieures', text: "Infiltrations d'air et d'eau : une cause fréquente de mise en jeu de la décennale." },
      { name: "L'atelier", text: "Machines, stocks de bois, poussières : le risque d'incendie est élevé et appelle une multirisque adaptée." },
      { name: 'Vérandas', text: "Une activité à part entière, proche de la construction, à déclarer séparément." },
    ],
    offers: [...baseOffers, 'proteger/multirisque-professionnelle'],
    faq: [
      { q: 'La pose de cuisines relève-t-elle de la décennale ?', a: "En général non, sauf travaux touchant au bâti. Elle relève de la responsabilité civile professionnelle." },
      { q: 'Mon atelier est-il couvert par ma décennale ?', a: "Non. Les locaux, les machines et les stocks relèvent d'une multirisque professionnelle." },
    ],
  },
  {
    slug: 'terrassier',
    name: 'Terrassier, travaux publics',
    title: 'Assurance terrassement et travaux publics',
    description:
      "Assurance des entreprises de terrassement et de travaux publics : réseaux enterrés, engins, responsabilité. Étude par un courtier à Chalon-sur-Saône.",
    h1: 'Assurance du terrassier et des travaux publics',
    intro:
      "Votre capital roule et creuse. Le sinistre type n'est pas un désordre dix ans après, mais un réseau arraché ou un engin renversé le jour même.",
    activities: ['Terrassement et fouilles', 'Voirie et réseaux divers', 'Assainissement individuel et collectif', 'Démolition', 'Enrochement et soutènement', 'Aménagements extérieurs'],
    risks: [
      { name: 'Réseaux enterrés', text: "Câble, conduite de gaz, fibre : un arrachement engage votre responsabilité, parfois pour des montants très élevés." },
      { name: 'Engins', text: "Bris, renversement, vol : un parc qui représente l'essentiel de la valeur de l'entreprise." },
      { name: 'Ouvrages de soutènement', text: "Des ouvrages qui relèvent de la décennale et que les assureurs examinent avec soin." },
    ],
    offers: ['proteger/engins-de-chantier', 'proteger/rc-pro-batiment', 'proteger/decennale', 'proteger/flotte-automobile'],
    faq: [
      { q: 'Le terrassement relève-t-il de la décennale ?', a: "Oui lorsqu'il prépare ou constitue un ouvrage. Les réseaux et les soutènements en font partie." },
      { q: 'Les dommages aux réseaux sont-ils couverts ?', a: "Par la responsabilité civile, à condition d'avoir respecté les démarches de déclaration préalable aux travaux." },
    ],
  },
];

export const tradePath = (slug: string) => `/metiers/${slug}`;
