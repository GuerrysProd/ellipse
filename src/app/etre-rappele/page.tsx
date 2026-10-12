import { PhoneCall } from 'lucide-react';
import { BulletList } from '@/components/Cards';
import { CallbackForm } from '@/components/forms/CallbackForm';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { actions } from '@/content/navigation';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = pageMetadata({
  title: 'Être rappelé par un courtier',
  description: `Laissez votre numéro : ${site.name} vous rappelle gratuitement, sans engagement, au créneau qui vous convient.`,
  path: '/etre-rappele',
});

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Être rappelé', path: '/etre-rappele' }]} eyebrow="Gratuit et sans engagement" icon={PhoneCall} title="Être rappelé" intro="Trois champs, et nous vous rappelons. C'est gratuit et cela ne vous engage à rien." />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <CallbackForm source="etre-rappele" title="Vos coordonnées" />
          <div className="grid gap-8">
            <div>
              <p className="eyebrow mb-3">Le déroulé</p>
              <h2 className="text-3xl">Comment cela se passe</h2>
              <p className="mt-3">{site.founder.name} vous rappelle aux heures d'ouverture du cabinet. L'appel sert à comprendre votre demande. Si elle est simple, vous avez votre réponse tout de suite.</p>
              <p className="mt-3">Si elle demande une étude, nous convenons d'un rendez-vous, sur place ou en visioconférence.</p>
            </div>
            <div>
              <h2 className="mb-5 text-3xl">Pour quels sujets ?</h2>
              <BulletList items={['Une décennale, une attestation, une échéance qui approche', 'Les assurances de votre domaine ou de votre exploitation', 'Votre prévoyance, votre mutuelle, votre assurance de prêt', 'Votre retraite, votre épargne, votre transmission', 'Un sinistre en cours']} />
            </div>
            <p>
              Vous préférez choisir un créneau ?{' '}
              <Link href={actions.booking.href} className="link font-semibold">
                {actions.booking.label}
              </Link>
              . Ou appelez directement le{' '}
              <a href={`tel:${site.phone.e164}`} className="link font-semibold">
                {site.phone.display}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
