export const chapter = {
  slug: "internet-how-internet-works",
  title: "Cara Kerja Internet",
  description: "Perjalanan data dari browser ke server dan kembali: DNS, TCP/IP, HTTP.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["internet-introduction"],
  tags: ["internet", "how-it-works", "request", "response"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Perjalanan 1 Request Web

Saat kamu mengetik \`google.com\` di browser:

\`\`\`
1. Browser cek cache DNS
2. DNS Lookup: google.com → 142.250.80.46
3. TCP 3-Way Handshake (browser ↔ server)
4. TLS Handshake (jika HTTPS)
5. Browser kirim HTTP Request
6. Server proses request
7. Server kirim HTTP Response (HTML)
8. Browser parse & render HTML
9. Browser minta asset (CSS, JS, gambar)
10. Halaman selesai dirender
\`\`\`

## Waktu yang Dibutuhkan

| Langkah | Waktu |
|---------|-------|
| DNS Lookup | 10-100ms |
| TCP Handshake | 10-50ms |
| TLS Handshake | 50-200ms |
| TTFB (Time to First Byte) | 50-500ms |
| Download HTML | 10-100ms |
| **Total (ideal)** | **< 1 detik** |

## Visualisasi

\`\`\`
┌──────────┐  1. DNS Query     ┌──────────┐
│ Browser  │──────────────────▶│   DNS    │
│          │◀──────────────────│  Server  │
│          │  2. IP Address     └──────────┘
│          │
│          │  3. TCP + TLS      ┌──────────┐
│          │──────────────────▶│  Web     │
│          │◀──────────────────│  Server  │
│          │  4. HTTP Response  │          │
└──────────┘                   └──────────┘
\`\`\`

## Packet Switching

Data dipecah menjadi **packets** kecil:

\`\`\`
File 1MB → 1000 packets × 1KB
Setiap packet:
- Header (source, destination, sequence number)
- Payload (data)
- Bisa lewat jalur berbeda
- Di-reassemble di tujuan
\`\`\`

## Network Layers (OSI Model Simplified)

| Layer | Nama | Fungsi | Contoh |
|-------|------|--------|--------|
| 7 | Application | User interface | HTTP, DNS, FTP |
| 4 | Transport | Data transfer reliable | TCP, UDP |
| 3 | Network | Routing (IP address) | IP |
| 2 | Data Link | Local network (MAC) | Ethernet, WiFi |
| 1 | Physical | Kabel, sinyal | Fiber, WiFi radio |
  `,

  quiz: [
    { question: "DNS Lookup?", options: ["Cek virus", "Domain → IP address", "HTTP request", "Render HTML"], correctAnswer: 1 },
    { question: "TCP: 3-Way Handshake?", options: ["SYN→SYN-ACK→ACK", "GET→POST→PUT", "DNS→HTTP→HTML", "SSL→TLS→HTTPS"], correctAnswer: 0 }
  ],

  codeExamples: []
};