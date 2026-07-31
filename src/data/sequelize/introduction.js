export const chapter = {
  slug: "introduction",
  title: "Pengenalan Sequelize",
  description: "Memahami Sequelize ORM untuk Node.js dan manfaatnya dalam pengembangan database.",
  icon: "SiSequelize",
  color: "#52B0E7",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["sequelize", "orm", "nodejs", "database", "sql"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Sequelize?

Sequelize adalah ORM (Object-Relational Mapping) untuk Node.js yang mendukung berbagai database SQL seperti PostgreSQL, MySQL, MariaDB, SQLite, dan Microsoft SQL Server.

## Mengapa Sequelize?

1. **Abstraction** - Menulis query dengan JavaScript
2. **Security** - Perlindungan dari SQL Injection
3. **Productivity** - Development lebih cepat
4. **Type Safety** - Dukungan TypeScript
5. **Migration** - Manajemen schema database

## Instalasi

\`\`\`bash
# Basic installation
npm install sequelize

# Database driver (pilih salah satu)
npm install pg pg-hstore        # PostgreSQL
npm install mysql2              # MySQL
npm install mariadb             # MariaDB
npm install sqlite3             # SQLite
npm install tedious             # MSSQL
\`\`\`

## Koneksi Database

\`\`\`javascript
const { Sequelize } = require('sequelize');

// Option 1: Passing connection parameters
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres' // or 'mysql', 'mariadb', 'sqlite', 'mssql'
});

// Option 2: Using connection string
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

// Option 3: SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
});

// Test connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
\`\`\`

## Definisi Model

\`\`\`javascript
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    // Model attributes
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0,
            max: 150
        }
    }
}, {
    // Model options
    timestamps: true, // createdAt, updatedAt
    paranoid: true, // deletedAt (soft delete)
    tableName: 'users'
});
\`\`\`

## CRUD Operations

\`\`\`javascript
// CREATE
const user = await User.create({
    name: 'John Doe',
    email: 'john@example.com',
    age: 25
});

// READ (Find all)
const users = await User.findAll();

// READ (Find by ID)
const user = await User.findByPk(1);

// READ (Find one)
const user = await User.findOne({
    where: { email: 'john@example.com' }
});

// UPDATE
await User.update(
    { age: 26 },
    { where: { id: 1 } }
);

// DELETE
await User.destroy({
    where: { id: 1 }
});

// Soft delete (with paranoid: true)
await User.destroy({
    where: { id: 1 }
});
// The record will be deleted with deletedAt timestamp

// Restore soft deleted
await User.restore({
    where: { id: 1 }
});
\`\`\`

## Sequelize CLI

\`\`\`bash
# Install CLI globally
npm install -g sequelize-cli

# Initialize Sequelize
npx sequelize-cli init

# Structure created:
# config/
#   config.json
# models/
#   index.js
# migrations/
# seeders/
\`\`\`

## Kelebihan vs Kekurangan

### Kelebihan
- **Produktivitas** - Cepat dalam development
- **Security** - Prepared statements
- **Migration** - Version control untuk database
- **Associations** - Mudah untuk relasi
- **Validation** - Built-in validation

### Kekurangan
- **Performance** - Overhead untuk query kompleks
- **Learning Curve** - Perlu belajar ORM
- **Complex Queries** - Sulit untuk query sangat kompleks
- **Debugging** - Sulit debug SQL yang dihasilkan
  `,
  quiz: [
    {
      question: "Apa itu Sequelize?",
      options: [
        "Database",
        "ORM untuk Node.js",
        "Framework CSS",
        "JavaScript Library"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk test koneksi database adalah?",
      options: [
        "sequelize.test()",
        "sequelize.authenticate()",
        "sequelize.connect()",
        "sequelize.ping()"
      ],
      correctAnswer: 1
    },
    {
      question: "Property untuk soft delete adalah?",
      options: [
        "softDelete: true",
        "paranoid: true",
        "timestamps: true",
        "deleted: true"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Sequelize Setup",
      code: `// config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT || 'postgres',
        logging: process.env.NODE_ENV === 'development' ? console.log : false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            timestamps: true,
            underscored: true,
            paranoid: true
        }
    }
);

// models/index.js
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Import all models
fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && 
               (file !== basename) && 
               (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

// Setup associations
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// .env file
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp
DB_USER=postgres
DB_PASSWORD=secret
DB_DIALECT=postgres
NODE_ENV=development`,
      language: "javascript"
    }
  ]
};