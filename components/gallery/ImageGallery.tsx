'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IImageGalleryProps } from '@/types';

export function ImageGallery({ images }: IImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="block relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
          >
            <Image
              src={image.thumbnail}
              alt={image.alt}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:opacity-70"
            onClick={() => setSelectedIndex(null)}
          >
            ×
          </button>
          <button
            className="absolute left-4 text-white text-4xl hover:opacity-70 disabled:opacity-30"
            disabled={selectedIndex === 0}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(selectedIndex - 1);
            }}
          >
            ‹
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute right-4 text-white text-4xl hover:opacity-70 disabled:opacity-30"
            disabled={selectedIndex === images.length - 1}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(selectedIndex + 1);
            }}
          >
            ›
          </button>
          {images[selectedIndex].title && (
            <p className="absolute bottom-4 text-white text-center w-full">
              {images[selectedIndex].title}
            </p>
          )}
        </div>
      )}
    </>
  );
}

