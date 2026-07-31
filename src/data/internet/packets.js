export const chapter = {
  slug: "internet-packets",
  title: "Packets & Data Transfer",
  description: "Pahami packet switching, circuit switching, dan bagaimana data bergerak di internet.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Intermediate",
  estimatedReadingTime: 10,
  prerequisites: ["internet-tcp-ip"],
  tags: ["internet", "packets", "data", "network"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Packet Switching vs Circuit Switching

| | Packet Switching | Circuit Switching |
|---|-----------------|-------------------|
| Jalur | Bisa berbeda per packet | Satu jalur dedicated |
| Contoh | Internet | Telepon tradisional |
| Efisiensi | Tinggi (shared) | Rendah (reserved) |
| Delay | Variable | Constant |

## Struktur Packet

\`\`\`
┌─────────────────────────────────┐
│  HEADER                          │
│  - Source IP: 192.168.1.1       │
│  - Dest IP: 142.250.80.46       │
│  - Sequence #: 42               │
│  - Protocol: TCP                │
│  - TTL: 64 hops                 │
├─────────────────────────────────┤
│  PAYLOAD                         │
│  - Data (HTTP, email, video)    │
│  - Max size: ~1500 bytes (MTU) │
└─────────────────────────────────┘
\`\`\`

## Packet Journey

\`\`\`
Device → Router → ISP → ... (10-30 hops) ... → Server

Setiap hop = 1 router. 
TTL (Time to Live) mencegah packet berputar selamanya.
\`\`\`

## Packet Loss

Saat packet tidak sampai:
- **TCP**: Deteksi loss → kirim ulang (reliable)
- **UDP**: Tidak peduli loss → lanjut (fast, gaming/streaming)
  `,

  quiz: [
    { question: "Packet switching?", options: ["Satu jalur", "Data dipecah, jalur berbeda", "Telepon", "Circuit"], correctAnswer: 1 },
    { question: "MTU?", options: ["Max packet size (~1500 bytes)", "Max speed", "Max users", "Max time"], correctAnswer: 0 }
  ],

  codeExamples: []
};