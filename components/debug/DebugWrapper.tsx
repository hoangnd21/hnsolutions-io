'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DebugSection } from './DebugSection';

export function DebugWrapper() {
  const searchParams = useSearchParams();
  const [pageData, setPageData] = useState<unknown>(null);
  const showDebug = searchParams.get('debug') === 'true';

  useEffect(() => {
    if (!showDebug) {
      setPageData(null);
      return;
    }

    const checkForPageData = () => {
      if (typeof window !== 'undefined' && (window as any).__DEBUG_PAGE_DATA__) {
        setPageData((window as any).__DEBUG_PAGE_DATA__);
      }
    };

    checkForPageData();
    const interval = setInterval(checkForPageData, 100);
    
    return () => clearInterval(interval);
  }, [showDebug]);

  if (!showDebug) {
    return null;
  }

  return <DebugSection data={pageData} />;
}
