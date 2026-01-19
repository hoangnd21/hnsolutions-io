import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getGenericPage } from '@/lib/api/content-provider';
import { sanityFetch } from '@/lib/sanity/fetch';
import { ALL_PAGE_PATHS_QUERY } from '@/lib/sanity/queries';
import { BlockRenderer } from '@/components/blocks/BlockRenderer';

interface IDynamicPageProps {
  params: Promise<{ page?: string[] }>;
  searchParams: Promise<{ mock?: string; debug?: string }>;
}

async function getPageData(pagePath: string, useMock: boolean = false) {
  return await getGenericPage(pagePath, { locale: 'en', useMock });
}

export async function generateStaticParams() {
  const pages = await sanityFetch<{ pagePath: string }[]>({
    query: ALL_PAGE_PATHS_QUERY,
    revalidate: false,
  });

  return pages.map((p) => {
    const path = p.pagePath.replace(/^\//, '');
    return {
      page: path === '' ? undefined : path.split('/'),
    };
  });
}

export async function generateMetadata({
  params,
  searchParams,
}: IDynamicPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const pagePath = resolvedParams.page?.join('/') || '';
  const useMock = resolvedSearchParams.mock === 'true';

  const page = await getPageData(pagePath, useMock);

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

export default async function DynamicPage({ params, searchParams }: IDynamicPageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const pagePath = resolvedParams.page?.join('/') || '';
  const useMock = resolvedSearchParams.mock === 'true';
  const showDebug = resolvedSearchParams.debug === 'true';

  const page = await getPageData(pagePath, useMock);

  if (!page) {
    notFound();
  }

  return (
    <>
      {showDebug && (
        <div className="container mx-auto px-4 py-8 border-b border-gray-700">
          <h1 className="text-2xl font-mono text-gray-400 mb-4">Page Data (Debug)</h1>
          <pre className="bg-transparent border border-gray-700 p-6 rounded-lg overflow-auto text-sm text-gray-400 font-mono leading-relaxed max-h-96">
            {JSON.stringify(page, null, 2)}
          </pre>
        </div>
      )}
      <BlockRenderer blocks={page.blocks} translations={page.generalTranslations} />
    </>
  );
}
