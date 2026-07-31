export const chapter = {
  slug: "webrtc-introduction",
  title: "Pengenalan WebRTC",
  description: "Pahami apa itu WebRTC, arsitekturnya, dan use cases.",
  icon: "SiWebrtc",
  color: "#333333",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction"],
  tags: ["webrtc", "video-call", "p2p", "streaming"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu WebRTC?

WebRTC (Web Real-Time Communication) adalah **teknologi open-source** yang memungkinkan **peer-to-peer (P2P) communication** langsung antar browser: video, audio, dan data. Tanpa plugin.

## Kenapa WebRTC?

- 🎥 **Video/Audio Call** - Google Meet, Zoom Web
- 📡 **P2P** - Langsung antar browser, tanpa server perantara
- 🔒 **Encrypted** - DTLS + SRTP mandatory
- 🌐 **Cross-platform** - Chrome, Firefox, Safari, Edge
- 🆓 **Open source** - Gratis, royalty-free
- 📱 **Mobile support** - iOS Safari, Android Chrome

## Arsitektur WebRTC

\`\`\`
┌──────────┐          ┌──────────┐
│  Peer A  │◄────────►│  Peer B  │
│ (Browser)│   P2P    │ (Browser)│
└──────────┘   Media   └──────────┘
      │                      │
      │   Signaling Server   │
      │  (WebSocket/HTTP)    │
      └──────────────────────┘
\`\`\`

## 3 APIs Utama

| API | Fungsi |
|-----|--------|
| **MediaStream** | Akses kamera + microphone |
| **RTCPeerConnection** | Koneksi P2P (video/audio/data) |
| **RTCDataChannel** | Kirim data arbitrary (text, files) |

## WebRTC vs WebSocket

| | WebRTC | WebSocket |
|---|--------|-----------|
| Koneksi | Peer-to-peer | Client-Server |
| Media | ✅ Video/Audio | ❌ |
| Data | ✅ RTCDataChannel | ✅ Text/Binary |
| Server | Signaling only | Persistent server |
| Latency | Sangat rendah | Lebih tinggi |
| Use case | Video call, screen share | Chat, notifications |

## Use Cases

| Use Case | Deskripsi |
|----------|-----------|
| 🎥 **Video Conferencing** | Google Meet, Zoom, Teams |
| 📡 **Live Streaming** | P2P CDN |
| 📁 **File Sharing** | P2P file transfer (Snapdrop) |
| 🎮 **Gaming** | Real-time multiplayer |
| 🖥️ **Remote Desktop** | Screen sharing |
| 📞 **VoIP** | Voice calls (WhatsApp Web) |
  `,

  quiz: [
    { question: "WebRTC vs WebSocket?", options: ["Same", "WebRTC: P2P video/audio; WebSocket: client-server data", "WebSocket P2P", "WebRTC needs server"], correctAnswer: 1 },
    { question: "WebRTC: plugin?", options: ["Flash", "No plugin needed (browser built-in)", "Java", "ActiveX"], correctAnswer: 1 },
    { question: "RTCPeerConnection?", options: ["Signaling", "P2P connection (video/audio/data)", "Camera access", "Screen share"], correctAnswer: 1 }
  ],

  codeExamples: []
};