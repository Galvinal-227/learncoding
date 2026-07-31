export const chapter = {
  slug: "html-links",
  title: "Tautan & Navigasi",
  description: "Kuasai cara membuat tautan dan navigasi di HTML menggunakan elemen anchor.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["html-elements", "html-attributes"],
  tags: ["html", "tautan", "navigasi", "anchor"],
  order: 15,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Tautan HTML?

Tautan (hyperlink) adalah fondasi web. Mereka menghubungkan halaman satu sama lain dan memungkinkan pengguna bernavigasi. Dibuat menggunakan elemen \`<a>\` (anchor).

## Sintaks Dasar

\`\`\`html
<a href="https://www.google.com">Kunjungi Google</a>
\`\`\`

### Bagian-bagian Tautan:
- \`<a>\` - Elemen anchor
- \`href\` - Atribut tujuan (Hypertext REFerence)
- Konten teks - Yang bisa diklik pengguna

## Jenis-jenis Tautan

### 1. Tautan Absolut
Mengarah ke website lain (URL lengkap):
\`\`\`html
<a href="https://www.google.com">Google</a>
<a href="https://github.com/budi">GitHub Saya</a>
\`\`\`

### 2. Tautan Relatif
Mengarah ke halaman di website yang sama:
\`\`\`html
<!-- Struktur folder -->
<!-- /index.html -->
<!-- /tentang.html -->
<!-- /blog/artikel.html -->

<a href="tentang.html">Tentang</a>
<a href="blog/artikel.html">Artikel</a>
<a href="../index.html">Kembali ke Beranda</a>
\`\`\`

### 3. Tautan Email
Membuka aplikasi email:
\`\`\`html
<a href="mailto:halo@example.com">Kirim Email</a>
<a href="mailto:halo@example.com?subject=Pertanyaan&body=Halo">Email dengan Subjek</a>
\`\`\`

### 4. Tautan Telepon
Membuka aplikasi telepon (mobile):
\`\`\`html
<a href="tel:+6281234567890">Telepon Kami</a>
\`\`\`

### 5. Tautan ke Bagian Halaman (Anchor)
\`\`\`html
<!-- Target -->
<h2 id="kontak">Hubungi Kami</h2>

<!-- Tautan ke target -->
<a href="#kontak">Langsung ke Kontak</a>

<!-- Tautan ke bagian di halaman lain -->
<a href="tentang.html#tim">Tim Kami</a>
\`\`\`

## Atribut Target

Mengontrol bagaimana tautan dibuka:

\`\`\`html
<!-- Tab/jendela baru -->
<a href="https://example.com" target="_blank">Buka di Tab Baru</a>

<!-- Tab/jendela yang sama (default) -->
<a href="https://example.com" target="_self">Buka di Sini</a>

<!-- Frame parent -->
<a href="https://example.com" target="_parent">Buka di Parent</a>

<!-- Halaman penuh (keluar dari frame) -->
<a href="https://example.com" target="_top">Buka Penuh</a>
\`\`\`

⚠️ **Keamanan**: Saat menggunakan \`target="_blank"\`, selalu tambahkan \`rel="noopener noreferrer"\`:
\`\`\`html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Buka Aman di Tab Baru
</a>
\`\`\`

## Atribut Rel

Mendefinisikan hubungan antara halaman saat ini dan yang ditautkan:

\`\`\`html
<!-- Larang mesin pencari mengikuti tautan -->
<a href="https://example.com" rel="nofollow">Tautan Sponsor</a>

<!-- Tautan tidak boleh dibuka dengan konteks pengguna -->
<a href="https://example.com" rel="noopener">Buka Aman</a>

<!-- Larang pengirim referrer -->
<a href="https://example.com" rel="noreferrer">Tanpa Referrer</a>

<!-- Kombinasi -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer nofollow">
    Tautan Eksternal Aman
</a>
\`\`\`

## Tautan Download

\`\`\`html
<a href="dokumen.pdf" download>Download PDF</a>
<a href="gambar.jpg" download="foto-profil.jpg">Download dengan Nama Baru</a>
\`\`\`

## Navigasi Website

### Struktur Navigasi Dasar
\`\`\`html
<nav>
    <ul>
        <li><a href="/">Beranda</a></li>
        <li><a href="/tentang">Tentang</a></li>
        <li><a href="/layanan">Layanan</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/kontak">Kontak</a></li>
    </ul>
</nav>
\`\`\`

### Breadcrumb
\`\`\`html
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Beranda</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><span aria-current="page">Artikel HTML</span></li>
    </ol>
</nav>
\`\`\`

## Status Tautan (CSS Pseudo-classes)

\`\`\`css
/* Tautan belum dikunjungi */
a:link { color: blue; }

/* Tautan sudah dikunjungi */
a:visited { color: purple; }

/* Kursor di atas tautan */
a:hover { color: red; }

/* Tautan sedang diklik */
a:active { color: orange; }

/* Tautan sedang fokus (keyboard) */
a:focus { outline: 2px solid blue; }
\`\`\`

## Best Practices

### ✅ Teks tautan deskriptif
\`\`\`html
<!-- Baik -->
<a href="/artikel">Baca panduan lengkap HTML</a>

<!-- Buruk -->
<a href="/artikel">Klik di sini</a>
<a href="/artikel">Baca selengkapnya</a>
\`\`\`

### ✅ Bedakan tautan internal dan eksternal
\`\`\`html
<a href="/tentang">Tentang Kami</a>
<a href="https://instagram.com" target="_blank" rel="noopener">
    Instagram Kami 🔗
</a>
\`\`\`

### ✅ Gunakan tautan untuk navigasi
\`\`\`html
<!-- Baik: Tautan untuk navigasi -->
<a href="/profil">Lihat Profil</a>

<!-- Buruk: Tautan kosong -->
<a href="#">Tautan tidak berguna</a>
<a href="javascript:void(0)">Harusnya pakai button</a>
\`\`\`

### ❌ Hindari tautan tanpa href
\`\`\`html
<!-- Buruk -->
<a>Tautan tanpa tujuan</a>

<!-- Gunakan button jika bukan tautan -->
<button type="button">Tombol Aksi</button>
\`\`\`

## Tautan dengan Gambar

\`\`\`html
<a href="/">
    <img src="logo.png" alt="Logo Website - Kembali ke Beranda">
</a>
\`\`\`
  `,

  quiz: [
    {
      question: "Apa fungsi atribut href pada elemen <a>?",
      options: [
        "Menentukan ukuran tautan",
        "Menentukan warna tautan",
        "Menentukan URL tujuan tautan",
        "Menyembunyikan tautan"
      ],
      correctAnswer: 2,
      explanation: "Atribut href (Hypertext REFerence) menentukan URL atau tujuan yang akan dituju saat tautan diklik."
    },
    {
      question: "Apa yang harus ditambahkan saat menggunakan target='_blank' untuk keamanan?",
      options: [
        "rel='stylesheet'",
        "rel='noopener noreferrer'",
        "rel='icon'",
        "Tidak perlu apa-apa"
      ],
      correctAnswer: 1,
      explanation: "rel='noopener noreferrer' mencegah halaman baru mengakses window.opener dan melindungi dari serangan phishing."
    },
    {
      question: "Bagaimana cara membuat tautan ke bagian tertentu di halaman yang sama?",
      options: [
        "Menggunakan atribut page",
        "Menggunakan # diikuti id target",
        "Menggunakan atribut section",
        "Tidak bisa dilakukan"
      ],
      correctAnswer: 1,
      explanation: "Gunakan href='#id-target' untuk membuat tautan ke elemen dengan id tersebut di halaman yang sama."
    }
  ],

  codeExamples: [
    {
      title: "Berbagai Jenis Tautan",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Contoh Tautan</title>
</head>
<body>
    <h1>Jenis-jenis Tautan HTML</h1>
    
    <!-- Navigasi Utama -->
    <nav aria-label="Navigasi utama">
        <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/tentang">Tentang</a></li>
            <li><a href="/layanan">Layanan</a></li>
            <li><a href="/kontak">Kontak</a></li>
        </ul>
    </nav>
    
    <hr>
    
    <!-- Tautan Absolut -->
    <h2>Tautan Eksternal</h2>
    <ul>
        <li><a href="https://www.google.com">Google</a></li>
        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub (Tab Baru)
        </a></li>
    </ul>
    
    <!-- Tautan Relatif -->
    <h2>Tautan Internal</h2>
    <ul>
        <li><a href="tentang.html">Halaman Tentang</a></li>
        <li><a href="blog/artikel.html">Artikel Blog</a></li>
        <li><a href="../index.html">Kembali ke Beranda</a></li>
    </ul>
    
    <!-- Tautan Email & Telepon -->
    <h2>Kontak</h2>
    <ul>
        <li><a href="mailto:halo@example.com">Kirim Email</a></li>
        <li><a href="mailto:halo@example.com?subject=Pertanyaan&body=Halo, saya ingin bertanya...">
            Email dengan Subjek
        </a></li>
        <li><a href="tel:+6281234567890">Telepon: 0812-3456-7890</a></li>
    </ul>
    
    <!-- Tautan Anchor (ke bagian halaman) -->
    <h2>Daftar Isi</h2>
    <ul>
        <li><a href="#bagian1">Bagian 1: Pengenalan</a></li>
        <li><a href="#bagian2">Bagian 2: Pembahasan</a></li>
        <li><a href="#bagian3">Bagian 3: Kesimpulan</a></li>
    </ul>
    
    <!-- Target Anchor -->
    <section id="bagian1">
        <h3>Bagian 1: Pengenalan</h3>
        <p>Konten pengenalan di sini...</p>
        <a href="#">Kembali ke atas</a>
    </section>
    
    <section id="bagian2">
        <h3>Bagian 2: Pembahasan</h3>
        <p>Konten pembahasan di sini...</p>
        <a href="#">Kembali ke atas</a>
    </section>
    
    <section id="bagian3">
        <h3>Bagian 3: Kesimpulan</h3>
        <p>Konten kesimpulan di sini...</p>
        <a href="#">Kembali ke atas</a>
    </section>
    
    <hr>
    
    <!-- Tautan Download -->
    <h2>Download</h2>
    <ul>
        <li><a href="panduan.pdf" download>Download Panduan PDF</a></li>
        <li><a href="gambar.jpg" download="foto-profil.jpg">Download Foto</a></li>
    </ul>
    
    <!-- Breadcrumb -->
    <h2>Breadcrumb</h2>
    <nav aria-label="Breadcrumb">
        <ol>
            <li><a href="/">Beranda</a></li>
            <li><a href="/tutorial">Tutorial</a></li>
            <li><span aria-current="page">HTML Dasar</span></li>
        </ol>
    </nav>
    
    <hr>
    
    <!-- Footer dengan Tautan -->
    <footer>
        <p>&copy; 2026 Websiteku</p>
        <nav aria-label="Tautan footer">
            <a href="/privasi">Kebijakan Privasi</a> |
            <a href="/ketentuan">Ketentuan Layanan</a> |
            <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
        </nav>
    </footer>
</body>
</html>`,
      output: "Menunjukkan semua jenis tautan HTML yang bekerja bersama dalam satu halaman."
    }
  ]
};