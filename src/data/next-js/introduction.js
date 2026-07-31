export const chapter = {
  slug: "next-js-introduction",
  title: "Pengenalan Next.js",
  description: "Pahami apa itu Next.js, keunggulannya, dan kenapa jadi framework React #1 untuk production.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["react-introduction"],
  tags: ["nextjs", "react", "framework", "fullstack"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Next.js?

Next.js adalah **React framework** untuk production yang dibuat oleh **Vercel**. Menyediakan **SSR, SSG, ISR, API routes, file-based routing, image optimization**, dan masih banyak lagi.

## Kenapa Next.js?

- ⚡ **Performance** - SSG/SSR/ISR, automatic code splitting
- 🎯 **SEO** - Server-rendered by default
- 📁 **File-based routing** - Tidak perlu react-router
- 🔄 **Hybrid rendering** - Pilih SSG/SSR per halaman
- 🖼️ **Image optimization** - next/image built-in
- 🚀 **API routes** - Backend dalam satu project
- 🎨 **CSS support** - CSS Modules, Tailwind, styled-components
- 📦 **Zero config** - Bisa langsung mulai

## Next.js vs React (CRA) vs Remix

| | Next.js | React (CRA) | Remix |
|---|---------|-------------|-------|
| Rendering | SSG, SSR, ISR, CSR | CSR only | SSR, CSR |
| Routing | File-based | Manual (react-router) | File-based |
| SEO | ✅ Excellent | ❌ Poor (CSR) | ✅ Excellent |
| API | Built-in | Tidak ada | Built-in |
| Performance | Excellent | Good | Excellent |
| Learning curve | Sedang | Rendah | Sedang |
| Dibuat oleh | Vercel | Meta | Shopify |

## Pages Router vs App Router

Next.js punya **dua router**:

| | Pages Router | App Router |
|---|-------------|------------|
| Direktori | \`pages/\` | \`app/\` |
| Dirilis | Next.js 1.0 (2016) | Next.js 13 (2022) |
| Server Components | ❌ | ✅ |
| Layout | Manual (_app, _document) | Nested layouts |
| Loading/Error | Manual | loading.tsx, error.tsx |
| Status | Stable (legacy) | Recommended (new projects) |

## Instalasi

\`\`\`bash
npx create-next-app@latest my-app
# Pilih: TypeScript, ESLint, Tailwind CSS, App Router

cd my-app
npm run dev
# http://localhost:3000
\`\`\`

## Struktur Project (App Router)

\`\`\`
my-app/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # /about
│   ├── blog/
│   │   ├── page.tsx       # /blog
│   │   └── [slug]/
│   │       └── page.tsx   # /blog/:slug
│   ├── api/
│   │   └── users/
│   │       └── route.ts   # /api/users
│   └── globals.css
├── components/
├── lib/
├── public/
├── next.config.js
└── package.json
\`\`\`
  `,

  quiz: [
    { question: "Next.js dibuat?", options: ["Google", "Vercel", "Meta", "Microsoft"], correctAnswer: 1 },
    { question: "App Router vs Pages Router?", options: ["Sama", "App: modern (server components, layouts); Pages: legacy", "Pages lebih baru", "App deprecated"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Create Next.js App",
      language: "bash",
      code: `# Create new project
npx create-next-app@latest my-app

# Run development
npm run dev

# Build production
npm run build
npm start

# Structure
# app/          → App Router (modern)
# pages/        → Pages Router (legacy)
# public/       → Static files
# components/   → Reusable components
# lib/          → Utilities, helpers`
    }
  ]
};