export const chapter = {
  slug: "authentication-password-hashing",
  title: "Password Hashing & Security",
  description: "Pelajari cara menyimpan password dengan aman menggunakan bcrypt dan best practices.",
  icon: "SiAuth0",
  color: "#EB5424",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["authentication-introduction"],
  tags: ["auth", "password", "bcrypt", "hash"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Password Harus Di-hash?

❌ **Plain text**: Jika database bocor, semua password terlihat
✅ **Hash**: Password disimpan sebagai string acak, tidak bisa dibalikkan

## Bcrypt (Industry Standard)

\`\`\`bash
npm install bcrypt
\`\`\`

### Hash Password
\`\`\`javascript
import bcrypt from 'bcrypt';

const saltRounds = 12;

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
}

// Contoh output:
// $2b$12$LJ3m4ys3Gd5K8xYzQcM1PeRt7wHfVn9aB2sN3jK6m8R5tW1yZ4x7
\`\`\`

### Verifikasi Password
\`\`\`javascript
async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

// Usage
const isMatch = await verifyPassword('password123', user.password);
if (!isMatch) {
    return res.status(401).json({ error: 'Password salah' });
}
\`\`\`

## Aturan Password yang Baik

\`\`\`javascript
function validatePassword(password) {
    const rules = [
        { test: p => p.length >= 8, message: 'Minimal 8 karakter' },
        { test: p => /[A-Z]/.test(p), message: 'Harus ada huruf besar' },
        { test: p => /[a-z]/.test(p), message: 'Harus ada huruf kecil' },
        { test: p => /[0-9]/.test(p), message: 'Harus ada angka' },
        { test: p => /[^A-Za-z0-9]/.test(p), message: 'Harus ada karakter spesial' }
    ];
    
    const errors = rules.filter(r => !r.test(password)).map(r => r.message);
    return { valid: errors.length === 0, errors };
}
\`\`\`

## Brute Force Protection

\`\`\`javascript
const loginAttempts = new Map();

async function login(req, res) {
    const { email, password } = req.body;
    const key = \`login:\${email}\`;
    
    // Cek rate limit
    const attempts = loginAttempts.get(key) || { count: 0, lockedUntil: 0 };
    if (attempts.lockedUntil > Date.now()) {
        return res.status(429).json({ 
            error: 'Terlalu banyak percobaan. Coba lagi nanti.' 
        });
    }
    
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        // Catat failed attempt
        attempts.count++;
        if (attempts.count >= 5) {
            attempts.lockedUntil = Date.now() + 15 * 60 * 1000; // 15 menit
        }
        loginAttempts.set(key, attempts);
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Reset attempts
    loginAttempts.delete(key);
    // ... generate token
}
\`\`\`

## Checklist Keamanan Password

\`\`\`
✅ Hash dengan bcrypt (salt rounds 10-12)
✅ Jangan pernah simpan plain text
✅ Validasi password complexity
✅ Rate limiting login
✅ Account lockout setelah X percobaan
✅ Jangan kirim password di URL/query string
✅ HTTPS everywhere
✅ Password reset token expired (15-60 menit)
\`\`\`
  `,

  quiz: [
    { question: "Kenapa password harus di-hash?", options: ["Lebih cepat", "Agar tidak bisa dibaca jika database bocor", "Hiasan", "Aturan"], correctAnswer: 1 },
    { question: "Bcrypt salt rounds direkomendasikan?", options: ["1-2", "5-6", "10-12", "100+"], correctAnswer: 2, explanation: "10-12 rounds balance keamanan dan performa. Lebih tinggi lebih aman tapi lebih lambat." },
    { question: "Rate limiting login untuk?", options: ["Mempercepat", "Mencegah brute force attack", "Menghemat server", "Tidak perlu"], correctAnswer: 1 }
  ],

  codeExamples: []
};