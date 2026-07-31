export const chapter = {
  slug: "html-elements",
  title: "Elemen HTML",
  description: "Memahami elemen HTML - blok-blok pembangun halaman web.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["html-html-structure"],
  tags: ["html", "elemen", "tag", "dasar"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Elemen HTML?

Elemen HTML adalah segala sesuatu dari tag pembuka hingga tag penutup, termasuk konten di dalamnya.

## Struktur Dasar Sebuah Elemen

\`\`\`html
<namatag>Konten di sini</namatag>
\`\`\`

### Bagian-bagian Elemen:
\`\`\`html
<p class="intro">Halo Dunia</p>
\`\`\`

1. **Tag pembuka**: \`<p class="intro">\`
2. **Atribut**: \`class="intro"\`
3. **Konten**: \`Halo Dunia\`
4. **Tag penutup**: \`</p>\`

## Jenis-jenis Elemen

### 1. Elemen Block-Level
Selalu dimulai di baris baru dan mengambil lebar penuh:
\`\`\`html
<div>...</div>
<h1>...</h1>
<p>...</p>
<section>...</section>
<article>...</article>
<header>...</header>
<footer>...</footer>
<ul>...</ul>
<ol>...</ol>
<table>...</table>
\`\`\`

### 2. Elemen Inline
Tidak dimulai di baris baru, hanya mengambil lebar yang diperlukan:
\`\`\`html
<span>...</span>
<a>...</a>
<strong>...</strong>
<em>...</em>
<img>
<br>
<input>
<button>...</button>
\`\`\`

### 3. Elemen Void (Self-Closing)
Elemen tanpa konten, tidak perlu tag penutup:
\`\`\`html
<br>
<hr>
<img src="foto.jpg" alt="Foto">
<input type="text">
<meta charset="UTF-8">
<link rel="stylesheet" href="style.css">
\`\`\`

## Menyusun Elemen (Nesting)

Elemen bisa berisi elemen lain:
\`\`\`html
<div>
    <h2>Judul</h2>
    <p>Ini adalah kata <strong>tebal</strong>.</p>
</div>
\`\`\`

### Aturan Nesting:
✅ **Nesting yang benar**
\`\`\`html
<p>Ini adalah <strong>teks tebal</strong></p>
\`\`\`

❌ **Nesting yang salah**
\`\`\`html
<p>Ini adalah <strong>teks tebal</p></strong>
\`\`\`

## Hubungan Parent, Child, dan Sibling

\`\`\`html
<div>               <!-- Parent dari h2 dan p -->
    <h2>Judul</h2>          <!-- Child dari div -->
    <p>Teks</p>             <!-- Child dari div, sibling dari h2 -->
</div>
\`\`\`

## Referensi Elemen Umum

| Elemen | Deskripsi | Jenis |
|--------|-----------|-------|
| \`<div>\` | Wadah generik | Block |
| \`<span>\` | Wadah inline generik | Inline |
| \`<h1>-<h6>\` | Heading | Block |
| \`<p>\` | Paragraf | Block |
| \`<a>\` | Tautan | Inline |
| \`<img>\` | Gambar | Inline (void) |
| \`<ul>/<ol>/<li>\` | List | Block |
| \`<br>\` | Baris baru | Inline (void) |
| \`<hr>\` | Garis horizontal | Block (void) |

## Case Sensitivity

HTML **tidak case-sensitive**, tapi konvensi menggunakan huruf kecil:
\`\`\`html
<!-- Semua valid, tapi tetap pakai huruf kecil -->
<P>Halo</P>    ❌ Tidak disarankan
<p>Halo</p>    ✅ Disarankan
\`\`\`
  `,

  quiz: [
    {
      question: "Manakah yang merupakan elemen void?",
      options: ["<p>", "<div>", "<br>", "<span>"],
      correctAnswer: 2,
      explanation: "<br> adalah elemen void (self-closing) - tidak memiliki konten dan tidak perlu tag penutup."
    },
    {
      question: "Apa jenis elemen <div>?",
      options: ["Inline", "Block-level", "Void", "Inline-block"],
      correctAnswer: 1,
      explanation: "<div> adalah elemen block-level yang mengambil lebar penuh dan selalu dimulai di baris baru."
    },
    {
      question: "Manakah nesting yang benar?",
      options: [
        "<p><div>Teks</div></p>",
        "<div><p>Teks</p></div>",
        "<p><br></p>",
        "B dan C benar"
      ],
      correctAnswer: 3,
      explanation: "Opsi B benar (block di dalam block). Opsi C juga benar (<br> adalah void). Elemen block tidak boleh di dalam elemen inline seperti <p>."
    }
  ],

  codeExamples: [
    {
      title: "Elemen dalam Aksi",
      language: "html",
      code: `<!-- Elemen Block -->
<div>
    <h1>Judul Utama</h1>
    <p>Ini adalah paragraf dengan <strong>teks tebal</strong>.</p>
</div>

<!-- Elemen Inline -->
<p>
    Kunjungi <a href="https://example.com">website kami</a> 
    atau lihat ikon <img src="icon.png" alt="ikon"> ini.
</p>

<!-- Elemen Void -->
<hr>
<p>Baris 1<br>Baris 2</p>
<input type="text" placeholder="Masukkan teks">`,
      output: "Menunjukkan berbagai jenis elemen yang bekerja bersama dalam halaman web."
    }
  ]
};