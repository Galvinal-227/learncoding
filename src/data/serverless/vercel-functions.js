export const chapter = {
  slug: "serverless-vercel-functions",
  title: "Vercel Functions",
  description: "Bangun serverless functions dengan Vercel untuk frontend developers.",
  icon: "SiVercel",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["serverless-introduction"],
  tags: ["serverless", "vercel", "functions", "edge"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Vercel Functions

\`\`\`typescript
// api/hello.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    return NextResponse.json({ message: 'Hello from Vercel!' });
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    return NextResponse.json({ received: body });
}
\`\`\`

## Edge Functions

\`\`\`typescript
// middleware.ts
export const config = { runtime: 'edge' };

export default function middleware(request: Request) {
    const country = request.headers.get('x-vercel-ip-country');
    return new Response(JSON.stringify({ country }), {
        headers: { 'content-type': 'application/json' }
    });
}
\`\`\`

## Serverless vs Edge

| Serverless | Edge |
|-----------|------|
| Regional (1 location) | Global (CDN edge) |
| Node.js runtime | Lightweight runtime |
| Longer timeout | 30s max |
| All NPM packages | Limited APIs |
  `,
  quiz: [
    { question: "Vercel: api route?", options: ["pages/", "app/api/...route.ts", "src/", "public/"], correctAnswer: 1 },
    { question: "Edge runtime?", options: ["Regional", "Global CDN edge", "Database", "Local"], correctAnswer: 1 }
  ],
  codeExamples: []
};