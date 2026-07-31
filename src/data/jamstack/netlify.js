export const chapter = {
  slug: "jamstack-netlify",
  title: "Deploy ke Netlify",
  description: "Deploy aplikasi JAMStack ke Netlify dengan CI/CD otomatis.",
  icon: "SiNetlify",
  color: "#00C7B7",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["jamstack-static-site-generators"],
  tags: ["jamstack", "netlify", "deploy", "hosting"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Netlify

Platform hosting #1 untuk JAMStack. Deploy dari Git, auto-build, preview per PR.

## Cara Deploy

### 1. Git-based (Rekomendasi)
\`\`\`
1. Push kode ke GitHub/GitLab
2. Netlify → Add new site → Import project
3. Pilih repo
4. Set: Build command: npm run build
5. Set: Publish directory: dist / .next/out
6. Deploy!
\`\`\`

### 2. CLI (Drag & Drop)
\`\`\`bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
\`\`\`

## netlify.toml

\`\`\`toml
[build]
    command = "npm run build"
    publish = "dist"

[[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
\`\`\`

## Netlify Functions

\`\`\`javascript
// netlify/functions/submit-form.js
exports.handler = async (event) => {
    const { name, email } = JSON.parse(event.body);
    return { statusCode: 200, body: JSON.stringify({ message: \`Hello \${name}!\` }) };
};
\`\`\`

## Fitur Netlify

- ✅ **Preview Deployments** - Setiap PR dapat URL unik
- ✅ **Forms** - Form handling tanpa backend
- ✅ **Functions** - Serverless functions (AWS Lambda)
- ✅ **Redirects & Headers** - Via netlify.toml
- ✅ **Split Testing** - A/B test
- ✅ **Analytics** - Traffic monitoring
  `,

  quiz: [
    { question: "Netlify deploy: publish directory?", options: ["src/", "dist/ (atau .next/out)", "node_modules/", "public/"], correctAnswer: 1 },
    { question: "Netlify Functions berbasis?", options: ["Docker", "AWS Lambda", "Kubernetes", "Heroku"], correctAnswer: 1 }
  ],

  codeExamples: []
};