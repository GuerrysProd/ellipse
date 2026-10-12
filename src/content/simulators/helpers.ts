import type { SimOption, SimValues } from './types';

/** Lit un champ numérique ; renvoie 0 si le champ est vide ou invalide. */
export function num(values: SimValues, id: string): number {
  const raw = values[id];
  const parsed = typeof raw === 'string' ? Number(raw.replace(',', '.').replace(/\s/g, '')) : NaN;
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

export function str(values: SimValues, id: string): string {
  const raw = values[id];
  return typeof raw === 'string' ? raw : '';
}

export function list(values: SimValues, id: string): string[] {
  const raw = values[id];
  return Array.isArray(raw) ? raw : [];
}

const euroFormat = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

export const euro = (value: number) => euroFormat.format(Math.round(value));

export const percent = (ratio: number) => `${Math.round(ratio * 100)} %`;

export const yesNo: SimOption[] = [
  { value: 'oui', label: 'Oui' },
  { value: 'non', label: 'Non' },
];

/** Hypothèses de rendement annuel net de frais. Ce sont des scénarios de calcul, pas des promesses. */
export const returnProfiles: SimOption[] = [
  { value: '0.02', label: 'Prudente : 2 % par an' },
  { value: '0.035', label: 'Intermédiaire : 3,5 % par an' },
  { value: '0.05', label: 'Dynamique : 5 % par an' },
];

/** Valeur future d'un capital et de versements mensuels, à un taux annuel donné. */
export function futureValue(initial: number, monthly: number, annualRate: number, years: number): number {
  const months = Math.round(years * 12);
  if (annualRate === 0) return initial + monthly * months;
  const monthlyRate = Math.pow(1 + annualRate, 1 / 12) - 1;
  return initial * Math.pow(1 + annualRate, years) + monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
}

/** Versement mensuel nécessaire pour atteindre un capital donné. */
export function monthlyEffort(target: number, annualRate: number, years: number): number {
  const months = Math.round(years * 12);
  if (months <= 0) return target;
  if (annualRate === 0) return target / months;
  const monthlyRate = Math.pow(1 + annualRate, 1 / 12) - 1;
  return (target * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);
}
