export const chapter = {
  slug: "docker-containers",
  title: "Docker Containers",
  description: "Kelola container: run, stop, exec, logs, dan debugging.",
  icon: "SiDocker",
  color: "#2496ED",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["docker-images"],
  tags: ["docker", "container", "run", "exec"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Container Lifecycle

\`\`\`
docker run → Running → docker stop → Stopped → docker start → Running
                ↓
            docker rm → Deleted
\`\`\`

## Perintah Container

### Run
\`\`\`bash
# Basic run
docker run nginx

# Run dengan nama
docker run --name my-nginx nginx

# Run di background (detached)
docker run -d --name my-nginx nginx

# Run + port mapping
docker run -d -p 8080:80 --name my-nginx nginx
# Akses: http://localhost:8080

# Run + environment variables
docker run -d -e NODE_ENV=production -e API_KEY=secret myapp

# Run + auto-remove (hapus setelah stop)
docker run --rm node:20 node -e "console.log('Hello')"
\`\`\`

### Manage Containers
\`\`\`bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop container
docker stop my-nginx

# Start stopped container
docker start my-nginx

# Restart container
docker restart my-nginx

# Hapus container
docker rm my-nginx
docker rm -f my-nginx  # Force remove (running)

# Hapus semua stopped containers
docker container prune
\`\`\`

### Debugging
\`\`\`bash
# Lihat logs
docker logs my-nginx
docker logs -f my-nginx     # Follow (real-time)
docker logs --tail 50 my-nginx

# Execute command di running container
docker exec my-nginx ls -la
docker exec -it my-nginx bash    # Interactive shell

# Inspect container detail
docker inspect my-nginx

# Lihat resource usage
docker stats
\`\`\`

## Port Mapping

\`\`\`bash
# Format: -p hostPort:containerPort
docker run -d -p 3000:3000 myapp      # http://localhost:3000
docker run -d -p 8080:80 nginx        # http://localhost:8080
docker run -d -p 5432:5432 postgres   # localhost:5432
\`\`\`

## Environment Variables

\`\`\`bash
# Single variable
docker run -e NODE_ENV=production myapp

# Multiple variables
docker run -e DB_HOST=localhost -e DB_PORT=5432 myapp

# Dari file .env
docker run --env-file .env myapp
\`\`\`
  `,

  quiz: [
    { question: "Run container detached?", options: ["docker run", "docker run -d", "docker start", "docker exec"], correctAnswer: 1 },
    { question: "Execute command di running container?", options: ["docker run", "docker exec", "docker start", "docker cmd"], correctAnswer: 1 },
    { question: "Port mapping -p 8080:80 artinya?", options: ["Container 8080 → Host 80", "Host 8080 → Container 80", "Random port", "Bidirectional"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Container Management",
      language: "bash",
      code: `# Run container
docker run -d --name web -p 3000:3000 -e NODE_ENV=production myapp

# Lihat status
docker ps
docker logs web

# Cek dalam container
docker exec web ls
docker exec -it web sh

# Stop & cleanup
docker stop web
docker rm web`
    }
  ]
};