export const chapter = {
  slug: "status-codes",
  title: "HTTP Status Codes",
  description: "Memahami kode status HTTP dan penggunaannya dalam REST API.",
  icon: "SiHttp",
  color: "#005C9A",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["rest-api-introduction", "rest-api-http-methods"],
  tags: ["http", "status-codes", "error-handling", "rest"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Kelompok Status Codes

| Range | Kategori | Deskripsi |
|-------|----------|-----------|
| 1xx | Informational | Informasi tambahan |
| 2xx | Success | Request berhasil |
| 3xx | Redirection | Pengalihan |
| 4xx | Client Error | Error dari client |
| 5xx | Server Error | Error dari server |

## 2xx Success

**200 OK** - Request berhasil
\`\`\`http
HTTP/1.1 200 OK
{
    "id": 123,
    "name": "John Doe"
}
\`\`\`

**201 Created** - Resource berhasil dibuat
\`\`\`http
HTTP/1.1 201 Created
Location: /api/users/123
{
    "id": 123,
    "name": "John Doe"
}
\`\`\`

**204 No Content** - Berhasil tapi tidak ada konten
\`\`\`http
HTTP/1.1 204 No Content
\`\`\`

## 3xx Redirection

**301 Moved Permanently** - Resource pindah permanen
**302 Found** - Resource pindah sementara
**304 Not Modified** - Resource tidak berubah (cache)

## 4xx Client Error

**400 Bad Request** - Request tidak valid
\`\`\`http
HTTP/1.1 400 Bad Request
{
    "error": "Invalid email format"
}
\`\`\`

**401 Unauthorized** - Tidak terautentikasi
**403 Forbidden** - Tidak punya akses
**404 Not Found** - Resource tidak ditemukan
**405 Method Not Allowed** - Method tidak diizinkan
**409 Conflict** - Konflik data
**422 Unprocessable Entity** - Validasi gagal
**429 Too Many Requests** - Rate limit

## 5xx Server Error

**500 Internal Server Error** - Error server
**502 Bad Gateway** - Gateway error
**503 Service Unavailable** - Layanan tidak tersedia
**504 Gateway Timeout** - Timeout gateway

## Best Practices

1. Gunakan status code yang tepat
2. Sertakan pesan error yang informatif
3. Jangan expose detail server di error
4. Gunakan 201 Created untuk POST
5. Gunakan 204 No Content untuk DELETE
  `,
  quiz: [
    {
      question: "Status code untuk 'Created' adalah?",
      options: ["200", "201", "204", "202"],
      correctAnswer: 1
    },
    {
      question: "Status code untuk 'Not Found' adalah?",
      options: ["400", "401", "403", "404"],
      correctAnswer: 3
    },
    {
      question: "Status code 500 menunjukkan?",
      options: ["Client Error", "Server Error", "Success", "Redirection"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Status Codes Implementation",
      code: `// Express.js example
app.post('/api/users', async (req, res) => {
    try {
        const user = await createUser(req.body);
        // 201 Created
        res.status(201).json(user);
    } catch (error) {
        if (error.name === 'ValidationError') {
            // 400 Bad Request
            res.status(400).json({ error: error.message });
        } else if (error.code === 11000) {
            // 409 Conflict
            res.status(409).json({ error: 'User already exists' });
        } else {
            // 500 Internal Server Error
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Not found handler
app.use((req, res) => {
    res.status(404).json({ error: 'Resource not found' });
});`,
      language: "javascript"
    }
  ]
};