export const chapter = {
  slug: "web-security-cors",
  title: "CORS (Cross-Origin Resource Sharing)",
  description: "Pahami dan konfigurasi CORS untuk API security.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["web-security-introduction"],
  tags: ["security", "cors", "cross-origin", "api"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## What is CORS?

CORS adalah mekanisme browser yang **membatasi** website mengakses resource dari **origin berbeda**.

## Same-Origin vs Cross-Origin

\`\`\`
Same-Origin: https://myapp.com → https://myapp.com/api ✅
Cross-Origin: https://myapp.com → https://api.other.com ❌ (blocked)
\`\`\`

## CORS Headers

\`\`\`javascript
// Express + cors middleware
import cors from 'cors';

// Allow all origins (development only!)
app.use(cors());

// Specific origin
app.use(cors({
    origin: 'https://myfrontend.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,  // Allow cookies
    maxAge: 86400       // Cache preflight 24 jam
}));
\`\`\`

## Preflight Request

\`\`\`
Browser sends OPTIONS request before actual request:
OPTIONS /api/data HTTP/1.1
Origin: https://myfrontend.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
\`\`\`
  `,
  quiz: [
    { question: "CORS?", options: ["CSS", "Cross-Origin Resource Sharing (browser security)", "API", "Database"], correctAnswer: 1 },
    { question: "Preflight?", options: ["GET", "OPTIONS request before actual request", "POST", "DELETE"], correctAnswer: 1 }
  ],
  codeExamples: []
};