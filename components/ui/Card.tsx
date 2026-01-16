import { ICardProps } from '@/types';
import { cn } from '@/lib/utils';

export function Card({
  children,
  className,
  hover = false,
  padding = 'md',
}: ICardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hasCustomBackground = className?.match(/\b(bg-|gradient-|from-|to-|via-)/);
  
  const baseCardStyles = hasCustomBackground
    ? 'rounded-lg border border-gray-700'
    : 'rounded-lg bg-[var(--color-dark)] border border-gray-700';
  
  return (
    <div
      className={cn(
        baseCardStyles,
        paddingStyles[padding],
        hover && 'transition-all hover:shadow-2xl hover:-translate-y-2 dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]',
        className
      )}
    >
      {children}
    </div>
  );
}

