export const chapter = {
  slug: "html-best-practices",
  title: "Best Practices HTML",
  description: "Kumpulan praktik terbaik menulis HTML yang bersih, accessible, dan SEO-friendly.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["html-semantic-html", "html-accessibility-basics"],
  tags: ["html", "best-practices", "bersih", "profesional"],
  order: 27,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Gunakan DOCTYPE yang Benar

✅ Selalu deklarasikan di baris pertama:
\`\`\`html
<!DOCTYPE html>
\`\`\`

## 2. Atur Bahasa Halaman

\`\`\`html
<html lang="id">
\`\`\`

## 3. Gunakan Encoding UTF-8

\`\`\`html
<meta charset="UTF-8">
\`\`\`

## 4. Viewport untuk Responsive

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

## 5. HTML Semantik

❌ Buruk:
\`\`\`html
<div class="header">...</div>
<div class="nav">...</div>
<div class="main">...</div>
\`\`\`

✅ Baik:
\`\`\`html
<header>...</header>
<nav>...</nav>
<main>...</main>
\`\`\`

## 6. Struktur Heading Berurutan

\`\`\`html
<h1>Judul Utama</h1>
  <h2>Bagian</h2>
    <h3>Subbagian</h3>
\`\`\`

## 7. Alt Text untuk Gambar

\`\`\`html
<img src="foto.jpg" alt="Deskripsi gambar yang jelas">
\`\`\`

## 8. Tutup Semua Tag

❌ Buruk:
\`\`\`html
<p>Paragraf
<ul>
  <li>Item
</ul>
\`\`\`

✅ Baik:
\`\`\`html
<p>Paragraf</p>
<ul>
  <li>Item</li>
</ul>
\`\`\`

## 9. Gunakan Huruf Kecil

\`\`\`html
<!-- ❌ -->
<DIV CLASS="CONTAINER">

<!-- ✅ -->
<div class="container">
\`\`\`

## 10. Indentasi yang Konsisten

\`\`\`html
<div>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</div>
\`\`\`

## 11. Komentar yang Bermakna

\`\`\`html
<!-- Header utama website -->
<header>...</header>

<!-- Daftar produk unggulan -->
<section class="produk-unggulan">...</section>
\`\`\`

## 12. Validasi Kode

Gunakan [W3C Validator](https://validator.w3.org/) untuk memeriksa error HTML.

## 13. Eksternal CSS dan JS

\`\`\`html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
\`\`\`

## 14. Gunakan Form dengan Label

\`\`\`html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
\`\`\`

## 15. Optimasi Performa

\`\`\`html
<img src="foto.jpg" alt="Foto" loading="lazy" width="800" height="600">
\`\`\`

## Checklist

\`\`\`
✅ DOCTYPE di baris pertama
✅ Atribut lang di html
✅ Meta charset UTF-8
✅ Meta viewport
✅ Title deskriptif
✅ HTML semantik
✅ Heading berurutan
✅ Alt text di semua gambar
✅ Label di semua input form
✅ Tidak ada tag kosong
✅ Kode terindentasi rapi
✅ Tidak ada inline CSS berlebihan
✅ Script pakai atribut defer
✅ Loading lazy untuk gambar
✅ Halaman divalidasi W3C
\`\`\`
  `,

  quiz: [
    {
      question: "Mengapa harus menggunakan HTML semantik?",
      options: [
        "Hanya untuk gaya",
        "Untuk aksesibilitas dan SEO",
        "Karena wajib HTML5",
        "Agar lebih cepat"
      ],
      correctAnswer: 1,
      explanation: "HTML semantik meningkatkan aksesibilitas untuk screen reader dan SEO untuk mesin pencari."
    },
    {
      question: "Bagaimana cara menulis komentar di HTML?",
      options: ["// komentar", "/* komentar */", "<!-- komentar -->", "# komentar"],
      correctAnswer: 2,
      explanation: "Komentar HTML ditulis dengan <!-- komentar -->."
    }
  ]
};