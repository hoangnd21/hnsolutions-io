import { Section } from '@/components/ui/Section';
import { ImageGallery } from '@/components/gallery/ImageGallery';

interface IImageGalleryBlockProps {
  data: {
    images: {
      src: string;
      thumbnail: string;
      alt: string;
      title?: string;
    }[];
    title?: string;
  };
}

export function ImageGalleryBlock({ data }: IImageGalleryBlockProps) {
  const { images, title } = data;

  return (
    <Section background="white" data-component="ImageGalleryBlock">
      {title && (
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            {title}
          </h2>
        </div>
      )}
      <div data-aos="fade-up">
        <ImageGallery images={images} />
      </div>
    </Section>
  );
}
