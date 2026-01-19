'use client';

import Link from 'next/link';
import { IDictionary, IHeaderItem } from '@/types';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useMenu } from '@/lib/menu-context';

interface INavigationProps {
  dict: IDictionary;
}

export function Navigation({ dict }: INavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [hoveredDesktopItem, setHoveredDesktopItem] = useState<string | null>(null);
  const { menuItems: cmsMenuItems } = useMenu();

  const defaultNavItems: IHeaderItem[] = [
    { href: '/', text: dict.nav.home },
    { 
      href: '/about',
      text: dict.nav.about,
      childItems: [
        { href: '/about/team', text: 'Our Team' },
        { href: '/about/history', text: 'Our History' }
      ]
    },
    { 
      text: dict.nav.services,
      childItems: [
        { href: '/services/web-development', text: 'Web Development' },
        { href: '/services/mobile-apps', text: 'Mobile Apps' },
        { href: '/services/consulting', text: 'Consulting' }
      ]
    },
    { href: '/portfolio', text: dict.nav.portfolio },
    { href: '/blog', text: dict.nav.blog },
    { href: '/contact', text: dict.nav.contact }
  ];

  const navItems = cmsMenuItems.length > 0 ? cmsMenuItems : defaultNavItems;

  const toggleMobileItem = (text: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(text) 
        ? prev.filter(item => item !== text)
        : [...prev, text]
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const hasChildren = item.childItems && item.childItems.length > 0;
          const isHovered = hoveredDesktopItem === item.text;

          return (
            <div
              key={item.text}
              className="relative"
              onMouseEnter={() => hasChildren && setHoveredDesktopItem(item.text)}
              onMouseLeave={() => hasChildren && setHoveredDesktopItem(null)}
            >
              <div className="flex items-center gap-1">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors font-medium"
                    style={{ color: 'var(--color-header-link)' }}
                  >
                    {item.text}
                  </Link>
                ) : (
                  <span
                    className="font-medium cursor-default hover:text-primary transition-colors"
                    style={{ color: 'var(--color-header-link)' }}
                  >
                    {item.text}
                  </span>
                )}
                {hasChildren && (
                  <button
                    className="p-1 hover:text-primary transition-colors"
                    style={{ color: 'var(--color-header-link)' }}
                    onClick={() => setHoveredDesktopItem(isHovered ? null : item.text)}
                    aria-label={`Toggle ${item.text} menu`}
                  >
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform duration-300 ease-out",
                        isHovered && "rotate-180"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {hasChildren && (
                <div
                  className={cn(
                    "absolute top-full left-0 pt-2 z-50",
                    "transition-all duration-300 ease-out",
                    isHovered
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  )}
                >
                  <div className={cn(
                    "min-w-[200px] rounded-lg shadow-lg py-2 border border-gray-700",
                    "transition-transform duration-300 ease-out origin-top",
                    isHovered
                      ? "scale-y-100 translate-y-0"
                      : "scale-y-95 -translate-y-2"
                  )}>
                    {item.childItems!.map((child) => (
                      <Link
                        key={child.href || child.text}
                        href={child.href || '#'}
                        className="block px-4 py-2 hover:bg-muted hover:text-primary transition-colors font-medium"
                        style={{ color: 'var(--color-header-link)' }}
                      >
                        {child.text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Right Side Controls: Language Switcher & Mobile Menu */}
      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors duration-300"
          style={{ color: 'var(--color-header-link)' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 transition-all duration-300 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 right-0 md:hidden shadow-lg border-b border-gray-700 transition-all duration-500 ease-in-out origin-top ${
        mobileMenuOpen 
          ? 'opacity-100 scale-y-100 pointer-events-auto' 
          : 'opacity-0 scale-y-95 pointer-events-none'
      }`}>
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const hasChildren = item.childItems && item.childItems.length > 0;
              const isExpanded = expandedMobileItems.includes(item.text);

              return (
                <div key={item.text}>
                  <div className="flex items-center justify-between py-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex-1 hover:text-primary transition-colors duration-300 font-medium"
                        style={{ color: 'var(--color-header-link)' }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <span
                        className="flex-1 font-medium"
                        style={{ color: 'var(--color-header-link)' }}
                      >
                        {item.text}
                      </span>
                    )}
                    {hasChildren && (
                      <button
                        className="p-2 hover:text-primary transition-colors duration-300"
                        style={{ color: 'var(--color-header-link)' }}
                        onClick={() => toggleMobileItem(item.text)}
                        aria-label={`Toggle ${item.text} submenu`}
                        aria-expanded={isExpanded}
                      >
                        <svg
                          className={cn(
                            "w-4 h-4 transition-transform duration-500 ease-in-out",
                            isExpanded && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-in-out",
                        isExpanded ? "max-h-96 mt-2" : "max-h-0 mt-0"
                      )}
                    >
                      <div className="flex flex-col gap-1 pl-4 pb-2">
                        {item.childItems!.map((child, index) => (
                          <Link
                            key={child.href || child.text}
                            href={child.href || '#'}
                            className={cn(
                              "py-2 hover:text-primary font-medium",
                              "transition-all duration-500 ease-in-out",
                              isExpanded 
                                ? "opacity-100 translate-x-0" 
                                : "opacity-0 -translate-x-2"
                            )}
                            style={{ 
                              color: 'var(--color-header-link)',
                              transitionDelay: isExpanded ? `${index * 75}ms` : '0ms'
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
      </div>
    </>
  );
}

