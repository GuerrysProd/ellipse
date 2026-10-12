import { CalendarDays, FileSearch, Mail, MapPin, Phone, PhoneCall, Siren } from 'lucide-react';
import Link from 'next/link';
import { FaqList } from '@/components/FaqList';
import { ContactForm } from '@/components/forms/ContactForm';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { Todo } from '@/components/Todo';
import { actions } from '@/content/navigation';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Contact : ${site.phone.display}`,
  description: `Contacter ${site.name} à ${site.baseCity} : téléphone, e-mail, message, rendez-vous. Réponse d'un courtier, sans engagement.`,
  path: '/contact',
});

const faq = [
  { q: 'Sous quel délai répondez-vous ?', a: 'Le plus souvent dans la journée, aux jours ouvrés.' },
  { q: 'Puis-je passer au cabinet sans rendez-vous ?', a: 'Mieux vaut prévenir : le cabinet est souvent en déplacement chez ses clients.' },
  { q: 'Que faire en cas de sinistre urgent ?', a: "Appelez directement le cabinet. La page « En cas de sinistre » rappelle les premiers réflexes." },
];

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Contact', path: '/contact' }]} eyebrow="Le cabinet" icon={Mail} title="Nous contacter" intro="Par téléphone, par message ou en choisissant un créneau : à vous de voir ce qui vous convient." />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Coordonnées</p>
            <h2 className="text-3xl sm:text-4xl">{site.name}</h2>
            <ul className="mt-7 grid gap-3">
              <li>
                <a href={`tel:${site.phone.e164}`} className="group card card-hover flex items-center gap-4">
                  <span className="icon-tile">
                    <Phone className="size-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-slate">Téléphone</span>
                    <span className="block font-serif text-2xl font-medium text-ink">{site.phone.display}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="group card card-hover flex items-center gap-4">
                  <span className="icon-tile">
                    <Mail className="size-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-slate">E-mail</span>
                    <span className="block truncate font-semibold text-ink">{site.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <Link href="/secteurs" className="group card card-hover flex items-center gap-4">
                  <span className="icon-tile">
                    <MapPin className="size-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-slate">Zone d'intervention</span>
                    <span className="block font-semibold text-ink">
                      {site.baseCity} et {site.radiusKm} km alentour
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
            <Todo>Adresse du cabinet, horaires d'ouverture et plan d'accès.</Todo>
            <h3 className="mt-10 text-xl">Selon votre besoin</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                { href: actions.callback.href, icon: PhoneCall, label: actions.callback.label, text: 'Trois champs, nous vous appelons.' },
                { href: actions.booking.href, icon: CalendarDays, label: actions.booking.label, text: 'Choisissez votre créneau.' },
                { href: '/audit-gratuit', icon: FileSearch, label: 'Faire relire mes contrats', text: 'Un état des lieux écrit, gratuit.' },
                { href: '/sinistre', icon: Siren, label: 'Déclarer un sinistre', text: 'Les premiers réflexes.' },
              ].map(({ href, icon: Icon, label, text }) => (
                <li key={href}>
                  <Link href={href} className="group flex h-full items-start gap-3 rounded-2xl border border-line p-4 transition-colors hover:border-petrol hover:bg-pearl">
                    <Icon className="mt-0.5 size-5 shrink-0 text-petrol" strokeWidth={1.6} aria-hidden="true" />
                    <span className="text-sm">
                      <span className="block font-semibold text-ink">{label}</span>
                      <span className="block text-slate">{text}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Par écrit</p>
            <h2 className="mb-7 text-3xl sm:text-4xl">Envoyer un message</h2>
            <ContactForm source="contact" />
          </div>
        </div>
      </Section>
      <Section eyebrow="Vos questions" title="Questions fréquentes" muted>
        <FaqList items={faq} />
      </Section>
    </>
  );
}
