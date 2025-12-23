import { getTenantById } from '@/data/tenants';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface TenantPageProps {
    params: Promise<{
        tenant: string;
    }>;
}

export async function generateMetadata({ params }: TenantPageProps): Promise<Metadata> {
    const { tenant: tenantId } = await params;
    const tenant = getTenantById(tenantId);

    if (!tenant) {
        return {
            title: 'Página não encontrada',
        };
    }

    const canonicalUrl = `https://${tenant.primaryDomain}`;

    return {
        title: tenant.name,
        description: `Site oficial de ${tenant.name}`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: tenant.name,
            description: `Site oficial de ${tenant.name}`,
            url: canonicalUrl,
            siteName: tenant.name,
            type: 'website',
        },
    };
}

export default async function TenantHomePage({ params }: TenantPageProps) {
    const { tenant: tenantId } = await params;
    const tenant = getTenantById(tenantId);

    if (!tenant) {
        notFound();
    }

    // Dynamic import of tenant's home page content
    try {
        const TenantHomeContent = (await import(`@/data/pages/${tenantId}/home`)).default;
        return <TenantHomeContent tenant={tenant} />;
    } catch {
        // Fallback: show default placeholder
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                fontFamily: 'system-ui, sans-serif',
                padding: '2rem',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    {tenant.name}
                </h1>
                <p style={{ color: '#666' }}>
                    Site em construção
                </p>
            </div>
        );
    }
}
