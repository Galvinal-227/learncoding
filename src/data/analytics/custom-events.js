export const chapter = {
  slug: "analytics-custom-events",
  title: "Custom Events & Tracking",
  description: "Buat custom event tracking untuk mengukur aksi penting user di website.",
  icon: "SiGoogleanalytics",
  color: "#E37400",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["analytics-google-analytics"],
  tags: ["analytics", "events", "tracking", "conversion"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Custom Events?

Automatic events tidak cukup. Custom events melacak **aksi bisnis spesifik** yang penting.

## Events yang Wajib Dilacak

### E-commerce
\`\`\`javascript
// View product
gtag('event', 'view_item', {
    items: [{ item_id: 'SKU123', item_name: 'Sepatu', price: 250000 }]
});

// Add to cart
gtag('event', 'add_to_cart', {
    items: [{ item_id: 'SKU123', quantity: 1 }]
});

// Begin checkout
gtag('event', 'begin_checkout', { ... });

// Purchase (conversion!)
gtag('event', 'purchase', {
    transaction_id: 'TXN123',
    value: 250000,
    currency: 'IDR',
    items: [{ item_id: 'SKU123', item_name: 'Sepatu', price: 250000, quantity: 1 }]
});
\`\`\`

### SaaS / Web App
\`\`\`javascript
// Sign up
gtag('event', 'sign_up', { method: 'Google' });

// Login
gtag('event', 'login', { method: 'Email' });

// Feature usage
gtag('event', 'feature_used', { feature_name: 'export_pdf' });

// Upgrade plan
gtag('event', 'upgrade_plan', { plan: 'Pro', value: 99 });
\`\`\`

### Content / Blog
\`\`\`javascript
// Scroll depth
gtag('event', 'scroll_depth', { percent: 75 });

// Article read (3+ menit)
gtag('event', 'article_read', { article_title: 'Cara Setup GA4' });

// Share
gtag('event', 'share', { method: 'Twitter', content_type: 'article' });
\`\`\`

## Google Tag Manager (GTM)

GTM memudahkan tracking tanpa edit kode:

\`\`\`html
<!-- GTM Snippet -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
\`\`\`

Di GTM Console:
1. Variables: Tentukan data yang dikirim
2. Triggers: Kapan event dikirim (klik, form submit, timer)
3. Tags: Ke mana data dikirim (GA4, Facebook Pixel, dll)

## Best Practices

\`\`\`
✅ Gunakan snake_case untuk event names
✅ Konsisten: sign_up ≠ signup ≠ SignUp
✅ Batasi parameter (GA4 max 25 per event)
✅ Jangan track PII (email, nama lengkap, KTP)
✅ Test dengan DebugView sebelum production
✅ Dokumentasikan semua custom events
\`\`\`
  `,

  quiz: [
    { question: "Kenapa custom events penting?", options: ["Hiasan", "Melacak aksi bisnis spesifik yang tidak otomatis", "Gratis", "Wajib hukum"], correctAnswer: 1 },
    { question: "Google Tag Manager untuk?", options: ["SEO", "Manage tracking tags tanpa edit kode", "Database", "Hosting"], correctAnswer: 1 },
    { question: "Yang TIDAK BOLEH dilacak?", options: ["Page views", "Klik tombol", "Email dan nama user (PII)", "Purchase"], correctAnswer: 2, explanation: "PII (Personally Identifiable Information) tidak boleh dikirim ke analytics." }
  ],

  codeExamples: []
};