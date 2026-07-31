export const chapter = {
  slug: "headless-cms-strapi",
  title: "Strapi",
  description: "Setup dan gunakan Strapi - headless CMS open source paling populer.",
  icon: "SiStrapi",
  color: "#4945FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["headless-cms-introduction"],
  tags: ["headless-cms", "strapi", "open-source", "self-hosted"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Strapi?

Strapi adalah **headless CMS open-source** berbasis Node.js. Paling populer karena self-hosted (data di server sendiri), punya admin panel modern, dan REST + GraphQL API otomatis.

## Instalasi

\`\`\`bash
npx create-strapi-app@latest my-project --quickstart
# Pilih: JavaScript/TypeScript
# Database: SQLite (dev) / PostgreSQL (production)

cd my-project
npm run develop
# Admin panel: http://localhost:1337/admin
# API: http://localhost:1337/api
\`\`\`

## Content-Type Builder

Di admin panel:
1. **Collection Types** - Articles, Products, Users (multiple entries)
2. **Single Types** - Homepage, Settings (satu entry)
3. **Components** - Reusable fields (SEO metadata, Image gallery)

### Contoh: Article Collection
\`\`\`
Fields:
- title (Text, required)
- slug (UID, from title)
- content (Rich text)
- featuredImage (Media - single image)
- category (Relation - belongs to Category)
- publishedAt (Date)
- seo (Component - SEO metadata)
\`\`\`

## REST API (Otomatis!)

\`\`\`bash
# Query articles
GET /api/articles?populate=*

# Filter
GET /api/articles?filters[category][name]=Tech

# Sort & Paginate
GET /api/articles?sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=10

# Single entry
GET /api/articles/1?populate=*
\`\`\`

## GraphQL Plugin

\`\`\`bash
npm run strapi install graphql
\`\`\`

\`\`\`graphql
query {
  articles(pagination: { page: 1, pageSize: 10 }) {
    data {
      id
      attributes {
        title
        content
        createdAt
      }
    }
  }
}
\`\`\`

## Roles & Permissions

\`\`\`
Settings → Roles → Public → Article:
- find ✅ (beri akses)
- findOne ✅
- create ❌ (jangan)
\`\`\`

## Deployment

\`\`\`bash
# Production build
npm run build
npm start

# Deploy ke:
- VPS (PM2 + Nginx)
- Railway / Render
- Strapi Cloud
\`\`\`

## Strapi vs Contentful vs Sanity

| | Strapi | Contentful | Sanity |
|---|--------|------------|--------|
| Lisensi | Open source | Proprietary | Open source |
| Hosting | Self-hosted | Cloud (SaaS) | Cloud (SaaS) |
| API | REST + GraphQL | REST + GraphQL | GROQ + GraphQL |
| Price | Gratis | Free tier → $489/bln | Free tier → pay-per-use |
| Customization | Full code access | Limited UI | Full code access |
| Real-time | ❌ | ❌ | ✅ |
| Best for | Full control, data privacy | Enterprise, no ops | Real-time, developer-first |
  `,

  quiz: [
    { question: "Strapi: database?", options: ["Only MongoDB", "SQLite, PostgreSQL, MySQL, MariaDB", "Only PostgreSQL", "Only MySQL"], correctAnswer: 1 },
    { question: "Strapi: API format?", options: ["REST only", "GraphQL only", "REST + GraphQL", "SOAP"], correctAnswer: 2 },
    { question: "Strapi: hosting?", options: ["Cloud only", "Self-hosted (server sendiri)", "Shared hosting", "Static only"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Fetch Articles dari Strapi (Next.js)",
      language: "javascript",
      code: `// lib/strapi.js
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchArticles() {
    const res = await fetch(\`\${API_URL}/api/articles?populate=*\`);
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.data; // Array of articles
}

export async function fetchArticle(slug) {
    const res = await fetch(
        \`\${API_URL}/api/articles?filters[slug][$eq]=\${slug}&populate=*\`
    );
    const data = await res.json();
    return data.data[0];
}`
    }
  ]
};