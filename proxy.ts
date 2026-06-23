import { NextRequest, NextResponse } from 'next/server'

const locales = ['pt', 'es', 'en'] as const
const defaultLocale = 'pt'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (hasLocale) return NextResponse.next()

  const acceptLanguage = request.headers.get('accept-language') ?? ''
  const preferred = acceptLanguage.split(',')[0]?.split('-')[0]
  const locale = locales.find((l) => l === preferred) ?? defaultLocale

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
}
