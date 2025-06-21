"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ImageData } from '../../lib/art';

type ArtGalleryClientProps = {
  images: ImageData[];
};

export default function ArtGalleryClient({ images }: ArtGalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const openLightbox = (image: ImageData) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8 text-center tracking-widest animate-flicker">Art Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-full h-48 overflow-hidden rounded-lg shadow-md cursor-pointer border border-white/20"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
            transition={{ duration: 0.3 }}
            onClick={() => openLightbox(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                style={{ objectFit: 'contain' }}
                className="rounded-lg shadow-xl"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
              >
                &times;
              </button>
              <p className="text-white text-center mt-4 text-xl">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
