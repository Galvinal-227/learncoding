export const chapter = {
  slug: "accessibility-screen-readers",
  title: "Screen Reader",
  description: "Pahami cara kerja screen reader dan cara mengoptimalkan website untuknya.",
  icon: "SiAccessibility",
  color: "#0066CC",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["accessibility-aria"],
  tags: ["aksesibilitas", "screen-reader", "nvda", "voiceover"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Screen Reader?

Screen reader adalah software yang **membacakan konten layar** menjadi suara atau braille. Pengguna bernavigasi dengan keyboard, bukan mouse.

## Screen Reader Populer

| Screen Reader | Platform | Harga |
|---------------|----------|-------|
| **NVDA** | Windows | Gratis (open source) |
| **JAWS** | Windows | Berbayar (populer di enterprise) |
| **VoiceOver** | Mac/iOS | Gratis (built-in) |
| **TalkBack** | Android | Gratis (built-in) |
| **Orca** | Linux | Gratis |

## Cara Pengguna Screen Reader Bernavigasi

1. **Heading**: Lompat antar heading (tombol H)
2. **Landmark**: Lompat ke section (header, nav, main)
3. **Link**: Browsing daftar link
4. **Form elements**: Lompat antar input (tombol F)
5. **Tabel**: Navigasi sel per sel

## Testing dengan Screen Reader

### NVDA (Windows - Gratis)
1. Download dari [nvaccess.org](https://www.nvaccess.org)
2. Insert + F7: Elements list (heading, link, landmark)
3. Insert + Q: Keluar

### VoiceOver (Mac - Built-in)
1. Command + F5: Aktifkan/Nonaktifkan
2. Control + Option + U: Web rotor (heading, link, dll)
3. Control + Option + A: Baca semua

## Optimasi untuk Screen Reader

### 1. Alt Text yang Baik
\`\`\`html
<!-- ✅ Deskriptif -->
<img src="chart.png" alt="Grafik penjualan naik 20%">

<!-- ❌ Tidak deskriptif -->
<img src="chart.png" alt="Grafik">
\`\`\`

### 2. Label yang Jelas
\`\`\`html
<label for="cari">Cari produk</label>
<input type="search" id="cari">
\`\`\`

### 3. Announce Dynamic Content
\`\`\`html
<div aria-live="polite" id="notifikasi"></div>
\`\`\`

### 4. Hide Decorative Elements
\`\`\`html
<span class="icon-dekorasi" aria-hidden="true">🎨</span>
\`\`\`

## VoiceOver Rotor Demo

Coba buka [mdn.com](https://developer.mozilla.org) dengan VoiceOver, lalu:
- Control+Option+U → buka Web Rotor
- Navigasi heading saja
- Rasakan perbedaan halaman yang semantik vs tidak
  `,

  quiz: [
    { question: "Screen reader gratis terbaik untuk Windows?", options: ["JAWS", "NVDA", "VoiceOver", "TalkBack"], correctAnswer: 1, explanation: "NVDA (NonVisual Desktop Access) adalah screen reader gratis dan open source untuk Windows." },
    { question: "Bagaimana pengguna screen reader navigasi heading?", options: ["Scroll mouse", "Tekan tombol H", "Klik heading", "Tidak bisa"], correctAnswer: 1, explanation: "Screen reader user bisa lompat antar heading dengan menekan tombol H, sangat bergantung pada heading hierarchy." }
  ],

  codeExamples: []
};