export const chapter = {
  slug: "web-security-security-headers",
  title: "Security Headers",
  description: "Konfigurasi security headers: HSTS, X-Frame-Options, X-Content-Type-Options.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["web-security-csp"],
  tags: ["security", "headers", "hsts", "helmet"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Essential Security Headers

\`\`\`javascript
import helmet from 'helmet';
app.use(helmet()); // All headers!

// Manual:
app.use((req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '0'); // Deprecated
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=()');
    next();
});
\`\`\`

## Header Reference

| Header | Fungsi |
|--------|--------|
| **HSTS** | Force HTTPS |
| **X-Frame-Options** | Prevent clickjacking |
| **X-Content-Type-Options** | Prevent MIME sniffing |
| **Referrer-Policy** | Control referrer info |
| **Permissions-Policy** | Disable APIs |

## Test Security Headers

\`\`\`
https://securityheaders.com
Mozilla Observatory
\`\`\`
  `,
  quiz: [
    { question: "HSTS?", options: ["CSS", "HTTP Strict Transport Security (force HTTPS)", "API", "Database"], correctAnswer: 1 },
    { question: "X-Frame-Options?", options: ["CSS frames", "Prevent clickjacking", "Frame size", "Animation"], correctAnswer: 1 }
  ],
  codeExamples: []
};