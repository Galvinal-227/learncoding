export const chapter = {
  slug: "express-js-middleware",
  title: "Middleware",
  description: "Pahami middleware - jantung Express.js untuk request processing pipeline.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["express-js-routing"],
  tags: ["express", "middleware", "pipeline", "request"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Middleware?

Middleware adalah **fungsi yang berjalan di antara request dan response**. Setiap middleware bisa:
1. Mengeksekusi kode
2. Memodifikasi req/res
3. Mengakhiri request-response cycle
4. Memanggil middleware berikutnya

## Struktur Middleware

\`\`\`javascript
function myMiddleware(req, res, next) {
    console.log(\`\${req.method} \${req.url}\`);
    next(); // PENTING! Panggil next() untuk lanjut ke middleware berikutnya
}
\`\`\`

## Built-in Middleware

\`\`\`javascript
import express from 'express';
const app = express();

// Parse JSON body
app.use(express.json());

// Parse URL-encoded body (form)
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));
\`\`\`

## Custom Middleware

### Logger
\`\`\`javascript
app.use((req, res, next) => {
    const start = Date.now();
    console.log(\`\${req.method} \${req.url}\`);
    
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(\`\${res.statusCode} - \${duration}ms\`);
    });
    
    next();
});
\`\`\`

### Authentication
\`\`\`javascript
function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid token' });
    }
}

// Apply ke route spesifik
app.get('/profile', authMiddleware, (req, res) => {
    res.json({ user: req.user });
});
\`\`\`

## Third-Party Middleware Populer

| Middleware | Fungsi |
|-----------|--------|
| **cors** | Cross-Origin Resource Sharing |
| **helmet** | Security headers |
| **morgan** | HTTP request logger |
| **compression** | Gzip compression |
| **express-rate-limit** | Rate limiting |
| **express-validator** | Input validation |
| **cookie-parser** | Parse cookies |
| **express-session** | Session management |
| **multer** | File upload |

## Error Handling Middleware

\`\`\`javascript
// HARUS 4 parameter!
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error'
    });
});
\`\`\`
  `,

  quiz: [
    { question: "Middleware wajib panggil?", options: ["res.send()", "next()", "return", "app.use()"], correctAnswer: 1 },
    { question: "Error handling middleware punya berapa parameter?", options: ["2", "3", "4 (err,req,res,next)", "5"], correctAnswer: 2 },
    { question: "Middleware untuk security headers?", options: ["cors", "helmet", "morgan", "body-parser"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Middleware Pipeline",
      language: "javascript",
      code: `import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Global middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Custom middleware
app.use((req, res, next) => {
    req.requestTime = new Date();
    next();
});

// Route-specific middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    req.user = { id: 1, name: 'Budi' };
    next();
};

app.get('/public', (req, res) => res.json({ message: 'Public' }));
app.get('/private', authenticate, (req, res) => res.json({ user: req.user }));

// Error handler (4 params!)
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});`
    }
  ]
};