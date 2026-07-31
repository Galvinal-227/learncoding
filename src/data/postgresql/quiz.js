export const chapter = {
  slug: "postgresql-quiz",
  title: "Quiz Akhir PostgreSQL",
  description: "Uji pemahamanmu tentang PostgreSQL.",
  icon: "SiPostgresql",
  color: "#4169E1",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["postgresql-nodejs"],
  tags: ["postgresql", "quiz"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir PostgreSQL\n\n10 soal.`,
  quiz: [
    { question: "PostgreSQL vs MySQL?", options: ["Sama", "Postgres: advanced (JSONB,PostGIS)", "MySQL features", "Postgres deprecated"], correctAnswer: 1 },
    { question: "JSONB?", options: ["Text", "Binary JSON (indexed, fast)", "XML", "CSV"], correctAnswer: 1 },
    { question: "Default port?", options: ["3306", "5432", "27017", "6379"], correctAnswer: 1 },
    { question: "tsvector?", options: ["Text", "Tokenized search document", "Query", "Index"], correctAnswer: 1 },
    { question: "PostGIS?", options: ["Text", "Geospatial extension", "Search", "Auth"], correctAnswer: 1 },
    { question: "pgvector?", options: ["Geo", "Vector similarity (AI embeddings)", "Cron", "UUID"], correctAnswer: 1 },
    { question: "GIN index?", options: ["B-tree", "Generalized Inverted Index (full-text, JSONB)", "Hash", "BRIN"], correctAnswer: 1 },
    { question: "EXPLAIN ANALYZE?", options: ["Explain plan", "Execute + show actual timings", "Explain only", "No analyze"], correctAnswer: 1 },
    { question: "pg Pool?", options: ["Single", "Connection pool", "ORM", "CLI"], correctAnswer: 1 },
    { question: "JSON ->> vs ->?", options: ["Same", "->>: text; ->: JSON", "->: text", "->> deprecated"], correctAnswer: 1 }
  ]
};