import type { Profile } from './types';

/** Pages « Vous êtes » : elles assemblent, pour un profil, les offres des deux univers. */
export const profiles: Profile[] = [
  {
    slug: 'artisan-btp',
    name: 'Artisan ou entreprise du bâtiment',
    tagline: 'Décennale, chantier, matériel, dirigeant',
    title: 'Assurances des artisans du bâtiment en Bourgogne du Sud',
    description:
      "Artisans et entreprises du bâtiment : décennale, responsabilité civile, engins, véhicules, prévoyance. Un courtier indépendant à Chalon-sur-Saône.",
    h1: 'Vous êtes artisan ou dirigeant d\'une entreprise du bâtiment',
    intro:
      "Votre métier vous impose des assurances, vos clients en exigent d'autres, et votre revenu dépend de votre présence sur les chantiers. Voici ce qu'il faut regarder, dans l'ordre.",
    stakes: [
      { name: 'Être en règle', text: "Une attestation décennale à jour, qui mentionne toutes les activités que vous exercez réellement." },
      { name: 'Tenir en cas de sinistre', text: "Un dommage chez un client, un engin volé ou un dépôt incendié ne doivent pas arrêter l'entreprise." },
      { name: 'Protéger votre revenu', text: "Une blessure vous éloigne des chantiers : la prévoyance prend le relais de votre rémunération." },
      { name: 'Construire hors de l\'entreprise', text: "Une retraite et une épargne qui ne dépendent pas de la revente du fonds." },
    ],
    offers: ['proteger/decennale', 'proteger/rc-pro-batiment', 'proteger/engins-de-chantier', 'proteger/prevoyance', 'financer/financement-materiel', 'preparer/retraite-dirigeant'],
    simulators: ['decennale', 'couverture-btp', 'prevoyance'],
    faq: [
      { q: 'Par quoi commencer quand on crée son entreprise ?', a: "Par la décennale et la responsabilité civile, indispensables pour signer un premier devis. Le reste se met en place au fil des premiers mois." },
      { q: 'Je suis seul, ai-je besoin d\'une prévoyance ?', a: "C'est précisément quand l'entreprise repose sur une seule personne que l'arrêt de travail coûte le plus cher." },
      { q: 'Intervenez-vous sur les chantiers ?', a: "Oui, si nécessaire, pour comprendre vos techniques et décrire correctement vos activités à l'assureur." },
    ],
  },
  {
    slug: 'vigneron',
    name: 'Vigneron ou viticulteur',
    tagline: 'Récolte, cave, matériel, transmission',
    title: 'Assurances des vignerons de Bourgogne du Sud',
    description:
      "Vignerons et viticulteurs : récolte, chai, stocks de vin, matériel, prévoyance et transmission du domaine. Un courtier indépendant à Chalon-sur-Saône.",
    h1: 'Vous êtes vigneron ou viticulteur',
    intro:
      "Votre année se joue sur quelques nuits de printemps et quelques semaines de vendange. Votre patrimoine, lui, se construit sur des décennies. Les deux méritent une protection pensée ensemble.",
    stakes: [
      { name: "Passer l'année blanche", text: "Un gel ou une grêle ne doit pas compromettre la trésorerie de deux exercices." },
      { name: 'Protéger le stock', text: "Plusieurs millésimes en cave représentent souvent plus que les bâtiments." },
      { name: 'Ne pas dépendre d\'une machine', text: "En pleine vendange, une panne se mesure en heures." },
      { name: 'Préparer la suite', text: "Transmettre le domaine sans obliger les enfants à s'endetter, ni léser ceux qui ne reprennent pas." },
    ],
    offers: ['proteger/assurance-viticole', 'proteger/aleas-climatiques', 'proteger/stocks-de-vin', 'proteger/materiel-agricole', 'financer/immobilier-professionnel', 'preparer/protection-des-associes'],
    simulators: ['recolte', 'couverture-exploitation', 'homme-cle'],
    faq: [
      { q: 'Travaillez-vous avec des assureurs spécialisés en viticulture ?', a: "Le cabinet consulte les compagnies du réseau qui assurent les exploitations viticoles, et compare leurs conditions sur votre domaine." },
      { q: 'Faut-il assurer la récolte quand on est en coopérative ?', a: "Oui : le risque climatique pèse sur votre production, quel que soit le mode de commercialisation." },
      { q: 'Vous déplacez-vous au domaine ?', a: "Oui. La visite permet de vérifier les valeurs et de voir ce que les contrats ne décrivent pas." },
    ],
  },
  {
    slug: 'agriculteur',
    name: 'Agriculteur ou éleveur',
    tagline: 'Bâtiments, cheptel, cultures, matériel',
    title: 'Assurances des agriculteurs et éleveurs',
    description:
      "Agriculteurs et éleveurs de Saône-et-Loire, de Bresse et du Charolais : bâtiments, cheptel, cultures, matériel, prévoyance. Courtier indépendant.",
    h1: 'Vous êtes agriculteur ou éleveur',
    intro:
      "Une exploitation concentre beaucoup de valeur en un seul lieu et repose sur peu de personnes. L'assurance doit suivre vos investissements, et non l'inverse.",
    stakes: [
      { name: 'Reconstruire vite', text: "Un bâtiment d'élevage détruit doit être remplacé sans attendre, à sa valeur réelle." },
      { name: 'Protéger le troupeau', text: "Des années de sélection ne se rachètent pas en une saison." },
      { name: 'Sécuriser la diversification', text: "Vente directe, gîte, photovoltaïque : chaque activité nouvelle doit être déclarée." },
      { name: 'Tenir en cas d\'accident', text: "Si vous êtes arrêté, il faut payer un remplaçant et faire vivre le foyer." },
    ],
    offers: ['proteger/assurance-agricole', 'proteger/multirisque-exploitation', 'proteger/assurance-elevage', 'proteger/materiel-agricole', 'proteger/aleas-climatiques', 'proteger/prevoyance'],
    simulators: ['couverture-exploitation', 'perte-exploitation', 'prevoyance'],
    faq: [
      { q: 'Assurez-vous les sociétés agricoles ?', a: "Oui : GAEC, EARL et SCEA. Les contrats de l'exploitation sont souscrits par la société, la prévoyance par chaque associé." },
      { q: 'Peut-on assurer le coût d\'un remplaçant ?', a: "Certains contrats de prévoyance versent des indemnités pensées pour financer le service de remplacement." },
      { q: 'Mes contrats datent de mon installation : faut-il tout revoir ?', a: "Au moins les valeurs assurées et les activités déclarées. Un audit gratuit permet de le vérifier." },
    ],
  },
  {
    slug: 'dirigeant',
    name: "Dirigeant d'entreprise",
    tagline: 'Entreprise, responsabilité, patrimoine',
    title: "Assurances et patrimoine du dirigeant d'entreprise",
    description:
      "Dirigeants de TPE et PME : responsabilité, homme-clé, prévoyance, retraite, trésorerie et transmission. Un courtier indépendant à Chalon-sur-Saône.",
    h1: "Vous dirigez une entreprise",
    intro:
      "Vous avez assuré l'entreprise. Vous êtes-vous assuré vous-même ? Le dirigeant est souvent la personne la moins bien protégée de sa société.",
    stakes: [
      { name: "L'entreprise sans vous", text: "Que devient-elle si vous êtes absent six mois, ou définitivement ?" },
      { name: 'Votre responsabilité', text: "Une faute de gestion peut engager vos biens personnels." },
      { name: 'Votre revenu et votre retraite', text: "Votre protection sociale dépend de votre statut, et réserve des surprises." },
      { name: 'Votre patrimoine', text: "Distinguer ce qui appartient à l'entreprise de ce qui vous appartient, et organiser la transmission." },
    ],
    offers: ['proteger/homme-cle', 'proteger/responsabilite-dirigeant', 'proteger/prevoyance', 'financer/credit-professionnel', 'preparer/retraite-dirigeant', 'preparer/tresorerie-entreprise'],
    simulators: ['homme-cle', 'prevoyance', 'tresorerie', 'bilan-patrimonial'],
    faq: [
      { q: 'Mon statut change-t-il ma protection ?', a: "Beaucoup. Un gérant majoritaire et un président de société n'ont ni les mêmes cotisations ni les mêmes droits en cas d'arrêt ou à la retraite." },
      { q: 'Travaillez-vous avec mon expert-comptable ?', a: "Oui. Les sujets de rémunération, de fiscalité et de trésorerie se traitent avec lui." },
      { q: 'Par où commencer ?', a: "Par un bilan : il fait apparaître en une heure les deux ou trois priorités." },
    ],
  },
  {
    slug: 'independant',
    name: 'Indépendant ou profession libérale',
    tagline: 'Revenu, santé, retraite',
    title: 'Assurances des indépendants et professions libérales',
    description:
      "Commerçants, artisans, consultants et professions libérales : prévoyance, mutuelle, responsabilité, retraite. Un courtier indépendant à Chalon-sur-Saône.",
    h1: 'Vous êtes indépendant ou profession libérale',
    intro:
      "Vous êtes à la fois l'entreprise et son seul salarié. Votre protection sociale est moins complète que celle d'un salarié : c'est à vous de la construire.",
    stakes: [
      { name: 'Votre revenu', text: "En cas d'arrêt, les indemnités de votre régime sont plafonnées et arrivent après une carence." },
      { name: 'Votre santé', text: "Une complémentaire adaptée à vos dépenses réelles, déductible dans certaines limites." },
      { name: 'Votre responsabilité', text: "Une erreur professionnelle peut coûter plus que votre chiffre d'affaires annuel." },
      { name: 'Votre retraite', text: "Elle sera sans doute faible : mieux vaut le savoir à quarante ans qu'à soixante." },
    ],
    offers: ['proteger/prevoyance', 'proteger/mutuelle-sante', 'proteger/multirisque-professionnelle', 'proteger/protection-juridique', 'preparer/per', 'preparer/assurance-vie'],
    simulators: ['prevoyance', 'per', 'retraite'],
    faq: [
      { q: 'Les cotisations sont-elles déductibles ?', a: "Pour les travailleurs non salariés, les cotisations de prévoyance, de santé et de retraite peuvent l'être dans certaines limites." },
      { q: 'Je débute : est-ce trop tôt ?', a: "La prévoyance se souscrit d'autant plus facilement qu'on est jeune et en bonne santé." },
      { q: 'Assurez-vous la responsabilité civile professionnelle hors bâtiment ?', a: "Oui, pour la plupart des métiers de service et de conseil." },
    ],
  },
  {
    slug: 'particulier',
    name: 'Particulier',
    tagline: 'Famille, emprunt, épargne, transmission',
    title: 'Assurances et épargne des particuliers',
    description:
      "Particuliers de la région de Chalon-sur-Saône : assurance emprunteur, mutuelle, épargne, retraite et transmission. Un courtier indépendant vous accompagne.",
    h1: 'Vous êtes un particulier',
    intro:
      "Un emprunt, des enfants, une retraite à préparer, des parents qui vieillissent : chaque étape pose une question d'assurance ou d'épargne. Nous y répondons une par une.",
    stakes: [
      { name: 'Protéger le foyer', text: "Que se passe-t-il pour votre famille si un revenu disparaît ?" },
      { name: 'Payer moins pour son prêt', text: "L'assurance emprunteur peut être changée à tout moment." },
      { name: 'Faire travailler son épargne', text: "Sans la bloquer, et en comprenant ce que l'on signe." },
      { name: 'Transmettre', text: "Décider qui reçoit quoi, plutôt que de laisser la loi le faire." },
    ],
    offers: ['financer/credit-immobilier', 'proteger/assurance-emprunteur', 'financer/regroupement-de-credits', 'proteger/mutuelle-sante', 'preparer/assurance-vie', 'preparer/transmission'],
    simulators: ['credit', 'emprunteur', 'assurance-vie'],
    faq: [
      { q: 'Faut-il un patrimoine important pour vous consulter ?', a: "Non. Un emprunt en cours ou une première épargne suffisent à justifier un rendez-vous." },
      { q: 'Le premier rendez-vous est-il payant ?', a: "Non, il est sans engagement." },
      { q: 'Pouvez-vous reprendre des contrats souscrits ailleurs ?', a: "Nous pouvons les analyser et vous dire s'il y a lieu d'en changer. Parfois, la réponse est non." },
    ],
  },
];

export const profilePath = (slug: string) => `/vous-etes/${slug}`;
