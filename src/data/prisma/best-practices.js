export const chapter = {
  slug: "prisma-best-practices",
  title: "Best Practices",
  description: "Praktik terbaik Prisma: connection management, error handling, performance, security.",
  icon: "SiPrisma",
  color: "#2D3748",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["prisma-client"],
  tags: ["prisma", "best-practices", "performance", "security"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Singleton Prisma Client

\`\`\`typescript
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: process.env.NODE_ENV === 'development' 
        ? ['query', 'error', 'warn'] 
        : ['error']
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
\`\`\`

## 2. Connection Pooling

\`\`\`prisma
datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
    connectionLimit = 20  // Max connections
}
\`\`\`

## 3. Error Handling

\`\`\`typescript
import { Prisma } from '@prisma/client';

try {
    const user = await prisma.user.create({ data: { ... } });
} catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
            case 'P2002':  // Unique constraint
                console.error('Unique constraint violation');
                break;
            case 'P2025':  // Record not found
                console.error('Record not found');
                break;
            case 'P2003':  // Foreign key constraint
                console.error('Foreign key violation');
                break;
        }
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
        console.error('Validation error');
    }
}
\`\`\`

## 4. Performance

\`\`\`javascript
// ✅ Use select (only fields you need)
const users = await prisma.user.findMany({
    select: { id: true, name: true }
});

// ❌ Don't SELECT *
const users = await prisma.user.findMany();  // All fields

// ✅ Batch queries
const [users, count] = await prisma.$transaction([
    prisma.user.findMany({ take: 10 }),
    prisma.user.count()
]);

// ✅ Use cursor pagination for large datasets
// ❌ Avoid large offsets (OFFSET 10000)

// ✅ Index frequently queried fields
// @@index([email]) in schema
\`\`\`

## 5. Security

\`\`\`javascript
// ✅ Environment variables (never hardcode)
datasource db {
    url = env("DATABASE_URL")
}

// ✅ Parameterized queries (Prisma auto-handles)
const user = await prisma.user.findUnique({
    where: { email: userInput }  // Safe from SQL injection!
});

// ✅ Soft delete
model User {
    deletedAt DateTime?  // Soft delete
    isActive  Boolean @default(true)
}

// ❌ Don't expose raw queries with user input
await prisma.$executeRaw\`SELECT * FROM users WHERE email = \${userInput}\`;
\`\`\`

## 6. Monitoring

\`\`\`javascript
// Query timing
const prisma = new PrismaClient({
    log: [{ level: 'query', emit: 'event' }]
});

prisma.$on('query', (e) => {
    console.log(\`Query: \${e.query}\`);
    console.log(\`Duration: \${e.duration}ms\`);
});
\`\`\`

## Production Checklist

\`\`\`
✅ Singleton PrismaClient
✅ Connection pooling configured
✅ Error handling (try/catch with Prisma errors)
✅ Use select (not SELECT *)
✅ Cursor pagination for large datasets
✅ Indexes on query fields
✅ Environment variables (no hardcoded secrets)
✅ Prisma Studio only in development
✅ Regular migrations backup
✅ Query logging in development only
\`\`\`
  `,

  quiz: [
    { question: "Prisma error codes?", options: ["Ignore", "PrismaClientKnownRequestError (P2002, P2025)", "HTTP codes", "Node errors"], correctAnswer: 1 },
    { question: "Singleton PrismaClient?", options: ["New each time", "Single instance (Next.js pattern)", "Multiple", "No pattern"], correctAnswer: 1 }
  ],

  codeExamples: []
};