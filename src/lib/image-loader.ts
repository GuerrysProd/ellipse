interface LoaderInput {
  src: string;
  width: number;
  quality?: number;
}

/** Les photographies Unsplash sont redimensionnées par leur CDN ; les fichiers locaux sont servis tels quels. */
export default function imageLoader({ src, width, quality }: LoaderInput): string {
  if (src.startsWith('https://images.unsplash.com/')) return `${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 70}`;
  return `${src}?w=${width}`;
}
