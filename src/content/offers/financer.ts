import type { Offer } from '../types';

const pro = 'Professionnels';
const perso = 'Particuliers';

// Univers « Financer ». L'intermédiation en crédit est une activité réglementée, distincte du courtage en assurance :
// le statut du cabinet à l'ORIAS pour cette activité est à confirmer avant toute mise en ligne (voir site.legal.credit).

const NO_ADVANCE = "Aucun versement, de quelque nature que ce soit, ne peut être exigé d'un particulier avant l'obtention d'un ou plusieurs prêts d'argent.";
const COMMITMENT = 'Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.';

/** Mentions légales à afficher sur chaque page de crédit. */
const notices: Record<string, string[]> = {
  'credit-immobilier': [
    "L'emprunteur dispose d'un délai de réflexion de dix jours. L'achat est subordonné à l'obtention du prêt : s'il n'est pas obtenu, le vendeur doit rembourser les sommes versées.",
    NO_ADVANCE,
  ],
  'pret-personnel': [COMMITMENT, NO_ADVANCE],
  'regroupement-de-credits': ["La diminution du montant des mensualités entraîne l'allongement de la durée de remboursement et majore le coût total du crédit.", COMMITMENT, NO_ADVANCE],
};

export const creditNotices = (slug: string): string[] => notices[slug] ?? [COMMITMENT];

export const financer: Offer[] = [
  {
    slug: 'credit-professionnel',
    universe: 'financer',
    group: pro,
    name: 'Crédit professionnel',
    tagline: 'Investir, se développer, passer un cap',
    title: 'Crédit professionnel : financer son entreprise',
    description:
      "Crédit professionnel pour artisans, exploitants et dirigeants : investissement, trésorerie, développement. Un courtier présente votre dossier à plusieurs banques.",
    h1: 'Crédit professionnel',
    intro:
      "Un bon dossier de financement ne se résume pas à un taux. La durée, les garanties demandées et la souplesse du prêt comptent autant, et se négocient avant la signature.",
    audience: [
      'Artisans et entreprises du bâtiment qui investissent ou recrutent',
      'Domaines viticoles et exploitations agricoles',
      'Dirigeants de TPE et PME, commerçants, professions libérales',
    ],
    covers: [
      { name: "Le prêt d'investissement", text: "Pour financer des travaux, un aménagement, du matériel ou une croissance, sur une durée calée sur celle du bien financé." },
      { name: 'Le besoin de trésorerie', text: "Facilité de caisse, crédit de campagne ou prêt court terme, pour absorber un décalage entre dépenses et encaissements." },
      { name: 'Les garanties', text: "Caution du dirigeant, nantissement, garantie d'un organisme : ce que la banque demande, et ce qui peut se discuter." },
      { name: "L'assurance du prêt", text: "Décès, invalidité, arrêt de travail : elle protège l'entreprise et la famille du dirigeant, et se choisit librement." },
    ],
    checks: [
      "La durée du prêt correspond-elle à la durée d'usage de ce qu'il finance ?",
      'Quelle caution personnelle vous est demandée, et pour quel montant ?',
      'Le prêt peut-il être remboursé par anticipation, et à quel coût ?',
    ],
    role:
      "Nous montons le dossier avec vous et votre expert-comptable, le présentons à plusieurs établissements et comparons les propositions sur l'ensemble de leurs conditions. La décision d'accorder le prêt appartient à la banque.",
    faq: [
      { q: 'Quels documents faut-il réunir ?', a: "Les trois derniers bilans, un prévisionnel, les statuts, un extrait Kbis, les relevés de comptes récents et le détail du projet à financer." },
      { q: 'La banque peut-elle exiger ma caution personnelle ?', a: "Elle le demande fréquemment. Son montant et sa durée se négocient, et d'autres garanties peuvent parfois la remplacer ou la limiter." },
      { q: 'Pourquoi passer par un courtier ?', a: "Pour présenter le même dossier à plusieurs banques en une fois, et comparer les offres au-delà du seul taux." },
    ],
    simulator: 'credit',
    related: ['financer/financement-materiel', 'financer/immobilier-professionnel', 'proteger/assurance-emprunteur'],
  },
  {
    slug: 'financement-materiel',
    universe: 'financer',
    group: pro,
    name: 'Financement de matériel',
    tagline: 'Engins, véhicules, machines, cuverie',
    title: 'Financement de matériel professionnel : crédit ou crédit-bail',
    description:
      "Financer un engin de chantier, un tracteur, une machine à vendanger ou un véhicule : crédit classique, crédit-bail ou location. Comparatif par un courtier.",
    h1: 'Financement de matériel',
    intro:
      "Acheter à crédit, prendre en crédit-bail ou louer : les trois solutions n'ont ni le même coût, ni le même effet sur votre bilan et votre trésorerie.",
    audience: [
      'Entreprises du bâtiment : engins, utilitaires, outillage lourd',
      'Vignerons et agriculteurs : tracteurs, enjambeurs, machines à vendanger, cuverie',
      'Ateliers et entreprises qui renouvellent leur parc de machines',
    ],
    covers: [
      { name: 'Le crédit classique', text: "Vous êtes propriétaire du matériel dès l'achat et vous remboursez un emprunt." },
      { name: 'Le crédit-bail', text: "Vous payez des loyers et pouvez acheter le matériel en fin de contrat, pour une valeur fixée au départ." },
      { name: 'La location financière', text: "Vous utilisez le matériel sans en devenir propriétaire, et vous le rendez ou le renouvelez à l'échéance." },
      { name: "L'assurance du matériel", text: "Bris de machine, vol, incendie : l'organisme de financement l'exige presque toujours." },
    ],
    checks: [
      'Quel est le coût total de chaque solution, premier loyer et option d\'achat compris ?',
      "Qui supporte l'entretien et l'assurance pendant le contrat ?",
      'Que se passe-t-il si vous voulez changer de matériel avant la fin ?',
    ],
    role:
      "Nous comparons les solutions de financement de plusieurs établissements et, dans le même mouvement, l'assurance du matériel. Un seul interlocuteur pour les deux.",
    faq: [
      { q: 'Crédit ou crédit-bail : que choisir ?', a: "Le crédit convient au matériel que vous gardez longtemps. Le crédit-bail préserve la trésorerie et la capacité d'emprunt. Le choix dépend aussi de votre situation comptable et fiscale, à voir avec votre expert-comptable." },
      { q: "Peut-on financer du matériel d'occasion ?", a: "Oui, la plupart des établissements l'acceptent, avec une durée adaptée à l'âge du matériel." },
      { q: 'Faut-il un apport ?', a: "Pas toujours. Un premier loyer majoré ou un apport peut toutefois améliorer les conditions." },
    ],
    simulator: 'credit',
    related: ['proteger/engins-de-chantier', 'proteger/materiel-agricole', 'financer/credit-professionnel'],
  },
  {
    slug: 'immobilier-professionnel',
    universe: 'financer',
    group: pro,
    name: 'Immobilier professionnel',
    tagline: 'Locaux, atelier, chai, bâtiment agricole',
    title: 'Financement immobilier professionnel',
    description:
      "Financer l'achat ou la construction de locaux professionnels, d'un atelier, d'un chai ou d'un bâtiment agricole. Un courtier compare les banques pour vous.",
    h1: 'Immobilier professionnel',
    intro:
      "Acheter ses murs, construire un dépôt ou agrandir un chai engage l'entreprise pour quinze à vingt ans. Le montage compte autant que le prêt.",
    audience: [
      'Entreprises qui veulent cesser de payer un loyer',
      'Domaines et exploitations qui construisent ou agrandissent',
      'Dirigeants qui hésitent entre acheter par la société ou à titre personnel',
    ],
    covers: [
      { name: "L'acquisition ou la construction", text: "Prêt amortissable sur une durée longue, avec un éventuel différé pendant les travaux." },
      { name: 'Le montage', text: "Achat par la société d'exploitation ou par une société civile immobilière : les conséquences diffèrent pour le patrimoine du dirigeant." },
      { name: "L'apport et les garanties", text: "Part financée par vos fonds propres, hypothèque ou caution, garantie d'un organisme." },
      { name: 'Les assurances liées', text: "Assurance emprunteur, dommages-ouvrage en cas de construction, multirisque des locaux." },
    ],
    checks: [
      'Le montage choisi a-t-il été validé par votre expert-comptable et votre notaire ?',
      "Le prêt prévoit-il un différé pendant la durée des travaux ?",
      "L'assurance dommages-ouvrage est-elle prévue dans le budget ?",
    ],
    role:
      "Nous présentons le projet à plusieurs banques et coordonnons le financement avec les assurances qu'il impose. Le montage juridique et fiscal relève de votre notaire et de votre expert-comptable.",
    faq: [
      { q: 'Faut-il acheter par une société civile immobilière ?', a: "C'est fréquent, car cela sépare l'immobilier de l'exploitation. Le choix a des conséquences fiscales et patrimoniales qui se décident avec vos conseils." },
      { q: 'Quel apport prévoir ?', a: "Les banques demandent en général une part de fonds propres. Son niveau dépend du projet et de la solidité de l'entreprise." },
      { q: "Qu'est-ce que le crédit-bail immobilier ?", a: "Un organisme achète le bien et vous le loue, avec une option d'achat en fin de contrat. Il finance jusqu'à la totalité de l'opération, à un coût généralement supérieur." },
    ],
    simulator: 'credit',
    related: ['proteger/dommages-ouvrage', 'proteger/multirisque-professionnelle', 'proteger/assurance-emprunteur'],
  },
  {
    slug: 'credit-immobilier',
    universe: 'financer',
    group: perso,
    name: 'Crédit immobilier',
    tagline: 'Résidence principale, secondaire, locatif',
    title: 'Crédit immobilier : courtier à Chalon-sur-Saône',
    description:
      "Crédit immobilier pour l'achat d'une résidence ou un investissement locatif : capacité d'emprunt, durée, assurance. Un courtier compare les banques pour vous.",
    h1: 'Crédit immobilier',
    intro:
      "Le taux n'est qu'une ligne de l'offre de prêt. L'assurance, les frais de garantie, la possibilité de moduler les échéances et les pénalités de remboursement font le coût réel.",
    audience: [
      "Acheteurs d'une résidence principale ou secondaire",
      'Investisseurs locatifs',
      'Indépendants et dirigeants, dont les revenus sont plus difficiles à présenter à une banque',
    ],
    covers: [
      { name: "La capacité d'emprunt", text: "Elle dépend de vos revenus, de vos charges, de votre apport et des règles d'endettement appliquées par les banques." },
      { name: 'La durée et le taux', text: "Une durée plus longue allège la mensualité et augmente le coût total. Le bon équilibre dépend de votre projet." },
      { name: "L'assurance emprunteur", text: "Vous pouvez la choisir ailleurs que dans la banque qui prête, à garanties équivalentes." },
      { name: 'Les frais annexes', text: "Garantie, frais de dossier, frais de notaire : ils s'ajoutent au prix et se prévoient dès le départ." },
    ],
    checks: [
      "Comparez-vous les offres sur leur coût total, assurance et frais compris ?",
      'Les échéances peuvent-elles être modulées ou suspendues ?',
      'Quelles pénalités en cas de remboursement anticipé ou de revente ?',
    ],
    role:
      "Nous calculons votre capacité d'emprunt, préparons un dossier complet et le présentons à plusieurs banques. Nous comparons aussi l'assurance du prêt, qui pèse souvent autant que le taux.",
    faq: [
      { q: 'Quel est le taux d\'endettement maximal ?', a: "Les banques appliquent en règle générale un plafond d'environ 35 % des revenus, assurance comprise, avec une marge d'appréciation limitée." },
      { q: 'Un indépendant peut-il emprunter facilement ?', a: "Oui, à condition de présenter des bilans réguliers. La préparation du dossier fait la différence." },
      { q: 'Peut-on emprunter sans apport ?', a: "C'est plus difficile. Un apport couvrant au moins les frais est généralement attendu." },
    ],
    simulator: 'credit',
    related: ['proteger/assurance-emprunteur', 'financer/regroupement-de-credits', 'preparer/bilan-patrimonial'],
  },
  {
    slug: 'pret-personnel',
    universe: 'financer',
    group: perso,
    name: 'Prêt personnel',
    tagline: 'Travaux, véhicule, projet de famille',
    title: 'Prêt personnel : travaux, véhicule, projets',
    description:
      "Prêt personnel pour financer des travaux, un véhicule ou un projet : montant, durée, coût total. Un courtier compare les établissements de crédit pour vous.",
    h1: 'Prêt personnel',
    intro:
      "Un crédit à la consommation se compare sur une seule donnée : son coût total. Le taux annuel effectif global le résume, assurance facultative mise à part.",
    audience: [
      'Particuliers qui financent des travaux, un véhicule ou un équipement',
      'Familles face à une dépense importante et ponctuelle',
      'Emprunteurs qui veulent comparer avant de signer chez leur banque',
    ],
    covers: [
      { name: 'Le prêt affecté', text: "Lié à un achat précis : si la vente est annulée, le crédit l'est aussi." },
      { name: 'Le prêt non affecté', text: "Vous disposez librement de la somme, sans justificatif d'utilisation." },
      { name: 'Le coût total', text: "Intérêts, frais de dossier et, si vous la souscrivez, assurance : le taux annuel effectif global permet de comparer." },
      { name: 'Le droit de rétractation', text: "Vous disposez de quatorze jours après la signature pour renoncer, sans avoir à vous justifier." },
    ],
    checks: [
      'Le taux annuel effectif global est-il bien celui que vous comparez ?',
      "L'assurance proposée est-elle utile dans votre situation ?",
      'La mensualité reste-t-elle supportable si vos revenus baissent ?',
    ],
    role:
      "Nous comparons les propositions de plusieurs établissements et vérifions avec vous que la mensualité reste compatible avec votre budget.",
    faq: [
      { q: 'Quel montant peut-on emprunter ?', a: "Du petit montant à plusieurs dizaines de milliers d'euros. Le plafond du crédit à la consommation est fixé par la loi et évolue : nous vous indiquons celui en vigueur." },
      { q: "L'assurance est-elle obligatoire ?", a: "Non. Elle est facultative pour un crédit à la consommation, mais peut être demandée par le prêteur selon votre situation." },
      { q: 'Peut-on rembourser par anticipation ?', a: "Oui, à tout moment. Une indemnité limitée peut être demandée au-delà d'un certain montant remboursé." },
    ],
    simulator: 'credit',
    related: ['financer/regroupement-de-credits', 'financer/credit-immobilier', 'proteger/prevoyance'],
  },
  {
    slug: 'regroupement-de-credits',
    universe: 'financer',
    group: perso,
    name: 'Regroupement de crédits',
    tagline: 'Une seule mensualité, à quel prix ?',
    title: 'Regroupement de crédits : avantages et coût réel',
    description:
      "Regroupement de crédits : réunir plusieurs prêts en un seul pour alléger la mensualité. Fonctionnement, coût total, frais. Étude par un courtier.",
    h1: 'Regroupement de crédits',
    intro:
      "Regrouper ses crédits allège la mensualité en allongeant la durée. Le budget respire, mais le coût total augmente : l'opération se décide en connaissant les deux chiffres.",
    audience: [
      'Foyers dont les mensualités cumulées pèsent trop sur le budget',
      'Emprunteurs qui veulent retrouver une marge pour un nouveau projet',
      'Personnes dont la situation a changé : séparation, baisse de revenus, départ en retraite',
    ],
    covers: [
      { name: 'Le principe', text: "Un nouvel établissement rembourse vos crédits en cours et vous accorde un prêt unique, sur une durée plus longue." },
      { name: 'Avec ou sans immobilier', text: "Selon la part de crédit immobilier dans le total, l'opération relève des règles du crédit immobilier ou du crédit à la consommation." },
      { name: 'Les frais', text: "Indemnités de remboursement anticipé des anciens prêts, frais de dossier, frais de garantie : ils entrent dans le calcul." },
      { name: 'La trésorerie complémentaire', text: "Une somme peut être ajoutée pour un projet, ce qui augmente d'autant le capital emprunté." },
    ],
    checks: [
      'Connaissez-vous le coût total avant et après le regroupement ?',
      'Les frais sont-ils inclus dans la comparaison ?',
      "Les assurances des anciens prêts sont-elles reprises ou remplacées ?",
    ],
    role:
      "Nous chiffrons l'opération dans les deux sens : ce que vous gagnez chaque mois, et ce qu'elle vous coûte au total. Il nous arrive de déconseiller un regroupement.",
    faq: [
      { q: 'Le regroupement fait-il toujours économiser ?', a: "Non. Il réduit la mensualité, pas le coût : en allongeant la durée, le total des intérêts augmente le plus souvent." },
      { q: 'Peut-on regrouper des crédits de natures différentes ?', a: "Oui : crédit immobilier, prêts personnels, crédits renouvelables et parfois certaines dettes." },
      { q: 'Combien de temps prend une étude ?', a: "Quelques semaines, le temps de réunir les tableaux d'amortissement et d'obtenir les décomptes de remboursement des prêts en cours." },
    ],
    simulator: 'regroupement-credits',
    related: ['financer/credit-immobilier', 'financer/pret-personnel', 'proteger/assurance-emprunteur'],
  },
];
