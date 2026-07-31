export const chapter = {
  slug: "docker-docker-compose",
  title: "Docker Compose",
  description: "Orkestrasi multi-container dengan docker-compose.yml.",
  icon: "SiDocker",
  color: "#2496ED",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["docker-containers"],
  tags: ["docker", "compose", "multi-container", "orchestration"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Docker Compose

Docker Compose menjalankan **multiple containers** dengan satu file konfigurasi YAML. Cocok untuk development dan production sederhana.

## docker-compose.yml Dasar

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    depends_on:
      - db
    volumes:
      - .:/app  # Hot reload (dev)
      - /app/node_modules
  
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
  
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app

volumes:
  pgdata:
\`\`\`

## Perintah Docker Compose

\`\`\`bash
# Start semua services
docker compose up

# Start di background
docker compose up -d

# Build + start
docker compose up --build

# Stop semua
docker compose down

# Stop + hapus volumes
docker compose down -v

# Lihat logs
docker compose logs
docker compose logs -f app  # Follow service tertentu

# Execute command di service
docker compose exec app sh
docker compose exec db psql -U user -d mydb

# List services
docker compose ps

# Restart service tertentu
docker compose restart app
\`\`\`

## Development vs Production

### Development
\`\`\`yaml
volumes:
  - .:/app           # Hot reload
  - /app/node_modules
environment:
  - NODE_ENV=development
command: npm run dev
\`\`\`

### Production
\`\`\`yaml
environment:
  - NODE_ENV=production
restart: unless-stopped
\`\`\`

## depends_on vs healthcheck

\`\`\`yaml
services:
  app:
    depends_on:
      db:
        condition: service_healthy  # Tunggu db healthy
  
  db:
    image: postgres:16
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d mydb"]
      interval: 5s
      timeout: 3s
      retries: 5
\`\`\`
  `,

  quiz: [
    { question: "docker compose up -d?", options: ["Debug mode", "Run di background", "Delete containers", "Build only"], correctAnswer: 1 },
    { question: "docker compose down -v?", options: ["Stop only", "Stop + hapus volumes", "Restart", "Build"], correctAnswer: 1 },
    { question: "depends_on condition: service_healthy?", options: ["Tunggu service start", "Tunggu service healthy (healthcheck pass)", "Abaikan", "Langsung"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Full Stack Docker Compose",
      language: "yaml",
      code: `# docker-compose.yml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:8000
    depends_on:
      - backend
  
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
      - REDIS_URL=redis://redis:6379
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started
  
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d mydb"]
      interval: 5s
      retries: 5
  
  redis:
    image: redis:7-alpine
    volumes:
      - redisdata:/data

volumes:
  pgdata:
  redisdata:`
    }
  ]
};