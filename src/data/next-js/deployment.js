export const chapter = {
  slug: "next-js-deployment",
  title: "Deployment",
  description: "Deploy Next.js ke Vercel, Netlify, Docker, dan VPS.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["next-js-introduction"],
  tags: ["nextjs", "deployment", "vercel", "production"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Deploy ke Vercel (Recommended)

### Via Git (Auto-deploy)
\`\`\`
1. Push kode ke GitHub/GitLab
2. Buka vercel.com → Import Project
3. Pilih repository
4. Vercel auto-detect Next.js
5. Klik "Deploy"
6. Done! https://myapp.vercel.app
\`\`\`

### Via CLI
\`\`\`bash
npm install -g vercel
vercel          # Preview
vercel --prod   # Production
\`\`\`

### Environment Variables
\`\`\`
Vercel Dashboard → Settings → Environment Variables:
- DATABASE_URL
- NEXTAUTH_SECRET
- GOOGLE_CLIENT_ID
- NEXT_PUBLIC_API_URL
\`\`\`

## Deploy ke Netlify

\`\`\`bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=.next
\`\`\`

### netlify.toml
\`\`\`toml
[build]
    command = "npm run build"
    publish = ".next"

[[plugins]]
    package = "@netlify/plugin-nextjs"
\`\`\`

## Docker Deploy

### Dockerfile (Standalone)
\`\`\`dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
\`\`\`

### next.config.js (Standalone Output)
\`\`\`js
module.exports = {
    output: 'standalone'
};
\`\`\`

## Deploy ke VPS (PM2 + Nginx)

\`\`\`bash
# Di VPS
git clone repo && cd repo
npm ci
npm run build

# PM2
pm2 start npm --name "next-app" -- start
pm2 save

# Nginx reverse proxy
server {
    listen 80;
    server_name myapp.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }
}
\`\`\`

## Production Checklist

\`\`\`
✅ Environment variables set
✅ NEXTAUTH_SECRET generated
✅ Database production ready
✅ Image domains configured (remotePatterns)
✅ next.config.js reviewed
✅ Build success (npm run build)
✅ SSL/HTTPS enabled
✅ Custom domain connected
✅ Error monitoring (Sentry)
✅ Analytics (Vercel Analytics)
\`\`\`
  `,

  quiz: [
    { question: "Vercel deploy?", options: ["Manual", "Git push → auto deploy", "FTP", "Docker only"], correctAnswer: 1 },
    { question: "output: 'standalone'?", options: ["SSG", "Docker-optimized build", "SSR only", "Deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};