import { Actions } from './Actions';
import { CallbackForm } from './forms/CallbackForm';
import { Orbits } from './Orbits';

interface Props {
  title?: string;
  text?: string;
  source: string;
  simulate?: { href: string; label: string };
}

/** Bloc de fin de page : les trois actions à gauche, le formulaire de rappel à droite. */
export function CtaBand({ title = 'Parlons de votre situation', text = "Un premier échange suffit souvent à savoir s'il y a quelque chose à changer. Il est gratuit et ne vous engage à rien.", source, simulate }: Props) {
  return (
    <section className="surface-dark relative overflow-hidden text-white">
      <Orbits className="-bottom-56 -left-48 size-[44rem] opacity-50" />
      <div className="container-page relative grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div data-reveal>
          <p className="eyebrow mb-4 text-mist">Sans engagement</p>
          <h2 className="text-3xl text-white sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-lg text-white/70">{text}</p>
          <Actions className="mt-9" simulate={simulate} onDark />
        </div>
        <div data-reveal style={{ '--reveal-delay': '120ms' } as React.CSSProperties} className="text-char">
          <CallbackForm source={source} />
        </div>
      </div>
    </section>
  );
}
