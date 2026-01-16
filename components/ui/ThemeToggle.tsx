'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [sliderStyle, setSliderStyle] = useState<React.CSSProperties>({});
  const lightRef = useRef<HTMLButtonElement>(null);
  const darkRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateSlider = () => {
    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    const isLight = currentTheme === 'light';
    
    // Fixed circular buttons, calculate offset based on button width + gap
    const buttonWidth = 32; // 2rem = 32px
    const gap = 4; // 0.25rem = 4px
    const offsetLeft = isLight ? 0 : buttonWidth + gap;
    
    setSliderStyle({
      transform: `translateX(${offsetLeft}px)`,
      width: `${buttonWidth}px`,
    });
  };

  useEffect(() => {
    if (!mounted) return;
    updateSlider();
  }, [theme, resolvedTheme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    // Update slider on window resize
    const handleResize = () => updateSlider();
    window.addEventListener('resize', handleResize);
    
    // Initial update after mount
    const timer = setTimeout(updateSlider, 50);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <div ref={containerRef} className="toggle-container-round relative">
      <div className="toggle-slider-round" style={sliderStyle} />
      
      <button
        ref={lightRef}
        onClick={() => setTheme('light')}
        disabled={currentTheme === 'light'}
        className={`toggle-option-round ${
          currentTheme === 'light' ? 'active' : ''
        }`}
        title={currentTheme === 'light' ? 'Light mode' : 'Switch to light mode'}
        aria-label={currentTheme === 'light' ? 'Light mode' : 'Switch to light mode'}
      >
        <svg
          className="w-4 h-4 toggle-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
      
      <button
        ref={darkRef}
        onClick={() => setTheme('dark')}
        disabled={currentTheme === 'dark'}
        className={`toggle-option-round ${
          currentTheme === 'dark' ? 'active' : ''
        }`}
        title={currentTheme === 'dark' ? 'Dark mode' : 'Switch to dark mode'}
        aria-label={currentTheme === 'dark' ? 'Dark mode' : 'Switch to dark mode'}
      >
        <svg
          className="w-4 h-4 toggle-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  );
}

