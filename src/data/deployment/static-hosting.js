export const chapter = {
  slug: "deployment-static-hosting",
  title: "Static Site Hosting",
  description: "Hosting static sites: Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3.",
  icon: "SiVercel",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["deployment-introduction"],
  tags: ["deployment", "static", "hosting", "jamstack"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Static Hosting

Static hosting = hosting untuk file HTML, CSS, JS statis (tanpa server-side processing).

## Platform Static Hosting

| Platform | Free Tier | Best For | CI/CD |
|----------|-----------|----------|-------|
| **Vercel** | 100GB | Next.js, React | ✅ Git auto-deploy |
| **Netlify** | 100GB | JAMstack, static | ✅ Git auto-deploy |
| **GitHub Pages** | Unlimited | Open source docs | ✅ GitHub Actions |
| **Cloudflare Pages** | Unlimited | Global edge | ✅ Git auto-deploy |
| **AWS S3 + CloudFront** | Pay-per-use | Enterprise | Custom |
| **Surge** | Unlimited | Simple static | CLI |

## GitHub Pages

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
\`\`\`

## Cloudflare Pages

\`\`\`
1. Push ke GitHub
2. Cloudflare Dashboard → Pages → Create project
3. Connect repo
4. Set build command & output directory
5. Deploy (auto CI/CD setiap push)
\`\`\`
  `,

  quiz: [
    { question: "Static hosting termurah?", options: ["VPS", "GitHub Pages / Cloudflare Pages (gratis)", "Dedicated server", "Kubernetes"], correctAnswer: 1 },
    { question: "GitHub Pages deploy dari folder?", options: ["/root", "gh-pages branch / docs/", "/dist", "src/"], correctAnswer: 1 }
  ],

  codeExamples: []
};