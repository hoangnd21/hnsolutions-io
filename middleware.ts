import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale } from '@/i18n/locales';

export function middleware(request: NextRequest) {
  // Check if locale cookie exists
  const localeCookie = request.cookies.get('NEXT_LOCALE');

  // If no locale cookie, set default
  if (!localeCookie) {
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', defaultLocale, {
      maxAge: 365 * 24 * 60 * 60, // 1 year
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

