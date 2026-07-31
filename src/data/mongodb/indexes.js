export const chapter = {
  slug: "mongodb-indexes",
  title: "Indexes",
  description: "Optimasi query dengan indexes: single, compound, text, geospatial.",
  icon: "SiMongodb",
  color: "#47A248",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["mongodb-crud"],
  tags: ["mongodb", "indexes", "performance", "optimization"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Indexes?

Tanpa index = **COLLSCAN** (scan seluruh collection). Dengan index = **IXSCAN** (langsung ke data). Perbedaan: 100ms vs 0.1ms.

## Create Index

\`\`\`javascript
// Single field
await users.createIndex({ email: 1 });  // 1 = ASC, -1 = DESC

// Compound index
await users.createIndex({ email: 1, age: -1 });

// Unique index
await users.createIndex({ email: 1 }, { unique: true });

// Text index (search)
await posts.createIndex({ title: 'text', content: 'text' });

// TTL index (auto-delete)
await sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
\`\`\`

## List & Drop

\`\`\`javascript
const indexes = await users.indexes();
await users.dropIndex('email_1');
\`\`\`

## Explain (Query Analysis)

\`\`\`javascript
const explanation = await users.find({ email: 'budi@email.com' }).explain('executionStats');
console.log(explanation.executionStats.totalDocsExamined); // 1 (with index) vs 10000 (without)
\`\`\`

## Index Best Practices

\`\`\`
✅ Index fields yang sering di-query (WHERE)
✅ Compound index: ikuti ESR rule (Equality → Sort → Range)
✅ Index fields yang sering di-sort
✅ Gunakan explain() untuk analisis
❌ Jangan index setiap field (slow writes)
❌ Jangan index field dengan cardinality rendah (gender: M/F)
\`\`\`
  `,

  quiz: [
    { question: "COLLSCAN?", options: ["Fast", "Scan seluruh collection (lambat, no index)", "Index scan", "Partial scan"], correctAnswer: 1 },
    { question: "explain()?", options: ["Delete", "Analisis query performance", "Insert", "Update"], correctAnswer: 1 }
  ],

  codeExamples: []
};