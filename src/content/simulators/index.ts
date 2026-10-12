import { activite } from './activite';
import { credit } from './credit';
import { patrimoine } from './patrimoine';
import type { Simulator } from './types';

export const simulators: Simulator[] = [...activite, ...patrimoine, ...credit];

export function getSimulator(slug: string): Simulator {
  const simulator = simulators.find((item) => item.slug === slug);
  if (!simulator) throw new Error(`Simulateur inconnu : ${slug}`);
  return simulator;
}

export const simulatorPath = (slug: string) => `/simulateurs/${slug}`;
