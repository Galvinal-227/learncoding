export const chapter = {
  slug: "postgresql-json-support",
  title: "JSON & JSONB",
  description: "Gunakan JSON dan JSONB di PostgreSQL untuk data semi-structured.",
  icon: "SiPostgresql",
  color: "#4169E1",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["postgresql-sql-basics"],
  tags: ["postgresql", "json", "jsonb", "document"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## JSON vs JSONB

| | JSON | JSONB |
|---|------|-------|
| Storage | Text (exact copy) | Binary (decomposed) |
| Indexing | ❌ | ✅ (GIN index) |
| Performance | Slow (re-parse) | Fast (binary) |
| Whitespace | Preserved | Removed |
| Duplicate keys | Preserved | Last key wins |
| Use | Log/audit | Query/manipulation |

## Create Table with JSONB

\`\`\`sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    attributes JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

## Insert JSONB

\`\`\`sql
INSERT INTO products (name, attributes) VALUES
('Laptop', '{"brand": "Apple", "specs": {"ram": 16, "ssd": 512}, "colors": ["silver", "gray"]}'),
('Phone', '{"brand": "Samsung", "specs": {"ram": 8, "storage": 256}, "colors": ["black", "white"]}');
\`\`\`

## Query JSONB

\`\`\`sql
-- Extract field (-> returns JSON, ->> returns text)
SELECT name, attributes->>'brand' AS brand FROM products;

-- Nested field
SELECT name, attributes->'specs'->>'ram' AS ram FROM products;

-- Filter by JSON field
SELECT * FROM products WHERE attributes->>'brand' = 'Apple';

-- Check if key exists
SELECT * FROM products WHERE attributes ? 'colors';

-- Array contains
SELECT * FROM products WHERE attributes->'colors' @> '["silver"]';

-- GIN Index for performance
CREATE INDEX idx_attributes ON products USING GIN (attributes);
\`\`\`

## Update JSONB

\`\`\`sql
-- Set field
UPDATE products 
SET attributes = jsonb_set(attributes, '{specs,ram}', '32')
WHERE name = 'Laptop';

-- Add field
UPDATE products 
SET attributes = attributes || '{"warranty": "1 year"}'::jsonb;

-- Remove field
UPDATE products 
SET attributes = attributes - 'colors';
\`\`\`

## JSONB Aggregation

\`\`\`sql
SELECT 
    attributes->>'brand' AS brand,
    COUNT(*) AS total,
    jsonb_agg(name) AS products
FROM products
GROUP BY attributes->>'brand';
\`\`\`
  `,

  quiz: [
    { question: "JSON vs JSONB?", options: ["Same", "JSONB: binary, indexed, faster", "JSON faster", "JSONB deprecated"], correctAnswer: 1 },
    { question: "-> vs ->>?", options: ["Same", "->: JSON; ->>: text", "->>: JSON", "->: text"], correctAnswer: 1 }
  ],

  codeExamples: []
};