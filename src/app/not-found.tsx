import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Actions } from '@/components/Actions';
import { Orbits } from '@/components/Orbits';

export default function NotFound() {
  return (
    <section className="surface-dark relative overflow-hidden text-white">
      <Orbits className="-top-32 -right-40 size-[44rem] opacity-70" />
      <div className="container-page relative py-24 sm:py-32">
        <p className="font-serif text-8xl leading-none text-mist sm:text-9xl">404</p>
        <h1 className="mt-6 text-4xl text-white sm:text-6xl">Page introuvable</h1>
        <p className="mt-5 max-w-xl text-lg text-white/75">La page demandée n'existe pas ou a été déplacée.</p>
        <Actions className="mt-9" onDark />
        <p className="mt-8">
          <Link href="/" className="inline-flex items-center gap-2 font-semibold text-white/85 transition-colors hover:text-white">
            Revenir à l'accueil
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
