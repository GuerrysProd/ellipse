// Barèmes réglementaires utilisés par les simulateurs.
// À VÉRIFIER chaque année et à faire valider par le cabinet avant mise en ligne.

/** Plafond annuel de la Sécurité sociale 2025, base du plafond de déduction des versements retraite de 2026. */
export const PASS = 47_100;

/** Abattement par enfant et barème des droits de succession en ligne directe. */
export const SUCCESSION_ALLOWANCE_PER_CHILD = 100_000;
export const SUCCESSION_BRACKETS: { upTo: number; rate: number }[] = [
  { upTo: 8_072, rate: 0.05 },
  { upTo: 12_109, rate: 0.1 },
  { upTo: 15_932, rate: 0.15 },
  { upTo: 552_324, rate: 0.2 },
  { upTo: 902_838, rate: 0.3 },
  { upTo: 1_805_677, rate: 0.4 },
  { upTo: Infinity, rate: 0.45 },
];

/** Assurance-vie, capitaux issus de versements effectués avant 70 ans : abattement par bénéficiaire, puis deux taux. */
export const LIFE_INSURANCE_ALLOWANCE = 152_500;
export const LIFE_INSURANCE_FIRST_BRACKET = 700_000;
export const LIFE_INSURANCE_RATES = { first: 0.2, beyond: 0.3125 };

export function successionDuty(taxable: number): number {
  let duty = 0;
  let previous = 0;
  for (const bracket of SUCCESSION_BRACKETS) {
    if (taxable <= previous) break;
    duty += (Math.min(taxable, bracket.upTo) - previous) * bracket.rate;
    previous = bracket.upTo;
  }
  return duty;
}

export function lifeInsuranceDuty(capitalPerBeneficiary: number): number {
  const taxable = Math.max(0, capitalPerBeneficiary - LIFE_INSURANCE_ALLOWANCE);
  const first = Math.min(taxable, LIFE_INSURANCE_FIRST_BRACKET);
  return first * LIFE_INSURANCE_RATES.first + (taxable - first) * LIFE_INSURANCE_RATES.beyond;
}
