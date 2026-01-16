'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { IImageGalleryProps } from '@/types';

export function ImageGallery({ images }: IImageGalleryProps) {
  useEffect(() => {
    // Initialize Lightbox2
    if (typeof window !== 'undefined') {
      const lightbox = require('lightbox2');
      lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
        albumLabel: '%1 of %2',
      });
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <a
          key={index}
          href={image.src}
          data-lightbox="gallery"
          data-title={image.title || image.alt}
          className="block relative aspect-square overflow-hidden rounded-lg group"
        >
          <Image
            src={image.thumbnail}
            alt={image.alt}
            fill
            className="object-cover transition-transform group-hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
}

