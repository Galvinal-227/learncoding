export const chapter = {
  slug: "prisma-quiz",
  title: "Quiz Akhir Prisma",
  description: "Uji pemahamanmu tentang Prisma ORM.",
  icon: "SiPrisma",
  color: "#2D3748",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["prisma-best-practices"],
  tags: ["prisma", "quiz"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Prisma\n\n10 soal.`,
  quiz: [
    { question: "Prisma vs Sequelize?", options: ["Sama", "Prisma: modern, type-safe; Sequelize: traditional", "Sequelize: newer", "Prisma deprecated"], correctAnswer: 1 },
    { question: "Schema file?", options: ["schema.js", "prisma/schema.prisma", "models/", "db.json"], correctAnswer: 1 },
    { question: "prisma migrate dev?", options: ["Production", "Create migration (dev)", "Status", "Reset"], correctAnswer: 1 },
    { question: "upsert?", options: ["Update", "Update or create", "Delete", "Create"], correctAnswer: 1 },
    { question: "@relation?", options: ["Column", "Relationship between models", "Index", "Map"], correctAnswer: 1 },
    { question: "include vs select?", options: ["Same", "include: relations; select: fields", "select: relations", "include: fields"], correctAnswer: 1 },
    { question: "prisma.$transaction?", options: ["One query", "Multiple queries in one transaction", "Logging", "Error"], correctAnswer: 1 },
    { question: "prisma migrate deploy?", options: ["Dev", "Apply migrations (production)", "Create", "Reset"], correctAnswer: 1 },
    { question: "Singleton pattern?", options: ["New each time", "Single PrismaClient instance (Next.js)", "Multiple instances", "No pattern"], correctAnswer: 1 },
    { question: "Prisma engine?", options: ["JavaScript", "Rust (binary, performance)", "Python", "Go"], correctAnswer: 1 }
  ]
};