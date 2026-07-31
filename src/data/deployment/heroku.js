export const chapter = {
  slug: "deployment-heroku",
  title: "Deploy ke Heroku (Alternatives)",
  description: "Deploy aplikasi ke Heroku dan alternatif modern (Railway, Render, Fly.io).",
  icon: "SiHeroku",
  color: "#430098",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["deployment-introduction"],
  tags: ["deployment", "heroku", "railway", "render"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Heroku (No Free Tier Since 2022)

Heroku adalah PaaS pioneer. Sayangnya **free tier dihapus November 2022**.

## Alternatif Modern

| Platform | Free Tier | Deploy | Cocok Untuk |
|----------|-----------|--------|-------------|
| **Railway** | $5 credit/bulan | Git push / CLI | Full-stack, DB |
| **Render** | Free tier (sleep after 15min) | Git push | Web apps |
| **Fly.io** | Free (3 VMs) | CLI / Git | Global apps |
| **Koyeb** | Free (1 instance) | Git / Docker | Simple apps |
| **Cyclic** | Free | Git | Node.js |

## Railway

\`\`\`bash
# Install CLI
npm install -g @railway/cli

# Login & deploy
railway login
railway init
railway up

# Set environment
railway variables set DATABASE_URL=postgresql://...
\`\`\`

## Render

\`\`\`
1. Push ke GitHub
2. Render Dashboard → New Web Service
3. Connect repo
4. Set build command: npm install && npm run build
5. Set start command: npm start
6. Deploy!
\`\`\`

## Fly.io

\`\`\`bash
# Install CLI
curl -L https://fly.io/install.sh | sh

# Deploy
fly launch
fly deploy
fly secrets set DATABASE_URL=...
\`\`\`
  `,

  quiz: [
    { question: "Heroku free tier?", options: ["Masih ada", "Dihapus November 2022", "Selalu gratis", "Hanya untuk student"], correctAnswer: 1 },
    { question: "Alternatif Heroku gratis?", options: ["Railway, Render, Fly.io, Koyeb", "AWS EC2", "Google Cloud", "Azure VM"], correctAnswer: 0 }
  ],

  codeExamples: []
};