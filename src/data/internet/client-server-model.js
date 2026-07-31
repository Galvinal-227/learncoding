export const chapter = {
  slug: "internet-client-server-model",
  title: "Client-Server Model",
  description: "Pahami arsitektur client-server yang mendasari semua aplikasi web.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["internet-introduction"],
  tags: ["internet", "client-server", "architecture", "backend"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Client-Server Model

\`\`\`
┌──────────┐  Request (HTTP)  ┌──────────┐
│  Client  │─────────────────▶│  Server  │
│(Browser) │◀─────────────────│(Node.js) │
└──────────┘  Response (JSON) └──────────┘
\`\`\`

| Client | Server |
|--------|--------|
| Frontend (Browser, Mobile) | Backend (Node.js, Python) |
| Kirim request | Proses + balas response |
| Render UI | Simpan data, business logic |
| User-facing | Behind the scenes |

## Jenis Arsitektur

- **Monolithic**: Frontend + Backend dalam 1 aplikasi
- **Microservices**: Terpecah jadi service kecil-kecil
- **Serverless**: Fungsi jalan di cloud (AWS Lambda)
- **P2P (Peer-to-Peer)**: Tidak ada server sentral (Torrent)
  `,

  quiz: [
    { question: "Client = ?", options: ["Database", "Frontend (Browser/Mobile)", "Server", "Router"], correctAnswer: 1 },
    { question: "Server = ?", options: ["Browser", "Backend (proses request)", "Monitor", "Keyboard"], correctAnswer: 1 }
  ],

  codeExamples: []
};