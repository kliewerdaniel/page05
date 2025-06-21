import { getArtImages } from '../../lib/art';
import ArtGalleryClient from './ArtGalleryClient';

export default async function ArtGalleryPage() {
  const images = await getArtImages();

  return <ArtGalleryClient images={images} />;
}
