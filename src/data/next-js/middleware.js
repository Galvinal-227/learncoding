export const chapter = {
  slug: "next-js-middleware",
  title: "Middleware",
  description: "Gunakan Next.js Middleware untuk auth, redirects, A/B testing, dan geo-blocking.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["next-js-app-router"],
  tags: ["nextjs", "middleware", "edge", "auth"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Middleware?

Middleware berjalan di **Edge** (sebelum request sampai ke aplikasi). Bisa digunakan untuk **authentication, redirects, A/B testing, geo-blocking, bot protection**.

## Basic Middleware

\`\`\`ts
// middleware.ts (di root project, sejajar dengan app/)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    
    // Logging
    console.log(\`\${request.method} \${pathname}\`);
    
    // Redirect
    if (pathname === '/old-page') {
        return NextResponse.redirect(new URL('/new-page', request.url));
    }
    
    // Rewrite (URL tetap, konten berbeda)
    if (pathname.startsWith('/blog')) {
        return NextResponse.rewrite(new URL('/posts' + pathname, request.url));
    }
    
    return NextResponse.next();
}

// Config: route mana yang di-middleware
export const config = {
    matcher: ['/dashboard/:path*', '/api/:path*']
    // matcher: ['/((?!api|_next/static|favicon.ico).*)']  // All routes
};
\`\`\`

## Authentication Middleware

\`\`\`ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
    const { pathname } = request.nextUrl;
    
    // Allow auth pages
    if (pathname.startsWith('/login') || pathname.startsWith('/api/auth')) {
        return NextResponse.next();
    }
    
    // Redirect to login if not authenticated
    if (!token && pathname.startsWith('/dashboard')) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(loginUrl);
    }
    
    // Admin only
    if (pathname.startsWith('/admin') && token?.role !== 'admin') {
        return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*', '/login']
};
\`\`\`

## Geo-blocking

\`\`\`ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const country = request.geo?.country || 'US';
    
    // Block certain countries
    const blocked = ['CN', 'RU', 'KP'];
    if (blocked.includes(country)) {
        return new NextResponse('Access denied', { status: 403 });
    }
    
    // Redirect based on locale
    if (country === 'ID' && !request.nextUrl.pathname.startsWith('/id')) {
        return NextResponse.redirect(new URL('/id' + request.nextUrl.pathname, request.url));
    }
    
    return NextResponse.next();
}
\`\`\`

## A/B Testing

\`\`\`ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const cookie = request.cookies.get('variant');
    const variant = cookie?.value || (Math.random() < 0.5 ? 'A' : 'B');
    
    const response = NextResponse.next();
    
    if (!cookie) {
        response.cookies.set('variant', variant, { maxAge: 60 * 60 * 24 * 30 });
    }
    
    // Rewrite to variant page
    if (variant === 'B' && request.nextUrl.pathname === '/') {
        return NextResponse.rewrite(new URL('/home-b', request.url));
    }
    
    return response;
}
\`\`\`

## Rate Limiting (Simple)

\`\`\`ts
const rateLimit = new Map<string, { count: number; resetTime: number }>();

export function middleware(request: NextRequest) {
    const ip = request.ip || 'anonymous';
    const now = Date.now();
    const limit = 100;
    const windowMs = 60 * 1000; // 1 minute
    
    const record = rateLimit.get(ip) || { count: 0, resetTime: now + windowMs };
    
    if (now > record.resetTime) {
        record.count = 0;
        record.resetTime = now + windowMs;
    }
    
    record.count++;
    rateLimit.set(ip, record);
    
    if (record.count > limit) {
        return new NextResponse('Too Many Requests', { status: 429 });
    }
    
    return NextResponse.next();
}
\`\`\`
  `,

  quiz: [
    { question: "Middleware runs at?", options: ["Browser", "Edge (before request)", "Database", "Build time"], correctAnswer: 1 },
    { question: "NextResponse.redirect()?", options: ["Log", "Redirect to another URL", "Rewrite", "Error"], correctAnswer: 1 }
  ],

  codeExamples: []
};