export const chapter = {
  slug: "analytics-introduction",
  title: "Pengenalan Web Analytics",
  description: "Pahami apa itu web analytics, kenapa penting, dan metrics yang perlu dilacak.",
  icon: "SiGoogleanalytics",
  color: "#E37400",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["analytics", "data", "tracking", "metrics"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Web Analytics?

Web Analytics adalah proses **mengumpulkan, menganalisis, dan melaporkan** data tentang penggunaan website atau aplikasi.

## Kenapa Developer Perlu Paham Analytics?

- 📊 **Data-driven decisions** - Bukan asumsi
- 🎯 **Tahu user behavior** - Fitur mana yang dipakai?
- 💰 **Optimasi konversi** - Di mana user drop off?
- 🐛 **Deteksi masalah** - Halaman error, slow load
- 📈 **Ukur keberhasilan** - Apakah fitur baru berhasil?

## Key Metrics yang Wajib Dilacak

### Acquisition (Dari mana user datang?)
- Direct, Organic Search, Social Media, Referral, Paid Ads

### Engagement (Apa yang user lakukan?)
- Page Views, Session Duration, Bounce Rate
- Custom Events (klik tombol, submit form, download)

### Monetization (Berapa yang dihasilkan?)
- Conversion Rate, Revenue, Average Order Value

### Retention (User balik lagi?)
- Returning Users, Churn Rate, Daily Active Users (DAU)

## Tools Populer

| Tool | Use Case | Harga |
|------|----------|-------|
| **Google Analytics 4** | Web analytics umum | Gratis |
| **Mixpanel** | Product analytics | Freemium |
| **Amplitude** | Product analytics | Freemium |
| **Hotjar** | Heatmaps & session recording | Freemium |
| **Microsoft Clarity** | Heatmaps (gratis!) | Gratis |
| **Plausible** | Privacy-first analytics | Self-host/berbayar |
| **PostHog** | Open source product analytics | Self-host/freemium |

## Arsitektur Tracking

\`\`\`
┌──────────────┐    Event (click, view)    ┌──────────────┐
│              │─────────────────────────▶│              │
│   Website    │                          │  Analytics   │
│   / App      │                          │  Platform    │
│              │                          │  (GA4, Mix)  │
└──────────────┘                          └──────────────┘
                                                │
                                                ▼
                                         ┌──────────────┐
                                         │  Dashboard   │
                                         │  & Reports   │
                                         └──────────────┘
\`\`\`

## Mulai dari Mana?

1. 📊 Install Google Analytics 4 (gratis, wajib punya)
2. 🎯 Tentukan 3-5 key metrics
3. 📝 Setup custom events untuk aksi penting
4. 📈 Review dashboard mingguan
5. 🧪 A/B test fitur baru
  `,

  quiz: [
    { question: "Apa itu Web Analytics?", options: ["SEO tool", "Mengumpulkan dan menganalisis data penggunaan website", "Database", "Framework"], correctAnswer: 1 },
    { question: "Tool analytics gratis dari Google?", options: ["Mixpanel", "Google Analytics 4", "Amplitude", "Hotjar"], correctAnswer: 1 },
    { question: "Bounce rate mengukur apa?", options: ["Kecepatan website", "Persentase user yang keluar setelah 1 halaman", "Jumlah klik", "Total user"], correctAnswer: 1 }
  ],

  codeExamples: []
};