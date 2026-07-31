export const chapter = {
  slug: "headless-cms-introduction",
  title: "Pengenalan Headless CMS",
  description: "Pahami apa itu Headless CMS, bedanya dengan CMS tradisional, dan kapan menggunakannya.",
  icon: "SiStrapi",
  color: "#4945FF",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["headless-cms", "content-management", "api", "jamstack"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Headless CMS?

Headless CMS adalah **content management system** yang memisahkan backend (tempat mengelola konten) dari frontend (tempat menampilkan konten). Konten disajikan via **API** (REST/GraphQL), sehingga frontend bisa dibangun dengan teknologi apa pun.

## Traditional CMS vs Headless CMS

| | Traditional (WordPress) | Headless CMS |
|---|------------------------|--------------|
| Backend & Frontend | Terikat (monolith) | Terpisah (decoupled) |
| Teknologi frontend | Harus PHP/template CMS | Bebas (React, Vue, Next.js, dll) |
| Multi-platform | Sulit | ✅ Satu API, banyak platform |
| Performa | Lambat (server-rendered) | Cepat (static/CDN) |
| Keamanan | Plugin vulnerability | Lebih aman (API-only) |
| Learning curve | Rendah | Sedang |
| Flexibility | Terbatas | Tidak terbatas |

## Kenapa Headless CMS?

- 🎨 **Frontend bebas** - Pakai React, Vue, Next.js, Nuxt, atau apa pun
- 📱 **Omnichannel** - Satu konten → website, mobile app, kiosk, IoT
- ⚡ **Performa** - Static site generation (SSG) = super cepat
- 🔒 **Keamanan** - Tidak ada public admin panel, API-only
- 🧩 **Microservices** - CMS sebagai service, bukan monolith
- 👨‍💻 **Developer experience** - API-first, Git-based workflow

## Headless CMS Populer

| CMS | Tipe | Hosting | Best For |
|-----|------|---------|----------|
| **Strapi** | Open source, self-host | Sendiri / Cloud | Custom projects, full control |
| **Contentful** | SaaS (Cloud) | Cloud | Enterprise, large teams |
| **Sanity** | SaaS + real-time | Cloud | Real-time collaboration |
| **Ghost** | Open source | Sendiri / Cloud | Blog, publishing |
| **Payload** | Open source | Sendiri | Developer-focused |
| **Hygraph** | SaaS (GraphQL-native) | Cloud | GraphQL-first projects |
| **WordPress (Headless)** | Open source | Sendiri | Migrasi dari WP tradisional |

## Kapan Pakai Headless CMS?

✅ Website dengan blog/news section
✅ E-commerce product descriptions
✅ Multi-language content
✅ Mobile app + website (satu konten)
✅ Static site (Next.js, Gatsby)
✅ Butuh custom frontend (React/Vue)

❌ Simple landing page (overkill)
❌ Budget terbatas (ada hosting cost)
❌ Tim non-technical (butuh developer untuk frontend)
  `,

  quiz: [
    { question: "Headless CMS vs WordPress?", options: ["Sama", "Headless: decoupled (API); WordPress: monolith", "WordPress lebih cepat", "Headless tidak punya API"], correctAnswer: 1 },
    { question: "Headless CMS open source?", options: ["Contentful", "Strapi", "Sanity", "Hygraph"], correctAnswer: 1 },
    { question: "Headless CMS: frontend?", options: ["Harus PHP", "Bebas (React, Vue, Next.js, dll)", "Harus WordPress", "Harus static"], correctAnswer: 1 }
  ],

  codeExamples: []
};