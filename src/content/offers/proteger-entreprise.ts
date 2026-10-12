import type { Offer } from '../types';

const group = 'Entreprise et dirigeant';

export const protegerEntreprise: Offer[] = [
  {
    slug: 'multirisque-professionnelle',
    universe: 'proteger',
    group,
    name: 'Multirisque professionnelle',
    tagline: 'Locaux, matériel, responsabilité',
    title: 'Multirisque professionnelle : locaux et activité',
    description:
      "Multirisque professionnelle pour artisans, commerçants et TPE : locaux, matériel, stocks, responsabilité civile. Comparatif par un courtier à Chalon-sur-Saône.",
    h1: 'Multirisque professionnelle',
    intro:
      "Atelier, dépôt, bureau ou commerce : le contrat protège vos locaux, ce qu'ils contiennent et votre responsabilité envers les clients et les voisins.",
    audience: [
      'Artisans disposant d\'un atelier ou d\'un dépôt',
      'Commerçants, restaurateurs et professions de service',
      'TPE et PME, propriétaires ou locataires de leurs locaux',
    ],
    covers: [
      { name: 'Les locaux', text: "Incendie, dégâts des eaux, tempête, catastrophes naturelles, bris de vitrine, vandalisme." },
      { name: 'Le contenu', text: "Matériel, outillage, mobilier, marchandises et stocks, y compris ceux des clients." },
      { name: 'La responsabilité civile', text: "Dommages causés aux tiers du fait de votre activité et de vos locaux." },
      { name: 'Les options', text: "Perte d'exploitation, bris de machine, vol, protection juridique, matériel transporté." },
    ],
    checks: [
      "Les capitaux assurés ont-ils suivi vos derniers investissements ?",
      'Les protections contre le vol exigées par le contrat sont-elles réellement en place ?',
      "Le matériel transporté dans les véhicules est-il couvert ?",
    ],
    role:
      "Nous vérifions les valeurs, les clauses de vol et la répartition avec le bailleur, puis nous comparons les assureurs à garanties identiques.",
    faq: [
      { q: 'Est-elle obligatoire ?', a: "La loi ne l'impose pas, mais le bail commercial l'exige presque toujours du locataire, au moins pour les risques locatifs." },
      { q: 'Je travaille à domicile : suis-je couvert par mon assurance habitation ?', a: "Rarement. Le matériel professionnel et la responsabilité liée à l'activité sont en général exclus du contrat habitation." },
      { q: 'Comment éviter la sous-assurance ?', a: "En révisant les capitaux chaque année. Si les biens sont assurés en dessous de leur valeur, l'indemnité est réduite dans la même proportion." },
    ],
    simulator: 'perte-exploitation',
    related: ['proteger/perte-exploitation', 'proteger/protection-juridique', 'proteger/cyber-risques'],
  },
  {
    slug: 'perte-exploitation',
    universe: 'proteger',
    group,
    name: "Perte d'exploitation",
    tagline: "La marge perdue après un sinistre",
    title: "Assurance perte d'exploitation : calculer le bon capital",
    description:
      "Assurance perte d'exploitation : compenser la marge perdue et les charges fixes après un sinistre. Étude par un courtier pour artisans, vignerons et entreprises.",
    h1: "Assurance perte d'exploitation",
    intro:
      "L'assurance des biens paie la reconstruction. Pendant ce temps, les salaires, les loyers et les emprunts continuent de courir. La perte d'exploitation comble ce manque.",
    audience: [
      'Entreprises dont l\'activité dépend d\'un site, d\'un atelier ou d\'une machine',
      'Domaines et exploitations dont la production est saisonnière',
      'Entreprises endettées, pour lesquelles un arrêt de quelques mois serait critique',
    ],
    covers: [
      { name: 'La marge brute perdue', text: "La différence entre le chiffre d'affaires attendu et celui réalisé pendant l'arrêt, diminuée des charges variables économisées." },
      { name: 'Les frais supplémentaires', text: "Location de locaux ou de matériel, sous-traitance, heures supplémentaires pour redémarrer plus vite." },
      { name: "La période d'indemnisation", text: "Douze, dix-huit ou vingt-quatre mois : elle doit couvrir la reconstruction et le retour des clients." },
      { name: 'Les extensions', text: "Carence d'un fournisseur ou d'un client, impossibilité d'accès, coupure d'énergie." },
    ],
    checks: [
      "La marge brute déclarée est-elle celle du dernier bilan ?",
      "La période d'indemnisation tient-elle compte des délais réels de reconstruction ?",
      "La garantie joue-t-elle après un bris de machine, ou seulement après un incendie ?",
    ],
    role:
      "Nous calculons la marge brute à assurer à partir de votre bilan, avec votre expert-comptable si vous le souhaitez, et nous ajustons la période d'indemnisation à votre activité.",
    faq: [
      { q: 'Quelle différence avec la multirisque ?', a: "La multirisque indemnise les biens détruits. La perte d'exploitation indemnise le revenu que ces biens auraient produit." },
      { q: 'Comment est calculée l\'indemnité ?', a: "Par un expert, en comparant l'activité réelle à celle qui aurait été réalisée sans le sinistre, sur la base de vos comptes." },
      { q: 'Peut-on la souscrire seule ?', a: "Non, en général : elle s'adosse à un contrat de dommages aux biens, car elle se déclenche après un sinistre garanti par celui-ci." },
    ],
    simulator: 'perte-exploitation',
    related: ['proteger/multirisque-professionnelle', 'proteger/homme-cle', 'proteger/multirisque-exploitation'],
  },
  {
    slug: 'flotte-automobile',
    universe: 'proteger',
    group,
    name: 'Véhicules et flotte',
    tagline: 'Utilitaires, camions, véhicules de société',
    title: 'Assurance flotte automobile et véhicules professionnels',
    description:
      "Assurance des véhicules professionnels : utilitaires, camions, voitures de société, contrat flotte. Comparatif par un courtier à Chalon-sur-Saône.",
    h1: 'Assurance des véhicules professionnels',
    intro:
      "Du fourgon de l'artisan à la flotte d'une PME, les véhicules sont le premier poste de sinistres d'une entreprise. Un contrat bien construit en maîtrise le coût.",
    audience: [
      'Artisans et indépendants avec un ou deux utilitaires',
      'Entreprises à partir de quelques véhicules, éligibles à un contrat flotte',
      'Entreprises dont les salariés utilisent leur véhicule personnel pour le travail',
    ],
    covers: [
      { name: 'La responsabilité civile', text: "Obligatoire : les dommages causés aux tiers par le véhicule." },
      { name: 'Les dommages au véhicule', text: "Accident, vol, incendie, bris de glace, selon la formule retenue pour chaque véhicule." },
      { name: 'Le contenu', text: "Outillage, matériel et marchandises transportés, souvent en option." },
      { name: 'Le conducteur et la mobilité', text: "Protection corporelle du conducteur, assistance, véhicule de remplacement." },
    ],
    checks: [
      "L'aménagement intérieur et l'outillage du véhicule sont-ils assurés ?",
      'Tous les conducteurs habituels sont-ils déclarés ?',
      'Un contrat flotte serait-il plus avantageux que des contrats séparés ?',
    ],
    role:
      "Nous analysons votre sinistralité, proposons une formule par catégorie de véhicule et comparons contrats individuels et contrat flotte.",
    faq: [
      { q: 'À partir de combien de véhicules parle-t-on de flotte ?', a: "Cela dépend des assureurs, souvent à partir de trois à cinq véhicules. Le contrat flotte applique un tarif global, sans bonus-malus individuel." },
      { q: 'Mes salariés utilisent leur voiture personnelle : que faut-il prévoir ?', a: "Leur contrat doit couvrir l'usage professionnel, ou l'entreprise peut souscrire une garantie spécifique pour ces déplacements." },
      { q: "L'outillage volé dans le fourgon est-il remboursé ?", a: "Seulement si une garantie du contenu transporté est souscrite, et dans le respect des conditions de fermeture et de stationnement prévues." },
    ],
    simulator: 'couverture-btp',
    related: ['proteger/engins-de-chantier', 'proteger/multirisque-professionnelle', 'proteger/materiel-agricole'],
  },
  {
    slug: 'protection-juridique',
    universe: 'proteger',
    group,
    name: 'Protection juridique',
    tagline: 'Litiges, impayés, contrôles',
    title: 'Protection juridique professionnelle',
    description:
      "Protection juridique des professionnels : litiges clients et fournisseurs, impayés, prud'hommes, contrôles. Comparatif par un courtier à Chalon-sur-Saône.",
    h1: 'Protection juridique professionnelle',
    intro:
      "Un client qui ne paie pas, un fournisseur défaillant, un contrôle fiscal : la protection juridique vous donne un interlocuteur et prend en charge les frais de procédure.",
    audience: [
      'Artisans et entreprises du bâtiment, exposés aux impayés et aux réserves',
      'Exploitants agricoles et viticoles : baux, voisinage, acheteurs',
      'Dirigeants de TPE sans service juridique',
    ],
    covers: [
      { name: "L'information juridique", text: "Des juristes répondent à vos questions par téléphone, avant tout litige." },
      { name: 'La recherche d\'un accord', text: "L'assureur intervient auprès de la partie adverse pour trouver une solution amiable." },
      { name: 'Les frais de procédure', text: "Honoraires d'avocat, d'expert et d'huissier, dans la limite de plafonds." },
      { name: 'Les domaines garantis', text: "Clients, fournisseurs, salariés, bailleur, administration, selon l'étendue du contrat." },
    ],
    checks: [
      "Le recouvrement des impayés est-il inclus, et à partir de quel montant ?",
      'Les litiges avec les salariés sont-ils couverts ?',
      "Pouvez-vous choisir librement votre avocat ?",
    ],
    role:
      "Nous comparons les domaines garantis, les plafonds et les seuils d'intervention, qui varient fortement d'un contrat à l'autre.",
    faq: [
      { q: "N'est-elle pas déjà dans ma multirisque ?", a: "Parfois, sous une forme limitée à la défense et au recours après sinistre. Une protection juridique autonome couvre beaucoup plus de situations." },
      { q: 'Couvre-t-elle un litige déjà en cours ?', a: "Non. Le litige doit naître après la souscription, et parfois après un délai de carence." },
      { q: 'Puis-je garder mon avocat ?', a: "Oui. Le libre choix de l'avocat est un droit ; le contrat fixe en revanche les plafonds d'honoraires pris en charge." },
    ],
    related: ['proteger/rc-pro-batiment', 'proteger/multirisque-professionnelle', 'proteger/responsabilite-dirigeant'],
  },
  {
    slug: 'cyber-risques',
    universe: 'proteger',
    group,
    name: 'Cyber-risques',
    tagline: 'Piratage, rançongiciel, fraude',
    title: 'Assurance cyber-risques pour TPE et PME',
    description:
      "Assurance cyber : rançongiciel, fraude au virement, fuite de données, arrêt d'activité. Étude par un courtier pour les TPE et PME de Bourgogne du Sud.",
    h1: 'Assurance des cyber-risques',
    intro:
      "Une messagerie piratée ou un logiciel de gestion bloqué arrête une entreprise aussi sûrement qu'un incendie. Les petites structures sont les premières visées, parce qu'elles sont les moins protégées.",
    audience: [
      'Entreprises qui dépendent d\'un logiciel de devis, de facturation ou de gestion',
      'Domaines et commerces qui vendent en ligne',
      'Entreprises qui conservent des données de clients ou de salariés',
    ],
    covers: [
      { name: "L'assistance d'urgence", text: "Une cellule technique disponible à toute heure pour stopper l'attaque et restaurer les systèmes." },
      { name: "La perte d'exploitation", text: "La marge perdue pendant l'interruption de l'activité." },
      { name: 'La fraude', text: "Faux ordres de virement, usurpation d'identité d'un fournisseur ou du dirigeant, selon les contrats." },
      { name: 'La responsabilité', text: "Frais de notification, de défense et d'indemnisation en cas de fuite de données personnelles." },
    ],
    checks: [
      "La fraude au virement est-elle incluse ou en option ?",
      "Quelles mesures de sécurité l'assureur exige-t-il (sauvegardes, double authentification) ?",
      "L'assistance intervient-elle aussi le week-end ?",
    ],
    role:
      "Nous évaluons votre exposition avec un questionnaire simple, vous aidons à remplir les prérequis de sécurité et comparons les contrats sur l'assistance et la fraude.",
    faq: [
      { q: 'Une petite entreprise est-elle vraiment visée ?', a: "Oui. Les attaques sont le plus souvent automatisées et frappent sans distinction de taille." },
      { q: 'La rançon est-elle remboursée ?', a: "Le sujet est encadré par la loi et varie selon les assureurs. La valeur du contrat tient surtout à l'assistance technique et à la perte d'exploitation." },
      { q: 'Que faut-il mettre en place avant de souscrire ?', a: "Au minimum des sauvegardes régulières et déconnectées, des mots de passe robustes et des mises à jour. Les assureurs le vérifient." },
    ],
    related: ['proteger/perte-exploitation', 'proteger/multirisque-professionnelle', 'proteger/responsabilite-dirigeant'],
  },
  {
    slug: 'responsabilite-dirigeant',
    universe: 'proteger',
    group,
    name: 'Responsabilité du dirigeant',
    tagline: 'Votre patrimoine personnel',
    title: 'Responsabilité civile du dirigeant (RCMS)',
    description:
      "Responsabilité civile des mandataires sociaux : protéger le patrimoine personnel du dirigeant en cas de mise en cause. Étude par un courtier indépendant.",
    h1: 'Responsabilité civile du dirigeant',
    intro:
      "Un dirigeant peut être poursuivi sur ses biens personnels pour une faute de gestion, y compris dans une société à responsabilité limitée. Ce contrat prend en charge sa défense et les condamnations civiles.",
    audience: [
      'Gérants de SARL et présidents de SAS',
      'Dirigeants d\'entreprises en croissance, endettées ou avec des associés extérieurs',
      'Dirigeants bénévoles d\'associations et de coopératives',
    ],
    covers: [
      { name: 'Les frais de défense', text: "Avocats et experts, devant les juridictions civiles, pénales et administratives." },
      { name: 'Les conséquences financières', text: "Les dommages et intérêts mis à la charge personnelle du dirigeant." },
      { name: 'Les personnes assurées', text: "Dirigeants de droit et de fait, passés, présents et futurs, et souvent leur conjoint." },
      { name: 'Les situations visées', text: "Faute de gestion, non-respect des statuts ou de la réglementation, mise en cause par un associé, un salarié ou un créancier." },
    ],
    checks: [
      'Les réclamations liées aux rapports sociaux (salariés) sont-elles incluses ?',
      "Le contrat couvre-t-il les faits antérieurs à la souscription, non connus à cette date ?",
      'Le plafond est-il partagé entre tous les dirigeants ou propre à chacun ?',
    ],
    role:
      "Nous présentons les comptes et la gouvernance de la société aux assureurs spécialisés et comparons les contrats sur les exclusions, qui font toute la différence.",
    faq: [
      { q: 'La responsabilité civile de l\'entreprise ne suffit-elle pas ?', a: "Non. Elle couvre l'entreprise, pas la responsabilité personnelle de son dirigeant." },
      { q: 'Les amendes sont-elles couvertes ?', a: "Les sanctions pénales ne sont pas assurables. Le contrat prend en charge la défense et les condamnations civiles." },
      { q: 'Le coût est-il élevé pour une petite société ?', a: "Il dépend surtout de la santé financière de l'entreprise et du plafond choisi. Pour une TPE saine, la cotisation reste modérée." },
    ],
    related: ['proteger/protection-juridique', 'proteger/homme-cle', 'proteger/cyber-risques'],
  },
  {
    slug: 'homme-cle',
    universe: 'proteger',
    group,
    name: 'Homme-clé',
    tagline: "L'entreprise sans son pilier",
    title: 'Assurance homme-clé : protéger l\'entreprise',
    description:
      "Assurance homme-clé : un capital versé à l'entreprise en cas de décès ou d'invalidité de son dirigeant ou d'un collaborateur indispensable. Étude par un courtier.",
    h1: 'Assurance homme-clé',
    intro:
      "Dans une petite entreprise, une personne porte souvent les clients, le savoir-faire ou la signature bancaire. Si elle disparaît, l'entreprise reçoit un capital pour tenir et se réorganiser.",
    audience: [
      'Entreprises dont le dirigeant concentre la relation commerciale ou technique',
      'Domaines dont le vigneron est aussi le vinificateur',
      'Sociétés dont la banque exige cette garantie pour un prêt',
    ],
    covers: [
      { name: 'Le décès', text: "Versement d'un capital à l'entreprise." },
      { name: "L'invalidité", text: "Perte totale et irréversible d'autonomie, et selon les contrats invalidité permanente." },
      { name: "L'arrêt de travail", text: "En option : des indemnités versées à l'entreprise pendant l'absence." },
      { name: "L'usage du capital", text: "Compenser la perte de marge, recruter et former un remplaçant, rembourser un emprunt." },
    ],
    checks: [
      'Le capital est-il calculé sur la perte de marge réelle, pas sur un montant forfaitaire ?',
      "Le contrat est-il bien souscrit par l'entreprise, à son propre bénéfice ?",
      'Les formalités médicales sont-elles à jour après un changement de santé ?',
    ],
    role:
      "Nous chiffrons avec vous la contribution de la personne clé au résultat et le temps nécessaire pour la remplacer, puis nous comparons les assureurs.",
    faq: [
      { q: 'Qui peut être désigné homme-clé ?', a: "Le dirigeant, un associé, mais aussi un salarié dont l'absence mettrait l'activité en difficulté : chef de chantier, maître de chai, commercial principal." },
      { q: 'Quelle différence avec la prévoyance du dirigeant ?', a: "La prévoyance protège le dirigeant et sa famille. L'homme-clé protège l'entreprise : c'est elle qui reçoit le capital." },
      { q: 'Comment la cotisation est-elle traitée fiscalement ?', a: "Elle peut être déductible du résultat sous certaines conditions, le capital reçu étant alors imposable. Le point est à valider avec votre expert-comptable." },
    ],
    simulator: 'homme-cle',
    related: ['proteger/prevoyance', 'preparer/protection-des-associes', 'proteger/perte-exploitation'],
  },
  {
    slug: 'sante-prevoyance-collective',
    universe: 'proteger',
    group,
    name: 'Santé et prévoyance des salariés',
    tagline: "Les obligations de l'employeur",
    title: "Mutuelle et prévoyance d'entreprise : obligations employeur",
    description:
      "Mutuelle d'entreprise et prévoyance collective : obligations de l'employeur, convention collective, mise en place. Étude par un courtier à Chalon-sur-Saône.",
    h1: 'Santé et prévoyance des salariés',
    intro:
      "Tout employeur doit proposer une complémentaire santé à ses salariés et en financer au moins la moitié. La convention collective ajoute souvent des obligations de prévoyance.",
    audience: [
      'Entreprises qui embauchent leur premier salarié',
      'Entreprises du bâtiment et du secteur agricole, soumises à des régimes de branche',
      'Employeurs qui veulent revoir un contrat ancien ou mal accepté par les salariés',
    ],
    covers: [
      { name: 'La complémentaire santé', text: "Un socle minimal imposé par la loi, que le contrat peut améliorer." },
      { name: 'La prévoyance', text: "Maintien de salaire, invalidité, décès : selon la convention collective et le statut des salariés." },
      { name: 'La mise en place', text: "Décision de l'employeur, accord ou référendum : un formalisme à respecter pour conserver les exonérations." },
      { name: 'Les cas de dispense', text: "Les situations dans lesquelles un salarié peut refuser d'adhérer." },
    ],
    checks: [
      'Le contrat respecte-t-il les garanties minimales de votre convention collective ?',
      "L'acte de mise en place est-il formalisé et conservé ?",
      'Les dispenses des salariés sont-elles justifiées par écrit ?',
    ],
    role:
      "Nous vérifions vos obligations de branche, comparons les contrats et vous fournissons les documents de mise en place. Nous présentons le régime à vos salariés si vous le souhaitez.",
    faq: [
      { q: 'À partir de quand la mutuelle est-elle obligatoire ?', a: "Dès le premier salarié, quelle que soit la taille de l'entreprise." },
      { q: 'Quelle part l\'employeur doit-il payer ?', a: "Au moins la moitié de la cotisation correspondant aux garanties obligatoires." },
      { q: 'Le dirigeant peut-il en bénéficier ?', a: "S'il est assimilé salarié, oui. S'il est travailleur non salarié, il relève d'un contrat individuel adapté à son statut." },
    ],
    related: ['proteger/mutuelle-sante', 'proteger/prevoyance', 'proteger/homme-cle'],
  },
];
