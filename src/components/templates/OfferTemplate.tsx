import { BadgeCheck } from 'lucide-react';
import type { CSSProperties } from 'react';
import { Actions } from '@/components/Actions';
import { BulletList, CardGrid, InfoGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { CallbackForm } from '@/components/forms/CallbackForm';
import { offerIcons } from '@/components/icons';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { offerPhoto } from '@/content/images';
import { offerPath, universes } from '@/content/offers';
import { creditNotices } from '@/content/offers/financer';
import { simulatorPath } from '@/content/simulators';
import { site } from '@/content/site';
import type { Offer } from '@/content/types';
import { guideCardsFor, offerCards, simulatorCards } from '@/lib/links';
import { serviceSchema } from '@/lib/schema';

/** Gabarit unique des pages d'offre, pour les deux univers. */
export function OfferTemplate({ offer }: { offer: Offer }) {
  const universe = universes[offer.universe];
  const path = offerPath(offer);
  const simulate = offer.simulator ? { href: simulatorPath(offer.simulator), label: 'Simuler ma situation' } : undefined;
  const further = [...(offer.simulator ? simulatorCards([offer.simulator]) : []), ...offerCards(offer.related), ...guideCardsFor(`${offer.universe}/${offer.slug}`)];

  return (
    <>
      <JsonLd data={serviceSchema({ name: offer.h1, description: offer.description, path })} />
      <PageHero
        crumbs={[
          { name: universe.name, path: universe.path },
          { name: offer.name, path },
        ]}
        eyebrow={offer.mandatory ? `${offer.group} · assurance obligatoire` : offer.group}
        icon={offerIcons[offer.slug]}
        title={offer.h1}
        intro={offer.intro}
        photo={offerPhoto(offer.slug, offer.group)}
      >
        <Actions simulate={simulate} onDark />
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16">
          <div data-reveal>
            <p className="eyebrow mb-4">Pour qui</p>
            <h2 className="text-3xl sm:text-4xl">{universe.labels.audience}</h2>
            <div className="mt-7">
              <BulletList items={offer.audience} />
            </div>

            <div className="mt-12 rounded-3xl border border-line bg-pearl p-7 sm:p-9">
              <p className="eyebrow mb-3">Notre rôle</p>
              <h2 className="text-2xl sm:text-3xl">Ce que fait le cabinet</h2>
              <p className="mt-4">{offer.role}</p>
              <p className="mt-5 flex items-start gap-3 text-sm text-slate">
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-petrol" strokeWidth={1.6} aria-hidden="true" />
                <span>
                  {offer.universe === 'financer'
                    ? `${site.name} est immatriculé à l'ORIAS sous le n° ${site.legal.orias}. La décision d'accorder un prêt appartient à l'établissement prêteur.`
                    : `${site.name} est ${site.legal.oriasCategory}, immatriculé à l'ORIAS sous le n° ${site.legal.orias}, et compare plus de ${site.insurersCount} compagnies.`}
                </span>
              </p>
            </div>
          </div>
          <div data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="lg:sticky lg:top-28">
            <CallbackForm source={`offre:${offer.slug}`} title="Une question ? Nous vous rappelons" />
          </div>
        </div>
      </Section>

      <Section eyebrow={universe.labels.coversEyebrow} title={universe.labels.covers} muted>
        <InfoGrid items={offer.covers} />
      </Section>

      <Section eyebrow="Avant de signer" title="Les points à vérifier" intro="Les questions que nous posons systématiquement à la lecture d'un contrat.">
        <ol className="grid gap-5 lg:grid-cols-3">
          {offer.checks.map((check, index) => (
            <li key={check} data-reveal style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties} className="card">
              <span className="block font-serif text-5xl leading-none text-mist">{String(index + 1).padStart(2, '0')}</span>
              <p className="mt-4 font-medium text-ink">{check}</p>
            </li>
          ))}
        </ol>
      </Section>

      {further.length > 0 && (
        <Section eyebrow="Aller plus loin" title="Simulateur et solutions voisines" muted>
          <CardGrid items={further} />
        </Section>
      )}

      <Section eyebrow="Vos questions" title="Questions fréquentes">
        <FaqList items={offer.faq} />
        {offer.universe === 'financer' && (
          <div className="mt-8 max-w-3xl rounded-2xl border border-line bg-pearl p-6 text-sm leading-relaxed text-slate">
            {creditNotices(offer.slug).map((notice) => (
              <p key={notice} className="mt-2 first:mt-0 first:font-semibold first:text-ink">
                {notice}
              </p>
            ))}
          </div>
        )}
        {offer.universe === 'preparer' && (
          <p className="mt-8 max-w-3xl text-[0.82rem] leading-relaxed text-slate">
            Le cabinet intervient en qualité de courtier en assurance. Il n'est pas conseiller en investissements financiers et ne délivre ni conseil fiscal ni conseil juridique. Aucun rendement n'est garanti ;
            les supports en unités de compte présentent un risque de perte en capital.
          </p>
        )}
      </Section>

      <CtaBand source={`offre:${offer.slug}:fin`} simulate={simulate} />
    </>
  );
}
