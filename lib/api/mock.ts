import { IGenericPage, Locale } from '@/types';

// =============================================================================
// MOCK PAGE DATA - Paste raw Sanity JSON here
// =============================================================================

const MOCK_PAGE: IGenericPage = {
  _id: '03b6f999-a2f2-4ee6-a621-9e23f7a6a124',
  _type: 'genericPage',
  internalName: 'HomePage',
  pagePath: '/',
  seoTitle: 'HN Solutions - Your digital partner',
  seoDescription: 'HN Solutions - Your digital partner',
  generalTranslations: {
    welcome: 'Welcome',
    contactUsText: 'Contact Us',
  },
  blocks: [],
};

// =============================================================================
// MOCK PROVIDER
// =============================================================================

export async function getGenericPage(
  pagePath: string,
  _locale: Locale = 'en'
): Promise<IGenericPage | null> {
  const normalizedPath = pagePath === '' ? '/' : `/${pagePath.replace(/^\//, '')}`;
  const mockPath = MOCK_PAGE.pagePath === '' ? '/' : MOCK_PAGE.pagePath;

  console.log('[Mock] Requested:', normalizedPath, '| Mock pagePath:', mockPath);

  if (normalizedPath === mockPath) {
    console.log('[Mock] Match found:', MOCK_PAGE.internalName);
    return MOCK_PAGE;
  }

  console.log('[Mock] No match - returning null');
  return null;
}
