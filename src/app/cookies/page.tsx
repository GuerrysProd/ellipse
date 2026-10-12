import { ContentTemplate } from '@/components/templates/ContentTemplate';
import { legalPages } from '@/content/legal';
import { pageMetadata } from '@/lib/seo';

const page = legalPages.find((item) => item.slug === 'cookies')!;

export const metadata = pageMetadata({ title: page.title, description: page.description, path: '/cookies' });

export default function Page() {
  return <ContentTemplate page={page} crumbs={[{ name: page.name, path: '/cookies' }]} withCta={false} />;
}
