export const chapter = {
  slug: "prisma-client",
  title: "Prisma Client (CRUD)",
  description: "Gunakan Prisma Client untuk CRUD operations dengan type-safety.",
  icon: "SiPrisma",
  color: "#2D3748",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["prisma-schema", "prisma-migrations"],
  tags: ["prisma", "client", "crud", "queries"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup

\`\`\`javascript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query', 'error', 'warn']  // Development logging
});

// Graceful shutdown
process.on('beforeExit', async () => {
    await prisma.$disconnect();
});
\`\`\`

## Create

\`\`\`javascript
// Single
const user = await prisma.user.create({
    data: {
        name: 'Budi',
        email: 'budi@email.com',
        age: 25
    }
});

// With relations
const userWithPosts = await prisma.user.create({
    data: {
        name: 'Budi',
        email: 'budi@email.com',
        posts: {
            create: [
                { title: 'Post 1', content: 'Content 1' },
                { title: 'Post 2', content: 'Content 2' }
            ]
        }
    },
    include: { posts: true }
});

// Create many
const users = await prisma.user.createMany({
    data: [
        { name: 'Budi', email: 'budi@email.com' },
        { name: 'Siti', email: 'siti@email.com' }
    ],
    skipDuplicates: true
});
\`\`\`

## Read

\`\`\`javascript
// Find by ID
const user = await prisma.user.findUnique({
    where: { id: 1 }
});

// Find first
const firstUser = await prisma.user.findFirst({
    where: { age: { gte: 18 } },
    orderBy: { createdAt: 'desc' }
});

// Find many
const users = await prisma.user.findMany({
    where: { isActive: true },
    select: { id: true, name: true, email: true },  // Projection
    orderBy: { name: 'asc' },
    skip: 0,
    take: 10
});

// Count
const total = await prisma.user.count({
    where: { age: { gte: 18 } }
});

// Distinct
const roles = await prisma.user.findMany({
    distinct: ['role'],
    select: { role: true }
});
\`\`\`

## Update

\`\`\`javascript
// Update one
const updated = await prisma.user.update({
    where: { id: 1 },
    data: { name: 'Budi Updated', age: { increment: 1 } }
});

// Update many
const result = await prisma.user.updateMany({
    where: { age: { lt: 18 } },
    data: { role: 'MINOR' }
});

// Upsert (update or create)
const user = await prisma.user.upsert({
    where: { email: 'budi@email.com' },
    update: { name: 'Budi Updated' },
    create: { name: 'Budi', email: 'budi@email.com' }
});
\`\`\`

## Delete

\`\`\`javascript
// Delete one
const deleted = await prisma.user.delete({
    where: { id: 1 }
});

// Delete many
const result = await prisma.user.deleteMany({
    where: { isActive: false }
});

// Delete all
await prisma.user.deleteMany();
\`\`\`

## Singleton Pattern (Next.js)

\`\`\`typescript
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
\`\`\`
  `,

  quiz: [
    { question: "upsert?", options: ["Update", "Update or create (insert if not exists)", "Delete", "Create"], correctAnswer: 1 },
    { question: "findMany: take?", options: ["Skip", "Limit (pagination)", "Order", "Filter"], correctAnswer: 1 }
  ],

  codeExamples: []
};