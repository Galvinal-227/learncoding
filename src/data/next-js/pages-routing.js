export const chapter = {
  slug: "next-js-pages-routing",
  title: "Pages Router (Legacy)",
  description: "Pahami Pages Router Next.js: file-based routing, getStaticProps, getServerSideProps.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["next-js-introduction"],
  tags: ["nextjs", "pages-router", "legacy", "routing"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Pages Router

Pages Router adalah **routing system original** Next.js. File di dalam \`pages/\` otomatis jadi route. Masih banyak project production yang menggunakannya.

## File-Based Routing

\`\`\`
pages/
├── index.tsx           → /
├── about.tsx           → /about
├── blog/
│   ├── index.tsx       → /blog
│   └── [slug].tsx      → /blog/:slug (dynamic)
├── posts/
│   └── [...slug].tsx   → /posts/a, /posts/a/b (catch-all)
├── api/
│   └── users.ts        → /api/users
├── _app.tsx            → Custom App (global wrapper)
└── _document.tsx       → Custom Document (HTML shell)
\`\`\`

## Basic Page

\`\`\`tsx
// pages/index.tsx
export default function HomePage() {
    return <h1>Welcome!</h1>;
}

// pages/about.tsx
export default function AboutPage() {
    return <h1>About Us</h1>;
}
\`\`\`

## Dynamic Routes

\`\`\`tsx
// pages/blog/[slug].tsx
import { useRouter } from 'next/router';

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    
    return <h1>Post: {slug}</h1>;
}
\`\`\`

## getStaticProps (SSG)

\`\`\`tsx
// pages/blog/[slug].tsx
export async function getStaticPaths() {
    const posts = await fetchPosts();
    return {
        paths: posts.map(p => ({ params: { slug: p.slug } })),
        fallback: false  // true | 'blocking'
    };
}

export async function getStaticProps({ params }) {
    const post = await fetchPost(params.slug);
    return {
        props: { post },
        revalidate: 3600  // ISR: regenerate setiap 1 jam
    };
}

export default function BlogPost({ post }) {
    return <article><h1>{post.title}</h1></article>;
}
\`\`\`

## getServerSideProps (SSR)

\`\`\`tsx
// pages/dashboard.tsx
export async function getServerSideProps(context) {
    const { req, res } = context;
    const session = await getSession(req);
    
    if (!session) {
        return { redirect: { destination: '/login', permanent: false } };
    }
    
    const data = await fetchDashboardData(session.user.id);
    return { props: { data } };
}

export default function Dashboard({ data }) {
    return <div>{/* Dashboard with fresh data */}</div>;
}
\`\`\`

## _app.tsx (Custom App)

\`\`\`tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
}
\`\`\`

## _document.tsx (Custom Document)

\`\`\`tsx
// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="id">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
\`\`\`

## Pages Router vs App Router

| | Pages Router | App Router |
|---|-------------|------------|
| Direktori | \`pages/\` | \`app/\` |
| Layout | \`_app.tsx\` + \`_document.tsx\` | \`layout.tsx\` (nested) |
| Data fetching | getStaticProps, getServerSideProps | Async component, fetch |
| Server Components | ❌ | ✅ |
| Loading | Manual | \`loading.tsx\` |
| Error | Manual | \`error.tsx\` |
| Status | Stable, legacy | Recommended |
  `,

  quiz: [
    { question: "getStaticProps?", options: ["SSR", "SSG - fetch data at build time", "Client fetch", "API route"], correctAnswer: 1 },
    { question: "getServerSideProps?", options: ["SSG", "SSR - fetch data setiap request", "Client", "Build time"], correctAnswer: 1 },
    { question: "_app.tsx?", options: ["Page", "Custom App (global wrapper)", "Layout", "API"], correctAnswer: 1 }
  ],

  codeExamples: []
};