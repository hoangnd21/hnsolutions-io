'use client';

import { Locale } from '@/types';
import { setLocaleCookie, getLocaleCookie } from '@/lib/cookies';
import { useEffect, useState, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import NProgress from 'nprogress';

export function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);
  const [sliderStyle, setSliderStyle] = useState({});
  const router = useRouter();
  const pathname = usePathname();
  const enRef = useRef<HTMLButtonElement>(null);
  const vnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const locale = getLocaleCookie();
    setCurrentLocale(locale);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const isEn = currentLocale === 'en';
    
    // Fixed circular buttons, calculate offset based on button width + gap
    const buttonWidth = 32; // 2rem = 32px
    const gap = 4; // 0.25rem = 4px
    const offsetLeft = isEn ? 0 : buttonWidth + gap;
    
    setSliderStyle({
      transform: `translateX(${offsetLeft}px)`,
      width: `${buttonWidth}px`,
    });
  }, [currentLocale, mounted]);

  const switchLocale = (locale: Locale) => {
    if (locale === currentLocale) return;
    
    // Set the new locale in cookie
    setLocaleCookie(locale);
    setCurrentLocale(locale);
    
    // Update body data-locale for font switching
    document.body.setAttribute('data-locale', locale);
    
    // Dispatch custom event for font switcher
    window.dispatchEvent(new Event('localechange'));
    
    // Start progress bar
    NProgress.start();
    
    // Use router to navigate to current page (triggers re-render with new locale)
    router.refresh();
    
    // Complete progress bar after a short delay
    setTimeout(() => {
      NProgress.done();
    }, 500);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="toggle-container-round relative">
      <div className="toggle-slider-round" style={sliderStyle} />
      
      <button
        ref={enRef}
        onClick={() => switchLocale('en')}
        disabled={currentLocale === 'en'}
        className={`toggle-option-round ${currentLocale === 'en' ? 'active' : ''}`}
        title={currentLocale === 'en' ? 'English' : 'Switch to English'}
        aria-label={currentLocale === 'en' ? 'English' : 'Switch to English'}
      >
        {/* GB Flag */}
        <svg className="w-5 h-5" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
          </clipPath>
          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </svg>
      </button>
      
      <button
        ref={vnRef}
        onClick={() => switchLocale('vn')}
        disabled={currentLocale === 'vn'}
        className={`toggle-option-round ${currentLocale === 'vn' ? 'active' : ''}`}
        title={currentLocale === 'vn' ? 'Tiếng Việt' : 'Switch to Vietnamese'}
        aria-label={currentLocale === 'vn' ? 'Vietnamese' : 'Switch to Vietnamese'}
      >
        {/* Vietnam Flag */}
        <svg className="w-5 h-5" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="20" fill="#DA251D"/>
          <polygon points="15,4 11.47,14.85 20.71,7.15 9.29,7.15 18.53,14.85" fill="#FFFF00"/>
        </svg>
      </button>
    </div>
  );
}

