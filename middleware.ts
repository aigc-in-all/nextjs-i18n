// middleware.ts

import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n/i18n-config";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale.code}/`) && pathname !== `/${locale.code}`,
    );

    if (pathnameIsMissingLocale) {
        return NextResponse.rewrite(new URL(`/en${pathname}`, request.url))
    }

    return NextResponse.next()
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};