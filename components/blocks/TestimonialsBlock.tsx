import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { SwiperCarousel } from '@/components/carousel/SwiperCarousel';
import { ITestimonial } from '@/types';

interface ITestimonialsBlockProps {
  data: {
    testimonials: ITestimonial[];
    title?: string;
    subtitle?: string;
  };
  translations: Record<string, string>;
}

export function TestimonialsBlock({
  data,
  translations,
}: ITestimonialsBlockProps) {
  const { testimonials, title, subtitle } = data;

  const testimonialSlides = testimonials.map((testimonial) => (
    <Card key={testimonial.id} className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 dark:text-yellow-500">
              ★
            </span>
          ))}
        </div>
        <p className="text-lg mb-6 flex-1 italic dark:text-gray-400">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div>
          <p className="font-semibold dark:text-white">{testimonial.clientName}</p>
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            {testimonial.company}
          </p>
        </div>
      </div>
    </Card>
  ));

  return (
    <Section background="muted">
      {title && (
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground dark:text-[#a3a3a3]">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div data-aos="fade-up">
        <SwiperCarousel
          items={testimonialSlides}
          slidesPerView={1}
          spaceBetween={24}
          autoplay
          navigation
          pagination
        />
      </div>
    </Section>
  );
}
