import { PenLine } from 'lucide-react';
import { showTodos } from '@/content/site';

/** Encadré de relecture : signale une information que le cabinet doit fournir. Masqué si NEXT_PUBLIC_SHOW_TODOS vaut « false ». */
export function Todo({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  if (!showTodos) return null;
  return (
    <p className={`my-4 flex gap-3 rounded-xl border border-dashed p-4 text-sm ${onDark ? 'border-white/30 bg-white/5 text-white/80' : 'border-steel/60 bg-pearl text-slate'}`}>
      <PenLine className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <span>
        <strong className={onDark ? 'text-white' : 'text-ink'}>À compléter.</strong> {children}
      </span>
    </p>
  );
}
