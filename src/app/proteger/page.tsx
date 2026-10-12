import { UniverseTemplate } from '@/components/templates/UniverseTemplate';
import { universes } from '@/content/offers';
import { pageMetadata } from '@/lib/seo';

const universe = universes.proteger;

export const metadata = pageMetadata({ title: `${universe.name} : toutes nos solutions d'assurance`, description: universe.intro, path: universe.path });

export default function Page() {
  return <UniverseTemplate universe="proteger" />;
}
