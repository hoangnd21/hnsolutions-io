import { NextRequest, NextResponse } from 'next/server';
import { getGenericPage } from '@/lib/api/content-provider';
import { Locale } from '@/types';

export async function GET(
  request: NextRequest,
  { params }: { params: { pagePath?: string[] } }
) {
  try {
    const resolvedParams = await params;
    const pagePath = resolvedParams.pagePath?.join('/') || '';
    const { searchParams } = new URL(request.url);
    const locale = (searchParams.get('locale') || 'en') as Locale;

    const page = await getGenericPage(pagePath, locale);

    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 });
    }

    return NextResponse.json(page, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Error fetching page:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
