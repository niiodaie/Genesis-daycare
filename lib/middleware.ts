import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith('/portal')) return NextResponse.next();
  if (pathname.startsWith('/portal/login')) return NextResponse.next();
  if (!req.cookies.get('myg_session')) {
    const url = req.nextUrl.clone(); url.pathname = '/portal/login';
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
export const config = { matcher: ['/portal/:path*'] };
