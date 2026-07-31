export const chapter = {
  slug: "jamstack-static-site-generators",
  title: "Static Site Generators",
  description: "Kenali SSG populer: Next.js, Gatsby, Astro, Hugo, Eleventy.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["jamstack-introduction"],
  tags: ["jamstack", "ssg", "nextjs", "astro"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Static Site Generator?

SSG adalah tool yang **menggenerate HTML statis** dari template + data saat **build time**. Hasilnya = folder \`dist/\` berisi HTML, CSS, JS siap upload ke CDN.

## SSG Populer

| SSG | Language | Best For |
|-----|----------|----------|
| **Next.js** | React | Full-stack, e-commerce, enterprise |
| **Gatsby** | React | Blog, marketing, GraphQL-native |
| **Astro** | Framework-agnostic | Content sites, multi-framework |
| **Hugo** | Go templates | Speed (build <1 detik) |
| **Eleventy (11ty)** | JavaScript | Simplicity, flexibility |
| **SvelteKit** | Svelte | Svelte apps |
| **Nuxt** | Vue | Vue apps |
| **Remix** | React | Dynamic web apps |

## Next.js SSG

\`\`\`javascript
// pages/blog/[slug].js
export async function getStaticPaths() {
    const posts = await fetchPosts();
    return { paths: posts.map(p => ({ params: { slug: p.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
    const post = await fetchPost(params.slug);
    return { props: { post }, revalidate: 3600 }; // ISR: update tiap 1 jam
}
\`\`\`

## Astro (.astro files)

\`\`\`astro
---
// astro.config.mjs
import { defineConfig } from 'astro/config';
export default defineConfig({ output: 'static' });

// pages/index.astro
const posts = await fetchPosts();
---
<html>
  <body>
    {posts.map(post => <article>{post.title}</article>)}
  </body>
</html>
\`\`\`

## Hugo (Go Templates)

\`\`\`bash
hugo new site myblog
hugo new posts/my-first-post.md
hugo server  # Development
hugo         # Build → public/
\`\`\`

## SSG vs SSR vs SPA

| | SSG | SSR | SPA |
|---|-----|-----|-----|
| Render | Build time | Request time | Client-side |
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| SEO | ✅ | ✅ | ❌ (butuh prerender) |
| Dynamic data | ISR/CSR | ✅ | ✅ |
| Contoh | Astro, Hugo | Next.js SSR, Remix | CRA, Vite SPA |
  `,

  quiz: [
    { question: "Next.js SSG: getStaticProps?", options: ["Server-side", "Fetch data saat build (static generation)", "Client-side", "API route"], correctAnswer: 1 },
    { question: "Astro output mode?", options: ["server", "static (SSG)", "hybrid", "SPA"], correctAnswer: 1 }
  ],

  codeExamples: []
};