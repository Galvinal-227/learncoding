export const chapter = {
  slug: "mysql-installation",
  title: "Instalasi & Setup",
  description: "Install MySQL di Windows, Mac, Linux dan koneksi dengan Node.js.",
  icon: "SiMysql",
  color: "#4479A1",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["mysql-introduction"],
  tags: ["mysql", "instalasi", "setup", "connection"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install MySQL

### Windows
1. Download **MySQL Installer** dari [dev.mysql.com/downloads](https://dev.mysql.com/downloads/installer/)
2. Pilih: Developer Default
3. Set root password
4. Next-next sampai finish

### Mac (Homebrew)
\`\`\`bash
brew install mysql
brew services start mysql
mysql_secure_installation
\`\`\`

### Linux (Ubuntu)
\`\`\`bash
sudo apt update
sudo apt install -y mysql-server
sudo mysql_secure_installation
sudo systemctl start mysql
sudo systemctl enable mysql
\`\`\`

### Docker
\`\`\`bash
docker run -d --name mysql -p 3306:3306 \\
  -e MYSQL_ROOT_PASSWORD=root123 \\
  -e MYSQL_DATABASE=myapp \\
  mysql:8.0
\`\`\`

## Create User & Database

\`\`\`sql
CREATE DATABASE myapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'myapp'@'localhost' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON myapp.* TO 'myapp'@'localhost';
FLUSH PRIVILEGES;
\`\`\`

## Node.js Connection

\`\`\`bash
npm install mysql2
\`\`\`

\`\`\`javascript
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'myapp',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const [rows] = await pool.execute('SELECT * FROM users');
\`\`\`
  `,

  quiz: [
    { question: "Default MySQL port?", options: ["27017", "5432", "3306", "6379"], correctAnswer: 2 },
    { question: "Node.js MySQL driver?", options: ["mongoose", "mysql2", "pg", "redis"], correctAnswer: 1 }
  ],

  codeExamples: []
};