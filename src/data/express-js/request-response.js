export const chapter = {
  slug: "express-js-request-response",
  title: "Request & Response",
  description: "Pelajari Request dan Response objects secara mendalam.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["express-js-routing"],
  tags: ["express", "request", "response", "http"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Request Object (req)

| Property/Method | Deskripsi |
|-----------------|-----------|
| \`req.params\` | Route parameters (/users/:id) |
| \`req.query\` | Query string (?page=1) |
| \`req.body\` | Request body (POST/PUT) |
| \`req.headers\` | HTTP headers |
| \`req.method\` | HTTP method |
| \`req.url\` | Full URL |
| \`req.ip\` | Client IP |
| \`req.cookies\` | Cookies (butuh cookie-parser) |
| \`req.get('header')\` | Get specific header |

## Response Object (res)

| Method | Deskripsi | Status |
|--------|-----------|--------|
| \`res.send(data)\` | Kirim berbagai tipe | 200 |
| \`res.json(obj)\` | Kirim JSON | 200 |
| \`res.status(code)\` | Set status code | - |
| \`res.redirect(url)\` | Redirect | 302 |
| \`res.sendFile(path)\` | Kirim file | 200 |
| \`res.download(path)\` | Download file | 200 |
| \`res.set('header', 'value')\` | Set header | - |

## Common Patterns

\`\`\`javascript
// Chaining
res.status(201).json({ message: 'Created' });

// Conditional
if (!user) return res.status(404).json({ error: 'Not found' });
\`\`\`
  `,

  quiz: [
    { question: "req.body perlu middleware apa?", options: ["express.json()", "express.urlencoded()", "A dan B benar", "Tidak perlu"], correctAnswer: 2 },
    { question: "res.json() otomatis set header?", options: ["Content-Type: text/html", "Content-Type: application/json", "Tidak set", "Content-Type: text/plain"], correctAnswer: 1 }
  ],

  codeExamples: []
};