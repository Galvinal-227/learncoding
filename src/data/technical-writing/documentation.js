export const chapter = {
  slug: "documentation",
  title: "Dokumentasi",
  description: "Cara menulis dokumentasi teknis yang efektif dan terstruktur.",
  icon: "SiReadthedocs",
  color: "#4CAF50",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["technical-writing-introduction"],
  tags: ["technical-writing", "documentation", "guide"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Jenis Dokumentasi

### 1. README
\`\`\`markdown
# Project Name

## Description
Brief description of the project

## Installation
\`\`\`bash
npm install
\`\`\`

## Usage
\`\`\`bash
npm start
\`\`\`

## API Reference
\`\`\`js
const result = await api.get('/users');
\`\`\`

## Contributing
See CONTRIBUTING.md

## License
MIT
\`\`\`

### 2. User Guide
\`\`\`markdown
# User Guide

## Getting Started
1. Create an account
2. Log in
3. Start using

## Features
### Feature 1
Description and usage

### Feature 2
Description and usage
\`\`\`

### 3. API Documentation
\`\`\`yaml
# OpenAPI 3.0
openapi: 3.0.0
info:
  title: API Documentation
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get users
      responses:
        200:
          description: Success
\`\`\`

## Struktur Dokumentasi

### TOC (Table of Contents)
\`\`\`
├── Introduction
├── Getting Started
├── Installation
├── Configuration
├── Usage
├── API Reference
├── Examples
├── Contributing
├── Changelog
└── License
\`\`\`

## Format dan Gaya

### Heading
\`\`\`markdown
# H1 - Title
## H2 - Main Section
### H3 - Sub Section
#### H4 - Detail
\`\`\`

### Code Blocks
\`\`\`markdown
\`\`\`javascript
// Code example
const greeting = 'Hello World';
console.log(greeting);
\`\`\`
\`\`\`

### Lists
\`\`\`markdown
- Item 1
- Item 2
- Item 3

1. Step 1
2. Step 2
3. Step 3
\`\`\`

### Tables
\`\`\`markdown
| Name | Type | Description |
|------|------|-------------|
| id | string | User ID |
| name | string | User name |
\`\`\`

### Links
\`\`\`markdown
[Link Text](https://example.com)
[Internal Link](#section-name)
\`\`\`

## Contoh Dokumentasi

### README.md
\`\`\`markdown
# Awesome API

A RESTful API for managing users and posts.

## Features
- User authentication (JWT)
- CRUD operations
- Pagination
- Rate limiting

## Installation

\`\`\`bash
git clone https://github.com/your/repo.git
cd repo
npm install
\`\`\`

## Configuration

Create \`.env\` file:

\`\`\`env
PORT=3000
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=your-secret
\`\`\`

## Usage

### Start Server
\`\`\`bash
npm start
\`\`\`

### Development
\`\`\`bash
npm run dev
\`\`\`

## API Endpoints

### GET /api/users
Get all users

**Response:**
\`\`\`json
{
    "data": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com"
        }
    ],
    "pagination": {
        "page": 1,
        "limit": 10,
        "total": 100
    }
}
\`\`\`

### POST /api/users
Create a new user

**Request:**
\`\`\`json
{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "password": "secure-password"
}
\`\`\`

**Response:**
\`\`\`json
{
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@example.com"
}
\`\`\`

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT
\`\`\`

## Best Practices

1. **Start with README** - Landing page project
2. **Include examples** - Code examples
3. **Keep it updated** - Sync with code
4. **Use consistent format** - Markdown
5. **Add visuals** - Screenshots, diagrams
6. **Write for audience** - Sesuaikan
7. **Test instructions** - Coba sendiri
8. **Get feedback** - Review
9. **Use versioning** - Version docs
10. **Make it searchable** - SEO-friendly
  `,
  quiz: [
    {
      question: "Apa itu README?",
      options: [
        "File untuk menyimpan data",
        "File panduan project",
        "File konfigurasi",
        "File untuk API"
      ],
      correctAnswer: 1
    },
    {
      question: "Format dokumen untuk README biasanya?",
      options: [
        "HTML",
        "Markdown",
        "JSON",
        "XML"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa yang harus ada di README?",
      options: [
        "Installation",
        "Usage",
        "API Reference",
        "Semua di atas"
      ],
      correctAnswer: 3
    }
  ],
  codeExamples: [
    {
      title: "Complete README Template",
      code: `<!-- ============================================ -->
<!-- Complete README.md Template -->
<!-- ============================================ -->

# Project Name

> A brief description of what your project does

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://semver.org)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com)

---

## 📚 Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## 📖 About

Brief description of your project, its purpose, and what problems it solves.

**Key Points:**
- Point 1
- Point 2
- Point 3

---

## ✨ Features

- ✅ Feature 1
- ✅ Feature 2
- ✅ Feature 3
- ✅ Feature 4

---

## 🚀 Installation

### Prerequisites
- Node.js >= 16.x
- npm or yarn

### Steps

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/your-repo.git

# Navigate to project directory
cd your-repo

# Install dependencies
npm install

# or using yarn
yarn install
\`\`\`

---

## ⚙️ Configuration

Create a \`.env\` file in the root directory:

\`\`\`env
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/db

# Authentication
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=7d

# External Services
API_KEY=your-api-key
API_URL=https://api.example.com
\`\`\`

---

## 🎯 Usage

### Development

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
\`\`\`

### Production

\`\`\`bash
# Build the application
npm run build

# Start production server
npm start
\`\`\`

---

## 📡 API Reference

### Endpoints

#### GET /api/users

Get all users with pagination.

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| page | integer | Page number (default: 1) |
| limit | integer | Items per page (default: 10) |

**Response:**
\`\`\`json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "createdAt": "2024-01-01T00:00:00.000Z"
        }
    ],
    "pagination": {
        "page": 1,
        "limit": 10,
        "total": 100,
        "totalPages": 10
    }
}
\`\`\`

#### POST /api/users

Create a new user.

**Request Body:**
\`\`\`json
{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "password": "secure-password"
}
\`\`\`

**Response:**
\`\`\`json
{
    "success": true,
    "data": {
        "id": 2,
        "name": "Jane Doe",
        "email": "jane@example.com",
        "createdAt": "2024-01-01T00:00:00.000Z"
    }
}
\`\`\`

**Error Responses:**
| Status | Description |
|--------|-------------|
| 400 | Validation error |
| 409 | Email already exists |
| 500 | Internal server error |

---

## 💡 Examples

### Example 1: Basic Usage

\`\`\`javascript
import { Client } from 'your-library';

const client = new Client({
    apiKey: 'your-api-key'
});

const users = await client.getUsers();
console.log(users);
\`\`\`

### Example 2: Advanced Usage

\`\`\`javascript
import { Client } from 'your-library';

const client = new Client({
    apiKey: 'your-api-key',
    baseUrl: 'https://api.example.com',
    timeout: 5000
});

// Get users with pagination
const users = await client.getUsers({
    page: 1,
    limit: 20,
    sort: 'name',
    filter: {
        status: 'active'
    }
});

// Create a new user
const newUser = await client.createUser({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'secret'
});
\`\`\`

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md).

### Steps

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing\`)
5. Open a Pull Request

---

## 📝 Changelog

### [1.0.0] - 2024-01-01

#### Added
- Initial release
- User authentication
- CRUD operations
- Pagination support

#### Fixed
- Bug fixes
- Performance improvements

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Library A
- Tool B
- Resource C

---

## 📞 Contact

- **Author:** Your Name
- **Email:** your@email.com
- **Website:** https://yourwebsite.com
- **GitHub:** [@yourusername](https://github.com/yourusername)

---

<!-- Badges -->
[![Stars](https://img.shields.io/github/stars/yourusername/your-repo.svg?style=social)](https://github.com/yourusername/your-repo)
[![Forks](https://img.shields.io/github/forks/yourusername/your-repo.svg?style=social)](https://github.com/yourusername/your-repo)
[![Issues](https://img.shields.io/github/issues/yourusername/your-repo.svg)](https://github.com/yourusername/your-repo/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/yourusername/your-repo.svg)](https://github.com/yourusername/your-repo/pulls)`,
      language: "markdown"
    }
  ]
};