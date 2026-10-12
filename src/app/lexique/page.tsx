import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { glossary } from '@/content/glossary';
import { pageMetadata } from '@/lib/seo';
import { initial } from '@/lib/text';

export const metadata = pageMetadata({
  title: "Lexique de l'assurance : les mots expliqués simplement",
  description: "Franchise, quotité, vétusté, clause bénéficiaire, reprise du passé : une quarantaine de termes d'assurance définis en langage courant.",
  path: '/lexique',
});

const collator = new Intl.Collator('fr');
const sorted = [...glossary].sort((a, b) => collator.compare(a.term, b.term));
const letters = [...new Set(sorted.map((entry) => initial(entry.term)))];

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Lexique', path: '/lexique' }]} eyebrow="S'informer" title="Lexique" intro="Les mots de l'assurance, définis en deux phrases.">
        <ul className="flex flex-wrap gap-2">
          {letters.map((letter) => (
            <li key={letter}>
              <a href={`#lettre-${letter}`} className="btn-glass min-h-10 min-w-10 px-3 py-2 text-sm">
                {letter}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>
      <Section>
        <div className="mx-auto grid max-w-3xl gap-12">
          {letters.map((letter) => (
            <div key={letter} id={`lettre-${letter}`} className="scroll-mt-24">
              <h2 className="font-serif text-6xl leading-none text-mist">{letter}</h2>
              <dl className="mt-5 grid gap-3">
                {sorted
                  .filter((entry) => initial(entry.term) === letter)
                  .map((entry) => (
                    <div key={entry.term} className="rounded-2xl border border-line bg-paper px-6 py-4">
                      <dt className="font-semibold text-ink">{entry.term}</dt>
                      <dd className="text-slate">{entry.definition}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand source="lexique" />
    </>
  );
}
