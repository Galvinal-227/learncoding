export const chapter = {
  slug: "internet-hosting",
  title: "Web Hosting",
  description: "Pahami jenis-jenis web hosting dan cara memilih yang tepat.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["internet-domain"],
  tags: ["internet", "hosting", "server", "deployment"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Jenis Web Hosting

| Jenis | Analogi | Cocok Untuk | Harga/Bulan |
|-------|---------|-------------|-------------|
| **Shared Hosting** | Apartemen (shared) | Website kecil, blog | Rp 10-100rb |
| **VPS** | Townhouse (private) | Aplikasi menengah | Rp 100-500rb |
| **Dedicated Server** | Rumah sendiri | Enterprise, high traffic | Rp 1jt+ |
| **Cloud Hosting** | Hotel (scalable) | Startup, unpredictable traffic | Variabel |
| **Serverless** | Taxi (pay per ride) | Microservices, API | Pay-per-use |
| **Static Hosting** | Papan iklan | Static sites, JAMstack | Gratis |

## Shared Hosting

**Paling murah, 1 server untuk banyak user.**

\`\`\`
✅ Murah (Rp 10-100rb/bulan)
✅ cPanel mudah
✅ Cocok untuk WordPress, static site
❌ Resource terbatas (CPU, RAM)
❌ No root access
❌ Tetangga bisa pengaruhi performa
\`\`\`

## VPS (Virtual Private Server)

**Server virtual sendiri, kontrol penuh.**

\`\`\`
✅ Root access (install apa saja)
✅ Resource dedicated
✅ Cocok untuk Node.js, Python, custom app
❌ Perlu setup sendiri (Nginx, SSL)
❌ Sedikit technical knowledge needed
\`\`\`

## Static Hosting

**Hanya untuk file statis (HTML, CSS, JS).**

| Provider | Free Tier | Best For |
|----------|-----------|----------|
| **Vercel** | 100GB | Next.js, React |
| **Netlify** | 100GB | Static sites |
| **GitHub Pages** | Unlimited | Open source, docs |
| **Cloudflare Pages** | Unlimited | Global edge |
| **Surge** | Unlimited | Simple static |

## Shared Hosting Indonesia

| Provider | Keunggulan |
|----------|------------|
| **Niagahoster** | Populer, murah, support Indonesia |
| **Hostinger** | Murah, global |
| **Dewaweb** | Cloud hosting, WordPress optimized |
| **Rumahweb** | Lokal, domain + hosting |
| **IDCloudHost** | Cloud hosting lokal |

## Cara Memilih Hosting

\`\`\`
1. Website sederhana (WordPress)? → Shared hosting
2. Aplikasi Node.js custom? → VPS
3. Static site (Next.js)? → Vercel/Netlify
4. API backend? → VPS / Railway / Render
5. High traffic e-commerce? → Cloud hosting / VPS besar
6. Tidak mau urus server? → PaaS (Vercel, Heroku alternative)
\`\`\`
  `,

  quiz: [
    { question: "Shared hosting: analogi?", options: ["Rumah sendiri", "Apartemen (shared resources)", "Hotel", "Taxi"], correctAnswer: 1 },
    { question: "VPS?", options: ["Shared", "Virtual Private Server (kontrol penuh)", "Gratis", "Hanya static"], correctAnswer: 1 },
    { question: "Static hosting gratis?", options: ["AWS EC2", "Vercel / Netlify / GitHub Pages", "DigitalOcean", "Hostinger"], correctAnswer: 1 }
  ],

  codeExamples: []
};