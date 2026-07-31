export const chapter = {
  slug: "headers",
  title: "HTTP Headers",
  description: "Memahami HTTP headers penting dalam REST API.",
  icon: "SiHttp",
  color: "#005C9A",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["rest-api-introduction"],
  tags: ["http", "headers", "security", "cache"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu HTTP Headers?

Headers adalah metadata yang dikirim bersama request atau response untuk memberikan informasi tambahan tentang komunikasi.

## Request Headers

### Authentication
\`\`\`http
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
Cookie: sessionId=abc123
\`\`\`

### Content Negotiation
\`\`\`http
Accept: application/json
Accept-Language: id-ID
Accept-Encoding: gzip, deflate
\`\`\`

### Client Information
\`\`\`http
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Referer: https://example.com/page
Origin: https://example.com
\`\`\`

### Caching
\`\`\`http
Cache-Control: no-cache, no-store, must-revalidate
If-None-Match: "etag123"
If-Modified-Since: Wed, 21 Oct 2020 07:28:00 GMT
\`\`\`

## Response Headers

### Content
\`\`\`http
Content-Type: application/json
Content-Length: 1234
Content-Language: id-ID
Content-Encoding: gzip
\`\`\`

### Security
\`\`\`http
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000
Content-Security-Policy: default-src 'self'
\`\`\`

### Caching
\`\`\`http
Cache-Control: max-age=3600, public
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
Last-Modified: Wed, 21 Oct 2020 07:28:00 GMT
Expires: Wed, 21 Oct 2020 08:28:00 GMT
\`\`\`

### CORS
\`\`\`http
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
\`\`\`

### Rate Limiting
\`\`\`http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 75
X-RateLimit-Reset: 1600000000
\`\`\`

## Custom Headers

\`\`\`http
X-Request-ID: 123e4567-e89b-12d3-a456-426614174000
X-API-Version: v1
X-Execution-Time: 45ms
\`\`\`

## Best Practices

1. Gunakan header untuk metadata, bukan body
2. Sertakan Content-Type
3. Implementasikan CORS dengan benar
4. Gunakan header cache untuk performa
5. Sertakan rate limit headers
6. Gunakan header keamanan
  `,
  quiz: [
    {
      question: "Header untuk autentikasi adalah?",
      options: [
        "Authentication",
        "Authorization",
        "Auth-Token",
        "Api-Key"
      ],
      correctAnswer: 1
    },
    {
      question: "Header yang menentukan format response adalah?",
      options: [
        "Content-Format",
        "Content-Type",
        "Response-Type",
        "Format"
      ],
      correctAnswer: 1
    },
    {
      question: "Header untuk CORS adalah?",
      options: [
        "Access-Control-Allow-Origin",
        "CORS-Allow-Origin",
        "Cross-Origin",
        "Allow-Origin"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Headers Implementation",
      code: `// Express.js - Setting headers
app.get('/api/users', (req, res) => {
    // Response headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=3600');
    res.setHeader('X-API-Version', 'v1');
    
    // Security headers
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000');
    
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    res.json(users);
});

// Reading request headers
app.get('/api/profile', (req, res) => {
    const authHeader = req.headers.authorization;
    const acceptHeader = req.headers.accept;
    const userAgent = req.headers['user-agent'];
    
    console.log('Auth:', authHeader);
    console.log('Accept:', acceptHeader);
    console.log('User-Agent:', userAgent);
    
    res.json({ message: 'Headers received' });
});

// CORS middleware
const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
};

app.use(cors);`,
      language: "javascript"
    }
  ]
};