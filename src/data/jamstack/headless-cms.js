export const chapter = {
  slug: "jamstack-headless-cms",
  title: "Headless CMS",
  description: "Integrasikan Headless CMS dengan JAMStack: Strapi, Contentful, Sanity.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["jamstack-introduction"],
  tags: ["jamstack", "headless-cms", "content", "api"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Headless CMS + JAMStack

Headless CMS menyediakan konten via API → SSG fetch konten saat build → static HTML siap deploy.

## Workflow

\`\`\`
1. Content editor update konten di Headless CMS
2. Webhook trigger rebuild di Netlify/Vercel
3. SSG fetch API, generate HTML baru
4. Deploy ke CDN
5. User lihat konten terbaru
\`\`\`

## Contoh: Next.js + Strapi

\`\`\`javascript
// lib/api.js
export async function fetchArticles() {
    const res = await fetch(\`\${process.env.STRAPI_URL}/api/articles?populate=*\`);
    return res.json();
}

// pages/blog.js
export async function getStaticProps() {
    const { data: articles } = await fetchArticles();
    return { props: { articles }, revalidate: 60 }; // ISR
}
\`\`\`

## Webhook Rebuild

\`\`\`
Netlify: Settings → Build hooks → Add hook
URL: https://api.netlify.com/build_hooks/xxx

Strapi: Settings → Webhooks → Add webhook
URL: (Netlify build hook URL)
Events: Entry created, updated, deleted
\`\`\`

## Headless CMS Pilihan

| CMS | API | Self-hosted | Free Tier |
|-----|-----|------------|-----------|
| **Strapi** | REST + GraphQL | ✅ | ✅ (self-host) |
| **Sanity** | GROQ + GraphQL | ❌ (cloud) | ✅ (3 users) |
| **Contentful** | REST + GraphQL | ❌ (cloud) | ✅ (5 users) |
| **Ghost** | REST | ✅ | ✅ (self-host) |
  `,

  quiz: [
    { question: "Webhook untuk?", options: ["Debug", "Trigger rebuild saat konten berubah", "Auth", "Database"], correctAnswer: 1 },
    { question: "Strapi self-hosted?", options: ["Tidak", "Ya (open source, server sendiri)", "Hanya cloud", "Hanya enterprise"], correctAnswer: 1 }
  ],

  codeExamples: []
};