import { ICalloutBlock } from '@/types';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { resolveLink } from '@/lib/utils';

interface ICalloutBlockProps {
  data: ICalloutBlock;
  translations: Record<string, string>;
}

export function CalloutBlock({ data, translations }: ICalloutBlockProps) {
  const { headline, description, buttons, backgroundGradient } = data;

  const gradientClass = backgroundGradient 
    ? `bg-gradient-to-b ${backgroundGradient}`
    : 'bg-gradient-to-b from-primary-400 to-primary-700';

  return (
    <div className="container py-12" data-component="CalloutBlock">
      <div className={`${gradientClass} rounded-2xl p-8 md:p-12 text-center`}>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          {headline}
        </h2>
        {description && (
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {buttons.map((button) => {
              const href = resolveLink(button.href);
              if (!href) return null;
              
              const isExternal = href.startsWith('http');
              
              const buttonElement = (
                <Button
                  variant={button.variant || 'primary'}
                  size="lg"
                >
                  {button.text}
                </Button>
              );

              if (isExternal) {
                return (
                  <a
                    key={button._key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {buttonElement}
                  </a>
                );
              }

              return (
                <Link key={button._key} href={href}>
                  {buttonElement}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
