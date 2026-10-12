import type { MetadataRoute } from 'next';
import { allRoutes } from '@/lib/routes';
import { absoluteUrl } from '@/lib/schema';

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((route) => ({ url: absoluteUrl(route.path), priority: route.priority }));
}
