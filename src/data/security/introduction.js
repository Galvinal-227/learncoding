export const chapter = {
  slug: "introduction",
  title: "Pengenalan Web Security",
  description: "Memahami dasar-dasar keamanan web dan ancaman umum pada aplikasi web.",
  icon: "SiSecurity",
  color: "#00B4D8",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["security", "web-security", "owasp", "introduction"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Web Security?

Web security adalah praktik melindungi aplikasi web, server, dan data dari berbagai ancaman dan serangan siber.

## OWASP Top 10 (2021)

### 1. Broken Access Control (A01)
Kegagalan dalam mengontrol akses pengguna ke resource.

### 2. Cryptographic Failures (A02)
Kegagalan dalam implementasi kriptografi.

### 3. Injection (A03)
SQL Injection, NoSQL Injection, OS Command Injection.

### 4. Insecure Design (A04)
Cacat dalam desain keamanan.

### 5. Security Misconfiguration (A05)
Konfigurasi keamanan yang salah.

### 6. Vulnerable and Outdated Components (A06)
Komponen yang rentan atau usang.

### 7. Identification and Authentication Failures (A07)
Kegagalan identifikasi dan autentikasi.

### 8. Software and Data Integrity Failures (A08)
Kegagalan integritas software dan data.

### 9. Security Logging and Monitoring Failures (A09)
Kegagalan logging dan monitoring.

### 10. Server-Side Request Forgery (A10)
SSRF - Memaksa server melakukan request.

## Common Attacks

### 1. SQL Injection
\`\`\`javascript
// ❌ Vulnerable
const query = "SELECT * FROM users WHERE email = '" + userInput + "'";

// ✅ Safe
const query = "SELECT * FROM users WHERE email = ?";
db.query(query, [userInput]);
\`\`\`

### 2. Cross-Site Scripting (XSS)
\`\`\`javascript
// ❌ Vulnerable
element.innerHTML = userInput;

// ✅ Safe
element.textContent = userInput;
element.innerText = userInput;
\`\`\`

### 3. Cross-Site Request Forgery (CSRF)
\`\`\`javascript
// ✅ Use CSRF tokens
const csrfToken = generateToken();
// Validate token on every state-changing request
\`\`\`

### 4. Man-in-the-Middle (MITM)
\`\`\`javascript
// ✅ Always use HTTPS
const url = 'https://api.example.com/data';

// ❌ Never use HTTP
const url = 'http://api.example.com/data';
\`\`\`

## Security Principles

### 1. Defense in Depth
Multiple layers of security.

### 2. Principle of Least Privilege
Give minimum required access.

### 3. Secure by Default
Default configurations should be secure.

### 4. Never Trust User Input
Always validate and sanitize input.

### 5. Keep Secrets Secret
Never hardcode secrets in code.

## Security Headers

\`\`\`javascript
// Essential security headers
const securityHeaders = {
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Content-Security-Policy': "default-src 'self'",
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
};
\`\`\`

## Security Checklist

### Authentication & Authorization
- [ ] Use strong password hashing (bcrypt, argon2)
- [ ] Implement MFA (Multi-Factor Authentication)
- [ ] Use JWT with proper expiration
- [ ] Implement role-based access control
- [ ] Session management

### Data Protection
- [ ] Use HTTPS everywhere
- [ ] Encrypt sensitive data at rest
- [ ] Use parameterized queries
- [ ] Sanitize user input
- [ ] Implement rate limiting

### Infrastructure
- [ ] Keep dependencies updated
- [ ] Use security headers
- [ ] Implement logging
- [ ] Regular security audits
- [ ] Backup data regularly

### Monitoring
- [ ] Log security events
- [ ] Monitor for anomalies
- [ ] Set up alerts
- [ ] Regular security scans
- [ ] Incident response plan
  `,
  quiz: [
    {
      question: "Apa itu SQL Injection?",
      options: [
        "Serangan pada database SQL",
        "Serangan pada JavaScript",
        "Serangan pada CSS",
        "Serangan pada HTML"
      ],
      correctAnswer: 0
    },
    {
      question: "Prinsip keamanan 'give minimum required access' disebut?",
      options: [
        "Defense in Depth",
        "Least Privilege",
        "Secure by Default",
        "Zero Trust"
      ],
      correctAnswer: 1
    },
    {
      question: "Header untuk mencegah XSS adalah?",
      options: [
        "X-XSS-Protection",
        "X-Frame-Options",
        "Content-Security-Policy",
        "Semua di atas"
      ],
      correctAnswer: 3
    }
  ],
  codeExamples: [
    {
      title: "Security Middleware",
      code: `// security.js - Complete security middleware
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const xss = require('xss-clean');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');

const securityMiddleware = (app) => {
    // 1. Helmet - Security headers
    app.use(helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'"],
                styleSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ["'self'", "data:", "https:"],
                connectSrc: ["'self'"]
            }
        },
        hsts: {
            maxAge: 31536000,
            includeSubDomains: true,
            preload: true
        }
    }));
    
    // 2. CORS
    app.use(cors({
        origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }));
    
    // 3. Rate Limiting
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // 100 requests per window
        message: {
            error: 'Too many requests',
            message: 'Please try again later'
        },
        standardHeaders: true,
        legacyHeaders: false
    });
    app.use('/api', limiter);
    
    // 4. Data Sanitization
    app.use(mongoSanitize()); // Prevent NoSQL injection
    app.use(xss()); // Prevent XSS attacks
    app.use(hpp()); // Prevent HTTP Parameter Pollution
    
    // 5. Request size limit
    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ extended: true, limit: '10mb' }));
    
    // 6. Disable X-Powered-By header
    app.disable('x-powered-by');
    
    // 7. Custom security headers
    app.use((req, res, next) => {
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
        next();
    });
    
    return app;
};

module.exports = securityMiddleware;`,
      language: "javascript"
    }
  ]
};