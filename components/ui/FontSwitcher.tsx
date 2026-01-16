'use client';

import { useEffect } from 'react';
import { getLocaleCookie } from '@/lib/cookies';

export function FontSwitcher() {
  useEffect(() => {
    const updateFont = () => {
      const locale = getLocaleCookie();
      document.body.setAttribute('data-locale', locale);
    };

    // Update on mount
    updateFont();

    // Listen for locale changes
    const handleLocaleChange = () => {
      setTimeout(updateFont, 0);
    };

    window.addEventListener('localechange', handleLocaleChange);
    
    // Also check periodically (fallback)
    const interval = setInterval(updateFont, 1000);

    return () => {
      window.removeEventListener('localechange', handleLocaleChange);
      clearInterval(interval);
    };
  }, []);

  return null;
}

