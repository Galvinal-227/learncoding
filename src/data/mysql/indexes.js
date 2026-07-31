export const chapter = {
  slug: "mysql-indexes",
  title: "Indexes",
  description: "Optimasi query dengan indexes: B-tree, unique, composite, fulltext.",
  icon: "SiMysql",
  color: "#4479A1",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["mysql-sql-basics"],
  tags: ["mysql", "indexes", "performance", "optimization"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Indexes?

Tanpa index = **full table scan** (baca semua baris). Dengan index = MySQL langsung ke data. 100ms vs 0.1ms.

## Create Index

\`\`\`sql
-- Single column
CREATE INDEX idx_email ON users(email);

-- Unique index (no duplicates)
CREATE UNIQUE INDEX idx_email_unique ON users(email);

-- Composite index (multiple columns)
CREATE INDEX idx_name_age ON users(name, age);

-- Fulltext index (search)
CREATE FULLTEXT INDEX idx_content ON posts(title, content);

-- When creating table
CREATE TABLE users (
    id INT PRIMARY KEY,       -- Automatically indexed!
    email VARCHAR(255) UNIQUE -- Automatically indexed!
);
\`\`\`

## View & Drop

\`\`\`sql
SHOW INDEX FROM users;
DROP INDEX idx_email ON users;
\`\`\`

## EXPLAIN (Query Analysis)

\`\`\`sql
EXPLAIN SELECT * FROM users WHERE email = 'budi@email.com';
-- type: ref (good, using index)
-- type: ALL (bad, full table scan)
-- possible_keys: yang bisa dipakai
-- key: index yang dipakai
-- rows: estimasi baris yang di-scan
\`\`\`

## Composite Index & Leftmost Prefix

\`\`\`sql
CREATE INDEX idx_a_b_c ON users(a, b, c);

-- ✅ Uses index: WHERE a = 1
-- ✅ Uses index: WHERE a = 1 AND b = 2
-- ✅ Uses index: WHERE a = 1 AND b = 2 AND c = 3
-- ❌ No index:  WHERE b = 2 (a not present)
-- ❌ No index:  WHERE c = 3 (a, b not present)
-- ✅ Uses index: WHERE a = 1 AND c = 3 (only a part)
\`\`\`

## Index Best Practices

\`\`\`
✅ Index kolom WHERE, JOIN, ORDER BY
✅ Composite: ikuti urutan kardinalitas (tertinggi dulu)
✅ Gunakan EXPLAIN untuk analisis
✅ Jangan index kolom dengan few unique values (gender: M/F)
✅ Jangan over-index (slow INSERT/UPDATE)
✅ Hapus index tidak terpakai
✅ Update statistics: ANALYZE TABLE users;
\`\`\`
  `,

  quiz: [
    { question: "EXPLAIN?", options: ["Delete", "Query execution plan (analisis index)", "Insert", "Update"], correctAnswer: 1 },
    { question: "Composite index: leftmost prefix?", options: ["Any column", "Must use leftmost column first (a, then ab, then abc)", "Any order", "Last column first"], correctAnswer: 1 }
  ],

  codeExamples: []
};