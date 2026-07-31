export const chapter = {
  slug: "postgresql-indexes",
  title: "Advanced Indexes",
  description: "Optimasi query dengan B-tree, GIN, GiST, BRIN, partial, dan covering indexes.",
  icon: "SiPostgresql",
  color: "#4169E1",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["postgresql-sql-basics"],
  tags: ["postgresql", "indexes", "performance", "optimization"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Index Types

| Type | Use Case |
|------|----------|
| **B-tree** | Equality, range, sorting (default) |
| **Hash** | Equality only (rare) |
| **GIN** | Full-text, JSONB, arrays |
| **GiST** | Geospatial (PostGIS), full-text |
| **BRIN** | Very large tables, sequential data |
| **Partial** | Index subset of rows |
| **Covering** | Include extra columns (no lookup) |

## B-tree Indexes

\`\`\`sql
-- Single column
CREATE INDEX idx_users_email ON users(email);

-- Composite (multi-column)
CREATE INDEX idx_users_role_age ON users(role, age);

-- Unique index
CREATE UNIQUE INDEX idx_users_email_unique ON users(email);

-- Partial index
CREATE INDEX idx_active_users ON users(email) WHERE is_active = TRUE;

-- Covering index (include extra columns)
CREATE INDEX idx_users_email_covering ON users(email) INCLUDE (name, created_at);

-- Sort order
CREATE INDEX idx_users_created_desc ON users(created_at DESC);
\`\`\`

## GIN Indexes

\`\`\`sql
-- Full-text search
CREATE INDEX idx_articles_search ON articles USING GIN(search_vector);

-- JSONB
CREATE INDEX idx_products_attributes ON products USING GIN(attributes);

-- Array
CREATE INDEX idx_users_hobbies ON users USING GIN(hobbies);

-- Trigram (fuzzy text search)
CREATE EXTENSION pg_trgm;
CREATE INDEX idx_users_name_trgm ON users USING GIN(name gin_trgm_ops);
SELECT * FROM users WHERE name % 'Budi';  -- Similarity search
\`\`\`

## BRIN Indexes

\`\`\`sql
-- For very large, sequential tables (logs, time-series)
CREATE INDEX idx_logs_created ON logs USING BRIN(created_at) 
WITH (pages_per_range = 32);
\`\`\`

## Index Analysis

\`\`\`sql
-- Check index usage
SELECT * FROM pg_stat_user_indexes WHERE relname = 'users';

-- Check unused indexes
SELECT * FROM pg_stat_user_indexes WHERE idx_scan = 0;

-- Size of indexes
SELECT pg_size_pretty(pg_relation_size('idx_users_email')) AS index_size;

-- Analyze query plan
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'budi@email.com';
\`\`\`

## Index Best Practices

\`\`\`
✅ Index columns used in WHERE, JOIN, ORDER BY
✅ Composite: highest selectivity first
✅ Partial index for filtered queries
✅ Covering index to avoid table lookup
✅ Monitor unused indexes (drop them)
✅ EXPLAIN ANALYZE to verify
❌ Don't index small tables
❌ Don't over-index (slow writes)
❌ Don't index low-cardinality columns (gender, boolean)
\`\`\`
  `,

  quiz: [
    { question: "GIN index?", options: ["B-tree", "Generalized Inverted (full-text, JSONB, arrays)", "Hash", "BRIN"], correctAnswer: 1 },
    { question: "Partial index?", options: ["Full table", "Index subset (WHERE clause)", "Multiple columns", "Covering"], correctAnswer: 1 },
    { question: "BRIN index?", options: ["Small tables", "Very large sequential tables", "Full-text", "JSONB"], correctAnswer: 1 }
  ],

  codeExamples: []
};