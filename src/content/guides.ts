import { guidesActivite } from './guides-activite';
import { guidesPatrimoine } from './guides-patrimoine';
import type { Guide } from './types';

export const guides: Guide[] = [...guidesActivite, ...guidesPatrimoine];

export const guideThemes: Guide['theme'][] = ['Bâtiment', 'Vigne et agriculture', 'Dirigeant', 'Épargne et retraite', 'Transmission', 'Comprendre'];

export const guidePath = (slug: string) => `/guides/${slug}`;
