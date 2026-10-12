import type { Offer } from '../types';

const group = 'Vous et vos proches';

export const protegerPersonnes: Offer[] = [
  {
    slug: 'prevoyance',
    universe: 'proteger',
    group,
    name: 'Prévoyance',
    tagline: 'Vos revenus en cas de coup dur',
    title: 'Prévoyance du dirigeant et des indépendants',
    description:
      "Prévoyance des dirigeants, artisans et indépendants : arrêt de travail, invalidité, décès. Comparatif par un courtier indépendant à Chalon-sur-Saône.",
    h1: 'Prévoyance',
    intro:
      "Un indépendant en arrêt perd l'essentiel de son revenu en quelques semaines, alors que ses charges continuent. La prévoyance verse un revenu de remplacement, puis une rente ou un capital si la situation dure.",
    audience: [
      'Artisans, commerçants, exploitants agricoles et professions libérales',
      'Dirigeants de société, salariés ou non de leur entreprise',
      "Chefs de famille dont le foyer dépend d'un seul revenu",
    ],
    covers: [
      { name: "L'arrêt de travail", text: "Des indemnités journalières qui complètent celles du régime obligatoire, après un délai de franchise." },
      { name: "L'invalidité", text: "Une rente si vous ne pouvez plus exercer, totalement ou partiellement." },
      { name: 'Le décès', text: "Un capital pour vos proches, une rente pour le conjoint et les enfants." },
      { name: 'Les frais professionnels', text: "En option : la prise en charge des charges fixes de l'entreprise pendant votre arrêt." },
    ],
    checks: [
      "L'invalidité est-elle appréciée au regard de votre métier, ou de toute activité ?",
      'Les affections du dos et les troubles psychiques sont-ils couverts sans condition d\'hospitalisation ?',
      'Les indemnités sont-elles forfaitaires ou limitées à votre perte réelle de revenu ?',
    ],
    role:
      "Nous partons de ce que verse réellement votre régime obligatoire, mesurons l'écart avec vos besoins et comparons les contrats sur leurs définitions, pas seulement sur leur prix.",
    faq: [
      { q: 'Que verse mon régime obligatoire en cas d\'arrêt ?', a: "Cela dépend de votre statut et de vos revenus déclarés. Pour beaucoup d'indépendants, l'indemnité est plafonnée et limitée dans le temps." },
      { q: 'Les cotisations sont-elles déductibles ?', a: "Pour les travailleurs non salariés, elles peuvent l'être dans certaines limites. Les prestations sont alors imposables." },
      { q: 'Forfaitaire ou indemnitaire : que choisir ?', a: "Un contrat forfaitaire verse le montant prévu quoi qu'il arrive. Un contrat indemnitaire se limite à la perte constatée, ce qui pénalise les revenus irréguliers." },
    ],
    simulator: 'prevoyance',
    related: ['proteger/homme-cle', 'proteger/mutuelle-sante', 'proteger/assurance-emprunteur'],
  },
  {
    slug: 'mutuelle-sante',
    universe: 'proteger',
    group,
    name: 'Mutuelle santé',
    tagline: 'Indépendants, familles, retraités',
    title: 'Mutuelle santé : indépendants, familles et retraités',
    description:
      "Complémentaire santé pour indépendants, familles et retraités : hospitalisation, optique, dentaire, dépassements. Comparatif par un courtier à Chalon-sur-Saône.",
    h1: 'Mutuelle santé',
    intro:
      "Une bonne complémentaire ne rembourse pas tout : elle rembourse bien ce dont vous avez réellement besoin. Nous partons de vos dépenses de santé, pas d'une grille standard.",
    audience: [
      'Travailleurs non salariés et leur famille',
      'Retraités qui quittent le contrat de leur entreprise',
      'Particuliers qui paient pour des garanties dont ils ne se servent pas',
    ],
    covers: [
      { name: "L'hospitalisation", text: "Honoraires, chambre particulière, forfait journalier." },
      { name: 'Les soins courants', text: "Consultations, y compris les dépassements d'honoraires des spécialistes." },
      { name: "L'optique et le dentaire", text: "Au-delà du panier sans reste à charge : montures, verres, prothèses, implants." },
      { name: 'Les services', text: "Tiers payant, téléconsultation, assistance à domicile." },
    ],
    checks: [
      'Les pourcentages affichés incluent-ils le remboursement de la Sécurité sociale ?',
      "Existe-t-il des délais d'attente avant de bénéficier de certaines garanties ?",
      'Comment la cotisation évolue-t-elle avec l\'âge ?',
    ],
    role:
      "Nous traduisons les tableaux de garanties en euros remboursés sur vos dépenses habituelles, puis nous comparons plusieurs assureurs sur cette base.",
    faq: [
      { q: 'Peut-on changer de mutuelle en cours d\'année ?', a: "Oui, après un an de contrat, à tout moment et sans frais. Le nouvel assureur se charge de la résiliation." },
      { q: 'Un indépendant peut-il déduire sa cotisation ?', a: "Dans certaines limites, pour les travailleurs non salariés, avec un contrat éligible." },
      { q: 'Que deviennent les garanties au départ en retraite ?', a: "Vous pouvez conserver le contrat de votre entreprise à des conditions encadrées, mais un contrat individuel est souvent mieux ajusté." },
    ],
    related: ['proteger/prevoyance', 'proteger/sante-prevoyance-collective', 'preparer/dependance'],
  },
  {
    slug: 'assurance-emprunteur',
    universe: 'proteger',
    group,
    name: 'Assurance emprunteur',
    tagline: 'Prêts immobiliers et professionnels',
    title: 'Assurance emprunteur : changer et économiser',
    description:
      "Assurance de prêt immobilier et professionnel : changer d'assurance à tout moment, garanties équivalentes, économies. Étude par un courtier à Chalon-sur-Saône.",
    h1: 'Assurance emprunteur',
    intro:
      "L'assurance représente une part importante du coût d'un crédit. Vous pouvez la choisir ailleurs que dans votre banque, et en changer à tout moment, à garanties équivalentes.",
    audience: [
      'Emprunteurs immobiliers, en cours de prêt ou en projet',
      'Dirigeants qui financent des locaux, du matériel ou une reprise',
      'Vignerons et agriculteurs qui empruntent pour du foncier ou des équipements',
    ],
    covers: [
      { name: 'Le décès et la perte d\'autonomie', text: "Le capital restant dû est remboursé à la banque." },
      { name: "L'invalidité", text: "Prise en charge totale ou partielle des échéances selon le taux d'invalidité." },
      { name: "L'incapacité de travail", text: "Les mensualités sont réglées pendant l'arrêt, après la franchise." },
      { name: 'La quotité', text: "La part du prêt assurée sur chaque emprunteur, à répartir selon les revenus du foyer." },
    ],
    checks: [
      "Les garanties du nouveau contrat sont-elles équivalentes à celles exigées par la banque ?",
      'Votre métier et vos déplacements sont-ils couverts sans exclusion ?',
      "La cotisation est-elle calculée sur le capital initial ou sur le capital restant dû ?",
    ],
    role:
      "Nous reprenons la fiche d'exigences de votre banque, comparons les contrats et gérons la demande de substitution jusqu'à l'avenant au prêt.",
    faq: [
      { q: 'Peut-on vraiment changer à tout moment ?', a: "Oui, pour les prêts immobiliers, sans frais ni pénalité, à condition de présenter des garanties équivalentes." },
      { q: 'Y a-t-il toujours un questionnaire de santé ?', a: "Non. Il est supprimé pour certains prêts immobiliers, sous conditions de montant assuré et d'âge en fin de prêt." },
      { q: 'La banque peut-elle refuser ?', a: "Seulement si les garanties ne sont pas équivalentes, et elle doit motiver son refus par écrit." },
    ],
    simulator: 'emprunteur',
    related: ['proteger/prevoyance', 'preparer/assurance-vie', 'proteger/homme-cle'],
  },
  {
    slug: 'auto-habitation',
    universe: 'proteger',
    group,
    name: 'Auto et habitation',
    tagline: 'Les assurances du quotidien',
    title: 'Assurance auto et habitation : comparatif par un courtier',
    description:
      "Assurance auto, habitation et propriétaire non occupant : un courtier compare plus de 87 compagnies pour les particuliers de la région de Chalon-sur-Saône.",
    h1: 'Assurance auto et habitation',
    intro:
      "Ces contrats se signent vite et se relisent rarement. Les revoir permet souvent de mieux se couvrir pour le même budget, surtout quand la situation du foyer a changé.",
    audience: [
      'Particuliers, propriétaires ou locataires',
      'Propriétaires bailleurs',
      'Clients professionnels du cabinet qui veulent un seul interlocuteur',
    ],
    covers: [
      { name: "L'habitation", text: "Incendie, dégâts des eaux, vol, catastrophes naturelles, responsabilité civile de la famille." },
      { name: "L'automobile", text: "Du tiers à la formule tous risques, avec assistance et protection du conducteur." },
      { name: 'Le bien loué', text: "Propriétaire non occupant, loyers impayés, protection juridique du bailleur." },
      { name: 'Les biens particuliers', text: "Objets de valeur, cave à vin, dépendances, piscine, véhicule de collection." },
    ],
    checks: [
      'Le capital mobilier correspond-il à ce que vous possédez vraiment ?',
      "Les dépendances et aménagements extérieurs sont-ils déclarés ?",
      'La protection du conducteur est-elle suffisante en cas d\'accident responsable ?',
    ],
    role:
      "Nous reprenons vos contrats, signalons les écarts avec votre situation et comparons les assureurs du réseau à garanties identiques.",
    faq: [
      { q: 'Quand peut-on résilier ?', a: "À tout moment après la première année, sans frais. Le nouvel assureur effectue les démarches." },
      { q: 'Un locataire doit-il s\'assurer ?', a: "Oui, au minimum pour les risques locatifs. Le bailleur peut exiger une attestation chaque année." },
      { q: 'Pourquoi passer par un courtier pour ces contrats ?', a: "Pour comparer plusieurs assureurs en une fois et garder le même interlocuteur en cas de sinistre." },
    ],
    related: ['proteger/assurance-emprunteur', 'proteger/mutuelle-sante', 'proteger/protection-juridique'],
  },
];
