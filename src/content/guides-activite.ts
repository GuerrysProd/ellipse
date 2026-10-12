import type { Guide } from './types';

export const guidesActivite: Guide[] = [
  {
    slug: 'assurance-decennale-obligations',
    theme: 'Bâtiment',
    title: "Assurance décennale : ce que la loi impose à l'artisan",
    description:
      "Qui doit souscrire une assurance décennale, pour quels travaux, à quel moment, et que risque-t-on sans elle. Le point pour les artisans du bâtiment.",
    h1: "Assurance décennale : ce que la loi impose à l'artisan",
    summary: "Qui est concerné, pour quels travaux, à quel moment, et ce que l'on risque à s'en passer.",
    date: '2026-10-05',
    sections: [
      {
        heading: 'Qui doit être assuré ?',
        paragraphs: [
          "Toute personne dont la responsabilité décennale peut être engagée : entrepreneur, artisan, micro-entrepreneur, constructeur de maisons, mais aussi architecte ou maître d'œuvre. Le statut juridique et le chiffre d'affaires ne changent rien.",
          "Le critère est la nature des travaux. Dès que vous participez à la construction d'un ouvrage ou à des travaux qui touchent à sa structure, à son étanchéité ou à ses équipements indissociables, vous êtes concerné.",
        ],
      },
      {
        heading: 'Que couvre-t-elle exactement ?',
        paragraphs: ["Les dommages qui apparaissent dans les dix ans suivant la réception et qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination."],
        list: ['Une fissure qui traverse un mur porteur', "Une toiture qui laisse entrer l'eau", 'Un plancher chauffant qui ne chauffe pas', "Un défaut d'isolation qui rend le logement inhabitable"],
      },
      {
        heading: 'Quand faut-il la souscrire ?',
        paragraphs: [
          "Avant l'ouverture du chantier. Un contrat signé après ne couvre pas les travaux déjà commencés, sauf clause de reprise du passé, rare et coûteuse.",
          "L'attestation doit être jointe à vos devis et à vos factures. Un client peut la demander à tout moment, et un maître d'ouvrage averti ne signe pas sans elle.",
        ],
      },
      {
        heading: 'Que risque-t-on sans assurance ?',
        paragraphs: [
          "Le défaut d'assurance est un délit pénal, passible d'une amende et d'une peine d'emprisonnement. La sanction la plus lourde est pourtant civile : vous répondez personnellement des réparations pendant dix ans, même si l'entreprise a cessé son activité.",
        ],
      },
    ],
    takeaways: [
      "L'obligation dépend des travaux réalisés, pas du statut.",
      "Le contrat doit être en place avant l'ouverture du chantier.",
      "Seules les activités inscrites sur l'attestation sont garanties.",
    ],
    offers: ['proteger/decennale', 'proteger/rc-pro-batiment'],
    simulator: 'decennale',
    faq: [
      { q: 'Un artisan qui ne fait que de la rénovation est-il concerné ?', a: "Oui, dès que les travaux touchent à la structure, à l'étanchéité ou à des équipements indissociables de l'ouvrage." },
      { q: 'La décennale continue-t-elle après la fin du contrat ?', a: "Les chantiers ouverts pendant la période de validité restent garantis dix ans, même si le contrat est ensuite résilié." },
    ],
  },
  {
    slug: 'lire-attestation-decennale',
    theme: 'Bâtiment',
    title: 'Lire son attestation décennale ligne par ligne',
    description:
      "Activités garanties, période de validité, montant de chantier, techniques : comment lire une attestation décennale et repérer ce qui n'est pas couvert.",
    h1: 'Lire son attestation décennale ligne par ligne',
    summary: "Les quatre zones d'une attestation, et ce que chacune dit de ce qui est réellement garanti.",
    date: '2026-10-06',
    sections: [
      {
        heading: 'Les activités : la zone qui compte le plus',
        paragraphs: [
          "L'attestation énumère des activités, définies selon une nomenclature commune aux assureurs. Chaque définition précise ce qui est inclus, et parfois ce qui ne l'est pas.",
          "Un maçon dont l'attestation mentionne la maçonnerie mais pas l'étanchéité n'est pas garanti pour une toiture-terrasse, même s'il en réalise depuis vingt ans. C'est la première cause de refus de garantie.",
        ],
      },
      {
        heading: 'La période de validité',
        paragraphs: ["L'attestation couvre les chantiers dont la date d'ouverture se situe dans la période indiquée. Vérifiez qu'elle est bien renouvelée chaque année, sans interruption."],
      },
      {
        heading: 'Les limites du contrat',
        paragraphs: ['Trois limites figurent en général sur le document ou dans les conditions particulières.'],
        list: [
          "Le coût maximal de chantier accepté, au-delà duquel une déclaration préalable est nécessaire",
          "La zone géographique d'intervention",
          "Les techniques : seules les techniques courantes sont couvertes, les procédés innovants demandent un accord",
        ],
      },
      {
        heading: 'Ce que l\'attestation ne dit pas',
        paragraphs: [
          "Elle ne mentionne ni les franchises, ni les garanties complémentaires comme les dommages immatériels ou les dommages aux existants. Pour cela, il faut lire les conditions particulières du contrat.",
        ],
      },
    ],
    takeaways: [
      "Comparez la liste des activités à vos chantiers des douze derniers mois.",
      'Signalez toute activité nouvelle avant de la pratiquer.',
      "Conservez vos attestations successives : elles serviront pendant dix ans.",
    ],
    offers: ['proteger/decennale', 'proteger/assurance-btp'],
    simulator: 'couverture-btp',
    faq: [
      { q: 'Peut-on ajouter une activité en cours d\'année ?', a: "Oui, par avenant. L'assureur peut demander des justificatifs d'expérience ou de qualification." },
      { q: 'Mon client demande une attestation nominative : est-ce normal ?', a: "Oui, pour les chantiers importants. Votre assureur ou votre courtier la délivre sur demande." },
    ],
  },
  {
    slug: 'changer-assureur-decennale',
    theme: 'Bâtiment',
    title: "Changer d'assureur décennale sans trou de garantie",
    description:
      "Échéance, préavis, reprise du passé, chantiers en cours : la méthode pour changer d'assurance décennale sans interrompre sa couverture.",
    h1: "Changer d'assureur décennale sans trou de garantie",
    summary: "Le calendrier à respecter et les trois vérifications à faire avant d'envoyer sa lettre de résiliation.",
    date: '2026-10-07',
    sections: [
      {
        heading: 'Repérer son échéance et son préavis',
        paragraphs: [
          "Un contrat d'assurance professionnelle se résilie à l'échéance annuelle, en respectant un préavis fixé par le contrat, le plus souvent deux mois. Beaucoup de contrats ont leur échéance au 1er janvier : la décision se prend donc à l'automne.",
          "Passé le préavis, le contrat est reconduit pour un an.",
        ],
      },
      {
        heading: 'Obtenir le nouveau contrat avant de résilier',
        paragraphs: ["N'envoyez jamais la résiliation avant d'avoir reçu l'accord écrit du nouvel assureur. Un dossier peut être refusé ou demander plusieurs semaines d'instruction."],
      },
      {
        heading: 'Trois vérifications',
        paragraphs: ['Avant de signer le nouveau contrat, contrôlez trois points.'],
        list: [
          'Les activités : la nouvelle attestation reprend-elle toutes celles de l\'ancienne ?',
          "Les chantiers en cours : sont-ils rattachés à l'ancien contrat, selon leur date d'ouverture ?",
          'La date d\'effet : succède-t-elle sans un jour d\'écart à la fin de l\'ancien contrat ?',
        ],
      },
      {
        heading: 'Et les chantiers déjà livrés ?',
        paragraphs: [
          "Ils restent garantis par l'assureur en place à leur date d'ouverture, pendant dix ans. C'est pourquoi il faut conserver les anciennes attestations et les coordonnées de chaque assureur.",
        ],
      },
    ],
    takeaways: [
      'Notez la date limite de préavis dans votre agenda, chaque année.',
      "Ne résiliez qu'avec un accord écrit du nouvel assureur.",
      "Vérifiez la continuité des dates et des activités.",
    ],
    offers: ['proteger/decennale', 'proteger/assurance-btp'],
    simulator: 'decennale',
    faq: [
      { q: 'Peut-on changer en cours d\'année ?', a: "Seulement dans des cas précis : hausse de tarif non acceptée, changement de situation, ou accord de l'assureur." },
      { q: 'Que faire si mon assureur me résilie ?', a: "Chercher immédiatement un nouveau contrat : vous ne pouvez pas ouvrir de chantier sans assurance. Un courtier consulte les assureurs qui acceptent les dossiers résiliés." },
    ],
  },
  {
    slug: 'dommages-ouvrage-qui-doit-souscrire',
    theme: 'Bâtiment',
    title: 'Dommages-ouvrage : qui doit la souscrire, et pourquoi',
    description:
      "L'assurance dommages-ouvrage expliquée : qui doit la souscrire, ce qu'elle apporte par rapport à la décennale, et comment constituer le dossier.",
    h1: 'Dommages-ouvrage : qui doit la souscrire, et pourquoi',
    summary: "Le rôle de cette assurance, souvent confondue avec la décennale, et les pièces qu'un assureur demandera.",
    date: '2026-10-08',
    sections: [
      {
        heading: 'Deux assurances, deux souscripteurs',
        paragraphs: [
          "La décennale est l'assurance du constructeur. La dommages-ouvrage est celle de la personne qui fait construire. Elles couvrent les mêmes désordres, mais ne jouent pas au même moment.",
          "La dommages-ouvrage paie d'abord, sans chercher qui est responsable. Elle se retourne ensuite contre les constructeurs et leurs assureurs décennale.",
        ],
      },
      {
        heading: 'Ce qu\'elle change pour le propriétaire',
        paragraphs: [
          "Sans elle, il faut prouver la responsabilité d'une entreprise, parfois disparue, et attendre l'issue d'une expertise ou d'un procès. Avec elle, l'assureur est tenu par des délais légaux pour prendre position et proposer une indemnité.",
        ],
      },
      {
        heading: 'Qui est concerné ?',
        paragraphs: ["Toute personne qui fait réaliser des travaux de construction."],
        list: ['Promoteurs, lotisseurs, marchands de biens', 'Constructeurs de maisons individuelles', 'Entreprises et collectivités qui font bâtir', 'Particuliers qui font construire ou rénover lourdement'],
      },
      {
        heading: 'Le dossier à constituer',
        paragraphs: ["L'assureur évalue la qualité du projet avant de s'engager. Plus le dossier est complet, plus la réponse est rapide."],
        list: ['Permis de construire et plans', 'Descriptif et coût des travaux', 'Attestations décennale de chaque entreprise, valides à la date d\'ouverture', "Étude de sol et, selon le projet, rapport d'un contrôleur technique"],
      },
    ],
    takeaways: [
      'Elle se souscrit avant le début des travaux.',
      'Elle suit le bien en cas de revente pendant dix ans.',
      'Un dossier incomplet est la première cause de refus.',
    ],
    offers: ['proteger/dommages-ouvrage', 'proteger/tous-risques-chantier'],
    faq: [
      { q: 'Un particulier est-il sanctionné s\'il ne la souscrit pas ?', a: "Il n'encourt pas de sanction pénale lorsqu'il construit pour lui-même, mais il perd le préfinancement des réparations et s'expose à des difficultés à la revente." },
      { q: 'Combien coûte-t-elle ?', a: "La cotisation est calculée en pourcentage du coût de la construction et varie selon la nature du projet et la qualité du dossier." },
    ],
  },
  {
    slug: 'assurance-recolte-vigne',
    theme: 'Vigne et agriculture',
    title: 'Assurance récolte : comment elle fonctionne pour la vigne',
    description:
      "Capital assuré, rendement de référence, franchise, subvention : le fonctionnement de l'assurance récolte expliqué aux vignerons.",
    h1: 'Assurance récolte : comment elle fonctionne pour la vigne',
    summary: "Les quatre paramètres d'un contrat récolte et la façon de choisir sa franchise.",
    date: '2026-10-09',
    sections: [
      {
        heading: 'Un partage du risque en trois étages',
        paragraphs: [
          "Le dispositif actuel répartit les pertes en trois niveaux. Les petites pertes restent à la charge de l'exploitant. Les pertes significatives relèvent de l'assurance, dont la cotisation est en partie subventionnée. Les pertes exceptionnelles font intervenir la solidarité nationale.",
          "À ce dernier étage, l'indemnisation publique est nettement moins favorable pour les exploitants qui ne sont pas assurés.",
        ],
      },
      {
        heading: 'Les quatre paramètres du contrat',
        paragraphs: ['Tout contrat récolte se résume à quatre chiffres.'],
        list: [
          'La surface assurée, par appellation ou par cépage',
          'Le rendement de référence, calculé sur vos récoltes passées',
          "Le prix assuré par hectolitre ou par kilo",
          'La franchise, exprimée en pourcentage',
        ],
      },
      {
        heading: 'Choisir sa franchise',
        paragraphs: [
          "Une franchise élevée réduit la cotisation, mais laisse à votre charge une perte importante. La bonne question n'est pas « combien coûte le contrat ? » mais « quelle perte ma trésorerie peut-elle absorber deux années de suite ? ».",
        ],
      },
      {
        heading: 'Le calendrier',
        paragraphs: ["La souscription doit intervenir avant une date limite fixée chaque année, en début de campagne. Une fois le gel passé, il est trop tard pour l'année en cours."],
      },
    ],
    takeaways: [
      'Vérifiez que le rendement de référence reflète vos récoltes réelles.',
      'Ajustez le prix assuré à la valorisation de vos vins.',
      "Chiffrez plusieurs niveaux de franchise avant de décider.",
    ],
    offers: ['proteger/aleas-climatiques', 'proteger/assurance-viticole'],
    simulator: 'recolte',
    faq: [
      { q: 'La subvention est-elle automatique ?', a: "Non. Elle concerne les contrats qui respectent un cahier des charges et suppose une démarche dans votre déclaration annuelle." },
      { q: 'Peut-on assurer seulement certaines parcelles ?', a: "Les contrats subventionnés imposent en général d'assurer une part importante des surfaces d'une même culture." },
    ],
  },
  {
    slug: 'assurer-cave-stocks-vin',
    theme: 'Vigne et agriculture',
    title: "Cave, cuverie, stocks : ce qu'un contrat doit prévoir",
    description:
      "Valeur du stock, vin en cours de vinification, panne de froid, fuite de cuve : les points à vérifier pour assurer correctement une cave.",
    h1: "Cave, cuverie, stocks : ce qu'un contrat doit prévoir",
    summary: "Comment valoriser un stock de vin et quelles garanties demander pour la cave.",
    date: '2026-10-10',
    sections: [
      {
        heading: 'Un stock qui varie toute l\'année',
        paragraphs: [
          "Après les vendanges, la cave contient la récolte nouvelle et les millésimes précédents. Avant les mises en bouteilles et les expéditions de fin d'année, la valeur stockée est à son maximum.",
          "Un capital fixe est donc trop élevé une partie de l'année et insuffisant le reste du temps. Les contrats adaptés prévoient un capital qui suit ces variations, sur déclaration.",
        ],
      },
      {
        heading: 'Prix de revient ou prix de vente ?',
        paragraphs: [
          "Assuré au prix de revient, le stock détruit est remboursé à ce qu'il a coûté à produire. Assuré au prix de vente, il est remboursé à ce qu'il aurait rapporté. L'écart est considérable pour les appellations bien valorisées.",
        ],
      },
      {
        heading: 'Les garanties à demander',
        paragraphs: ["Au-delà de l'incendie et du dégât des eaux, quatre garanties sont propres à la cave."],
        list: [
          'Perte de liquide : fuite, rupture de cuve ou de fût, erreur de manipulation',
          'Accidents de vinification : panne du froid, coupure de courant',
          'Vin en cours de vinification, distingué du vin fini',
          'Vin stocké ailleurs : entrepôt, prestataire, salon',
        ],
      },
      {
        heading: 'Le vin vendu mais non enlevé',
        paragraphs: ["Tant qu'il reste dans vos murs, vous en êtes responsable. Il doit être compris dans le capital assuré, ou faire l'objet d'une clause particulière."],
      },
    ],
    takeaways: [
      'Faites l\'inventaire de votre stock au moment où il est le plus élevé.',
      'Choisissez en connaissance de cause entre prix de revient et prix de vente.',
      'Vérifiez que la panne de froid est bien garantie.',
    ],
    offers: ['proteger/stocks-de-vin', 'proteger/assurance-viticole'],
    simulator: 'couverture-exploitation',
    faq: [
      { q: 'Les vieux millésimes sont-ils assurés à leur cote ?', a: "Seulement si le contrat le prévoit, par une valeur déclarée ou agréée. Sans cela, l'indemnisation suit la règle générale du contrat." },
      { q: 'Les bouteilles en dépôt chez un caviste sont-elles couvertes ?', a: "Pas automatiquement. Il faut une extension pour les marchandises situées hors du domaine." },
    ],
  },
];
