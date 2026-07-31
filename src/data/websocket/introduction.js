export const chapter = {
  slug: "websocket-introduction",
  title: "Pengenalan WebSocket",
  description: "Pahami apa itu WebSocket, perbedaannya dengan HTTP, dan use cases.",
  icon: "SiSocketdotio",
  color: "#010101",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction", "node-js-introduction"],
  tags: ["websocket", "realtime", "socket.io", "bidirectional"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu WebSocket?

WebSocket adalah **protokol komunikasi** yang menyediakan **full-duplex (two-way) persistent connection** antara client dan server. Berbeda dengan HTTP yang request-response one-way.

## HTTP vs WebSocket

| | HTTP | WebSocket |
|---|------|-----------|
| Arah | Client → Server | Client ↔ Server |
| Koneksi | Per-request (baru) | Persistent (satu) |
| Overhead | Headers setiap request | 2 bytes setelah handshake |
| Inisiasi | Client only | Client open, keduanya kirim |
| Use case | REST API, pages | Chat, game, live data |
| Protocol | http:// https:// | ws:// wss:// |

## Kenapa WebSocket?

- ⚡ **Real-time** - Update instant, no polling
- 🔄 **Bidirectional** - Client & server bisa kirim
- 💪 **Persistent** - Satu koneksi, hemat resource
- 📉 **Low latency** - Tidak ada HTTP overhead
- 🌐 **Web standard** - Didukung semua browser modern
- 🔒 **Secure** - WSS (WebSocket Secure) via TLS

## Use Cases

| Use Case | Contoh |
|----------|--------|
| 💬 **Chat** | WhatsApp Web, Slack, Discord |
| 📊 **Live Dashboard** | Analytics, stock ticker |
| 🎮 **Multiplayer Game** | Real-time game state |
| 🔔 **Notifications** | Push notifications |
| 📝 **Collaboration** | Google Docs, Figma |
| 📍 **Live Tracking** | Ride-hailing (Gojek, Grab) |
| 🔄 **Live Sports** | Score updates |

## WebSocket vs Server-Sent Events vs Polling

| | WebSocket | SSE | Long Polling |
|---|----------|-----|-------------|
| Arah | Bidirectional | Server→Client | Client→Server |
| Protokol | ws:// wss:// | HTTP | HTTP |
| Browser | ✅ | ✅ | ✅ |
| Auto-reconnect | Manual | ✅ Auto | Manual |
| Binary data | ✅ | ❌ | ❌ |
| Complexity | Sedang | Rendah | Rendah |
  `,

  quiz: [
    { question: "WebSocket vs HTTP?", options: ["Same", "WS: persistent bidirectional; HTTP: request-response", "HTTP bidirectional", "WS one-way"], correctAnswer: 1 },
    { question: "WSS?", options: ["Wrong", "WebSocket Secure (TLS)", "HTTP/2", "Long polling"], correctAnswer: 1 },
    { question: "WebSocket use case?", options: ["Static page", "Chat, live data, gaming", "REST API", "File upload"], correctAnswer: 1 }
  ],

  codeExamples: []
};