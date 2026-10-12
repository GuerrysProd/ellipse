import Link from 'next/link';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { faqCategories } from '@/content/faq';
import { faqSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Questions fréquentes sur l\'assurance et le cabinet',
  description: "Les réponses courtes aux questions les plus fréquentes : décennale, assurance récolte, prévoyance du dirigeant, assurance-vie, rôle du courtier.",
  path: '/faq',
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(faqCategories.flatMap((category) => category.items))} />
      <PageHero crumbs={[{ name: 'Questions fréquentes', path: '/faq' }]} eyebrow="S'informer" title="Questions fréquentes" intro="Les réponses courtes. Pour les réponses longues, voyez nos guides ou appelez-nous." />
      {faqCategories.map((category, index) => (
        <Section key={category.name} eyebrow={`${String(index + 1).padStart(2, '0')} / ${String(faqCategories.length).padStart(2, '0')}`} title={category.name} muted={index % 2 === 1}>
          <FaqList items={category.items} withSchema={false} />
        </Section>
      ))}
      <Section>
        <p>
          Vous ne trouvez pas votre réponse ?{' '}
          <Link href="/contact" className="link font-semibold">
            Posez-nous la question
          </Link>{' '}
          ou consultez le{' '}
          <Link href="/lexique" className="link font-semibold">
            lexique
          </Link>
          .
        </p>
      </Section>
      <CtaBand source="faq" />
    </>
  );
}
