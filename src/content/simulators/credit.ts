import { euro, num, str } from './helpers';
import type { Simulator } from './types';

const COMMITMENT = 'Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.';

/** Mensualité d'un prêt amortissable à échéances constantes. */
function monthlyPayment(capital: number, annualRate: number, years: number): number {
  const months = Math.max(1, Math.round(years * 12));
  const rate = annualRate / 12;
  if (rate === 0) return capital / months;
  return (capital * rate) / (1 - Math.pow(1 + rate, -months));
}

export const credit: Simulator[] = [
  {
    slug: 'credit',
    name: 'Simulateur de crédit',
    tagline: 'Mensualité et coût total de votre prêt',
    title: 'Simulateur de crédit : mensualité et coût total',
    description:
      "Simulateur de crédit gratuit : calculez la mensualité et le coût total d'un prêt immobilier, professionnel ou personnel, assurance comprise.",
    h1: 'Simulateur de crédit',
    intro: "Calculez la mensualité d'un prêt et ce qu'il vous coûtera au total, intérêts et assurance compris.",
    steps: [
      {
        title: 'Votre projet',
        fields: [
          {
            id: 'type',
            label: 'Nature du prêt',
            type: 'radio',
            options: [
              { value: 'immobilier', label: 'Crédit immobilier' },
              { value: 'professionnel', label: 'Crédit professionnel' },
              { value: 'personnel', label: 'Prêt personnel' },
            ],
          },
          { id: 'montant', label: 'Montant à emprunter', type: 'number', unit: '€', placeholder: '200 000' },
        ],
      },
      {
        title: 'Les conditions',
        hint: "Reprenez celles d'une proposition reçue, ou testez une hypothèse.",
        fields: [
          { id: 'duree', label: 'Durée du prêt', type: 'number', unit: 'ans', placeholder: '20' },
          { id: 'taux', label: 'Taux annuel, hors assurance', type: 'number', unit: '%', placeholder: '3,5' },
          { id: 'assurance', label: "Taux annuel de l'assurance", type: 'number', unit: '%', optional: true, placeholder: '0,30', help: 'Calculé ici sur le capital emprunté. Laissez vide pour un calcul sans assurance.' },
        ],
      },
    ],
    compute(values) {
      const capital = num(values, 'montant');
      const years = num(values, 'duree');
      const months = Math.max(1, Math.round(years * 12));
      const monthly = monthlyPayment(capital, num(values, 'taux') / 100, years);
      const interest = monthly * months - capital;
      const insuranceMonthly = (capital * (num(values, 'assurance') / 100)) / 12;
      const insurance = insuranceMonthly * months;
      const kind = str(values, 'type');

      return {
        headline: { label: 'Mensualité estimée', value: `${euro(monthly + insuranceMonthly)} par mois`, note: insuranceMonthly > 0 ? `Dont ${euro(insuranceMonthly)} d'assurance.` : 'Hors assurance.' },
        figures: [
          { label: 'Capital emprunté', value: euro(capital) },
          { label: 'Coût des intérêts', value: euro(interest) },
          { label: "Coût de l'assurance", value: euro(insurance) },
          { label: 'Coût total du crédit', value: euro(interest + insurance) },
          { label: 'Montant total remboursé', value: euro(capital + interest + insurance) },
        ],
        lists: [
          {
            title: 'Comment lire ce résultat',
            items: [
              "Le coût total est la donnée à comparer d'une offre à l'autre, plus que le taux seul.",
              kind === 'immobilier'
                ? "Pour un crédit immobilier, l'assurance pèse souvent autant que l'écart de taux entre deux banques, et se choisit librement."
                : "Une durée plus courte augmente la mensualité mais réduit nettement le coût total.",
            ],
          },
        ],
        notes: ['Hors frais de dossier et de garantie. Estimation à taux fixe et échéances constantes : elle ne vaut ni offre de prêt ni accord de financement.', COMMITMENT],
      };
    },
    explain: [
      { heading: 'Ce que calcule le simulateur', text: "Il applique la formule d'un prêt amortissable à échéances constantes : chaque mensualité rembourse une part de capital et une part d'intérêts, la seconde diminuant avec le temps." },
      { heading: "Ce qu'il manque pour comparer deux offres", text: "Les frais de dossier, le coût de la garantie et les conditions de remboursement anticipé. Le taux annuel effectif global, indiqué sur toute offre, les réunit en un seul chiffre." },
    ],
    limits: ["Il ne dit pas si le prêt vous sera accordé : la décision appartient à l'établissement prêteur.", "Il ne calcule pas votre capacité d'emprunt, qui dépend de vos revenus et de vos charges."],
    faq: [
      { q: 'Quel taux indiquer ?', a: "Celui d'une proposition que vous avez reçue. À défaut, testez plusieurs hypothèses pour mesurer l'effet d'un écart de taux." },
      { q: "L'assurance est-elle toujours calculée sur le capital emprunté ?", a: "Non. Certains contrats la calculent sur le capital restant dû : elle diminue alors avec le temps et son coût total est plus faible." },
    ],
    offers: ['financer/credit-immobilier', 'financer/credit-professionnel', 'proteger/assurance-emprunteur'],
  },
  {
    slug: 'regroupement-credits',
    name: 'Simulateur de regroupement de crédits',
    tagline: 'Ce que vous gagnez par mois, ce que cela coûte',
    title: 'Simulateur de regroupement de crédits',
    description:
      "Simulateur gratuit de regroupement de crédits : nouvelle mensualité, baisse mensuelle et écart de coût total par rapport à vos prêts actuels.",
    h1: 'Simulateur de regroupement de crédits',
    intro: "Mesurez l'effet d'un regroupement dans les deux sens : la mensualité qui baisse, et le coût total qui change.",
    steps: [
      {
        title: 'Vos crédits actuels',
        hint: 'Additionnez tous les prêts que vous voulez regrouper.',
        fields: [
          { id: 'mensualites', label: 'Total de vos mensualités', type: 'number', unit: '€/mois', placeholder: '1 450' },
          { id: 'capital', label: 'Total des capitaux restant dus', type: 'number', unit: '€', placeholder: '95 000' },
          { id: 'reste', label: 'Durée moyenne restante', type: 'number', unit: 'ans', placeholder: '7' },
        ],
      },
      {
        title: 'Le regroupement envisagé',
        fields: [
          {
            id: 'duree',
            label: 'Nouvelle durée',
            type: 'radio',
            options: [
              { value: '8', label: '8 ans' },
              { value: '10', label: '10 ans' },
              { value: '12', label: '12 ans' },
              { value: '15', label: '15 ans' },
            ],
          },
          { id: 'taux', label: 'Taux annuel du nouveau prêt', type: 'number', unit: '%', placeholder: '5', help: "Une hypothèse : le taux réel dépend de votre dossier et de la nature des crédits regroupés." },
        ],
      },
    ],
    compute(values) {
      const current = num(values, 'mensualites');
      const capital = num(values, 'capital');
      const remaining = num(values, 'reste');
      const years = Number(str(values, 'duree'));
      const monthly = monthlyPayment(capital, num(values, 'taux') / 100, years);
      const currentCost = Math.max(0, current * 12 * remaining - capital);
      const newCost = monthly * years * 12 - capital;
      const saving = current - monthly;
      const extra = newCost - currentCost;

      return {
        headline: {
          label: 'Nouvelle mensualité estimée',
          value: `${euro(monthly)} par mois`,
          note: saving > 0 ? `Soit ${euro(saving)} de moins chaque mois.` : 'Dans ce scénario, la mensualité ne baisse pas : la durée choisie est trop courte.',
        },
        figures: [
          { label: 'Mensualités actuelles', value: `${euro(current)} par mois` },
          { label: 'Intérêts restant à payer sur vos crédits actuels', value: euro(currentCost) },
          { label: 'Intérêts du nouveau prêt', value: euro(newCost) },
          { label: extra >= 0 ? 'Coût supplémentaire du regroupement' : 'Économie sur le coût total', value: euro(Math.abs(extra)) },
        ],
        lists: [
          {
            title: 'Comment lire ce résultat',
            items: [
              "La diminution du montant des mensualités entraîne l'allongement de la durée de remboursement et majore le coût total du crédit.",
              "L'opération se juge sur les deux chiffres : l'air retrouvé chaque mois, et ce qu'il coûte sur la durée.",
            ],
          },
        ],
        notes: [
          "Hors indemnités de remboursement anticipé, frais de dossier, frais de garantie et assurances, qui s'ajoutent au coût. Les intérêts restants de vos crédits actuels sont estimés à partir de vos mensualités.",
          COMMITMENT,
        ],
      };
    },
    explain: [
      { heading: 'Ce que calcule le simulateur', text: "Il compare deux situations : continuer à rembourser vos prêts jusqu'à leur terme, ou les remplacer par un prêt unique plus long. Il met en regard la mensualité et le total des intérêts dans chaque cas." },
      { heading: 'Pourquoi le coût augmente le plus souvent', text: "Parce que le capital est remboursé plus lentement. Une mensualité divisée par deux sur une durée doublée coûte davantage d'intérêts, même à un taux plus bas." },
    ],
    limits: ["Il n'intègre ni les frais ni les assurances, qui peuvent changer le résultat.", "Il ne dit pas si l'opération sera acceptée par un établissement."],
    faq: [
      { q: 'Où trouver le capital restant dû ?', a: "Sur le tableau d'amortissement de chaque prêt, ou en demandant un décompte à l'établissement prêteur." },
      { q: 'Faut-il choisir la durée la plus longue ?', a: "Non. La bonne durée est la plus courte que votre budget supporte sans tension." },
    ],
    offers: ['financer/regroupement-de-credits', 'financer/credit-immobilier', 'financer/pret-personnel'],
  },
];
