'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CopyButton } from './CopyButton';

interface IDebugSectionProps {
  data?: unknown;
}

export function DebugSection({ data }: IDebugSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pageData, setPageData] = useState<unknown>(data || null);
  const searchParams = useSearchParams();
  const showDebug = searchParams.get('debug') === 'true';

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  if (!showDebug) {
    return null;
  }

  if (!isExpanded) {
    return (
      <button
        onClick={() => {
          setIsExpanded(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="fixed top-4 right-4 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-mono border border-gray-600 shadow-lg"
        style={{ zIndex: 9999 }}
        type="button"
      >
        Expand page data
      </button>
    );
  }

  if (!pageData) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 border-b border-gray-700 bg-[var(--color-dark)]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-mono text-gray-400">Page Data (Debug)</h1>
          <button
            onClick={() => setIsExpanded(false)}
            className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-mono border border-gray-600"
            type="button"
          >
            Collapse
          </button>
        </div>
        <CopyButton data={pageData} />
      </div>
      <pre className="bg-transparent border border-gray-700 p-6 rounded-lg overflow-auto text-sm text-gray-400 font-mono leading-relaxed max-h-96">
        {JSON.stringify(pageData, null, 2)}
      </pre>
    </div>
  );
}
