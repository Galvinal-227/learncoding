export const chapter = {
  slug: "authentication-sessions",
  title: "Session-Based Authentication",
  description: "Pahami session-based auth dengan cookies untuk website tradisional.",
  icon: "SiAuth0",
  color: "#EB5424",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["authentication-introduction"],
  tags: ["auth", "session", "cookie", "express"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Cara Kerja Session-Based Auth

\`\`\`
1. User login → kirim email + password
2. Server verifikasi → buat session (simpan di memory/DB/Redis)
3. Server kirim session ID via cookie (Set-Cookie)
4. Browser otomatis kirim cookie di setiap request
5. Server cek session ID → dapatkan user data
6. User logout → hapus session
\`\`\`

## Implementasi dengan Express

\`\`\`bash
npm install express express-session bcrypt
\`\`\`

\`\`\`javascript
import express from 'express';
import session from 'express-session';
import bcrypt from 'bcrypt';

const app = express();

// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,   // Tidak bisa diakses JavaScript
        secure: true,     // Hanya HTTPS
        maxAge: 24 * 60 * 60 * 1000 // 24 jam
    }
}));

// Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Simpan user di session
    req.session.userId = user.id;
    req.session.user = { id: user.id, email: user.email, role: user.role };
    
    res.json({ message: 'Login sukses' });
});

// Protected route
app.get('/profile', (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ error: 'Silakan login' });
    }
    res.json({ user: req.session.user });
});

// Logout
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ error: 'Gagal logout' });
        res.clearCookie('connect.sid');
        res.json({ message: 'Logout sukses' });
    });
});
\`\`\`

## Kelebihan & Kekurangan

| Kelebihan | Kekurangan |
|-----------|------------|
| ✅ Sederhana | ❌ Stateful (server simpan session) |
| ✅ Bisa revoke kapan saja | ❌ Sulit scale horizontal |
| ✅ Cookie httpOnly aman dari XSS | ❌ Tidak cocok untuk mobile app |
| ✅ Browser handle otomatis | ❌ CSRF risk |
  `,

  quiz: [
    { question: "Session auth simpan state di mana?", options: ["Client", "Server", "URL", "Tidak disimpan"], correctAnswer: 1 },
    { question: "Cookie httpOnly artinya?", options: ["Hanya HTTP", "Tidak bisa diakses JavaScript", "Lebih cepat", "Tidak expired"], correctAnswer: 1, explanation: "httpOnly mencegah JavaScript mengakses cookie (melindungi dari XSS)." },
    { question: "Kelemahan session auth?", options: ["Terlalu aman", "Stateful, sulit scale", "Terlalu cepat", "Tidak didukung"], correctAnswer: 1 }
  ],

  codeExamples: []
};