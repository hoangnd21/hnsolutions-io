'use client';

import { IButtonProps } from '@/types';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}: IButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
  
  const hasCustomBackground = className?.match(/\b(bg-|gradient-|from-|to-|via-)/);
  
  const variants = {
    primary: hasCustomBackground 
      ? 'text-[var(--color-dark)] focus-visible:outline-primary-500 font-semibold' 
      : 'bg-primary text-[var(--color-dark)] hover:bg-primary-400 focus-visible:outline-primary-500 font-semibold',
    secondary: hasCustomBackground 
      ? 'text-white focus-visible:outline-secondary-500 font-semibold' 
      : 'bg-secondary text-white hover:bg-secondary-400 focus-visible:outline-secondary-500 font-semibold',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-black focus-visible:outline-primary-500',
    ghost: 'text-foreground hover:bg-muted hover:text-primary focus-visible:outline-muted-foreground',
    primaryInvert: 'bg-[var(--color-dark)] border-2 border-primary text-white hover:border-primary-400 focus-visible:outline-primary-500 font-semibold',
    reversePrimary: 'bg-[var(--color-dark)] border-2 border-primary text-primary hover:border-primary-400 focus-visible:outline-primary-500 font-semibold',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    
    ripple.className = 'ripple-effect';
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);

    onClick?.(e);
  };
  
  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}

