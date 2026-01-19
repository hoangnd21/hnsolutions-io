'use client';

import { useState } from 'react';

interface ICopyButtonProps {
  data: unknown;
}

export function CopyButton({ data }: ICopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const jsonString = JSON.stringify(data, null, 2);
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-mono border border-gray-600"
      type="button"
    >
      {copied ? 'Copied!' : 'Copy JSON'}
    </button>
  );
}
