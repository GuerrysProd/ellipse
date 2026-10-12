import { CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { BookingEmbed } from '@/components/BookingEmbed';
import { BulletList, InfoGrid } from '@/components/Cards';
import { FaqList } from '@/components/FaqList';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { actions } from '@/content/navigation';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Prendre rendez-vous avec un courtier',
  description: `Choisissez un créneau avec ${site.founder.name} : au cabinet, chez vous ou en visioconférence. Premier rendez-vous gratuit et sans engagement.`,
  path: '/rendez-vous',
});

const formats = [
  { name: 'Sur place', text: `Au cabinet, sur votre chantier, au domaine ou dans vos locaux, dans un rayon d'environ ${site.radiusKm} km.` },
  { name: 'En visioconférence', text: 'Depuis votre bureau ou votre domicile. Vous recevez le lien avec la confirmation.' },
  { name: 'Par téléphone', text: 'Pour un premier échange ou une question précise.' },
];

const faq = [
  { q: 'Le rendez-vous est-il payant ?', a: 'Non. Le premier rendez-vous est gratuit et sans engagement.' },
  { q: 'Combien de temps dure-t-il ?', a: "Environ trois quarts d'heure pour un premier échange." },
  { q: 'Puis-je déplacer ou annuler mon créneau ?', a: "Oui, à partir du message de confirmation, ou par téléphone." },
];

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Prendre rendez-vous', path: '/rendez-vous' }]} eyebrow="Premier rendez-vous gratuit" icon={CalendarDays} title="Prendre rendez-vous" intro={`Choisissez le créneau qui vous convient pour échanger avec ${site.founder.name}.`} />
      <Section>
        <div className="max-w-3xl">
          <BookingEmbed />
          <p className="mt-6">
            Vous préférez être rappelé ?{' '}
            <Link href={actions.callback.href} className="link font-semibold">
              Laissez-nous votre numéro
            </Link>
            .
          </p>
        </div>
      </Section>
      <Section eyebrow="Comme vous préférez" title="Trois façons de se rencontrer" muted>
        <InfoGrid items={formats} numbered />
      </Section>
      <Section eyebrow="Avant de venir" title="Ce qu'il est utile de préparer">
        <BulletList items={['Vos contrats en cours et leurs dernières échéances', 'Pour une entreprise : Kbis, dernier bilan, attestations en vigueur', 'Pour un sujet d\'épargne ou de retraite : dernier avis d\'imposition, relevés de contrats, relevé de carrière', 'La liste de vos questions']} />
      </Section>
      <Section eyebrow="Vos questions" title="Questions fréquentes" muted>
        <FaqList items={faq} />
      </Section>
    </>
  );
}
