export const chapter = {
  slug: "docker-best-practices",
  title: "Best Practices",
  description: "Docker best practices: security, performance, image size, dan production readiness.",
  icon: "SiDocker",
  color: "#2496ED",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["docker-dockerfile"],
  tags: ["docker", "best-practices", "security", "production"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Security

\`\`\`dockerfile
# ✅ Gunakan specific version, bukan latest
FROM node:20.10.0-alpine

# ✅ Jangan run sebagai root
USER node

# ✅ Scan vulnerabilities
# docker scan myapp

# ✅ Gunakan trusted base images
# Docker Official Images, bukan random images
\`\`\`

## Performance

\`\`\`dockerfile
# ✅ Urutkan COPY dari yang jarang berubah
COPY package*.json ./
RUN npm ci
COPY . .  # Paling sering berubah → paling bawah

# ✅ Multi-stage build
FROM node:20-alpine AS builder
# ... build ...

FROM node:20-alpine AS production
COPY --from=builder /app/dist ./dist

# ✅ .dockerignore
node_modules
.git
.env
\`\`\`

## Production Checklist

\`\`\`
✅ Gunakan specific image version (bukan latest)
✅ Set NODE_ENV=production
✅ Non-root user (USER node)
✅ Health check (HEALTHCHECK)
✅ Restart policy (restart: unless-stopped)
✅ Resource limits (mem_limit, cpus)
✅ Logging driver configured
✅ Secrets sebagai environment variables (bukan hardcode)
✅ Image scanning (docker scan)
✅ Read-only filesystem jika memungkinkan
\`\`\`

## Resource Limits

\`\`\`yaml
services:
  app:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 256M
        reservations:
          cpus: '0.25'
          memory: 128M
\`\`\`

## Health Check

\`\`\`dockerfile
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \\
    CMD wget --spider http://localhost:3000/health || exit 1
\`\`\`
  `,

  quiz: [
    { question: "Kenapa hindari latest tag?", options: ["Lebih lambat", "Tidak reproducible (bisa berubah)", "Lebih besar", "Deprecated"], correctAnswer: 1 },
    { question: "USER node untuk?", options: ["Hiasan", "Security: non-root user", "Lebih cepat", "Wajib"], correctAnswer: 1 }
  ],

  codeExamples: []
};