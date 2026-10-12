'use client';

import { ArrowRight, Calculator, CalendarDays, ChevronDown, Menu, PhoneCall, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { actions, menus, type NavMenu } from '@/content/navigation';
import { site } from '@/content/site';
import { iconForHref } from './icons';
import { Logo } from './Logo';

function MenuLinks({ menu, onNavigate }: { menu: NavMenu; onNavigate: () => void }) {
  return (
    <div className={`grid gap-x-6 gap-y-8 ${menu.groups.length >= 3 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2'}`}>
      {menu.groups.map((group, index) => (
        <div key={group.title ?? index}>
          {group.title && <p className="eyebrow mb-3 px-2 text-[0.65rem]">{group.title}</p>}
          <ul className="grid gap-0.5">
            {group.links.map((link) => {
              const Icon = iconForHref(link.href);
              return (
                <li key={link.href}>
                  <Link href={link.href} onClick={onNavigate} className="group flex items-start gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-pearl">
                    {Icon && (
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-pearl text-petrol ring-1 ring-line transition-colors group-hover:bg-petrol group-hover:text-white group-hover:ring-petrol">
                        <Icon className="size-4" strokeWidth={1.7} aria-hidden="true" />
                      </span>
                    )}
                    <span>
                      <span className="block text-[0.95rem] leading-snug font-semibold text-ink">{link.label}</span>
                      {link.hint && <span className="block text-[0.82rem] leading-snug text-slate">{link.hint}</span>}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** En-tête fixe : logo, cinq menus déroulants et les actions du site. */
export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  // Tout changement de page referme les menus.
  useEffect(closeAll, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && closeAll();
    const onClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const active = menus.find((menu) => menu.id === openMenu);
  const elevated = scrolled || Boolean(active) || mobileOpen;

  return (
    <header ref={headerRef} className={`sticky top-0 z-40 border-b transition-all duration-300 ${elevated ? 'border-line bg-paper/95 shadow-soft backdrop-blur-xl' : 'border-transparent bg-paper/80 backdrop-blur-xl'}`}>
      <div className={`container-page flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'min-h-16' : 'min-h-20'}`}>
        <Logo />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex">
            {menus.map((menu) => (
              <li key={menu.id}>
                <button
                  type="button"
                  className="group flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-2 text-[0.92rem] font-medium whitespace-nowrap text-char transition-colors hover:bg-pearl hover:text-ink aria-expanded:bg-pearl aria-expanded:text-ink xl:px-3 xl:text-[0.95rem]"
                  aria-expanded={openMenu === menu.id}
                  aria-controls="menu-panel"
                  onClick={() => setOpenMenu(openMenu === menu.id ? null : menu.id)}
                >
                  {menu.label}
                  <ChevronDown className="hidden size-3.5 text-steel transition-transform duration-300 group-aria-expanded:rotate-180 xl:block" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {/* Entre 1024 et 1280 px, le bouton de rappel se réduit à son icône pour laisser la place aux six menus. */}
          <Link href={actions.callback.href} className="btn-outline min-h-11 px-3 py-2 text-sm xl:px-5" aria-label={actions.callback.label}>
            <PhoneCall className="size-4" strokeWidth={1.8} aria-hidden="true" />
            <span className="hidden xl:inline">{actions.callback.label}</span>
          </Link>
          <Link href={actions.simulate.href} className="btn min-h-11 px-4 py-2 text-sm xl:px-5">
            <Calculator className="size-4" strokeWidth={1.8} aria-hidden="true" />
            Ma simulation
          </Link>
        </div>

        <button
          type="button"
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-silver text-ink transition-colors hover:border-petrol lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setOpenMenu(null);
          }}
        >
          {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {active && (
        <div id="menu-panel" className="absolute inset-x-0 top-full hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-line bg-paper shadow-lift lg:block">
          <div key={active.id} className="container-page animate-rise grid gap-8 py-8 xl:grid-cols-[1fr_18rem]">
            <MenuLinks menu={active} onNavigate={closeAll} />
            <aside className="surface-dark relative hidden flex-col justify-between overflow-hidden rounded-3xl p-6 text-white xl:flex">
              <div>
                <p className="eyebrow text-mist">{active.label}</p>
                <p className="mt-3 font-serif text-2xl leading-tight">Faites le point en quelques minutes</p>
                <p className="mt-2 text-sm text-white/70">Un simulateur gratuit, puis un courtier pour en parler.</p>
              </div>
              <div className="mt-6 grid gap-2">
                <Link href={actions.simulate.href} onClick={closeAll} className="btn-light min-h-11 px-4 py-2 text-sm">
                  <Calculator className="size-4" aria-hidden="true" />
                  {actions.simulate.label}
                </Link>
                <Link href={active.href} onClick={closeAll} className="btn-glass min-h-11 px-4 py-2 text-sm">
                  {active.allLabel}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </aside>
            <div className="xl:hidden">
              <Link href={active.href} onClick={closeAll} className="link-arrow">
                {active.allLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden">
          <div className="container-page animate-rise pt-2 pb-28">
            <ul className="divide-y divide-line">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <button
                    type="button"
                    className="group flex min-h-14 w-full cursor-pointer items-center justify-between py-3 text-left font-serif text-2xl font-medium text-ink"
                    aria-expanded={openMenu === menu.id}
                    onClick={() => setOpenMenu(openMenu === menu.id ? null : menu.id)}
                  >
                    {menu.label}
                    <ChevronDown className="size-5 text-steel transition-transform duration-300 group-aria-expanded:rotate-180" aria-hidden="true" />
                  </button>
                  {openMenu === menu.id && (
                    <div className="animate-rise pb-5">
                      <MenuLinks menu={menu} onNavigate={closeAll} />
                      <Link href={menu.href} onClick={closeAll} className="link-arrow mt-4 px-2">
                        {menu.allLabel}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-2.5">
              <Link href={actions.simulate.href} onClick={closeAll} className="btn">
                <Calculator className="size-4.5" aria-hidden="true" />
                {actions.simulate.label}
              </Link>
              <Link href={actions.callback.href} onClick={closeAll} className="btn-outline">
                <PhoneCall className="size-4.5" aria-hidden="true" />
                {actions.callback.label}
              </Link>
              <Link href={actions.booking.href} onClick={closeAll} className="btn-outline">
                <CalendarDays className="size-4.5" aria-hidden="true" />
                {actions.booking.label}
              </Link>
              <a href={`tel:${site.phone.e164}`} className="mt-2 text-center font-semibold text-petrol">
                {site.phone.display}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
