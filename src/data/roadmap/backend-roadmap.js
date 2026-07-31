export const chapter = {
  slug: "backend-roadmap",
  title: "Backend Developer Roadmap",
  description: "Panduan lengkap menjadi Backend Developer dari nol hingga mahir.",
  icon: "SiNodejs",
  color: "#339933",
  difficulty: "Intermediate",
  estimatedReadingTime: 30,
  prerequisites: ["roadmap-introduction"],
  tags: ["backend", "nodejs", "database", "api", "server"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Backend Developer Roadmap 2024

## Phase 1: Fundamentals (2-3 Bulan)

### Programming Language
Pilih salah satu:

**Node.js (JavaScript/TypeScript)**
\`\`\`javascript
// Node.js Example
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(\`Server running on port \${port}\`);
});
\`\`\`

**Python**
\`\`\`python
# Python Flask Example
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/')
def hello():
    return jsonify({'message': 'Hello World!'})

if __name__ == '__main__':
    app.run(port=3000)
\`\`\`

### Topics
- Basic syntax
- Data structures
- Error handling
- File system
- Network programming
- Package management

## Phase 2: Web Servers & Frameworks (2 Bulan)

### Express.js
\`\`\`javascript
// Express.js API
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/users', (req, res) => {
    res.json({ users: [] });
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    // Save user to database
    res.status(201).json(user);
});

app.listen(3000);
\`\`\`

### ORMs/ODMs
\`\`\`javascript
// Sequelize (SQL)
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password');

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

// Mongoose (MongoDB)
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});
const User = mongoose.model('User', userSchema);
\`\`\`

## Phase 3: Databases (2-3 Bulan)

### SQL Databases
\`\`\`sql
-- PostgreSQL/MySQL
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (name, email) 
VALUES ('John Doe', 'john@example.com');

SELECT * FROM users WHERE email = 'john@example.com';

UPDATE users SET name = 'Jane Doe' WHERE id = 1;

DELETE FROM users WHERE id = 1;
\`\`\`

### NoSQL Databases
\`\`\`javascript
// MongoDB
db.users.insertOne({
    name: 'John Doe',
    email: 'john@example.com',
    address: {
        city: 'Jakarta',
        country: 'Indonesia'
    },
    orders: []
});

db.users.findOne({ email: 'john@example.com' });

db.users.updateOne(
    { email: 'john@example.com' },
    { $set: { name: 'Jane Doe' } }
);

db.users.deleteOne({ email: 'john@example.com' });
\`\`\`

**Topics:**
- Database design
- Indexing
- Query optimization
- Transactions
- Data modeling

## Phase 4: API Development (2 Bulan)

### REST API
\`\`\`javascript
// Complete REST API
const express = require('express');
const app = express();

// GET - List all
app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// GET - Single
app.get('/api/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});

// POST - Create
app.post('/api/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
});

// PUT - Update
app.put('/api/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id, 
        req.body,
        { new: true }
    );
    res.json(user);
});

// DELETE - Delete
app.delete('/api/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
});
\`\`\`

### GraphQL
\`\`\`graphql
# GraphQL Schema
type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
}

type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
}

type Query {
    users: [User!]!
    user(id: ID!): User
    posts: [Post!]!
}

type Mutation {
    createUser(name: String!, email: String!): User!
    createPost(title: String!, content: String!, authorId: ID!): Post!
}
\`\`\`

## Phase 5: Security & Performance (2 Bulan)

### Authentication & Authorization
\`\`\`javascript
// JWT Authentication
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register
app.post('/api/auth/register', async (req, res) => {
    const { email, password } = req.body;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Save user
    const user = await User.create({
        email,
        password: hashedPassword
    });
    
    res.status(201).json({ message: 'User created' });
});

// Login
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    
    res.json({ token });
});

// Auth Middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Protected route
app.get('/api/profile', authenticate, (req, res) => {
    res.json({ user: req.user });
});
\`\`\`

### Security Best Practices
- HTTPS
- Input validation
- SQL Injection prevention
- XSS protection
- CSRF protection
- Rate limiting
- Secure headers

## Phase 6: Production Ready (1-2 Bulan)

### Deployment
\`\`\`yaml
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://...
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
\`\`\`

### Monitoring & Logging
\`\`\`javascript
// Logging with Winston
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

// Performance monitoring
const responseTime = require('response-time');
app.use(responseTime((req, res, time) => {
    logger.info({
        method: req.method,
        url: req.url,
        responseTime: time
    });
}));
\`\`\`

## Advanced Topics (Optional)

### Microservices
- Service discovery
- API Gateway
- Message queues
- Event-driven architecture

### Caching
- Redis
- CDN
- Database caching

### Message Queues
- RabbitMQ
- Kafka
- AWS SQS

## Project Ideas

1. **Blog API** - CRUD, authentication, comments
2. **E-commerce API** - Products, orders, payments
3. **Social Media API** - Posts, followers, notifications
4. **Chat API** - Real-time messaging
5. **Task Management** - Projects, tasks, teams
6. **File Storage API** - Upload, download, sharing
7. **Payment Gateway** - Transactions, webhooks
8. **Analytics API** - Data collection, reporting

## Tools & Technologies

| Category | Tools |
|----------|-------|
| Languages | Node.js, Python, Java, Go |
| Frameworks | Express, NestJS, Django, Spring Boot |
| Databases | PostgreSQL, MySQL, MongoDB, Redis |
| ORM/ODM | Sequelize, TypeORM, Prisma, Mongoose |
| Testing | Jest, Mocha, Supertest |
| API | REST, GraphQL, gRPC |
| Auth | JWT, OAuth2, Passport |
| Cloud | AWS, GCP, Azure |
| Containers | Docker, Kubernetes |
| CI/CD | GitHub Actions, Jenkins |

## Timeline Summary

| Phase | Duration | Focus |
|-------|----------|-------|
| Phase 1 | 2-3 months | Programming Language |
| Phase 2 | 2 months | Web Servers & Frameworks |
| Phase 3 | 2-3 months | Databases |
| Phase 4 | 2 months | API Development |
| Phase 5 | 2 months | Security & Performance |
| Phase 6 | 1-2 months | Production Ready |
| **Total** | **11-15 months** | **Job Ready** |
  `,
  quiz: [
    {
      question: "Framework Node.js yang paling populer adalah?",
      options: [
        "Django",
        "Express.js",
        "Flask",
        "Spring"
      ],
      correctAnswer: 1
    },
    {
      question: "Database SQL yang populer adalah?",
      options: [
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "ElasticSearch"
      ],
      correctAnswer: 1
    },
    {
      question: "Library untuk autentikasi JWT di Node.js adalah?",
      options: [
        "bcrypt",
        "jsonwebtoken",
        "passport",
        "crypto"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Express.js API Structure",
      code: `// Project Structure
src/
├── config/
│   ├── database.js
│   └── auth.js
├── models/
│   ├── User.js
│   └── Post.js
├── controllers/
│   ├── authController.js
│   └── userController.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── middleware/
│   ├── auth.js
│   └── validation.js
├── services/
│   ├── emailService.js
│   └── authService.js
├── utils/
│   ├── logger.js
│   └── helpers.js
├── tests/
│   ├── unit/
│   └── integration/
└── app.js

// app.js - Main Application
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const { connectDB } = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/error');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(\`Server running on port \${PORT}\`);
    });
});

// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);`,
      language: "javascript"
    }
  ]
};