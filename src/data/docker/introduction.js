export const chapter = {
  slug: "docker-introduction",
  title: "Pengenalan Docker",
  description: "Pahami apa itu Docker, container vs VM, dan kenapa Docker jadi standar deployment.",
  icon: "SiDocker",
  color: "#2496ED",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["docker", "container", "virtualization", "devops"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Docker?

Docker adalah platform **containerization** yang mengemas aplikasi dan dependencies-nya ke dalam **container** yang ringan, portable, dan konsisten di mana pun dijalankan.

## Masalah yang Diselesaikan Docker

\`\`\`
Developer: "Di laptopku jalan kok!"
Server:     "Error: library not found, version mismatch..."
\`\`\`

**Solusi Docker:** Aplikasi + dependencies dikemas jadi satu container. Jalan di mana pun Docker terinstall.

## Container vs Virtual Machine

| | Container | Virtual Machine |
|---|----------|----------------|
| OS | Share host OS kernel | Butuh guest OS sendiri |
| Size | MB (ringan) | GB (berat) |
| Startup | Detik | Menit |
| Performance | Near-native | Overhead |
| Isolation | Process-level | Hardware-level |
| Density | Puluhan per host | Beberapa per host |

\`\`\`
VM:      [App][Lib]   [App][Lib]
         [Guest OS]   [Guest OS]
         ──────────────────────
              Hypervisor
              Host OS
              Hardware

Container: [App][Lib] [App][Lib]
           ──────────────────────
              Docker Engine
              Host OS
              Hardware
\`\`\`

## Komponen Docker

| Komponen | Fungsi |
|----------|--------|
| **Dockerfile** | Resep/blueprint untuk build image |
| **Image** | Template read-only untuk container |
| **Container** | Instance running dari image |
| **Registry** | Tempat simpan/share image (Docker Hub) |
| **Volume** | Penyimpanan persistent |
| **Network** | Komunikasi antar container |

## Docker Hub

Registry publik terbesar. Seperti GitHub untuk Docker images.

\`\`\`bash
docker pull node:20-alpine    # Download image
docker pull nginx:latest
docker pull postgres:16
\`\`\`

## Arsitektur Docker

\`\`\`
┌──────────┐     ┌──────────────┐     ┌──────────┐
│  Docker  │────▶│   Docker     │────▶│ Container│
│  Client  │     │   Daemon     │     │  (app)   │
│  (CLI)   │◀────│  (Engine)    │◀────│          │
└──────────┘     └──────────────┘     └──────────┘
                       │
                       ▼
                 ┌──────────┐
                 │  Images  │
                 │  (local) │
                 └──────────┘
\`\`\`
  `,

  quiz: [
    { question: "Container vs VM: size?", options: ["Sama", "Container: MB; VM: GB", "VM lebih kecil", "Container lebih besar"], correctAnswer: 1 },
    { question: "Dockerfile untuk?", options: ["Run container", "Blueprint untuk build image", "Registry", "Network config"], correctAnswer: 1 },
    { question: "Docker Hub adalah?", options: ["Database", "Registry publik untuk Docker images", "Monitoring tool", "CI/CD platform"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Docker Pertama",
      language: "bash",
      code: `# Cek Docker terinstall
docker --version

# Pull image
docker pull hello-world

# Run container
docker run hello-world

# Output:
# Hello from Docker!
# This message shows that your installation appears to be working correctly.`
    }
  ]
};