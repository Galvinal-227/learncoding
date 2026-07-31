export const chapter = {
  slug: "web-security-sql-injection",
  title: "SQL Injection",
  description: "Pahami dan cegah SQL Injection dengan parameterized queries dan input validation.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["web-security-owasp"],
  tags: ["security", "sql-injection", "database", "parameterized"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## What is SQL Injection?

SQL Injection adalah teknik **menyisipkan SQL berbahaya** melalui input user yang tidak divalidasi.

## Classic Example

\`\`\`javascript
// ❌ VULNERABLE: String concatenation
const email = req.body.email;  // ' OR '1'='1' --
const query = "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + password + "'";
// Result: SELECT * FROM users WHERE email = '' OR '1'='1' --' AND password = '...'
// '1'='1' is always true → bypass login!
\`\`\`

## Prevention: Parameterized Queries

### PostgreSQL (pg)
\`\`\`javascript
// ✅ SAFE: Parameterized query ($1, $2)
const { rows } = await pool.query(
    'SELECT * FROM users WHERE email = $1 AND password = $2',
    [email, password]
);
\`\`\`

### MySQL (mysql2)
\`\`\`javascript
// ✅ SAFE: Prepared statement (?)
const [rows] = await connection.execute(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password]
);
\`\`\`

### Prisma (ORM)
\`\`\`javascript
// ✅ SAFE: ORM auto-parameterizes
const user = await prisma.user.findFirst({
    where: { email, password }
});

// ❌ DANGER: Raw query with user input
await prisma.$executeRaw\`SELECT * FROM users WHERE email = \${email}\`;
\`\`\`

## NoSQL Injection (MongoDB)

\`\`\`javascript
// ❌ VULNERABLE: Express + MongoDB
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    // Attacker: { "email": "admin@email.com", "password": { "$ne": "" } }
    // $ne = "not equal to empty string" → bypass!
});

// ✅ SAFE: Validate types
import { z } from 'zod';
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});
const { email, password } = schema.parse(req.body);
const user = await User.findOne({ email, password });
\`\`\`

## Input Validation + Parameterization

\`\`\`javascript
function getUserById(id) {
    // 1. Validate input
    if (typeof id !== 'number' || id <= 0) {
        throw new Error('Invalid ID');
    }
    
    // 2. Parameterized query
    return db.query('SELECT * FROM users WHERE id = $1', [id]);
}
\`\`\`
  `,

  quiz: [
    { question: "SQL injection prevention?", options: ["Escape strings", "Parameterized queries", "Firewall only", "Encryption"], correctAnswer: 1 },
    { question: "NoSQL injection?", options: ["Not possible", "Query operator injection ($ne, $gt)", "Same as SQL", "Only MySQL"], correctAnswer: 1 },
    { question: "Prisma raw query danger?", options: ["Safe", "Raw query with user input = risk", "Auto-escaped", "No risk"], correctAnswer: 1 }
  ],

  codeExamples: []
};