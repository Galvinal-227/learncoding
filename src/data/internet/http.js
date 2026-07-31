export const chapter = {
  slug: "internet-http",
  title: "HTTP Protocol",
  description: "Pahami HTTP - protokol yang menjadi fondasi komunikasi web.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["internet-how-internet-works"],
  tags: ["internet", "http", "protocol", "request-response"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu HTTP?

HTTP (HyperText Transfer Protocol) adalah protokol **request-response** yang menjadi dasar komunikasi di World Wide Web.

## HTTP Request Structure

\`\`\`
POST /api/users HTTP/1.1          ← Method + Path + Version
Host: example.com                  ← Headers
Content-Type: application/json
Authorization: Bearer token123

{"name": "Budi", "email": "budi@email.com"}  ← Body (optional)
\`\`\`

## HTTP Methods

| Method | Action | Safe? | Idempotent? |
|--------|--------|-------|-------------|
| **GET** | Read data | ✅ | ✅ |
| **POST** | Create new | ❌ | ❌ |
| **PUT** | Replace entire resource | ❌ | ✅ |
| **PATCH** | Partial update | ❌ | ❌ |
| **DELETE** | Delete resource | ❌ | ✅ |
| **HEAD** | Like GET, without body | ✅ | ✅ |
| **OPTIONS** | CORS preflight | ✅ | ✅ |

## HTTP Status Codes

| Code | Meaning | Example |
|------|---------|---------|
| **200** | OK | Request sukses |
| **201** | Created | Resource berhasil dibuat |
| **204** | No Content | Sukses, tidak ada response body |
| **301** | Permanent Redirect | URL pindah permanen |
| **302** | Temporary Redirect | Redirect sementara |
| **400** | Bad Request | Request tidak valid |
| **401** | Unauthorized | Perlu login |
| **403** | Forbidden | Tidak punya akses |
| **404** | Not Found | Resource tidak ditemukan |
| **429** | Too Many Requests | Rate limited |
| **500** | Internal Server Error | Server error |
| **502** | Bad Gateway | Upstream server error |
| **503** | Service Unavailable | Maintenance/down |

## HTTP Headers

### Request Headers
\`\`\`
Host: example.com
User-Agent: Mozilla/5.0
Accept: application/json
Authorization: Bearer token
Content-Type: application/json
Cookie: sessionId=abc123
\`\`\`

### Response Headers
\`\`\`
Content-Type: application/json
Content-Length: 1234
Cache-Control: max-age=3600
Set-Cookie: sessionId=xyz789
Access-Control-Allow-Origin: *
ETag: "abc123"
\`\`\`

## HTTP/1.1 vs HTTP/2 vs HTTP/3

| | HTTP/1.1 | HTTP/2 | HTTP/3 |
|---|----------|--------|--------|
| Tahun | 1997 | 2015 | 2022 |
| Multiplexing | ❌ (1 per connection) | ✅ | ✅ (better) |
| Header compression | ❌ | ✅ (HPACK) | ✅ (QPACK) |
| Transport | TCP | TCP | QUIC (UDP-based) |
| Speed | Lambat | Cepat | Lebih cepat |
  `,

  quiz: [
    { question: "POST vs PUT?", options: ["Sama", "POST: create; PUT: replace", "PUT: create", "POST: read"], correctAnswer: 1 },
    { question: "Status 404?", options: ["OK", "Not Found", "Server Error", "Redirect"], correctAnswer: 1 },
    { question: "HTTP/2 vs HTTP/1.1?", options: ["Sama", "HTTP/2: multiplexing, header compression", "HTTP/1.1 lebih cepat", "HTTP/2 deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};