export const chapter = {
  slug: "browser-how-browsers-work",
  title: "Cara Kerja Browser",
  description: "Pahami alur browser dari URL menjadi halaman web yang dirender.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["browser-introduction"],
  tags: ["browser", "how-it-works", "navigation", "dns"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Perjalanan URL ke Halaman Web

Saat kamu ketik URL dan tekan Enter:

\`\`\`
1. DNS Lookup       → Cari IP address dari domain
2. TCP Handshake    → Koneksi ke server
3. TLS Handshake    → HTTPS secure connection
4. HTTP Request     → Minta halaman
5. Server Response  → Kirim HTML
6. Parse HTML       → Bangun DOM tree
7. Parse CSS        → Bangun CSSOM tree
8. Combine          → Render tree
9. Layout           → Hitung posisi & ukuran
10. Paint           → Gambar ke layar
11. Composite       → Gabungkan layers
\`\`\`

## 1. DNS Lookup

\`\`\`
google.com → DNS Server → 142.250.80.46
\`\`\`

Browser cek cache (browser → OS → router → ISP → DNS server).

## 2-4. Koneksi & Request

\`\`\`
Client                          Server
   │────── SYN ────────────────▶│
   │◀───── SYN-ACK ────────────│
   │────── ACK ────────────────▶│  ← TCP Connected
   │────── ClientHello ────────▶│
   │◀───── ServerHello ────────│
   │────── Encrypted ──────────▶│  ← TLS Secured
   │────── GET /index.html ────▶│  ← HTTP Request
   │◀───── 200 OK + HTML ──────│  ← Server Response
\`\`\`

## 5-7. Parsing

\`\`\`
HTML ──▶ Tokenizer ──▶ DOM Tree
CSS  ──▶ Parser    ──▶ CSSOM Tree
\`\`\`

### Parsing HTML
- Tokenizer membaca HTML karakter per karakter
- Membangun DOM tree
- **Parsing tidak berhenti**: CSS dan async script tidak block parsing
- **Parsing berhenti**: \`<script>\` tanpa async/defer mem-block parsing

## 8-10. Render Tree → Layout → Paint

### Render Tree
DOM + CSSOM = Render Tree (hanya elemen visible)

### Layout (Reflow)
Hitung posisi dan ukuran setiap elemen. **Operasi paling mahal!**

### Paint
Gambar piksel ke layar. Layer berbeda untuk optimasi.

## 11. Composite
Gabungkan layer menjadi tampilan akhir di layar.

## Visualisasi Pipeline

\`\`\`
HTML ──▶ DOM ──┐
                ├──▶ Render Tree ──▶ Layout ──▶ Paint ──▶ Composite
CSS  ──▶ CSSOM ─┘
JS ──▶ Modify DOM/CSSOM (bisa trigger reflow/repaint)
\`\`\`
  `,

  quiz: [
    { question: "Langkah pertama browser setelah ketik URL?", options: ["Render halaman", "DNS Lookup", "Paint", "JavaScript execute"], correctAnswer: 1 },
    { question: "DOM + CSSOM = ?", options: ["Layout", "Render Tree", "Paint", "Composite"], correctAnswer: 1 },
    { question: "Operasi paling mahal di rendering?", options: ["Paint", "Composite", "Layout/Reflow", "Parse HTML"], correctAnswer: 2, explanation: "Layout (reflow) menghitung ulang posisi dan ukuran semua elemen. Ini operasi paling mahal." }
  ],

  codeExamples: []
};