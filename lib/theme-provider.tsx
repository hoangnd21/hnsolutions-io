'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';
import { useEffect } from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // Prevent flash by ensuring theme is applied before render
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.add(theme);
    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
    }
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

