export const chapter = {
  slug: "deployment-vercel",
  title: "Deploy ke Vercel",
  description: "Deploy aplikasi Next.js/React ke Vercel dengan mudah.",
  icon: "SiVercel",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["deployment-introduction"],
  tags: ["deployment", "vercel", "nextjs", "frontend"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Vercel

Vercel adalah platform hosting **frontend-focused** yang dioptimasi untuk **Next.js, React, Vue, Svelte, dan static sites**. Dibuat oleh tim yang sama dengan Next.js.

## Kenapa Vercel?

- ⚡ **Zero-config** untuk Next.js (tinggal import repo)
- 🌍 **Global CDN** - Cepat di mana pun
- 🔄 **Auto-deploy** dari Git (push → live)
- 🌿 **Preview deployments** - Setiap PR dapat URL unik
- 📊 **Analytics** built-in
- 🆓 **Free tier generous** (100GB bandwidth, unlimited sites)

## Cara Deploy

### 1. Via Git (Recommended)
\`\`\`
1. Push kode ke GitHub/GitLab
2. Buka vercel.com → Import Project
3. Pilih repository
4. Vercel auto-detect framework
5. Klik "Deploy"
6. Done! Dapat URL vercel.app
\`\`\`

### 2. Via CLI
\`\`\`bash
npm install -g vercel

cd project
vercel              # Deploy preview
vercel --prod       # Deploy production
\`\`\`

## Environment Variables

\`\`\`
Vercel Dashboard → Settings → Environment Variables:
- DATABASE_URL
- API_KEY
- NEXT_PUBLIC_SITE_URL
\`\`\`

## vercel.json (Konfigurasi)

\`\`\`json
{
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "installCommand": "npm install",
    "devCommand": "npm run dev",
    "routes": [
        { "src": "/api/(.*)", "dest": "/api/\$1" }
    ]
}
\`\`\`

## Custom Domain

\`\`\`
Vercel Dashboard → Settings → Domains:
1. Tambah domain: myapp.com
2. Update DNS record di registrar
3. Vercel auto-provision SSL (Let's Encrypt)
\`\`\`
  `,

  quiz: [
    { question: "Vercel optimal untuk?", options: ["Database", "Frontend/Next.js", "Mobile app", "Desktop app"], correctAnswer: 1 },
    { question: "Preview deployment di Vercel?", options: ["Production", "Setiap PR dapat URL unik untuk testing", "Hanya staging", "Tidak ada"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Deploy Next.js ke Vercel",
      language: "bash",
      code: `# 1. Install Vercel CLI
npm install -g vercel

# 2. Build & test locally
npm run build
npm start

# 3. Deploy preview
vercel
# → https://myapp-abc123.vercel.app

# 4. Deploy production
vercel --prod
# → https://myapp.vercel.app

# 5. Set environment variables
vercel env add DATABASE_URL
vercel env add NEXT_PUBLIC_API_URL

# 6. Pull .env untuk development
vercel env pull .env.local`
    }
  ]
};