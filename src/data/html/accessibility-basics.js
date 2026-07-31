export const chapter = {
  slug: "html-accessibility-basics",
  title: "Dasar Aksesibilitas",
  description: "Pelajari fundamental aksesibilitas web untuk membuat HTML yang bisa digunakan semua orang, termasuk penyandang disabilitas.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["html-elements", "html-attributes"],
  tags: ["html", "aksesibilitas", "a11y", "aria", "wcag"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Aksesibilitas Web?

Aksesibilitas web (sering ditulis **a11y**) berarti mendesain dan mengembangkan website yang bisa digunakan secara efektif oleh penyandang disabilitas.

## Kenapa Aksesibilitas Penting

- **1 miliar+ orang** di dunia memiliki beberapa bentuk disabilitas
- **Persyaratan hukum** di banyak negara
- **SEO lebih baik** - situs yang aksesibel mendapat peringkat lebih tinggi
- **UX lebih baik** untuk semua pengguna
- **Tanggung jawab etis**

## Jenis Disabilitas yang Perlu Dipertimbangkan

| Jenis | Contoh | Mempengaruhi |
|-------|--------|--------------|
| Visual | Buta, low vision, buta warna | Melihat konten |
| Pendengaran | Tuli, sulit mendengar | Mendengar audio |
| Motorik | Kelumpuhan, tremor | Menggunakan mouse/keyboard |
| Kognitif | Disleksia, ADHD | Memahami konten |
| Bicara | Bisu | Input suara |

## Standar WCAG

**Web Content Accessibility Guidelines** memiliki 4 prinsip (POUR):

### 1. Perceivable (Dapat Dipersepsikan)
Pengguna harus bisa mempersepsikan informasi.
\`\`\`html
<!-- ✅ Baik: Alt text untuk gambar -->
<img src="grafik.png" alt="Grafik penjualan menunjukkan kenaikan 20% di Q1 2026">

<!-- ❌ Buruk: Tidak ada alt text -->
<img src="grafik.png">
\`\`\`

### 2. Operable (Dapat Dioperasikan)
Pengguna harus bisa mengoperasikan antarmuka.
\`\`\`html
<!-- ✅ Baik: Bisa diakses keyboard -->
<button onclick="kirimForm()">Kirim</button>

<!-- ❌ Buruk: Div sebagai tombol (tidak fokus) -->
<div onclick="kirimForm()">Kirim</div>
\`\`\`

### 3. Understandable (Dapat Dipahami)
Pengguna harus bisa memahami konten.
\`\`\`html
<!-- ✅ Baik: Bahasa jelas -->
<p>Masukkan alamat email kamu:</p>

<!-- ❌ Buruk: Tidak jelas -->
<p>Input field:</p>
\`\`\`

### 4. Robust (Kokoh)
Konten harus bisa bekerja dengan teknologi asistif.
\`\`\`html
<!-- ✅ Baik: HTML semantik -->
<nav aria-label="Navigasi utama">
    <ul>
        <li><a href="/">Beranda</a></li>
    </ul>
</nav>
\`\`\`

## Praktik Aksesibilitas Penting

### 1. Gunakan HTML Semantik
\`\`\`html
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<aside>...</aside>
<footer>...</footer>
\`\`\`

### 2. Sediakan Alt Text untuk Gambar
\`\`\`html
<!-- Gambar informatif -->
<img src="anjing.jpg" alt="Golden retriever bermain di taman">

<!-- Gambar dekoratif -->
<img src="garis-dekoratif.png" alt="" role="presentation">
\`\`\`

### 3. Struktur Heading yang Benar
\`\`\`html
<h1>Judul Utama Halaman</h1>
  <h2>Judul Bagian</h2>
    <h3>Subbagian</h3>
  <h2>Bagian Lain</h2>
    <h3>Detail</h3>
\`\`\`
⚠️ Jangan pernah melompati level heading!

### 4. Label Elemen Form
\`\`\`html
<!-- Label eksplisit -->
<label for="email">Alamat Email:</label>
<input type="email" id="email" name="email">

<!-- Label implisit -->
<label>
    <input type="checkbox"> Saya setuju dengan ketentuan
</label>
\`\`\`

### 5. Kontras Warna
\`\`\`
✅ Rasio kontras minimum:
   - Teks normal: 4.5:1
   - Teks besar: 3:1
   - Enhanced: 7:1
\`\`\`

### 6. Navigasi Keyboard
\`\`\`html
<!-- Pastikan elemen interaktif bisa fokus -->
<a href="/halaman" tabindex="0">Tautan yang bisa diklik</a>
<button type="button">Klik aku</button>
<input type="text" placeholder="Ketik di sini">

<!-- Skip to main content -->
<a href="#konten-utama" class="skip-link">Langsung ke konten utama</a>
\`\`\`

### 7. Atribut ARIA (Jika Diperlukan)
\`\`\`html
<!-- ARIA labels untuk screen reader -->
<button aria-label="Tutup dialog">×</button>

<!-- ARIA roles -->
<div role="alert">Form berhasil dikirim!</div>

<!-- ARIA states -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<div id="menu" hidden>Item menu...</div>
\`\`\`
⚠️ **Aturan:** No ARIA lebih baik daripada bad ARIA. Gunakan HTML semantik dulu!

## Alat Testing Aksesibilitas

- **Lighthouse** (Chrome DevTools)
- **WAVE** (Web Accessibility Evaluation Tool)
- **axe** DevTools
- **Screen Readers**: NVDA (Windows), VoiceOver (Mac)
- **Pemeriksa Kontras Warna**

## Checklist Singkat

\`\`\`
✅ Semua gambar punya alt text
✅ Hierarki heading benar (h1→h6)
✅ Form punya label
✅ Kontras warna cukup
✅ Situs bisa digunakan hanya dengan keyboard
✅ HTML semantik digunakan
✅ ARIA hanya digunakan saat diperlukan
✅ Ada tautan skip navigation
✅ Multimedia punya caption/transkrip
✅ Halaman punya judul deskriptif
✅ Atribut bahasa diatur (<html lang="id">)
\`\`\`
  `,

  quiz: [
    {
      question: "Apa kepanjangan dari 'a11y'?",
      options: [
        "Accessibility (11 huruf antara A dan Y)",
        "Ally technology",
        "Array versi 11",
        "Application layer"
      ],
      correctAnswer: 0,
      explanation: "a11y adalah numeronim untuk accessibility - ada 11 huruf di antara 'a' dan 'y'."
    },
    {
      question: "Berapa rasio kontras warna minimum yang direkomendasikan untuk teks normal?",
      options: ["2:1", "3:1", "4.5:1", "10:1"],
      correctAnswer: 2,
      explanation: "WCAG mensyaratkan rasio kontras minimum 4.5:1 untuk teks normal dan 3:1 untuk teks besar."
    },
    {
      question: "Mana pendekatan yang benar untuk ARIA?",
      options: [
        "Gunakan ARIA di semua elemen",
        "No ARIA lebih baik daripada bad ARIA",
        "ARIA menggantikan HTML sepenuhnya",
        "Hanya gunakan ARIA untuk gambar"
      ],
      correctAnswer: 1,
      explanation: "Aturan pertama ARIA: jika kamu bisa menggunakan elemen HTML native, gunakan itu. No ARIA lebih baik daripada ARIA yang salah."
    }
  ],

  codeExamples: [
    {
      title: "Struktur Halaman HTML yang Aksesibel",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Web Aksesibel</title>
</head>
<body>
    <!-- Skip Navigation -->
    <a href="#konten-utama" class="skip-link">Langsung ke konten utama</a>
    
    <!-- Header -->
    <header>
        <nav aria-label="Navigasi utama">
            <ul>
                <li><a href="/">Beranda</a></li>
                <li><a href="/tentang">Tentang</a></li>
                <li><a href="/kontak">Kontak</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Konten Utama -->
    <main id="konten-utama">
        <h1>Selamat Datang di Website Kami</h1>
        
        <article>
            <h2>Berita Terbaru</h2>
            <p>Baca tentang update terbaru kami.</p>
            <img src="berita.jpg" alt="Tim merayakan peluncuran proyek">
        </article>
        
        <!-- Form Aksesibel -->
        <form aria-labelledby="heading-kontak">
            <h2 id="heading-kontak">Hubungi Kami</h2>
            
            <div>
                <label for="nama">Nama Lengkap:</label>
                <input 
                    type="text" 
                    id="nama" 
                    name="nama"
                    required
                    aria-required="true"
                >
            </div>
            
            <div>
                <label for="email">Alamat Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    aria-describedby="bantuan-email"
                >
                <span id="bantuan-email">Kami tidak akan membagikan emailmu.</span>
            </div>
            
            <fieldset>
                <legend>Metode Kontak Pilihan:</legend>
                <label>
                    <input type="radio" name="kontak" value="email" checked> Email
                </label>
                <label>
                    <input type="radio" name="kontak" value="telepon"> Telepon
                </label>
            </fieldset>
            
            <button type="submit" aria-label="Kirim formulir kontak">Kirim Pesan</button>
        </form>
    </main>
    
    <!-- Footer -->
    <footer>
        <p>&copy; 2026 Web Aksesibel</p>
    </footer>
</body>
</html>`,
      output: "Halaman web yang sepenuhnya aksesibel mengikuti pedoman WCAG."
    }
  ]
};