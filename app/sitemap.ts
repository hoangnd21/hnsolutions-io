import { MetadataRoute } from 'next';
import { sanityFetch } from '@/lib/sanity/fetch';
import { ALL_PAGE_PATHS_QUERY } from '@/lib/sanity/queries';

const IS_PROD = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!IS_PROD) {
    return [];
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'www.hnsolutions.io';

  const pages = await sanityFetch<{ pagePath: string }[]>({
    query: ALL_PAGE_PATHS_QUERY,
    revalidate: 3600,
  });

  return pages.map((page) => ({
    url: `https://${baseUrl}${page.pagePath}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page.pagePath === '/' ? 1 : 0.8,
  }));
}

