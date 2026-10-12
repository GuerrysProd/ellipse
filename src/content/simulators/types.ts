import type { Faq } from '../types';

export interface SimOption {
  value: string;
  label: string;
}

export interface SimField {
  id: string;
  label: string;
  type: 'number' | 'select' | 'radio' | 'checks';
  /** Unité affichée à droite du champ numérique. */
  unit?: string;
  placeholder?: string;
  help?: string;
  options?: SimOption[];
  optional?: boolean;
}

export interface SimStep {
  title: string;
  hint?: string;
  fields: SimField[];
}

export type SimValues = Record<string, string | string[]>;

export interface SimResult {
  headline: { label: string; value: string; note?: string };
  figures: { label: string; value: string }[];
  lists: { title: string; items: string[] }[];
  /** Hypothèses et limites propres à ce résultat. */
  notes: string[];
}

export interface Simulator {
  slug: string;
  name: string;
  tagline: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  steps: SimStep[];
  compute: (values: SimValues) => SimResult;
  explain: { heading: string; text: string }[];
  /** Ce que l'outil ne fait pas. */
  limits: string[];
  faq: Faq[];
  /** Offres liées, au format « univers/slug ». */
  offers: string[];
}
