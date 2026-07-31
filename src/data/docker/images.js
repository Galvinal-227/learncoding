export const chapter = {
  slug: "docker-images",
  title: "Docker Images",
  description: "Kelola Docker images: pull, build, tag, push, dan layer caching.",
  icon: "SiDocker",
  color: "#2496ED",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["docker-installation"],
  tags: ["docker", "images", "build", "registry"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Docker Image?

Image adalah **template read-only** yang berisi aplikasi + dependencies. Image terdiri dari **layers** (setiap instruksi di Dockerfile = 1 layer).

## Perintah Image

\`\`\`bash
# Pull image dari registry
docker pull node:20-alpine
docker pull nginx:latest

# List images lokal
docker images
docker image ls

# Lihat detail image
docker inspect node:20-alpine

# Lihat history layers
docker history node:20-alpine

# Hapus image
docker rmi node:20-alpine
docker image prune    # Hapus unused images
\`\`\`

## Build Image

\`\`\`bash
# Build dari Dockerfile di current directory
docker build -t myapp:1.0 .

# Build dengan tag multiple
docker build -t myapp:1.0 -t myapp:latest .

# Build tanpa cache
docker build --no-cache -t myapp .
\`\`\`

## Tag & Push ke Registry

\`\`\`bash
# Tag image
docker tag myapp:latest username/myapp:1.0
docker tag myapp:latest username/myapp:latest

# Login ke Docker Hub
docker login

# Push image
docker push username/myapp:1.0
docker push username/myapp:latest
\`\`\`

## Layer Caching

Setiap instruksi di Dockerfile adalah layer. Layer yang tidak berubah di-cache = build lebih cepat.

\`\`\`dockerfile
# ❌ Buruk: Setiap kode berubah → npm ci diulang
COPY . .
RUN npm ci

# ✅ Baik: package.json jarang berubah → npm ci di-cache
COPY package*.json ./
RUN npm ci
COPY . .
\`\`\`

## Image Size Optimization

| Teknik | Penghematan |
|--------|-------------|
| Alpine base image | ~200MB → ~50MB |
| Multi-stage build | Hanya copy hasil build |
| .dockerignore | Hindari node_modules, .git |
| Combine RUN commands | Kurangi jumlah layers |

\`\`\`dockerfile
# Alpine (kecil)
FROM node:20-alpine  # ~50MB (vs ~200MB untuk node:20)

# Multi-stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --production
CMD ["node", "dist/index.js"]
\`\`\`
  `,

  quiz: [
    { question: "Build image dari Dockerfile?", options: ["docker create", "docker build -t name .", "docker make", "docker compile"], correctAnswer: 1 },
    { question: "Alpine base image keuntungan?", options: ["Lebih besar", "Lebih kecil (~50MB vs ~200MB)", "Lebih lambat", "Hanya untuk Node"], correctAnswer: 1 },
    { question: "Multi-stage build untuk?", options: ["Debugging", "Pisahkan build & production (hemat size)", "Testing", "CI/CD"], correctAnswer: 1 }
  ],

  codeExamples: []
};