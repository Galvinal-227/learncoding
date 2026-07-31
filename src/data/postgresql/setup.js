export const chapter = {
  slug: "postgresql-setup",
  title: "Instalasi & Setup",
  description: "Install PostgreSQL di Windows, Mac, Linux dan setup database pertama.",
  icon: "SiPostgresql",
  color: "#4169E1",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["postgresql-introduction"],
  tags: ["postgresql", "setup", "instalasi", "psql"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install PostgreSQL

### Mac (Homebrew)
\`\`\`bash
brew install postgresql@16
brew services start postgresql@16
\`\`\`

### Linux (Ubuntu)
\`\`\`bash
sudo apt update
sudo apt install -y postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
\`\`\`

### Windows
Download dari [postgresql.org/download/windows](https://www.postgresql.org/download/windows/)

### Docker
\`\`\`bash
docker run -d --name postgres \\
  -e POSTGRES_PASSWORD=postgres \\
  -e POSTGRES_DB=myapp \\
  -p 5432:5432 \\
  postgres:16-alpine
\`\`\`

## Create User & Database

\`\`\`bash
# Masuk ke PostgreSQL
sudo -u postgres psql

# Di dalam psql:
CREATE USER myapp WITH PASSWORD 'password123';
CREATE DATABASE myapp OWNER myapp;
GRANT ALL PRIVILEGES ON DATABASE myapp TO myapp;
\q
\`\`\`

## Connect

\`\`\`bash
# psql CLI
psql -U myapp -d myapp -h localhost

# Connection string
postgresql://myapp:password123@localhost:5432/myapp
\`\`\`

## Node.js Connection

\`\`\`bash
npm install pg
\`\`\`

\`\`\`javascript
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'myapp',
    user: process.env.DB_USER || 'myapp',
    password: process.env.DB_PASSWORD,
    max: 20,  // Max connections
    idleTimeoutMillis: 30000
});

const { rows } = await pool.query('SELECT NOW()');
console.log(rows[0]); // { now: 2026-01-15T10:30:00.000Z }
\`\`\`

## psql Commands

\`\`\`sql
\\l          -- List databases
\\c myapp    -- Connect to database
\\dt         -- List tables
\\d users    -- Describe table
\\du         -- List users
\\?          -- Help
\\q          -- Quit
\`\`\`
  `,

  quiz: [
    { question: "Default PostgreSQL port?", options: ["3306", "5432", "27017", "6379"], correctAnswer: 1 },
    { question: "psql?", options: ["GUI", "PostgreSQL CLI", "Driver", "ORM"], correctAnswer: 1 }
  ],

  codeExamples: []
};