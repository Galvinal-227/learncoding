export const chapter = {
  slug: "web-security-xss",
  title: "Cross-Site Scripting (XSS)",
  description: "Pahami dan cegah XSS: Reflected, Stored, DOM-based.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["web-security-owasp"],
  tags: ["security", "xss", "injection", "sanitize"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Jenis XSS

| Type | Deskripsi |
|------|-----------|
| **Reflected** | Script di URL langsung dirender |
| **Stored** | Script disimpan di database |
| **DOM-based** | Manipulasi DOM client-side |

## Reflected XSS

\`\`\`javascript
// ❌ VULNERABLE
app.get('/search', (req, res) => {
    res.send('<h1>Search results for: ' + req.query.q + '</h1>');
});
// URL: /search?q=<script>alert('XSS')</script>

// ✅ SAFE: Encode output
import escapeHtml from 'escape-html';
app.get('/search', (req, res) => {
    res.send('<h1>Search results for: ' + escapeHtml(req.query.q) + '</h1>');
});
\`\`\`

## Prevention

\`\`\`javascript
// 1. NEVER use innerHTML with user data
element.innerHTML = userInput; // ❌

// 2. Use textContent (safe)
element.textContent = userInput; // ✅

// 3. DOMPurify (sanitize HTML)
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput); // ✅

// 4. CSP Header
Content-Security-Policy: default-src 'self'; script-src 'self'
\`\`\`

## React: Auto-Escapes JSX

\`\`\`jsx
// ✅ React auto-escapes
<div>{userInput}</div> // Safe!

// ❌ dangerouslySetInnerHTML = potential XSS
<div dangerouslySetInnerHTML={{ __html: userInput }} />
\`\`\`
  `,
  quiz: [
    { question: "innerHTML + user input?", options: ["Safe", "XSS risk (use textContent)", "OK", "Auto-escaped"], correctAnswer: 1 },
    { question: "DOMPurify?", options: ["CSS library", "Sanitize HTML (remove XSS)", "Database", "Auth"], correctAnswer: 1 }
  ],
  codeExamples: []
};