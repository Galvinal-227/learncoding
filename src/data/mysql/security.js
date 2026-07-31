export const chapter = {
  slug: "mysql-security",
  title: "Security & Best Practices",
  description: "Amankan MySQL: user privileges, SQL injection prevention, backup, dan monitoring.",
  icon: "SiMysql",
  color: "#4479A1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["mysql-sql-basics"],
  tags: ["mysql", "security", "sql-injection", "backup"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## SQL Injection Prevention

\`\`\`javascript
// ❌ DANGER: String concatenation
const query = \`SELECT * FROM users WHERE email = '\${email}'\`;

// ✅ SAFE: Parameterized query
const [user] = await connection.execute(
    'SELECT * FROM users WHERE email = ?',
    [email]
);
\`\`\`

## User Privileges

\`\`\`sql
-- Minimal privileges
CREATE USER 'app'@'localhost' IDENTIFIED BY 'strong_password';
GRANT SELECT, INSERT, UPDATE, DELETE ON myapp.* TO 'app'@'localhost';
-- Don't grant DROP, ALTER, CREATE unless needed!

-- Read-only user for reporting
GRANT SELECT ON myapp.* TO 'reports'@'localhost';

-- Revoke
REVOKE DELETE ON myapp.* FROM 'app'@'localhost';
FLUSH PRIVILEGES;
\`\`\`

## Backup & Restore

\`\`\`bash
# Backup
mysqldump -u root -p myapp > backup.sql

# Backup specific tables
mysqldump -u root -p myapp users orders > backup.sql

# Restore
mysql -u root -p myapp < backup.sql
\`\`\`

## Production Checklist

\`\`\`
✅ Gunakan parameterized queries (hindari SQL injection)
✅ Strong password untuk root & app user
✅ Minimal privileges (jangan GRANT ALL)
✅ Firewall (hanya allow app server IP)
✅ SSL/TLS untuk koneksi remote
✅ Regular backups (harian)
✅ Slow query log enabled
✅ Monitoring (MySQL Workbench, PMM)
✅ Update MySQL regularly (security patches)
✅ Disable remote root login
\`\`\`
  `,

  quiz: [
    { question: "SQL injection prevention?", options: ["Escape", "Parameterized queries (prepared statements)", "More indexes", "Firewall only"], correctAnswer: 1 },
    { question: "Backup command?", options: ["mysqlbackup", "mysqldump", "mysqlsave", "mysqlexport"], correctAnswer: 1 }
  ],

  codeExamples: []
};