'use client';

import dynamic from 'next/dynamic';

const DebugWrapper = dynamic(
  () => import('./DebugWrapper').then((mod) => ({ default: mod.DebugWrapper })),
  {
    ssr: false,
  }
);

export function DebugWrapperDynamic() {
  return <DebugWrapper />;
}
