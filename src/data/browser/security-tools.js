export const chapter = {
  slug: "browser-security-tools",
  title: "Security Tools",
  description: "Gunakan DevTools untuk audit keamanan: HTTPS, CSP, CORS, mixed content.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  difficulty: "Intermediate",
  estimatedReadingTime: 10,
  prerequisites: ["browser-devtools"],
  tags: ["browser", "security", "https", "csp"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Security Panel

### Security Tab
DevTools → Security panel → lihat:
- HTTPS valid?
- Certificate info
- Mixed content warning
- Subresource security

## Mixed Content

\`\`\`
❌ Active Mixed Content: <script src="http://..."> di halaman HTTPS
⚠️ Passive Mixed Content: <img src="http://..."> di halaman HTTPS
\`\`\`

Cek di Console (warning kuning/merah).

## CSP (Content Security Policy)

### Cek CSP Headers
Network panel → klik request → Response Headers → \`Content-Security-Policy\`

### CSP Violations
Console akan menampilkan:
\`\`\`
[Report Only] Refused to load the script '...' 
because it violates the following Content Security Policy directive: ...
\`\`\`

## CORS Errors

Console menampilkan:
\`\`\`
Access to fetch at 'https://api.example.com' from origin 'https://mysite.com' 
has been blocked by CORS policy...
\`\`\`

## Certificate Info

Security panel → View certificate:
- Issued to (domain)
- Issued by (CA)
- Validity period
- Fingerprint

## Application → Storage

- **Cookies**: Cek HttpOnly, Secure, SameSite
- **Trust Tokens**: Privacy API
- **Interest Groups**: Ads API

## Audits Cepat

\`\`\`
✅ HTTPS valid (Security panel)
✅ Tidak ada mixed content (Console)
✅ CSP configured (Response Headers)
✅ Cookies Secure + HttpOnly
✅ CORS configured correctly
✅ HSTS header present
✅ X-Content-Type-Options: nosniff
✅ X-Frame-Options: DENY
\`\`\`
  `,

  quiz: [
    { question: "Mixed content warning artinya?", options: ["Konten campur", "HTTP resource di halaman HTTPS", "CSS error", "JS error"], correctAnswer: 1 },
    { question: "CSP singkatan?", options: ["Content Security Policy", "Cross Site Protection", "Cookie Secure Protocol", "Client Server Protocol"], correctAnswer: 0 },
    { question: "CORS error terjadi saat?", options: ["Request same-origin", "Cross-origin request tanpa header yang benar", "HTTPS error", "DNS error"], correctAnswer: 1 }
  ],

  codeExamples: []
};