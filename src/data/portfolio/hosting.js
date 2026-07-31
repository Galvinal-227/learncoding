export const chapter = {
  slug: "portfolio-hosting",
  title: "Deploy Portfolio",
  description: "Deploy portfolio ke Vercel, Netlify, atau GitHub Pages dengan custom domain.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["portfolio-design"],
  tags: ["portfolio", "deploy", "hosting", "domain"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Platform Hosting

| Platform | Free | Custom Domain | Best For |
|----------|------|--------------|----------|
| **Vercel** | ✅ | ✅ | Next.js, React |
| **Netlify** | ✅ | ✅ | Static sites |
| **GitHub Pages** | ✅ | ✅ | Simple, free |
| **Cloudflare Pages** | ✅ | ✅ | Global CDN |

## Deploy ke Vercel

\`\`\`bash
# 1. Push ke GitHub
git push origin main

# 2. Vercel → Import Project → Deploy
# 3. Settings → Domains → Add yourdomain.com

# Custom domain:
# - Add CNAME record: www → cname.vercel-dns.com
# - Add A record: @ → 76.76.21.21
\`\`\`

## Deploy ke Netlify

\`\`\`bash
# 1. Push ke GitHub
# 2. Netlify → Add new site → Import project
# 3. Build command: npm run build
# 4. Publish directory: dist / .next/out

# Atau via CLI:
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
\`\`\`

## Deploy ke GitHub Pages

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
1. Beli domain (Namecheap, Cloudflare Registrar)
2. Di hosting (Vercel/Netlify): Settings → Domains → Add
3. Update DNS records:
   - CNAME: www → cname.vercel-dns.com
   - A: @ → IP hosting
4. SSL auto-provisioned (Let's Encrypt)
\`\`\`

## Performance Checklist

\`\`\`
✅ Lighthouse score >95
✅ Custom domain + HTTPS
✅ Favicon
✅ Meta tags (SEO)
✅ Sitemap.xml
✅ robots.txt
✅ Google Analytics
✅ Error monitoring (Sentry free)
\`\`\`
  `,

  quiz: [
    { question: "Portfolio hosting gratis?", options: ["AWS", "Vercel / Netlify / GitHub Pages", "DigitalOcean", "Heroku"], correctAnswer: 1 },
    { question: "Lighthouse score target?", options: ["50+", "95+", "70+", "0"], correctAnswer: 1 }
  ],

  codeExamples: []
};