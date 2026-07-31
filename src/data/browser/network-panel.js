export const chapter = {
  slug: "browser-network-panel",
  title: "Network Panel",
  description: "Monitor dan analisis semua HTTP requests dengan Network Panel.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["browser-devtools"],
  tags: ["browser", "network", "http", "debugging"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Network Panel

Network panel menampilkan **semua HTTP requests** yang dibuat halaman.

## Informasi Setiap Request

| Kolom | Deskripsi |
|-------|-----------|
| **Name** | Nama file/endpoint |
| **Status** | HTTP status code (200, 404, 500) |
| **Type** | Content type (document, script, xhr) |
| **Size** | Ukuran transfer + actual |
| **Time** | Total waktu request |
| **Waterfall** | Visual timeline request |

## Filter Requests

\`\`\`
✅ XHR/Fetch: Hanya AJAX requests
✅ JS: JavaScript files
✅ CSS: Stylesheets
✅ Img: Images
✅ Font: Font files
✅ Doc: HTML documents
✅ WS: WebSocket
\`\`\`

## Analisis Request Klik

Klik request → detail:

1. **Headers**: Request/response headers
2. **Preview**: Preview response (JSON, HTML, image)
3. **Response**: Raw response
4. **Timing**: Breakdown waktu (DNS, TCP, TLS, TTFB, Download)
5. **Cookies**: Cookies yang dikirim/diterima

## Waterfall Analysis

\`\`\`
[████████████████████████████] = 500ms
[░░░░████████████████████████] = Queue + Request
[████░░░░░░░░░░░░████████████] = TTFB + Download
\`\`\`

- **Queue**: Menunggu slot (max 6 paralel per domain)
- **Stalled**: Queue + proxy negotiation
- **DNS Lookup**: Mencari IP
- **Initial Connection**: TCP handshake
- **SSL**: TLS handshake
- **Request sent**: Mengirim request
- **TTFB** (Time To First Byte): Menunggu response pertama
- **Content Download**: Download response body

## Optimasi Network

\`\`\`
✅ Kurangi jumlah requests (bundle, sprite)
✅ Kompresi (Gzip/Brotli)
✅ CDN untuk static assets
✅ HTTP/2 multiplexing
✅ Cache assets (Cache-Control headers)
✅ Lazy load images
✅ Preconnect ke domain penting
\`\`\`

## Throttling (Simulasi Jaringan)

\`\`\`
Network panel → Throttling dropdown:
- Online (no throttle)
- Fast 3G
- Slow 3G
- Offline
- Custom... (atur sendiri)
\`\`\`
  `,

  quiz: [
    { question: "TTFB singkatan?", options: ["Time To First Byte", "Time To Full Buffer", "Total Time For Browser", "Transfer Time From Backend"], correctAnswer: 0 },
    { question: "Browser batasi paralel request per domain?", options: ["Tidak terbatas", "~6 request", "~20 request", "~50 request"], correctAnswer: 1 },
    { question: "Throttling di Network panel untuk?", options: ["Mempercepat", "Simulasi koneksi lambat", "Memblokir request", "Cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};