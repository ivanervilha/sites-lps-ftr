import Link from 'next/link';
import { Tenant } from '@/data/tenants';

interface HomeProps {
    tenant: Tenant;
}

export default function EloirHome({ tenant }: HomeProps) {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#fff',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}>
            {/* Header */}
            <header style={{
                padding: '1.5rem 2rem',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <h1 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1a202c',
                    margin: 0,
                }}>
                    {tenant.name}
                </h1>
                <nav>
                    <Link
                        href="/comprasegura"
                        style={{
                            color: '#3182ce',
                            textDecoration: 'none',
                            fontWeight: '500',
                        }}
                    >
                        Compra Segura
                    </Link>
                </nav>
            </header>

            {/* Hero */}
            <main style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '4rem 2rem',
                textAlign: 'center',
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#1a202c',
                    marginBottom: '1rem',
                }}>
                    Bem-vindo ao site de {tenant.name}
                </h2>
                <p style={{
                    fontSize: '1.125rem',
                    color: '#4a5568',
                    maxWidth: '600px',
                    margin: '0 auto 2rem',
                    lineHeight: '1.7',
                }}>
                    Este é um site placeholder. O conteúdo real será adicionado após a conversão
                    do site original para este projeto Next.js.
                </p>
                <Link
                    href="/comprasegura"
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#38a169',
                        color: '#fff',
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '1.125rem',
                    }}
                >
                    Acessar Compra Segura
                </Link>
            </main>

            {/* Footer */}
            <footer style={{
                borderTop: '1px solid #e2e8f0',
                padding: '2rem',
                textAlign: 'center',
                color: '#718096',
                fontSize: '0.875rem',
            }}>
                © {new Date().getFullYear()} {tenant.name}. Todos os direitos reservados.
            </footer>
        </div>
    );
}
