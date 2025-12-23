export interface Tenant {
  id: string;
  name: string;
  primaryDomain: string;
  domains: string[];
  campaigns: string[];
}

export const tenants: Tenant[] = [
  {
    id: 'eloir',
    name: 'Eloir Fernandes',
    primaryDomain: 'eloirfernandes.com.br',
    domains: [
      'eloirfernandes.com.br',
      'www.eloirfernandes.com.br',
      'eloir.valoremfisioterapia.com.br',
    ],
    campaigns: ['comprasegura'],
  },
  {
    id: 'garagem51',
    name: 'Garagem 51',
    primaryDomain: 'garagem51.com.br',
    domains: [
      'garagem51.com.br',
      'www.garagem51.com.br',
      'garagem51.valoremfisioterapia.com.br',
      // Local testing domains (remove in production if desired)
      'garagem51.local',
      'www.garagem51.local',
    ],
    campaigns: ['comprasegura'],
  },
];

/**
 * Resolve tenant ID from hostname
 * Supports:
 * - Custom domain: eloirfernandes.com.br → eloir
 * - Subdomain fallback: eloir.valoremfisioterapia.com.br → eloir
 */
export function resolveTenantByHost(host: string): Tenant | null {
  // Remove port if present
  const hostname = host.split(':')[0].toLowerCase();

  // Find tenant by exact domain match
  const tenant = tenants.find((t) =>
    t.domains.some((d) => d.toLowerCase() === hostname)
  );

  if (tenant) {
    return tenant;
  }

  // Fallback: check if hostname starts with tenant id as subdomain
  // e.g., eloir.valoremfisioterapia.com.br
  for (const t of tenants) {
    if (hostname.startsWith(`${t.id}.`)) {
      return t;
    }
  }

  return null;
}

/**
 * Get tenant by ID
 */
export function getTenantById(tenantId: string): Tenant | null {
  return tenants.find((t) => t.id === tenantId) || null;
}

/**
 * Check if a campaign exists for a tenant
 */
export function hasCampaign(tenantId: string, slug: string): boolean {
  const tenant = getTenantById(tenantId);
  return tenant ? tenant.campaigns.includes(slug) : false;
}
