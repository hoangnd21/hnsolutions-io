import { Locale, IDictionary } from '@/types';
import { defaultLocale } from '@/i18n/locales';

const dictionaries = {
  en: () => import('@/i18n/dictionaries/en.json').then((module) => module.default),
  vn: () => import('@/i18n/dictionaries/vn.json').then((module) => module.default),
};

export async function getDictionary(locale: Locale = defaultLocale): Promise<IDictionary> {
  return dictionaries[locale]();
}

export function getLocaleFromCookie(cookieString?: string): Locale {
  if (!cookieString) return defaultLocale;
  
  const cookies = cookieString.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
  
  const locale = cookies['NEXT_LOCALE'];
  return (locale as Locale) || defaultLocale;
}

