import { Plus } from 'lucide-react';
import type { Faq } from '@/content/types';
import { faqSchema } from '@/lib/schema';
import { JsonLd } from './JsonLd';

/** Questions fréquentes en accordéon natif, avec leurs données structurées. */
export function FaqList({ items, withSchema = true }: { items: Faq[]; withSchema?: boolean }) {
  return (
    <div className="grid max-w-3xl gap-3">
      {items.map((item) => (
        <details key={item.q} data-reveal className="group rounded-2xl border border-line bg-paper px-6 transition-colors open:border-mist open:shadow-soft">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
            <h3 className="text-[1.05rem]">{item.q}</h3>
            <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-pearl text-petrol transition-all duration-300 group-open:rotate-45 group-open:bg-petrol group-open:text-white">
              <Plus className="size-4" />
            </span>
          </summary>
          <p className="pb-5 text-slate">{item.a}</p>
        </details>
      ))}
      {withSchema && <JsonLd data={faqSchema(items)} />}
    </div>
  );
}
