import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { DOMAIN_CONFIGS } from './config/domains'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const domainConfig = DOMAIN_CONFIGS[hostname as keyof typeof DOMAIN_CONFIGS]

  // If hostname matches one of our domain configs
  if (domainConfig) {
    // Rewrite the request to the correct path
    const url = request.nextUrl.clone()
    url.pathname = `${domainConfig.path}${url.pathname}`
    return NextResponse.rewrite(url)
  }

  // Default behavior - continue to main site
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
} 