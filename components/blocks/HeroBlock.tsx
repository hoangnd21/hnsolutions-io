import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface IHeroBlockProps {
  data: {
    title: string;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
    metadata?: {
      author?: string;
      date?: string;
    };
  };
  translations: Record<string, string>;
}

export function HeroBlock({ data, translations }: IHeroBlockProps) {
  return (
    <Section background="gradient" className="text-white dark:text-[#e5e5e5]">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
          {data.title}
        </h1>
        {data.subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-white/90 dark:text-[#e5e5e5]/90">
            {data.subtitle}
          </p>
        )}
        {data.metadata && (
          <div className="flex items-center justify-center gap-4 text-white/80 mb-8">
            {data.metadata.author && <span>{data.metadata.author}</span>}
            {data.metadata.author && data.metadata.date && <span>•</span>}
            {data.metadata.date && (
              <span>
                {new Date(data.metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
        )}
        {data.ctaText && data.ctaLink && (
          <Link href={data.ctaLink}>
            <Button variant="secondary" size="lg">
              {data.ctaText}
            </Button>
          </Link>
        )}
      </div>
    </Section>
  );
}
