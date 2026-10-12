import { UniverseTemplate } from '@/components/templates/UniverseTemplate';
import { universes } from '@/content/offers';
import { pageMetadata } from '@/lib/seo';

const universe = universes.financer;

export const metadata = pageMetadata({ title: 'Financer : crédit professionnel, immobilier et regroupement', description: universe.intro, path: universe.path });

export default function Page() {
  return <UniverseTemplate universe="financer" />;
}
