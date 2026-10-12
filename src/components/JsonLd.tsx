import type { JsonLdData } from '@/lib/schema';

/** « < » est échappé pour qu'aucune valeur ne puisse refermer la balise script. */
export function JsonLd({ data }: { data: JsonLdData }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll('<', '\\u003c') }} />;
}
