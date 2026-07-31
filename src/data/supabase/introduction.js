export const chapter = {
  slug: "introduction",
  title: "Pengenalan Supabase",
  description: "Memahami Supabase sebagai alternatif open-source untuk Firebase.",
  icon: "SiSupabase",
  color: "#3ECF8E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["supabase", "backend", "database", "auth", "realtime"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Supabase?

Supabase adalah platform backend-as-a-service (BaaS) open-source yang merupakan alternatif dari Firebase. Supabase menggunakan PostgreSQL sebagai database utama.

## Fitur Utama Supabase

| Fitur | Deskripsi |
|-------|-----------|
| **Database** | PostgreSQL dengan auto-generated API |
| **Authentication** | Email, OAuth, Magic Link, SSO |
| **Storage** | File storage dengan S3-compatible |
| **Realtime** | WebSocket untuk data realtime |
| **Edge Functions** | Serverless functions di edge |
| **RLS** | Row Level Security untuk keamanan |
| **Dashboard** | Admin UI untuk mengelola data |

## Kelebihan Supabase

1. **Open Source** - Kode terbuka, bisa self-hosted
2. **PostgreSQL** - Database relasional powerful
3. **SQL** - Bisa pakai SQL langsung
4. **Realtime** - Data realtime out-of-the-box
5. **Scalable** - Bisa scale dengan mudah
6. **Security** - RLS untuk keamanan data

## Instalasi

\`\`\`bash
# Install Supabase client
npm install @supabase/supabase-js

# Install Supabase CLI (opsional)
npm install -g supabase

# Initialize Supabase project
supabase init
\`\`\`

## Setup Client

\`\`\`javascript
import { createClient } from '@supabase/supabase-js';

// Environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Create client
const supabase = createClient(supabaseUrl, supabaseKey);

// Or with options
const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
});

export default supabase;
\`\`\`

## Dasar-Dasar Query

\`\`\`javascript
// SELECT
const { data, error } = await supabase
    .from('users')
    .select('*');

// SELECT with filter
const { data, error } = await supabase
    .from('users')
    .select('id, name, email')
    .eq('status', 'active')
    .order('created_at', { ascending: false });

// INSERT
const { data, error } = await supabase
    .from('users')
    .insert([
        { name: 'John Doe', email: 'john@example.com' }
    ]);

// UPDATE
const { data, error } = await supabase
    .from('users')
    .update({ status: 'inactive' })
    .eq('id', 1);

// DELETE
const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('id', 1);
\`\`\`

## Perbandingan Supabase vs Firebase

| Fitur | Supabase | Firebase |
|-------|----------|----------|
| **Database** | PostgreSQL | Firestore |
| **Open Source** | ✅ | ❌ |
| **SQL** | ✅ | ❌ |
| **Realtime** | ✅ (WebSocket) | ✅ |
| **Auth** | ✅ | ✅ |
| **Storage** | ✅ | ✅ |
| **Edge Functions** | ✅ (Deno) | ✅ (Cloud Functions) |
| **Self-Hosted** | ✅ | ❌ |
| **Pricing** | Generous free tier | Generous free tier |

## Use Cases

1. **SaaS Applications** - Database + Auth + Storage
2. **Real-time Apps** - Chat, live updates
3. **Mobile Apps** - React Native, Flutter
4. **Next.js Projects** - Fullstack with SSR
5. **Open Source Projects** - Self-hosted options

## Studi Kasus

\`\`\`javascript
// Todo App example
const supabase = createClient(url, key);

// Get todos
const getTodos = async () => {
    const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
};

// Add todo
const addTodo = async (title) => {
    const { data, error } = await supabase
        .from('todos')
        .insert([{ title, user_id: userId }]);
    
    if (error) throw error;
    return data;
};

// Toggle todo
const toggleTodo = async (id, completed) => {
    const { data, error } = await supabase
        .from('todos')
        .update({ completed: !completed })
        .eq('id', id);
    
    if (error) throw error;
    return data;
};

// Delete todo
const deleteTodo = async (id) => {
    const { data, error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);
    
    if (error) throw error;
    return data;
};
\`\`\`
  `,
  quiz: [
    {
      question: "Database yang digunakan Supabase adalah?",
      options: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Firestore"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa kepanjangan RLS?",
      options: [
        "Row Level Security",
        "Record Level Security",
        "Role Level Security",
        "Resource Level Security"
      ],
      correctAnswer: 0
    },
    {
      question: "Supabase adalah alternatif dari?",
      options: [
        "Firebase",
        "AWS",
        "Heroku",
        "Netlify"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Supabase Setup",
      code: `// lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// lib/supabase-server.js (for server-side)
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

// middleware.js (Next.js)
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    await supabase.auth.getSession();
    return res;
}

// app/layout.jsx (Next.js App Router)
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function RootLayout({ children }) {
    const supabase = createServerComponentClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}`,
      language: "javascript"
    }
  ]
};