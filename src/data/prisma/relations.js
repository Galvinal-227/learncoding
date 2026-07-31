export const chapter = {
  slug: "prisma-relations",
  title: "Relations & Queries",
  description: "Kuasai relasi di Prisma: include, select, nested queries, dan aggregation.",
  icon: "SiPrisma",
  color: "#2D3748",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["prisma-client"],
  tags: ["prisma", "relations", "include", "nested"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Include (Eager Loading)

\`\`\`javascript
// Include relations
const user = await prisma.user.findUnique({
    where: { id: 1 },
    include: {
        posts: true,
        profile: true
    }
});

// Nested include (3 levels)
const user = await prisma.user.findUnique({
    where: { id: 1 },
    include: {
        posts: {
            include: {
                comments: {
                    include: { author: true }
                }
            }
        }
    }
});

// Filter included relations
const user = await prisma.user.findUnique({
    where: { id: 1 },
    include: {
        posts: {
            where: { published: true },
            orderBy: { createdAt: 'desc' },
            take: 5
        }
    }
});
\`\`\`

## Select (Projection)

\`\`\`javascript
// Select specific fields
const user = await prisma.user.findUnique({
    where: { id: 1 },
    select: {
        id: true,
        name: true,
        email: true,
        _count: {
            select: { posts: true, comments: true }
        }
    }
});
// { id: 1, name: 'Budi', email: 'budi@email.com', _count: { posts: 5, comments: 10 } }
\`\`\`

## Nested Writes

\`\`\`javascript
// Create with relations
const user = await prisma.user.create({
    data: {
        name: 'Budi',
        email: 'budi@email.com',
        posts: {
            create: [
                { title: 'Post 1', content: 'Content 1' },
                { title: 'Post 2', content: 'Content 2' }
            ]
        },
        profile: {
            create: { bio: 'Full-stack developer', city: 'Jakarta' }
        }
    },
    include: { posts: true, profile: true }
});

// Connect existing
const post = await prisma.post.create({
    data: {
        title: 'New Post',
        author: { connect: { id: 1 } },           // Connect by ID
        tags: {
            connectOrCreate: [                      // Connect or create
                { where: { name: 'tech' }, create: { name: 'tech' } }
            ]
        }
    }
});

// Disconnect
await prisma.user.update({
    where: { id: 1 },
    data: {
        posts: {
            disconnect: [{ id: 1 }, { id: 2 }]     // Remove relations
        }
    }
});
\`\`\`

## Filtering by Relations

\`\`\`javascript
// Find users who have at least 1 published post
const users = await prisma.user.findMany({
    where: {
        posts: {
            some: { published: true }
        }
    }
});

// Find users with ALL posts published
const users = await prisma.user.findMany({
    where: {
        posts: {
            every: { published: true }
        }
    }
});

// Find users with NO posts
const users = await prisma.user.findMany({
    where: {
        posts: { none: {} }
    }
});

// Find users with posts containing 'prisma'
const users = await prisma.user.findMany({
    where: {
        posts: {
            some: {
                title: { contains: 'prisma' }
            }
        }
    }
});
\`\`\`

## Aggregation on Relations

\`\`\`javascript
const users = await prisma.user.findMany({
    select: {
        name: true,
        _count: {
            select: {
                posts: true,
                comments: true
            }
        }
    },
    orderBy: {
        posts: { _count: 'desc' }  // Sort by post count!
    }
});
\`\`\`
  `,

  quiz: [
    { question: "include vs select?", options: ["Same", "include: relations; select: specific fields", "select: relations", "include: fields"], correctAnswer: 1 },
    { question: "some vs every?", options: ["Same", "some: at least one; every: all", "every: at least one", "some: all"], correctAnswer: 1 }
  ],

  codeExamples: []
};