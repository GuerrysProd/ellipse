import type { MetadataRoute } from 'next';
import { isIndexable } from '@/content/site';
import { absoluteUrl } from '@/lib/schema';

export default function robots(): MetadataRoute.Robots {
  // Avant la mise en ligne, tout le site est fermé aux moteurs.
  if (!isIndexable) return { rules: { userAgent: '*', disallow: '/' } };
  return { rules: { userAgent: '*', allow: '/', disallow: '/api/' }, sitemap: absoluteUrl('/sitemap.xml') };
}
