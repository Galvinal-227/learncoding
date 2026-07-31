export const chapter = {
  slug: "next-js-static-generation",
  title: "Static Site Generation (SSG)",
  description: "Generate halaman statis saat build time untuk performa maksimal.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["next-js-app-router"],
  tags: ["nextjs", "ssg", "static", "generateStaticParams"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu SSG?

Static Site Generation = halaman di-**generate saat build time**. Hasil: HTML statis yang bisa di-cache CDN. Super cepat!

## SSG di App Router

\`\`\`tsx
// app/blog/page.tsx
// Tanpa dynamic functions → otomatis SSG!
export default async function BlogPage() {
    const posts = await fetch('https://api.example.com/posts');
    const data = await posts.json();
    
    return (
        <div>
            {data.map(post => <article key={post.id}>{post.title}</article>)}
        </div>
    );
}
\`\`\`

## Dynamic SSG (generateStaticParams)

\`\`\`tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
    const posts = await fetch('https://api.example.com/posts').then(r => r.json());
    
    return posts.map(post => ({
        slug: post.slug
    }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
        .then(r => r.json());
    
    return <article><h1>{post.title}</h1><p>{post.content}</p></article>;
}
\`\`\`

## ISR (Incremental Static Regeneration)

Update halaman statis di background tanpa rebuild penuh:

\`\`\`tsx
// Pages Router
export async function getStaticProps() {
    const posts = await fetchPosts();
    return {
        props: { posts },
        revalidate: 3600 // Regenerate setiap 1 jam
    };
}

// App Router
export const revalidate = 3600; // Regenerate setiap 1 jam
\`\`\`

## On-Demand Revalidation

\`\`\`tsx
// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    const { path, tag } = await request.json();
    
    if (path) revalidatePath(path);
    if (tag) revalidateTag(tag);
    
    return Response.json({ revalidated: true });
}
\`\`\`

## SSG vs SSR vs ISR

| | SSG | SSR | ISR |
|---|-----|-----|-----|
| Render | Build time | Request time | Background |
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Fresh data | Stale until rebuild | Always fresh | Stale max revalidate period |
| Use case | Blog, docs, marketing | Dashboard, real-time | Product pages |
  `,

  quiz: [
    { question: "generateStaticParams?", options: ["Server render", "Generate static paths saat build (SSG)", "Client fetch", "API route"], correctAnswer: 1 },
    { question: "revalidate: 3600?", options: ["Delete", "ISR: regenerate tiap 1 jam", "Cache forever", "No cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};