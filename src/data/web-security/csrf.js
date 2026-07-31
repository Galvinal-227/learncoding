export const chapter = {
  slug: "web-security-csrf",
  title: "Cross-Site Request Forgery (CSRF)",
  description: "Pahami dan cegah CSRF dengan token, SameSite cookies, dan custom headers.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["web-security-xss"],
  tags: ["security", "csrf", "token", "samesite"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## CSRF Attack

\`\`\`html
<!-- Di website jahat -->
<img src="https://bank.com/transfer?to=hacker&amount=1000000" />
<!-- Jika user logged in → transfer executed! -->
\`\`\`

## Prevention: CSRF Token

\`\`\`javascript
// Express + csurf
import csrf from 'csurf';
app.use(csrf({ cookie: true }));

// Kirim token ke client
app.get('/form', (req, res) => {
    res.render('form', { csrfToken: req.csrfToken() });
});

// Form submission
<form action="/transfer" method="POST">
    <input type="hidden" name="_csrf" value="{csrfToken}">
</form>
\`\`\`

## Prevention: SameSite Cookie

\`\`\`javascript
res.cookie('session', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict'  // or 'lax'
});
// Strict: No cross-site requests at all
// Lax: Allows GET from external sites, blocks POST
\`\`\`

## SPA Protection

\`\`\`javascript
// Custom header (non-standard) → browser blocks cross-origin
fetch('/api/data', {
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
});

// Server check
if (req.headers['x-requested-with'] !== 'XMLHttpRequest') {
    return res.status(403).json({ error: 'CSRF check failed' });
}
\`\`\`
  `,
  quiz: [
    { question: "CSRF?", options: ["XSS", "Force user to execute unwanted actions", "SQL attack", "DDoS"], correctAnswer: 1 },
    { question: "SameSite: Strict?", options: ["All cross-site", "No cross-site requests", "GET only", "POST only"], correctAnswer: 1 }
  ],
  codeExamples: []
};