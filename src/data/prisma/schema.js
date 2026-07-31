export const chapter = {
  slug: "prisma-schema",
  title: "Schema Design",
  description: "Desain database schema dengan Prisma Schema Language: models, fields, attributes.",
  icon: "SiPrisma",
  color: "#2D3748",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["prisma-introduction"],
  tags: ["prisma", "schema", "models", "relations"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Prisma Schema Structure

\`\`\`prisma
// 1. Data Source
datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}

// 2. Generator
generator client {
    provider = "prisma-client-js"
}

// 3. Models
model User {
    id    Int    @id @default(autoincrement())
    email String @unique
    name  String?
}
\`\`\`

## Field Types

| Type | Deskripsi |
|------|-----------|
| **String** | Text |
| **Int** | Integer |
| **Float** | Floating point |
| **Boolean** | True/false |
| **DateTime** | Timestamp |
| **Json** | JSON data |
| **Bytes** | Binary data |
| **Decimal** | Precise decimal |
| **BigInt** | Large integer |
| **Enum** | Custom enum |

## Attributes

### Field Attributes
\`\`\`prisma
model User {
    id        Int      @id @default(autoincrement())
    email     String   @unique
    name      String?  // Optional
    age       Int      @default(18)
    role      Role     @default(USER)
    bio       String   @db.VarChar(500)  // Custom column type
    score     Float    @default(0)
    isActive  Boolean  @default(true)
    createdAt DateTime @default(now()) @map("created_at")
    updatedAt DateTime @updatedAt @map("updated_at")
}
\`\`\`

### Block Attributes
\`\`\`prisma
model User {
    id    Int    @id
    email String
    
    @@unique([email])         // Single field unique
    @@index([name])           // Index
    @@unique([name, email])   // Composite unique
    @@index([role, createdAt]) // Composite index
    @@map("users")            // Custom table name
}
\`\`\`

## Enums

\`\`\`prisma
enum Role {
    USER
    ADMIN
    MODERATOR
    SUPER_ADMIN
}

model User {
    role Role @default(USER)
}
\`\`\`

## Relations

### One-to-Many
\`\`\`prisma
model User {
    id    Int    @id @default(autoincrement())
    posts Post[]
}

model Post {
    id       Int  @id @default(autoincrement())
    author   User @relation(fields: [authorId], references: [id])
    authorId Int
}
\`\`\`

### One-to-One
\`\`\`prisma
model User {
    id      Int      @id
    profile Profile?
}

model Profile {
    id     Int  @id
    user   User @relation(fields: [userId], references: [id])
    userId Int  @unique
}
\`\`\`

### Many-to-Many
\`\`\`prisma
model Post {
    id       Int       @id
    tags     PostTag[]
}

model Tag {
    id    Int       @id
    posts PostTag[]
}

model PostTag {
    postId Int
    tagId  Int
    post   Post @relation(fields: [postId], references: [id])
    tag    Tag  @relation(fields: [tagId], references: [id])
    @@id([postId, tagId])
}
\`\`\`

## Multi-Schema (PostgreSQL)

\`\`\`prisma
datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
    schemas  = ["public", "private"]
}

model User {
    id Int @id
    @@schema("private")  // Table in 'private' schema
}
\`\`\`
  `,

  quiz: [
    { question: "@unique?", options: ["Optional", "Unique constraint (no duplicates)", "Primary key", "Index"], correctAnswer: 1 },
    { question: "@relation?", options: ["Column", "Define relationship between models", "Index", "Map name"], correctAnswer: 1 }
  ],

  codeExamples: []
};