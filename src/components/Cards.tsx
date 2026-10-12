import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Photo as PhotoData } from '@/content/images';
import { iconForHref, type LucideIcon } from './icons';
import { Photo } from './Photo';

export interface CardItem {
  href: string;
  title: string;
  text?: string;
  tag?: string;
  icon?: LucideIcon;
  photo?: PhotoData;
}

/** Décale l'apparition de chaque carte d'une grille. */
const stagger = (index: number): CSSProperties => ({ '--reveal-delay': `${Math.min(index, 8) * 70}ms` }) as CSSProperties;

const gridColumns = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' };

/** Grille de cartes cliquables avec icône : offres, simulateurs, pages du cabinet. */
export function CardGrid({ items, columns = 3 }: { items: CardItem[]; columns?: 2 | 3 | 4 }) {
  return (
    <ul className={`grid gap-5 ${gridColumns[columns]}`}>
      {items.map((item, index) => {
        const Icon = item.icon ?? iconForHref(item.href);
        return (
          <li key={item.href} data-reveal style={stagger(index)}>
            <Link href={item.href} className="group card card-hover flex h-full flex-col">
              <span className="flex items-start justify-between gap-3">
                {Icon && (
                  <span className="icon-tile">
                    <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                )}
                {item.tag && <span className="rounded-full border border-line bg-pearl px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] text-petrol uppercase">{item.tag}</span>}
              </span>
              <span className="mt-5 text-lg leading-snug font-semibold text-ink">{item.title}</span>
              {item.text && <span className="mt-1.5 text-[0.95rem] text-slate">{item.text}</span>}
              <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-petrol">
                Découvrir
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Grille de cartes illustrées : profils, secteurs, guides. */
export function PhotoCardGrid({ items, columns = 3 }: { items: CardItem[]; columns?: 2 | 3 | 4 }) {
  return (
    <ul className={`grid gap-5 ${gridColumns[columns]}`}>
      {items.map((item, index) => (
        <li key={item.href} data-reveal style={stagger(index)}>
          <Link href={item.href} className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-ink text-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:aspect-[3/4]">
            {item.photo && <Photo photo={item.photo} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="transition-transform duration-[1200ms] ease-out group-hover:scale-105" decorative />}
            <span aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/5" />
            <span className="relative p-6">
              {item.tag && <span className="mb-3 block text-[0.68rem] font-semibold tracking-[0.24em] text-mist uppercase">{item.tag}</span>}
              <span className="block font-serif text-2xl leading-tight font-medium">{item.title}</span>
              {item.text && <span className="mt-2 line-clamp-3 block text-sm text-white/75">{item.text}</span>}
              <span className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Découvrir
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Grille de blocs non cliquables : garanties, enjeux, étapes. */
export function InfoGrid({ items, numbered = false, onDark = false }: { items: { name: string; text: string }[]; numbered?: boolean; onDark?: boolean }) {
  return (
    <ul className={`grid gap-5 sm:grid-cols-2 ${numbered && items.length === 4 ? 'lg:grid-cols-4' : ''} ${numbered && items.length === 3 ? 'lg:grid-cols-3' : ''}`}>
      {items.map((item, index) => (
        <li key={item.name} data-reveal style={stagger(index)} className={onDark ? 'rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm' : 'card'}>
          {numbered && <span className={`block font-serif text-5xl leading-none ${onDark ? 'text-gold' : 'text-mist'}`}>{String(index + 1).padStart(2, '0')}</span>}
          <h3 className={`text-lg ${numbered ? 'mt-4' : ''} ${onDark ? 'text-white' : ''}`}>{item.name}</h3>
          <p className={`mt-2 text-[0.95rem] ${onDark ? 'text-white/70' : 'text-slate'}`}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid max-w-3xl gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-pearl text-petrol ring-1 ring-line">
            <Check className="size-3" strokeWidth={2.5} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
