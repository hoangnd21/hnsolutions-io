import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { IHeroBlock } from '@/types';
import Link from 'next/link';
import { resolveLink } from '@/lib/utils';

interface IHeroBlockProps {
  data: IHeroBlock;
  translations: Record<string, string>;
}

export function HeroBlock({ data, translations }: IHeroBlockProps) {
  const { title, subtitle, ctaText, ctaLink, metadata, backgroundImage } = data;

  const backgroundImageUrl = typeof backgroundImage === 'string' 
    ? backgroundImage 
    : backgroundImage?.url;

  const sectionStyle = backgroundImageUrl
    ? {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : undefined;

  const ctaHref = ctaLink ? resolveLink(ctaLink) : undefined;

  return (
    <Section 
      background="gradient" 
      className="text-white dark:text-[#e5e5e5] relative overflow-hidden flex items-center justify-center"
      data-component="HeroBlock"
      style={{ 
        minHeight: '700px',
        ...(sectionStyle || {})
      }}
    >
      {sectionStyle && (
        <div 
          className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 -z-10 pointer-events-none" 
          style={sectionStyle}
        />
      )}
      <div 
        className="max-w-4xl mx-auto text-center relative z-10 w-full" 
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-white/90 dark:text-[#e5e5e5]/90">
            {subtitle}
          </p>
        )}
        {metadata && (
          <div className="flex items-center justify-center gap-4 text-white/80 mb-8">
            {metadata.author && <span>{metadata.author}</span>}
            {metadata.author && metadata.date && <span>•</span>}
            {metadata.date && (
              <span>
                {new Date(metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
        )}
        {ctaText && ctaHref && (
          <Link href={ctaHref}>
            <Button variant="secondary" size="lg">
              {ctaText}
            </Button>
          </Link>
        )}
      </div>
    </Section>
  );
}
