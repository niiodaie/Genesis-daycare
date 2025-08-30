// /middleware.ts (project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ---- Global security headers ----
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', "camera=(), microphone=(), geolocation=('self')");

  // HSTS only when served over HTTPS (Vercel/Reverse proxy sends this header)
  if (request.headers.get('x-forwarded-proto') === 'https') {
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  }
  // Prevent other sites from iframing *your* pages (doesn't block you from iframing Calendly/YouTube)
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');

  // Optional CSP (keep commented until your allowlist is finalized)
  // response.headers.set(
  //   'Content-Security-Policy',
  //   [
  //     "default-src 'self'",
  //     "img-src 'self' data: blob:",
  //     "media-src 'self' https:",
  //     "style-src 'self' 'unsafe-inline'",
  //     "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com",
  //     "frame-src 'self' https://*.calendly.com https://www.youtube.com",
  //     "connect-src 'self' https://*.supabase.co https://api.calendly.com",
  //     "frame-ancestors 'self'",
  //   ].join('; ')
  // );

  // ---- Portal gate (/portal/*) ----
  const isPortal = pathname.startsWith('/portal');
  const isPublicPortalRoute =
    pathname.startsWith('/portal/login') || pathname.startsWith('/portal/logout');

  if (isPortal && !isPublicPortalRoute) {
    // Step-1 sandbox cookie
    const hasSandbox = Boolean(request.cookies.get('myg_session')?.value);

    // Step-2 Supabase cookies (helpers set sb-* cookies)
    const hasSupabase = request.cookies.getAll().some((c) => c.name.startsWith('sb-'));

    if (!hasSandbox && !hasSupabase) {
      const url = request.nextUrl.clone();
      url.pathname = '/portal/login';
      url.searchParams.set('next', pathname);
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: [
    // Run on everything except Next internals & common static assets
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
