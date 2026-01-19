import { IGenericPage, ISanityGenericPage, Locale } from '@/types';
import { sanityFetch } from '@/lib/sanity/fetch';
import { GENERIC_PAGE_BY_PATH_QUERY } from '@/lib/sanity/queries';
import * as mockProvider from './mock';

export function transformGenericPage(raw: ISanityGenericPage): IGenericPage {
  const translations = (raw.generalTranslations?.pairs ?? []).reduce(
    (acc, pair) => ({ ...acc, [pair.key]: pair.value }),
    {} as Record<string, string>
  );

  return {
    _id: raw._id,
    _type: raw._type,
    internalName: raw.internalName,
    pagePath: raw.pagePath,
    seoTitle: raw.seoTitle,
    seoDescription: raw.seoDescription,
    seoImage: raw.seoImage,
    generalTranslations: translations,
    blocks: raw.blocks ?? [],
  };
}

async function getSanityGenericPage(
  pagePath: string,
  locale: Locale = 'en'
): Promise<IGenericPage | null> {
  const normalizedPath = pagePath === '/' || pagePath === '' ? '/' : `/${pagePath.replace(/^\//, '')}`;

  console.log('[Sanity] Getting page:', normalizedPath, '| Locale:', locale);

  try {
    const rawPage = await sanityFetch<ISanityGenericPage | null>({
      query: GENERIC_PAGE_BY_PATH_QUERY,
      params: { pagePath: normalizedPath, locale },
      revalidate: 60,
      tags: ['genericPage'],
    });

    if (!rawPage) {
      console.log('[Sanity] Page not found:', normalizedPath);
      return null;
    }

    console.log('[Sanity] Page found:', rawPage.internalName);
    return transformGenericPage(rawPage);
  } catch (e) {
    console.error('[Sanity] getPageBySlug error:', e);
    return null;
  }
}

export interface IGetGenericPageOptions {
  locale?: Locale;
  useMock?: boolean;
}

export async function getGenericPage(
  pagePath: string,
  options: IGetGenericPageOptions = {}
): Promise<IGenericPage | null> {
  const { locale = 'en', useMock = false } = options;

  console.log('[Content] Source:', useMock ? 'mock' : 'sanity', '| Path:', pagePath, '| Locale:', locale);

  if (useMock) {
    return await mockProvider.getGenericPage(pagePath, locale);
  }

  return await getSanityGenericPage(pagePath, locale);
}
