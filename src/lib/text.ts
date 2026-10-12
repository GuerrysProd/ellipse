/** Transforme un libellé en identifiant d'ancre : minuscules, sans accent, tirets. */
export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Première lettre sans accent, en capitale : sert au classement alphabétique du lexique. */
export const initial = (value: string) => value.normalize('NFD')[0].toUpperCase();
