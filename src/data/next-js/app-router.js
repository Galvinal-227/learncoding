export const chapter = {
  slug: "next-js-app-router",
  title: "App Router (Modern)",
  description: "Kuasai App Router Next.js: layouts, loading, error, dynamic routes, dan route groups.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["next-js-introduction"],
  tags: ["nextjs", "app-router", "routing", "layouts"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## App Router Structure

\`\`\`
app/
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx            # Home page (/)
├── about/
│   └── page.tsx        # /about
├── blog/
│   ├── page.tsx        # /blog
│   └── [slug]/
│       └── page.tsx    # /blog/:slug (dynamic)
├── dashboard/
│   ├── layout.tsx      # Layout khusus dashboard
│   ├── page.tsx        # /dashboard
│   ├── settings/
│   │   └── page.tsx    # /dashboard/settings
│   ├── loading.tsx     # Loading UI untuk dashboard
│   └── error.tsx       # Error boundary dashboard
└── api/
    └── users/
        └── route.ts     # /api/users
\`\`\`

## Page (page.tsx)

\`\`\`tsx
// app/page.tsx
export default function HomePage() {
    return <h1>Welcome to Next.js!</h1>;
}

// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
    return <h1>Post: {params.slug}</h1>;
}
\`\`\`

## Layout (layout.tsx)

\`\`\`tsx
// app/layout.tsx - Root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <body>
                <nav>Navigation</nav>
                <main>{children}</main>
                <footer>Footer</footer>
            </body>
        </html>
    );
}

// app/dashboard/layout.tsx - Nested layout
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dashboard">
            <aside>Sidebar</aside>
            <section>{children}</section>
        </div>
    );
}
\`\`\`

## Loading (loading.tsx)

\`\`\`tsx
// app/dashboard/loading.tsx
export default function DashboardLoading() {
    return <div>Loading dashboard...</div>;
}
// Otomatis ditampilkan saat page di-render!
\`\`\`

## Error (error.tsx)

\`\`\`tsx
'use client';  // Error boundary HARUS client component

export default function DashboardError({ error, reset }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={reset}>Try again</button>
        </div>
    );
}
\`\`\`

## Dynamic Routes

\`\`\`
app/blog/[slug]/page.tsx    → /blog/:slug
app/shop/[...slug]/page.tsx → /shop/a, /shop/a/b, /shop/a/b/c
app/admin/[[...slug]]/page.tsx → /admin, /admin/users, dll (optional)
\`\`\`

## Route Groups (Organize without URL)

\`\`\`
app/(marketing)/page.tsx     → /
app/(marketing)/about/page.tsx → /about
app/(dashboard)/page.tsx     → / (different layout!)

Folder dalam () tidak mempengaruhi URL!
\`\`\`

## generateStaticParams (Dynamic SSG)

\`\`\`tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map(post => ({ slug: post.slug }));
}
// Pre-render semua blog post saat build!
\`\`\`
  `,

  quiz: [
    { question: "layout.tsx?", options: ["Page", "Wrapper yang persisten antar navigasi", "Error", "Loading"], correctAnswer: 1 },
    { question: "loading.tsx?", options: ["Error", "Otomatis tampil saat page loading (React Suspense)", "Layout", "API"], correctAnswer: 1 },
    { question: "Route group?", options: ["URL prefix", "(folder) - organize tanpa mempengaruhi URL", "Dynamic route", "API route"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Blog dengan App Router",
      language: "tsx",
      code: `// app/blog/page.tsx
import Link from 'next/link';

export default async function BlogPage() {
    const posts = await fetch('https://api.example.com/posts')
        .then(res => res.json());
    
    return (
        <div>
            <h1>Blog</h1>
            {posts.map(post => (
                <article key={post.id}>
                    <Link href={\`/blog/\${post.slug}\`}>
                        <h2>{post.title}</h2>
                    </Link>
                </article>
            ))}
        </div>
    );
}

// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
    const post = await getPost(params.slug);
    return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }) {
    const post = await getPost(params.slug);
    return <article><h1>{post.title}</h1><p>{post.content}</p></article>;
}`
    }
  ]
};