export const chapter = {
  slug: "deployment-introduction",
  title: "Pengenalan Deployment",
  description: "Pahami apa itu deployment, jenis-jenis hosting, dan cara memilih yang tepat.",
  icon: "SiVercel",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["deployment", "hosting", "production", "devops"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Deployment?

Deployment adalah proses **memindahkan aplikasi dari development ke production** sehingga bisa diakses oleh user.

## Jenis Hosting

| Jenis | Contoh | Cocok Untuk | Harga |
|-------|--------|-------------|-------|
| **Shared Hosting** | Niagahoster, Hostinger | Website sederhana, WordPress | Murah (50rb/bln) |
| **VPS** | DigitalOcean, Linode, AWS EC2 | Aplikasi menengah, kontrol penuh | Sedang (100-500rb) |
| **PaaS** | Vercel, Netlify, Heroku | Frontend, full-stack JS | Gratis-Menengah |
| **Serverless** | AWS Lambda, Cloudflare Workers | API, microservices | Pay-per-use |
| **Dedicated** | Physical server | Enterprise, high traffic | Mahal (jutaan) |
| **Kubernetes** | GKE, EKS, AKS | Microservices skala besar | Mahal |

## Deployment Checklist

\`\`\`
✅ Environment variables diset (bukan hardcode)
✅ Database production terpisah
✅ HTTPS/SSL aktif
✅ Domain sudah pointing
✅ Build production (minified, optimized)
✅ Error handling production-ready
✅ Logging & monitoring siap
✅ Backup strategy
✅ CI/CD pipeline (opsional tapi recommended)
\`\`\`

## Production vs Development

| | Development | Production |
|---|------------|------------|
| Node environment | development | production |
| Error detail | Full stack trace | User-friendly message |
| Logging | console.log | Structured logging |
| Assets | Unminified, source maps | Minified, compressed |
| Database | Local/test data | Real data, backups |
| HTTPS | Optional | Required |
  `,

  quiz: [
    { question: "PaaS contohnya?", options: ["DigitalOcean", "Vercel/Netlify/Heroku", "Hostinger", "AWS EC2"], correctAnswer: 1 },
    { question: "Production: NODE_ENV?", options: ["development", "production", "test", "staging"], correctAnswer: 1 },
    { question: "HTTPS di production?", options: ["Optional", "Required (wajib)", "Hanya e-commerce", "Tidak perlu"], correctAnswer: 1 }
  ],

  codeExamples: []
};