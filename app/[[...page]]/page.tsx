import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getGenericPage } from '@/lib/api/content-provider';
import { sanityFetch } from '@/lib/sanity/fetch';
import { ALL_PAGE_PATHS_QUERY } from '@/lib/sanity/queries';
import { getLocaleFromCookie } from '@/lib/i18n';
import { BlockRenderer } from '@/components/blocks/BlockRenderer';
import { FooterBlock } from '@/components/blocks/FooterBlock';
import { IFooterBlock } from '@/types';

interface IDynamicPageProps {
  params: Promise<{ page?: string[] }>;
  searchParams: Promise<{ mock?: string; debug?: string }>;
}

async function getPageData(pagePath: string, useMock: boolean = false) {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());
  return await getGenericPage(pagePath, { locale, useMock });
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

  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());
  const page = await getGenericPage(pagePath, { locale, useMock });

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

  const footerBlock = page.blocks?.find(
    (block): block is IFooterBlock => block._type === 'FooterBlock'
  );
  const contentBlocks = page.blocks?.filter(
    (block) => block._type !== 'FooterBlock'
  ) || [];

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__DEBUG_PAGE_DATA__ = ${JSON.stringify(page)};`,
        }}
      />
      <BlockRenderer blocks={contentBlocks} translations={page.generalTranslations} />
      {footerBlock && (
        <FooterBlock data={footerBlock} translations={page.generalTranslations} />
      )}
    </>
  );
}
