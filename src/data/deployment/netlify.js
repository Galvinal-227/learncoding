export const chapter = {
  slug: "deployment-netlify",
  title: "Deploy ke Netlify",
  description: "Deploy static sites dan serverless functions ke Netlify.",
  icon: "SiNetlify",
  color: "#00C7B7",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["deployment-introduction"],
  tags: ["deployment", "netlify", "static", "jamstack"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Netlify

Netlify adalah platform hosting untuk **static sites & serverless functions**. Pionir JAMstack.

## Yang Bisa Dideploy

- ✅ Static HTML/CSS/JS
- ✅ React/Vue/Svelte (setelah build)
- ✅ Next.js (static export)
- ✅ Gatsby, Hugo, Jekyll, Eleventy
- ✅ Serverless Functions (AWS Lambda)
- ✅ Form handling built-in

## Cara Deploy

### 1. Drag & Drop
\`\`\`
1. npm run build (hasil di folder dist/)
2. Buka app.netlify.com
3. Drag folder dist/ ke browser
4. Done!
\`\`\`

### 2. Git (Recommended)
\`\`\`
1. Push ke GitHub/GitLab
2. Netlify → Add new site → Import project
3. Pilih repo, branch
4. Set build command: npm run build
5. Set publish directory: dist (atau .next/out)
6. Deploy!
\`\`\`

## netlify.toml

\`\`\`toml
[build]
    command = "npm run build"
    publish = "dist"

[build.environment]
    NODE_VERSION = "20"

[[redirects]]
    from = "/api/*"
    to = "/.netlify/functions/:splat"
    status = 200

[[headers]]
    for = "/*"
    [headers.values]
        X-Frame-Options = "DENY"
\`\`\`

## Netlify Functions

\`\`\`javascript
// netlify/functions/hello.js
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello from Netlify!' })
    };
};
\`\`\`

## Netlify Forms

\`\`\`html
<form name="contact" method="POST" data-netlify="true">
    <input type="text" name="name" />
    <button type="submit">Send</button>
</form>
\`\`\`
  `,

  quiz: [
    { question: "Netlify cocok untuk?", options: ["Database", "Static sites & JAMstack", "Mobile app", "Game server"], correctAnswer: 1 },
    { question: "Netlify Functions berbasis?", options: ["Docker", "AWS Lambda", "Kubernetes", "Vercel Edge"], correctAnswer: 1 }
  ],

  codeExamples: []
};