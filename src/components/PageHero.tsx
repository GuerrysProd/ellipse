import type { Photo as PhotoData } from '@/content/images';
import { Breadcrumb, type Crumb } from './Breadcrumb';
import type { LucideIcon } from './icons';
import { Orbits } from './Orbits';
import { Photo } from './Photo';

interface Props {
  crumbs?: Crumb[];
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Illustration placée à droite du titre. Sans elle, le motif d'ellipses occupe la place. */
  photo?: PhotoData;
  icon?: LucideIcon;
  children?: React.ReactNode;
}

/** Premier écran d'une page intérieure : fond sombre du cabinet, fil d'Ariane, titre, actions. */
export function PageHero({ crumbs, eyebrow, title, intro, photo, icon: Icon, children }: Props) {
  return (
    <section className="surface-dark relative overflow-hidden text-white">
      <Orbits className={photo ? '-right-64 -bottom-72 size-[46rem] opacity-50' : '-top-32 -right-40 size-[44rem] opacity-70'} />
      <div className={`container-page relative grid items-center gap-12 py-12 sm:py-16 ${photo ? 'lg:grid-cols-[1.15fr_1fr] lg:py-20' : 'lg:py-20'}`}>
        <div className="animate-rise">
          {crumbs && <Breadcrumb items={crumbs} />}
          {(eyebrow || Icon) && (
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.26em] text-mist uppercase">
              {Icon && (
                <span className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-sm">
                  <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
              )}
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl text-4xl text-white sm:text-6xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">{intro}</p>}
          {children && <div className="mt-9">{children}</div>}
        </div>
        {photo && (
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-white/15">
              <Photo photo={photo} sizes="(min-width: 1024px) 45vw, 100vw" priority />
              <span aria-hidden="true" className="absolute inset-0 bg-linear-to-tr from-ink/50 via-transparent to-transparent" />
            </div>
            <span aria-hidden="true" className="absolute -bottom-5 -left-5 size-24 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md" />
          </div>
        )}
      </div>
    </section>
  );
}
