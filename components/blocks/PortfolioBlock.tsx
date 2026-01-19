import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { IPortfolioItem } from '@/types';
import Link from 'next/link';

interface IPortfolioBlockProps {
  data: {
    items: IPortfolioItem[];
  };
  translations: Record<string, string>;
}

export function PortfolioBlock({ data, translations }: IPortfolioBlockProps) {
  const { items } = data;

  return (
    <Section background="white" data-component="PortfolioBlock">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card
            key={item.id}
            hover
            className="overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-full h-48 bg-muted dark:bg-[#1a1a1a] mb-4 -mx-6 -mt-6" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              {item.title}
            </h3>
            <p className="text-muted-foreground mb-4 dark:text-[#a3a3a3]">
              {item.description}
            </p>
            <div className="mb-4">
              <p className="text-sm font-semibold dark:text-white">Client:</p>
              <p className="text-sm text-muted-foreground dark:text-[#a3a3a3]">
                {item.client}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-primary/10 text-primary dark:bg-primary-500/20 dark:text-primary-500 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={`/portfolio#${item.slug}`}
              className="text-primary hover:text-primary-400 dark:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium"
            >
              {translations.viewDetails || 'View Details'} →
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
