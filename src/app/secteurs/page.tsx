import { Actions } from '@/components/Actions';
import { PhotoCardGrid } from '@/components/Cards';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { photos, sectorPhotos } from '@/content/images';
import { sectorPath, sectors } from '@/content/sectors';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Zones d'intervention autour de ${site.baseCity}`,
  description: `Le cabinet intervient à ${site.baseCity} et dans un rayon de ${site.radiusKm} km : Beaune, Dijon, Mâcon, Le Creusot, Autun, Louhans, Charolais, Jura.`,
  path: '/secteurs',
});

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Zones d'intervention", path: '/secteurs' }]}
        eyebrow="Près de chez vous"
        title={`${site.baseCity} et ${site.radiusKm} km alentour`}
        intro="Le cabinet se déplace sur les chantiers, dans les domaines et dans les entreprises. Les rendez-vous peuvent aussi se tenir en visioconférence."
        photo={photos.chalonQuais}
      >
        <Actions onDark />
      </PageHero>
      <Section eyebrow="Douze secteurs" title="Où nous intervenons">
        <PhotoCardGrid columns={4} items={sectors.map((sector) => ({ href: sectorPath(sector.slug), title: sector.name, tag: sector.department, photo: photos[sectorPhotos[sector.slug]] }))} />
      </Section>
      <CtaBand source="secteurs" />
    </>
  );
}
