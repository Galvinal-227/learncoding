export const chapter = {
  slug: "http-methods",
  title: "HTTP Methods (GET, POST, PUT, DELETE)",
  description: "Memahami berbagai HTTP methods dan penggunaannya dalam REST API.",
  icon: "SiHttp",
  color: "#005C9A",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["rest-api-introduction"],
  tags: ["http", "methods", "rest", "crud"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## HTTP Methods Overview

| Method | Deskripsi | Idempotent | Safe |
|--------|-----------|------------|------|
| GET | Mengambil resource | ✅ | ✅ |
| POST | Membuat resource | ❌ | ❌ |
| PUT | Mengupdate resource (full) | ✅ | ❌ |
| PATCH | Mengupdate resource (partial) | ❌ | ❌ |
| DELETE | Menghapus resource | ✅ | ❌ |
| HEAD | Header saja | ✅ | ✅ |
| OPTIONS | Informasi komunikasi | ✅ | ✅ |

## GET

Mengambil data dari server.

\`\`\`http
GET /api/users HTTP/1.1
GET /api/users/123 HTTP/1.1
GET /api/users?page=2&limit=10 HTTP/1.1
\`\`\`

## POST

Membuat resource baru.

\`\`\`http
POST /api/users HTTP/1.1
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com"
}
\`\`\`

## PUT

Mengupdate resource secara lengkap (replace).

\`\`\`http
PUT /api/users/123 HTTP/1.1
Content-Type: application/json

{
    "name": "John Updated",
    "email": "john.updated@example.com"
}
\`\`\`

## PATCH

Mengupdate resource secara parsial.

\`\`\`http
PATCH /api/users/123 HTTP/1.1
Content-Type: application/json

{
    "name": "John Updated"
}
\`\`\`

## DELETE

Menghapus resource.

\`\`\`http
DELETE /api/users/123 HTTP/1.1
\`\`\`

## Idempotent

Operation yang menghasilkan hasil yang sama meskipun dijalankan berkali-kali:
- GET ✅
- PUT ✅
- DELETE ✅
- POST ❌

## Safe Methods

Methods yang tidak mengubah state server:
- GET ✅
- HEAD ✅
- OPTIONS ✅
- POST ❌
- PUT ❌
- DELETE ❌
  `,
  quiz: [
    {
      question: "Method HTTP untuk membuat resource baru adalah?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: 1
    },
    {
      question: "Method HTTP yang bersifat idempotent adalah?",
      options: ["POST", "PUT", "PATCH", "POST dan PATCH"],
      correctAnswer: 1
    },
    {
      question: "Method untuk mengupdate resource secara parsial adalah?",
      options: ["PUT", "POST", "PATCH", "UPDATE"],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "HTTP Methods Examples",
      code: `// GET - Get all users
const getUsers = async () => {
    const response = await fetch('/api/users');
    return response.json();
};

// GET - Get single user
const getUser = async (id) => {
    const response = await fetch(\`/api/users/\${id}\`);
    return response.json();
};

// POST - Create user
const createUser = async (userData) => {
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    return response.json();
};

// PUT - Update user (full)
const updateUser = async (id, userData) => {
    const response = await fetch(\`/api/users/\${id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    return response.json();
};

// PATCH - Update user (partial)
const patchUser = async (id, userData) => {
    const response = await fetch(\`/api/users/\${id}\`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    return response.json();
};

// DELETE - Delete user
const deleteUser = async (id) => {
    const response = await fetch(\`/api/users/\${id}\`, {
        method: 'DELETE'
    });
    return response.status === 204;
};`,
      language: "javascript"
    }
  ]
};