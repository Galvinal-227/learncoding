export const chapter = {
  slug: "web-security-introduction",
  title: "Pengenalan Web Security",
  description: "Pahami kenapa keamanan web penting, threat modeling, dan defense in depth.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["security", "web", "owasp", "hacking"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Kenapa Web Security Penting?

- 🔓 **30,000+ websites di-hack setiap hari**
- 💰 **Rata-rata kerugian data breach: $4.45 juta** (IBM 2024)
- 📉 **60% small businesses bangkrut dalam 6 bulan setelah cyber attack**
- 🔒 **User trust = business survival**

## Security Mindset

\`\`\`
1. NEVER trust user input
2. Defense in depth (multiple layers)
3. Least privilege
4. Secure by default
5. Assume breach
\`\`\`

## Common Attack Vectors

| Attack | Target | Impact |
|--------|--------|--------|
| **XSS** | User browser | Session hijacking |
| **CSRF** | User actions | Unauthorized actions |
| **SQL Injection** | Database | Data breach |
| **DDoS** | Server | Downtime |
| **MITM** | Network | Data interception |
| **Brute Force** | Login | Account compromise |

## Defense Layers

\`\`\`
1. Network: Firewall, DDoS protection
2. Server: SSH hardening, updates
3. Application: Input validation, output encoding
4. Database: Parameterized queries, encryption
5. Authentication: MFA, rate limiting, strong passwords
6. Headers: CSP, HSTS, X-Frame-Options
7. Monitoring: Logging, alerting, incident response
\`\`\`
  `,
  quiz: [
    { question: "Security mindset #1?", options: ["Trust user", "NEVER trust user input", "Hope for best", "Ignore"], correctAnswer: 1 },
    { question: "Defense in depth?", options: ["One layer", "Multiple security layers", "Firewall only", "Password only"], correctAnswer: 1 }
  ],
  codeExamples: []
};