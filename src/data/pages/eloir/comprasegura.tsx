import Link from 'next/link';
import { Tenant } from '@/data/tenants';

interface CompraSeguraProps {
    tenant: Tenant;
    slug: string;
}

export default function CompraSegura({ tenant }: CompraSeguraProps) {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f7fafc',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}>
            {/* Header */}
            <header style={{
                padding: '1.5rem 2rem',
                backgroundColor: '#fff',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <h1 style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#1a202c',
                        margin: 0,
                    }}>
                        {tenant.name}
                    </h1>
                </Link>
                <span style={{
                    backgroundColor: '#38a169',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                }}>
                    Compra Segura
                </span>
            </header>

            {/* Main Content */}
            <main style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '3rem 2rem',
            }}>
                <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    padding: '3rem',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
                }}>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '2rem',
                    }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            backgroundColor: '#c6f6d5',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                        }}>
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#38a169"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M9 12l2 2 4-4" />
                            </svg>
                        </div>
                        <h1 style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            color: '#1a202c',
                            marginBottom: '0.75rem',
                        }}>
                            Compra Segura
                        </h1>
                        <p style={{
                            color: '#4a5568',
                            fontSize: '1.125rem',
                            lineHeight: '1.7',
                        }}>
                            Esta é a página de compra segura de {tenant.name}.
                        </p>
                    </div>

                    <div style={{
                        borderTop: '1px solid #e2e8f0',
                        paddingTop: '2rem',
                        textAlign: 'center',
                    }}>
                        <p style={{
                            color: '#718096',
                            fontSize: '0.875rem',
                            marginBottom: '1.5rem',
                        }}>
                            O conteúdo desta página será substituído pelo site original convertido.
                        </p>
                        <Link
                            href="/"
                            style={{
                                color: '#3182ce',
                                textDecoration: 'none',
                                fontWeight: '500',
                            }}
                        >
                            ← Voltar ao início
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
