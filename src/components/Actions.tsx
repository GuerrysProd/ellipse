import { Calculator, CalendarDays, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { actions } from '@/content/navigation';

interface Props {
  /** Remplace la cible et le libellé du bouton de simulation, pour pointer vers un simulateur précis. */
  simulate?: { href: string; label: string };
  onDark?: boolean;
  className?: string;
}

/** Les trois actions du site, dans l'ordre : simuler, être rappelé, prendre rendez-vous. */
export function Actions({ simulate = actions.simulate, onDark = false, className = '' }: Props) {
  const primary = onDark ? 'btn-light' : 'btn';
  const secondary = onDark ? 'btn-glass' : 'btn-outline';
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href={simulate.href} className={primary}>
        <Calculator className="size-4.5" strokeWidth={1.8} aria-hidden="true" />
        {simulate.label}
      </Link>
      <Link href={actions.callback.href} className={secondary}>
        <PhoneCall className="size-4.5" strokeWidth={1.8} aria-hidden="true" />
        {actions.callback.label}
      </Link>
      <Link href={actions.booking.href} className={secondary}>
        <CalendarDays className="size-4.5" strokeWidth={1.8} aria-hidden="true" />
        {actions.booking.label}
      </Link>
    </div>
  );
}
