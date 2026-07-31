export const chapter = {
  slug: "mysql-joins",
  title: "JOINs",
  description: "Kuasai semua jenis JOIN: INNER, LEFT, RIGHT, CROSS, dan subqueries.",
  icon: "SiMysql",
  color: "#4479A1",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["mysql-sql-basics"],
  tags: ["mysql", "joins", "relationships", "queries"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Sample Tables

\`\`\`sql
-- users
| id | name  |
|----|-------|
| 1  | Budi  |
| 2  | Siti  |
| 3  | Agus  |

-- orders
| id | user_id | total |
|----|---------|-------|
| 1  | 1       | 50000 |
| 2  | 1       | 30000 |
| 3  | 2       | 75000 |
\`\`\`

## INNER JOIN

Hanya data yang **cocok di kedua tabel**:

\`\`\`sql
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- Result: Budi (2 orders), Siti (1 order)
-- Agus NOT shown (no orders)
\`\`\`

## LEFT JOIN

**Semua dari kiri** + data kanan jika cocok:

\`\`\`sql
SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- Result: Budi (2 orders), Siti (1 order), Agus (NULL)
-- Agus SHOWN (no orders, NULL)
\`\`\`

## RIGHT JOIN

**Semua dari kanan** + data kiri jika cocok:

\`\`\`sql
SELECT users.name, orders.total
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;

-- Result: Budi (2 orders), Siti (1 order)
-- Same as INNER JOIN because all orders have users
\`\`\`

## FULL OUTER JOIN (MySQL doesn't support directly)

\`\`\`sql
-- Simulate with UNION
SELECT users.name, orders.total
FROM users LEFT JOIN orders ON users.id = orders.user_id
UNION
SELECT users.name, orders.total
FROM users RIGHT JOIN orders ON users.id = orders.user_id;
\`\`\`

## CROSS JOIN

**Semua kombinasi** (kiri × kanan):

\`\`\`sql
SELECT users.name, products.name
FROM users CROSS JOIN products;
-- 3 users × 10 products = 30 rows
\`\`\`

## Multiple JOINs

\`\`\`sql
SELECT 
    users.name,
    orders.total,
    payments.method,
    payments.amount
FROM users
JOIN orders ON users.id = orders.user_id
JOIN payments ON orders.id = payments.order_id
WHERE payments.status = 'completed';
\`\`\`

## Self JOIN

\`\`\`sql
-- Employees + Manager
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
\`\`\`

## Subqueries

\`\`\`sql
-- Subquery in WHERE
SELECT * FROM users 
WHERE id IN (SELECT user_id FROM orders WHERE total > 50000);

-- Subquery in SELECT
SELECT name, (SELECT COUNT(*) FROM orders WHERE user_id = users.id) AS order_count
FROM users;

-- Subquery in FROM
SELECT * FROM (
    SELECT user_id, COUNT(*) as order_count 
    FROM orders GROUP BY user_id
) AS user_orders
WHERE order_count > 2;
\`\`\`

## JOIN Best Practices

\`\`\`
✅ Pakai INNER JOIN jika hanya butuh data yang match
✅ Pakai LEFT JOIN jika butuh semua data kiri
✅ Index kolom yang dipakai JOIN (foreign key)
✅ Hindari JOIN banyak tabel (>5) untuk performa
✅ Gunakan alias untuk readability
\`\`\`
  `,

  quiz: [
    { question: "LEFT JOIN?", options: ["Hanya match", "Semua kiri + kanan match (NULL jika tidak)", "Semua kanan", "Kombinasi semua"], correctAnswer: 1 },
    { question: "INNER JOIN?", options: ["Semua data", "Hanya data yang match di kedua tabel", "Kiri semua", "Kanan semua"], correctAnswer: 1 }
  ],

  codeExamples: []
};