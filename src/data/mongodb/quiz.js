export const chapter = {
  slug: "mongodb-quiz",
  title: "Quiz Akhir MongoDB",
  description: "Uji pemahamanmu tentang MongoDB.",
  icon: "SiMongodb",
  color: "#47A248",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["mongodb-atlas"],
  tags: ["mongodb", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir MongoDB\n\n15 soal.`,
  quiz: [
    { question: "MongoDB data model?", options: ["Tables", "Collections→Documents", "Graph", "Key-Value"], correctAnswer: 1 },
    { question: "insertOne return?", options: ["Doc", "{insertedId:ObjectId}", "Count", "Bool"], correctAnswer: 1 },
    { question: "$gte?", options: [">", ">=", "<", "="], correctAnswer: 1 },
    { question: "$set?", options: ["Insert", "Update fields", "Delete", "Rename"], correctAnswer: 1 },
    { question: "$match?", options: ["Group", "Filter (WHERE)", "Join", "Sort"], correctAnswer: 1 },
    { question: "$lookup?", options: ["Filter", "JOIN collection", "Group", "Sort"], correctAnswer: 1 },
    { question: "$unwind?", options: ["Group", "Expand array", "Filter", "Join"], correctAnswer: 1 },
    { question: "COLLSCAN?", options: ["Fast", "Scan semua (no index)", "Index scan", "Partial"], correctAnswer: 1 },
    { question: "Mongoose?", options: ["Driver", "ODM (schema + validation)", "Database", "GUI"], correctAnswer: 1 },
    { question: "Populate?", options: ["Delete", "Join reference", "Count", "Sort"], correctAnswer: 1 },
    { question: "Pre-save?", options: ["After", "Before save (middleware)", "Query", "Delete"], correctAnswer: 1 },
    { question: "Atlas free tier?", options: ["10GB", "512MB (M0)", "5GB", "Unlimited"], correctAnswer: 1 },
    { question: "explain()?", options: ["Delete", "Analisis query", "Insert", "Update"], correctAnswer: 1 },
    { question: "MongoDB vs SQL?", options: ["Sama", "Mongo: flexible; SQL: fixed schema", "SQL flexible", "Mongo deprecated"], correctAnswer: 1 },
    { question: "Connection string?", options: ["mongodb://", "mongodb+srv://", "http://", "atlas://"], correctAnswer: 1 }
  ]
};