import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from './JsonLd';

export interface Crumb {
  name: string;
  path: string;
}

/** Fil d'Ariane, conçu pour le fond sombre des premiers écrans. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  const trail = [{ name: 'Accueil', path: '/' }, ...items];
  return (
    <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-white/60">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="size-3.5 text-white/30" aria-hidden="true" />}
            {index < trail.length - 1 ? (
              <Link className="flex items-center gap-1.5 transition-colors hover:text-white" href={item.path}>
                {index === 0 && <Home className="size-3.5" aria-hidden="true" />}
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-white/90">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
      <JsonLd data={breadcrumbSchema(trail)} />
    </nav>
  );
}
