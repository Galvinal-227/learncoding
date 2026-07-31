export const chapter = {
  slug: "postgresql-sql-basics",
  title: "SQL Basics",
  description: "Kuasai SQL PostgreSQL: CRUD, JOINs, aggregations, window functions, CTE.",
  icon: "SiPostgresql",
  color: "#4169E1",
  difficulty: "Beginner",
  estimatedReadingTime: 25,
  prerequisites: ["postgresql-setup"],
  tags: ["postgresql", "sql", "crud", "queries"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Create Table

\`\`\`sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT CHECK (age >= 0 AND age <= 150),
    role VARCHAR(50) DEFAULT 'user',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_update
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_timestamp();
\`\`\`

## INSERT

\`\`\`sql
INSERT INTO users (name, email, age) VALUES ('Budi', 'budi@email.com', 25);

INSERT INTO users (name, email, age) VALUES 
    ('Siti', 'siti@email.com', 23),
    ('Agus', 'agus@email.com', 30);

-- Returning
INSERT INTO users (name, email) VALUES ('Doni', 'doni@email.com') RETURNING id, created_at;
\`\`\`

## SELECT

\`\`\`sql
SELECT * FROM users;
SELECT id, name, email FROM users;
SELECT * FROM users WHERE age >= 18;
SELECT * FROM users WHERE name ILIKE '%budi%';  -- Case insensitive
SELECT * FROM users WHERE email LIKE '%@gmail.com';
SELECT * FROM users WHERE id IN (1, 2, 3);
SELECT * FROM users WHERE age BETWEEN 18 AND 60;
SELECT * FROM users WHERE created_at > NOW() - INTERVAL '7 days';

-- Ordering
SELECT * FROM users ORDER BY name ASC;
SELECT * FROM users ORDER BY created_at DESC;

-- Pagination
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 20;

-- Distinct
SELECT DISTINCT role FROM users;
\`\`\`

## UPDATE & DELETE

\`\`\`sql
UPDATE users SET age = 26 WHERE id = 1;
UPDATE users SET is_active = FALSE WHERE last_login < NOW() - INTERVAL '90 days';

DELETE FROM users WHERE id = 1;
DELETE FROM users WHERE is_active = FALSE;
TRUNCATE TABLE users CASCADE;  -- Delete all + reset sequences
\`\`\`

## Aggregation

\`\`\`sql
SELECT COUNT(*) FROM users;
SELECT AVG(age), MIN(age), MAX(age) FROM users;
SELECT role, COUNT(*) as total FROM users GROUP BY role;
SELECT role, COUNT(*) FROM users GROUP BY role HAVING COUNT(*) > 5;
\`\`\`

## Window Functions

\`\`\`sql
-- Row number
SELECT name, email, ROW_NUMBER() OVER (ORDER BY created_at DESC) AS row_num FROM users;

-- Rank
SELECT name, age, RANK() OVER (ORDER BY age DESC) AS rank FROM users;

-- Running total
SELECT name, id, SUM(id) OVER (ORDER BY id) AS running_total FROM users;

-- Partition
SELECT role, name, ROW_NUMBER() OVER (PARTITION BY role ORDER BY name) FROM users;
\`\`\`

## CTE (Common Table Expressions)

\`\`\`sql
WITH active_admins AS (
    SELECT * FROM users WHERE role = 'admin' AND is_active = TRUE
)
SELECT * FROM active_admins WHERE age >= 25;

-- Recursive CTE
WITH RECURSIVE numbers AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1 FROM numbers WHERE n < 10
)
SELECT * FROM numbers;
\`\`\`

## PostgreSQL-Specific

\`\`\`sql
-- RETURNING (get result after INSERT/UPDATE/DELETE)
DELETE FROM users WHERE is_active = FALSE RETURNING id, name;

-- ON CONFLICT (UPSERT)
INSERT INTO users (id, name, email) VALUES (1, 'Budi', 'new@email.com')
ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;

-- DISTINCT ON
SELECT DISTINCT ON (role) role, name, email FROM users ORDER BY role, created_at DESC;
\`\`\`
  `,

  quiz: [
    { question: "ILIKE?", options: ["Like", "Case-insensitive LIKE", "Not like", "Regex"], correctAnswer: 1 },
    { question: "RETURNING?", options: ["Select", "Return data after INSERT/UPDATE/DELETE", "Function", "Trigger"], correctAnswer: 1 },
    { question: "ON CONFLICT?", options: ["Error", "UPSERT (insert or update)", "Delete", "Ignore"], correctAnswer: 1 }
  ],

  codeExamples: []
};

