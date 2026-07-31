export const chapter = {
  slug: "web-security-api-security",
  title: "API Security",
  description: "Amankan API: rate limiting, API keys, JWT, input validation, logging.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["web-security-authentication-security"],
  tags: ["security", "api", "rate-limiting", "jwt"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Rate Limiting

\`\`\`javascript
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';

// Global API limiter
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per window
    message: { error: 'Too many requests' },
    store: new RedisStore({ client: redis })
});

app.use('/api/', apiLimiter);

// Stricter for sensitive endpoints
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { error: 'Too many attempts' }
});

app.use('/api/login', authLimiter);
app.use('/api/register', authLimiter);
\`\`\`

## API Key Authentication

\`\`\`javascript
function apiKeyAuth(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    
    if (!apiKey) {
        return res.status(401).json({ error: 'API key required' });
    }
    
    const user = await db.findByApiKey(apiKey);
    if (!user) {
        return res.status(403).json({ error: 'Invalid API key' });
    }
    
    req.user = user;
    next();
}

app.use('/api/v2/', apiKeyAuth);
\`\`\`

## Input Validation (Zod)

\`\`\`javascript
import { z } from 'zod';

const createUserSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    age: z.number().int().min(0).max(150),
    role: z.enum(['user', 'admin']).default('user')
});

app.post('/api/users', async (req, res) => {
    try {
        const data = createUserSchema.parse(req.body);
        const user = await createUser(data);
        res.status(201).json(user);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        throw error;
    }
});
\`\`\`

## Request Size Limit

\`\`\`javascript
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: false }));
\`\`\`

## Security Logging

\`\`\`javascript
import winston from 'winston';

const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'security.log' })
    ]
});

app.use((req, res, next) => {
    // Log suspicious activity
    if (req.path.includes('admin') && req.method !== 'GET') {
        logger.warn('Admin action', {
            user: req.user?.id,
            method: req.method,
            path: req.path,
            ip: req.ip,
            timestamp: new Date()
        });
    }
    next();
});
\`\`\`

## API Security Checklist

\`\`\`
✅ HTTPS everywhere
✅ Rate limiting
✅ Input validation (Zod/Joi)
✅ Authentication (JWT/httpOnly)
✅ Authorization (check ownership)
✅ Request size limits
✅ CORS configured properly
✅ Security headers (Helmet)
✅ SQL injection prevention
✅ Logging & monitoring
✅ API versioning
✅ Deprecation warnings
\`\`\`
  `,

  quiz: [
    { question: "Rate limiting?", options: ["Speed up", "Prevent abuse (limit requests)", "Cache", "Auth"], correctAnswer: 1 },
    { question: "Zod?", options: ["Database", "Schema validation library", "ORM", "Cache"], correctAnswer: 1 },
    { question: "API key: where?", options: ["URL", "Header (x-api-key)", "Body", "Cookie only"], correctAnswer: 1 }
  ],

  codeExamples: []
};