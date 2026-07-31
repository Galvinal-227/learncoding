export const chapter = {
  slug: "internet-protocols",
  title: "Protokol Web (FTP, SMTP, WebSocket)",
  description: "Kenali protokol-protokol penting selain HTTP: FTP, SMTP, WebSocket, MQTT, gRPC.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["internet-http"],
  tags: ["internet", "protocols", "websocket", "smtp"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Protokol Web Penting

| Protokol | Port | Fungsi | Contoh |
|----------|------|--------|--------|
| **HTTP** | 80 | Web pages | Website biasa |
| **HTTPS** | 443 | Secure web | Website modern |
| **FTP** | 21 | File transfer | Upload file ke server |
| **SFTP** | 22 | Secure file transfer | SSH file transfer |
| **SMTP** | 25/587 | Send email | Gmail, Outlook |
| **POP3** | 110 | Receive email | Email client |
| **IMAP** | 143 | Receive email (server) | Gmail sync |
| **DNS** | 53 | Domain → IP | Setiap request web |
| **SSH** | 22 | Remote server access | Terminal login |
| **WebSocket** | 80/443 | Real-time bidirectional | Chat, live data |
| **MQTT** | 1883 | IoT messaging | Sensor devices |
| **gRPC** | 443 | High-performance RPC | Microservices |

## WebSocket (Real-time)

\`\`\`
HTTP: Request → Response → Done (one-way)
WebSocket: Client ↔ Server (two-way persistent connection)
\`\`\`

\`\`\`javascript
const ws = new WebSocket('wss://example.com/chat');

ws.onopen = () => ws.send('Hello Server!');
ws.onmessage = (event) => console.log('Server:', event.data);
ws.onclose = () => console.log('Disconnected');
\`\`\`

## FTP (File Transfer)

\`\`\`bash
ftp ftp.example.com
# Upload: put file.txt
# Download: get file.txt
# List: ls
\`\`\`

Modern: Gunakan SFTP/SCP (secure) atau Git.

## SMTP (Email)

\`\`\`
Your App → SMTP Server → Recipient SMTP Server → Recipient
\`\`\`

## gRPC

Modern, high-performance, menggunakan Protocol Buffers:

\`\`\`
gRPC: Binary, HTTP/2, strongly typed, microservices
vs
REST: JSON, HTTP/1.1, loosely typed
\`\`\`
  `,

  quiz: [
    { question: "WebSocket vs HTTP?", options: ["Sama", "WS: two-way persistent; HTTP: request-response", "HTTP lebih cepat", "WS deprecated"], correctAnswer: 1 },
    { question: "SMTP untuk?", options: ["Web", "Send email", "File transfer", "DNS"], correctAnswer: 1 },
    { question: "gRPC?", options: ["Old protocol", "High-performance (binary, HTTP/2)", "REST API", "Email"], correctAnswer: 1 }
  ],

  codeExamples: []
};