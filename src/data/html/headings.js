export const chapter = {
  slug: "html-headings",
  title: "Heading",
  description: "Kuasai heading HTML (h1-h6) untuk struktur dokumen yang benar, SEO, dan aksesibilitas.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["html-elements"],
  tags: ["html", "heading", "seo", "struktur"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Heading HTML?

Heading digunakan untuk mendefinisikan **hierarki dan struktur** kontenmu. HTML menyediakan 6 level heading dari \`<h1>\` (paling penting) hingga \`<h6>\` (paling tidak penting).

## Enam Level Heading

\`\`\`html
<h1>Judul Utama - Level 1</h1>
<h2>Bagian - Level 2</h2>
<h3>Subbagian - Level 3</h3>
<h4>Sub-subbagian - Level 4</h4>
<h5>Heading minor - Level 5</h5>
<h6>Heading terkecil - Level 6</h6>
\`\`\`

## Representasi Visual

\`\`\`
┌────────────────────────────────────┐
│  <h1> Judul Halaman            │ ← Satu per halaman
│  ┌──────────────────────────────┐ │
│  │ <h2> Bagian Utama         │ │
│  │  ┌────────────────────────┐ │ │
│  │  │ <h3> Subbagian      │ │ │
│  │  │  <h4> Detail       │ │ │
│  │  │  <h5> Minor        │ │ │
│  │  │  <h6> Terkecil    │ │ │
│  │  └────────────────────────┘ │ │
│  └──────────────────────────────┘ │
│  ┌──────────────────────────────┐ │
│  │ <h2> Bagian Lain          │ │
│  └──────────────────────────────┘ │
└────────────────────────────────────┘
\`\`\`

## Aturan Penting

### 1. Hanya Gunakan Satu <h1> Per Halaman
\`\`\`html
<!-- ✅ Baik -->
<body>
    <h1>Websiteku</h1>
    <h2>Tentang Kami</h2>
</body>

<!-- ❌ Buruk -->
<body>
    <h1>Websiteku</h1>
    <h1>Judul Lain</h1>
</body>
\`\`\`

### 2. Jangan Melompati Level
\`\`\`html
<!-- ✅ Baik: Berurutan -->
<h1>Judul Utama</h1>
  <h2>Bagian</h2>
    <h3>Subbagian</h3>

<!-- ❌ Buruk: Melompati h2 -->
<h1>Judul Utama</h1>
  <h3>Langsung ke h3</h3>
\`\`\`

### 3. Gunakan untuk Struktur, Bukan Styling
\`\`\`html
<!-- ✅ Baik: Struktur yang benar -->
<h2>Bagian Penting</h2>
<p>Konten di sini...</p>

<!-- ❌ Buruk: Menggunakan heading untuk ukuran -->
<h2 style="font-size: 12px;">Ini hanya teks kecil</h2>
\`\`\`

## Kenapa Heading Itu Penting

### Untuk SEO
Mesin pencari menggunakan heading untuk memahami struktur halaman. Kata kunci dalam heading memiliki bobot lebih tinggi.

### Untuk Aksesibilitas
Screen reader menggunakan heading untuk menavigasi konten. Pengguna bisa melompat antar heading.

### Untuk Pengguna
Heading membuat konten mudah di-scan. Pengguna bisa dengan cepat menemukan yang mereka cari.

## Best Practices

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <title>Tutorial HTML - Learn By GWD</title>
</head>
<body>
    <!-- Judul utama halaman - cocok dengan <title> -->
    <h1>Tutorial HTML Lengkap</h1>
    
    <section>
        <h2>Memulai</h2>
        <p>Pengenalan dasar HTML...</p>
        
        <h3>Yang Kamu Butuhkan</h3>
        <p>Tools dan setup...</p>
        
        <h3>Halaman Pertamamu</h3>
        <p>Membuat index.html...</p>
    </section>
    
    <section>
        <h2>Elemen HTML</h2>
        <p>Memahami elemen...</p>
        
        <h3>Elemen Block</h3>
        <p>Div, heading, paragraf...</p>
        
        <h3>Elemen Inline</h3>
        <p>Span, tautan, gambar...</p>
    </section>
    
    <section>
        <h2>Topik Lanjutan</h2>
        <p>Konsep lebih dalam...</p>
        
        <h3>Form</h3>
        <h4>Tipe Input</h4>
        <h4>Validasi</h4>
        
        <h3>HTML Semantik</h3>
    </section>
</body>
</html>
\`\`\`

## Kesalahan Umum

❌ Menggunakan heading untuk teks tebal
\`\`\`html
<h3>BUKAN HEADING - HANYA TEKS BESAR</h3>
\`\`\`

✅ Gunakan CSS sebagai gantinya
\`\`\`html
<p class="teks-besar">Ini di-style dengan CSS</p>
\`\`\`

❌ Beberapa tag h1
❌ Melompati level heading
❌ Heading kosong
❌ Heading tanpa konten

## Tips Konten Heading

\`\`\`html
<!-- ✅ Heading deskriptif -->
<h2>Cara Install Visual Studio Code</h2>
<h2>10 Best Practices untuk Form HTML</h2>
<h2>Hubungi Tim Support Kami</h2>

<!-- ❌ Heading tidak jelas -->
<h2>Hal</h2>
<h2>Barang</h2>
<h2>Klik Di Sini</h2>
\`\`\`
  `,

  quiz: [
    {
      question: "Berapa banyak tag <h1> yang idealnya dimiliki satu halaman?",
      options: ["Sebanyak yang diperlukan", "Satu", "Maksimal tiga", "Minimal lima"],
      correctAnswer: 1,
      explanation: "Satu halaman sebaiknya hanya memiliki satu <h1> yang mendeskripsikan topik utama halaman."
    },
    {
      question: "Apa yang terjadi jika kamu melompati level heading (misalnya h1 → h3)?",
      options: [
        "Tidak apa-apa",
        "Browser menampilkan error",
        "Membingungkan screen reader dan merusak aksesibilitas",
        "Halaman lebih cepat dimuat"
      ],
      correctAnswer: 2,
      explanation: "Melompati level heading membuat outline dokumen tidak logis, membingungkan pengguna screen reader dan merusak aksesibilitas."
    },
    {
      question: "Heading mana yang biasanya terkecil?",
      options: ["<h1>", "<h3>", "<h4>", "<h6>"],
      correctAnswer: 3,
      explanation: "<h6> adalah level heading terkecil, mewakili level terendah dalam hierarki dokumen."
    }
  ],

  codeExamples: [
    {
      title: "Contoh Struktur Heading yang Benar",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Panduan Web Development</title>
</head>
<body>
    <header>
        <h1>Panduan Web Development</h1>
        <nav>
            <h2 class="sr-only">Navigasi</h2>
            <a href="/html">HTML</a>
            <a href="/css">CSS</a>
            <a href="/js">JavaScript</a>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>Memulai dengan HTML</h2>
            <p>HTML adalah fondasi web development...</p>
            
            <section>
                <h3>Menyiapkan Lingkungan</h3>
                <p>Pertama, download VS Code...</p>
                
                <h4>Install VS Code</h4>
                <p>Kunjungi code.visualstudio.com...</p>
                
                <h4>Extension Penting</h4>
                <ul>
                    <li>Live Server</li>
                    <li>Prettier</li>
                </ul>
            </section>
            
            <section>
                <h3>Halaman HTML Pertamamu</h3>
                <p>Buat file bernama index.html...</p>
            </section>
        </article>
        
        <aside>
            <h2>Artikel Terkait</h2>
            <ul>
                <li><a href="#">Dasar CSS</a></li>
                <li><a href="#">Dasar JavaScript</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <h2>Kontak</h2>
        <p>Email: info@example.com</p>
    </footer>
</body>
</html>`,
      output: "Menunjukkan hierarki heading yang benar di seluruh halaman web lengkap."
    }
  ]
};