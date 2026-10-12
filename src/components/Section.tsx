import { Orbits } from './Orbits';

interface Props {
  title?: string;
  eyebrow?: string;
  intro?: string;
  children: React.ReactNode;
  /** Fond gris perle, pour alterner les blocs. */
  muted?: boolean;
  /** Fond sombre du cabinet, avec le motif d'ellipses. */
  dark?: boolean;
  id?: string;
}

export function Section({ title, eyebrow, intro, children, muted = false, dark = false, id }: Props) {
  const surface = dark ? 'surface-dark text-white' : muted ? 'surface-pearl' : '';
  return (
    <section id={id} className={`relative scroll-mt-24 overflow-hidden ${surface}`}>
      {dark && <Orbits className="-top-40 -right-40 size-[38rem] opacity-60" />}
      <div className="container-page relative py-16 sm:py-24">
        {(title || eyebrow) && (
          <div data-reveal className="max-w-3xl">
            {eyebrow && <p className={`eyebrow mb-4 ${dark ? 'text-mist' : ''}`}>{eyebrow}</p>}
            {title && <h2 className={`text-3xl sm:text-[2.75rem] ${dark ? 'text-white' : ''}`}>{title}</h2>}
            {intro && <p className={`mt-4 text-lg ${dark ? 'text-white/70' : 'text-slate'}`}>{intro}</p>}
          </div>
        )}
        <div className={title || eyebrow ? 'mt-12' : ''}>{children}</div>
      </div>
    </section>
  );
}
