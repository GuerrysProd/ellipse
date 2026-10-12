import { Calculator, Phone, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { actions } from '@/content/navigation';
import { site } from '@/content/site';

/** Barre fixe en bas d'écran sur mobile : appeler, être rappelé, simuler. */
export function MobileActionBar() {
  const item = 'flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl text-[0.7rem] font-semibold';
  return (
    <div className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-3 gap-1.5 rounded-3xl border border-line bg-paper/90 p-1.5 shadow-lift backdrop-blur-xl lg:hidden">
      <a href={`tel:${site.phone.e164}`} className={`${item} text-ink`}>
        <Phone className="size-4.5" strokeWidth={1.8} aria-hidden="true" />
        Appeler
      </a>
      <Link href={actions.callback.href} className={`${item} text-ink`}>
        <PhoneCall className="size-4.5" strokeWidth={1.8} aria-hidden="true" />
        Être rappelé
      </Link>
      <Link href={actions.simulate.href} className={`${item} bg-ink text-white`}>
        <Calculator className="size-4.5" strokeWidth={1.8} aria-hidden="true" />
        Simuler
      </Link>
    </div>
  );
}
