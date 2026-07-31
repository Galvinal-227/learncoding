export const chapter = {
  slug: "tutorials",
  title: "Tutorials",
  description: "Menulis tutorial yang efektif untuk membantu pengguna belajar.",
  icon: "SiReadthedocs",
  color: "#4CAF50",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["technical-writing-introduction", "technical-writing-documentation"],
  tags: ["technical-writing", "tutorials", "learning"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Tutorial?

Tutorial adalah panduan langkah demi langkah untuk membantu pengguna belajar dan mencapai tujuan tertentu.

## Struktur Tutorial

### 1. Introduction
\`\`\`
- Apa yang akan dipelajari
- Prasyarat
- Hasil yang diharapkan
\`\`\`

### 2. Setup
\`\`\`
- Instalasi
- Konfigurasi
- Persiapan
\`\`\`

### 3. Steps
\`\`\`
- Langkah 1: ...
- Langkah 2: ...
- Langkah 3: ...
\`\`\`

### 4. Conclusion
\`\`\`
- Ringkasan
- Next steps
- Resources
\`\`\`

## Contoh Tutorial

### Getting Started with API

\`\`\`markdown
# Getting Started with User API

## Introduction
Learn how to use the User API to manage users in your application.

**What you'll learn:**
- How to authenticate
- How to get users
- How to create users
- How to update users

**Prerequisites:**
- Node.js installed
- Postman or cURL
- API key

## Step 1: Setup

### Get API Key
1. Register at example.com
2. Go to Dashboard > API Keys
3. Generate new API key
4. Copy the key

### Install Dependencies
\`\`\`bash
npm install axios
\`\`\`

## Step 2: Authentication

Create a client with your API key:

\`\`\`javascript
const axios = require('axios');

const client = axios.create({
    baseURL: 'https://api.example.com/v1',
    headers: {
        'X-API-Key': 'your-api-key'
    }
});
\`\`\`

## Step 3: Get Users

Get all users from the API:

\`\`\`javascript
async function getUsers() {
    try {
        const response = await client.get('/users');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.response.data);
    }
}

getUsers();
\`\`\`

## Step 4: Create User

Create a new user:

\`\`\`javascript
async function createUser() {
    try {
        const response = await client.post('/users', {
            name: 'Jane Doe',
            email: 'jane@example.com',
            password: 'secure-password'
        });
        console.log('User created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.response.data);
    }
}

createUser();
\`\`\`

## Step 5: Update User

Update an existing user:

\`\`\`javascript
async function updateUser(id) {
    try {
        const response = await client.put(\`/users/\${id}\`, {
            name: 'Jane Doe Updated'
        });
        console.log('User updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.response.data);
    }
}

updateUser(1);
\`\`\`

## Conclusion

You've learned how to:
- Authenticate with the API
- Get users
- Create users
- Update users

**Next Steps:**
- Read the [API Reference](#)
- Check out [Examples](#)
- Join our [Community](#)
\`\`\`

## Tips Menulis Tutorial

### 1. Langkah Jelas
\`\`\`
✅ 1. Install dependencies
✅ 2. Create configuration file
✅ 3. Start the server

❌ 1. Set up everything
❌ 2. Configure
❌ 3. Run
\`\`\`

### 2. Sertakan Kode
\`\`\`javascript
// ✅ Include code
const result = await api.getUsers();

// ❌ Don't just describe
// Get users from API
\`\`\`

### 3. Jelaskan Output
\`\`\`
// ✅ Explain expected output
// Output: { id: 1, name: "John Doe" }

// ❌ No output explanation
const user = await api.getUser(1);
\`\`\`

### 4. Antisipasi Error
\`\`\`javascript
// ✅ Error handling
try {
    const user = await api.getUser(1);
} catch (error) {
    console.error('User not found');
}

// ❌ No error handling
const user = await api.getUser(1);
\`\`\`

## Jenis Tutorial

| Jenis | Deskripsi |
|-------|-----------|
| **Getting Started** | Panduan awal |
| **How-to** | Cara melakukan sesuatu |
| **Project-based** | Project dari awal |
| **Debugging** | Troubleshooting |
| **Advanced** | Topik lanjutan |

## Checklist Tutorial

- [ ] Clear title
- [ ] Introduction
- [ ] Prerequisites
- [ ] Steps
- [ ] Code examples
- [ ] Expected output
- [ ] Error handling
- [ ] Conclusion
- [ ] Next steps
- [ ] Resources
  `,
  quiz: [
    {
      question: "Apa tujuan utama tutorial?",
      options: [
        "Memberikan informasi",
        "Membantu pengguna belajar",
        "Menjual produk",
        "Membuat dokumentasi"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa yang harus ada di tutorial?",
      options: [
        "Steps",
        "Code examples",
        "Prerequisites",
        "Semua di atas"
      ],
      correctAnswer: 3
    },
    {
      question: "Tutorial yang baik harus memiliki?",
      options: [
        "Langkah yang jelas",
        "Contoh kode",
        "Error handling",
        "Semua di atas"
      ],
      correctAnswer: 3
    }
  ],
  codeExamples: [
    {
      title: "Complete Tutorial Template",
      code: `<!-- ============================================ -->
<!-- Complete Tutorial Template -->
<!-- ============================================ -->

# Building a REST API with Express.js

> Learn how to build a complete REST API with Express.js, PostgreSQL, and JWT authentication.

## 📚 Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Step 1: Initialize Project](#step-1-initialize-project)
- [Step 2: Database Setup](#step-2-database-setup)
- [Step 3: User Model](#step-3-user-model)
- [Step 4: Authentication](#step-4-authentication)
- [Step 5: CRUD Operations](#step-5-crud-operations)
- [Step 6: Testing](#step-6-testing)
- [Conclusion](#conclusion)

---

## Introduction

In this tutorial, you will learn how to build a REST API from scratch using Express.js, PostgreSQL, and JWT for authentication.

**By the end of this tutorial, you will:**
- Build a production-ready REST API
- Implement JWT authentication
- Set up a PostgreSQL database
- Write CRUD operations
- Test your API

**Duration:** ~2 hours

---

## Prerequisites

Before starting, make sure you have:

- ✅ Node.js (v16 or higher)
- ✅ PostgreSQL (v14 or higher)
- ✅ npm or yarn
- ✅ Postman (or any API testing tool)
- ✅ Basic knowledge of JavaScript

---

## Setup

### 1. Install PostgreSQL

**macOS:**
\`\`\`bash
brew install postgresql
brew services start postgresql
\`\`\`

**Ubuntu/Debian:**
\`\`\`bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
\`\`\`

**Windows:**
Download from [postgresql.org](https://www.postgresql.org/download/windows/)

### 2. Create Database

\`\`\`bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE api_db;

# Create user
CREATE USER api_user WITH PASSWORD 'secure_password';

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE api_db TO api_user;

# Exit
\\q
\`\`\`

---

## Step 1: Initialize Project

### 1. Create Project

\`\`\`bash
# Create project directory
mkdir express-api
cd express-api

# Initialize npm
npm init -y
\`\`\`

### 2. Install Dependencies

\`\`\`bash
# Install required packages
npm install express cors dotenv helmet compression
npm install pg sequelize
npm install bcryptjs jsonwebtoken
npm install express-validator
npm install --save-dev nodemon
\`\`\`

### 3. Project Structure

\`\`\`
express-api/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   └── User.js
│   ├── controllers/
│   │   └── userController.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   ├── utils/
│   │   └── helpers.js
│   └── app.js
├── .env
├── .gitignore
└── package.json
\`\`\`

### 4. Environment Variables

Create \`.env\` file:

\`\`\`env
PORT=3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=api_db
DB_USER=api_user
DB_PASSWORD=secure_password

# JWT
JWT_SECRET=your-super-secret-key-here
JWT_EXPIRES_IN=7d

# API
API_PREFIX=/api/v1
\`\`\`

### 5. Entry Point

Create \`src/app.js\`:

\`\`\`javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(\`\${process.env.API_PREFIX || '/api/v1'}/users\`, require('./routes/userRoutes'));

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        error: {
            message: err.message,
            status,
            timestamp: new Date().toISOString()
        }
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`🚀 Server running on port \${PORT}\`);
    console.log(\`📚 API Documentation: http://localhost:\${PORT}/\`);
});

module.exports = app;
\`\`\`

### 6. Package.json Scripts

\`\`\`json
{
    "scripts": {
        "start": "node src/app.js",
        "dev": "nodemon src/app.js",
        "test": "jest",
        "lint": "eslint src/**/*.js"
    }
}
\`\`\`

### 7. Test Server

\`\`\`bash
# Start development server
npm run dev

# Check health endpoint
curl http://localhost:3000/health
\`\`\`

**Expected Output:**
\`\`\`json
{
    "status": "OK",
    "timestamp": "2024-01-01T00:00:00.000Z",
    "uptime": 123.45
}
\`\`\`

---

## Step 2: Database Setup

### 1. Database Configuration

Create \`src/config/database.js\`:

\`\`\`javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: process.env.NODE_ENV === 'development' ? console.log : false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('📦 Database connected successfully');
        return sequelize;
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
\`\`\`

### 2. Update app.js

\`\`\`javascript
// Add database connection
const { connectDB } = require('./config/database');

// Connect to database
connectDB();

// Sync models
const { sequelize } = require('./config/database');
sequelize.sync({ alter: true }).then(() => {
    console.log('📊 Database synced');
});
\`\`\`

---

## Step 3: User Model

### 1. Create Model

Create \`src/models/User.js\`:

\`\`\`javascript
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 100]
        }
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [8, 255]
        }
    },
    role: {
        type: DataTypes.ENUM('user', 'admin', 'moderator'),
        defaultValue: 'user'
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    lastLogin: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: true,
    paranoid: true,
    underscored: true,
    hooks: {
        beforeCreate: async (user) => {
            user.password = await bcrypt.hash(user.password, 10);
        },
        beforeUpdate: async (user) => {
            if (user.changed('password')) {
                user.password = await bcrypt.hash(user.password, 10);
            }
        }
    }
});

// Instance methods
User.prototype.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

User.prototype.toJSON = function() {
    const values = { ...this.get() };
    delete values.password;
    return values;
};

module.exports = User;
\`\`\`

---

## Step 4: Authentication

### 1. Auth Middleware

Create \`src/middleware/auth.js\`:

\`\`\`javascript
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({
                error: 'Authentication required'
            });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.id);
        
        if (!user) {
            return res.status(401).json({
                error: 'User not found'
            });
        }
        
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).json({
            error: 'Invalid or expired token'
        });
    }
};

const adminAuth = async (req, res, next) => {
    await auth(req, res, () => {
        if (req.user.role !== 'admin') {
            return res.status(403).json({
                error: 'Admin access required'
            });
        }
        next();
    });
};

module.exports = { auth, adminAuth };
\`\`\`

### 2. Validation Middleware

Create \`src/middleware/validation.js\`:

\`\`\`javascript
const { body, validationResult } = require('express-validator');

const validate = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));
        
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        
        res.status(400).json({
            error: {
                message: 'Validation error',
                details: errors.array().map(err => ({
                    field: err.param,
                    message: err.msg
                }))
            }
        });
    };
};

// Validation rules
const userValidation = {
    register: [
        body('name')
            .notEmpty().withMessage('Name is required')
            .isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters'),
        body('email')
            .notEmpty().withMessage('Email is required')
            .isEmail().withMessage('Invalid email format'),
        body('password')
            .notEmpty().withMessage('Password is required')
            .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    ],
    login: [
        body('email')
            .notEmpty().withMessage('Email is required')
            .isEmail().withMessage('Invalid email format'),
        body('password')
            .notEmpty().withMessage('Password is required')
    ],
    update: [
        body('name')
            .optional()
            .isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters'),
        body('email')
            .optional()
            .isEmail().withMessage('Invalid email format')
    ]
};

module.exports = { validate, userValidation };
\`\`\`

---

## Step 5: CRUD Operations

### 1. User Controller

Create \`src/controllers/userController.js\`:

\`\`\`javascript
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Helper functions
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );
};

// Controller methods
const userController = {
    // Register user
    async register(req, res) {
        try {
            const { name, email, password } = req.body;
            
            // Check if user exists
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(409).json({
                    error: 'Email already registered'
                });
            }
            
            // Create user
            const user = await User.create({ name, email, password });
            
            // Generate token
            const token = generateToken(user);
            
            res.status(201).json({
                success: true,
                data: {
                    user,
                    token
                }
            });
        } catch (error) {
            console.error('Register error:', error);
            res.status(500).json({
                error: 'Registration failed'
            });
        }
    },
    
    // Login user
    async login(req, res) {
        try {
            const { email, password } = req.body;
            
            // Find user
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({
                    error: 'Invalid credentials'
                });
            }
            
            // Check password
            const isValid = await user.comparePassword(password);
            if (!isValid) {
                return res.status(401).json({
                    error: 'Invalid credentials'
                });
            }
            
            // Update last login
            await user.update({ lastLogin: new Date() });
            
            // Generate token
            const token = generateToken(user);
            
            res.json({
                success: true,
                data: {
                    user,
                    token
                }
            });
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({
                error: 'Login failed'
            });
        }
    },
    
    // Get all users
    async getAllUsers(req, res) {
        try {
            const { page = 1, limit = 10, search } = req.query;
            const offset = (page - 1) * limit;
            
            const where = {};
            if (search) {
                where[Op.or] = [
                    { name: { [Op.iLike]: \`%\${search}%\` } },
                    { email: { [Op.iLike]: \`%\${search}%\` } }
                ];
            }
            
            const { count, rows } = await User.findAndCountAll({
                where,
                attributes: { exclude: ['password'] },
                limit: parseInt(limit),
                offset,
                order: [['createdAt', 'DESC']]
            });
            
            res.json({
                success: true,
                data: rows,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total: count,
                    totalPages: Math.ceil(count / limit)
                }
            });
        } catch (error) {
            console.error('Get users error:', error);
            res.status(500).json({
                error: 'Failed to get users'
            });
        }
    },
    
    // Get user by ID
    async getUserById(req, res) {
        try {
            const user = await User.findByPk(req.params.id, {
                attributes: { exclude: ['password'] }
            });
            
            if (!user) {
                return res.status(404).json({
                    error: 'User not found'
                });
            }
            
            res.json({
                success: true,
                data: user
            });
        } catch (error) {
            console.error('Get user error:', error);
            res.status(500).json({
                error: 'Failed to get user'
            });
        }
    },
    
    // Update user
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const updates = req.body;
            
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({
                    error: 'User not found'
                });
            }
            
            // Check permissions
            if (req.user.id !== id && req.user.role !== 'admin') {
                return res.status(403).json({
                    error: 'Unauthorized to update this user'
                });
            }
            
            await user.update(updates);
            
            res.json({
                success: true,
                data: user
            });
        } catch (error) {
            console.error('Update user error:', error);
            res.status(500).json({
                error: 'Failed to update user'
            });
        }
    },
    
    // Delete user
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({
                    error: 'User not found'
                });
            }
            
            // Check permissions
            if (req.user.role !== 'admin') {
                return res.status(403).json({
                    error: 'Admin access required to delete users'
                });
            }
            
            await user.destroy();
            
            res.status(204).send();
        } catch (error) {
            console.error('Delete user error:', error);
            res.status(500).json({
                error: 'Failed to delete user'
            });
        }
    }
};

module.exports = userController;
\`\`\`

### 2. User Routes

Create \`src/routes/userRoutes.js\`:

\`\`\`javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { auth, adminAuth } = require('../middleware/auth');
const { validate, userValidation } = require('../middleware/validation');

// Public routes
router.post('/register', validate(userValidation.register), userController.register);
router.post('/login', validate(userValidation.login), userController.login);

// Protected routes
router.get('/', auth, userController.getAllUsers);
router.get('/:id', auth, userController.getUserById);
router.put('/:id', auth, validate(userValidation.update), userController.updateUser);

// Admin routes
router.delete('/:id', auth, adminAuth, userController.deleteUser);

module.exports = router;
\`\`\`

---

## Step 6: Testing

### 1. Test with cURL

\`\`\`bash
# Health check
curl http://localhost:3000/health

# Register
curl -X POST http://localhost:3000/api/v1/users/register \\
    -H "Content-Type: application/json" \\
    -d '{
        "name": "John Doe",
        "email": "john@example.com",
        "password": "password123"
    }'

# Login
curl -X POST http://localhost:3000/api/v1/users/login \\
    -H "Content-Type: application/json" \\
    -d '{
        "email": "john@example.com",
        "password": "password123"
    }'

# Get users (with token)
curl http://localhost:3000/api/v1/users \\
    -H "Authorization: Bearer <your-token>"

# Get user by ID
curl http://localhost:3000/api/v1/users/1 \\
    -H "Authorization: Bearer <your-token>"

# Update user
curl -X PUT http://localhost:3000/api/v1/users/1 \\
    -H "Content-Type: application/json" \\
    -H "Authorization: Bearer <your-token>" \\
    -d '{
        "name": "John Doe Updated"
    }'

# Delete user (admin only)
curl -X DELETE http://localhost:3000/api/v1/users/1 \\
    -H "Authorization: Bearer <admin-token>"
\`\`\`

### 2. Test with Postman

1. Import the collection
2. Set environment variables
3. Run requests in order

---

## Conclusion

🎉 Congratulations! You've built a complete REST API with Express.js, PostgreSQL, and JWT authentication.

### What you learned:
- ✅ Setting up Express.js project
- ✅ Configuring PostgreSQL with Sequelize
- ✅ Creating User model with hooks
- ✅ Implementing JWT authentication
- ✅ Building CRUD operations
- ✅ Adding validation and error handling
- ✅ Testing the API

### Next Steps:
- 📚 Add more models (Posts, Comments)
- 🔒 Implement email verification
- 📊 Add logging and monitoring
- 🚀 Deploy to production (Heroku, Vercel, AWS)
- 📝 Write comprehensive API documentation

### Resources:
- [Express.js Documentation](https://expressjs.com)
- [Sequelize Documentation](https://sequelize.org)
- [JWT Documentation](https://jwt.io)
- [PostgreSQL Documentation](https://postgresql.org)

### Support:
- 💬 Join our [Discord community](https://discord.gg/example)
- 🐛 Report issues on [GitHub](https://github.com/example/api/issues)
- 📧 Email: support@example.com

---

## 🚀 Deploy to Production

### Deploy to Heroku

\`\`\`bash
# Create Heroku app
heroku create your-app-name

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set JWT_SECRET=your-secret
heroku config:set NODE_ENV=production

# Deploy
git push heroku main

# Open app
heroku open
\`\`\`

### Deploy to Vercel

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add JWT_SECRET
\`\`\`

---

Happy coding! 🎉`,
      language: "markdown"
    }
  ]
};