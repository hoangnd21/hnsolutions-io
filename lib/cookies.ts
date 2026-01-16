import Cookies from 'js-cookie';
import { Locale } from '@/types';
import { defaultLocale } from '@/i18n/locales';

const LOCALE_COOKIE = 'NEXT_LOCALE';

export function getLocaleCookie(): Locale {
  const locale = Cookies.get(LOCALE_COOKIE);
  return (locale as Locale) || defaultLocale;
}

export function setLocaleCookie(locale: Locale) {
  Cookies.set(LOCALE_COOKIE, locale, { expires: 365 });
}

