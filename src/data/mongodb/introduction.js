export const chapter = {
  slug: "mongodb-introduction",
  title: "Pengenalan MongoDB",
  description: "Pahami apa itu MongoDB, NoSQL vs SQL, dan kapan menggunakannya.",
  icon: "SiMongodb",
  color: "#47A248",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["node-js-introduction"],
  tags: ["mongodb", "nosql", "database", "document"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu MongoDB?

MongoDB adalah **database NoSQL document-oriented**. Data disimpan sebagai **BSON** (Binary JSON) dalam **collections**. Dibuat tahun 2007, sekarang paling populer di kategori NoSQL.

## NoSQL vs SQL

| | SQL (PostgreSQL) | NoSQL (MongoDB) |
|---|-----------------|-----------------|
| Data model | Tables + Rows | Collections + Documents |
| Schema | Fixed, predefined | Flexible, dynamic |
| Relationships | JOINs | Embedded / References |
| Scaling | Vertical | Horizontal (sharding) |
| ACID | Full | Multi-document (v4.0+) |
| Use case | Structured data | Unstructured/semi-structured |

## Kenapa MongoDB?

- 🚀 **Flexible schema** - Tidak perlu define schema di awal
- ⚡ **Fast read/write** - JSON native, no JOIN needed
- 📈 **Horizontal scaling** - Sharding built-in
- 🔄 **Replication** - High availability (Replica Set)
- 🧩 **Aggregation Pipeline** - Powerful data processing
- ☁️ **Atlas** - Managed cloud database gratis 512MB

## Struktur Data MongoDB

\`\`\`
Database: myapp
  └── Collection: users
       ├── Document: { _id: ObjectId, name: "Budi", email: "budi@email.com" }
       ├── Document: { _id: ObjectId, name: "Siti", age: 25, hobbies: ["read"] }
       └── Document: { _id: ObjectId, name: "Agus", address: { city: "Jakarta" } }

⚠️ Setiap document bisa punya struktur BERBEDA!
\`\`\`

## MongoDB vs Mongoose

| | MongoDB Native Driver | Mongoose ODM |
|---|---------------------|--------------|
| Schema | Tidak ada | Define schema + validation |
| Relationships | Manual | Populate (ref) |
| Middleware | Tidak ada | Pre/post hooks |
| Learning | Lebih sederhana | Lebih terstruktur |
| Cocok | Simple app, scripting | Production app |

## Kapan Pakai MongoDB?

✅ Aplikasi dengan schema fleksibel
✅ IoT, logs, analytics (data besar & bervariasi)
✅ Real-time apps (chat, gaming)
✅ Content management (blog, catalog)
✅ Prototype cepat (no migrations!)

❌ Aplikasi dengan banyak relationships (pake SQL)
❌ Butuh ACID transactions kompleks (walau v4.0+ sudah support)
❌ Reporting & BI (SQL lebih mature)
  `,

  quiz: [
    { question: "MongoDB: data model?", options: ["Tables", "Collections → Documents (JSON)", "Graphs", "Key-Value"], correctAnswer: 1 },
    { question: "MongoDB vs SQL?", options: ["Sama", "MongoDB: flexible schema; SQL: fixed schema", "SQL lebih fleksibel", "MongoDB deprecated"], correctAnswer: 1 },
    { question: "Mongoose?", options: ["Driver", "ODM (Object Document Mapper) dengan schema", "Database", "GUI tool"], correctAnswer: 1 }
  ],

  codeExamples: []
};