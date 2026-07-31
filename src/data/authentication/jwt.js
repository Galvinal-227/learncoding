export const chapter = {
  slug: "authentication-jwt",
  title: "JWT (JSON Web Token)",
  description: "Kuasai JWT untuk autentikasi stateless di API dan SPA.",
  icon: "SiAuth0",
  color: "#EB5424",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["authentication-introduction"],
  tags: ["auth", "jwt", "token", "stateless"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu JWT?

JSON Web Token adalah standar terbuka (RFC 7519) untuk membuat **token terenkripsi** yang berisi klaim (claims). Token ditandatangani digital, bisa diverifikasi.

## Struktur JWT

\`\`\`
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
\`\`\`

### 3 Bagian (dipisahkan titik):
\`\`\`
Header.Payload.Signature

Header:   {"alg": "HS256", "typ": "JWT"}
Payload:  {"userId": 1, "email": "budi@email.com", "iat": 1234567890, "exp": 1234567890}
Signature: HMAC-SHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
\`\`\`

## JWT Flow

\`\`\`
1. User login → server verifikasi credentials
2. Server buat JWT (sign dengan secret)
3. Server kirim JWT ke client
4. Client simpan JWT (localStorage / httpOnly cookie)
5. Client kirim JWT di header Authorization
6. Server verifikasi signature → dapat user data
\`\`\`

## Implementasi dengan Node.js

\`\`\`bash
npm install jsonwebtoken bcrypt
\`\`\`

\`\`\`javascript
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '15m';
const REFRESH_SECRET = process.env.REFRESH_SECRET;
const REFRESH_EXPIRES_IN = '7d';

// Generate tokens
function generateTokens(user) {
    const accessToken = jwt.sign(
        { userId: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );
    
    const refreshToken = jwt.sign(
        { userId: user.id },
        REFRESH_SECRET,
        { expiresIn: REFRESH_EXPIRES_IN }
    );
    
    return { accessToken, refreshToken };
}

// Auth middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    
    if (!token) {
        return res.status(401).json({ error: 'Token diperlukan' });
    }
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token invalid/expired' });
        }
        req.user = user;
        next();
    });
}

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const tokens = generateTokens(user);
    res.json(tokens);
});

// Refresh token endpoint
app.post('/refresh', (req, res) => {
    const { refreshToken } = req.body;
    
    jwt.verify(refreshToken, REFRESH_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ error: 'Invalid refresh token' });
        
        const user = await User.findById(decoded.userId);
        const tokens = generateTokens(user);
        res.json(tokens);
    });
});

// Protected route
app.get('/profile', authenticateToken, (req, res) => {
    res.json({ user: req.user });
});
\`\`\`

## Access Token vs Refresh Token

| | Access Token | Refresh Token |
|---|-------------|---------------|
| Masa hidup | Pendek (15 menit) | Panjang (7-30 hari) |
| Disimpan | Memory (JS variable) | httpOnly cookie |
| Digunakan | Akses API | Dapat access token baru |
| Revoke | Expired otomatis | Bisa di-blacklist |

## Menyimpan JWT dengan Aman

\`\`\`
✅ httpOnly cookie (terbaik, anti XSS)
✅ Memory (JS variable, hilang saat refresh)
⚠️ localStorage (rentan XSS!)
❌ URL / query string
\`\`\`
  `,

  quiz: [
    { question: "3 bagian JWT?", options: ["Header.Payload.Signature", "User.Pass.Token", "Start.Middle.End", "Key.Value.Expiry"], correctAnswer: 0 },
    { question: "Access token masa hidup?", options: ["Permanen", "Pendek (15 menit - 1 jam)", "1 tahun", "Tidak expired"], correctAnswer: 1 },
    { question: "Simpan JWT paling aman?", options: ["localStorage", "httpOnly cookie", "URL", "console.log"], correctAnswer: 1, explanation: "httpOnly cookie tidak bisa diakses JavaScript, mencegah XSS mencuri token." }
  ],

  codeExamples: []
};