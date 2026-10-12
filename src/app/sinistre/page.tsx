import { ArrowRight, Phone, Siren } from 'lucide-react';
import Link from 'next/link';
import { BulletList, InfoGrid } from '@/components/Cards';
import { ContactForm } from '@/components/forms/ContactForm';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { guidePath } from '@/content/guides';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'En cas de sinistre : les premiers réflexes',
  description: `Sinistre sur un chantier, au domaine ou dans vos locaux : ce qu'il faut faire dans les premières heures, et comment joindre ${site.name}.`,
  path: '/sinistre',
});

const steps = [
  { name: 'Mettre en sécurité', text: "Les personnes d'abord. Puis couper l'eau ou l'électricité, bâcher, éloigner ce qui peut l'être." },
  { name: 'Garder les preuves', text: "Photos, vidéos, factures, coordonnées des témoins. Ne rien jeter avant le passage de l'expert." },
  { name: 'Nous appeler', text: 'Même sans tous les éléments. Nous vous aidons à déclarer dans les délais prévus au contrat.' },
  { name: "Suivre l'expertise", text: "Nous préparons le rendez-vous avec vous, vérifions l'application du contrat et intervenons en cas de désaccord." },
];

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: 'En cas de sinistre', path: '/sinistre' }]} eyebrow="Urgence" icon={Siren} title="Un sinistre ? Les premiers réflexes" intro="Un sinistre se gagne ou se perd dans les premières heures. Voici quoi faire, et nous sommes joignables pour le faire avec vous.">
        <a href={`tel:${site.phone.e164}`} className="btn-light">
          <Phone className="size-4.5" aria-hidden="true" />
          Appeler le {site.phone.display}
        </a>
      </PageHero>
      <Section eyebrow="Les premières heures" title="Dans l'ordre">
        <InfoGrid items={steps} numbered />
        <p className="mt-6">
          <Link href={guidePath('declarer-un-sinistre')} className="link-arrow">
            Lire le guide complet
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </p>
      </Section>
      <Section eyebrow="Trois erreurs" title="À ne pas faire" muted>
        <BulletList items={["Reconnaître sa responsabilité par écrit auprès d'un tiers", "Engager des réparations définitives sans accord de l'assureur", 'Laisser passer le délai de déclaration, très court en cas de vol']} />
      </Section>
      <Section eyebrow="Par écrit" title="Nous prévenir">
        <div className="max-w-3xl">
          <ContactForm source="sinistre" defaultSubject="Sinistre en cours" />
        </div>
      </Section>
    </>
  );
}
