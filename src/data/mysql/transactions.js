export const chapter = {
  slug: "mysql-transactions",
  title: "Transactions",
  description: "Jaga data integrity dengan transactions: ACID, COMMIT, ROLLBACK.",
  icon: "SiMysql",
  color: "#4479A1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["mysql-sql-basics"],
  tags: ["mysql", "transactions", "acid", "commit"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Transaction?

Transaction = **sekumpulan operasi** yang dieksekusi sebagai **satu unit**. Jika salah satu gagal → semuanya dibatalkan (ROLLBACK).

## ACID Properties

| Property | Deskripsi |
|----------|-----------|
| **Atomicity** | All or nothing (semua sukses atau semua gagal) |
| **Consistency** | Data tetap valid setelah transaction |
| **Isolation** | Transaction tidak saling ganggu |
| **Durability** | Data tersimpan permanen setelah COMMIT |

## Basic Transaction

\`\`\`sql
START TRANSACTION;

UPDATE accounts SET balance = balance - 100000 WHERE id = 1;
UPDATE accounts SET balance = balance + 100000 WHERE id = 2;

COMMIT;   -- Simpan perubahan
-- ROLLBACK; -- Batalkan jika error
\`\`\`

## Transaction Example

\`\`\`javascript
const connection = await mysql.createConnection({...});

try {
    await connection.beginTransaction();
    
    // Deduct from sender
    await connection.execute(
        'UPDATE accounts SET balance = balance - ? WHERE id = ? AND balance >= ?',
        [amount, fromId, amount]
    );
    
    // Add to receiver
    await connection.execute(
        'UPDATE accounts SET balance = balance + ? WHERE id = ?',
        [amount, toId]
    );
    
    // Log transfer
    await connection.execute(
        'INSERT INTO transfers (from_id, to_id, amount) VALUES (?, ?, ?)',
        [fromId, toId, amount]
    );
    
    await connection.commit();
    console.log('Transfer success');
} catch (error) {
    await connection.rollback();
    console.error('Transfer failed, rolled back');
}
\`\`\`

## Isolation Levels

\`\`\`sql
-- Read uncommitted (dirty reads possible)
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

-- Read committed (no dirty reads)
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- Repeatable read (default MySQL, no non-repeatable reads)
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- Serializable (strictest, no phantom reads)
SET SESSION TRANSACTION ISOLATION LEVEL SERIALIZABLE;
\`\`\`

## Savepoints

\`\`\`sql
START TRANSACTION;

UPDATE users SET name = 'Budi' WHERE id = 1;
SAVEPOINT sp1;

UPDATE users SET email = 'new@email.com' WHERE id = 1;
-- Oops, wrong email!
ROLLBACK TO SAVEPOINT sp1;

COMMIT;
-- Only name updated, email not changed
\`\`\`
  `,

  quiz: [
    { question: "ACID: Atomicity?", options: ["Isolation", "All or nothing", "Fast", "Backup"], correctAnswer: 1 },
    { question: "ROLLBACK?", options: ["Save", "Cancel transaction (undo changes)", "Commit", "Start"], correctAnswer: 1 }
  ],

  codeExamples: []
};