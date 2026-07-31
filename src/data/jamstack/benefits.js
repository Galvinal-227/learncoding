export const chapter = {
  slug: "jamstack-benefits",
  title: "Keunggulan JAMStack",
  description: "Kenapa JAMStack jadi pilihan modern: performa, keamanan, biaya, dan DX.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["jamstack-introduction"],
  tags: ["jamstack", "benefits", "performance", "security"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Keunggulan JAMStack

### 1. Performa (⚡ Super Cepat)
- Static files di CDN edge (dekat user)
- No server processing per request
- Lighthouse score 95+ mudah

### 2. Keamanan (🔒 Lebih Aman)
- Tidak ada database langsung exposed
- Tidak ada server-side code execution
- Attack surface minimal
- Hanya API endpoints yang perlu diamankan

### 3. Biaya (💰 Murah/Gratis)
- Hosting static gratis (Netlify, Vercel, Cloudflare Pages)
- Bayar hanya untuk API/services yang dipakai
- Tidak ada server 24/7

### 4. Developer Experience (👨‍💻 DX)
- Git-based workflow
- Preview deployment per branch/PR
- Atomic deploys (rollback instan)
- Development = production (environment sama)

### 5. Scalability (📈 Auto-scale)
- CDN handle traffic berapa pun
- Tidak perlu provisioning server
- DDoS protection built-in (Cloudflare)

## Kapan Tidak Cocok?

❌ Real-time apps (chat, live dashboard)
❌ Aplikasi dengan jutaan halaman dinamis (build lama)
❌ Butuh server-side processing berat (video encoding)
❌ Tim non-technical yang butuh GUI CMS tradisional (WordPress admin)
  `,

  quiz: [
    { question: "JAMStack: keamanan?", options: ["Rawan", "Minimal attack surface (static files)", "Sama seperti WordPress", "Tidak aman"], correctAnswer: 1 },
    { question: "JAMStack: scaling?", options: ["Sulit", "Auto-scale via CDN", "Manual", "Vertical only"], correctAnswer: 1 }
  ],

  codeExamples: []
};