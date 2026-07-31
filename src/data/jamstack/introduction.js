export const chapter = {
  slug: "jamstack-introduction",
  title: "Pengenalan JAMStack",
  description: "Pahami apa itu JAMStack, kenapa jadi arsitektur modern, dan perbedaannya dengan web tradisional.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["internet-introduction"],
  tags: ["jamstack", "static-site", "modern-web", "architecture"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu JAMStack?

**JAMStack** = **J**avaScript + **A**PIs + **M**arkup. Arsitektur modern untuk membangun website yang **cepat, aman, dan scalable**.

## JAMStack vs Traditional Web

| | Traditional (LAMP/MEAN) | JAMStack |
|---|------------------------|----------|
| Server | Monolith (WordPress, Express) | Tidak ada / Serverless |
| Rendering | Server-side (setiap request) | Pre-built static files |
| Database | MySQL/MongoDB (live query) | API (Headless CMS, REST) |
| Keamanan | Rawan (plugin, SQL injection) | Minimal attack surface |
| Performa | Lambat (server processing) | Cepat (CDN) |
| Scaling | Sulit (vertical/horizontal) | Mudah (CDN auto-scale) |
| Biaya | Server 24/7 | Gratis/hostring static |

## 3 Pilar JAMStack

### JavaScript
Dynamic functionality di client-side (React, Vue, Svelte, Vanilla JS).

### APIs
Backend logic via third-party services atau custom serverless functions.

### Markup
HTML pre-built saat **deploy** (bukan saat request). Static Site Generator (SSG).

## Arsitektur JAMStack

\`\`\`
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Headless    │────▶│ Static Site  │────▶│     CDN      │
│  CMS / API   │     │  Generator   │     │  (Edge)      │
└──────────────┘     └──────────────┘     └──────────────┘
       │                                        │
       ▼                                        ▼
  Content Editors                          Users (Fast!)
\`\`\`

## Kenapa JAMStack?

- ⚡ **Super cepat** - Static files di CDN global
- 🔒 **Lebih aman** - Tidak ada server/database langsung exposed
- 📈 **Scalable** - CDN handle traffic apa pun
- 💰 **Murah/Gratis** - Hosting static gratis (Netlify, Vercel, GitHub Pages)
- 🧩 **Modular** - Pilih best-of-breed services (Headless CMS, Auth, Payments)
- 👨‍💻 **DX bagus** - Git-based workflow, preview deployments

## Contoh Stack JAMStack

| Layer | Opsi Populer |
|-------|-------------|
| **SSG** | Next.js, Gatsby, Astro, Hugo, Eleventy |
| **Headless CMS** | Strapi, Contentful, Sanity, Ghost |
| **Auth** | Auth0, Supabase Auth, Clerk |
| **Payments** | Stripe, Midtrans |
| **Search** | Algolia, Meilisearch |
| **Hosting** | Netlify, Vercel, Cloudflare Pages |
| **Serverless** | AWS Lambda, Cloudflare Workers, Netlify Functions |

## Kapan Pakai JAMStack?

✅ Blog, marketing sites
✅ E-commerce (dengan Snipcart/Shopify API)
✅ Documentation sites
✅ Portfolio & landing pages
✅ SaaS frontend

❌ Real-time apps (chat, live dashboard) - bisa tapi kompleks
❌ Aplikasi dengan ribuan halaman dinamis (build lama)
  `,

  quiz: [
    { question: "JAMStack kepanjangan?", options: ["Java, Android, Mobile", "JavaScript, APIs, Markup", "JSON, Ajax, MySQL", "JWT, Auth, MongoDB"], correctAnswer: 1 },
    { question: "JAMStack vs Traditional?", options: ["Sama", "JAMStack: static, CDN; Traditional: server-rendered", "Traditional lebih cepat", "JAMStack lebih mahal"], correctAnswer: 1 },
    { question: "SSG contohnya?", options: ["WordPress", "Next.js, Gatsby, Astro", "Express", "Node.js"], correctAnswer: 1 }
  ],

  codeExamples: []
};