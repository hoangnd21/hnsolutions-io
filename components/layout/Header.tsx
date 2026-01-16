import { IDictionary } from '@/types';
import { Navigation } from './Navigation';
import Link from 'next/link';

interface HeaderProps {
  dict: IDictionary;
}

export function Header({ dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-dark)] border-b border-gray-700">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl transition-colors" style={{ color: 'var(--color-header-link)' }}>HNSolutions</span>
        </Link>

        {/* Navigation */}
        <Navigation dict={dict} />
      </div>
    </header>
  );
}

