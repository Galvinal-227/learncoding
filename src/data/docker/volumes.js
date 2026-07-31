export const chapter = {
  slug: "docker-volumes",
  title: "Volumes & Persistent Data",
  description: "Kelola data persistent dengan Docker volumes dan bind mounts.",
  icon: "SiDocker",
  color: "#2496ED",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["docker-containers"],
  tags: ["docker", "volumes", "storage", "persistent"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Storage di Docker

Container **stateless** — data hilang saat container dihapus. Volumes = **persistent storage**.

## 3 Jenis Mount

| Jenis | Lokasi | Use Case |
|-------|--------|----------|
| **Volume** | Docker-managed (\`/var/lib/docker/volumes/\`) | Production database |
| **Bind Mount** | Host filesystem (path absolut) | Development (hot reload) |
| **tmpfs** | Memory (RAM) | Temporary/sensitive data |

## Volumes

\`\`\`bash
# Create volume
docker volume create mydata

# List volumes
docker volume ls

# Inspect volume
docker volume inspect mydata

# Run dengan volume
docker run -d -v mydata:/var/lib/mysql mysql:8

# Hapus volume
docker volume rm mydata
docker volume prune  # Hapus unused
\`\`\`

### Di Docker Compose
\`\`\`yaml
services:
  db:
    image: postgres:16
    volumes:
      - pgdata:/var/lib/postgresql/data  # Named volume
  
  app:
    volumes:
      - .:/app  # Bind mount (dev)

volumes:
  pgdata:  # Declare named volume
\`\`\`

## Bind Mount (Development)

\`\`\`bash
# Mount folder host ke container
docker run -v $(pwd):/app myapp

# Read-only mount
docker run -v $(pwd):/app:ro myapp
\`\`\`

## Backup & Restore Volume

\`\`\`bash
# Backup
docker run --rm -v mydata:/data -v $(pwd):/backup alpine \\
    tar czf /backup/backup.tar.gz -C /data .

# Restore
docker run --rm -v mydata:/data -v $(pwd):/backup alpine \\
    tar xzf /backup/backup.tar.gz -C /data
\`\`\`
  `,

  quiz: [
    { question: "Volume vs Bind Mount?", options: ["Sama", "Volume: Docker-managed; Bind: host filesystem", "Bind lebih aman", "Volume deprecated"], correctAnswer: 1 },
    { question: "Data container tanpa volume?", options: ["Tetap ada", "Hilang saat container dihapus (stateless)", "Disimpan otomatis", "Backup"], correctAnswer: 1 }
  ],

  codeExamples: []
};