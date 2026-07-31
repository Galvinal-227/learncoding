export const chapter = {
  slug: "graphql-introduction",
  title: "Pengenalan GraphQL",
  description: "Pahami apa itu GraphQL, keunggulannya dibanding REST API, dan konsep dasarnya.",
  icon: "SiGraphql",
  color: "#E10098",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["rest-api-introduction"],
  tags: ["graphql", "api", "query-language", "facebook"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu GraphQL?

GraphQL adalah **query language untuk API** yang dikembangkan Facebook (sekarang Meta) tahun 2012, open source 2015. GraphQL memungkinkan client **meminta persis data yang dibutuhkan**, tidak lebih, tidak kurang.

## Masalah REST API

### Over-fetching (Kebanyakan Data)
\`\`\`json
// REST: GET /users/1
// Dapat SEMUA field, padahal cuma butuh name & email
{
  "id": 1, "name": "Budi", "email": "budi@email.com",
  "age": 25, "address": "...", "phone": "...",
  "createdAt": "...", "updatedAt": "...", "avatar": "..."
}
\`\`\`

### Under-fetching (Kekurangan Data)
\`\`\`
// Butuh user + posts → 2 request!
GET /users/1
GET /users/1/posts
\`\`\`

### Multiple Endpoints
\`\`\`
GET /users
GET /users/:id
GET /users/:id/posts
GET /posts/:id/comments
// Lusinan endpoints!
\`\`\`

## Solusi GraphQL

### Single Endpoint
Semua via \`POST /graphql\` (satu endpoint!)

### Minta Sesuai Kebutuhan
\`\`\`graphql
query {
  user(id: 1) {
    name
    email
    posts {
      title
    }
  }
}
\`\`\`

\`\`\`json
// Response: persis yang diminta!
{
  "data": {
    "user": {
      "name": "Budi",
      "email": "budi@email.com",
      "posts": [
        { "title": "Hello World" }
      ]
    }
  }
}
\`\`\`

## GraphQL vs REST

| | GraphQL | REST |
|---|---------|------|
| Endpoint | Satu (\`/graphql\`) | Banyak |
| Data | Client tentukan fields | Server tentukan |
| Versioning | Tidak perlu (evolusi schema) | v1, v2, v3... |
| Caching | Manual (Apollo cache) | HTTP cache |
| Learning curve | Sedang-tinggi | Rendah |
| File upload | Perlu plugin | Native multipart |
| Tools | GraphiQL, Apollo Studio | Swagger, Postman |

## Kapan Pakai GraphQL?

✅ Aplikasi dengan data kompleks & relasi banyak
✅ Mobile app (hemat bandwidth)
✅ Microservices (federation)
✅ Real-time data (subscriptions)
✅ Client butuh fleksibilitas query

❌ Simple API (overkill, pakai REST)
❌ File upload heavy (REST lebih simpel)
❌ Tim kecil, timeline ketat
  `,

  quiz: [
    { question: "GraphQL vs REST: endpoint?", options: ["Sama banyak", "GraphQL: 1 endpoint; REST: banyak", "REST: 1; GraphQL: banyak", "Tidak ada endpoint"], correctAnswer: 1 },
    { question: "Over-fetching?", options: ["Kekurangan data", "Kebanyakan data (field tidak diperlukan)", "Error", "Caching"], correctAnswer: 1 },
    { question: "Siapa yang buat GraphQL?", options: ["Google", "Facebook (Meta)", "Amazon", "Microsoft"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "GraphQL Query Pertama",
      language: "graphql",
      code: `# Request (client kirim ini ke server)
query GetUser {
  user(id: 1) {
    name
    email
    posts(limit: 5) {
      title
      createdAt
    }
  }
}

# Response (server balikin ini)
{
  "data": {
    "user": {
      "name": "Budi Santoso",
      "email": "budi@email.com",
      "posts": [
        {
          "title": "Belajar GraphQL",
          "createdAt": "2026-01-15"
        }
      ]
    }
  }
}`
    }
  ]
};