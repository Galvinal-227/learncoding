export const chapter = {
  slug: "headless-cms-api",
  title: "API & Content Delivery",
  description: "Optimasi content delivery: caching, CDN, webhooks, incremental static regeneration.",
  icon: "SiStrapi",
  color: "#4945FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["headless-cms-strapi"],
  tags: ["headless-cms", "api", "caching", "webhook"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Content Delivery Strategies

### 1. Client-side Fetch
\`\`\`javascript
// Setiap request fetch API
useEffect(() => {
    fetch('/api/articles').then(res => res.json()).then(setArticles);
}, []);
// ❌ Slow, SEO tidak optimal
\`\`\`

### 2. Static Site Generation (SSG)
\`\`\`javascript
// Next.js: Fetch saat build
export async function getStaticProps() {
    const articles = await fetchArticles();
    return { props: { articles }, revalidate: 3600 }; // ISR: revalidate 1 jam
}
// ✅ Fast, SEO optimal
\`\`\`

### 3. Incremental Static Regeneration (ISR)
\`\`\`javascript
// Next.js: Rebuild halaman di background
export async function getStaticProps() {
    return {
        props: { articles: await fetchArticles() },
        revalidate: 60 // Regenerate setiap 60 detik
    };
}
\`\`\`

## Webhooks (Auto Rebuild)

\`\`\`
Strapi: Settings → Webhooks → Add webhook
URL: https://myapp.com/api/revalidate
Events: Entry created, updated, deleted

# Next.js On-Demand Revalidation
// pages/api/revalidate.js
export default async function handler(req, res) {
    await res.revalidate('/blog');
    return res.json({ revalidated: true });
}
\`\`\`

## Caching Strategies

| Strategy | TTL | Use Case |
|----------|-----|----------|
| No cache | 0 | Real-time data |
| Short | 1-5 menit | News, social media |
| Medium | 1-24 jam | Blog, product pages |
| Long | 7-30 hari | Static content, images |

## CDN

\`\`\`
✅ Strapi: Gunakan CDN di depan (Cloudflare, Vercel CDN)
✅ Contentful/Sanity: CDN built-in
✅ Cache-Control header: public, max-age=3600, s-maxage=86400
\`\`\`
  `,

  quiz: [
    { question: "ISR?", options: ["Server-side", "Incremental Static Regeneration (rebuild background)", "Client-side", "No caching"], correctAnswer: 1 },
    { question: "Webhook untuk?", options: ["Debug", "Trigger rebuild saat konten berubah", "Auth", "Database"], correctAnswer: 1 }
  ],

  codeExamples: []
};