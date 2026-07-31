export const chapter = {
  slug: "authentication-security-considerations",
  title: "Security Best Practices",
  description: "Praktik terbaik keamanan autentikasi: HTTPS, CSRF, XSS, rate limiting.",
  icon: "SiAuth0",
  color: "#EB5424",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["authentication-jwt"],
  tags: ["auth", "security", "csrf", "xss"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. HTTPS Everywhere

\`\`\`javascript
// Express - redirect HTTP ke HTTPS
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(\`https://\${req.hostname}\${req.url}\`);
    }
    next();
});
\`\`\`

## 2. CSRF Protection

\`\`\`bash
npm install csurf
\`\`\`

\`\`\`javascript
import csrf from 'csurf';

const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);

// Kirim CSRF token ke frontend
app.get('/csrf-token', (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});
\`\`\`

## 3. Secure HTTP Headers

\`\`\`bash
npm install helmet
\`\`\`

\`\`\`javascript
import helmet from 'helmet';

app.use(helmet());
// Sets: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, CSP, HSTS, dll
\`\`\`

## 4. CORS Configuration

\`\`\`javascript
import cors from 'cors';

app.use(cors({
    origin: process.env.FRONTEND_URL, // 'https://myapp.com'
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
\`\`\`

## 5. Rate Limiting

\`\`\`bash
npm install express-rate-limit
\`\`\`

\`\`\`javascript
import rateLimit from 'express-rate-limit';

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 5, // Max 5 percobaan
    message: { error: 'Terlalu banyak percobaan, coba lagi nanti' }
});

app.use('/login', authLimiter);
\`\`\`

## Checklist Keamanan

\`\`\`
✅ HTTPS everywhere
✅ Password di-hash (bcrypt)
✅ JWT dengan httpOnly cookie
✅ CSRF protection
✅ Helmet headers
✅ CORS configured
✅ Rate limiting
✅ Input validation
✅ Session expiry
✅ 2FA untuk akun penting
✅ Audit log untuk login
\`\`\`
  `,

  quiz: [
    { question: "Helmet package untuk?", options: ["UI component", "Secure HTTP headers", "Database", "Testing"], correctAnswer: 1 },
    { question: "CSRF attack?", options: ["XSS", "Serangan yang memaksa user eksekusi aksi tidak diinginkan", "DDoS", "Brute force"], correctAnswer: 1 },
    { question: "CORS untuk?", options: ["Styling", "Kontrol cross-origin requests", "Database", "Logging"], correctAnswer: 1 }
  ],

  codeExamples: []
};