import { getTenantById, hasCampaign } from '@/data/tenants';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface CampaignPageProps {
    params: Promise<{
        tenant: string;
        slug: string;
    }>;
}

export async function generateMetadata({ params }: CampaignPageProps): Promise<Metadata> {
    const { tenant: tenantId, slug } = await params;
    const tenant = getTenantById(tenantId);

    if (!tenant || !hasCampaign(tenantId, slug)) {
        return {
            title: 'Página não encontrada',
        };
    }

    const canonicalUrl = `https://${tenant.primaryDomain}/${slug}`;
    const title = `${formatSlugTitle(slug)} | ${tenant.name}`;

    return {
        title,
        description: `${formatSlugTitle(slug)} - ${tenant.name}`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description: `${formatSlugTitle(slug)} - ${tenant.name}`,
            url: canonicalUrl,
            siteName: tenant.name,
            type: 'website',
        },
    };
}

function formatSlugTitle(slug: string): string {
    return slug
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export default async function CampaignPage({ params }: CampaignPageProps) {
    const { tenant: tenantId, slug } = await params;
    const tenant = getTenantById(tenantId);

    if (!tenant || !hasCampaign(tenantId, slug)) {
        notFound();
    }

    // Dynamic import of campaign page content
    try {
        const CampaignContent = (await import(`@/data/pages/${tenantId}/${slug}`)).default;
        return <CampaignContent tenant={tenant} slug={slug} />;
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
                    {formatSlugTitle(slug)}
                </h1>
                <p style={{ color: '#666' }}>
                    Página em construção
                </p>
            </div>
        );
    }
}
