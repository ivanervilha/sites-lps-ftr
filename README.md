# Sites/LPs — Multi-tenant Next.js

Projeto multi-tenant para hospedar sites e landing pages de membros em Next.js (App Router) na Vercel, com suporte a domínios próprios e subdomínios fallback.

## 📋 Requisitos

- Node.js 18.17 ou superior
- npm 9+

## 🚀 Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Testando tenants localmente (Mac)

Para testar o roteamento por host antes de ter DNS configurado:

1. **Edite o arquivo hosts:**
```bash
sudo nano /etc/hosts
```

2. **Adicione as entradas:**
```
127.0.0.1 eloirfernandes.com.br
127.0.0.1 www.eloirfernandes.com.br
127.0.0.1 eloir.valoremfisioterapia.com.br
```

3. **Salve e saia** (Ctrl+X, Y, Enter)

4. **Limpe o cache DNS:**
```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

5. **Acesse com a porta:**
```
http://eloirfernandes.com.br:3000
http://eloirfernandes.com.br:3000/comprasegura
```

> **Nota:** Lembre-se de remover as entradas do `/etc/hosts` depois de testar.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── _t/
│   │   └── [tenant]/
│   │       ├── page.tsx           # Home do tenant
│   │       └── [slug]/
│   │           └── page.tsx       # Páginas de campanha
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── data/
│   ├── tenants.ts                 # Configuração de tenants
│   └── pages/
│       └── {tenantId}/
│           ├── home.tsx           # Conteúdo da home
│           └── {slug}.tsx         # Conteúdo das campanhas
├── middleware.ts                  # Resolução multi-tenant
└── public/
    └── assets/
        └── {tenantId}/            # Assets do tenant
```

## ➕ Como adicionar novo tenant

1. Edite `src/data/tenants.ts` e adicione o novo tenant:

```typescript
{
  id: 'novo-tenant',
  name: 'Nome do Tenant',
  primaryDomain: 'dominio.com.br',
  domains: [
    'dominio.com.br',
    'www.dominio.com.br',
    'novo-tenant.valoremfisioterapia.com.br',
  ],
  campaigns: ['comprasegura'],
}
```

2. Crie a pasta `src/data/pages/{tenantId}/`

3. Crie os arquivos de conteúdo:
   - `home.tsx` — página inicial
   - `{slug}.tsx` — páginas de campanha

4. Adicione assets em `public/assets/{tenantId}/`

## 🌐 Como adicionar domínio na Vercel

1. Acesse o projeto na Vercel
2. Vá em **Settings → Domains**
3. Adicione o novo domínio
4. Configure o DNS:
   - **A Record**: `76.76.21.21`
   - Ou **CNAME**: `cname.vercel-dns.com`
5. Adicione o domínio na lista do tenant em `src/data/tenants.ts`

## 📄 Como adicionar nova campanha/slug

1. Adicione o slug na lista de `campaigns` do tenant em `src/data/tenants.ts`:

```typescript
campaigns: ['comprasegura', 'nova-campanha'],
```

2. Crie o arquivo `src/data/pages/{tenantId}/nova-campanha.tsx`

3. Deploy!

## 🔄 Conversão de site original (pixel-perfect)

Para converter um site existente:

1. Copie a pasta original para `/originals/{tenantId}/` (referência)

2. Mova assets (imagens, fontes) para `/public/assets/{tenantId}/`

3. Crie componente em `/src/data/pages/{tenantId}/{slug}.tsx`:
   - Mantenha HTML/CSS original
   - Importe CSS global se necessário
   - Use `<img>` se `next/image` alterar layout

4. **Regras absolutas:**
   - ❌ Não alterar layout, cores, tipografia
   - ❌ Não "melhorar" UI
   - ❌ Não trocar imagens
   - ❌ Não reorganizar HTML/CSS
   - ✅ Prioridade: fidelidade visual 100%

## 📜 Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Iniciar build de produção
npm run lint     # Verificar linting
```

## 🏗️ Deploy

O projeto está pronto para deploy na Vercel. Basta conectar o repositório e fazer push.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <seu-repositorio>
git push -u origin main
```
