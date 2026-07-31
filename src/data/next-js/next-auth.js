export const chapter = {
  slug: "next-js-next-auth",
  title: "Authentication (NextAuth.js)",
  description: "Implementasi authentication dengan NextAuth.js (Auth.js) - OAuth, credentials, database sessions.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["next-js-api-routes"],
  tags: ["nextjs", "auth", "nextauth", "oauth"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup NextAuth.js v5 (Auth.js)

\`\`\`bash
npm install next-auth@beta
npx auth secret  # Generate AUTH_SECRET
\`\`\`

## Basic Configuration

\`\`\`ts
// app/api/auth/[...nextauth]/route.ts
import { handlers } from '@/auth';
export const { GET, POST } = handlers;
\`\`\`

\`\`\`ts
// auth.ts
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({ clientId: process.env.GOOGLE_CLIENT_ID!, clientSecret: process.env.GOOGLE_CLIENT_SECRET! }),
        GitHub({ clientId: process.env.GITHUB_ID!, clientSecret: process.env.GITHUB_SECRET! }),
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const user = await verifyCredentials(credentials);
                return user || null;
            }
        })
    ],
    session: { strategy: 'jwt' },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token }) {
            if (session.user) session.user.role = token.role;
            return session;
        }
    },
    pages: {
        signIn: '/login',
        error: '/auth/error'
    }
});
\`\`\`

## Use in Components

\`\`\`tsx
// Server Component
import { auth } from '@/auth';

export default async function ProfilePage() {
    const session = await auth();
    
    if (!session) return <p>Please login</p>;
    
    return (
        <div>
            <h1>Welcome, {session.user?.name}!</h1>
            <p>Email: {session.user?.email}</p>
            <p>Role: {session.user?.role}</p>
        </div>
    );
}
\`\`\`

\`\`\`tsx
// Client Component
'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export function AuthButton() {
    const { data: session, status } = useSession();
    
    if (status === 'loading') return <p>Loading...</p>;
    
    if (session) {
        return (
            <div>
                <p>Signed in as {session.user?.name}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }
    
    return <button onClick={() => signIn()}>Sign in</button>;
}
\`\`\`

## Middleware (Protect Routes)

\`\`\`ts
// middleware.ts
export { auth as middleware } from '@/auth';

export const config = {
    matcher: ['/dashboard/:path*', '/profile/:path*']
};
\`\`\`

## Role-Based Access

\`\`\`ts
// middleware.ts
import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
    const { pathname } = req.nextUrl;
    const session = req.auth;
    
    // Redirect if not logged in
    if (!session && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    
    // Admin only
    if (pathname.startsWith('/admin') && session?.user?.role !== 'admin') {
        return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
    
    return NextResponse.next();
});
\`\`\`
  `,

  quiz: [
    { question: "auth() di Server Component?", options: ["Hook", "await auth() - get session server-side", "useSession", "getServerSession"], correctAnswer: 1 },
    { question: "NextAuth middleware?", options: ["Manual check", "auth as middleware - protect routes", "Client only", "API only"], correctAnswer: 1 }
  ],

  codeExamples: []
};