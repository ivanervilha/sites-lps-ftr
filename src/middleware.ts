import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { resolveTenantByHost, hasCampaign } from '@/data/tenants';

// Reserved tenant ID for 404 pages
const NOT_FOUND_TENANT = '__notfound';

export function middleware(request: NextRequest) {
    const host = request.headers.get('host') || '';
    const pathname = request.nextUrl.pathname;

    // Skip internal routes and static files
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/sites') ||
        pathname.includes('.') // static files
    ) {
        return NextResponse.next();
    }

    // Resolve tenant from host
    const tenant = resolveTenantByHost(host);

    if (!tenant) {
        // Tenant not found - rewrite to reserved 404 tenant
        return NextResponse.rewrite(
            new URL(`/sites/${NOT_FOUND_TENANT}`, request.url)
        );
    }

    // Rewrite to internal tenant routes
    if (pathname === '/') {
        // Home page: / → /sites/{tenantId}
        return NextResponse.rewrite(
            new URL(`/sites/${tenant.id}`, request.url)
        );
    } else {
        // Campaign page: /{slug} → /sites/{tenantId}/{slug}
        const slug = pathname.slice(1); // Remove leading slash

        // Check if campaign exists
        if (!hasCampaign(tenant.id, slug)) {
            // Campaign not found - rewrite to reserved 404 tenant
            return NextResponse.rewrite(
                new URL(`/sites/${NOT_FOUND_TENANT}`, request.url)
            );
        }

        return NextResponse.rewrite(
            new URL(`/sites/${tenant.id}/${slug}`, request.url)
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
