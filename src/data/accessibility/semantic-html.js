export const chapter = {
  slug: "accessibility-semantic-html",
  title: "HTML Semantik untuk Aksesibilitas",
  description: "Gunakan elemen HTML semantik sebagai fondasi website yang aksesibel.",
  icon: "SiAccessibility",
  color: "#0066CC",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["accessibility-introduction"],
  tags: ["aksesibilitas", "html", "semantik", "landmark"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Fondasi Aksesibilitas: HTML Semantik

HTML semantik adalah cara **paling efektif dan paling sederhana** untuk membuat website aksesibel. Elemen semantik sudah membawa peran aksesibilitas bawaan.

## Landmark Elements

Screen reader menggunakan landmark untuk navigasi cepat (lompat ke section):

\`\`\`html
<header>    <!-- role="banner" -->
<nav>       <!-- role="navigation" -->
<main>      <!-- role="main" -->
<aside>     <!-- role="complementary" -->
<footer>    <!-- role="contentinfo" -->
<section>   <!-- role="region" -->
<article>   <!-- role="article" -->
<form>      <!-- role="form" -->
\`\`\`

## Heading Hierarchy

Screen reader user sering navigasi via heading:
\`\`\`html
<!-- ✅ Benar: hierarki logis -->
<h1>Judul Halaman</h1>
  <h2>Bagian Utama</h2>
    <h3>Sub-bagian</h3>
  <h2>Bagian Kedua</h2>

<!-- ❌ Salah: loncat level -->
<h1>Judul</h1>
  <h3>Langsung h3</h3> <!-- Tidak ada h2! -->
\`\`\`

## Link vs Button

\`\`\`html
<!-- ✅ Link untuk navigasi -->
<a href="/tentang">Tentang Kami</a>

<!-- ✅ Button untuk aksi -->
<button onclick="submit()">Kirim</button>

<!-- ❌ Jangan: link palsu -->
<a href="#" onclick="submit()">Kirim</a>

<!-- ❌ Jangan: div sebagai button -->
<div onclick="submit()" role="button">Kirim</div>
\`\`\`

## Form yang Aksesibel

\`\`\`html
<!-- ✅ Label + Input terhubung -->
<label for="email">Alamat Email</label>
<input type="email" id="email" name="email" required>

<!-- ✅ Fieldset untuk grouping -->
<fieldset>
    <legend>Metode Pembayaran</legend>
    <label><input type="radio" name="bayar" value="transfer"> Transfer</label>
    <label><input type="radio" name="bayar" value="cod"> COD</label>
</fieldset>

<!-- ✅ Error message -->
<input aria-describedby="emailError">
<span id="emailError" role="alert">Email tidak valid</span>
\`\`\`

## Gambar yang Aksesibel

\`\`\`html
<!-- ✅ Alt text deskriptif -->
<img src="grafik.jpg" alt="Grafik penjualan naik 25% di Q1 2026">

<!-- ✅ Dekoratif -->
<img src="dekorasi.png" alt="" role="presentation">

<!-- ❌ Tanpa alt -->
<img src="foto.jpg"> <!-- Screen reader baca nama file! -->
\`\`\`

## Skip Navigation Link

\`\`\`html
<body>
    <a href="#mainContent" class="skip-link">Langsung ke konten</a>
    
    <nav>...</nav>
    
    <main id="mainContent">
        <!-- Konten utama -->
    </main>
</body>

<style>
.skip-link {
    position: absolute;
    top: -100px;
    left: 0;
    background: #333;
    color: white;
    padding: 10px;
    z-index: 1000;
}
.skip-link:focus {
    top: 0;
}
</style>
\`\`\`

## Checklist HTML Semantik

\`\`\`
✅ Gunakan <main>, <nav>, <header>, <footer>
✅ Heading berurutan (h1 → h2 → h3)
✅ Label terhubung dengan input (for="id")
✅ Alt text untuk semua gambar
✅ Link untuk navigasi, button untuk aksi
✅ Skip navigation link
✅ Lang="id" di elemen <html>
\`\`\`
  `,

  quiz: [
    { question: "Apa landmark role otomatis dari elemen <main>?", options: ["banner", "main", "navigation", "article"], correctAnswer: 1, explanation: "<main> otomatis memiliki role='main'. Screen reader bisa lompat langsung ke sini." },
    { question: "Kenapa heading tidak boleh diloncati?", options: ["Tidak masalah", "Screen reader user navigasi via heading, loncat membingungkan", "Hanya aturan style", "Browser tidak support"], correctAnswer: 1, explanation: "Screen reader user sering navigasi konten via heading. Hierarki yang tidak logis membingungkan mereka." },
    { question: "Apa fungsi skip navigation link?", options: ["Mempercepat loading", "Bypass menu navigasi langsung ke konten utama", "Skip CSS", "Loncat halaman"], correctAnswer: 1, explanation: "Skip link memungkinkan keyboard/screen reader user melewati menu berulang dan langsung ke konten utama." }
  ],

  codeExamples: [
    {
      title: "Halaman Semantik Aksesibel",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Halaman Aksesibel</title>
    <style>
        .skip-link { position: absolute; top: -40px; left: 10px; background: #0066CC; color: white; padding: 10px 15px; border-radius: 0 0 4px 4px; z-index: 100; }
        .skip-link:focus { top: 0; }
        body { font-family: Arial; margin: 0; }
        header { background: #333; color: white; padding: 20px; }
        nav ul { display: flex; gap: 20px; list-style: none; }
        nav a { color: white; }
        main { padding: 20px; max-width: 800px; margin: 0 auto; }
        form div { margin: 15px 0; }
        label { display: block; margin-bottom: 5px; }
        input, textarea { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
        button { background: #0066CC; color: white; border: none; padding: 12px 24px; border-radius: 4px; cursor: pointer; font-size: 1rem; }
        .error { color: #d32f2f; font-size: 14px; }
        footer { background: #f5f5f5; text-align: center; padding: 20px; margin-top: 40px; }
    </style>
</head>
<body>
    <a href="#mainContent" class="skip-link">Langsung ke konten ⏭</a>
    
    <header>
        <h1>Situs Aksesibel</h1>
        <nav aria-label="Navigasi utama">
            <ul>
                <li><a href="/">Beranda</a></li>
                <li><a href="/tentang">Tentang</a></li>
                <li><a href="/kontak">Kontak</a></li>
            </ul>
        </nav>
    </header>
    
    <main id="mainContent">
        <h2>Hubungi Kami</h2>
        
        <form aria-labelledby="formTitle">
            <h3 id="formTitle">Form Kontak</h3>
            
            <div>
                <label for="nama">Nama Lengkap *</label>
                <input type="text" id="nama" name="nama" required 
                       aria-required="true">
            </div>
            
            <div>
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required
                       aria-describedby="emailInfo">
                <small id="emailInfo">Kami tidak akan membagikan email Anda.</small>
            </div>
            
            <div>
                <fieldset>
                    <legend>Subjek</legend>
                    <label><input type="radio" name="subjek" value="pertanyaan"> Pertanyaan</label>
                    <label><input type="radio" name="subjek" value="masukan"> Masukan</label>
                </fieldset>
            </div>
            
            <div>
                <label for="pesan">Pesan *</label>
                <textarea id="pesan" name="pesan" rows="5" required></textarea>
            </div>
            
            <button type="submit">Kirim Pesan</button>
        </form>
    </main>
    
    <footer>
        <p>&copy; 2026 Situs Aksesibel. Dibangun dengan aksesibilitas.</p>
    </footer>
</body>
</html>`
    }
  ]
};