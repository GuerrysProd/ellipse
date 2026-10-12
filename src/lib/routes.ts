import { cabinetPages, cabinetPath } from '@/content/cabinet';
import { guidePath, guides } from '@/content/guides';
import { legalLinks } from '@/content/navigation';
import { offerPath, offers } from '@/content/offers';
import { profilePath, profiles } from '@/content/profiles';
import { sectorPath, sectors } from '@/content/sectors';
import { simulatorPath, simulators } from '@/content/simulators';
import { tradePath, trades } from '@/content/trades';

export interface SiteRoute {
  path: string;
  priority: number;
}

/** Toutes les pages du site, pour le sitemap et le fichier llms.txt. */
export function allRoutes(): SiteRoute[] {
  const at = (priority: number) => (path: string) => ({ path, priority });
  return [
    { path: '/', priority: 1 },
    ...['/proteger', '/preparer', '/financer', '/simulateurs', '/vous-etes', '/metiers', '/cabinet', '/secteurs', '/guides'].map(at(0.8)),
    ...offers.map((offer) => at(0.9)(offerPath(offer))),
    ...simulators.map((simulator) => at(0.8)(simulatorPath(simulator.slug))),
    ...profiles.map((profile) => at(0.8)(profilePath(profile.slug))),
    ...trades.map((trade) => at(0.8)(tradePath(trade.slug))),
    ...sectors.map((sector) => at(0.7)(sectorPath(sector.slug))),
    ...cabinetPages.map((page) => at(0.6)(cabinetPath(page.slug))),
    ...guides.map((guide) => at(0.7)(guidePath(guide.slug))),
    ...['/etre-rappele', '/rendez-vous', '/audit-gratuit', '/contact', '/sinistre', '/faq', '/lexique'].map(at(0.7)),
    ...legalLinks.map((link) => at(0.3)(link.href)),
  ];
}
