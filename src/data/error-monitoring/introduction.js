export const chapter = {
  slug: "error-monitoring-introduction",
  title: "Pengenalan Error Monitoring",
  description: "Pahami kenapa error monitoring penting dan tools apa yang tersedia.",
  icon: "SiSentry",
  color: "#362D59",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["error-monitoring", "production", "debugging", "sentry"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Error Monitoring?

Di production, error TIDAK bisa dilihat dari console. User tidak akan lapor semua bug. Error monitoring = **mata di production**.

## Apa yang Dimonitor?

- 🔴 **JavaScript errors** - Uncaught exceptions, promise rejections
- 🌐 **Network errors** - Failed API calls, timeouts
- ⚡ **Performance issues** - Slow pages, memory leaks
- 👤 **User impact** - Berapa user terdampak error ini?
- 📍 **Context** - Browser, OS, URL, user action sebelum error

## Tools Populer

| Tool | Fokus | Harga |
|------|-------|-------|
| **Sentry** | Error tracking + performance | Free tier generous |
| **LogRocket** | Session replay + error tracking | Free tier |
| **Datadog** | Full observability | Mahal (enterprise) |
| **New Relic** | APM + errors | Free tier |
| **Bugsnag** | Error monitoring | Free tier |
| **Rollbar** | Error tracking | Free tier |
| **Highlight.io** | Open source session replay | Self-host gratis |

## Data yang Harus Dikirim

\`\`\`
✅ Error message & stack trace
✅ User ID (jika login)
✅ URL & route
✅ Browser & OS info
✅ Timestamp
✅ Release version
✅ Breadcrumbs (apa yang user lakukan sebelum error)
✅ Custom tags (environment, feature flag)
\`\`\`

## Yang TIDAK BOLEH Dikirim

\`\`\`
❌ Password
❌ Token / API keys
❌ Data kartu kredit
❌ Data pribadi (email, nomor HP)
❌ Session cookies
\`\`\`
  `,

  quiz: [
    { question: "Kenapa error monitoring penting?", options: ["Hiasan", "Deteksi error di production (user tidak akan lapor)", "Wajib hukum", "Mempercepat kode"], correctAnswer: 1 },
    { question: "Tool error monitoring paling populer?", options: ["Google Analytics", "Sentry", "MongoDB", "Docker"], correctAnswer: 1 },
    { question: "Data yang TIDAK BOLEH dikirim?", options: ["Stack trace", "Password & token", "Browser info", "URL"], correctAnswer: 1 }
  ],

  codeExamples: []
};