export const chapter = {
  slug: "web-security-csp",
  title: "Content Security Policy (CSP)",
  description: "Implementasi CSP untuk mencegah XSS dan data injection.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["web-security-xss"],
  tags: ["security", "csp", "headers", "xss"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## What is CSP?

CSP adalah **HTTP header** yang memberitahu browser **resource mana yang boleh di-load**. Pertahanan terkuat melawan XSS.

## Basic CSP

\`\`\`nginx
# Nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' 'unsafe-inline'; img-src *; font-src 'self'; connect-src 'self' https://api.example.com;";
\`\`\`

## CSP Directives

| Directive | Mengontrol |
|-----------|-----------|
| **default-src** | Default untuk semua |
| **script-src** | JavaScript sources |
| **style-src** | CSS sources |
| **img-src** | Image sources |
| **connect-src** | Fetch/XHR/WebSocket |
| **font-src** | Font sources |
| **frame-src** | iframe sources |
| **media-src** | Audio/video |

## CSP Values

| Value | Arti |
|-------|------|
| 'self' | Same origin only |
| 'none' | Nothing allowed |
| 'unsafe-inline' | Allow inline scripts |
| https://cdn.com | Specific domain |
| 'nonce-xyz' | Script with matching nonce |

## Express CSP

\`\`\`javascript
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', 
        "default-src 'self'; script-src 'self' 'nonce-" + req.nonce + "'"
    );
    next();
});
\`\`\`
  `,
  quiz: [
    { question: "CSP?", options: ["CSS", "Content Security Policy (XSS prevention)", "API", "Database"], correctAnswer: 1 },
    { question: "script-src 'self'?", options: ["All scripts", "Only same-origin scripts", "No scripts", "Any origin"], correctAnswer: 1 }
  ],
  codeExamples: []
};