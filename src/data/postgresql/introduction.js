export const chapter = {
  slug: "postgresql-introduction",
  title: "Pengenalan PostgreSQL",
  description: "Pahami apa itu PostgreSQL, keunggulannya, dan kenapa jadi database paling advanced.",
  icon: "SiPostgresql",
  color: "#4169E1",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["postgresql", "sql", "database", "relational"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu PostgreSQL?

PostgreSQL (disebut "Postgres") adalah **object-relational database management system (ORDBMS)** open-source paling advanced. Dikembangkan **30+ tahun**, dikenal reliability, feature-rich, dan standards compliance.

## Kenapa PostgreSQL?

- 🧠 **Paling advanced** - JSON, Full-Text Search, Geospatial (PostGIS)
- 🔒 **ACID compliant** - Transactions, data integrity
- 📈 **Scalable** - Handle terabytes, concurrent users
- 🧩 **Extensible** - Custom types, functions, extensions
- 🆓 **Open source** - Gratis, community-driven
- 🚀 **Modern features** - Window functions, CTE, lateral joins
- 🐘 **Reliable** - 30+ tahun production-proven

## PostgreSQL vs MySQL vs MongoDB

| | PostgreSQL | MySQL | MongoDB |
|---|-----------|-------|---------|
| Type | Relational (SQL) | Relational (SQL) | NoSQL (Document) |
| JSON | ✅ JSONB (indexed!) | ✅ JSON | ✅ Native |
| Full-Text Search | ✅ Built-in | ✅ Built-in | ✅ Built-in |
| Geospatial | ✅ PostGIS | ✅ Basic | ✅ Basic |
| ACID | ✅ Full | ✅ (InnoDB) | ✅ (v4.0+) |
| Extensions | ✅ 1000+ | Limited | Limited |
| Window Functions | ✅ | ✅ (8.0+) | ❌ |
| Best For | Complex queries, analytics, GIS | Simple websites, WordPress | Flexible schema, real-time |

## Kapan PostgreSQL?

✅ Complex queries & analytics
✅ Geospatial applications (PostGIS)
✅ JSON document storage + SQL queries
✅ Full-text search
✅ Time-series data
✅ Multi-tenant applications
✅ Data warehousing
✅ Any application that needs reliability

## Istilah PostgreSQL

| Istilah | MySQL Equivalent |
|---------|-----------------|
| Schema | Database |
| Tablespace | - |
| VACUUM | OPTIMIZE TABLE |
| EXPLAIN ANALYZE | EXPLAIN |
| SERIAL | AUTO_INCREMENT |
| RETURNING | - (Postgres feature!) |
  `,

  quiz: [
    { question: "PostgreSQL vs MySQL?", options: ["Sama", "Postgres: more advanced (JSONB, PostGIS, extensions)", "MySQL more features", "Postgres deprecated"], correctAnswer: 1 },
    { question: "JSONB?", options: ["Text", "Binary JSON (indexed, fast)", "XML", "CSV"], correctAnswer: 1 },
    { question: "PostGIS?", options: ["Text search", "Geospatial extension (maps, GIS)", "Full-text", "JSON"], correctAnswer: 1 }
  ],

  codeExamples: []
};