export const chapter = {
  slug: "deployment-cloud-providers",
  title: "Cloud Providers (AWS, GCP, Azure)",
  description: "Overview cloud providers dan layanan deployment mereka.",
  icon: "SiAmazonaws",
  color: "#FF9900",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["deployment-vps"],
  tags: ["deployment", "cloud", "aws", "gcp", "azure"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Big 3 Cloud Providers

| | AWS | GCP | Azure |
|---|-----|-----|-------|
| Market share | 32% | 11% | 23% |
| Learning curve | Tinggi | Sedang | Sedang |
| Free tier | 12 months | 90 days + always free | 12 months |
| Popular services | EC2, S3, Lambda | Compute Engine, Cloud Run | VM, Functions |
| Best for | Everything | AI/ML, Kubernetes | Enterprise Microsoft |

## Layanan Deployment per Provider

### AWS
- **EC2** - Virtual server (VPS)
- **ECS/EKS** - Container/Kubernetes
- **Lambda** - Serverless functions
- **S3 + CloudFront** - Static hosting
- **Amplify** - Full-stack hosting (seperti Vercel)

### GCP
- **Compute Engine** - Virtual server
- **Cloud Run** - Serverless containers (PALING MUDAH!)
- **App Engine** - PaaS
- **Cloud Functions** - Serverless

### Azure
- **Virtual Machines** - VPS
- **App Service** - PaaS web apps
- **Azure Functions** - Serverless
- **Static Web Apps** - Static hosting

## Cloud Run (GCP) - Deploy Termudah

\`\`\`bash
gcloud run deploy myapp \\
    --source . \\
    --platform managed \\
    --region asia-southeast2 \\
    --allow-unauthenticated
\`\`\`

## Mana yang Harus Dipilih?

\`\`\`
Project kecil / belajar:    Vercel / Netlify
Node.js production:         VPS (DigitalOcean) + PM2
Microservices:              GCP Cloud Run
Enterprise:                 AWS (paling banyak layanan)
Budget terbatas:            VPS murah + Docker
Static site:                GitHub Pages / Cloudflare Pages
\`\`\`
  `,

  quiz: [
    { question: "Cloud Run milik?", options: ["AWS", "Google Cloud Platform", "Azure", "DigitalOcean"], correctAnswer: 1 },
    { question: "AWS EC2 adalah?", options: ["Serverless", "Virtual server (VPS)", "Static hosting", "Database"], correctAnswer: 1 }
  ],

  codeExamples: []
};