export const chapter = {
  slug: "mysql-normalization",
  title: "Normalization",
  description: "Desain database yang efisien dengan normalisasi: 1NF, 2NF, 3NF.",
  icon: "SiMysql",
  color: "#4479A1",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["mysql-sql-basics"],
  tags: ["mysql", "normalization", "database-design", "nf"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Normalization?

Normalization adalah proses **mengorganisir data** untuk mengurangi **redundansi** dan meningkatkan **data integrity**.

## Unnormalized (0NF)

\`\`\`sql
-- ❌ BURUK: Satu tabel campur aduk
CREATE TABLE orders (
    order_id INT,
    customer_name VARCHAR(100),
    customer_email VARCHAR(255),
    products VARCHAR(500), -- "Laptop, Mouse, Keyboard"
    quantities VARCHAR(100) -- "1, 2, 1"
);
\`\`\`

## 1NF (First Normal Form)

**Aturan:** Setiap kolom berisi **atomic values** (tidak multi-value), setiap baris **unik**.

\`\`\`sql
-- ✅ 1NF: Atomic values, ada primary key
CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_email VARCHAR(255),
    product VARCHAR(100),  -- Satu produk per baris
    quantity INT
);

-- Data jadi multiple rows per order
| id | customer_name | product  | quantity |
|----|---------------|----------|----------|
| 1  | Budi          | Laptop   | 1        |
| 1  | Budi          | Mouse    | 2        |
\`\`\`

## 2NF (Second Normal Form)

**Aturan:** 1NF + semua kolom non-key **fully dependent** pada primary key.

\`\`\`sql
-- ❌ 2NF violation: customer_name depends on order_id, not product
-- Split!

-- ✅ Orders table
CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_email VARCHAR(255)
);

-- ✅ Order_items table
CREATE TABLE order_items (
    order_id INT,
    product VARCHAR(100),
    quantity INT,
    PRIMARY KEY (order_id, product),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);
\`\`\`

## 3NF (Third Normal Form)

**Aturan:** 2NF + tidak ada **transitive dependency** (kolom non-key tidak bergantung pada kolom non-key lain).

\`\`\`sql
-- ❌ 3NF violation: customer_email depends on customer_name (not order_id)
-- Split!

-- ✅ Orders
CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- ✅ Customers (separate table)
CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255)
);
\`\`\`

## Summary

| Form | Rule |
|------|------|
| **1NF** | Atomic values, unique rows, primary key |
| **2NF** | No partial dependency (split composite keys) |
| **3NF** | No transitive dependency (split non-key dependencies) |

## When to Denormalize?

\`\`\`
✅ Read-heavy apps (JOINs are slow)
✅ Reporting/analytics (pre-calculated data)
✅ Caching (Redis)
❌ Don't over-normalize (too many tables = many JOINs)
\`\`\`
  `,

  quiz: [
    { question: "1NF?", options: ["Index", "Atomic values + unique rows", "JOIN", "Backup"], correctAnswer: 1 },
    { question: "3NF?", options: ["Index", "No transitive dependency", "JOIN", "Backup"], correctAnswer: 1 }
  ],

  codeExamples: []
};