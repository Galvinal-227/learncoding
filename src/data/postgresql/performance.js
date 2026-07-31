export const chapter = {
  slug: "postgresql-performance",
  title: "Performance Tuning",
  description: "Optimasi performa PostgreSQL: EXPLAIN ANALYZE, VACUUM, configuration, monitoring.",
  icon: "SiPostgresql",
  color: "#4169E1",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["postgresql-indexes"],
  tags: ["postgresql", "performance", "explain", "vacuum"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## EXPLAIN ANALYZE

\`\`\`sql
-- Basic
EXPLAIN SELECT * FROM users WHERE email = 'budi@email.com';

-- With actual timing
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'budi@email.com';

-- With buffers (disk I/O)
EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM users WHERE email = 'budi@email.com';

-- Output analysis:
-- Seq Scan = bad (full table scan)
-- Index Scan = good (using index)
-- Index Only Scan = best (no table lookup)
-- Nested Loop = join strategy
\`\`\`

## VACUUM

PostgreSQL uses **MVCC** - old versions not immediately deleted. VACUUM reclaims space.

\`\`\`sql
-- Manual vacuum
VACUUM users;
VACUUM FULL users;  -- Full lock, reclaims max space
VACUUM ANALYZE users;  -- Vacuum + update statistics

-- Auto-vacuum (default, enabled)
SHOW autovacuum;  -- Should be 'on'

-- Check vacuum status
SELECT * FROM pg_stat_user_tables WHERE relname = 'users';
\`\`\`

## PostgreSQL Configuration

\`\`\`ini
# postgresql.conf
shared_buffers = 256MB        # 25% of RAM (default: 128MB)
effective_cache_size = 1GB    # 50-75% of RAM
work_mem = 16MB               # Per operation (increase for complex queries)
maintenance_work_mem = 64MB   # For VACUUM, CREATE INDEX
random_page_cost = 1.1        # SSD: 1.1, HDD: 4.0

# Connections
max_connections = 100         # Use connection pooler if >100
\`\`\`

## Connection Pooling (PgBouncer)

\`\`\`ini
# pgbouncer.ini
[databases]
myapp = host=localhost port=5432 dbname=myapp

[pgbouncer]
listen_port = 6432
pool_mode = transaction
max_client_conn = 100
default_pool_size = 25
\`\`\`

## Query Optimization Tips

\`\`\`sql
-- 1. Avoid SELECT *
SELECT id, name, email FROM users;  -- ✅

-- 2. Use EXISTS instead of IN (for large subqueries)
SELECT * FROM users WHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id);  -- ✅

-- 3. Use LIMIT for large result sets
SELECT * FROM users LIMIT 100;

-- 4. Batch operations
INSERT INTO users (name, email) VALUES 
    ('A', 'a@email.com'), ('B', 'b@email.com'), ('C', 'c@email.com');  -- ✅
-- Instead of 3 separate INSERTs

-- 5. Use prepared statements (Node.js)
const query = 'SELECT * FROM users WHERE email = $1';
\`\`\`

## Monitoring Queries

\`\`\`sql
-- Currently running queries
SELECT pid, now() - pg_stat_activity.query_start AS duration, query, state
FROM pg_stat_activity
WHERE state = 'active' AND pid <> pg_backend_pid();

-- Kill long query
SELECT pg_terminate_backend(pid);

-- Top slow queries (needs pg_stat_statements)
CREATE EXTENSION pg_stat_statements;

SELECT query, calls, mean_exec_time, total_exec_time
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;
\`\`\`

## Performance Checklist

\`\`\`
✅ Indexes on WHERE/JOIN columns
✅ VACUUM regularly (or auto-vacuum)
✅ Connection pooling (PgBouncer)
✅ EXPLAIN ANALYZE slow queries
✅ Proper data types (no TEXT for everything)
✅ Partitioning for large tables
✅ Archive/delete old data
✅ Monitor with pg_stat_statements
✅ SSD storage (not HDD)
✅ Regular ANALYZE for statistics
\`\`\`
  `,

  quiz: [
    { question: "EXPLAIN ANALYZE?", options: ["Plan only", "Execute + show actual timings", "Plan only", "No execute"], correctAnswer: 1 },
    { question: "VACUUM?", options: ["Clean", "Reclaim space from dead tuples (MVCC)", "Index", "Backup"], correctAnswer: 1 },
    { question: "PgBouncer?", options: ["Index", "Connection pooler", "Backup tool", "Monitor"], correctAnswer: 1 }
  ],

  codeExamples: []
};