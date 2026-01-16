'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

// Configure NProgress
NProgress.configure({ 
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
  easing: 'ease',
  speed: 500,
});

export function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Complete progress bar when route changes
    NProgress.done();
  }, [pathname, searchParams]);

  useEffect(() => {
    // Function to check if a link is internal
    const isInternalLink = (url: string) => {
      try {
        const link = new URL(url, window.location.origin);
        return link.origin === window.location.origin;
      } catch {
        return url.startsWith('/');
      }
    };

    // Handle clicks on all links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        
        // Start progress if it's an internal link and not the current page
        if (href && isInternalLink(href) && href !== pathname) {
          // Check if it's not opening in a new tab
          const isNewTab = anchor.target === '_blank' || 
                          e.ctrlKey || 
                          e.metaKey || 
                          e.shiftKey ||
                          e.button !== 0;
          
          if (!isNewTab) {
            NProgress.start();
          }
        }
      }
    };

    // Add click listener to document
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return null;
}

