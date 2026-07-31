export const chapter = {
  slug: "authentication",
  title: "Authentication & Authorization",
  description: "Mengimplementasikan autentikasi dan otorisasi dalam REST API.",
  icon: "SiAuth0",
  color: "#EB5424",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["rest-api-introduction", "rest-api-headers"],
  tags: ["authentication", "authorization", "jwt", "oauth", "security"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Autentikasi vs Otorisasi

**Autentikasi** - Verifikasi identitas user (siapa kamu?)
**Otorisasi** - Verifikasi akses user (apa yang bisa kamu lakukan?)

## Metode Autentikasi

### 1. Basic Authentication

\`\`\`http
GET /api/users HTTP/1.1
Authorization: Basic dXNlcjpwYXNzd29yZA==
\`\`\`

\`\`\`javascript
// Encoding
const username = 'user';
const password = 'password';
const encoded = btoa(\`\${username}:\${password}\`);
// => dXNlcjpwYXNzd29yZA==
\`\`\`

### 2. Bearer Token (JWT)

\`\`\`http
GET /api/users HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

### 3. API Keys

\`\`\`http
GET /api/users HTTP/1.1
X-API-Key: sk_live_123abc456def
\`\`\`

### 4. OAuth 2.0

Flow: Login → Redirect → Authorization Code → Access Token

\`\`\`javascript
// OAuth flow
const authUrl = 'https://auth.example.com/authorize?' + 
    'client_id=CLIENT_ID&' +
    'redirect_uri=https://app.example.com/callback&' +
    'response_type=code&' +
    'scope=read write';
\`\`\`

## JWT (JSON Web Token)

### Struktur JWT
\`\`\`javascript
// Header
{
    "alg": "HS256",
    "typ": "JWT"
}

// Payload
{
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true,
    "iat": 1516239022,
    "exp": 1516242622
}

// Signature
// HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
\`\`\`

### JWT Implementation

\`\`\`javascript
const jwt = require('jsonwebtoken');

// Generate token
const token = jwt.sign(
    { userId: 123, role: 'admin' },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
);

// Verify token
try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
} catch (error) {
    // Invalid token
}

// Middleware
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'No token provided' });
    }
    
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
\`\`\`

## Authorization

### Role-Based Access Control (RBAC)

\`\`\`javascript
// Role-based middleware
const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ 
                error: 'Forbidden: Insufficient permissions' 
            });
        }
        next();
    };
};

// Usage
app.get('/api/admin', 
    authenticate, 
    authorize('admin', 'superadmin'),
    (req, res) => {
        res.json({ message: 'Admin data' });
    }
);
\`\`\`

## Refresh Tokens

\`\`\`javascript
// Refresh token flow
app.post('/api/refresh', async (req, res) => {
    const { refreshToken } = req.body;
    
    // Verify refresh token
    const user = await findUserByRefreshToken(refreshToken);
    if (!user) {
        return res.status(401).json({ error: 'Invalid refresh token' });
    }
    
    // Generate new access token
    const newAccessToken = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
    );
    
    res.json({ accessToken: newAccessToken });
});
\`\`\`

## Best Practices

1. Selalu gunakan HTTPS
2. Store tokens securely (HttpOnly cookies, secure storage)
3. Implement token expiration
4. Use refresh tokens for long sessions
5. Rate limiting untuk mencegah brute force
6. Log activity
7. Implement proper password hashing (bcrypt)
8. CORS configuration
9. Sanitize input
10. Regular security audits
  `,
  quiz: [
    {
      question: "Perbedaan autentikasi dan otorisasi adalah?",
      options: [
        "Sama saja",
        "Autentikasi = siapa, Otorisasi = apa yang bisa dilakukan",
        "Autentikasi = apa, Otorisasi = siapa",
        "Tidak ada perbedaan"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa kepanjangan JWT?",
      options: [
        "Java Web Token",
        "JSON Web Token",
        "JavaScript Web Token",
        "JWT Web Token"
      ],
      correctAnswer: 1
    },
    {
      question: "Status code untuk unauthorized adalah?",
      options: ["400", "401", "403", "404"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Authentication System",
      code: `// auth.js - Authentication module
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/User');

// Register
const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create user
        const user = await User.create({
            email,
            password: hashedPassword,
            name
        });
        
        // Generate token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        
        res.status(201).json({ 
            token,
            user: { id: user.id, email: user.email, name: user.name }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Check password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Generate token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        
        res.json({ 
            token,
            user: { id: user.id, email: user.email, name: user.name }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Auth middleware
const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: 'No token provided' });
        }
        
        const token = authHeader.replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        
        req.user = user;
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Invalid token' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expired' });
        }
        res.status(500).json({ error: error.message });
    }
};

// Authorization middleware
const authorize = (roles = []) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ 
                error: 'Forbidden: Insufficient permissions' 
            });
        }
        next();
    };
};

module.exports = { register, login, authenticate, authorize };`,
      language: "javascript"
    }
  ]
};