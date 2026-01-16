import { IButtonProps } from '@/types';
import { cn } from '@/lib/utils';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}: IButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const hasCustomBackground = className?.match(/\b(bg-|gradient-|from-|to-|via-)/);
  
  const variants = {
    primary: hasCustomBackground 
      ? 'text-black focus-visible:outline-primary-500 font-semibold' 
      : 'bg-primary text-black hover:bg-primary-400 focus-visible:outline-primary-500 font-semibold',
    secondary: hasCustomBackground 
      ? 'text-white focus-visible:outline-secondary-500 font-semibold' 
      : 'bg-secondary text-white hover:bg-secondary-400 focus-visible:outline-secondary-500 font-semibold',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-black focus-visible:outline-primary-500',
    ghost: 'text-foreground hover:bg-muted hover:text-primary focus-visible:outline-muted-foreground',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}

