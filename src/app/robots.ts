import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/sites/', '/api/'],
            },
        ],
        sitemap: 'https://valoremfisioterapia.com.br/sitemap.xml',
    };
}
