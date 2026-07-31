export const chapter = {
  slug: "web-security-owasp",
  title: "OWASP Top 10",
  description: "Kenali 10 risiko keamanan aplikasi web paling kritis menurut OWASP.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["web-security-introduction"],
  tags: ["security", "owasp", "top10", "vulnerability"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## OWASP Top 10 (2021)

| # | Risk | Deskripsi |
|---|------|-----------|
| **A01** | Broken Access Control | User bisa akses data orang lain |
| **A02** | Cryptographic Failures | Data tidak terenkripsi |
| **A03** | Injection | SQL, NoSQL, OS command injection |
| **A04** | Insecure Design | Desain tidak aman dari awal |
| **A05** | Security Misconfiguration | Default config, error verbose |
| **A06** | Vulnerable Components | Library usang, tidak di-update |
| **A07** | Auth Failures | Password lemah, session fixation |
| **A08** | Software & Data Integrity | CI/CD pipeline attack |
| **A09** | Logging & Monitoring | Tidak ada log, deteksi lambat |
| **A10** | SSRF | Server-side request forgery |

## A01: Broken Access Control

\`\`\`javascript
// ❌ BAD: No authorization check
app.get('/api/users/:id', (req, res) => {
    const user = db.findById(req.params.id);
    res.json(user);
});

// ✅ GOOD: Check ownership
app.get('/api/users/:id', auth, (req, res) => {
    if (req.user.id !== req.params.id && req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Forbidden' });
    }
    const user = db.findById(req.params.id);
    res.json(user);
});
\`\`\`

## A03: Injection

\`\`\`javascript
// ❌ BAD: String concatenation
const query = "SELECT * FROM users WHERE email = '" + email + "'";

// ✅ GOOD: Parameterized query
const [user] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
\`\`\`
  `,
  quiz: [
    { question: "OWASP A01?", options: ["Injection", "Broken Access Control", "XSS", "CSRF"], correctAnswer: 1 },
    { question: "OWASP A03?", options: ["Auth", "Injection (SQL, XSS)", "Crypto", "Logging"], correctAnswer: 1 }
  ],
  codeExamples: []
};