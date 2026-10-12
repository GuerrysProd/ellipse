import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';

interface Props {
  onDark?: boolean;
  /** Dans une page d'atterrissage, le logo peut ne pas être cliquable. */
  linked?: boolean;
}

/** Logo du cabinet : la sphère fournie, et le nom composé comme sur ses supports. */
export function Logo({ onDark = false, linked = true }: Props) {
  const content = (
    <>
      <Image src="/brand/logo-ellipse.png" alt="" width={46} height={46} priority className="size-11 shrink-0 transition-transform duration-700 group-hover:rotate-12" />
      <span className="leading-none">
        <span className={`block font-serif text-[1.45rem] font-medium tracking-[0.2em] ${onDark ? 'text-white' : 'text-char'}`}>ELLIPSE</span>
        <span className={`mt-1 block text-[0.58rem] font-semibold tracking-[0.46em] ${onDark ? 'text-mist' : 'text-steel'}`}>SOLUTIONS</span>
      </span>
    </>
  );
  if (!linked) return <span className="group flex items-center gap-3">{content}</span>;
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name}, accueil`}>
      {content}
    </Link>
  );
}
