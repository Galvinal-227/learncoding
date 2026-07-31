export const chapter = {
  slug: "next-js-server-side-rendering",
  title: "Server-Side Rendering (SSR)",
  description: "Render halaman di server setiap request untuk data yang selalu fresh.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["next-js-app-router"],
  tags: ["nextjs", "ssr", "dynamic", "cookies"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu SSR?

Server-Side Rendering = halaman di-**render di server setiap request**. Data selalu **fresh**, cocok untuk dashboard, halaman yang dipersonalisasi.

## Dynamic Rendering (App Router)

Halaman jadi **dynamic** (SSR) jika menggunakan:

\`\`\`tsx
import { cookies, headers } from 'next/headers';

export default async function DashboardPage() {
    // Menggunakan cookies → otomatis SSR!
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    
    // Menggunakan headers → otomatis SSR!
    const headersList = headers();
    const userAgent = headersList.get('user-agent');
    
    // Fetch dengan cache: 'no-store' → SSR!
    const data = await fetch('https://api.example.com/data', {
        cache: 'no-store'  // Atau next: { revalidate: 0 }
    }).then(res => res.json());
    
    return <div>{/* Dashboard content */}</div>;
}
\`\`\`

## Force Dynamic

\`\`\`tsx
// app/dashboard/page.tsx
export const dynamic = 'force-dynamic';  // Force SSR
// export const dynamic = 'force-static'; // Force SSG
// export const dynamic = 'auto';         // Default

export default async function Page() {
    const data = await fetchData();
    return <div>{data}</div>;
}
\`\`\`

## Streaming (Loading)

\`\`\`tsx
import { Suspense } from 'react';

export default function Page() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<div>Loading stats...</div>}>
                <Stats />
            </Suspense>
            <Suspense fallback={<div>Loading chart...</div>}>
                <Chart />
            </Suspense>
        </div>
    );
}

async function Stats() {
    const stats = await fetchStats(); // Slow query
    return <div>{/* Stats UI */}</div>;
}
\`\`\`
  `,

  quiz: [
    { question: "SSR trigger?", options: ["Static import", "cookies(), headers(), cache: 'no-store'", "Client component", "Image component"], correctAnswer: 1 },
    { question: "dynamic = 'force-dynamic'?", options: ["Static", "Force SSR setiap request", "ISR", "No render"], correctAnswer: 1 }
  ],

  codeExamples: []
};