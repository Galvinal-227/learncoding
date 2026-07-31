export const chapter = {
  slug: "serverless-introduction",
  title: "Pengenalan Serverless",
  description: "Pahami apa itu serverless, kenapa revolusioner, dan arsitekturnya.",
  icon: "SiAwslambda",
  color: "#FF9900",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["serverless", "lambda", "cloud", "faas"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu Serverless?

Serverless adalah **cloud computing model** di mana cloud provider mengelola server. Developer hanya fokus ke **kode (functions)**. Bayar per eksekusi, bukan per server.

## Kenapa Serverless?

- 💰 **Pay-per-use** - Tidak ada server idle
- 📈 **Auto-scale** - Dari 0 ke jutaan requests
- 🔧 **No server management** - Tidak perlu urus OS, patch, scaling
- ⚡ **Quick deploy** - Deploy function dalam detik
- 🌍 **Edge-ready** - Jalan di CDN edge

## Serverless Providers

| Provider | Service | Best For |
|----------|---------|----------|
| **AWS** | Lambda | Enterprise |
| **GCP** | Cloud Functions | Firebase users |
| **Azure** | Functions | Microsoft ecosystem |
| **Vercel** | Functions | Frontend devs |
| **Netlify** | Functions | JAMstack |
| **Cloudflare** | Workers | Edge computing |

## Serverless = FaaS (Function as a Service)

Bukan "tidak ada server", tapi **"server di-manage provider"**.
  `,
  quiz: [
    { question: "Serverless: ada server?", options: ["No server", "Server managed by cloud provider", "Own server", "Local only"], correctAnswer: 1 },
    { question: "FaaS?", options: ["Framework", "Function as a Service", "File as a Service", "Frontend as a Service"], correctAnswer: 1 }
  ],
  codeExamples: []
};