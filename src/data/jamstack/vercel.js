export const chapter = {
  slug: "jamstack-vercel",
  title: "Deploy ke Vercel",
  description: "Deploy aplikasi JAMStack ke Vercel dengan optimalisasi Next.js.",
  icon: "SiVercel",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["jamstack-static-site-generators"],
  tags: ["jamstack", "vercel", "deploy", "nextjs"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Vercel

Platform dari pembuat Next.js. Optimal untuk Next.js, tapi support semua framework.

## Cara Deploy

\`\`\`
1. Push ke GitHub/GitLab/Bitbucket
2. Vercel → Import Project
3. Pilih repo
4. Vercel auto-detect framework (Next.js, Gatsby, dll)
5. Klik Deploy
6. Dapat URL: https://project.vercel.app
\`\`\`

## Vercel CLI

\`\`\`bash
npm install -g vercel
vercel          # Preview
vercel --prod   # Production
\`\`\`

## vercel.json

\`\`\`json
{
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "routes": [
        { "src": "/api/(.*)", "dest": "/api/$1" }
    ]
}
\`\`\`

## Vercel vs Netlify

| | Vercel | Netlify |
|---|--------|---------|
| Framework | Next.js terbaik | Semua framework |
| Functions | Serverless + Edge | Serverless (AWS Lambda) |
| Analytics | Built-in | Add-on |
| Free Tier | 100GB | 100GB |
| Edge | ✅ Global | ✅ Global |
  `,

  quiz: [
    { question: "Vercel optimal untuk?", options: ["WordPress", "Next.js", "Laravel", "Django"], correctAnswer: 1 },
    { question: "vercel --prod?", options: ["Preview", "Deploy production", "Development", "Test"], correctAnswer: 1 }
  ],

  codeExamples: []
};