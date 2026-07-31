export const chapter = {
  slug: "next-js-server-components",
  title: "Server Components",
  description: "Pahami React Server Components (RSC) - paradigma baru di Next.js App Router.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["next-js-app-router"],
  tags: ["nextjs", "server-components", "rsc", "react"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Server vs Client Components

| | Server Component | Client Component |
|---|-----------------|-----------------|
| Directive | (default) | 'use client' |
| Render | Di server | Di browser |
| JavaScript | 0 KB ke client | Full JS ke client |
| State/Effects | ❌ | ✅ |
| Event handlers | ❌ | ✅ |
| Browser APIs | ❌ | ✅ |
| Database access | ✅ Direct | ❌ (via API) |
| SEO | ✅ Excellent | ⚠️ Perlu hydration |

## Server Component (Default)

\`\`\`tsx
// app/page.tsx
// Ini Server Component (default, tidak perlu 'use client')
import { db } from '@/lib/database';

export default async function HomePage() {
    const users = await db.user.findMany();  // Langsung akses database!
    
    return (
        <div>
            <h1>Users ({users.length})</h1>
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}
\`\`\`

## Client Component

\`\`\`tsx
'use client';  // WAJIB di baris pertama!

import { useState, useEffect } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('Mounted di browser!');
    }, []);
    
    return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}
\`\`\`

## When to Use What?

| Scenario | Use |
|----------|-----|
| Fetch data dari database | Server Component |
| Akses file system | Server Component |
| Secret keys/tokens | Server Component |
| State management (useState, useReducer) | Client Component |
| useEffect | Client Component |
| Event handlers (onClick, onChange) | Client Component |
| Browser APIs (localStorage, geolocation) | Client Component |
| Custom hooks | Client Component |

## Composition Pattern

\`\`\`tsx
// Server Component (parent)
import { Counter } from './Counter'; // Client component

export default async function Page() {
    const data = await fetchData(); // Server-side
    
    return (
        <div>
            <h1>{data.title}</h1>
            {/* Client component sebagai child */}
            <Counter />
        </div>
    );
}
\`\`\`

## Server Actions (Alpha → Stable)

\`\`\`tsx
// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
    const title = formData.get('title');
    await db.post.create({ data: { title } });
    revalidatePath('/posts'); // Revalidate cache
}

// app/page.tsx
import { createPost } from './actions';

export default function Page() {
    return (
        <form action={createPost}>
            <input name="title" />
            <button type="submit">Create</button>
        </form>
    );
}
\`\`\`
  `,

  quiz: [
    { question: "Server Component: can use useState?", options: ["Yes", "No (Client Component only)", "Via plugin", "Deprecated"], correctAnswer: 1 },
    { question: "'use client'?", options: ["Server component", "Client component directive", "API route", "Middleware"], correctAnswer: 1 },
    { question: "Server Actions?", options: ["Client-side", "Server-side mutations (form handling)", "Redux", "Router"], correctAnswer: 1 }
  ],

  codeExamples: []
};