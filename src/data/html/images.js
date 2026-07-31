export const chapter = {
  slug: "html-images",
  title: "Gambar",
  description: "Pelajari cara menampilkan dan mengoptimalkan gambar di HTML.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["html-elements", "html-attributes"],
  tags: ["html", "gambar", "img", "multimedia"],
  order: 16,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Elemen Gambar HTML

Elemen \`<img>\` digunakan untuk menampilkan gambar di halaman web. Ini adalah elemen **void** (tidak punya tag penutup).

## Sintaks Dasar

\`\`\`html
<img src="foto.jpg" alt="Deskripsi gambar">
\`\`\`

## Atribut Wajib dan Penting

### 1. src (Source)
Menentukan path ke file gambar:
\`\`\`html
<!-- Gambar lokal -->
<img src="gambar/foto.jpg" alt="Foto">

<!-- URL absolut -->
<img src="https://example.com/gambar.jpg" alt="Gambar dari web">

<!-- Base64 (tidak disarankan untuk gambar besar) -->
<img src="data:image/png;base64,iVBORw0..." alt="Gambar embedded">
\`\`\`

### 2. alt (Alternative Text)
Teks alternatif saat gambar tidak bisa ditampilkan:
\`\`\`html
<!-- Gambar informatif - deskripsikan -->
<img src="grafik.jpg" alt="Grafik penjualan naik 20% di kuartal pertama">

<!-- Gambar dekoratif - kosongkan -->
<img src="dekorasi.png" alt="">

<!-- Logo dengan tautan - deskripsikan fungsi -->
<a href="/">
    <img src="logo.png" alt="Websiteku - Kembali ke beranda">
</a>
\`\`\`

⚠️ **Aturan alt text**:
- Selalu sertakan atribut alt (wajib untuk aksesibilitas)
- Deskripsikan konten/fungsi gambar
- Kosongkan (\`alt=""\`) untuk gambar dekoratif
- Jangan gunakan kata "gambar" atau "foto"

### 3. width dan height
Mengatur dimensi tampilan:
\`\`\`html
<!-- Pixel -->
<img src="foto.jpg" alt="Foto" width="300" height="200">

<!-- Atribut ini mencegah layout shift (CLS) -->
<img src="foto.jpg" alt="Foto" width="800" height="600">
\`\`\`
💡 **Tips**: Selalu tentukan width dan height asli untuk mencegah Cumulative Layout Shift.

## Atribut Tambahan

### loading
Mengontrol kapan gambar dimuat:
\`\`\`html
<!-- Lazy loading (dimuat saat hampir terlihat) -->
<img src="foto.jpg" alt="Foto" loading="lazy">

<!-- Eager loading (dimuat segera, default) -->
<img src="foto.jpg" alt="Foto" loading="eager">
\`\`\`

### decoding
Mengontrol bagaimana gambar didekode:
\`\`\`html
<img src="foto.jpg" alt="Foto" decoding="async">
\`\`\`

### fetchpriority
Memberi petunjuk prioritas pengambilan:
\`\`\`html
<!-- Gambar penting (LCP) -->
<img src="hero.jpg" alt="Hero" fetchpriority="high">

<!-- Gambar kurang penting -->
<img src="dekorasi.jpg" alt="" fetchpriority="low">
\`\`\`

## Format Gambar Modern

| Format | Keunggulan | Penggunaan |
|--------|------------|------------|
| **JPEG** | Kompresi baik, universal | Foto, gambar kompleks |
| **PNG** | Transparansi, lossless | Logo, ikon, screenshot |
| **WebP** | Kompresi lebih baik dari JPEG/PNG | Semua jenis (modern) |
| **AVIF** | Kompresi terbaik | Semua jenis (terbaru) |
| **SVG** | Vektor, scalable | Ikon, ilustrasi, logo |

## Gambar Responsif

### Menggunakan srcset
\`\`\`html
<img src="foto-small.jpg"
     srcset="foto-small.jpg 480w,
             foto-medium.jpg 800w,
             foto-large.jpg 1200w"
     sizes="(max-width: 600px) 480px,
            (max-width: 900px) 800px,
            1200px"
     alt="Foto responsif">
\`\`\`

### Menggunakan <picture>
\`\`\`html
<picture>
    <!-- Format modern untuk browser yang mendukung -->
    <source srcset="gambar.avif" type="image/avif">
    <source srcset="gambar.webp" type="image/webp">
    
    <!-- Fallback -->
    <img src="gambar.jpg" alt="Gambar">
</picture>
\`\`\`

## Figure dan Figcaption

Untuk gambar dengan keterangan:
\`\`\`html
<figure>
    <img src="pemandangan.jpg" alt="Pemandangan gunung saat matahari terbenam">
    <figcaption>
        Gambar 1: Pemandangan Gunung Bromo saat matahari terbenam.
        Foto oleh: Budi Santoso, 2026.
    </figcaption>
</figure>
\`\`\`

## Image Map

Membuat area yang bisa diklik pada gambar:
\`\`\`html
<img src="peta.jpg" alt="Peta Kantor" usemap="#peta-kantor">

<map name="peta-kantor">
    <area shape="rect" coords="34,44,270,350" 
          alt="Ruang Meeting" href="meeting.html">
    <area shape="circle" coords="337,300,44" 
          alt="Resepsionis" href="resepsionis.html">
</map>
\`\`\`

## Best Practices

### ✅ Optimasi gambar
\`\`\`html
<!-- Kompres dan resize sebelum upload -->
<img src="foto-dioptimasi.jpg" alt="Foto" width="800" height="600">
\`\`\`

### ✅ Selalu gunakan alt text
\`\`\`html
<img src="produk.jpg" alt="Sepatu lari Nike Air Max warna hitam">
\`\`\`

### ✅ Gunakan format modern
\`\`\`html
<picture>
    <source srcset="gambar.avif" type="image/avif">
    <source srcset="gambar.webp" type="image/webp">
    <img src="gambar.jpg" alt="Gambar">
</picture>
\`\`\`

### ❌ Jangan gunakan gambar untuk teks
\`\`\`html
<!-- Buruk: Teks sebagai gambar -->
<img src="judul-artikel.png" alt="Judul Artikel">

<!-- Baik: Teks asli dengan CSS -->
<h1 class="judul-artikel">Judul Artikel</h1>
\`\`\`

### ❌ Jangan resize dengan CSS saja
\`\`\`html
<!-- Buruk: Gambar 4000px ditampilkan 200px -->
<img src="gambar-besar.jpg" style="width: 200px">

<!-- Baik: Resize gambar sebelum upload -->
<img src="gambar-200px.jpg" alt="Gambar">
\`\`\`

## Checklist Gambar

\`\`\`
✅ Selalu sertakan atribut alt
✅ Tentukan width dan height
✅ Gunakan loading="lazy" untuk gambar di bawah fold
✅ Kompres gambar sebelum upload
✅ Sediakan format WebP/AVIF
✅ Gunakan srcset untuk responsif
✅ Gambar dekoratif pakai CSS background
\`\`\`
  `,

  quiz: [
    {
      question: "Apa fungsi atribut alt pada gambar?",
      options: [
        "Mempercepat loading",
        "Teks alternatif saat gambar tidak bisa ditampilkan",
        "Mengubah ukuran gambar",
        "Menambahkan link"
      ],
      correctAnswer: 1,
      explanation: "Atribut alt menyediakan teks alternatif yang ditampilkan jika gambar gagal dimuat, dan dibaca oleh screen reader untuk aksesibilitas."
    },
    {
      question: "Format gambar modern apa yang menawarkan kompresi terbaik?",
      options: ["JPEG", "PNG", "GIF", "AVIF"],
      correctAnswer: 3,
      explanation: "AVIF adalah format gambar terbaru yang menawarkan kompresi terbaik dibanding JPEG, PNG, dan WebP."
    },
    {
      question: "Apa fungsi loading='lazy' pada gambar?",
      options: [
        "Mempercepat loading semua gambar",
        "Menunda loading gambar sampai hampir terlihat",
        "Membuat gambar lebih kecil",
        "Mengubah format gambar"
      ],
      correctAnswer: 1,
      explanation: "loading='lazy' menunda pengambilan gambar sampai gambar hampir masuk viewport, menghemat bandwidth dan mempercepat initial load."
    }
  ],

  codeExamples: [
    {
      title: "Gambar Responsif dan Modern",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Contoh Gambar</title>
</head>
<body>
    <h1>Gambar di HTML</h1>
    
    <!-- Gambar Dasar -->
    <h2>Gambar Dasar</h2>
    <img src="foto.jpg" 
         alt="Pemandangan pantai saat matahari terbenam"
         width="800" 
         height="600"
         loading="lazy">
    
    <!-- Gambar dengan Keterangan -->
    <h2>Gambar dengan Keterangan</h2>
    <figure>
        <img src="gunung.jpg" 
             alt="Gunung Fuji dengan salju di puncaknya"
             width="800"
             height="600"
             loading="lazy">
        <figcaption>
            <strong>Gambar 1:</strong> Gunung Fuji pada musim dingin.
            Foto oleh: Akira Tanaka, 2026.
        </figcaption>
    </figure>
    
    <!-- Gambar Responsif dengan srcset -->
    <h2>Gambar Responsif</h2>
    <img src="foto-small.jpg"
         srcset="foto-small.jpg 480w,
                 foto-medium.jpg 800w,
                 foto-large.jpg 1200w"
         sizes="(max-width: 600px) 480px,
                (max-width: 900px) 800px,
                1200px"
         alt="Pemandangan kota di malam hari"
         loading="lazy">
    
    <!-- Picture Element untuk Format Modern -->
    <h2>Format Modern</h2>
    <picture>
        <source srcset="gambar.avif" type="image/avif">
        <source srcset="gambar.webp" type="image/webp">
        <img src="gambar.jpg" 
             alt="Ilustrasi web development"
             width="800" 
             height="600"
             loading="lazy">
    </picture>
    
    <!-- Gambar dengan Prioritas Tinggi (LCP) -->
    <h2>Gambar Hero (Prioritas Tinggi)</h2>
    <img src="hero.jpg" 
         alt="Banner utama website - Selamat datang"
         width="1200" 
         height="600"
         fetchpriority="high"
         decoding="async">
    
    <!-- Logo dengan Tautan -->
    <h2>Logo</h2>
    <a href="/">
        <img src="logo.svg" 
             alt="Websiteku - Kembali ke beranda"
             width="150" 
             height="50">
    </a>
    
    <!-- Gambar Dekoratif -->
    <h2>Dekorasi</h2>
    <img src="dekorasi.png" 
         alt=""
         role="presentation"
         loading="lazy">
    
    <!-- Galeri Sederhana -->
    <h2>Galeri Foto</h2>
    <div class="galeri">
        <figure>
            <img src="foto1.jpg" alt="Kucing oranye tidur di sofa" loading="lazy">
            <figcaption>Kucing Oren</figcaption>
        </figure>
        <figure>
            <img src="foto2.jpg" alt="Anjing golden retriever bermain bola" loading="lazy">
            <figcaption>Golden Retriever</figcaption>
        </figure>
        <figure>
            <img src="foto3.jpg" alt="Burung hantu di pohon" loading="lazy">
            <figcaption>Burung Hantu</figcaption>
        </figure>
    </div>
</body>
</html>`,
      output: "Menunjukkan berbagai teknik menampilkan gambar yang modern, responsif, dan accessible."
    }
  ]
};