import Image from 'next/image';
import { photoSrc, type Photo as PhotoData } from '@/content/images';

interface Props {
  photo: PhotoData;
  /** Largeurs occupées selon l'écran, pour charger la bonne taille. */
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Image décorative : le texte alternatif est vidé. */
  decorative?: boolean;
}

/** Photographie qui remplit son conteneur. Le conteneur doit être positionné et dimensionné. */
export function Photo({ photo, sizes, className = '', priority = false, decorative = false }: Props) {
  return (
    <Image
      src={photoSrc(photo)}
      alt={decorative ? '' : photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      style={photo.focus ? { objectPosition: photo.focus } : undefined}
    />
  );
}
