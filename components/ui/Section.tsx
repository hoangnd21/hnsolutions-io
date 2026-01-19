import { ISectionProps } from '@/types';
import { cn } from '@/lib/utils';

interface ISectionComponentProps extends ISectionProps {
  'data-component'?: string;
  style?: React.CSSProperties;
}

export function Section({
  children,
  className,
  id,
  background = 'white',
  aos,
  aosDelay,
  'data-component': dataComponent,
  style,
}: ISectionComponentProps) {
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
      data-component={dataComponent}
      className={cn('py-16 md:py-24', backgrounds[background], className)}
      style={style}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}

