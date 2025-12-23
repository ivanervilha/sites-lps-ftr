import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            backgroundColor: '#fafafa',
            padding: '2rem',
            textAlign: 'center',
        }}>
            <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '3rem',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
                maxWidth: '400px',
                width: '100%',
            }}>
                <div style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    color: '#e53e3e',
                    marginBottom: '1rem',
                }}>
                    404
                </div>
                <h1 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '0.75rem',
                }}>
                    Página não encontrada
                </h1>
                <p style={{
                    color: '#718096',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                }}>
                    A página que você está procurando não existe ou foi movida.
                </p>
                <Link
                    href="/"
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#3182ce',
                        color: '#fff',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '500',
                        transition: 'background-color 0.2s',
                    }}
                >
                    Voltar ao início
                </Link>
            </div>
        </div>
    );
}
