import { OfferTemplate } from '@/components/templates/OfferTemplate';
import { getOffer, offerPath, offersOf } from '@/content/offers';
import { pageMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return offersOf('preparer').map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }: Props) {
  const offer = getOffer(`preparer/${(await params).slug}`);
  return pageMetadata({ title: offer.title, description: offer.description, path: offerPath(offer) });
}

export default async function Page({ params }: Props) {
  return <OfferTemplate offer={getOffer(`preparer/${(await params).slug}`)} />;
}
