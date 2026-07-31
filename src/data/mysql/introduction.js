export const chapter = {
  slug: "mysql-introduction",
  title: "Pengenalan MySQL",
  description: "Pahami apa itu MySQL, relasional database, dan kapan menggunakannya.",
  icon: "SiMysql",
  color: "#4479A1",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["mysql", "sql", "database", "relational"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu MySQL?

MySQL adalah **Relational Database Management System (RDBMS)** open-source paling populer. Menggunakan **SQL** (Structured Query Language). Dimiliki Oracle, banyak dipakai di stack LAMP/LEMP.

## Kenapa MySQL?

- 🌍 **Paling populer** - Digunakan Facebook, Twitter, YouTube
- 🆓 **Open source** - Community edition gratis
- ⚡ **Cepat & reliable** - Teruji production
- 📦 **Ekosistem besar** - Tools, GUI, ORM
- 🔒 **ACID compliant** - Transactions, data integrity
- 📊 **Structured data** - Relationships, constraints

## MySQL vs NoSQL

| | MySQL (SQL) | MongoDB (NoSQL) |
|---|-----------|----------------|
| Data model | Tables (rows + columns) | Collections (documents) |
| Schema | Fixed, predefined | Flexible |
| Relationships | JOINs | Embedded/Reference |
| ACID | Full support | Limited (v4+) |
| Scaling | Vertical | Horizontal |
| Use case | E-commerce, banking, ERP | Real-time, IoT, CMS |

## Kapan MySQL?

✅ Aplikasi dengan data terstruktur
✅ Butuh relationships kompleks (JOINs)
✅ Transaksi keuangan (ACID wajib)
✅ Reporting & analytics
✅ Legacy systems, enterprise

❌ Schema sering berubah (pakai NoSQL)
❌ Big data unstructured (logs, sensor)
❌ Butuh horizontal scaling otomatis

## Cara Akses MySQL

### Command Line
\`\`\`bash
mysql -u root -p
\`\`\`

### GUI Tools
- **MySQL Workbench** (Official, gratis)
- **TablePlus** (Mac/Windows, berbayar)
- **DBeaver** (Cross-platform, gratis)
- **phpMyAdmin** (Web-based)

### Programming
\`\`\`javascript
// Node.js
import mysql from 'mysql2/promise';
const connection = await mysql.createConnection({
    host: 'localhost', user: 'root', database: 'myapp'
});
const [rows] = await connection.execute('SELECT * FROM users');
\`\`\`
  `,

  quiz: [
    { question: "MySQL vs MongoDB?", options: ["Sama", "MySQL: SQL/tables; MongoDB: NoSQL/documents", "MySQL NoSQL", "MongoDB SQL"], correctAnswer: 1 },
    { question: "ACID?", options: ["Chemical", "Atomicity, Consistency, Isolation, Durability", "Query language", "Index type"], correctAnswer: 1 }
  ],

  codeExamples: []
};