export const chapter = {
  slug: "analytics-privacy",
  title: "Privacy & GDPR Compliance",
  description: "Pahami regulasi privasi data dan cara membuat analytics yang compliant.",
  icon: "SiGoogleanalytics",
  color: "#E37400",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["analytics-google-analytics"],
  tags: ["analytics", "privacy", "gdpr", "cookie"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Regulasi Privasi Data

| Regulasi | Wilayah | Mulai | Denda Maks |
|----------|---------|-------|-----------|
| **GDPR** | Uni Eropa | 2018 | €20 juta / 4% revenue |
| **CCPA** | California, USA | 2020 | $7,500 per violation |
| **LGPD** | Brazil | 2020 | 2% revenue |
| **UU PDP** | Indonesia | 2024 | 2% revenue |

## Prinsip Utama GDPR

1. **Consent** - User harus setuju (opt-in, bukan opt-out)
2. **Right to Access** - User bisa minta data mereka
3. **Right to Delete** - User bisa minta hapus data
4. **Data Minimization** - Hanya kumpulkan data yang diperlukan
5. **Transparency** - Jelaskan apa yang dilacak

## Implementasi Cookie Consent

\`\`\`html
<!-- Cookie Consent Banner -->
<div id="cookie-banner" style="position:fixed;bottom:0;background:#333;color:white;padding:20px;width:100%;z-index:9999;">
    <p>Website ini menggunakan cookies untuk analytics. 
       <a href="/privacy">Privacy Policy</a></p>
    <button onclick="acceptCookies()">Accept</button>
    <button onclick="rejectCookies()">Reject</button>
</div>
\`\`\`

\`\`\`javascript
function acceptCookies() {
    localStorage.setItem('cookie_consent', 'accepted');
    document.getElementById('cookie-banner').style.display = 'none';
    // Initialize analytics
    gtag('consent', 'update', {
        'analytics_storage': 'granted'
    });
}

function rejectCookies() {
    localStorage.setItem('cookie_consent', 'rejected');
    document.getElementById('cookie-banner').style.display = 'none';
    // Don't track
    gtag('consent', 'update', {
        'analytics_storage': 'denied'
    });
}
\`\`\`

## GA4 Consent Mode

\`\`\`javascript
// Default: deny until consent
gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'personalization_storage': 'denied'
});

// Setelah consent
gtag('consent', 'update', {
    'analytics_storage': 'granted'
});
\`\`\`

## Privacy-First Analytics

Tool yang privacy-compliant by default:

- **Plausible** - No cookies, GDPR compliant out of the box
- **Fathom** - Simple, privacy-focused
- **Simple Analytics** - EU-based, no cookies
- **PostHog** - Bisa self-host

## Checklist Privacy

\`\`\`
✅ Cookie consent banner (opt-in)
✅ Privacy policy halaman
✅ GA4 consent mode
✅ Tidak track PII
✅ Data retention limit
✅ User bisa request/delete data
✅ IP anonymization
✅ Third-party processors terdaftar
\`\`\`
  `,

  quiz: [
    { question: "GDPR berlaku di mana?", options: ["Seluruh dunia", "Uni Eropa", "USA", "Asia"], correctAnswer: 1 },
    { question: "Cookie consent harus?", options: ["Otomatis", "Opt-in (user setuju dulu)", "Opt-out", "Tidak perlu"], correctAnswer: 1 },
    { question: "Privacy-first analytics tool?", options: ["GA4", "Plausible", "Mixpanel", "Amplitude"], correctAnswer: 1, explanation: "Plausible adalah analytics tool yang privacy-first, tanpa cookies, dan GDPR compliant out of the box." }
  ],

  codeExamples: []
};