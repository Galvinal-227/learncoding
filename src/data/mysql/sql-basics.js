export const chapter = {
  slug: "mysql-sql-basics",
  title: "SQL Basics",
  description: "Kuasai SQL dasar: SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY.",
  icon: "SiMysql",
  color: "#4479A1",
  difficulty: "Beginner",
  estimatedReadingTime: 25,
  prerequisites: ["mysql-installation"],
  tags: ["mysql", "sql", "crud", "queries"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Database & Table

\`\`\`sql
-- Create database
CREATE DATABASE myapp;
USE myapp;

-- Create table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT,
    role ENUM('user','admin') DEFAULT 'user',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## INSERT (Create)

\`\`\`sql
-- Single
INSERT INTO users (name, email, age) VALUES ('Budi', 'budi@email.com', 25);

-- Multiple
INSERT INTO users (name, email, age) VALUES 
    ('Siti', 'siti@email.com', 23),
    ('Agus', 'agus@email.com', 30);

-- With SELECT
INSERT INTO users_archive SELECT * FROM users WHERE is_active = FALSE;
\`\`\`

## SELECT (Read)

\`\`\`sql
-- All columns
SELECT * FROM users;

-- Specific columns
SELECT id, name, email FROM users;

-- WHERE clause
SELECT * FROM users WHERE age >= 18;
SELECT * FROM users WHERE name = 'Budi' AND is_active = TRUE;
SELECT * FROM users WHERE age BETWEEN 18 AND 60;
SELECT * FROM users WHERE email LIKE '%@gmail.com';
SELECT * FROM users WHERE id IN (1, 2, 3);
SELECT * FROM users WHERE age IS NOT NULL;

-- ORDER BY
SELECT * FROM users ORDER BY name ASC;
SELECT * FROM users ORDER BY created_at DESC;

-- LIMIT & OFFSET (Pagination)
SELECT * FROM users LIMIT 10 OFFSET 20; -- Page 3 (10 per page)

-- DISTINCT
SELECT DISTINCT role FROM users;

-- Aggregate Functions
SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM users;
SELECT MAX(age), MIN(age) FROM users;
SELECT role, COUNT(*) as total FROM users GROUP BY role;
SELECT role, COUNT(*) as total FROM users GROUP BY role HAVING total > 5;
\`\`\`

## UPDATE

\`\`\`sql
UPDATE users SET age = 26 WHERE id = 1;
UPDATE users SET is_active = FALSE WHERE last_login < '2025-01-01';
\`\`\`

## DELETE

\`\`\`sql
DELETE FROM users WHERE id = 1;
DELETE FROM users WHERE is_active = FALSE;

-- Delete semua (HATI-HATI!)
TRUNCATE TABLE users; -- Reset auto-increment juga
\`\`\`

## Node.js Example

\`\`\`javascript
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost', user: 'root', password: '', database: 'myapp'
});

// Query
const [users] = await connection.execute(
    'SELECT id, name, email FROM users WHERE age >= ?',
    [18]
);

// Insert
const [result] = await connection.execute(
    'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
    ['Budi', 'budi@email.com', 25]
);
console.log(result.insertId); // Auto-generated ID

await connection.end();
\`\`\`
  `,

  quiz: [
    { question: "LIMIT 10 OFFSET 20?", options: ["10 rows", "Skip 20, take 10 (Page 3)", "20 rows", "30 rows"], correctAnswer: 1 },
    { question: "HAVING vs WHERE?", options: ["Sama", "HAVING: filter after GROUP BY; WHERE: before", "WHERE after", "HAVING deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};