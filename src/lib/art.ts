'use server';

import fs from 'fs';
import path from 'path';

const artDirectory = path.join(process.cwd(), 'public', 'art');

export type ImageData = {
  src: string;
  alt: string;
};

export async function getArtImages() {
  const fileNames = fs.readdirSync(artDirectory);

  const images: ImageData[] = fileNames
    .filter((fileName) => /\.(jpg|jpeg|png|gif)$/i.test(fileName))
    .map((fileName) => {
      return {
        src: `/art/${fileName}`,
        alt: path.parse(fileName).name.replace(/[-_]/g, ' '), // Basic alt text from filename
      };
    });

  return images;
}
