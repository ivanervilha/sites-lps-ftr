import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { resolveTenantByHost, getTenantById, hasCampaign } from '@/data/tenants';

export function middleware(request: NextRequest) {
    const host = request.headers.get('host') || '';
    const pathname = request.nextUrl.pathname;

    // Skip internal routes and static files
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/_t') ||
        pathname.includes('.') // static files
    ) {
        return NextResponse.next();
    }

    // Resolve tenant from host
    const tenant = resolveTenantByHost(host);

    if (!tenant) {
        // Tenant not found - show 404
        return NextResponse.rewrite(new URL('/not-found', request.url));
    }

    // Rewrite to internal tenant routes
    if (pathname === '/') {
        // Home page: / → /_t/{tenantId}
        return NextResponse.rewrite(
            new URL(`/_t/${tenant.id}`, request.url)
        );
    } else {
        // Campaign page: /{slug} → /_t/{tenantId}/{slug}
        const slug = pathname.slice(1); // Remove leading slash

        // Check if campaign exists
        if (!hasCampaign(tenant.id, slug)) {
            return NextResponse.rewrite(new URL('/not-found', request.url));
        }

        return NextResponse.rewrite(
            new URL(`/_t/${tenant.id}/${slug}`, request.url)
        );
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder files
         */
        '/((?!_next/static|_next/image|favicon.ico|assets/).*)',
    ],
};
