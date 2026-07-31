export const chapter = {
  slug: "github-pages",
  title: "GitHub Pages",
  description: "Hosting static website gratis dengan GitHub Pages.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["github-repository"],
  tags: ["github", "pages", "hosting", "static"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## GitHub Pages

Hosting gratis untuk static sites langsung dari repository GitHub.

## Cara Deploy

### 1. Settings → Pages
\`\`\`
Source: Deploy from a branch
Branch: main / gh-pages
Folder: / (root) atau /docs
Save → URL: https://username.github.io/repo/
\`\`\`

### 2. GitHub Actions (Rekomendasi)
\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci && npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with: { path: './dist' }
      - uses: actions/deploy-pages@v4
\`\`\`

## Custom Domain

\`\`\`
1. Settings → Pages → Custom domain
2. Masukkan: myapp.com
3. Update DNS di registrar:
   A record → 185.199.108.153 (GitHub IP)
   CNAME www → username.github.io
4. Centang "Enforce HTTPS"
\`\`\`

## Batasan

\`\`\`
✅ Gratis, unlimited bandwidth
✅ HTTPS gratis
✅ Custom domain support
✅ Jekyll built-in
❌ Hanya static (tidak ada backend)
❌ 1GB storage limit
❌ 100GB bandwidth/bulan
❌ Build max 10 menit
\`\`\`
  `,

  quiz: [
    { question: "GitHub Pages URL format?", options: ["myapp.com", "username.github.io/repo", "github.com/pages", "pages.github.com"], correctAnswer: 1 },
    { question: "GitHub Pages: backend?", options: ["Ya", "Tidak (static only)", "Dengan plugin", "Node.js"], correctAnswer: 1 }
  ],

  codeExamples: []
};