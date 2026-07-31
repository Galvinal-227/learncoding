export const chapter = {
  slug: "websocket-handshake",
  title: "Handshake & Protocol",
  description: "Pahami cara kerja WebSocket handshake dan protokol di baliknya.",
  icon: "SiSocketdotio",
  color: "#010101",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["websocket-introduction"],
  tags: ["websocket", "handshake", "protocol", "http-upgrade"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## WebSocket Handshake

\`\`\`
Client                          Server
  │────── HTTP Upgrade Req ──────▶│
  │  GET /chat HTTP/1.1           │
  │  Upgrade: websocket           │
  │  Connection: Upgrade          │
  │  Sec-WebSocket-Key: dGhl...   │
  │                               │
  │◀───── HTTP 101 Switching ─────│
  │  HTTP/1.1 101 Switching       │
  │  Upgrade: websocket           │
  │  Connection: Upgrade          │
  │  Sec-WebSocket-Accept: s3p... │
  │                               │
  │◀════ WebSocket Connected ════▶│
\`\`\`

## HTTP Upgrade Request

\`\`\`http
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Origin: https://example.com
\`\`\`

## Server Response

\`\`\`http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
\`\`\`

## WebSocket Frames

Setelah handshake, data dikirim dalam **frames**:

\`\`\`
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
|N|V|V|V|       |S|             |   (if payload len==126/127)   |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+-------------------------------+
|     Masking-key (0 or 4 bytes)  |       Payload Data         |
+--------------------------------+-----------------------------+
\`\`\`

## WebSocket States

| State | Value | Deskripsi |
|-------|-------|-----------|
| CONNECTING | 0 | Socket dibuat, belum connect |
| OPEN | 1 | Connected, bisa komunikasi |
| CLOSING | 2 | Connection sedang ditutup |
| CLOSED | 3 | Connection closed |

## Key Points

\`\`\`
✅ WebSocket dimulai sebagai HTTP → upgrade ke WS
✅ Handshake: HTTP Upgrade headers
✅ 101 Switching Protocols = sukses
✅ After handshake: binary frames
✅ Frame overhead: only 2-8 bytes
\`\`\`
  `,

  quiz: [
    { question: "WebSocket handshake?", options: ["New protocol", "HTTP Upgrade (101 Switching)", "TCP only", "UDP"], correctAnswer: 1 },
    { question: "Sec-WebSocket-Key?", options: ["Password", "Random key for handshake verification", "Token", "Session ID"], correctAnswer: 1 }
  ],

  codeExamples: []
};