export const chapter = {
  slug: "internet-tcp-ip",
  title: "TCP/IP",
  description: "Pahami TCP/IP - protokol fundamental yang menghubungkan internet.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["internet-how-internet-works"],
  tags: ["internet", "tcp", "ip", "protocol"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## TCP vs IP

| TCP | IP |
|-----|-----|
| Transmission Control Protocol | Internet Protocol |
| Memastikan data sampai utuh | Routing data ke alamat tujuan |
| Connection-oriented | Connectionless |
| Reliable, ordered | Best-effort |
| Port numbers | IP addresses |

## TCP 3-Way Handshake

\`\`\`
Client                    Server
  │──────── SYN ──────────▶│
  │◀──── SYN-ACK ─────────│
  │──────── ACK ──────────▶│
  │     CONNECTED!         │
\`\`\`

## TCP vs UDP

| | TCP | UDP |
|---|-----|-----|
| Koneksi | Connection-oriented | Connectionless |
| Keandalan | Guaranteed delivery | No guarantee |
| Urutan | Ordered | No order |
| Kecepatan | Lebih lambat | Lebih cepat |
| Use case | Web, email, file transfer | Video streaming, gaming, DNS |
  `,

  quiz: [
    { question: "TCP vs UDP?", options: ["Sama", "TCP: reliable; UDP: fast", "UDP lebih reliable", "TCP deprecated"], correctAnswer: 1 },
    { question: "TCP 3-Way Handshake?", options: ["GET-POST-PUT", "SYN→SYN-ACK→ACK", "DNS→HTTP→HTML", "SSL→TLS→HTTPS"], correctAnswer: 1 }
  ],

  codeExamples: []
};