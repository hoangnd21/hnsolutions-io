import { MetadataRoute } from 'next';

const IS_PROD = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';

export default function robots(): MetadataRoute.Robots {
  if (!IS_PROD) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'www.hnsolutions.io';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/cms/'],
    },
    sitemap: `https://${baseUrl}/sitemap.xml`,
  };
}

