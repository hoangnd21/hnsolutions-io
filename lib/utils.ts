import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ILinkObject } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolveLink(
  link: ILinkObject | string | undefined
): string | undefined {
  if (!link) {
    return undefined;
  }

  if (typeof link === 'string') {
    return link;
  }

  if (link.linkType === 'url' && link.url) {
    return link.url;
  }

  if (link.linkType === 'page') {
    if (typeof link.page === 'object' && 'pagePath' in link.page) {
      return link.page.pagePath;
    }
  }

  if (link.url) {
    return link.url;
  }

  if (typeof link.page === 'object' && 'pagePath' in link.page) {
    return link.page.pagePath;
  }

  return undefined;
}
