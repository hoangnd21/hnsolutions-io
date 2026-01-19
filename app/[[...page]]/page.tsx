import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getGenericPage } from '@/lib/api/content-provider';
import { getLocaleFromCookie } from '@/lib/i18n';
import { cookies } from 'next/headers';

interface IDynamicPageProps {
  params: Promise<{ page?: string[] }>;
}

async function getPageData(pagePath: string, locale: string) {
  return await getGenericPage(pagePath, locale as 'en' | 'vn');
}

export async function generateMetadata({
  params,
}: IDynamicPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const pagePath = resolvedParams.page?.join('/') || '';
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());

  const page = await getPageData(pagePath, locale);

  if (!page) {
    return {
      title: 'Page Not Found - HNSolutions',
    };
  }

  return {
    title: page.seoTitle || 'HNSolutions',
    description: page.seoDescription,
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      images: page.seoImage ? [page.seoImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.seoTitle,
      description: page.seoDescription,
      images: page.seoImage ? [page.seoImage] : undefined,
    },
  };
}

export default async function DynamicPage({ params }: IDynamicPageProps) {
  const resolvedParams = await params;
  const pagePath = resolvedParams.page?.join('/') || '';
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());

  const page = await getPageData(pagePath, locale);

  if (!page) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-mono text-gray-400 mb-4">Page Data (Debug)</h1>
      <pre className="bg-transparent border border-gray-700 p-6 rounded-lg overflow-auto text-sm text-gray-400 font-mono leading-relaxed">
        {JSON.stringify(page, null, 2)}
      </pre>
    </div>
  );
}
