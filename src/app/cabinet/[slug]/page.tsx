import { BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import { cabinetIcons } from '@/components/icons';
import { ContentTemplate } from '@/components/templates/ContentTemplate';
import { cabinetPages, cabinetPath } from '@/content/cabinet';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return cabinetPages.map((page) => ({ slug: page.slug }));
}

const find = (slug: string) => cabinetPages.find((page) => page.slug === slug)!;

export async function generateMetadata({ params }: Props) {
  const page = find((await params).slug);
  return pageMetadata({ title: page.title, description: page.description, path: cabinetPath(page.slug) });
}

export default async function Page({ params }: Props) {
  const page = find((await params).slug);
  const portrait =
    page.slug === site.founder.slug ? (
      <figure className="overflow-hidden rounded-[2rem] border border-line bg-paper shadow-lift">
        <div className="relative aspect-[4/5]">
          <Image src="/brand/portrait-fondateur.jpg" alt={`${site.founder.name}, fondateur du cabinet`} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover object-[38%_30%]" />
        </div>
        <figcaption className="flex items-center gap-3 p-5 text-sm">
          <BadgeCheck className="size-5 shrink-0 text-petrol" strokeWidth={1.6} aria-hidden="true" />
          <span>
            <span className="block font-semibold text-ink">{site.founder.name}</span>
            <span className="block text-slate">Courtier en assurance · ORIAS n° {site.legal.orias}</span>
          </span>
        </figcaption>
      </figure>
    ) : undefined;

  return (
    <ContentTemplate
      page={page}
      icon={cabinetIcons[page.slug]}
      aside={portrait}
      crumbs={[
        { name: 'Le cabinet', path: '/cabinet' },
        { name: page.name, path: cabinetPath(page.slug) },
      ]}
    />
  );
}
