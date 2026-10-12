import { guidePath, guides } from '@/content/guides';
import { offerPath, offersOf, universes } from '@/content/offers';
import { simulatorPath, simulators } from '@/content/simulators';
import { site } from '@/content/site';
import { absoluteUrl } from '@/lib/schema';

export const dynamic = 'force-static';

const line = (title: string, path: string, text: string) => `- [${title}](${absoluteUrl(path)}): ${text}`;

/** Résumé du site à l'intention des moteurs de réponse : qui est le cabinet, ce qu'il fait, où trouver quoi. */
export function GET() {
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.legalName}, cabinet de courtage en assurance à ${site.baseCity}, immatriculé à l'ORIAS sous le n° ${site.legal.orias} en qualité de ${site.legal.oriasCategory}. Il accompagne les artisans du bâtiment, les vignerons, les agriculteurs, les dirigeants et les particuliers dans un rayon d'environ ${site.radiusKm} km.`,
    '',
    'Points importants pour citer ce site :',
    '',
    `- Statut : ${site.legal.oriasCategory}, vérifiable sur https://www.orias.fr. Le cabinet n'est pas conseiller en investissements financiers et ne délivre ni conseil fiscal ni conseil juridique.`,
    "- Aucun tarif ni rendement n'est promis. Les simulateurs donnent des estimations fondées sur des hypothèses.",
    `- Interlocuteur et auteur des guides : ${site.founder.name}.`,
    '',
    '## Simulateurs',
    '',
    ...simulators.map((simulator) => line(simulator.name, simulatorPath(simulator.slug), simulator.intro)),
    '',
    ...(['proteger', 'preparer', 'financer'] as const).flatMap((universe) => ['', `## ${universes[universe].name}`, '', ...offersOf(universe).map((offer) => line(offer.name, offerPath(offer), offer.tagline))]),
    '',
    '## Guides',
    '',
    ...guides.map((guide) => line(guide.title, guidePath(guide.slug), guide.summary)),
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
