export const chapter = {
  slug: "postgresql-extensions",
  title: "Extensions (PostGIS, pgvector)",
  description: "Gunakan extensions PostgreSQL: PostGIS, pgvector, pg_cron, UUID, dan lainnya.",
  icon: "SiPostgresql",
  color: "#4169E1",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["postgresql-setup"],
  tags: ["postgresql", "extensions", "postgis", "pgvector"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Extensions di PostgreSQL

\`\`\`sql
-- List available extensions
SELECT * FROM pg_available_extensions;

-- Install
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
\`\`\`

## Extension Populer

| Extension | Fungsi |
|-----------|--------|
| **PostGIS** | Geospatial (maps, GIS) |
| **pgvector** | Vector similarity search (AI embeddings) |
| **pg_cron** | Job scheduler |
| **uuid-ossp** | Generate UUID |
| **pgcrypto** | Encryption, hashing |
| **pg_stat_statements** | Query performance monitoring |
| **hstore** | Key-value store |
| **pg_partman** | Table partitioning |

## PostGIS

\`\`\`sql
CREATE EXTENSION postgis;

-- Table with geometry
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    geom GEOMETRY(Point, 4326)
);

-- Insert point
INSERT INTO locations (name, geom) 
VALUES ('Monas', ST_SetSRID(ST_MakePoint(106.827, -6.175), 4326));

-- Find within radius (5km)
SELECT name FROM locations
WHERE ST_DWithin(
    geom,
    ST_SetSRID(ST_MakePoint(106.827, -6.175), 4326),
    5000  -- 5km in meters
);

-- Find nearest
SELECT name, ST_Distance(geom, ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326)) AS distance
FROM locations
ORDER BY geom <-> ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326)
LIMIT 5;
\`\`\`

## pgvector (AI/ML Embeddings)

\`\`\`sql
CREATE EXTENSION vector;

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    content TEXT,
    embedding VECTOR(1536)  -- OpenAI embedding size
);

-- Insert embedding
INSERT INTO documents (content, embedding) 
VALUES ('Hello world', '[0.1, 0.2, ...]');

-- Similarity search (cosine distance)
SELECT content, 1 - (embedding <=> '[0.1, 0.2, ...]') AS similarity
FROM documents
ORDER BY embedding <=> '[0.1, 0.2, ...]'
LIMIT 10;

-- Create index for fast search
CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops);
\`\`\`

## pg_cron (Scheduler)

\`\`\`sql
CREATE EXTENSION pg_cron;

-- Delete old logs every day at 3am
SELECT cron.schedule('cleanup-logs', '0 3 * * *', 'DELETE FROM logs WHERE created_at < NOW() - INTERVAL ''30 days''');

-- List jobs
SELECT * FROM cron.job;

-- Unschedule
SELECT cron.unschedule('cleanup-logs');
\`\`\`
  `,

  quiz: [
    { question: "PostGIS?", options: ["Text", "Geospatial extension (maps, GIS)", "Search", "Auth"], correctAnswer: 1 },
    { question: "pgvector?", options: ["Geospatial", "Vector similarity (AI embeddings)", "Cron", "UUID"], correctAnswer: 1 }
  ],

  codeExamples: []
};