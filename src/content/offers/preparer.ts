import type { Offer } from '../types';

const epargne = 'Épargne et retraite';
const entreprise = 'Entreprise';
const transmission = 'Transmission';

export const preparer: Offer[] = [
  {
    slug: 'assurance-vie',
    universe: 'preparer',
    group: epargne,
    name: 'Assurance-vie',
    tagline: 'Épargner, rester libre, transmettre',
    title: 'Assurance-vie : comparer les contrats avec un courtier',
    description:
      "Assurance-vie : fonds en euros, unités de compte, frais, fiscalité, clause bénéficiaire. Comparatif de contrats par un courtier en assurance à Chalon-sur-Saône.",
    h1: 'Assurance-vie',
    intro:
      "C'est une enveloppe souple : vous versez à votre rythme, l'argent reste disponible et le contrat se transmet dans un cadre fiscal propre. Tous les contrats ne se valent pas, surtout sur les frais.",
    audience: [
      'Épargnants qui veulent faire travailler une somme sans la bloquer',
      'Dirigeants et indépendants qui se constituent un patrimoine hors de leur entreprise',
      'Personnes qui préparent la transmission à leurs proches',
    ],
    covers: [
      { name: 'Le fonds en euros', text: "Le capital est garanti par l'assureur, le rendement est modéré." },
      { name: 'Les unités de compte', text: "Des supports investis sur les marchés ou l'immobilier, sans garantie en capital." },
      { name: 'La disponibilité', text: "Rachats partiels ou totaux à tout moment, avances possibles." },
      { name: 'La transmission', text: "Le capital est versé aux bénéficiaires que vous désignez, selon des règles fiscales spécifiques." },
    ],
    checks: [
      'Quels sont les frais sur versement, de gestion et d\'arbitrage ?',
      'La clause bénéficiaire est-elle rédigée pour votre situation, et à jour ?',
      'La répartition entre fonds en euros et unités de compte correspond-elle au risque que vous acceptez ?',
    ],
    role:
      "En tant que courtier en assurance, nous comparons les contrats de plusieurs assureurs, relisons vos contrats existants et rédigeons la clause bénéficiaire avec vous. Aucun rendement n'est promis.",
    faq: [
      { q: 'L\'argent est-il bloqué pendant huit ans ?', a: "Non. Il est disponible à tout moment. Huit ans est la durée après laquelle la fiscalité des gains devient plus favorable." },
      { q: 'Le capital est-il garanti ?', a: "Uniquement sur le fonds en euros. Les unités de compte peuvent perdre de la valeur." },
      { q: 'Faut-il ouvrir plusieurs contrats ?', a: "Cela peut être utile pour séparer des objectifs ou des bénéficiaires, et pour diversifier les assureurs." },
    ],
    simulator: 'assurance-vie',
    related: ['preparer/per', 'preparer/transmission', 'preparer/contrat-de-capitalisation'],
  },
  {
    slug: 'per',
    universe: 'preparer',
    group: epargne,
    name: "Plan d'épargne retraite",
    tagline: 'Préparer sa retraite, réduire son impôt',
    title: 'PER : plan d\'épargne retraite pour dirigeants et particuliers',
    description:
      "Plan d'épargne retraite assurantiel : déduction des versements, sortie en capital ou en rente, cas de déblocage. Comparatif par un courtier à Chalon-sur-Saône.",
    h1: "Plan d'épargne retraite (PER)",
    intro:
      "Les sommes versées sur un PER peuvent être déduites du revenu imposable, dans une limite annuelle. En contrepartie, l'épargne est bloquée jusqu'à la retraite, sauf exceptions.",
    audience: [
      'Contribuables imposés dans les tranches hautes',
      'Travailleurs non salariés, dont la retraite obligatoire est faible',
      'Salariés qui veulent regrouper d\'anciens contrats retraite',
    ],
    covers: [
      { name: "L'avantage à l'entrée", text: "Les versements volontaires sont déductibles, dans la limite d'un plafond qui dépend de vos revenus." },
      { name: 'La gestion', text: "Par défaut, une gestion qui sécurise progressivement l'épargne à l'approche de la retraite." },
      { name: 'La sortie', text: "En capital, en rente ou en combinant les deux, avec une fiscalité propre à chaque option." },
      { name: 'Les déblocages anticipés', text: "Achat de la résidence principale et accidents de la vie prévus par la loi." },
    ],
    checks: [
      "L'économie d'impôt d'aujourd'hui dépasse-t-elle l'impôt à payer à la sortie ?",
      'Quels sont les frais du contrat, et les supports proposés ?',
      "Avez-vous d'abord une épargne disponible suffisante ?",
    ],
    role:
      "Nous calculons votre plafond disponible, comparons les PER assurantiels de plusieurs compagnies et organisons le transfert de vos anciens contrats. Nous ne délivrons pas de conseil fiscal : les calculs sont à valider avec votre expert-comptable.",
    faq: [
      { q: 'Le PER est-il intéressant si je paie peu d\'impôt ?', a: "L'avantage fiscal est proportionnel à votre tranche d'imposition. Dans les tranches basses, l'assurance-vie est souvent plus adaptée." },
      { q: 'Peut-on récupérer son épargne avant la retraite ?', a: "Seulement pour l'achat de la résidence principale ou dans des cas précis : invalidité, décès du conjoint, surendettement, fin de droits au chômage, liquidation judiciaire." },
      { q: 'Que deviennent mes anciens contrats Madelin ou PERP ?', a: "Ils peuvent être transférés vers un PER. Il faut comparer les frais et les garanties avant de le faire." },
    ],
    simulator: 'per',
    related: ['preparer/retraite-dirigeant', 'preparer/assurance-vie', 'preparer/bilan-patrimonial'],
  },
  {
    slug: 'retraite-dirigeant',
    universe: 'preparer',
    group: epargne,
    name: 'Retraite du dirigeant',
    tagline: "Combler l'écart avec ses revenus",
    title: 'Retraite du dirigeant et de l\'indépendant',
    description:
      "Retraite des dirigeants, artisans, exploitants et indépendants : mesurer l'écart avec ses revenus et le combler. Étude par un courtier à Chalon-sur-Saône.",
    h1: 'Retraite du dirigeant',
    intro:
      "La pension d'un indépendant représente souvent une faible part de ses derniers revenus. Plus on mesure cet écart tôt, moins l'effort d'épargne pour le combler est lourd.",
    audience: [
      'Artisans, commerçants et exploitants agricoles',
      'Gérants majoritaires et présidents de société',
      'Dirigeants qui comptent sur la vente de leur entreprise pour leur retraite',
    ],
    covers: [
      { name: 'Le point de départ', text: "Lecture de votre relevé de carrière et estimation de vos pensions obligatoires." },
      { name: 'Les enveloppes personnelles', text: "PER individuel et assurance-vie, selon votre fiscalité et votre besoin de disponibilité." },
      { name: "Les solutions par l'entreprise", text: "Contrats de retraite financés par la société, pour le dirigeant et éventuellement les salariés." },
      { name: 'La sortie', text: "Rente, capital ou revenus réguliers : le choix se prépare plusieurs années avant le départ." },
    ],
    checks: [
      "Tous vos trimestres sont-ils bien reportés sur votre relevé de carrière ?",
      "Votre retraite dépend-elle trop de la valeur de revente de l'entreprise ?",
      'Votre conjoint est-il protégé en cas de décès avant ou après la retraite ?',
    ],
    role:
      "Nous partons de votre relevé de carrière, chiffrons le complément visé et comparons les contrats de retraite de plusieurs assureurs.",
    faq: [
      { q: 'À quel âge commencer ?', a: "Le plus tôt possible : le même complément coûte beaucoup moins cher par mois quand il est préparé sur vingt ans plutôt que sur dix." },
      { q: 'Vaut-il mieux épargner à titre personnel ou via la société ?', a: "Cela dépend de votre statut, de votre rémunération et de la fiscalité de l'entreprise. Les deux se combinent souvent." },
      { q: 'La vente de mon entreprise suffira-t-elle ?', a: "C'est un pari sur un seul actif, dont la valeur dépend du marché le jour de la vente. Une épargne construite en parallèle réduit ce risque." },
    ],
    simulator: 'retraite',
    related: ['preparer/per', 'preparer/assurance-vie', 'proteger/prevoyance'],
  },
  {
    slug: 'epargne-projets',
    universe: 'preparer',
    group: epargne,
    name: 'Épargne et projets',
    tagline: 'Études des enfants, achat, précaution',
    title: 'Épargner pour ses projets : par où commencer',
    description:
      "Organiser son épargne par objectifs : précaution, projets à moyen terme, long terme. Comparatif de contrats d'assurance-vie par un courtier à Chalon-sur-Saône.",
    h1: 'Épargne et projets',
    intro:
      "Une épargne bien rangée commence par des objectifs datés : ce dont vous pouvez avoir besoin demain, dans cinq ans, dans vingt ans. Le choix du contrat vient ensuite.",
    audience: [
      'Familles qui préparent les études des enfants ou un achat immobilier',
      'Indépendants aux revenus irréguliers',
      'Épargnants dont tout repose sur des livrets',
    ],
    covers: [
      { name: 'La précaution', text: "Quelques mois de dépenses, disponibles immédiatement, hors de tout contrat." },
      { name: 'Les projets à moyen terme', text: "Des supports prudents au sein d'une assurance-vie, pour un besoin à échéance connue." },
      { name: 'Le long terme', text: "Une part plus dynamique, pour les sommes dont vous n'aurez pas besoin avant dix ans." },
      { name: 'Les versements programmés', text: "Un montant régulier, modifiable et suspendable, qui lisse les points d'entrée." },
    ],
    checks: [
      'Votre épargne de précaution est-elle constituée avant tout placement ?',
      'Chaque somme placée a-t-elle un horizon ?',
      'Les versements programmés peuvent-ils être suspendus sans frais ?',
    ],
    role:
      "Nous vous aidons à dater vos objectifs, puis nous comparons les contrats d'assurance-vie adaptés. Nous n'intervenons que sur des contrats d'assurance.",
    faq: [
      { q: 'Combien garder en épargne de précaution ?', a: "Un repère courant est de trois à six mois de dépenses, davantage quand les revenus sont irréguliers." },
      { q: 'Peut-on ouvrir un contrat pour un enfant ?', a: "Oui, une assurance-vie peut être ouverte au nom d'un mineur, avec l'accord de ses représentants légaux." },
      { q: 'Faut-il attendre d\'avoir une somme importante ?', a: "Non. De nombreux contrats acceptent des versements programmés modestes." },
    ],
    simulator: 'assurance-vie',
    related: ['preparer/assurance-vie', 'preparer/per', 'preparer/bilan-patrimonial'],
  },
  {
    slug: 'immobilier-en-assurance-vie',
    universe: 'preparer',
    group: epargne,
    name: "Immobilier en unités de compte",
    tagline: 'SCPI et supports immobiliers dans un contrat',
    title: 'SCPI et immobilier en assurance-vie',
    description:
      "Détenir de l'immobilier professionnel dans un contrat d'assurance-vie : SCPI et supports immobiliers en unités de compte, avantages, frais et risques.",
    h1: "L'immobilier dans un contrat d'assurance-vie",
    intro:
      "Certains contrats permettent d'investir dans l'immobilier professionnel par l'intermédiaire d'unités de compte. On y accède sans gérer de bien, mais sans garantie en capital.",
    audience: [
      "Épargnants qui veulent de l'immobilier sans gestion locative",
      'Détenteurs de contrats investis uniquement en fonds en euros',
      'Dirigeants déjà très exposés à l\'immobilier de leur entreprise, qui cherchent à diversifier autrement',
    ],
    covers: [
      { name: 'Les supports', text: "Parts de SCPI et autres fonds immobiliers, référencés par l'assureur dans le contrat." },
      { name: 'Les revenus', text: "Ils sont réinvestis dans le contrat et suivent la fiscalité de l'assurance-vie." },
      { name: 'La liquidité', text: "Elle est assurée par l'assureur dans les conditions du contrat, ce qui la rend plus simple qu'en direct." },
      { name: 'Les frais', text: "Frais d'entrée du support et frais de gestion du contrat s'additionnent." },
    ],
    checks: [
      "L'horizon de placement est-il d'au moins huit à dix ans ?",
      'Quelle part de votre épargne est déjà exposée à l\'immobilier ?',
      'Avez-vous lu le document d\'information de chaque support ?',
    ],
    role:
      "Nous comparons les contrats d'assurance-vie qui référencent ces supports. Nous ne commercialisons pas de parts en direct et ne sommes pas conseiller en investissements financiers. Ces supports présentent un risque de perte en capital.",
    faq: [
      { q: 'Le capital est-il garanti ?', a: "Non. La valeur des parts peut baisser, et les revenus ne sont pas garantis." },
      { q: 'Quelle différence avec un achat en direct ?', a: "Dans un contrat, les revenus ne sont pas imposés chaque année et la revente est plus simple. En contrepartie, le choix de supports est limité et des frais de contrat s'ajoutent." },
      { q: 'Quelle part y consacrer ?', a: "Une part minoritaire, à définir selon votre patrimoine global et votre exposition immobilière existante." },
    ],
    simulator: 'assurance-vie',
    related: ['preparer/assurance-vie', 'preparer/bilan-patrimonial', 'preparer/epargne-projets'],
  },
  {
    slug: 'contrat-de-capitalisation',
    universe: 'preparer',
    group: entreprise,
    name: 'Contrat de capitalisation',
    tagline: 'Pour les particuliers et les sociétés',
    title: 'Contrat de capitalisation : société et particuliers',
    description:
      "Contrat de capitalisation : fonctionnement, différences avec l'assurance-vie, usage par une société ou une holding. Comparatif par un courtier en assurance.",
    h1: 'Contrat de capitalisation',
    intro:
      "Il ressemble à l'assurance-vie par ses supports et sa fiscalité, mais il n'y a pas d'assuré : le contrat ne se dénoue pas au décès. Il peut être souscrit par une société.",
    audience: [
      'Sociétés et holdings qui placent une trésorerie durable',
      'Particuliers qui veulent transmettre un contrat de leur vivant',
      'Épargnants qui ont déjà largement utilisé l\'assurance-vie',
    ],
    covers: [
      { name: 'Les supports', text: "Fonds en euros, selon les conditions de l'assureur, et unités de compte." },
      { name: 'La souscription par une société', text: "Possible pour certaines personnes morales, avec une fiscalité spécifique." },
      { name: 'La transmission', text: "Le contrat entre dans la succession ou peut être donné, en conservant son antériorité fiscale." },
      { name: 'La disponibilité', text: "Rachats partiels possibles, comme en assurance-vie." },
    ],
    checks: [
      "La société est-elle éligible au contrat et au fonds en euros de l'assureur ?",
      "Cette trésorerie est-elle réellement stable sur plusieurs années ?",
      'Le traitement fiscal a-t-il été validé par votre expert-comptable ?',
    ],
    role:
      "Nous identifions les assureurs qui acceptent votre structure, comparons les conditions et coordonnons la mise en place avec votre expert-comptable.",
    faq: [
      { q: 'Quelle est la différence principale avec l\'assurance-vie ?', a: "Au décès, l'assurance-vie est versée aux bénéficiaires hors succession. Le contrat de capitalisation, lui, fait partie de la succession." },
      { q: 'Une société d\'exploitation peut-elle en souscrire ?', a: "Les assureurs le réservent le plus souvent aux sociétés patrimoniales et aux holdings. Les conditions varient d'une compagnie à l'autre." },
      { q: 'Le capital est-il garanti ?', a: "Seulement pour la part investie en fonds en euros." },
    ],
    simulator: 'tresorerie',
    related: ['preparer/tresorerie-entreprise', 'preparer/assurance-vie', 'preparer/transmission'],
  },
  {
    slug: 'tresorerie-entreprise',
    universe: 'preparer',
    group: entreprise,
    name: "Trésorerie d'entreprise",
    tagline: 'Faire travailler les excédents',
    title: "Placer la trésorerie de son entreprise",
    description:
      "Trésorerie d'entreprise : distinguer ce qui doit rester disponible de ce qui peut être placé, et les solutions assurantielles adaptées. Courtier à Chalon-sur-Saône.",
    h1: "Trésorerie d'entreprise",
    intro:
      "Une trésorerie qui dort sur un compte courant perd de la valeur. Avant de la placer, il faut séparer ce qui sert à l'exploitation de ce qui est réellement excédentaire.",
    audience: [
      'Sociétés dont la trésorerie dépasse durablement le besoin d\'exploitation',
      'Domaines et entreprises à forte saisonnalité',
      'Holdings après une cession ou une distribution',
    ],
    covers: [
      { name: 'La poche de fonctionnement', text: "Les charges de quelques mois et les décalages de paiement : elle reste sur le compte." },
      { name: 'La poche de réserve', text: "Mobilisable en quelques semaines, sur des supports peu risqués." },
      { name: 'La poche stable', text: "Placée sur plusieurs années, notamment par un contrat de capitalisation." },
      { name: 'Le suivi', text: "Un point annuel, calé sur la clôture des comptes." },
    ],
    checks: [
      'Le besoin en fonds de roulement a-t-il été calculé sur une année complète ?',
      'Des investissements ou des remboursements sont-ils prévus dans les deux ans ?',
      'Qui décide des placements dans la société, et sur quelle délégation ?',
    ],
    role:
      "Nous découpons la trésorerie avec vous et votre expert-comptable, puis nous comparons les contrats de capitalisation ouverts aux sociétés.",
    faq: [
      { q: 'À partir de quel montant est-ce utile ?', a: "Dès que l'excédent dépasse nettement le besoin d'exploitation et qu'il est stable. Le montant minimal dépend des contrats." },
      { q: 'L\'argent placé reste-t-il disponible ?', a: "Oui, par rachat, dans des délais et à des conditions à vérifier pour chaque contrat." },
      { q: 'Quel est le risque ?', a: "Il dépend des supports. La part destinée à l'exploitation ne doit jamais être exposée à un risque de perte." },
    ],
    simulator: 'tresorerie',
    related: ['preparer/contrat-de-capitalisation', 'proteger/perte-exploitation', 'preparer/retraite-dirigeant'],
  },
  {
    slug: 'protection-des-associes',
    universe: 'preparer',
    group: entreprise,
    name: 'Protection des associés',
    tagline: "Si l'un des associés disparaît",
    title: 'Garantie croisée entre associés',
    description:
      "Garantie croisée entre associés : financer le rachat des parts en cas de décès ou d'invalidité d'un associé. Étude par un courtier en assurance.",
    h1: 'Protection des associés',
    intro:
      "Au décès d'un associé, ses parts reviennent à ses héritiers. Les associés restants veulent en général les racheter, et les héritiers être payés : encore faut-il en avoir les moyens.",
    audience: [
      'Sociétés à deux ou trois associés actifs',
      'GAEC, EARL et sociétés familiales viticoles',
      'Associés liés par un pacte ou une clause d\'agrément',
    ],
    covers: [
      { name: 'Le principe', text: "Chaque associé est assuré, et le capital sert à racheter ses parts s'il décède ou devient invalide." },
      { name: 'Le montage', text: "Souscription croisée entre associés ou par la société, à articuler avec les statuts et le pacte." },
      { name: 'La valeur assurée', text: "Fondée sur la valeur des parts, à réviser régulièrement." },
      { name: 'Les héritiers', text: "Ils reçoivent le prix de cession, sans avoir à entrer dans la société." },
    ],
    checks: [
      "Les statuts prévoient-ils le rachat des parts et la méthode d'évaluation ?",
      'Le capital assuré suit-il la valeur de l\'entreprise ?',
      'Le montage a-t-il été validé par votre avocat ou votre notaire ?',
    ],
    role:
      "Nous mettons en place les contrats d'assurance, en lien avec le notaire ou l'avocat qui rédige le pacte. Nous n'intervenons pas sur la rédaction juridique.",
    faq: [
      { q: 'Est-ce la même chose que l\'homme-clé ?', a: "Non. L'homme-clé indemnise l'entreprise pour sa perte d'activité. La garantie croisée finance le rachat des parts." },
      { q: 'Faut-il un pacte d\'associés ?', a: "C'est fortement recommandé : l'assurance apporte les fonds, le pacte fixe les règles du rachat." },
      { q: 'Et dans une société familiale ?', a: "Le mécanisme est le même. Il évite que la transmission de l'exploitation dépende de la capacité d'emprunt des enfants qui restent." },
    ],
    simulator: 'homme-cle',
    related: ['proteger/homme-cle', 'preparer/transmission', 'proteger/responsabilite-dirigeant'],
  },
  {
    slug: 'transmission',
    universe: 'preparer',
    group: transmission,
    name: 'Transmission',
    tagline: 'Protéger ses proches, organiser la suite',
    title: 'Transmission : assurance-vie et clause bénéficiaire',
    description:
      "Transmettre par l'assurance-vie : clause bénéficiaire, versements avant et après 70 ans, protection du conjoint. Accompagnement par un courtier en assurance.",
    h1: 'Transmission',
    intro:
      "L'assurance-vie permet de désigner librement qui recevra le capital, dans un cadre fiscal distinct de la succession. Tout repose sur une clause bénéficiaire bien rédigée.",
    audience: [
      'Familles recomposées et couples non mariés',
      'Parents et grands-parents qui veulent aider de leur vivant ou après',
      'Dirigeants et exploitants dont le patrimoine est surtout professionnel',
    ],
    covers: [
      { name: 'La clause bénéficiaire', text: "Qui reçoit quoi, dans quel ordre, et que se passe-t-il si un bénéficiaire décède avant vous." },
      { name: 'Le cadre fiscal', text: "Des abattements propres à l'assurance-vie, différents selon l'âge auquel les versements ont été faits." },
      { name: 'La protection du conjoint', text: "Un capital disponible rapidement, hors des délais de règlement de la succession." },
      { name: "L'articulation", text: "Avec les donations, le testament et le régime matrimonial, en lien avec votre notaire." },
    ],
    checks: [
      'Vos clauses bénéficiaires ont-elles été relues depuis votre dernier changement familial ?',
      'Vos bénéficiaires savent-ils que le contrat existe ?',
      "L'ensemble est-il cohérent avec ce qu'a prévu votre notaire ?",
    ],
    role:
      "Nous relisons vos contrats et leurs clauses, proposons une rédaction adaptée et travaillons avec votre notaire. Nous ne délivrons ni conseil juridique ni conseil fiscal.",
    faq: [
      { q: 'L\'assurance-vie fait-elle partie de la succession ?', a: "En principe non : le capital est versé directement aux bénéficiaires désignés, selon une fiscalité propre." },
      { q: 'Que change l\'âge de 70 ans ?', a: "Les versements effectués avant et après 70 ans ne relèvent pas du même régime fiscal au décès. Les deux ont leur intérêt." },
      { q: 'Une clause standard suffit-elle ?', a: "Elle convient aux situations simples. Dès qu'il y a une famille recomposée, un enfant fragile ou un patrimoine important, une rédaction sur mesure s'impose." },
    ],
    simulator: 'transmission',
    related: ['preparer/assurance-vie', 'preparer/protection-des-associes', 'preparer/dependance'],
  },
  {
    slug: 'dependance',
    universe: 'preparer',
    group: transmission,
    name: 'Dépendance',
    tagline: 'Financer la perte d\'autonomie',
    title: 'Assurance dépendance : anticiper la perte d\'autonomie',
    description:
      "Assurance dépendance : une rente pour financer l'aide à domicile ou l'hébergement en établissement. Comparatif par un courtier à Chalon-sur-Saône.",
    h1: 'Assurance dépendance',
    intro:
      "L'aide à domicile ou l'hébergement en établissement coûte souvent plus que la pension. Sans préparation, la différence est prélevée sur le patrimoine, ou supportée par les enfants.",
    audience: [
      'Personnes de 50 à 70 ans qui veulent protéger leur patrimoine et leurs enfants',
      'Enfants qui accompagnent un parent âgé',
      'Couples dont l\'un dépend financièrement de l\'autre',
    ],
    covers: [
      { name: 'La rente', text: "Versée chaque mois dès que la dépendance est reconnue, pour la durée de la vie." },
      { name: 'Le capital équipement', text: "Une somme pour adapter le logement." },
      { name: 'Les niveaux garantis', text: "Dépendance totale seule, ou dépendance partielle également." },
      { name: 'Les services', text: "Aide aux démarches, soutien aux aidants, organisation du maintien à domicile." },
    ],
    checks: [
      'Comment le contrat définit-il la dépendance, et qui la constate ?',
      'La dépendance partielle est-elle couverte ?',
      "Que deviennent les cotisations si vous arrêtez de payer ?",
    ],
    role:
      "Nous comparons les définitions de la dépendance, les délais de carence et l'évolution des cotisations, qui diffèrent beaucoup entre assureurs.",
    faq: [
      { q: 'À quel âge souscrire ?', a: "Autour de 55 à 65 ans en général : plus tôt, la cotisation est plus basse ; plus tard, la sélection médicale devient difficile." },
      { q: 'Les aides publiques ne suffisent-elles pas ?', a: "Elles existent mais laissent le plus souvent un reste à charge important, variable selon les revenus et le niveau de dépendance." },
      { q: 'Peut-on utiliser son assurance-vie à la place ?', a: "Oui, en prévoyant des rachats. Les deux approches se complètent : l'une mutualise le risque, l'autre laisse le capital à la famille s'il n'est pas utilisé." },
    ],
    related: ['preparer/transmission', 'proteger/mutuelle-sante', 'preparer/assurance-vie'],
  },
  {
    slug: 'bilan-patrimonial',
    universe: 'preparer',
    group: transmission,
    name: 'Bilan patrimonial',
    tagline: 'Faire le point avant de décider',
    title: 'Bilan patrimonial : faire le point sur vos contrats',
    description:
      "Bilan patrimonial par un courtier en assurance : répartition du patrimoine, protection du foyer, retraite, transmission. Premier rendez-vous sans engagement.",
    h1: 'Bilan patrimonial',
    intro:
      "Un bilan met sur une seule page ce que vous possédez, ce que vous devez et ce qui se passerait en cas d'accident, de retraite ou de décès. On y voit vite où sont les fragilités.",
    audience: [
      'Dirigeants et exploitants dont le patrimoine est mêlé à celui de l\'entreprise',
      'Foyers qui ont accumulé des contrats sans vue d\'ensemble',
      'Personnes à une étape : mariage, naissance, vente, héritage, retraite',
    ],
    covers: [
      { name: "L'inventaire", text: "Biens, épargne, contrats d'assurance, dettes, revenus et charges." },
      { name: 'Les scénarios', text: "Arrêt de travail, décès, retraite : ce que chaque situation produirait pour le foyer." },
      { name: 'Les déséquilibres', text: "Patrimoine trop concentré, épargne indisponible, conjoint mal protégé, clauses obsolètes." },
      { name: 'Les pistes', text: "Les contrats d'assurance à ajuster, et les sujets à porter à votre notaire ou à votre expert-comptable." },
    ],
    checks: [
      'Avez-vous réuni vos derniers relevés de contrats et votre avis d\'imposition ?',
      'Votre régime matrimonial est-il adapté à votre activité ?',
      'Vos objectifs sont-ils classés par ordre de priorité ?',
    ],
    role:
      "Nous réalisons le bilan dans le périmètre d'un courtier en assurance : épargne assurantielle, retraite, prévoyance, transmission par l'assurance-vie. Pour le reste, nous vous orientons vers les professionnels compétents.",
    faq: [
      { q: 'Faut-il un patrimoine important ?', a: "Non. Le bilan est utile dès qu'il y a une famille à protéger, un emprunt ou une entreprise." },
      { q: 'Le bilan est-il payant ?', a: "Le premier rendez-vous est sans engagement. Les modalités de rémunération du cabinet vous sont présentées par écrit avant toute proposition." },
      { q: 'Dois-je transférer mes contrats au cabinet ?', a: "Non. Le bilan peut conclure que vos contrats actuels conviennent." },
    ],
    simulator: 'bilan-patrimonial',
    related: ['preparer/assurance-vie', 'preparer/transmission', 'preparer/retraite-dirigeant'],
  },
];
