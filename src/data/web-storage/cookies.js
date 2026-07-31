export const chapter = {
  slug: "web-storage-cookies",
  title: "Cookies",
  description: "Pahami cookies: set, get, httpOnly, secure, SameSite.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["web-storage-introduction"],
  tags: ["web-storage", "cookies", "httpOnly", "security"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Set Cookie

\`\`\`javascript
document.cookie = "theme=dark; path=/; max-age=86400; SameSite=Lax";
\`\`\`

## Cookie Attributes

| Attribute | Deskripsi |
|-----------|-----------|
| **path** | URL path scope |
| **domain** | Domain scope |
| **max-age** | Lifetime in seconds |
| **expires** | Expiry date |
| **httpOnly** | Not accessible via JavaScript |
| **secure** | HTTPS only |
| **SameSite** | CSRF protection (Strict/Lax/None) |

## Server-Side Cookie (httpOnly)

\`\`\`javascript
// Express
res.cookie('token', 'jwt-token', {
    httpOnly: true,    // JavaScript can't access!
    secure: true,      // HTTPS only
    sameSite: 'strict',
    maxAge: 86400000   // 24 hours
});
\`\`\`

## Cookie vs localStorage

| | Cookie | localStorage |
|---|--------|-------------|
| Size | 4KB | 5-10MB |
| Server | Auto-sent | Manual |
| JS access | httpOnly blocks | Always |
| Expiry | Configurable | Never |
  `,
  quiz: [
    { question: "httpOnly cookie?", options: ["JS can read", "JS cannot access (secure)", "HTTPS only", "Expires fast"], correctAnswer: 1 },
    { question: "SameSite?", options: ["Domain", "CSRF protection", "Expiry", "Size"], correctAnswer: 1 }
  ],
  codeExamples: []
};