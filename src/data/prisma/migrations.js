export const chapter = {
  slug: "prisma-migrations",
  title: "Migrations",
  description: "Kelola database schema dengan Prisma Migrate: versioning, deploy, rollback.",
  icon: "SiPrisma",
  color: "#2D3748",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["prisma-schema"],
  tags: ["prisma", "migrations", "database", "versioning"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Prisma Migrate

\`\`\`bash
# Create migration (development)
npx prisma migrate dev --name add-user-table

# Apply migrations (production)
npx prisma migrate deploy

# Reset database (development only!)
npx prisma migrate reset

# Check migration status
npx prisma migrate status

# View migration SQL without applying
npx prisma migrate dev --create-only
\`\`\`

## Migration Workflow

\`\`\`
1. Edit prisma/schema.prisma
2. npx prisma migrate dev --name describe-change
3. Prisma generates SQL migration in prisma/migrations/
4. Commit migration files to Git
5. Deploy → npx prisma migrate deploy
\`\`\`

## Seeding

\`\`\`json
// package.json
{
    "prisma": {
        "seed": "tsx prisma/seed.ts"
    }
}
\`\`\`

\`\`\`typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    // Create admin user
    await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Admin',
            role: 'ADMIN'
        }
    });
    
    console.log('Database seeded!');
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
\`\`\`

\`\`\`bash
npx prisma db seed
\`\`\`
  `,

  quiz: [
    { question: "prisma migrate dev?", options: ["Production", "Create migration (development)", "Status", "Reset"], correctAnswer: 1 },
    { question: "prisma migrate deploy?", options: ["Dev only", "Apply migrations (production)", "Create", "Reset"], correctAnswer: 1 }
  ],

  codeExamples: []
};