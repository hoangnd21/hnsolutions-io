import { ISectionProps } from '@/types';
import { cn } from '@/lib/utils';

export function Section({
  children,
  className,
  id,
  background = 'white',
  aos,
  aosDelay,
}: ISectionProps) {
  const backgrounds = {
    white: 'bg-background dark:bg-[var(--color-dark)]',
    muted: 'bg-muted dark:bg-[var(--color-dark)]',
    gradient: 'gradient-hero',
  };
  
  return (
    <section
      id={id}
      data-aos={aos}
      data-aos-delay={aosDelay}
      className={cn('py-16 md:py-24', backgrounds[background], className)}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}

