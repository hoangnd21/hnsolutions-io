import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { IService } from '@/types';
import Link from 'next/link';

interface IServicesBlockProps {
  data: {
    services: IService[];
    title?: string;
    subtitle?: string;
    layout?: 'grid' | 'list';
  };
  translations: Record<string, string>;
}

export function ServicesBlock({ data, translations }: IServicesBlockProps) {
  const { services, title, subtitle, layout = 'grid' } = data;

  return (
    <Section background="white" data-component="ServicesBlock">
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
      <div
        className={
          layout === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 gap-8'
            : 'space-y-8'
        }
      >
        {services.map((service, index) => (
          <Card
            key={service.id}
            hover
            padding="lg"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              {service.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-6 dark:text-[#a3a3a3]">
              {service.description}
            </p>
            <div className="mb-6">
              <h4 className="font-semibold mb-3 dark:text-white">Key Features:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 dark:text-[#a3a3a3]">
                    <span className="text-primary mt-1 dark:text-primary-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact">
              <Button variant="outline">
                {translations.ctaText || 'Get Started'}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
