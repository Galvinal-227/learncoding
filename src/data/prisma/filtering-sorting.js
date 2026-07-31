export const chapter = {
  slug: "prisma-filtering-sorting",
  title: "Filtering, Sorting & Pagination",
  description: "Kuasai query lanjutan: filter operators, sorting, cursor pagination.",
  icon: "SiPrisma",
  color: "#2D3748",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["prisma-client"],
  tags: ["prisma", "filtering", "sorting", "pagination"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Filter Operators

\`\`\`javascript
// Equality
{ where: { name: 'Budi' } }
{ where: { name: { equals: 'Budi' } } }
{ where: { name: { not: 'Budi' } } }
{ where: { name: { in: ['Budi', 'Siti'] } } }
{ where: { name: { notIn: ['Budi', 'Siti'] } } }

// String
{ where: { name: { contains: 'Bud' } } }
{ where: { name: { startsWith: 'Bu' } } }
{ where: { name: { endsWith: 'di' } } }
{ where: { name: { mode: 'insensitive' } } }

// Number
{ where: { age: { lt: 30 } } }       // <
{ where: { age: { lte: 30 } } }      // <=
{ where: { age: { gt: 18 } } }       // >
{ where: { age: { gte: 18 } } }      // >=
{ where: { age: { between: [18, 30] } } }

// Null
{ where: { bio: null } }             // IS NULL
{ where: { bio: { not: null } } }    // IS NOT NULL

// Date
{ where: { createdAt: { gte: new Date('2026-01-01') } } }
{ where: { createdAt: { lt: new Date() } } }

// AND / OR / NOT
{ where: {
    AND: [
        { age: { gte: 18 } },
        { isActive: true }
    ]
}}
{ where: {
    OR: [
        { name: { contains: 'Budi' } },
        { email: { contains: 'budi' } }
    ]
}}
{ where: {
    NOT: [
        { role: 'BANNED' }
    ]
}}
\`\`\`

## Sorting

\`\`\`javascript
const users = await prisma.user.findMany({
    orderBy: [
        { role: 'asc' },
        { createdAt: 'desc' }
    ]
});

// Sort by related field count
const users = await prisma.user.findMany({
    orderBy: {
        posts: { _count: 'desc' }
    }
});
\`\`\`

## Pagination

### Offset Pagination
\`\`\`javascript
const page = 3;
const limit = 10;

const users = await prisma.user.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: 'desc' }
});

const total = await prisma.user.count();
const totalPages = Math.ceil(total / limit);
\`\`\`

### Cursor Pagination (Recommended)
\`\`\`javascript
const users = await prisma.user.findMany({
    take: 10,
    cursor: { id: lastSeenId },  // Start after this ID
    skip: 1,                      // Skip the cursor itself
    orderBy: { id: 'asc' }
});

const nextCursor = users.length > 0 ? users[users.length - 1].id : null;
\`\`\`
  `,

  quiz: [
    { question: "contains vs startsWith?", options: ["Same", "contains: anywhere; startsWith: beginning", "startsWith: anywhere", "contains: beginning"], correctAnswer: 1 },
    { question: "Cursor pagination?", options: ["Page numbers", "Cursor-based (more efficient)", "Offset", "Random"], correctAnswer: 1 }
  ],

  codeExamples: []
};