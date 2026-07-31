export const chapter = {
  slug: "postgresql-nodejs",
  title: "PostgreSQL + Node.js",
  description: "Integrasi PostgreSQL dengan Node.js: pg, Drizzle, Knex, dan best practices.",
  icon: "SiPostgresql",
  color: "#4169E1",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["postgresql-setup", "node-js-introduction"],
  tags: ["postgresql", "nodejs", "pg", "knex"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## pg (Native Driver)

\`\`\`bash
npm install pg
\`\`\`

\`\`\`javascript
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'myapp',
    user: 'myapp',
    password: process.env.DB_PASSWORD,
    max: 20
});

// Query
const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [1]);
console.log(rows[0]);

// Transaction
const client = await pool.connect();
try {
    await client.query('BEGIN');
    await client.query('INSERT INTO orders (...) VALUES (...)');
    await client.query('UPDATE inventory SET stock = stock - 1 WHERE id = $1', [productId]);
    await client.query('COMMIT');
} catch (error) {
    await client.query('ROLLBACK');
    throw error;
} finally {
    client.release();
}
\`\`\`

## Knex (Query Builder)

\`\`\`bash
npm install knex pg
\`\`\`

\`\`\`javascript
import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 }
});

// Query builder
const users = await db('users')
    .select('id', 'name', 'email')
    .where('age', '>=', 18)
    .orderBy('name', 'asc')
    .limit(10);

// Insert
const [id] = await db('users').insert({ name: 'Budi', email: 'budi@email.com' }).returning('id');

// Transaction
const result = await db.transaction(async (trx) => {
    await trx('orders').insert({ ... });
    await trx('inventory').decrement('stock', 1).where('id', productId);
});
\`\`\`

## Drizzle ORM (Modern)

\`\`\`bash
npm install drizzle-orm pg
npm install -D drizzle-kit
\`\`\`

\`\`\`typescript
import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';

// Schema
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').unique().notNull(),
    age: integer('age'),
    createdAt: timestamp('created_at').defaultNow()
});

// Query
const db = drizzle(pool);
const allUsers = await db.select().from(users).where(eq(users.age, 25));
const newUser = await db.insert(users).values({ name: 'Budi', email: 'budi@email.com' }).returning();
\`\`\`

## Migration Tools

| Tool | Type |
|------|------|
| **Knex** | Query builder + migrations |
| **Drizzle Kit** | ORM + migrations |
| **Prisma** | Full ORM |
| **node-pg-migrate** | Migration-focused |
| **db-migrate** | Simple migrations |
  `,

  quiz: [
    { question: "pg Pool?", options: ["Single connection", "Connection pool (reuse connections)", "ORM", "CLI"], correctAnswer: 1 },
    { question: "Knex?", options: ["ORM", "SQL Query Builder", "Driver", "GUI"], correctAnswer: 1 }
  ],

  codeExamples: []
};