export const chapter = {
  slug: "postgresql-full-text-search",
  title: "Full-Text Search",
  description: "Implementasi full-text search di PostgreSQL tanpa Elasticsearch.",
  icon: "SiPostgresql",
  color: "#4169E1",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["postgresql-sql-basics"],
  tags: ["postgresql", "search", "full-text", "tsvector"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Full-Text Search Concepts

| Term | Deskripsi |
|------|-----------|
| **tsvector** | Tokenized document (searchable) |
| **tsquery** | Search query |
| **ts_rank** | Relevance ranking |
| **GIN index** | Fast search index |

## Basic Setup

\`\`\`sql
-- Add search column
ALTER TABLE articles ADD COLUMN search_vector tsvector;

-- Populate search vector (from title + content)
UPDATE articles 
SET search_vector = to_tsvector('english', title || ' ' || content);

-- Create GIN index
CREATE INDEX idx_search ON articles USING GIN(search_vector);

-- Auto-update with trigger
CREATE TRIGGER trg_search_update
BEFORE INSERT OR UPDATE ON articles
FOR EACH ROW EXECUTE FUNCTION 
tsvector_update_trigger(search_vector, 'pg_catalog.english', title, content);
\`\`\`

## Search Queries

\`\`\`sql
-- Basic search
SELECT title, ts_rank(search_vector, query) AS rank
FROM articles, to_tsquery('english', 'javascript & performance') query
WHERE search_vector @@ query
ORDER BY rank DESC
LIMIT 10;

-- OR search
SELECT * FROM articles 
WHERE search_vector @@ to_tsquery('english', 'react | vue');

-- Phrase search
SELECT * FROM articles 
WHERE search_vector @@ phraseto_tsquery('english', 'machine learning');

-- Prefix search
SELECT * FROM articles 
WHERE search_vector @@ to_tsquery('english', 'program:*');

-- Highlight results
SELECT 
    title,
    ts_headline('english', content, to_tsquery('english', 'javascript'), 
        'StartSel=<mark>, StopSel=</mark>, MaxFragments=3') AS snippet
FROM articles
WHERE search_vector @@ to_tsquery('english', 'javascript');
\`\`\`

## Weighted Search

\`\`\`sql
-- Title lebih penting dari content
UPDATE articles SET search_vector = 
    setweight(to_tsvector('english', title), 'A') ||
    setweight(to_tsvector('english', content), 'B');
-- 'A' weight > 'B' weight in ranking
\`\`\`

## Indonesian Language Support

\`\`\`sql
-- Install Indonesian text search
CREATE TEXT SEARCH DICTIONARY indonesian_ispell (
    TEMPLATE = ispell,
    DictFile = indonesian,
    AffFile = indonesian
);

-- Search in Bahasa Indonesia
SELECT * FROM articles 
WHERE search_vector @@ to_tsquery('indonesian', 'belajar & pemrograman');
\`\`\`
  `,

  quiz: [
    { question: "tsvector?", options: ["Text", "Tokenized searchable document", "Query", "Index type"], correctAnswer: 1 },
    { question: "ts_rank?", options: ["Sort", "Relevance ranking score", "Count", "Filter"], correctAnswer: 1 }
  ],

  codeExamples: []
};