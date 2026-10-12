import type { Offer } from '../types';

const group = 'Vigne et agriculture';

export const protegerAgricole: Offer[] = [
  {
    slug: 'assurance-viticole',
    universe: 'proteger',
    group,
    name: 'Assurance du domaine viticole',
    tagline: 'De la vigne à la cave',
    title: 'Assurance viticole en Bourgogne : courtier indépendant',
    description:
      "Assurance des domaines viticoles : récolte, chai, stocks, matériel, responsabilité. Un courtier compare les assureurs pour les vignerons de Bourgogne.",
    h1: 'Assurance du domaine viticole',
    intro:
      "Un domaine expose trois valeurs très différentes : la récolte sur pied, l'outil de production et des années de stock en cave. Chacune appelle une garantie propre.",
    audience: [
      'Vignerons indépendants qui vinifient et vendent leur production',
      'Viticulteurs qui livrent leur raisin à une cave coopérative ou au négoce',
      'Domaines qui reçoivent du public : caveau, dégustation, œnotourisme',
    ],
    covers: [
      { name: 'La récolte', text: "Grêle, gel, sécheresse, excès d'eau : l'assurance des aléas climatiques sur la production de l'année." },
      { name: "L'outil de production", text: "Bâtiments, chai, cuverie, pressoir, groupe de froid, matériel de culture et de vendange." },
      { name: 'Le vin', text: "En cuve, en fût et en bouteilles : fuite, casse, incendie, accident de vinification, transport." },
      { name: 'Votre responsabilité', text: "Envers les clients, les visiteurs, les saisonniers et les acheteurs, en France et à l'export." },
    ],
    checks: [
      'La valeur déclarée des stocks suit-elle vos volumes et vos prix de vente actuels ?',
      'Le contrat distingue-t-il le vin en cours de vinification du vin fini ?',
      "L'accueil du public et la vente à l'export sont-ils déclarés ?",
    ],
    role:
      "Nous visitons le domaine, reprenons les contrats empilés au fil des années et vérifions que chaque valeur est assurée une seule fois, au bon montant. Puis nous comparons les assureurs spécialisés.",
    faq: [
      { q: "L'assurance récolte est-elle obligatoire ?", a: "Non. Mais le niveau d'indemnisation publique en cas d'aléa exceptionnel dépend désormais du fait d'être assuré ou non." },
      { q: 'Mon contrat couvre-t-il le vin en cuve ?', a: "Pas toujours. La garantie des stocks est souvent une option, avec un plafond à ajuster au volume et à la valeur de vos vins." },
      { q: 'Faut-il un contrat par risque ou un contrat global ?', a: "Les deux existent. Un contrat global simplifie la gestion ; des contrats séparés permettent parfois de meilleures garanties sur la récolte ou les stocks. Nous comparons." },
    ],
    simulator: 'recolte',
    related: ['proteger/aleas-climatiques', 'proteger/stocks-de-vin', 'proteger/materiel-agricole'],
  },
  {
    slug: 'assurance-agricole',
    universe: 'proteger',
    group,
    name: "Assurance de l'exploitation agricole",
    tagline: 'Élevage, cultures, polyculture',
    title: 'Assurance exploitation agricole : courtier en Saône-et-Loire',
    description:
      "Assurance des exploitations agricoles : bâtiments, cheptel, récoltes, matériel, responsabilité. Comparatif par un courtier en Bourgogne du Sud.",
    h1: "Assurance de l'exploitation agricole",
    intro:
      "Bâtiments d'élevage, fourrage, cheptel, cultures, tracteurs : l'exploitation concentre beaucoup de valeur sur un seul site. Un sinistre majeur peut arrêter l'activité pendant des mois.",
    audience: [
      'Éleveurs bovins, ovins et avicoles',
      'Exploitations de grandes cultures et de polyculture-élevage',
      'Exploitations qui diversifient : vente directe, gîte, méthanisation, photovoltaïque',
    ],
    covers: [
      { name: 'Les bâtiments et leur contenu', text: "Stabulations, hangars, silos, fourrage, aliments et récoltes engrangées : incendie, tempête, neige, dégâts des eaux." },
      { name: 'Le cheptel', text: "Mortalité accidentelle, foudre, électrocution, étouffement, vol, selon les contrats." },
      { name: 'Les cultures', text: "Aléas climatiques sur les récoltes sur pied, par culture ou à l'échelle de l'exploitation." },
      { name: 'La responsabilité', text: "Animaux échappés, pollution accidentelle, produits vendus, salariés et saisonniers." },
    ],
    checks: [
      'Les activités de diversification sont-elles déclarées au contrat ?',
      "Les bâtiments sont-ils assurés en valeur de reconstruction ou en valeur d'usage ?",
      "Les panneaux photovoltaïques en toiture ont-ils une garantie propre ?",
    ],
    role:
      "Nous faisons le tour de l'exploitation, actualisons les valeurs et vérifions les activités déclarées. Nous comparons ensuite les contrats sur les mêmes bases.",
    faq: [
      { q: 'La vente directe à la ferme est-elle couverte ?', a: "Seulement si elle est déclarée. La responsabilité liée aux produits vendus et à l'accueil du public doit figurer au contrat." },
      { q: "Que couvre l'assurance du cheptel ?", a: "Selon les formules : accident, foudre, incendie, parfois certaines maladies. Les pertes liées aux épizooties relèvent de dispositifs spécifiques." },
      { q: 'Peut-on assurer une installation photovoltaïque ?', a: "Oui, par une garantie dédiée couvrant le bris, l'incendie et la perte de recettes en cas d'arrêt de production." },
    ],
    simulator: 'couverture-exploitation',
    related: ['proteger/multirisque-exploitation', 'proteger/assurance-elevage', 'proteger/materiel-agricole'],
  },
  {
    slug: 'aleas-climatiques',
    universe: 'proteger',
    group,
    name: 'Aléas climatiques et récolte',
    tagline: 'Grêle, gel, sécheresse',
    title: 'Assurance récolte et aléas climatiques : vigne et cultures',
    description:
      "Assurance récolte : grêle, gel, sécheresse, excès d'eau. Fonctionnement, franchise, capital assuré. Étude par un courtier pour les vignerons et agriculteurs.",
    h1: 'Assurance des aléas climatiques',
    intro:
      "Un gel de printemps ou un orage de grêle peut emporter une récolte en une nuit. L'assurance compense la perte de production, au-delà d'une franchise que vous choisissez.",
    audience: [
      'Vignerons et viticulteurs',
      'Producteurs de grandes cultures, arboriculteurs et maraîchers',
      'Jeunes installés, dont la trésorerie supporte mal une année blanche',
    ],
    covers: [
      { name: 'Les événements garantis', text: "Grêle, gel, sécheresse, excès d'eau, tempête, coup de chaleur, selon le contrat." },
      { name: 'Le capital assuré', text: "Calculé à partir de la surface, de votre rendement de référence et d'un prix par unité produite." },
      { name: 'La franchise', text: "Le pourcentage de perte qui reste à votre charge. Plus elle est basse, plus la cotisation augmente." },
      { name: "L'aide publique", text: "Une partie de la cotisation des contrats éligibles est prise en charge par une subvention." },
    ],
    checks: [
      'Le rendement de référence retenu correspond-il à vos récoltes réelles des dernières années ?',
      'Le prix assuré reflète-t-il la valorisation de vos appellations ?',
      'La franchise est-elle appliquée à la parcelle, à la culture ou à l\'exploitation ?',
    ],
    role:
      "Nous calculons le capital à assurer avec vos déclarations de récolte, chiffrons plusieurs niveaux de franchise et vérifions l'éligibilité du contrat à la subvention.",
    faq: [
      { q: 'Quand faut-il souscrire ?', a: "Avant une date limite fixée chaque année pour chaque type de culture, en début de campagne. Passé ce délai, la récolte de l'année ne peut plus être assurée." },
      { q: 'La grêle seule suffit-elle ?', a: "Un contrat grêle seul coûte moins cher mais laisse le gel et la sécheresse à votre charge. Le choix dépend de l'exposition de vos parcelles et de votre trésorerie." },
      { q: 'Que se passe-t-il si je ne suis pas assuré ?', a: "En cas de perte exceptionnelle, une indemnisation publique existe, mais elle est nettement plus faible pour les exploitants non assurés." },
    ],
    simulator: 'recolte',
    related: ['proteger/assurance-viticole', 'proteger/assurance-agricole', 'proteger/perte-exploitation'],
  },
  {
    slug: 'multirisque-exploitation',
    universe: 'proteger',
    group,
    name: 'Multirisque exploitation',
    tagline: 'Bâtiments, contenu, responsabilité',
    title: 'Multirisque exploitation agricole et viticole',
    description:
      "Multirisque exploitation : bâtiments, chai, matériel, contenu et responsabilité civile de l'exploitant. Comparatif par un courtier à Chalon-sur-Saône.",
    h1: 'Multirisque exploitation',
    intro:
      "C'est le contrat socle de l'exploitation : il protège les bâtiments et ce qu'ils contiennent, et couvre votre responsabilité d'exploitant.",
    audience: [
      'Exploitations agricoles et domaines viticoles, propriétaires ou fermiers',
      'Sociétés agricoles : GAEC, EARL, SCEA',
      'Exploitants qui logent sur le site et veulent un seul contrat pour le tout',
    ],
    covers: [
      { name: 'Les bâtiments', text: "Incendie, tempête, grêle, neige, dégâts des eaux, catastrophes naturelles, vandalisme." },
      { name: 'Le contenu', text: "Matériel, marchandises, récoltes stockées, produits de traitement, mobilier professionnel." },
      { name: 'La responsabilité civile', text: "Dommages causés aux tiers par l'exploitation, les animaux, les salariés et les produits." },
      { name: 'Les extensions', text: "Bris de machine, perte d'exploitation, protection juridique, habitation de l'exploitant." },
    ],
    checks: [
      "Les valeurs assurées ont-elles été revues depuis les derniers travaux ou achats ?",
      "Si vous êtes fermier, qui assure quoi entre vous et le propriétaire ?",
      "Les bâtiments anciens en pierre ont-ils une clause de reconstruction adaptée ?",
    ],
    role:
      "Nous reprenons la liste des bâtiments et des valeurs, clarifions la répartition avec le propriétaire le cas échéant, puis nous mettons les assureurs en concurrence.",
    faq: [
      { q: 'Quelle différence avec une multirisque professionnelle classique ?', a: "Le contrat agricole intègre les risques propres au métier : animaux, récoltes, produits phytosanitaires, saisonniers, bâtiments de grande portée." },
      { q: "L'habitation peut-elle être dans le même contrat ?", a: "Oui, la plupart des assureurs le proposent. Cela évite les litiges de frontière entre partie privée et partie professionnelle." },
      { q: 'Comment est fixée la cotisation ?', a: "Selon les surfaces et l'usage des bâtiments, les capitaux déclarés, les protections en place et l'historique de sinistres." },
    ],
    simulator: 'couverture-exploitation',
    related: ['proteger/assurance-agricole', 'proteger/materiel-agricole', 'proteger/perte-exploitation'],
  },
  {
    slug: 'stocks-de-vin',
    universe: 'proteger',
    group,
    name: 'Cave et stocks de vin',
    tagline: 'Le vin en cuve, en fût, en bouteilles',
    title: 'Assurance cave et stocks de vin',
    description:
      "Assurance des stocks de vin : fuite de cuve, casse, incendie, accident de vinification, transport. Étude par un courtier pour les domaines de Bourgogne.",
    h1: 'Assurance de la cave et des stocks de vin',
    intro:
      "Plusieurs millésimes dorment en cave : c'est souvent la première valeur du domaine, et la moins bien assurée. Une vanne mal fermée ou une panne de froid suffit à la mettre en danger.",
    audience: [
      'Domaines qui élèvent et conservent plusieurs millésimes',
      'Négociants et caves qui stockent pour le compte de tiers',
      'Domaines qui expédient en France et à l\'étranger',
    ],
    covers: [
      { name: 'La perte de liquide', text: "Fuite, rupture de cuve ou de fût, erreur de manipulation." },
      { name: 'Les accidents de vinification', text: "Panne du groupe de froid, coupure de courant, altération accidentelle du vin, selon les contrats." },
      { name: 'Incendie, dégâts des eaux, vol', text: "Sur le vin en vrac, en fût et en bouteilles, y compris dans un entrepôt extérieur." },
      { name: 'Le transport', text: "Casse et vol pendant l'expédition, jusqu'à la livraison chez le client." },
    ],
    checks: [
      'Le vin est-il assuré à son prix de revient ou à son prix de vente ?',
      'Le capital suit-il la variation du stock au cours de l\'année ?',
      "Le vin stocké hors du domaine est-il inclus ?",
    ],
    role:
      "Nous valorisons le stock avec vous, appellation par appellation, et choisissons une formule dont le capital s'ajuste aux variations saisonnières.",
    faq: [
      { q: 'À quelle valeur assurer son stock ?', a: "Au prix de vente si vous voulez retrouver votre chiffre d'affaires, au prix de revient si vous voulez seulement reconstituer le stock. La différence de cotisation se chiffre." },
      { q: 'Une panne de froid est-elle couverte ?', a: "Uniquement si la garantie correspondante est souscrite. Elle n'est pas toujours incluse dans la formule de base." },
      { q: 'Et le vin vendu mais pas encore enlevé ?', a: "Tant qu'il est dans vos murs, vous en avez la garde : il doit être compris dans le capital assuré." },
    ],
    simulator: 'couverture-exploitation',
    related: ['proteger/assurance-viticole', 'proteger/multirisque-exploitation', 'proteger/perte-exploitation'],
  },
  {
    slug: 'materiel-agricole',
    universe: 'proteger',
    group,
    name: 'Matériel agricole et viticole',
    tagline: 'Tracteurs, enjambeurs, machines à vendanger',
    title: 'Assurance matériel agricole et bris de machine',
    description:
      "Assurance tracteurs, enjambeurs, machines à vendanger et matériel de cave : bris, vol, incendie, responsabilité. Comparatif par un courtier.",
    h1: 'Assurance du matériel agricole et viticole',
    intro:
      "Une machine à vendanger en panne la deuxième semaine de septembre ne se remplace pas en un jour. Le contrat doit payer la réparation et vous permettre de continuer.",
    audience: [
      'Domaines équipés d\'enjambeurs, de machines à vendanger et de pressoirs',
      'Exploitations avec tracteurs, moissonneuses, matériel de fenaison et de traite',
      'CUMA et entrepreneurs de travaux agricoles',
    ],
    covers: [
      { name: 'Le bris de machine', text: "Casse interne ou accidentelle, y compris pendant le travail, sur matériel roulant et fixe." },
      { name: 'Vol, incendie, vandalisme', text: "Au siège de l'exploitation, dans les parcelles et pendant les déplacements." },
      { name: 'La responsabilité', text: "En circulation sur route et pendant le travail dans les parcelles." },
      { name: 'La continuité', text: "Location d'un matériel de remplacement ou recours à un prestataire pendant la réparation." },
    ],
    checks: [
      'Quelle vétusté est appliquée, et à partir de quel âge ?',
      "L'électronique embarquée et les systèmes de guidage sont-ils couverts ?",
      "Le matériel prêté, loué ou utilisé en commun est-il garanti ?",
    ],
    role:
      "Nous établissons la liste du matériel avec ses valeurs à jour et comparons les contrats sur la vétusté, les franchises et la prise en charge d'un matériel de remplacement.",
    faq: [
      { q: 'Un tracteur doit-il être assuré même s\'il ne sort pas de l\'exploitation ?', a: "Oui. L'assurance de responsabilité est obligatoire pour tout véhicule à moteur, y compris s'il ne circule que sur des terrains privés." },
      { q: 'Le bris de machine couvre-t-il l\'usure ?', a: "Non. Il couvre les dommages soudains et accidentels, pas l'usure normale ni le défaut d'entretien." },
      { q: 'Que se passe-t-il pour le matériel en CUMA ?', a: "Il est assuré par la CUMA. Vérifiez toutefois la répartition des responsabilités quand vous l'utilisez." },
    ],
    simulator: 'couverture-exploitation',
    related: ['proteger/multirisque-exploitation', 'proteger/assurance-viticole', 'proteger/flotte-automobile'],
  },
  {
    slug: 'assurance-elevage',
    universe: 'proteger',
    group,
    name: 'Élevage et cheptel',
    tagline: 'Mortalité, accidents, responsabilité',
    title: 'Assurance élevage et mortalité du bétail',
    description:
      "Assurance du cheptel : mortalité accidentelle, foudre, bâtiments d'élevage, responsabilité des animaux. Courtier pour les éleveurs du Charolais et de la Bresse.",
    h1: "Assurance de l'élevage et du cheptel",
    intro:
      "Le troupeau est à la fois votre capital et votre revenu. Un incendie de stabulation ou une série d'accidents peut effacer plusieurs années de sélection.",
    audience: [
      'Éleveurs bovins allaitants et laitiers',
      'Éleveurs de volailles, ovins, caprins et équins',
      'Éleveurs détenant des reproducteurs de valeur',
    ],
    covers: [
      { name: 'La mortalité du cheptel', text: "Accident, foudre, électrocution, incendie, étouffement, attaque, selon la formule choisie." },
      { name: 'Les animaux de valeur', text: "Garantie individuelle des reproducteurs et animaux de concours, en valeur agréée." },
      { name: "Les bâtiments d'élevage", text: "Stabulations, poulaillers, installations de traite et de ventilation." },
      { name: 'La responsabilité', text: "Divagation d'animaux sur la route, dégâts chez un voisin, accidents lors de foires et concours." },
    ],
    checks: [
      "Le cheptel est-il assuré à l'effectif réel, qui varie dans l'année ?",
      "Les animaux en pension ou en estive sont-ils couverts ?",
      'Une panne de ventilation ou de traite donne-t-elle lieu à indemnisation ?',
    ],
    role:
      "Nous évaluons le troupeau avec vous et sélectionnons les garanties utiles à votre élevage, sans payer pour des risques que vous ne courez pas.",
    faq: [
      { q: 'Les maladies sont-elles couvertes ?', a: "Certaines formules couvrent des maladies précises. Les maladies réglementées relèvent surtout de dispositifs publics et professionnels d'indemnisation." },
      { q: 'Un animal échappé provoque un accident : qui paie ?', a: "Votre responsabilité civile d'exploitant, à condition que l'activité d'élevage soit bien déclarée au contrat." },
      { q: 'Comment est indemnisé un reproducteur ?', a: "Sur la base d'une valeur convenue à l'avance avec l'assureur, ce qui évite la discussion après le sinistre." },
    ],
    simulator: 'couverture-exploitation',
    related: ['proteger/assurance-agricole', 'proteger/multirisque-exploitation', 'proteger/perte-exploitation'],
  },
];
