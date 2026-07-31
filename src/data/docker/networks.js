export const chapter = {
  slug: "docker-networks",
  title: "Networking",
  description: "Docker networking: bridge, host, overlay, dan komunikasi antar container.",
  icon: "SiDocker",
  color: "#2496ED",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["docker-containers"],
  tags: ["docker", "network", "bridge", "communication"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Docker Network Types

| Driver | Use Case | Scope |
|--------|----------|-------|
| **bridge** | Container di host yang sama (default) | Single host |
| **host** | Performance (no isolation) | Single host |
| **overlay** | Multi-host (Swarm) | Multi-host |
| **none** | No networking | Isolated |

## Bridge Network (Default)

\`\`\`bash
# Create custom network
docker network create my-network

# Run containers di network yang sama
docker run -d --name db --network my-network postgres
docker run -d --name app --network my-network myapp

# Container bisa komunikasi via container name!
# app bisa akses db:5432 (pakai nama "db")
\`\`\`

## Perintah Network

\`\`\`bash
# List networks
docker network ls

# Inspect network
docker network inspect my-network

# Connect container ke network
docker network connect my-network my-container

# Disconnect
docker network disconnect my-network my-container

# Hapus network
docker network rm my-network
docker network prune
\`\`\`

## Docker Compose Networking

\`\`\`yaml
services:
  app:
    networks:
      - frontend
      - backend
  
  db:
    networks:
      - backend  # Hanya bisa diakses backend

networks:
  frontend:
  backend:
    internal: true  # Tidak expose ke luar
\`\`\`

## DNS di Docker

Container bisa resolve container lain via **service name** di network yang sama.

\`\`\`
app → db:5432  (auto-resolve via Docker DNS)
app → redis:6379
\`\`\`
  `,

  quiz: [
    { question: "Default network driver?", options: ["host", "bridge", "overlay", "none"], correctAnswer: 1 },
    { question: "Container komunikasi via?", options: ["IP only", "Container/service name (DNS)", "Port only", "Tidak bisa"], correctAnswer: 1 }
  ],

  codeExamples: []
};