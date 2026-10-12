import type { Guide } from './types';

export const guidesPatrimoine: Guide[] = [
  {
    slug: 'prevoyance-dirigeant-statut',
    theme: 'Dirigeant',
    title: 'Prévoyance du dirigeant : ce que change votre statut',
    description:
      "Gérant majoritaire, président de société, entrepreneur individuel : ce que verse chaque régime en cas d'arrêt de travail, et comment compléter.",
    h1: 'Prévoyance du dirigeant : ce que change votre statut',
    summary: "Deux familles de statuts, deux protections très différentes en cas d'arrêt, d'invalidité ou de décès.",
    date: '2026-10-11',
    sections: [
      {
        heading: 'Deux familles de dirigeants',
        paragraphs: [
          "Le travailleur non salarié (entrepreneur individuel, gérant majoritaire de SARL, associé de société agricole) cotise à un régime d'indépendants. Le dirigeant assimilé salarié (président de SAS, gérant minoritaire) cotise au régime général, sans assurance chômage.",
          "Le second paie davantage de cotisations et dispose d'une protection de base plus proche de celle d'un salarié. Aucun des deux n'est protégé comme un cadre d'une grande entreprise.",
        ],
      },
      {
        heading: 'En cas d\'arrêt de travail',
        paragraphs: [
          "Les indemnités journalières sont calculées sur les revenus déclarés, plafonnées et versées après un délai de carence. Un dirigeant qui se rémunère peu, ou surtout en dividendes, perçoit des indemnités très faibles.",
        ],
      },
      {
        heading: 'En cas d\'invalidité ou de décès',
        paragraphs: ["La pension d'invalidité des régimes obligatoires couvre rarement les charges d'un foyer. Le capital décès est modeste. C'est sur ces deux risques, les plus lourds, que l'écart est le plus grand."],
      },
      {
        heading: 'Construire le complément',
        paragraphs: ['Un contrat de prévoyance se règle sur quatre paramètres.'],
        list: [
          'Le montant des indemnités journalières et la franchise',
          "La définition de l'invalidité : appréciée selon votre profession, ou selon toute activité",
          'Le capital et les rentes versés en cas de décès',
          "La prise en charge des charges fixes de l'entreprise pendant l'arrêt",
        ],
      },
    ],
    takeaways: [
      'Vos droits dépendent de votre statut et de vos revenus déclarés.',
      "L'invalidité et le décès sont les risques les moins bien couverts.",
      'Comparez les définitions avant les tarifs.',
    ],
    offers: ['proteger/prevoyance', 'proteger/homme-cle'],
    simulator: 'prevoyance',
    faq: [
      { q: 'Les dividendes ouvrent-ils des droits ?', a: "Dans la plupart des cas, non. Une rémunération faible complétée par des dividendes se traduit par une protection sociale faible." },
      { q: 'La prévoyance peut-elle être payée par la société ?', a: "Oui, selon le statut du dirigeant et le type de contrat. Le traitement social et fiscal est à valider avec votre expert-comptable." },
    ],
  },
  {
    slug: 'homme-cle-entreprise',
    theme: 'Dirigeant',
    title: 'Assurance homme-clé : protéger son entreprise',
    description:
      "À quoi sert une assurance homme-clé, qui assurer, comment calculer le capital et ce que l'assureur demandera.",
    h1: "Assurance homme-clé : protéger l'entreprise de l'absence de son pilier",
    summary: "Le principe, le calcul du capital et les erreurs de montage les plus fréquentes.",
    date: '2026-10-12',
    sections: [
      {
        heading: 'Le principe',
        paragraphs: [
          "L'entreprise souscrit un contrat sur la tête d'une personne dont elle dépend. Si cette personne décède ou devient invalide, l'entreprise reçoit un capital.",
          "Ce capital n'est pas destiné à la famille : il sert à l'entreprise pour tenir, se réorganiser et rassurer ses partenaires.",
        ],
      },
      {
        heading: 'Qui est concerné ?',
        paragraphs: ["Pas seulement le dirigeant."],
        list: ['Le fondateur qui détient la relation avec les clients', 'Le vigneron qui vinifie seul', 'Le chef de chantier sans qui les équipes ne tournent pas', "Le commercial qui apporte l'essentiel du chiffre d'affaires"],
      },
      {
        heading: 'Calculer le capital',
        paragraphs: [
          "L'assureur n'accepte pas un montant arbitraire. Il doit correspondre à un préjudice économique : la marge que l'entreprise perdrait pendant le temps nécessaire au remplacement, le coût du recrutement et, le cas échéant, les emprunts que la banque pourrait rendre exigibles.",
        ],
      },
      {
        heading: 'Les erreurs de montage',
        paragraphs: ["Trois erreurs reviennent souvent."],
        list: [
          "Désigner la famille du dirigeant comme bénéficiaire : ce n'est plus un contrat homme-clé",
          'Ne jamais réviser le capital alors que l\'entreprise a grandi',
          "Confondre ce contrat avec la garantie croisée entre associés, qui finance le rachat des parts",
        ],
      },
    ],
    takeaways: [
      "Le bénéficiaire est l'entreprise.",
      'Le capital se justifie par les comptes.',
      'Le contrat se révise quand l\'entreprise change de taille.',
    ],
    offers: ['proteger/homme-cle', 'preparer/protection-des-associes'],
    simulator: 'homme-cle',
    faq: [
      { q: 'La banque peut-elle l\'exiger ?', a: "Oui, fréquemment, en garantie d'un prêt professionnel important." },
      { q: 'Y a-t-il des formalités médicales ?', a: "Oui, proportionnées au capital et à l'âge de la personne assurée." },
    ],
  },
  {
    slug: 'per-ou-assurance-vie',
    theme: 'Épargne et retraite',
    title: 'PER ou assurance-vie : lequel choisir ?',
    description:
      "PER ou assurance-vie : fiscalité à l'entrée et à la sortie, disponibilité, transmission. Les critères pour choisir, et pourquoi on combine souvent les deux.",
    h1: 'PER ou assurance-vie : lequel choisir ?',
    summary: "Deux logiques fiscales opposées, trois critères pour trancher.",
    date: '2026-10-13',
    sections: [
      {
        heading: 'Deux logiques inverses',
        paragraphs: [
          "Le PER donne un avantage à l'entrée : les versements réduisent le revenu imposable. En contrepartie, l'épargne est bloquée jusqu'à la retraite et imposée à la sortie.",
          "L'assurance-vie ne donne rien à l'entrée. Elle reste disponible à tout moment, et sa fiscalité s'allège avec le temps.",
        ],
      },
      {
        heading: 'Premier critère : votre tranche d\'imposition',
        paragraphs: [
          "Plus votre tranche marginale est élevée, plus la déduction du PER est intéressante. Elle l'est surtout si vos revenus, et donc votre tranche, doivent baisser à la retraite.",
        ],
      },
      {
        heading: 'Deuxième critère : la disponibilité',
        paragraphs: ["Une somme dont vous pourriez avoir besoin avant la retraite n'a pas sa place sur un PER. L'achat de la résidence principale et certains accidents de la vie sont les seules portes de sortie anticipée."],
      },
      {
        heading: 'Troisième critère : la transmission',
        paragraphs: ["Les deux enveloppes permettent de désigner des bénéficiaires. Leurs régimes fiscaux au décès diffèrent, et dépendent de l'âge du titulaire. Le point mérite d'être regardé au cas par cas."],
      },
      {
        heading: "Dans quel ordre s'y prendre",
        paragraphs: ["Dans la plupart des dossiers, la question n'est pas de choisir mais d'ordonner."],
        list: [
          "D'abord une épargne de précaution, disponible immédiatement",
          'Ensuite une assurance-vie, ouverte tôt pour prendre date',
          'Enfin un PER, dimensionné sur votre plafond de déduction réel',
        ],
      },
    ],
    takeaways: [
      "Le PER se justifie par l'impôt économisé aujourd'hui.",
      "L'assurance-vie se justifie par sa souplesse.",
      'Les deux se complètent plus souvent qu\'ils ne s\'opposent.',
    ],
    offers: ['preparer/per', 'preparer/assurance-vie'],
    simulator: 'per',
    faq: [
      { q: 'Peut-on transférer une assurance-vie vers un PER ?', a: "Non, ce sont deux contrats distincts. On peut en revanche racheter l'un pour alimenter l'autre, après en avoir mesuré le coût fiscal." },
      { q: 'Le PER convient-il à un jeune actif ?', a: "Rarement en priorité : la tranche d'imposition est souvent basse et le besoin de disponibilité élevé." },
    ],
  },
  {
    slug: 'clause-beneficiaire',
    theme: 'Transmission',
    title: 'Clause bénéficiaire : la rédiger et la tenir à jour',
    description:
      "La clause bénéficiaire d'une assurance-vie : clause standard, clause sur mesure, erreurs fréquentes et moments où il faut la relire.",
    h1: 'Clause bénéficiaire : la rédiger et la tenir à jour',
    summary: "Quelques lignes qui décident de qui recevra le capital. Elles méritent mieux qu'une case cochée.",
    date: '2026-10-14',
    sections: [
      {
        heading: 'À quoi sert-elle ?',
        paragraphs: [
          "Elle désigne les personnes qui recevront le capital de votre contrat à votre décès, et dans quel ordre. Sans clause valable, le capital réintègre la succession et perd son régime propre.",
        ],
      },
      {
        heading: 'La clause standard et ses limites',
        paragraphs: [
          "La formule habituelle désigne le conjoint, à défaut les enfants, à défaut les héritiers. Elle convient à une famille simple.",
          "Elle devient inadaptée dans une famille recomposée, pour un couple non marié, en présence d'un enfant vulnérable ou lorsque l'on souhaite avantager un petit-enfant.",
        ],
      },
      {
        heading: 'Les erreurs fréquentes',
        paragraphs: ["Quatre erreurs se retrouvent dans les contrats que nous relisons."],
        list: [
          'Désigner une personne par son seul nom, sans prévoir son décès avant le vôtre',
          'Écrire « mon conjoint » et oublier de relire la clause après un divorce',
          "Ne pas prévoir la représentation : les enfants d'un bénéficiaire décédé",
          'Ne prévenir personne de l\'existence du contrat',
        ],
      },
      {
        heading: 'Quand la relire ?',
        paragraphs: ["À chaque événement familial : mariage, pacs, naissance, séparation, décès d'un proche. Et à chaque étape patrimoniale importante, en lien avec votre notaire."],
      },
    ],
    takeaways: [
      'Une clause se rédige, elle ne se coche pas.',
      'Prévoyez toujours des bénéficiaires de second rang.',
      'Relisez-la à chaque changement familial.',
    ],
    offers: ['preparer/transmission', 'preparer/assurance-vie'],
    simulator: 'transmission',
    faq: [
      { q: 'Peut-on modifier la clause à tout moment ?', a: "Oui, tant que le bénéficiaire ne l'a pas acceptée dans les formes prévues par la loi." },
      { q: 'Peut-on la déposer chez un notaire ?', a: "Oui. Le contrat renvoie alors au testament ou à l'acte déposé, ce qui assure la confidentialité." },
    ],
  },
  {
    slug: 'courtier-agent-difference',
    theme: 'Comprendre',
    title: 'Courtier, agent général, mutuelle : qui fait quoi ?',
    description:
      "Courtier, agent général, salarié d'une compagnie : pour qui travaille chacun, comment il est rémunéré, et ce que cela change pour l'assuré.",
    h1: 'Courtier, agent général, mutuelle : qui fait quoi ?',
    summary: "Trois façons de distribuer l'assurance, et une question simple pour s'y retrouver : qui représente qui ?",
    date: '2026-10-15',
    sections: [
      {
        heading: 'Qui représente qui ?',
        paragraphs: [
          "L'agent général représente une compagnie, dont il distribue les contrats. Le conseiller d'une mutuelle ou d'une banque est son salarié. Le courtier, lui, est le mandataire de son client : il cherche pour lui, auprès de plusieurs assureurs.",
        ],
      },
      {
        heading: 'Ce que cela change',
        paragraphs: ["La différence se voit à trois moments."],
        list: [
          'À la souscription : le courtier compare plusieurs contrats, l\'agent propose ceux de sa compagnie',
          "En cours de contrat : le courtier peut déplacer un contrat chez un autre assureur sans que vous changiez d'interlocuteur",
          'Au sinistre : le courtier défend votre dossier auprès de l\'assureur',
        ],
      },
      {
        heading: 'Comment un courtier est-il rémunéré ?',
        paragraphs: [
          "Le plus souvent par une commission incluse dans la cotisation et versée par l'assureur. Il peut aussi facturer des honoraires. La réglementation l'oblige à vous indiquer la nature de sa rémunération avant la signature.",
        ],
      },
      {
        heading: 'Comment vérifier un intermédiaire ?',
        paragraphs: ["Tout intermédiaire en assurance doit être immatriculé au registre de l'ORIAS, consultable gratuitement en ligne. Le numéro figure sur ses documents et sur son site."],
      },
    ],
    takeaways: [
      'Le courtier travaille pour son client.',
      'Sa rémunération doit vous être indiquée.',
      'Son immatriculation se vérifie en quelques secondes.',
    ],
    offers: ['proteger/assurance-btp', 'preparer/bilan-patrimonial'],
    faq: [
      { q: 'Un courtier coûte-t-il plus cher ?', a: "Non, en règle générale : sa commission est comprise dans la cotisation, comme celle de tout autre distributeur." },
      { q: 'Un courtier travaille-t-il avec tous les assureurs ?', a: "Non. Il travaille avec ceux auprès desquels il a un accord, directement ou par l'intermédiaire d'un réseau." },
    ],
  },
  {
    slug: 'declarer-un-sinistre',
    theme: 'Comprendre',
    title: 'Sinistre : les bons réflexes dans les premières heures',
    description:
      "Que faire après un sinistre professionnel : délais de déclaration, preuves à conserver, erreurs à éviter et rôle du courtier.",
    h1: 'Sinistre : les bons réflexes dans les premières heures',
    summary: "Ce qu'il faut faire, ce qu'il ne faut pas faire, et dans quels délais.",
    date: '2026-10-16',
    sections: [
      {
        heading: 'Avant tout : limiter les dégâts',
        paragraphs: ["Mettez les personnes en sécurité, coupez l'eau ou l'électricité, bâchez, déplacez ce qui peut l'être. Les mesures de sauvegarde sont attendues de l'assuré et prises en charge par le contrat."],
      },
      {
        heading: 'Conserver les preuves',
        paragraphs: ["Avant de nettoyer ou de réparer, constituez votre dossier."],
        list: [
          'Photos et vidéos, vues d\'ensemble et de détail',
          'Factures, bons de livraison, inventaire des biens endommagés',
          'Coordonnées des témoins et des tiers impliqués',
          'Dépôt de plainte en cas de vol ou de vandalisme',
        ],
      },
      {
        heading: 'Déclarer dans les délais',
        paragraphs: [
          "Le contrat fixe un délai de déclaration, court : quelques jours ouvrés, encore moins en cas de vol. Prévenez votre courtier dès que possible, même si vous n'avez pas encore tous les éléments.",
        ],
      },
      {
        heading: 'Ce qu\'il ne faut pas faire',
        paragraphs: ["Trois erreurs compliquent l'indemnisation."],
        list: [
          "Jeter les biens endommagés avant le passage de l'expert",
          'Reconnaître sa responsabilité par écrit auprès d\'un tiers',
          'Engager des réparations définitives sans accord de l\'assureur',
        ],
      },
    ],
    takeaways: [
      'Sécuriser, photographier, déclarer : dans cet ordre.',
      "Ne rien jeter avant l'expertise.",
      'Appeler son courtier tout de suite.',
    ],
    offers: ['proteger/rc-pro-batiment', 'proteger/multirisque-professionnelle'],
    faq: [
      { q: 'Que fait le courtier pendant un sinistre ?', a: "Il vous aide à déclarer, suit l'expertise, vérifie l'application du contrat et intervient auprès de l'assureur en cas de désaccord." },
      { q: 'Peut-on contester le rapport de l\'expert ?', a: "Oui. Vous pouvez demander une contre-expertise, dont les frais sont parfois pris en charge par le contrat." },
    ],
  },
];
