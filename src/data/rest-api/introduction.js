export const chapter = {
  slug: "introduction",
  title: "Pengenalan REST API",
  description: "Memahami konsep dasar REST API dan mengapa penting dalam pengembangan web modern.",
  icon: "SiApi",
  color: "#FF6C37",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["rest", "api", "web-development", "introduction"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu REST API?

REST (Representational State Transfer) adalah arsitektur untuk membangun web services. REST API adalah interface yang memungkinkan komunikasi antara client dan server menggunakan protokol HTTP.

## Prinsip REST

### 1. Client-Server
Separasi antara client (frontend) dan server (backend) memungkinkan keduanya berkembang secara independen.

### 2. Stateless
Setiap request dari client harus mengandung semua informasi yang diperlukan. Server tidak menyimpan state client di antara request.

### 3. Cacheable
Response harus menyatakan apakah dapat di-cache atau tidak untuk meningkatkan performa.

### 4. Uniform Interface
Interface yang konsisten dengan:
- Resource identification (URL)
- Resource manipulation through representations
- Self-descriptive messages
- HATEOAS (Hypermedia as the Engine of Application State)

### 5. Layered System
Arsitektur berlapis memungkinkan scaling dan keamanan yang lebih baik.

## Contoh Request

\`\`\`http
GET /api/users/123 HTTP/1.1
Host: example.com
Authorization: Bearer token123
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json
{
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
}
\`\`\`

## Resources vs URLs

- **Resource**: Entitas data (user, product, order)
- **URL**: Alamat resource (/api/users/123)

## HTTP Methods untuk CRUD

| Method | CRUD | Contoh |
|--------|------|--------|
| GET | Read | GET /api/users |
| POST | Create | POST /api/users |
| PUT | Update | PUT /api/users/123 |
| DELETE | Delete | DELETE /api/users/123 |
  `,
  quiz: [
    {
      question: "Apa kepanjangan dari REST?",
      options: [
        "Representational State Transfer",
        "Restful State Transfer",
        "Representational State Template",
        "Restful Service Template"
      ],
      correctAnswer: 0
    },
    {
      question: "Prinsip REST yang menyatakan server tidak menyimpan state client adalah?",
      options: [
        "Client-Server",
        "Stateless",
        "Cacheable",
        "Layered System"
      ],
      correctAnswer: 1
    },
    {
      question: "Method HTTP untuk membuat resource baru adalah?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Simple REST API Request",
      code: `// Fetch API
fetch('https://api.example.com/users', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer token123',
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// Axios
axios.get('https://api.example.com/users', {
    headers: {
        'Authorization': 'Bearer token123'
    }
})
.then(response => console.log(response.data))
.catch(error => console.error('Error:', error));`,
      language: "javascript"
    }
  ]
};