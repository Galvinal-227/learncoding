export const chapter = {
  slug: "next-js-api-routes",
  title: "API Routes",
  description: "Bangun REST API dengan Next.js API Routes dan Route Handlers.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["next-js-app-router"],
  tags: ["nextjs", "api", "routes", "backend"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Pages Router (Legacy)

\`\`\`ts
// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const users = await getUsers();
        return res.status(200).json(users);
    }
    if (req.method === 'POST') {
        const user = await createUser(req.body);
        return res.status(201).json(user);
    }
    return res.status(405).json({ error: 'Method not allowed' });
}
\`\`\`

## App Router - Route Handlers

\`\`\`ts
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    
    const users = await getUsers({ page: Number(page) });
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const user = await createUser(body);
    return NextResponse.json(user, { status: 201 });
}
\`\`\`

## Dynamic API Routes

\`\`\`ts
// app/api/users/[id]/route.ts
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const user = await getUser(params.id);
    if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(user);
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    await deleteUser(params.id);
    return NextResponse.json(null, { status: 204 });
}
\`\`\`

## Cookies & Headers

\`\`\`ts
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    
    return NextResponse.json({ authenticated: !!token });
}

export async function POST() {
    cookies().set('token', 'abc123', {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 7 days
    });
    return NextResponse.json({ success: true });
}
\`\`\`

## CORS

\`\`\`ts
export async function GET() {
    return NextResponse.json(
        { data: 'hello' },
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        }
    );
}
\`\`\`
  `,

  quiz: [
    { question: "App Router API?", options: ["pages/api/", "app/api/...route.ts (Route Handlers)", "components/", "lib/"], correctAnswer: 1 },
    { question: "NextResponse.json()?", options: ["HTML", "JSON response helper", "Redirect", "Error"], correctAnswer: 1 }
  ],

  codeExamples: []
};