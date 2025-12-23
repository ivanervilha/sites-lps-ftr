import { MetadataRoute } from 'next';
import { tenants } from '@/data/tenants';

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    for (const tenant of tenants) {
        const baseUrl = `https://${tenant.primaryDomain}`;

        // Home page
        entries.push({
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        });

        // Campaign pages
        for (const campaign of tenant.campaigns) {
            entries.push({
                url: `${baseUrl}/${campaign}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        }
    }

    return entries;
}
