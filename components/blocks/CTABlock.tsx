import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface ICTABlockProps {
  data: {
    title: string;
    description?: string;
    buttonText: string;
    buttonLink: string;
  };
  translations: Record<string, string>;
}

export function CTABlock({ data, translations }: ICTABlockProps) {
  const { title, description, buttonText, buttonLink } = data;

  return (
    <Section background="muted">
      <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="text-xl text-muted-foreground mb-8 dark:text-[#a3a3a3]">
            {description}
          </p>
        )}
        <Link href={buttonLink}>
          <Button variant="primary" size="lg">
            {buttonText}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
