import { euro, list, num, percent, str, yesNo } from './helpers';
import type { Simulator } from './types';

const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

const DOCUMENTS = [
  'Extrait Kbis ou avis de situation INSEE',
  "Diplômes ou justificatifs d'expérience dans le métier",
  "Chiffre d'affaires réalisé ou prévisionnel, réparti par activité",
  "Attestation d'assurance en cours et relevé de sinistralité, si vous êtes déjà assuré",
];

/** Nombre de mois avant la prochaine échéance (0 = ce mois-ci). */
function monthsUntil(month: number): number {
  return (month - (new Date().getMonth() + 1) + 12) % 12;
}

export const activite: Simulator[] = [
  {
    slug: 'decennale',
    name: 'Étude décennale',
    tagline: 'Votre dossier vu par un assureur',
    title: 'Étude décennale en ligne : préparez votre dossier',
    description:
      "En trois étapes, situez votre dossier d'assurance décennale : garanties à prévoir, points examinés par les assureurs, pièces à réunir. Gratuit et sans engagement.",
    h1: 'Étude décennale',
    intro: "Trois étapes pour savoir comment un assureur lira votre dossier, quelles garanties prévoir et quelles pièces réunir.",
    steps: [
      {
        title: 'Votre métier',
        fields: [
          {
            id: 'metier',
            label: 'Activité principale',
            type: 'select',
            options: [
              { value: 'gros-oeuvre', label: 'Maçonnerie, gros œuvre' },
              { value: 'couverture', label: 'Charpente, couverture, étanchéité' },
              { value: 'plomberie', label: 'Plomberie, chauffage' },
              { value: 'electricite', label: 'Électricité' },
              { value: 'finitions', label: 'Plâtrerie, peinture, revêtements' },
              { value: 'menuiserie', label: 'Menuiserie' },
              { value: 'terrassement', label: 'Terrassement, réseaux' },
              { value: 'autre', label: 'Autre métier du bâtiment' },
            ],
          },
          {
            id: 'statut',
            label: "Forme de l'entreprise",
            type: 'radio',
            options: [
              { value: 'micro', label: 'Micro-entreprise' },
              { value: 'ei', label: 'Entreprise individuelle' },
              { value: 'societe', label: 'Société' },
            ],
          },
        ],
      },
      {
        title: 'Votre activité',
        hint: 'Des ordres de grandeur suffisent.',
        fields: [
          { id: 'ca', label: "Chiffre d'affaires annuel hors taxes", type: 'number', unit: '€', placeholder: '120 000' },
          {
            id: 'anciennete',
            label: "Ancienneté de l'entreprise",
            type: 'radio',
            options: [
              { value: 'creation', label: 'En création' },
              { value: 'jeune', label: 'Moins de 3 ans' },
              { value: 'etablie', label: '3 ans et plus' },
            ],
          },
          { id: 'sousTraitance', label: 'Confiez-vous une partie des travaux à des sous-traitants ?', type: 'radio', options: yesNo },
        ],
      },
      {
        title: 'Votre situation',
        fields: [
          {
            id: 'situation',
            label: 'Où en êtes-vous ?',
            type: 'radio',
            options: [
              { value: 'assure', label: 'Assuré, je veux comparer' },
              { value: 'jamais', label: 'Jamais assuré en décennale' },
              { value: 'resilie', label: 'Résilié ou refusé par un assureur' },
            ],
          },
          {
            id: 'sinistres',
            label: 'Sinistres déclarés sur les 5 dernières années',
            type: 'radio',
            options: [
              { value: '0', label: 'Aucun' },
              { value: '1', label: 'Un' },
              { value: '2', label: 'Deux ou plus' },
            ],
          },
          {
            id: 'echeance',
            label: "Mois d'échéance du contrat actuel",
            type: 'select',
            optional: true,
            options: MONTHS.map((label, index) => ({ value: String(index + 1), label })),
          },
        ],
      },
    ],
    compute(values) {
      const metier = str(values, 'metier');
      const situation = str(values, 'situation');
      const sinistres = Number(str(values, 'sinistres'));
      const anciennete = str(values, 'anciennete');
      const sousTraitance = str(values, 'sousTraitance') === 'oui';
      const echeance = Number(str(values, 'echeance'));

      let complexity = 0;
      if (situation === 'resilie') complexity += 2;
      if (sinistres >= 2) complexity += 2;
      else if (sinistres === 1) complexity += 1;
      if (anciennete === 'creation') complexity += 1;
      if (metier === 'couverture') complexity += 1;

      const profile = complexity >= 3 ? 'Dossier à présenter à des assureurs spécialisés' : complexity >= 1 ? 'Dossier à argumenter' : 'Dossier standard';

      const points: string[] = [];
      if (anciennete === 'creation') points.push("En création, les assureurs demandent la preuve de votre expérience dans le métier : bulletins de salaire, certificats de travail ou diplôme.");
      if (metier === 'couverture') points.push("Couverture et étanchéité font l'objet d'une tarification à part. La description précise de vos techniques pèse sur le tarif.");
      if (metier === 'terrassement') points.push("Précisez si vous réalisez des réseaux enterrés ou des travaux en sous-œuvre : ces activités doivent figurer sur l'attestation.");
      if (situation === 'resilie') points.push("Après une résiliation, le motif compte plus que le fait lui-même. Un dossier régularisé et expliqué trouve le plus souvent preneur.");
      if (sinistres >= 1) points.push("Préparez pour chaque sinistre la cause, le montant et ce que vous avez changé depuis. Un sinistre expliqué pèse moins qu'un sinistre découvert.");
      if (sousTraitance) points.push("Déclarez la part du chiffre d'affaires sous-traitée et conservez l'attestation décennale de chaque sous-traitant.");
      if (echeance >= 1 && echeance <= 12 && situation === 'assure') {
        const delay = monthsUntil(echeance);
        points.push(
          delay <= 3
            ? "Votre échéance est proche : vérifiez tout de suite le préavis de résiliation prévu à votre contrat, souvent deux mois."
            : `Votre échéance tombe dans environ ${delay} mois : c'est le bon moment pour comparer sans précipitation.`,
        );
      }
      if (points.length === 0) points.push("Rien de particulier à signaler : la comparaison portera surtout sur les activités garanties, les plafonds et le tarif.");

      const recommended = ['Responsabilité civile professionnelle, en complément de la décennale'];
      if (num(values, 'ca') >= 300_000 || str(values, 'statut') === 'societe') recommended.push('Protection juridique, pour les impayés et les litiges de chantier');
      if (metier === 'gros-oeuvre' || metier === 'terrassement') recommended.push('Assurance des engins et du matériel de chantier');
      recommended.push('Prévoyance du dirigeant, si votre revenu dépend de votre présence sur les chantiers');

      return {
        headline: { label: 'Lecture de votre dossier', value: profile, note: "Ce n'est ni un tarif ni une acceptation : seule une étude auprès des assureurs le dira." },
        figures: [
          { label: 'Assurance obligatoire', value: 'Responsabilité décennale' },
          { label: 'À souscrire', value: "Avant l'ouverture du premier chantier" },
        ],
        lists: [
          { title: 'Ce que les assureurs regarderont', items: points },
          { title: 'Garanties à étudier en même temps', items: recommended },
          { title: 'Pièces à réunir', items: DOCUMENTS },
        ],
        notes: ["Le tarif d'une décennale dépend de votre dossier complet. Aucun prix n'est indiqué ici, parce qu'aucun prix sérieux ne peut l'être sans étude."],
      };
    },
    explain: [
      { heading: "Ce que fait cet outil", text: "Il reproduit les premières questions qu'un assureur se pose en ouvrant un dossier décennale : le métier, l'expérience, le volume d'activité, l'historique. Il en tire une lecture de votre dossier et la liste des pièces à préparer." },
      { heading: 'Pourquoi il ne donne pas de prix', text: "Deux maçons au même chiffre d'affaires peuvent payer du simple au double selon leur expérience, leurs techniques et leurs sinistres. Un prix affiché en ligne serait faux dans la plupart des cas." },
    ],
    limits: ["Il ne remplace pas l'étude auprès des assureurs.", "Il ne vérifie pas la définition exacte de vos activités, qui se fait sur pièces."],
    faq: [
      { q: 'Combien de temps faut-il pour obtenir une attestation ?', a: "Quand le dossier est complet, quelques jours suffisent le plus souvent. Les dossiers en création ou résiliés demandent davantage d'échanges." },
      { q: "L'étude m'engage-t-elle ?", a: "Non. Vous recevez un comparatif et vous décidez." },
    ],
    offers: ['proteger/decennale', 'proteger/rc-pro-batiment', 'proteger/assurance-btp'],
  },

  {
    slug: 'couverture-btp',
    name: 'Diagnostic de couverture du bâtiment',
    tagline: 'Êtes-vous couvert là où il le faut ?',
    title: 'Diagnostic : votre entreprise du bâtiment est-elle bien assurée ?',
    description:
      "Diagnostic gratuit en trois étapes : comparez les assurances de votre entreprise du bâtiment aux risques qu'elle court réellement et repérez les manques.",
    h1: 'Diagnostic de couverture du bâtiment',
    intro: "Trois étapes pour comparer vos contrats aux risques que court réellement votre entreprise.",
    steps: [
      {
        title: 'Votre entreprise',
        fields: [
          { id: 'salaries', label: 'Employez-vous des salariés ?', type: 'radio', options: yesNo },
          { id: 'locaux', label: 'Avez-vous un atelier, un dépôt ou des bureaux ?', type: 'radio', options: yesNo },
          { id: 'engins', label: 'Utilisez-vous des engins (mini-pelle, nacelle, chariot) ?', type: 'radio', options: yesNo },
          { id: 'vehicules', label: 'Avez-vous des véhicules professionnels ?', type: 'radio', options: yesNo },
        ],
      },
      {
        title: 'Vos contrats',
        hint: 'Cochez les assurances que vous avez aujourd\'hui.',
        fields: [
          {
            id: 'contrats',
            label: 'Assurances en place',
            type: 'checks',
            optional: true,
            options: [
              { value: 'decennale', label: 'Décennale' },
              { value: 'rc', label: 'Responsabilité civile professionnelle' },
              { value: 'vehicules', label: 'Véhicules' },
              { value: 'engins', label: 'Engins, bris de machine' },
              { value: 'locaux', label: 'Multirisque des locaux' },
              { value: 'pe', label: "Perte d'exploitation" },
              { value: 'pj', label: 'Protection juridique' },
              { value: 'prevoyance', label: 'Prévoyance du dirigeant' },
              { value: 'collectif', label: 'Mutuelle et prévoyance des salariés' },
            ],
          },
        ],
      },
      {
        title: 'Vos pratiques',
        fields: [
          { id: 'attestation', label: "Avez-vous relu votre attestation décennale depuis un an ?", type: 'radio', options: yesNo },
          { id: 'evolution', label: 'Votre activité a-t-elle changé depuis la souscription (nouveaux travaux, effectif, chiffre d\'affaires) ?', type: 'radio', options: yesNo },
          {
            id: 'sousTraitants',
            label: 'Demandez-vous leur attestation à vos sous-traitants ?',
            type: 'radio',
            options: [
              { value: 'oui', label: 'Oui, à chaque chantier' },
              { value: 'non', label: 'Pas toujours' },
              { value: 'aucun', label: 'Je ne sous-traite pas' },
            ],
          },
        ],
      },
    ],
    compute(values) {
      const have = list(values, 'contrats');
      const needs: { id: string; label: string; weight: number }[] = [
        { id: 'decennale', label: 'Décennale (obligatoire)', weight: 3 },
        { id: 'rc', label: 'Responsabilité civile professionnelle', weight: 3 },
        { id: 'prevoyance', label: 'Prévoyance du dirigeant', weight: 2 },
        { id: 'pj', label: 'Protection juridique', weight: 1 },
      ];
      if (str(values, 'vehicules') === 'oui') needs.push({ id: 'vehicules', label: 'Véhicules (obligatoire)', weight: 3 });
      if (str(values, 'engins') === 'oui') needs.push({ id: 'engins', label: 'Engins et bris de machine', weight: 2 });
      if (str(values, 'locaux') === 'oui') {
        needs.push({ id: 'locaux', label: 'Multirisque des locaux', weight: 2 });
        needs.push({ id: 'pe', label: "Perte d'exploitation", weight: 1 });
      }
      if (str(values, 'salaries') === 'oui') needs.push({ id: 'collectif', label: 'Mutuelle et prévoyance des salariés (obligatoire)', weight: 3 });

      const total = needs.reduce((sum, need) => sum + need.weight, 0);
      const covered = needs.filter((need) => have.includes(need.id));
      const missing = needs.filter((need) => !have.includes(need.id));
      let score = covered.reduce((sum, need) => sum + need.weight, 0) / total;

      const practices: string[] = [];
      if (str(values, 'attestation') === 'non') practices.push("Relisez votre attestation décennale : une activité exercée mais non inscrite n'est pas garantie.");
      if (str(values, 'evolution') === 'oui') practices.push("Votre activité a changé : déclarez-le à l'assureur, faute de quoi l'indemnité peut être réduite ou refusée.");
      if (str(values, 'sousTraitants') === 'non') practices.push("Exigez l'attestation décennale de chaque sous-traitant avant le chantier : sans elle, vous portez seul le risque.");
      score = Math.max(0, score - practices.length * 0.07);

      return {
        headline: { label: 'Niveau de couverture estimé', value: percent(score), note: 'Un repère pour ouvrir la discussion, pas un audit de vos contrats.' },
        figures: [
          { label: 'Risques identifiés', value: String(needs.length) },
          { label: 'Couverts par un contrat', value: String(covered.length) },
        ],
        lists: [
          { title: 'À étudier en priorité', items: missing.length > 0 ? missing.map((need) => need.label) : ["Aucun manque évident : il reste à vérifier le contenu des contrats."] },
          { title: 'Pratiques à corriger', items: practices.length > 0 ? practices : ['Vos réflexes sont les bons.'] },
          { title: 'Déjà en place', items: covered.length > 0 ? covered.map((need) => need.label) : ['Aucun contrat indiqué.'] },
        ],
        notes: ["Avoir un contrat ne dit rien de ses plafonds, de ses franchises ni de ses exclusions : c'est l'objet de l'audit."],
      };
    },
    explain: [
      { heading: 'Comment le score est établi', text: "L'outil dresse la liste des risques qui découlent de vos réponses, puis regarde lesquels sont couverts par un contrat. Les assurances obligatoires pèsent plus lourd que les autres. Trois pratiques de bon sens viennent ensuite moduler le résultat." },
      { heading: 'Ce que le score ne dit pas', text: "Deux entreprises peuvent avoir les mêmes contrats et une protection très différente. Les activités déclarées, les plafonds et les exclusions se lisent dans les conditions particulières." },
    ],
    limits: ["Il ne lit pas vos contrats.", "Il ne tient pas compte des exigences particulières de vos donneurs d'ordre."],
    faq: [
      { q: 'Que faire avec ce résultat ?', a: "L'apporter à un audit gratuit, avec vos contrats : nous vérifions point par point ce qui est réellement garanti." },
      { q: 'Un score élevé suffit-il ?', a: "Il indique que les contrats existent. Il reste à s'assurer qu'ils correspondent à votre activité actuelle." },
    ],
    offers: ['proteger/assurance-btp', 'proteger/rc-pro-batiment', 'proteger/engins-de-chantier'],
  },

  {
    slug: 'recolte',
    name: 'Simulateur récolte',
    tagline: 'Ce que coûterait un gel ou une grêle',
    title: 'Simulateur assurance récolte : perte en cas de gel ou de grêle',
    description:
      "Simulateur gratuit pour les vignerons : calculez le capital récolte à assurer et ce qui resterait à votre charge après un gel ou une grêle, selon la franchise.",
    h1: 'Simulateur récolte',
    intro: "Calculez la valeur de votre récolte et ce qu'un aléa climatique laisserait à votre charge, avec ou sans assurance.",
    steps: [
      {
        title: 'Votre production',
        hint: 'Prenez une année moyenne.',
        fields: [
          { id: 'surface', label: 'Surface en production', type: 'number', unit: 'ha', placeholder: '12' },
          { id: 'rendement', label: 'Rendement moyen', type: 'number', unit: 'hl/ha', placeholder: '45' },
          { id: 'prix', label: 'Valorisation moyenne', type: 'number', unit: '€/hl', placeholder: '600', help: "Le prix auquel vous valorisez votre production, vendue en vrac ou ramenée à l'hectolitre." },
        ],
      },
      {
        title: 'Le scénario',
        fields: [
          {
            id: 'perte',
            label: 'Part de la récolte perdue',
            type: 'radio',
            options: [
              { value: '0.3', label: '30 %' },
              { value: '0.5', label: '50 %' },
              { value: '0.8', label: '80 %' },
            ],
          },
          {
            id: 'franchise',
            label: 'Franchise du contrat',
            type: 'radio',
            help: 'La part de perte qui reste à votre charge.',
            options: [
              { value: '0.2', label: '20 %' },
              { value: '0.25', label: '25 %' },
              { value: '0.3', label: '30 %' },
            ],
          },
        ],
      },
    ],
    compute(values) {
      const capital = num(values, 'surface') * num(values, 'rendement') * num(values, 'prix');
      const lossRate = Number(str(values, 'perte'));
      const deductible = Number(str(values, 'franchise'));
      const loss = capital * lossRate;
      const indemnity = capital * Math.max(0, lossRate - deductible);

      return {
        headline: { label: 'Perte restant à votre charge avec une assurance', value: euro(loss - indemnity), note: `Sans assurance, la perte serait de ${euro(loss)}, avant toute aide publique.` },
        figures: [
          { label: 'Valeur de la récolte à assurer', value: euro(capital) },
          { label: 'Perte dans ce scénario', value: euro(loss) },
          { label: "Indemnité estimée de l'assureur", value: euro(indemnity) },
        ],
        lists: [
          {
            title: 'Comment lire ce résultat',
            items: [
              indemnity === 0
                ? "Dans ce scénario, la perte ne dépasse pas la franchise : l'assurance n'intervient pas. Une franchise plus basse changerait le résultat."
                : "L'assurance couvre la part de perte qui dépasse la franchise.",
              "Comparez ce reste à charge à votre trésorerie : c'est lui qui détermine la franchise que vous pouvez supporter.",
            ],
          },
        ],
        notes: [
          "Calcul simplifié à l'échelle de l'exploitation. Les contrats appliquent la franchise selon leurs propres règles, parfois par parcelle ou par cépage.",
          "La cotisation, en partie subventionnée, n'est pas calculée ici.",
        ],
      };
    },
    explain: [
      { heading: 'Le capital assuré', text: "Il résulte de trois chiffres que vous connaissez : la surface, le rendement de référence et la valeur de l'hectolitre. C'est la base de tout contrat récolte, et c'est souvent là que se glisse la sous-assurance." },
      { heading: 'Le rôle de la franchise', text: "Une franchise basse protège mieux mais coûte plus cher. La bonne franchise est celle dont votre trésorerie peut absorber le montant deux années de suite." },
    ],
    limits: ["Il ne calcule pas la cotisation.", "Il ne tient pas compte de l'indemnisation publique des pertes exceptionnelles, qui dépend de la réglementation en vigueur."],
    faq: [
      { q: 'Quel rendement indiquer ?', a: "Votre rendement moyen des dernières années, hors année exceptionnelle. Le contrat retient une référence calculée selon ses propres règles." },
      { q: 'Le calcul vaut-il pour d\'autres cultures ?', a: "Le principe est le même. Remplacez simplement les hectolitres par votre unité de production." },
    ],
    offers: ['proteger/aleas-climatiques', 'proteger/assurance-viticole', 'proteger/perte-exploitation'],
  },

  {
    slug: 'couverture-exploitation',
    name: "Diagnostic de l'exploitation",
    tagline: 'Vigne, élevage, cultures',
    title: 'Diagnostic : votre exploitation est-elle bien assurée ?',
    description:
      "Diagnostic gratuit pour les domaines viticoles et les exploitations agricoles : comparez vos contrats aux risques réels de votre exploitation.",
    h1: "Diagnostic de couverture de l'exploitation",
    intro: "Trois étapes pour vérifier que chaque valeur de l'exploitation est bien assurée.",
    steps: [
      {
        title: 'Votre exploitation',
        fields: [
          {
            id: 'activite',
            label: 'Activité principale',
            type: 'radio',
            options: [
              { value: 'vigne', label: 'Viticulture' },
              { value: 'elevage', label: 'Élevage' },
              { value: 'cultures', label: 'Grandes cultures' },
              { value: 'mixte', label: 'Polyculture-élevage' },
            ],
          },
          { id: 'stock', label: 'Stockez-vous du vin ou des récoltes sur place ?', type: 'radio', options: yesNo },
          { id: 'public', label: 'Recevez-vous du public ou vendez-vous en direct ?', type: 'radio', options: yesNo },
        ],
      },
      {
        title: 'Vos contrats',
        hint: 'Cochez les assurances que vous avez aujourd\'hui.',
        fields: [
          {
            id: 'contrats',
            label: 'Assurances en place',
            type: 'checks',
            optional: true,
            options: [
              { value: 'batiments', label: 'Multirisque des bâtiments' },
              { value: 'recolte', label: 'Récolte, aléas climatiques' },
              { value: 'stock', label: 'Stocks de vin ou de récoltes' },
              { value: 'materiel', label: 'Matériel, bris de machine' },
              { value: 'cheptel', label: 'Cheptel' },
              { value: 'rc', label: 'Responsabilité civile, produits vendus' },
              { value: 'pe', label: "Perte d'exploitation" },
              { value: 'prevoyance', label: "Prévoyance de l'exploitant" },
            ],
          },
        ],
      },
      {
        title: 'Vos pratiques',
        fields: [
          { id: 'valeurs', label: 'Les valeurs assurées ont-elles été revues depuis deux ans ?', type: 'radio', options: yesNo },
          {
            id: 'diversification',
            label: 'Vos activités annexes (vente directe, gîte, photovoltaïque) sont-elles déclarées ?',
            type: 'radio',
            options: [
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non, ou je ne sais pas' },
              { value: 'aucune', label: "Je n'en ai pas" },
            ],
          },
        ],
      },
    ],
    compute(values) {
      const have = list(values, 'contrats');
      const activity = str(values, 'activite');
      const needs: { id: string; label: string; weight: number }[] = [
        { id: 'batiments', label: 'Multirisque des bâtiments', weight: 3 },
        { id: 'rc', label: "Responsabilité civile de l'exploitant", weight: 3 },
        { id: 'materiel', label: 'Matériel et bris de machine', weight: 2 },
        { id: 'prevoyance', label: "Prévoyance de l'exploitant", weight: 2 },
        { id: 'pe', label: "Perte d'exploitation", weight: 1 },
      ];
      if (activity !== 'elevage') needs.push({ id: 'recolte', label: 'Récolte et aléas climatiques', weight: 2 });
      if (activity === 'elevage' || activity === 'mixte') needs.push({ id: 'cheptel', label: 'Cheptel', weight: 2 });
      if (str(values, 'stock') === 'oui') needs.push({ id: 'stock', label: 'Stocks de vin ou de récoltes', weight: 3 });

      const total = needs.reduce((sum, need) => sum + need.weight, 0);
      const covered = needs.filter((need) => have.includes(need.id));
      const missing = needs.filter((need) => !have.includes(need.id));
      let score = covered.reduce((sum, need) => sum + need.weight, 0) / total;

      const practices: string[] = [];
      if (str(values, 'valeurs') === 'non') practices.push("Faites réviser les valeurs assurées : après des travaux ou des achats, la sous-assurance réduit l'indemnité dans la même proportion.");
      if (str(values, 'diversification') === 'non') practices.push("Déclarez vos activités annexes : une activité non déclarée n'est pas garantie.");
      if (str(values, 'public') === 'oui' && !have.includes('rc')) practices.push("Vous recevez du public : la responsabilité civile doit le prévoir expressément.");
      score = Math.max(0, score - practices.length * 0.07);

      return {
        headline: { label: 'Niveau de couverture estimé', value: percent(score), note: 'Un repère pour ouvrir la discussion, pas un audit de vos contrats.' },
        figures: [
          { label: 'Risques identifiés', value: String(needs.length) },
          { label: 'Couverts par un contrat', value: String(covered.length) },
        ],
        lists: [
          { title: 'À étudier en priorité', items: missing.length > 0 ? missing.map((need) => need.label) : ['Aucun manque évident : il reste à vérifier les montants assurés.'] },
          { title: 'Points de vigilance', items: practices.length > 0 ? practices : ['Rien à signaler sur vos pratiques.'] },
          { title: 'Déjà en place', items: covered.length > 0 ? covered.map((need) => need.label) : ['Aucun contrat indiqué.'] },
        ],
        notes: ["Le diagnostic ne dit rien des capitaux assurés, qui sont le premier sujet sur une exploitation."],
      };
    },
    explain: [
      { heading: 'Pourquoi un diagnostic', text: "Sur une exploitation, les contrats s'ajoutent au fil des investissements, souvent chez des assureurs différents. Les doublons coûtent cher et les manques se découvrent au sinistre." },
      { heading: 'Le sujet des valeurs', text: "Un bâtiment agrandi, une cuverie renouvelée ou un stock mieux valorisé changent les capitaux à assurer. C'est le premier point que nous vérifions sur place." },
    ],
    limits: ["Il ne lit pas vos contrats.", "Il n'évalue pas vos bâtiments ni votre stock."],
    faq: [
      { q: 'Le diagnostic convient-il à un GAEC ?', a: "Oui. Les contrats sont alors souscrits par la société, et la prévoyance par chaque associé." },
      { q: 'Que faire ensuite ?', a: "Un audit sur place, gratuit, pour confronter les contrats à la réalité de l'exploitation." },
    ],
    offers: ['proteger/assurance-viticole', 'proteger/assurance-agricole', 'proteger/multirisque-exploitation'],
  },

  {
    slug: 'perte-exploitation',
    name: "Simulateur perte d'exploitation",
    tagline: "Ce que coûterait un arrêt d'activité",
    title: "Simulateur perte d'exploitation : marge à assurer",
    description:
      "Calculez la marge brute que votre entreprise perdrait après un sinistre, selon la durée d'arrêt, et la période d'indemnisation à prévoir.",
    h1: "Simulateur perte d'exploitation",
    intro: "Chiffrez ce qu'un arrêt de plusieurs mois coûterait à votre entreprise, une fois les biens remboursés.",
    steps: [
      {
        title: 'Votre activité',
        fields: [
          { id: 'ca', label: "Chiffre d'affaires annuel hors taxes", type: 'number', unit: '€', placeholder: '400 000' },
          { id: 'marge', label: 'Taux de marge brute', type: 'number', unit: '%', placeholder: '55', help: "Chiffre d'affaires moins achats et charges variables, rapporté au chiffre d'affaires. Votre expert-comptable le connaît." },
        ],
      },
      {
        title: 'Le scénario',
        fields: [
          {
            id: 'duree',
            label: "Durée d'arrêt de l'activité",
            type: 'radio',
            options: [
              { value: '3', label: '3 mois' },
              { value: '6', label: '6 mois' },
              { value: '12', label: '12 mois' },
            ],
          },
          {
            id: 'reprise',
            label: 'Retour au niveau normal après la réouverture',
            type: 'radio',
            options: [
              { value: '0', label: 'Immédiat' },
              { value: '6', label: 'Progressif, sur 6 mois' },
              { value: '12', label: 'Progressif, sur 12 mois' },
            ],
          },
          { id: 'frais', label: 'Frais supplémentaires pour redémarrer', type: 'number', unit: '€', optional: true, placeholder: '15 000', help: 'Location de locaux ou de matériel, sous-traitance.' },
        ],
      },
    ],
    compute(values) {
      const margin = num(values, 'ca') * (Math.min(num(values, 'marge'), 100) / 100);
      const stop = Number(str(values, 'duree'));
      const recovery = Number(str(values, 'reprise'));
      const stopLoss = (margin * stop) / 12;
      // Pendant la reprise progressive, on retient une activité moyenne à mi-régime.
      const recoveryLoss = (margin * recovery) / 12 / 2;
      const extra = num(values, 'frais');
      const period = stop + recovery <= 12 ? 12 : stop + recovery <= 18 ? 18 : 24;

      return {
        headline: { label: 'Marge brute perdue dans ce scénario', value: euro(stopLoss + recoveryLoss + extra) },
        figures: [
          { label: 'Marge brute annuelle', value: euro(margin) },
          { label: "Perte pendant l'arrêt", value: euro(stopLoss) },
          { label: 'Perte pendant la reprise', value: euro(recoveryLoss) },
          { label: 'Frais supplémentaires', value: euro(extra) },
          { label: "Période d'indemnisation à prévoir", value: `${period} mois` },
        ],
        lists: [
          {
            title: 'Comment lire ce résultat',
            items: [
              "C'est la marge brute annuelle, et non le chiffre d'affaires, qui sert de base au contrat.",
              "La période d'indemnisation doit couvrir la reconstruction et le retour des clients, pas seulement les travaux.",
            ],
          },
        ],
        notes: ["Calcul indicatif. L'indemnité réelle est fixée par un expert à partir de vos comptes."],
      };
    },
    explain: [
      { heading: 'Ce que mesure le simulateur', text: "Après un incendie ou un bris de machine, l'assurance des biens paie les réparations. Elle ne paie ni les salaires, ni les loyers, ni les échéances d'emprunt qui continuent de courir. C'est cette marge manquante que l'outil chiffre." },
      { heading: 'La reprise, souvent oubliée', text: "Une entreprise ne retrouve pas son niveau d'activité le jour de la réouverture. Les clients partis ne reviennent pas tous, ni tout de suite." },
    ],
    limits: ["Il ne tient pas compte de la saisonnalité de votre activité.", "Il ne remplace pas le calcul de marge brute fait avec votre expert-comptable."],
    faq: [
      { q: 'Où trouver mon taux de marge brute ?', a: "Dans votre compte de résultat, ou auprès de votre expert-comptable. À défaut, une estimation suffit pour un premier ordre de grandeur." },
      { q: 'Quelle durée d\'arrêt retenir ?', a: "Celle qu'il faudrait pour reconstruire ou remplacer l'outil dont dépend votre activité, délais administratifs compris." },
    ],
    offers: ['proteger/perte-exploitation', 'proteger/multirisque-professionnelle', 'proteger/homme-cle'],
  },

  {
    slug: 'homme-cle',
    name: 'Simulateur homme-clé',
    tagline: 'Le capital à prévoir pour tenir',
    title: 'Simulateur homme-clé : quel capital assurer ?',
    description:
      "Estimez le capital dont votre entreprise aurait besoin en cas de disparition de son dirigeant ou d'un collaborateur indispensable.",
    h1: 'Simulateur homme-clé',
    intro: "Estimez ce que coûterait à l'entreprise l'absence définitive de la personne sur laquelle elle repose.",
    steps: [
      {
        title: "L'entreprise",
        fields: [
          { id: 'marge', label: 'Marge brute annuelle', type: 'number', unit: '€', placeholder: '250 000' },
          {
            id: 'part',
            label: "Part de l'activité qui dépend de cette personne",
            type: 'radio',
            options: [
              { value: '0.25', label: 'Un quart' },
              { value: '0.5', label: 'La moitié' },
              { value: '0.75', label: 'Les trois quarts' },
              { value: '1', label: 'La totalité' },
            ],
          },
        ],
      },
      {
        title: 'Le remplacement',
        fields: [
          {
            id: 'delai',
            label: 'Temps nécessaire pour la remplacer et retrouver le niveau d\'activité',
            type: 'radio',
            options: [
              { value: '6', label: '6 mois' },
              { value: '12', label: '12 mois' },
              { value: '24', label: '24 mois' },
            ],
          },
          { id: 'recrutement', label: 'Coût de recrutement et de formation', type: 'number', unit: '€', optional: true, placeholder: '20 000' },
          { id: 'emprunts', label: 'Emprunts que la banque pourrait exiger de rembourser', type: 'number', unit: '€', optional: true, placeholder: '0' },
        ],
      },
    ],
    compute(values) {
      const loss = num(values, 'marge') * Number(str(values, 'part')) * (Number(str(values, 'delai')) / 12);
      const hiring = num(values, 'recrutement');
      const loans = num(values, 'emprunts');
      return {
        headline: { label: 'Capital à étudier', value: euro(loss + hiring + loans) },
        figures: [
          { label: 'Perte de marge pendant le remplacement', value: euro(loss) },
          { label: 'Recrutement et formation', value: euro(hiring) },
          { label: 'Emprunts à sécuriser', value: euro(loans) },
        ],
        lists: [
          {
            title: 'Comment lire ce résultat',
            items: [
              "Le capital est versé à l'entreprise, pas à la famille du dirigeant : les deux besoins se traitent séparément.",
              "L'assureur vérifiera que le montant demandé est cohérent avec les comptes de l'entreprise.",
            ],
          },
        ],
        notes: ['Estimation indicative. Le traitement fiscal des cotisations et du capital est à valider avec votre expert-comptable.'],
      };
    },
    explain: [
      { heading: 'Qui est la personne clé ?', text: "Celle dont l'absence ferait chuter l'activité : le dirigeant qui porte les clients, le vigneron qui vinifie, le chef de chantier sans qui les équipes ne tournent pas." },
      { heading: 'À quoi sert le capital', text: "À payer les charges pendant la réorganisation, à recruter, à rassurer la banque et les fournisseurs. Il donne du temps, qui est ce qui manque le plus dans ces moments." },
    ],
    limits: ["Il ne chiffre pas la cotisation, qui dépend de l'âge et de l'état de santé de l'assuré.", "Il ne traite pas le rachat des parts entre associés, qui relève d'un autre contrat."],
    faq: [
      { q: 'Plusieurs personnes peuvent-elles être assurées ?', a: "Oui, chacune par un contrat, pour un capital correspondant à sa contribution." },
      { q: 'Le capital est-il imposable ?', a: "En règle générale oui, lorsque les cotisations ont été déduites. Le point est à valider avec votre expert-comptable." },
    ],
    offers: ['proteger/homme-cle', 'preparer/protection-des-associes', 'proteger/prevoyance'],
  },
];
