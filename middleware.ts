import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "@/lib/i18n-config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

function getLocale(request: NextRequest): string {
  // Try to get locale from cookie
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  // Try to get locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")[0]
      .split("-")[0]
      .toLowerCase();

    if (i18n.locales.includes(preferredLocale as any)) {
      return preferredLocale;
    }
  }

  return i18n.defaultLocale;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, icons, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|sitemap.xml|robots.txt).*)",
  ],
};
