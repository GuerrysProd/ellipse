import { PASS, SUCCESSION_ALLOWANCE_PER_CHILD, lifeInsuranceDuty, successionDuty } from './baremes';
import { euro, futureValue, monthlyEffort, num, percent, returnProfiles, str } from './helpers';
import type { Simulator } from './types';

const RETURN_NOTE = "Les rendements sont des hypothèses de calcul, nets de frais. Ils ne sont ni garantis ni représentatifs d'un contrat donné.";

export const patrimoine: Simulator[] = [
  {
    slug: 'prevoyance',
    name: 'Simulateur prévoyance',
    tagline: 'Votre revenu en cas d\'arrêt de travail',
    title: 'Simulateur prévoyance : votre revenu en cas d\'arrêt',
    description:
      "Indépendants et dirigeants : estimez ce qu'il vous manquerait chaque mois en cas d'arrêt de travail, une fois déduites les indemnités de votre régime.",
    h1: 'Simulateur prévoyance',
    intro: "Mesurez l'écart entre ce que vous dépensez chaque mois et ce que vous toucheriez en cas d'arrêt de travail.",
    steps: [
      {
        title: 'Vos revenus',
        fields: [
          { id: 'revenu', label: 'Revenu net mensuel', type: 'number', unit: '€', placeholder: '3 500' },
          {
            id: 'regime',
            label: 'Indemnités de votre régime obligatoire en cas d\'arrêt',
            type: 'number',
            unit: '€/mois',
            optional: true,
            placeholder: 'Si vous le savez',
            help: "Laissez vide si vous ne le savez pas : nous retenons alors la moitié de votre revenu, dans la limite d'un plafond.",
          },
          { id: 'contrat', label: 'Indemnités de votre contrat de prévoyance actuel', type: 'number', unit: '€/mois', optional: true, placeholder: '0' },
        ],
      },
      {
        title: 'Vos charges',
        fields: [
          { id: 'chargesPerso', label: 'Dépenses mensuelles du foyer', type: 'number', unit: '€', placeholder: '2 800', help: 'Logement, crédits, vie courante.' },
          { id: 'chargesPro', label: "Charges fixes de l'entreprise qui continuent sans vous", type: 'number', unit: '€/mois', optional: true, placeholder: '1 200', help: 'Loyer, leasing, cotisations, assurances.' },
        ],
      },
    ],
    compute(values) {
      const income = num(values, 'revenu');
      const declared = num(values, 'regime');
      const assumedCap = (PASS / 730) * 30.4;
      const scheme = declared > 0 ? declared : Math.min(income * 0.5, assumedCap);
      const contract = num(values, 'contrat');
      const needs = num(values, 'chargesPerso') + num(values, 'chargesPro');
      const gap = Math.max(0, needs - scheme - contract);

      return {
        headline: { label: 'Manque mensuel en cas d\'arrêt de travail', value: euro(gap), note: gap === 0 ? 'Vos ressources couvriraient vos charges dans ce scénario.' : `Soit ${euro(gap * 12)} sur une année d'arrêt.` },
        figures: [
          { label: 'Charges à couvrir chaque mois', value: euro(needs) },
          { label: declared > 0 ? 'Indemnités du régime obligatoire' : 'Indemnités du régime obligatoire (hypothèse)', value: euro(scheme) },
          { label: 'Indemnités de votre contrat actuel', value: euro(contract) },
          { label: 'Baisse de revenu', value: income > 0 ? percent(Math.max(0, 1 - (scheme + contract) / income)) : '—' },
        ],
        lists: [
          {
            title: 'Comment lire ce résultat',
            items: [
              "Le manque mensuel est le montant d'indemnités journalières à rechercher dans un contrat, après la franchise.",
              "Les indemnités du régime obligatoire sont limitées dans le temps : au-delà, c'est la garantie invalidité qui prend le relais.",
            ],
          },
        ],
        notes: [
          declared > 0 ? "Calcul fondé sur les indemnités que vous avez indiquées." : "Sans indication de votre part, les indemnités du régime sont estimées à la moitié du revenu, plafonnées. Vos droits réels dépendent de votre statut et se vérifient en rendez-vous.",
          'Le délai de carence du régime obligatoire n\'est pas pris en compte.',
        ],
      };
    },
    explain: [
      { heading: 'Ce que mesure le simulateur', text: "Un salarié en arrêt conserve souvent l'essentiel de son salaire. Un indépendant perçoit des indemnités plafonnées, parfois après plusieurs jours de carence, alors que les charges de son entreprise continuent." },
      { heading: 'Les charges professionnelles', text: "Loyer, leasing, cotisations : elles ne s'arrêtent pas avec vous. Certains contrats les prennent en charge par une garantie dédiée, distincte de vos indemnités personnelles." },
    ],
    limits: ["Il ne traite pas l'invalidité ni le décès, qui se chiffrent autrement.", "Il ne remplace pas la vérification de vos droits auprès de votre régime."],
    faq: [
      { q: 'Comment connaître les indemnités de mon régime ?', a: "Elles dépendent de votre statut et de vos revenus déclarés. Nous les calculons avec vous à partir de votre dernier avis d'imposition." },
      { q: 'Quelle franchise choisir ?', a: "Celle que votre trésorerie personnelle peut supporter. Une franchise de trente jours coûte nettement moins cher qu'une franchise de quinze." },
    ],
    offers: ['proteger/prevoyance', 'proteger/homme-cle', 'proteger/assurance-emprunteur'],
  },

  {
    slug: 'emprunteur',
    name: 'Simulateur assurance emprunteur',
    tagline: 'Ce que votre assurance de prêt coûte encore',
    title: 'Simulateur assurance emprunteur : coût restant et économie',
    description:
      "Calculez ce que votre assurance de prêt vous coûtera jusqu'à la fin du crédit et ce que représente chaque écart de tarif. Gratuit et sans engagement.",
    h1: 'Simulateur assurance emprunteur',
    intro: "Calculez ce que votre assurance de prêt vous coûtera encore, et l'enjeu d'un changement de contrat.",
    steps: [
      {
        title: 'Votre prêt',
        fields: [
          { id: 'capital', label: 'Capital restant dû', type: 'number', unit: '€', placeholder: '180 000' },
          { id: 'duree', label: 'Durée restante', type: 'number', unit: 'ans', placeholder: '15' },
        ],
      },
      {
        title: 'Votre assurance actuelle',
        fields: [
          { id: 'cotisation', label: 'Cotisation d\'assurance', type: 'number', unit: '€/mois', placeholder: '55', help: "Elle figure sur votre tableau d'amortissement ou votre relevé annuel." },
          {
            id: 'origine',
            label: 'Contrat souscrit',
            type: 'radio',
            options: [
              { value: 'banque', label: 'Auprès de la banque prêteuse' },
              { value: 'externe', label: 'Auprès d\'un autre assureur' },
            ],
          },
        ],
      },
    ],
    compute(values) {
      const remaining = num(values, 'cotisation') * 12 * num(values, 'duree');
      const capital = num(values, 'capital');
      return {
        headline: { label: "Coût restant de votre assurance", value: euro(remaining), note: 'En supposant une cotisation constante jusqu\'à la fin du prêt.' },
        figures: [
          { label: 'Coût par an', value: euro(num(values, 'cotisation') * 12) },
          { label: 'Chaque écart de tarif de 10 % représente', value: euro(remaining * 0.1) },
          { label: 'Rapporté au capital restant dû', value: capital > 0 ? percent(remaining / capital) : '—' },
        ],
        lists: [
          {
            title: 'Comment lire ce résultat',
            items: [
              str(values, 'origine') === 'banque'
                ? "Votre contrat est celui de la banque : c'est le cas où une comparaison a le plus de chances d'être utile."
                : "Votre contrat a déjà été choisi hors de la banque : une nouvelle comparaison reste possible à tout moment.",
              "L'écart de tarif dépend de votre âge, de votre santé, de votre profession et des garanties exigées par la banque. Seul un devis le chiffre.",
            ],
          },
        ],
        notes: ["Si votre cotisation diminue avec le capital restant dû, le coût réel sera inférieur à ce calcul."],
      };
    },
    explain: [
      { heading: 'Pourquoi regarder le coût restant', text: "On retient la mensualité, rarement le total. Sur un prêt long, l'assurance pèse plusieurs milliers d'euros : c'est ce montant qui donne la mesure d'un changement." },
      { heading: 'Ce qui encadre le changement', text: "Vous pouvez changer d'assurance de prêt immobilier à tout moment, sans frais. La banque ne peut refuser que si les garanties proposées ne sont pas équivalentes aux siennes." },
    ],
    limits: ["Il n'estime pas le tarif d'un nouveau contrat.", "Il ne vérifie pas l'équivalence des garanties, qui se fait sur la fiche remise par votre banque."],
    faq: [
      { q: 'Vaut-il la peine de changer en fin de prêt ?', a: "L'enjeu diminue avec le capital restant dû. Le calcul ci-dessus vous indique s'il reste significatif." },
      { q: 'Qui s\'occupe des démarches ?', a: "Le cabinet prépare le dossier, l'adresse à la banque et suit la demande jusqu'à l'avenant." },
    ],
    offers: ['proteger/assurance-emprunteur', 'proteger/prevoyance', 'preparer/assurance-vie'],
  },

  {
    slug: 'per',
    name: 'Simulateur PER',
    tagline: "L'économie d'impôt de vos versements",
    title: "Simulateur PER : calculez votre économie d'impôt",
    description:
      "Simulateur PER gratuit : estimez votre plafond de déduction et l'économie d'impôt d'un versement, selon vos revenus et votre tranche d'imposition.",
    h1: 'Simulateur PER',
    intro: "Estimez l'économie d'impôt d'un versement sur un plan d'épargne retraite, et son coût réel pour vous.",
    steps: [
      {
        title: 'Votre situation fiscale',
        fields: [
          { id: 'revenu', label: 'Revenus professionnels annuels nets imposables', type: 'number', unit: '€', placeholder: '60 000' },
          {
            id: 'tmi',
            label: "Tranche marginale d'imposition",
            type: 'radio',
            help: 'Elle figure sur votre avis d\'imposition.',
            options: [
              { value: '0.11', label: '11 %' },
              { value: '0.3', label: '30 %' },
              { value: '0.41', label: '41 %' },
              { value: '0.45', label: '45 %' },
            ],
          },
        ],
      },
      {
        title: 'Votre projet',
        fields: [
          { id: 'versement', label: 'Versement annuel envisagé', type: 'number', unit: '€', placeholder: '5 000' },
          { id: 'deja', label: 'Versements retraite déjà effectués cette année', type: 'number', unit: '€', optional: true, placeholder: '0' },
        ],
      },
    ],
    compute(values) {
      const income = num(values, 'revenu');
      const ceiling = Math.max(0.1 * PASS, Math.min(0.1 * income, 0.1 * 8 * PASS));
      const available = Math.max(0, ceiling - num(values, 'deja'));
      const payment = num(values, 'versement');
      const deductible = Math.min(payment, available);
      const saving = deductible * Number(str(values, 'tmi'));

      return {
        headline: { label: "Économie d'impôt estimée", value: euro(saving), note: `Votre versement de ${euro(payment)} vous coûterait réellement ${euro(payment - saving)}.` },
        figures: [
          { label: 'Plafond de déduction estimé', value: euro(ceiling) },
          { label: 'Plafond encore disponible', value: euro(available) },
          { label: 'Part déductible de votre versement', value: euro(deductible) },
        ],
        lists: [
          {
            title: 'Comment lire ce résultat',
            items: [
              payment > available ? "Votre versement dépasse le plafond estimé : la part excédentaire ne serait pas déductible cette année." : 'Votre versement entre dans le plafond estimé.',
              "L'économie d'aujourd'hui a une contrepartie : les sommes seront imposées à la sortie. L'opération est d'autant plus intéressante que votre tranche d'imposition baissera à la retraite.",
            ],
          },
        ],
        notes: [
          "Plafond calculé selon la règle générale. Les travailleurs non salariés disposent d'un plafond spécifique, souvent plus élevé, et les plafonds non utilisés des trois années précédentes s'ajoutent.",
          "Le plafond exact figure sur votre avis d'imposition. Ce calcul ne constitue pas un conseil fiscal.",
        ],
      };
    },
    explain: [
      { heading: 'Ce que calcule le simulateur', text: "Les versements volontaires sur un PER sont déductibles du revenu imposable, dans la limite d'un plafond annuel. L'économie d'impôt est égale au versement déductible multiplié par votre tranche marginale." },
      { heading: 'Ce qu\'il ne faut pas oublier', text: "L'épargne est bloquée jusqu'à la retraite, hors cas prévus par la loi. Et l'avantage fiscal est un différé d'imposition, pas une exonération." },
    ],
    limits: ["Il n'applique pas le plafond spécifique des travailleurs non salariés.", "Il ne projette pas la valeur de l'épargne à la retraite."],
    faq: [
      { q: 'Où trouver mon plafond exact ?', a: "Sur votre dernier avis d'imposition, à la rubrique consacrée à l'épargne retraite." },
      { q: 'Un PER est-il utile dans la tranche à 11 % ?', a: "L'avantage fiscal y est faible. Une assurance-vie, qui reste disponible, est souvent préférable." },
    ],
    offers: ['preparer/per', 'preparer/retraite-dirigeant', 'preparer/assurance-vie'],
  },

  {
    slug: 'assurance-vie',
    name: 'Simulateur assurance-vie',
    tagline: 'Ce que deviendraient vos versements',
    title: 'Simulateur assurance-vie : projetez votre épargne',
    description:
      "Simulateur d'assurance-vie gratuit : projetez un versement initial et des versements mensuels sur 8 à 25 ans, selon trois hypothèses de rendement.",
    h1: 'Simulateur assurance-vie',
    intro: "Projetez un capital de départ et des versements réguliers sur la durée de votre choix.",
    steps: [
      {
        title: 'Vos versements',
        fields: [
          { id: 'initial', label: 'Versement de départ', type: 'number', unit: '€', optional: true, placeholder: '10 000' },
          { id: 'mensuel', label: 'Versement mensuel', type: 'number', unit: '€', placeholder: '200' },
        ],
      },
      {
        title: 'Votre horizon',
        fields: [
          {
            id: 'duree',
            label: 'Durée du placement',
            type: 'radio',
            options: [
              { value: '8', label: '8 ans' },
              { value: '15', label: '15 ans' },
              { value: '20', label: '20 ans' },
              { value: '25', label: '25 ans' },
            ],
          },
          { id: 'rendement', label: 'Hypothèse de rendement', type: 'radio', options: returnProfiles, help: 'Une hypothèse plus élevée suppose des supports sans garantie en capital.' },
        ],
      },
    ],
    compute(values) {
      const initial = num(values, 'initial');
      const monthly = num(values, 'mensuel');
      const years = Number(str(values, 'duree'));
      const rate = Number(str(values, 'rendement'));
      const paid = initial + monthly * 12 * years;
      const projected = futureValue(initial, monthly, rate, years);

      return {
        headline: { label: `Capital estimé dans ${years} ans`, value: euro(projected), note: 'Avant fiscalité et prélèvements sociaux.' },
        figures: [
          { label: 'Total de vos versements', value: euro(paid) },
          { label: 'Gains estimés', value: euro(projected - paid) },
          { label: 'Avec l\'hypothèse prudente (2 %)', value: euro(futureValue(initial, monthly, 0.02, years)) },
          { label: 'Sans aucun rendement', value: euro(paid) },
        ],
        lists: [
          {
            title: 'Comment lire ce résultat',
            items: [
              "L'écart entre les hypothèses montre le poids du temps et du choix des supports.",
              "Après huit ans, les gains retirés bénéficient chaque année d'un abattement avant impôt.",
            ],
          },
        ],
        notes: [RETURN_NOTE, 'Les supports en unités de compte présentent un risque de perte en capital.'],
      };
    },
    explain: [
      { heading: 'Ce que calcule le simulateur', text: "Il capitalise vos versements au taux choisi, mois après mois. Le résultat illustre un mécanisme : il ne prédit le rendement d'aucun contrat." },
      { heading: 'Ce qui fera la différence dans la réalité', text: "Les frais du contrat, la répartition entre fonds en euros et unités de compte, et la régularité de vos versements comptent davantage que le choix du jour d'entrée." },
    ],
    limits: ["Il ne tient pas compte des frais propres à chaque contrat.", "Il ne calcule pas la fiscalité des retraits."],
    faq: [
      { q: 'Quelle hypothèse retenir ?', a: "La prudente si vous voulez un plancher raisonnable. Les autres supposent d'accepter des variations, à la hausse comme à la baisse." },
      { q: 'Peut-on modifier ses versements en cours de route ?', a: "Oui. Les versements programmés peuvent être augmentés, réduits ou suspendus." },
    ],
    offers: ['preparer/assurance-vie', 'preparer/epargne-projets', 'preparer/transmission'],
  },

  {
    slug: 'retraite',
    name: 'Simulateur retraite',
    tagline: "L'effort d'épargne pour le complément visé",
    title: 'Simulateur retraite : combien épargner chaque mois ?',
    description:
      "Simulateur retraite gratuit pour dirigeants et indépendants : calculez l'effort d'épargne mensuel nécessaire pour obtenir le complément de revenu visé.",
    h1: 'Simulateur retraite',
    intro: "Partez du complément de revenu que vous visez et obtenez l'épargne mensuelle à mettre en place.",
    steps: [
      {
        title: 'Votre horizon',
        fields: [
          { id: 'age', label: 'Votre âge', type: 'number', unit: 'ans', placeholder: '45' },
          {
            id: 'depart',
            label: 'Âge de départ envisagé',
            type: 'radio',
            options: [
              { value: '62', label: '62 ans' },
              { value: '64', label: '64 ans' },
              { value: '67', label: '67 ans' },
            ],
          },
        ],
      },
      {
        title: 'Votre objectif',
        fields: [
          { id: 'complement', label: 'Complément mensuel souhaité à la retraite', type: 'number', unit: '€', placeholder: '1 000' },
          {
            id: 'periode',
            label: 'Pendant',
            type: 'radio',
            options: [
              { value: '20', label: '20 ans' },
              { value: '25', label: '25 ans' },
              { value: '30', label: '30 ans' },
            ],
          },
          { id: 'existant', label: 'Épargne retraite déjà constituée', type: 'number', unit: '€', optional: true, placeholder: '0' },
          { id: 'rendement', label: 'Hypothèse de rendement', type: 'radio', options: returnProfiles },
        ],
      },
    ],
    compute(values) {
      const years = Number(str(values, 'depart')) - num(values, 'age');
      const rate = Number(str(values, 'rendement'));
      const target = num(values, 'complement') * 12 * Number(str(values, 'periode'));
      if (years <= 0) {
        return {
          headline: { label: 'Capital à réunir', value: euro(target), note: "L'âge de départ indiqué est déjà atteint : le calcul d'un effort mensuel n'a plus de sens." },
          figures: [],
          lists: [],
          notes: [RETURN_NOTE],
        };
      }
      const existing = futureValue(num(values, 'existant'), 0, rate, years);
      const missing = Math.max(0, target - existing);
      const effort = monthlyEffort(missing, rate, years);

      return {
        headline: { label: 'Effort d\'épargne mensuel', value: euro(effort), note: `Pendant ${years} ans, jusqu'à votre départ.` },
        figures: [
          { label: 'Capital à réunir pour ce complément', value: euro(target) },
          { label: 'Valeur estimée de votre épargne actuelle au départ', value: euro(existing) },
          { label: 'Capital restant à constituer', value: euro(missing) },
          { label: 'Le même objectif en commençant 5 ans plus tard', value: years > 5 ? `${euro(monthlyEffort(Math.max(0, target - futureValue(num(values, 'existant'), 0, rate, years)), rate, years - 5))} par mois` : '—' },
        ],
        lists: [
          {
            title: 'Comment lire ce résultat',
            items: [
              "Le capital à réunir est calculé sans rendement pendant la retraite : c'est une estimation prudente.",
              "L'effort dépend surtout du nombre d'années devant vous : attendre coûte cher.",
            ],
          },
        ],
        notes: [RETURN_NOTE, "Les pensions de vos régimes obligatoires ne sont pas estimées ici : elles se lisent sur votre relevé de carrière."],
      };
    },
    explain: [
      { heading: 'Ce que calcule le simulateur', text: "Il convertit un complément mensuel en capital à réunir, puis en versement mensuel d'ici votre départ. Il part de votre objectif, et non de votre pension, que seul votre relevé de carrière permet d'estimer." },
      { heading: 'Pourquoi partir du complément', text: "La question utile n'est pas « combien aurai-je ? » mais « combien me manquera-t-il ? ». Un dirigeant qui se verse peu de salaire a souvent une réponse inconfortable." },
    ],
    limits: ["Il n'estime pas vos pensions obligatoires.", "Il ne tient pas compte de l'inflation ni de la fiscalité à la sortie."],
    faq: [
      { q: 'Quel complément viser ?', a: "La différence entre vos dépenses prévues à la retraite et vos pensions estimées. Nous la calculons à partir de votre relevé de carrière." },
      { q: 'Quelle enveloppe utiliser ?', a: "PER, assurance-vie ou contrat financé par l'entreprise : le choix dépend de votre fiscalité et de votre besoin de disponibilité." },
    ],
    offers: ['preparer/retraite-dirigeant', 'preparer/per', 'preparer/assurance-vie'],
  },

  {
    slug: 'transmission',
    name: 'Simulateur transmission',
    tagline: 'Les droits que paieraient vos enfants',
    title: 'Simulateur succession : droits et effet de l\'assurance-vie',
    description:
      "Simulateur gratuit : estimez les droits de succession de vos enfants et l'effet d'une assurance-vie alimentée avant 70 ans.",
    h1: 'Simulateur transmission',
    intro: "Estimez les droits que paieraient vos enfants, et ce que change la part logée en assurance-vie.",
    steps: [
      {
        title: 'Votre patrimoine',
        hint: 'Des ordres de grandeur suffisent.',
        fields: [
          { id: 'patrimoine', label: 'Patrimoine net, hors assurance-vie', type: 'number', unit: '€', placeholder: '600 000', help: 'Biens et placements, dettes déduites.' },
          { id: 'assuranceVie', label: 'Assurance-vie alimentée avant vos 70 ans', type: 'number', unit: '€', optional: true, placeholder: '150 000' },
        ],
      },
      {
        title: 'Vos héritiers',
        fields: [
          {
            id: 'enfants',
            label: "Nombre d'enfants",
            type: 'radio',
            options: [
              { value: '1', label: '1' },
              { value: '2', label: '2' },
              { value: '3', label: '3' },
              { value: '4', label: '4 ou plus' },
            ],
          },
        ],
      },
    ],
    compute(values) {
      const children = Number(str(values, 'enfants'));
      const estate = num(values, 'patrimoine');
      const life = num(values, 'assuranceVie');
      const duty = (amount: number) => successionDuty(Math.max(0, amount / children - SUCCESSION_ALLOWANCE_PER_CHILD)) * children;
      const estateDuty = duty(estate);
      const lifeDuty = lifeInsuranceDuty(life / children) * children;
      const withoutLife = duty(estate + life);

      return {
        headline: { label: 'Droits estimés pour vos enfants', value: euro(estateDuty + lifeDuty) },
        figures: [
          { label: 'Droits sur la succession', value: euro(estateDuty) },
          { label: "Prélèvement sur l'assurance-vie", value: euro(lifeDuty) },
          { label: 'Droits si tout était dans la succession', value: euro(withoutLife) },
          { label: "Écart lié à l'assurance-vie", value: euro(Math.max(0, withoutLife - estateDuty - lifeDuty)) },
        ],
        lists: [
          {
            title: 'Hypothèses retenues',
            items: [
              'Transmission aux seuls enfants, à parts égales, sans donation au cours des quinze dernières années.',
              'Assurance-vie alimentée avant 70 ans, partagée à parts égales entre les enfants.',
              "Le conjoint survivant, exonéré de droits, n'est pas pris en compte.",
            ],
          },
        ],
        notes: ["Estimation fondée sur les barèmes en vigueur à la date de mise à jour du site. Elle ne constitue ni un conseil fiscal ni un conseil juridique : votre notaire reste l'interlocuteur pour organiser votre succession."],
      };
    },
    explain: [
      { heading: 'Ce que calcule le simulateur', text: "Chaque enfant bénéficie d'un abattement sur sa part, puis un barème progressif s'applique. L'assurance-vie suit un régime distinct, avec son propre abattement par bénéficiaire pour les versements faits avant 70 ans." },
      { heading: 'Ce qu\'il laisse de côté', text: "Le régime matrimonial, les donations passées, le démembrement et la présence d'un conjoint changent profondément le résultat. Le simulateur donne un ordre de grandeur, pas un plan de transmission." },
    ],
    limits: ["Il ne traite pas les versements effectués après 70 ans.", "Il ne remplace pas l'étude de votre notaire."],
    faq: [
      { q: 'Pourquoi distinguer avant et après 70 ans ?', a: "Les versements effectués après 70 ans relèvent d'un régime différent, avec un abattement global plus faible mais des gains exonérés." },
      { q: 'L\'assurance-vie réduit-elle toujours les droits ?', a: "Le plus souvent, mais pas dans tous les cas. Son intérêt tient aussi à la liberté de choisir les bénéficiaires." },
    ],
    offers: ['preparer/transmission', 'preparer/assurance-vie', 'preparer/bilan-patrimonial'],
  },

  {
    slug: 'bilan-patrimonial',
    name: 'Bilan patrimonial express',
    tagline: 'Votre patrimoine sur une page',
    title: 'Bilan patrimonial en ligne : répartition et points fragiles',
    description:
      "Bilan patrimonial gratuit en deux étapes : patrimoine net, répartition entre immobilier, épargne et outil professionnel, et points de fragilité.",
    h1: 'Bilan patrimonial express',
    intro: "Deux étapes pour voir comment votre patrimoine est réparti et où il est fragile.",
    steps: [
      {
        title: 'Ce que vous possédez',
        hint: 'Des ordres de grandeur suffisent. Laissez vide ce qui ne vous concerne pas.',
        fields: [
          { id: 'liquidites', label: 'Comptes et livrets', type: 'number', unit: '€', optional: true, placeholder: '20 000' },
          { id: 'epargne', label: 'Assurance-vie, épargne retraite, titres', type: 'number', unit: '€', optional: true, placeholder: '60 000' },
          { id: 'residence', label: 'Résidence principale et secondaire', type: 'number', unit: '€', optional: true, placeholder: '300 000' },
          { id: 'locatif', label: 'Immobilier locatif', type: 'number', unit: '€', optional: true, placeholder: '0' },
          { id: 'professionnel', label: "Valeur de votre entreprise ou de votre exploitation", type: 'number', unit: '€', optional: true, placeholder: '250 000' },
        ],
      },
      {
        title: 'Ce que vous devez et dépensez',
        fields: [
          { id: 'dettes', label: 'Capital restant dû sur vos emprunts', type: 'number', unit: '€', optional: true, placeholder: '120 000' },
          { id: 'depenses', label: 'Dépenses mensuelles du foyer', type: 'number', unit: '€', placeholder: '3 000' },
        ],
      },
    ],
    compute(values) {
      const cash = num(values, 'liquidites');
      const savings = num(values, 'epargne');
      const property = num(values, 'residence') + num(values, 'locatif');
      const business = num(values, 'professionnel');
      const gross = cash + savings + property + business;
      const debts = num(values, 'dettes');
      const spending = num(values, 'depenses');
      const share = (amount: number) => (gross > 0 ? percent(amount / gross) : '—');

      const alerts: string[] = [];
      if (spending > 0 && cash < spending * 3) alerts.push("Votre épargne disponible couvre moins de trois mois de dépenses : c'est la première fragilité à corriger.");
      if (gross > 0 && business / gross > 0.5) alerts.push("Plus de la moitié de votre patrimoine est dans votre outil de travail : votre retraite et votre famille dépendent d'un seul actif.");
      if (gross > 0 && property / gross > 0.7) alerts.push("Votre patrimoine est très concentré dans l'immobilier, peu disponible en cas de besoin.");
      if (gross > 0 && debts / gross > 0.5) alerts.push("Vos emprunts dépassent la moitié de vos actifs : vérifiez qu'ils sont bien assurés sur chaque emprunteur.");
      if (gross > 0 && savings / gross < 0.1) alerts.push("Votre épargne financière est faible au regard du reste : c'est pourtant elle qui finance la retraite et se transmet le plus simplement.");
      if (alerts.length === 0) alerts.push("Aucun déséquilibre marqué n'apparaît à ce niveau de détail.");

      return {
        headline: { label: 'Patrimoine net estimé', value: euro(gross - debts) },
        figures: [
          { label: 'Comptes et livrets', value: `${euro(cash)} (${share(cash)})` },
          { label: 'Épargne financière', value: `${euro(savings)} (${share(savings)})` },
          { label: 'Immobilier', value: `${euro(property)} (${share(property)})` },
          { label: 'Outil professionnel', value: `${euro(business)} (${share(business)})` },
          { label: 'Emprunts', value: euro(debts) },
        ],
        lists: [{ title: 'Points de fragilité', items: alerts }],
        notes: ["Les seuils utilisés sont des repères généraux, pas des règles. Un bilan complet tient compte de votre âge, de votre famille et de vos objectifs."],
      };
    },
    explain: [
      { heading: 'Ce que montre le bilan express', text: "Il additionne ce que vous possédez, retranche ce que vous devez et calcule la part de chaque grande masse. Quelques repères simples font ensuite ressortir les déséquilibres les plus fréquents." },
      { heading: 'Le cas du dirigeant et de l\'exploitant', text: "Leur patrimoine est souvent dominé par l'entreprise ou le domaine. Tant que tout va bien, cela passe inaperçu. En cas d'accident ou au moment de transmettre, c'est le sujet central." },
    ],
    limits: ["Il ne tient pas compte de votre situation familiale ni de votre régime matrimonial.", "Il ne remplace pas un bilan complet, réalisé en rendez-vous."],
    faq: [
      { q: 'Comment évaluer mon entreprise ?', a: "Retenez un ordre de grandeur prudent. Une évaluation précise relève de votre expert-comptable." },
      { q: 'Que se passe-t-il après ?', a: "Si vous le souhaitez, nous reprenons ces chiffres en rendez-vous pour un bilan complet." },
    ],
    offers: ['preparer/bilan-patrimonial', 'preparer/transmission', 'preparer/assurance-vie'],
  },

  {
    slug: 'tresorerie',
    name: "Simulateur trésorerie d'entreprise",
    tagline: 'Ce qui doit rester disponible, ce qui peut être placé',
    title: "Simulateur trésorerie d'entreprise : que peut-on placer ?",
    description:
      "Découpez la trésorerie de votre société en trois poches : fonctionnement, réserve pour vos projets et excédent durable pouvant être placé.",
    h1: "Simulateur trésorerie d'entreprise",
    intro: "Séparez ce qui sert à faire tourner l'entreprise de ce qui peut réellement être placé.",
    steps: [
      {
        title: 'Votre trésorerie',
        fields: [
          { id: 'tresorerie', label: 'Trésorerie disponible aujourd\'hui', type: 'number', unit: '€', placeholder: '300 000' },
          { id: 'charges', label: 'Charges mensuelles décaissées', type: 'number', unit: '€', placeholder: '40 000', help: 'Salaires, cotisations, loyers, fournisseurs, échéances.' },
        ],
      },
      {
        title: 'Vos besoins',
        fields: [
          {
            id: 'securite',
            label: 'Marge de sécurité souhaitée',
            type: 'radio',
            options: [
              { value: '2', label: '2 mois de charges' },
              { value: '3', label: '3 mois' },
              { value: '6', label: '6 mois' },
            ],
          },
          {
            id: 'saison',
            label: 'Votre activité est-elle fortement saisonnière ?',
            type: 'radio',
            options: [
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ],
          },
          { id: 'projets', label: 'Dépenses prévues dans les 24 mois', type: 'number', unit: '€', optional: true, placeholder: '50 000', help: 'Investissements, remboursements, distribution.' },
        ],
      },
    ],
    compute(values) {
      const cash = num(values, 'tresorerie');
      const seasonal = str(values, 'saison') === 'oui';
      const operating = Math.min(cash, num(values, 'charges') * Number(str(values, 'securite')) * (seasonal ? 1.5 : 1));
      const reserve = Math.min(cash - operating, num(values, 'projets'));
      const stable = Math.max(0, cash - operating - reserve);

      return {
        headline: { label: 'Excédent durable, pouvant être placé', value: euro(stable), note: stable === 0 ? "À ce stade, toute la trésorerie est utile à l'exploitation ou à vos projets." : undefined },
        figures: [
          { label: 'Poche de fonctionnement, à garder sur le compte', value: euro(operating) },
          { label: 'Poche de réserve, pour vos projets à 24 mois', value: euro(reserve) },
          { label: 'Poche stable', value: euro(stable) },
        ],
        lists: [
          {
            title: 'Comment lire ce résultat',
            items: [
              seasonal ? "La marge de sécurité est majorée de moitié pour tenir compte de la saisonnalité." : "La marge de sécurité est appliquée telle quelle.",
              "Seule la poche stable peut supporter un horizon de plusieurs années. La réserve appelle des supports disponibles et peu risqués.",
            ],
          },
        ],
        notes: ['Découpage indicatif, à valider avec votre expert-comptable à partir de votre plan de trésorerie.'],
      };
    },
    explain: [
      { heading: 'Pourquoi découper', text: "Placer une trésorerie dont on aura besoin dans six mois est la première erreur. Le découpage en trois poches fixe un horizon à chaque euro avant de parler de support." },
      { heading: 'Et ensuite', text: "La poche stable peut être logée dans un contrat de capitalisation ouvert aux sociétés. Les conditions d'accès varient selon la forme de la société et l'assureur." },
    ],
    limits: ["Il ne remplace pas un plan de trésorerie mensuel.", "Il ne propose aucun support de placement."],
    faq: [
      { q: 'Quelle marge de sécurité retenir ?', a: "Trois mois est un repère courant. Six mois se justifie quand les encaissements sont irréguliers ou concentrés sur peu de clients." },
      { q: 'La trésorerie placée reste-t-elle mobilisable ?', a: "Oui, par rachat, dans des délais à vérifier pour chaque contrat." },
    ],
    offers: ['preparer/tresorerie-entreprise', 'preparer/contrat-de-capitalisation', 'proteger/perte-exploitation'],
  },
];
