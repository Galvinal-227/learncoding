export const chapter = {
  slug: "mysql-views",
  title: "Views",
  description: "Buat virtual tables dengan Views untuk query yang kompleks.",
  icon: "SiMysql",
  color: "#4479A1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["mysql-joins"],
  tags: ["mysql", "views", "virtual-table", "simplify"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu View?

View adalah **virtual table** hasil dari query SELECT yang disimpan. Tidak menyimpan data sendiri.

## Create View

\`\`\`sql
CREATE VIEW active_users AS
SELECT id, name, email FROM users WHERE is_active = TRUE;

-- Use like a table
SELECT * FROM active_users;
\`\`\`

## Complex View

\`\`\`sql
CREATE VIEW user_orders_summary AS
SELECT 
    u.id,
    u.name,
    COUNT(o.id) AS order_count,
    COALESCE(SUM(o.total), 0) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id;

-- Now simple query
SELECT * FROM user_orders_summary WHERE order_count > 5;
\`\`\`

## Updateable View

\`\`\`sql
-- Can UPDATE/DELETE if view is simple (single table, no aggregation)
UPDATE active_users SET name = 'Budi Updated' WHERE id = 1;
\`\`\`

## Drop View

\`\`\`sql
DROP VIEW IF EXISTS active_users;
\`\`\`
  `,

  quiz: [
    { question: "View?", options: ["Table", "Virtual table (saved SELECT query)", "Index", "Procedure"], correctAnswer: 1 },
    { question: "View: data disimpan?", options: ["Ya", "Tidak (hanya query, data dari tabel asli)", "Tergantung", "Cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};