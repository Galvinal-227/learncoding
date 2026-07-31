export const chapter = {
  slug: "prisma-introduction",
  title: "Pengenalan Prisma",
  description: "Pahami apa itu Prisma, kenapa jadi ORM modern #1, dan arsitekturnya.",
  icon: "SiPrisma",
  color: "#2D3748",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["node-js-introduction", "typescript-introduction"],
  tags: ["prisma", "orm", "database", "typescript"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Prisma?

Prisma adalah **ORM (Object-Relational Mapping) modern** untuk Node.js dan TypeScript. Menggantikan raw SQL dan query builder tradisional dengan type-safe API.

## Kenapa Prisma?

- 🔒 **Type-safe** - Auto-generated types dari schema
- 🧠 **IntelliSense** - Autocomplete di VS Code
- 📖 **Readable** - API yang intuitif (bukan SQL mentah)
- 🔄 **Migrations** - Version control untuk database
- 📊 **Prisma Studio** - GUI untuk browse/edit data
- 🌐 **Multi-DB** - PostgreSQL, MySQL, SQLite, MongoDB, SQL Server
- ⚡ **Performance** - Optimized queries

## Arsitektur Prisma

\`\`\`
┌─────────────────────────────────┐
│         Your Application        │
│     (Prisma Client)             │
└─────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│         Prisma Client           │
│   (Generated, type-safe API)    │
└─────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│        Query Engine             │
│    (Rust binary, performa)      │
└─────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│           Database               │
│  (PostgreSQL, MySQL, SQLite...) │
└─────────────────────────────────┘
\`\`\`

## Prisma vs Sequelize vs TypeORM vs Knex

| | Prisma | Sequelize | TypeORM | Knex |
|---|--------|-----------|---------|------|
| TypeScript | ✅ First-class | ⚠️ Manual | ✅ | ⚠️ |
| Schema | Prisma Schema (own DSL) | JS/TS models | Decorators | Migrations |
| Migrations | ✅ Built-in | ✅ | ✅ | ✅ |
| Relations | ✅ Excellent | ✅ | ✅ | ❌ (manual) |
| Performance | ✅ Rust engine | ⚠️ JS | ⚠️ JS | ✅ Light |
| Learning | Rendah | Sedang | Tinggi | Sedang |
| Studio (GUI) | ✅ Prisma Studio | ❌ | ❌ | ❌ |

## Instalasi

\`\`\`bash
npm install prisma --save-dev
npm install @prisma/client

npx prisma init
# Creates: prisma/schema.prisma + .env
\`\`\`

## First Schema

\`\`\`prisma
// prisma/schema.prisma
generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}

model User {
    id        Int      @id @default(autoincrement())
    email     String   @unique
    name      String?
    posts     Post[]
    createdAt DateTime @default(now())
}

model Post {
    id        Int      @id @default(autoincrement())
    title     String
    content   String?
    published Boolean  @default(false)
    author    User     @relation(fields: [authorId], references: [id])
    authorId  Int
    createdAt DateTime @default(now())
}
\`\`\`

## Workflow

\`\`\`bash
# 1. Edit schema.prisma

# 2. Generate migration
npx prisma migrate dev --name init

# 3. Generate client
npx prisma generate

# 4. Use in code
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const users = await prisma.user.findMany();
\`\`\`
  `,

  quiz: [
    { question: "Prisma vs Sequelize?", options: ["Sama", "Prisma: modern, type-safe, own DSL", "Sequelize: newer", "Prisma deprecated"], correctAnswer: 1 },
    { question: "Prisma schema file?", options: ["schema.js", "prisma/schema.prisma", "models/", "db.json"], correctAnswer: 1 },
    { question: "Prisma generate?", options: ["Build", "Generate Prisma Client (type-safe API)", "Migrate", "Seed"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Prisma Quick Start",
      language: "bash",
      code: `# Init
npx prisma init

# Edit prisma/schema.prisma → define models

# Migrate
npx prisma migrate dev --name init

# Generate
npx prisma generate

# Studio (GUI)
npx prisma studio

# Seed
npx prisma db seed`
    }
  ]
};