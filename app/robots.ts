import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://hnsolutions.io'; // Update with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/cms/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

