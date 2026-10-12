import { FileSearch } from 'lucide-react';
import { BulletList, InfoGrid } from '@/components/Cards';
import { FaqList } from '@/components/FaqList';
import { ContactForm } from '@/components/forms/ContactForm';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { TrustStrip } from '@/components/TrustStrip';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Audit gratuit de vos contrats d'assurance",
  description: "Faites relire gratuitement vos contrats d'assurance professionnels et personnels : garanties, exclusions, doublons, tarifs. Un état des lieux écrit, sans engagement.",
  path: '/audit-gratuit',
});

const steps = [
  { name: 'Vous nous transmettez vos contrats', text: 'Conditions particulières et dernières échéances suffisent.' },
  { name: 'Nous les relisons', text: 'Garanties, plafonds, franchises, exclusions, activités déclarées, cotisations.' },
  { name: 'Vous recevez un état des lieux', text: "Ce qui convient, ce qui manque, ce qui fait doublon. Par écrit, qu'il y ait ou non quelque chose à changer." },
];

const faq = [
  { q: "L'audit est-il vraiment gratuit ?", a: 'Oui, et il ne vous engage à rien.' },
  { q: 'Dois-je changer d\'assureur ensuite ?', a: 'Non. Si vos contrats conviennent, nous vous le disons.' },
  { q: 'Mes documents restent-ils confidentiels ?', a: "Oui. Ils servent uniquement à l'audit et ne sont transmis à aucun assureur sans votre accord." },
];

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Audit gratuit', path: '/audit-gratuit' }]} eyebrow="Gratuit et sans engagement" icon={FileSearch} title="Faites relire vos contrats" intro="La plupart des contrats ont été signés il y a des années et jamais relus depuis. Nous les reprenons un par un et vous disons, par écrit, où vous en êtes." />
      <TrustStrip />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Première étape</p>
            <h2 className="text-3xl sm:text-4xl">Demander mon audit</h2>
            <p className="mt-3 text-slate">Nous vous rappelons pour convenir de la façon de nous transmettre vos documents.</p>
            <div className="mt-6">
              <ContactForm source="audit-gratuit" variant="audit" />
            </div>
          </div>
          <div className="grid gap-8">
            <div>
              <h2 className="mb-5 text-3xl">Ce que nous vérifions</h2>
              <BulletList
                items={[
                  'Les activités déclarées correspondent-elles à ce que vous faites ?',
                  'Les montants assurés sont-ils à jour ?',
                  'Y a-t-il des doublons entre contrats ?',
                  'Quelles exclusions vous concernent réellement ?',
                  'Payez-vous le prix du marché ?',
                ]}
              />
            </div>
            <div className="rounded-3xl border border-line bg-pearl p-7">
              <h2 className="mb-3 text-2xl">Ce que l'audit ne couvre pas</h2>
              <p>Il porte sur vos contrats d'assurance. Il ne constitue ni un conseil fiscal, ni un conseil juridique, ni un conseil en investissement.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section eyebrow="Le déroulé" title="Trois étapes" muted>
        <InfoGrid items={steps} numbered />
      </Section>
      <Section eyebrow="Vos questions" title="Questions fréquentes">
        <FaqList items={faq} />
      </Section>
    </>
  );
}
