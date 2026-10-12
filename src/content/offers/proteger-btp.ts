import type { Offer } from '../types';

const group = 'Bâtiment et travaux publics';

export const protegerBtp: Offer[] = [
  {
    slug: 'assurance-btp',
    universe: 'proteger',
    group,
    name: 'Assurance du bâtiment',
    tagline: "Toutes les assurances de l'entreprise de bâtiment",
    title: 'Assurance BTP à Chalon-sur-Saône : courtier indépendant',
    description:
      "Décennale, responsabilité civile, chantier, engins, véhicules : un courtier compare les assureurs pour les artisans et entreprises du bâtiment en Bourgogne du Sud.",
    h1: 'Assurance des artisans et entreprises du bâtiment',
    intro:
      "Une entreprise de bâtiment cumule des obligations légales, des risques de chantier et du matériel coûteux. Nous regardons l'ensemble, pour que chaque risque soit couvert une fois, au bon niveau.",
    audience: [
      'Artisans seuls et micro-entrepreneurs du bâtiment',
      'Entreprises de gros œuvre et de second œuvre, de 2 à 50 salariés',
      'Entreprises de travaux publics, de terrassement et de réseaux',
    ],
    covers: [
      { name: 'Les assurances obligatoires', text: "La responsabilité décennale pour vos ouvrages, et l'assurance des véhicules qui circulent." },
      { name: 'Votre responsabilité', text: "Les dommages causés aux clients, aux voisins du chantier et aux autres corps d'état, pendant et après les travaux." },
      { name: 'Le chantier et le matériel', text: "L'ouvrage en cours de construction, l'outillage, les engins et les matériaux stockés ou transportés." },
      { name: "L'entreprise et son dirigeant", text: "Les locaux, la perte d'exploitation, la protection juridique, la prévoyance et la santé de l'équipe." },
    ],
    checks: [
      "Les activités inscrites sur l'attestation correspondent-elles à ce que vous faites réellement sur les chantiers ?",
      'Les plafonds de garantie sont-ils à la hauteur de vos plus gros marchés ?',
      "Qui est couvert quand vous sous-traitez, et quand vous êtes vous-même sous-traitant ?",
    ],
    role:
      "Nous reprenons vos contrats un par un, nous repérons les doublons et les manques, puis nous interrogeons plusieurs assureurs sur votre dossier réel. Vous recevez un comparatif lisible et vous décidez.",
    faq: [
      { q: "Quelles assurances sont obligatoires pour une entreprise du bâtiment ?", a: "L'assurance de responsabilité décennale, pour tout professionnel qui réalise des travaux de construction, et l'assurance des véhicules. Les autres garanties ne sont pas imposées par la loi mais sont souvent exigées par les clients et les maîtres d'œuvre." },
      { q: 'Peut-on regrouper toutes ses assurances chez un même assureur ?', a: "C'est possible et parfois avantageux, mais pas systématique : le meilleur assureur pour la décennale n'est pas toujours le mieux placé pour la flotte ou les engins. Nous comparons les deux scénarios." },
      { q: 'À quel moment revoir ses contrats ?', a: "À chaque changement d'activité, d'effectif ou de chiffre d'affaires significatif, et au moins une fois par an avant l'échéance." },
    ],
    simulator: 'couverture-btp',
    related: ['proteger/decennale', 'proteger/rc-pro-batiment', 'proteger/engins-de-chantier'],
  },
  {
    slug: 'decennale',
    universe: 'proteger',
    group,
    name: 'Assurance décennale',
    tagline: 'Obligatoire avant le premier chantier',
    title: 'Assurance décennale artisan : étude par un courtier',
    description:
      "Assurance décennale pour artisans et entreprises du bâtiment : obligations, activités garanties, attestation. Étude comparative par un courtier à Chalon-sur-Saône.",
    h1: 'Assurance décennale',
    intro:
      "Elle couvre pendant dix ans les dommages qui menacent la solidité de l'ouvrage ou le rendent inutilisable. Sans elle, vous ne pouvez ni ouvrir un chantier ni remettre un devis conforme.",
    mandatory: true,
    audience: [
      "Tout professionnel qui réalise des travaux de construction, quel que soit son statut",
      "Créateurs d'entreprise qui ont besoin d'une attestation pour démarrer",
      'Entreprises résiliées ou dont le contrat arrive à échéance',
    ],
    covers: [
      { name: "Les dommages à l'ouvrage", text: "Fissures, infiltrations, défauts de structure ou d'étanchéité qui apparaissent dans les dix ans suivant la réception." },
      { name: 'Vos activités déclarées', text: "Seuls les travaux correspondant aux activités inscrites sur l'attestation sont garantis." },
      { name: 'Le bon fonctionnement', text: "La garantie de deux ans sur les éléments d'équipement dissociables, souvent incluse." },
      { name: 'Les garanties complémentaires', text: "Dommages immatériels, dommages aux existants, responsabilité du sous-traitant : selon les contrats." },
    ],
    checks: [
      "Chaque activité exercée figure-t-elle sur l'attestation, avec la bonne définition ?",
      "Le contrat couvre-t-il les chantiers ouverts avant la souscription (reprise du passé) ?",
      'Quel est le montant maximal de chantier accepté par le contrat ?',
    ],
    role:
      "Nous présentons votre dossier à plusieurs assureurs : expérience, diplômes, chiffre d'affaires, sinistres passés. Nous relisons l'attestation avec vous avant signature et à chaque évolution de votre activité.",
    faq: [
      { q: "La décennale est-elle obligatoire pour un micro-entrepreneur ?", a: "Oui. L'obligation dépend de la nature des travaux, pas du statut ni du chiffre d'affaires. Elle doit être souscrite avant l'ouverture du chantier." },
      { q: 'Que risque-t-on sans assurance décennale ?', a: "Le défaut d'assurance est un délit, puni d'une amende et d'une peine d'emprisonnement. Surtout, vous répondez seul, sur vos biens, des réparations pendant dix ans." },
      { q: "Peut-on s'assurer après une résiliation ?", a: "Souvent, oui. Certains assureurs acceptent les dossiers résiliés pour non-paiement ou pour sinistre. Les conditions dépendent du motif et de votre historique." },
      { q: 'Combien coûte une décennale ?', a: "Le tarif dépend du métier, du chiffre d'affaires, de l'expérience et des sinistres. Il n'existe pas de prix public : c'est la raison d'être d'une étude comparative." },
    ],
    simulator: 'decennale',
    related: ['proteger/rc-pro-batiment', 'proteger/dommages-ouvrage', 'proteger/assurance-btp'],
  },
  {
    slug: 'rc-pro-batiment',
    universe: 'proteger',
    group,
    name: 'Responsabilité civile professionnelle',
    tagline: 'Les dommages causés aux tiers',
    title: 'RC Pro bâtiment : responsabilité civile des artisans',
    description:
      "Responsabilité civile professionnelle du bâtiment : dommages aux tiers pendant et après le chantier. Comparatif par un courtier indépendant à Chalon-sur-Saône.",
    h1: 'Responsabilité civile professionnelle du bâtiment',
    intro:
      "Un tuyau percé, un échafaudage qui tombe, un incendie parti d'un chalumeau : la responsabilité civile prend en charge les dommages causés aux autres, là où la décennale ne joue pas.",
    audience: [
      'Toutes les entreprises du bâtiment, en complément de la décennale',
      "Artisans d'entretien et de dépannage, dont les travaux ne relèvent pas de la décennale",
      "Entreprises qui interviennent chez des particuliers ou en site occupé",
    ],
    covers: [
      { name: 'Pendant les travaux', text: "Dommages corporels, matériels et immatériels causés aux clients, aux voisins et aux autres intervenants." },
      { name: 'Après la livraison', text: "Dommages survenus après réception et qui ne relèvent pas de la garantie décennale." },
      { name: 'Les biens confiés', text: "Mobilier, équipements et parties de l'ouvrage existant sur lesquels vous travaillez." },
      { name: "La faute inexcusable de l'employeur", text: "Les conséquences financières d'un accident du travail reconnu comme tel." },
    ],
    checks: [
      "Les dommages aux existants et aux biens confiés sont-ils inclus, et jusqu'à quel montant ?",
      'Les travaux par point chaud (soudure, chalumeau) sont-ils garantis sans restriction ?',
      'Le plafond par sinistre correspond-il aux exigences de vos donneurs d\'ordre ?',
    ],
    role:
      "Nous vérifions que la responsabilité civile et la décennale s'emboîtent sans trou, puis nous comparons plafonds, franchises et exclusions chez plusieurs assureurs.",
    faq: [
      { q: 'Quelle différence avec la décennale ?', a: "La décennale couvre les dommages graves à l'ouvrage que vous avez construit, pendant dix ans. La responsabilité civile couvre les dommages causés aux tiers, pendant et après les travaux." },
      { q: 'Est-elle obligatoire ?', a: "La loi ne l'impose pas à tous les métiers du bâtiment, mais elle est exigée en pratique par les clients, les maîtres d'œuvre et les marchés publics." },
      { q: 'Couvre-t-elle mes sous-traitants ?', a: "Elle couvre votre responsabilité du fait de vos sous-traitants, pas leur propre responsabilité. Il faut leur demander leurs attestations." },
    ],
    simulator: 'couverture-btp',
    related: ['proteger/decennale', 'proteger/tous-risques-chantier', 'proteger/protection-juridique'],
  },
  {
    slug: 'dommages-ouvrage',
    universe: 'proteger',
    group,
    name: 'Dommages-ouvrage',
    tagline: "L'assurance de celui qui fait construire",
    title: 'Assurance dommages-ouvrage : promoteurs et particuliers',
    description:
      "Assurance dommages-ouvrage pour constructeurs, promoteurs, marchands de biens et particuliers qui font construire. Étude par un courtier à Chalon-sur-Saône.",
    h1: 'Assurance dommages-ouvrage',
    intro:
      "Elle est souscrite par celui qui fait construire. En cas de désordre de nature décennale, elle paie les réparations sans attendre que les responsabilités soient établies, puis se retourne contre les constructeurs.",
    mandatory: true,
    audience: [
      'Constructeurs de maisons individuelles, promoteurs et marchands de biens',
      'Entreprises qui font construire ou agrandir leurs locaux',
      'Particuliers qui font construire, rénovent lourdement ou vendent avant dix ans',
    ],
    covers: [
      { name: 'Le préfinancement des réparations', text: "Les travaux de réparation des dommages de nature décennale, sans recherche préalable de responsabilité." },
      { name: 'Des délais encadrés', text: "L'assureur doit prendre position puis présenter une offre d'indemnité dans des délais fixés par la loi." },
      { name: 'La revente', text: "La garantie suit l'ouvrage : elle bénéficie aux acquéreurs successifs pendant dix ans." },
      { name: 'Les garanties associées', text: "Tous risques chantier et responsabilité du maître d'ouvrage, souvent proposées dans le même contrat." },
    ],
    checks: [
      "Les attestations décennale de toutes les entreprises du chantier sont-elles valides à la date d'ouverture ?",
      "Le contrat est-il souscrit avant le début des travaux ?",
      "Une étude de sol et un contrôle technique sont-ils exigés par l'assureur ?",
    ],
    role:
      "Nous montons le dossier technique, collectons les attestations des entreprises et consultons les assureurs spécialisés. Un dossier complet dès le départ réduit le délai et le tarif.",
    faq: [
      { q: 'Qui doit souscrire la dommages-ouvrage ?', a: "Le maître d'ouvrage, c'est-à-dire celui qui fait réaliser les travaux : promoteur, constructeur, entreprise ou particulier." },
      { q: 'Que se passe-t-il si un particulier ne la souscrit pas ?', a: "Il devra agir lui-même contre les constructeurs en cas de désordre, ce qui peut prendre des années. À la revente dans les dix ans, l'absence de garantie doit être signalée et pèse sur le prix." },
      { q: 'Peut-on la souscrire en cours de chantier ?', a: "C'est beaucoup plus difficile et plus cher. Peu d'assureurs l'acceptent, et sous conditions." },
    ],
    simulator: 'decennale',
    related: ['proteger/decennale', 'proteger/tous-risques-chantier', 'proteger/assurance-btp'],
  },
  {
    slug: 'tous-risques-chantier',
    universe: 'proteger',
    group,
    name: 'Tous risques chantier',
    tagline: "L'ouvrage pendant sa construction",
    title: 'Assurance tous risques chantier (TRC)',
    description:
      "Tous risques chantier : incendie, vol, intempéries et effondrement pendant la construction. Comparatif d'assureurs par un courtier à Chalon-sur-Saône.",
    h1: 'Assurance tous risques chantier',
    intro:
      "Entre l'ouverture du chantier et la réception, l'ouvrage n'est couvert ni par la décennale ni par la dommages-ouvrage. La tous risques chantier comble cet intervalle.",
    audience: [
      'Maîtres d\'ouvrage et entreprises générales, pour un chantier donné',
      'Entreprises qui enchaînent les chantiers et préfèrent un contrat annuel',
      'Constructeurs de maisons individuelles',
    ],
    covers: [
      { name: "Les dommages à l'ouvrage en cours", text: "Incendie, explosion, tempête, inondation, effondrement, vandalisme." },
      { name: 'Le vol sur chantier', text: "Matériaux et équipements déjà livrés ou posés, selon les conditions de protection du site." },
      { name: 'Tous les intervenants', text: "Un seul contrat pour l'ensemble des entreprises, ce qui évite les recours croisés." },
      { name: 'Les frais annexes', text: "Déblaiement, démolition, honoraires d'experts, selon les options." },
    ],
    checks: [
      'La période de garantie couvre-t-elle un éventuel retard de chantier ?',
      "Quelles mesures de protection contre le vol l'assureur impose-t-il ?",
      "Les existants sont-ils couverts en cas de rénovation ou d'extension ?",
    ],
    role:
      "Nous calons les montants sur le coût réel de reconstruction, vérifions les conditions de vol et comparons contrat par chantier et contrat annuel selon votre volume d'activité.",
    faq: [
      { q: 'Est-elle obligatoire ?', a: "Non, mais elle est fréquemment exigée par les maîtres d'ouvrage, les banques et dans les marchés d'une certaine taille." },
      { q: 'Qui la souscrit ?', a: "Le plus souvent le maître d'ouvrage ou l'entreprise générale, pour le compte de tous les intervenants." },
      { q: 'Couvre-t-elle le matériel de chantier ?', a: "Non, en général. Les engins et l'outillage relèvent d'un contrat bris de machine ou d'une garantie spécifique." },
    ],
    simulator: 'couverture-btp',
    related: ['proteger/dommages-ouvrage', 'proteger/engins-de-chantier', 'proteger/rc-pro-batiment'],
  },
  {
    slug: 'engins-de-chantier',
    universe: 'proteger',
    group,
    name: 'Engins et matériel de chantier',
    tagline: 'Bris, vol et responsabilité des engins',
    title: 'Assurance engins de chantier et bris de machine',
    description:
      "Assurance des engins de chantier : bris de machine, vol, incendie, responsabilité en circulation et en fonctionnement. Courtier à Chalon-sur-Saône.",
    h1: 'Assurance des engins et du matériel de chantier',
    intro:
      "Une mini-pelle immobilisée, c'est un chantier arrêté. Le contrat doit couvrir la machine, la responsabilité qu'elle engage et, si besoin, le coût de son remplacement.",
    audience: [
      'Entreprises de terrassement, de travaux publics et de démolition',
      'Maçons, couvreurs et paysagistes équipés de mini-pelles, nacelles ou chariots',
      'Entreprises qui louent ou empruntent du matériel',
    ],
    covers: [
      { name: 'Le bris de machine', text: "Casse accidentelle, fausse manœuvre, renversement, y compris en cours d'utilisation." },
      { name: 'Le vol et l\'incendie', text: "Sur chantier, au dépôt et pendant le transport, selon les protections prévues." },
      { name: 'La responsabilité', text: "En circulation, comme un véhicule, et en fonctionnement, comme un outil." },
      { name: 'Le matériel loué', text: "Les engins pris en location, dont vous êtes responsable envers le loueur." },
    ],
    checks: [
      "L'indemnisation se fait-elle en valeur à neuf, et jusqu'à quel âge de la machine ?",
      "Les frais de location d'un engin de remplacement sont-ils prévus ?",
      "Le vol sur chantier non clos est-il garanti ?",
    ],
    role:
      "Nous dressons l'inventaire du parc avec ses valeurs, puis nous comparons les contrats sur la vétusté appliquée, les franchises et la garantie du matériel loué.",
    faq: [
      { q: 'Un engin doit-il être assuré comme un véhicule ?', a: "Oui dès qu'il est automoteur : l'assurance de responsabilité en circulation est obligatoire, même s'il ne roule que sur le chantier." },
      { q: "L'outillage portatif est-il couvert ?", a: "Par une garantie distincte, souvent proposée en option, avec un plafond par objet et par sinistre." },
      { q: 'Et pour un engin loué quelques jours ?', a: "Vérifiez si votre contrat couvre le matériel loué. Sinon, l'assurance proposée par le loueur est une solution ponctuelle, généralement plus chère." },
    ],
    simulator: 'couverture-btp',
    related: ['proteger/flotte-automobile', 'proteger/tous-risques-chantier', 'proteger/perte-exploitation'],
  },
];
