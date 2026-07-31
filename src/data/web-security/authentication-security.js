export const chapter = {
  slug: "web-security-authentication-security",
  title: "Authentication Security",
  description: "Amankan autentikasi: password hashing, brute force protection, session management.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["web-security-sql-injection"],
  tags: ["security", "authentication", "password", "session"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Password Hashing (bcrypt)

\`\`\`javascript
import bcrypt from 'bcrypt';

// Hash password (salt rounds: 12)
const hashedPassword = await bcrypt.hash(userPassword, 12);

// Verify password
const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
}
\`\`\`

## Brute Force Protection

\`\`\`javascript
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 attempts
    message: { error: 'Too many login attempts, try again later' },
    standardHeaders: true,
    legacyHeaders: false
});

app.post('/login', loginLimiter, loginHandler);
\`\`\`

## Account Lockout

\`\`\`javascript
const MAX_ATTEMPTS = 5;
const LOCK_TIME = 30 * 60 * 1000; // 30 minutes

async function login(req, res) {
    const { email } = req.body;
    const attempts = await redis.get('login_attempts:' + email) || 0;
    
    if (attempts >= MAX_ATTEMPTS) {
        const lockRemaining = await redis.ttl('login_lock:' + email);
        return res.status(429).json({ 
            error: 'Account locked. Try again in ' + lockRemaining + ' seconds' 
        });
    }
    
    const user = await validateUser(req.body);
    if (!user) {
        await redis.incr('login_attempts:' + email);
        await redis.expire('login_attempts:' + email, LOCK_TIME / 1000);
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    await redis.del('login_attempts:' + email);
    // Generate token...
}
\`\`\`

## Session Security

\`\`\`javascript
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,    // JavaScript can't read
        secure: true,      // HTTPS only
        sameSite: 'strict', // CSRF protection
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    },
    name: '__Host-session', // Prefix for security
    store: new RedisStore({ client: redis })
}));
\`\`\`

## JWT Best Practices

\`\`\`javascript
// ✅ Short expiration
const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '15m' });

// ✅ Refresh token rotation
const refreshToken = jwt.sign({ userId: user.id, tokenVersion: user.tokenVersion }, secret, { expiresIn: '7d' });

// ✅ Store in httpOnly cookie (NOT localStorage!)
res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });

// ❌ NEVER store JWT in localStorage
// localStorage.setItem('token', token); // XSS can steal!
\`\`\`

## 2FA (Two-Factor Authentication)

\`\`\`javascript
import { authenticator } from 'otplib';

// Generate secret
const secret = authenticator.generateSecret();
// Store secret in user database

// Verify token
const isValid = authenticator.verify({ token: userInput, secret: user.secret });
if (!isValid) {
    return res.status(401).json({ error: 'Invalid 2FA code' });
}
\`\`\`
  `,

  quiz: [
    { question: "bcrypt?", options: ["Encryption", "Password hashing", "JWT", "CORS"], correctAnswer: 1 },
    { question: "Rate limiting: login?", options: ["Speed up", "Prevent brute force attacks", "Cache", "Auth"], correctAnswer: 1 },
    { question: "JWT: localStorage?", options: ["Safe", "XSS risk (use httpOnly cookie)", "Recommended", "Required"], correctAnswer: 1 }
  ],

  codeExamples: []
};