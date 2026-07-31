export const chapter = {
  slug: "docker-quiz",
  title: "Quiz Akhir Docker",
  description: "Uji pemahamanmu tentang Docker.",
  icon: "SiDocker",
  color: "#2496ED",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["docker-best-practices"],
  tags: ["docker", "quiz"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Docker\n\n15 soal.`,
  quiz: [
    { question: "Container vs VM?", options: ["Sama", "Container: share OS; VM: guest OS sendiri", "VM lebih ringan", "Container lebih besar"], correctAnswer: 1 },
    { question: "Dockerfile untuk?", options: ["Run container", "Blueprint build image", "Registry", "Network"], correctAnswer: 1 },
    { question: "Build image?", options: ["docker create", "docker build -t name .", "docker make", "docker compile"], correctAnswer: 1 },
    { question: "Run detached?", options: ["docker run", "docker run -d", "docker start", "docker exec"], correctAnswer: 1 },
    { question: "Execute di container?", options: ["docker run", "docker exec", "docker start", "docker cmd"], correctAnswer: 1 },
    { question: "Port mapping -p 8080:80?", options: ["Container→Host", "Host 8080→Container 80", "Random", "Bidirectional"], correctAnswer: 1 },
    { question: "Multi-stage build?", options: ["Debug", "Pisah build & production (hemat size)", "Test", "CI/CD"], correctAnswer: 1 },
    { question: "docker compose up -d?", options: ["Debug", "Run di background", "Delete", "Build only"], correctAnswer: 1 },
    { question: "Volume vs Bind Mount?", options: ["Sama", "Volume: Docker; Bind: host filesystem", "Bind lebih aman", "Volume deprecated"], correctAnswer: 1 },
    { question: "Default network?", options: ["host", "bridge", "overlay", "none"], correctAnswer: 1 },
    { question: "Alpine base image?", options: ["Besar", "Kecil (~50MB)", "Lambat", "Hanya Node"], correctAnswer: 1 },
    { question: "CMD vs ENTRYPOINT?", options: ["Sama", "CMD: default; ENTRYPOINT: executable", "ENTRYPOINT deprecated", "CMD prioritas"], correctAnswer: 1 },
    { question: "USER node?", options: ["Hiasan", "Security: non-root", "Cepat", "Wajib"], correctAnswer: 1 },
    { question: "depends_on condition?", options: ["Tunggu start", "Tunggu service_healthy", "Abaikan", "Langsung"], correctAnswer: 1 },
    { question: "Hindari latest tag?", options: ["Lambat", "Tidak reproducible", "Besar", "Deprecated"], correctAnswer: 1 }
  ]
};