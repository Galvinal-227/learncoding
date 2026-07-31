export const chapter = {
  slug: "deployment-docker-deployment",
  title: "Docker Deployment",
  description: "Deploy aplikasi dengan Docker: Dockerfile, docker-compose, registry, dan production best practices.",
  icon: "SiDocker",
  color: "#2496ED",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["deployment-introduction", "docker-introduction"],
  tags: ["deployment", "docker", "container", "production"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Docker untuk Production

### Production Dockerfile (Node.js)
\`\`\`dockerfile
# Multi-stage build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
USER node
CMD ["node", "dist/index.js"]
\`\`\`

### docker-compose.yml (App + DB)
\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    depends_on:
      - db
    restart: unless-stopped
  
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data
    restart: unless-stopped
  
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app
    restart: unless-stopped

volumes:
  pgdata:
\`\`\`

### Deploy ke VPS
\`\`\`bash
# Di VPS
ssh user@server
git clone repo && cd repo
docker compose up -d --build
\`\`\`

### Deploy ke Cloud (AWS ECS, GCP Cloud Run)
\`\`\`bash
# Build & push ke registry
docker build -t myapp:latest .
docker tag myapp:latest registry.example.com/myapp:latest
docker push registry.example.com/myapp:latest

# Deploy ke cloud service
\`\`\`
  `,

  quiz: [
    { question: "Multi-stage build untuk?", options: ["Debug", "Pisahkan build & production (hemat size)", "Testing", "CI/CD"], correctAnswer: 1 },
    { question: "docker compose up -d?", options: ["Debug", "Run containers di background", "Build image", "Stop containers"], correctAnswer: 1 }
  ],

  codeExamples: []
};