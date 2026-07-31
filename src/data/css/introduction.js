export const chapter = {
  slug: "css-introduction",
  title: "Pengenalan CSS",
  description: "Pelajari apa itu CSS, kenapa penting, dan bagaimana CSS membuat website menjadi indah.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["css", "pengenalan", "styling", "frontend"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu CSS?

CSS adalah singkatan dari **Cascading Style Sheets**. Ini adalah bahasa yang digunakan untuk mendesain dan mengatur tampilan halaman web.

Jika HTML adalah **kerangka** (tulang), maka CSS adalah **pakaian dan make-up** (kulit dan gaya).

## Kenapa CSS Penting?

Tanpa CSS, semua website akan terlihat seperti dokumen teks putih polos. CSS memungkinkan kamu untuk:
- Mengatur warna, font, dan ukuran
- Membuat layout yang kompleks
- Menambahkan animasi dan transisi
- Membuat website responsif untuk mobile
- Memisahkan konten dari tampilan

## Tiga Cara Menggunakan CSS

### 1. Inline CSS
Langsung di atribut elemen:
\`\`\`html
<p style="color: blue; font-size: 16px;">Teks biru</p>
\`\`\`

### 2. Internal CSS
Di dalam tag \`<style>\` di head:
\`\`\`html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
\`\`\`

### 3. External CSS (Paling Direkomendasikan)
File terpisah dengan ekstensi \`.css\`:
\`\`\`html
<head>
    <link rel="stylesheet" href="style.css">
</head>
\`\`\`

\`\`\`css
/* style.css */
p {
    color: blue;
    font-size: 16px;
}
\`\`\`

## Sejarah Singkat CSS

- **1996** - CSS1 dirilis (font, warna, margin)
- **1998** - CSS2 dirilis (positioning, z-index)
- **2011** - CSS2.1 menjadi rekomendasi W3C
- **2012-sekarang** - CSS3 dengan modul-modul terpisah (Flexbox, Grid, Animasi, dll.)

## Cascading (Cascade)

CSS disebut "Cascading" karena gaya mengalir seperti air terjun:
1. **Browser default** (user agent styles)
2. **External dan internal CSS**
3. **Inline CSS** (prioritas tertinggi)

Style yang lebih spesifik akan menimpa yang kurang spesifik.

## Contoh Sebelum vs Sesudah CSS

\`\`\`html
<!-- Tanpa CSS -->
<h1>Judul Website</h1>
<p>Ini adalah paragraf teks biasa.</p>

<!-- Dengan CSS -->
<style>
    h1 {
        color: #1572B6;
        font-family: Arial, sans-serif;
        text-align: center;
        font-size: 2.5em;
    }
    p {
        color: #333;
        line-height: 1.6;
        max-width: 600px;
        margin: 0 auto;
    }
</style>
\`\`\`

## Browser Developer Tools

Untuk melihat dan eksperimen CSS:
1. Klik kanan di halaman → **Inspect** (atau F12)
2. Tab **Elements** → pilih elemen HTML
3. Panel **Styles** menunjukkan CSS yang diterapkan
4. Kamu bisa edit CSS langsung dan lihat hasilnya!
  `,

  quiz: [
    {
      question: "Apa kepanjangan dari CSS?",
      options: [
        "Cascading Style Sheets",
        "Colorful Style System",
        "Creative Style Script",
        "Computer Style Sheets"
      ],
      correctAnswer: 0,
      explanation: "CSS adalah singkatan dari Cascading Style Sheets."
    },
    {
      question: "Mana cara yang paling direkomendasikan untuk menggunakan CSS?",
      options: [
        "Inline CSS",
        "Internal CSS",
        "External CSS (file .css terpisah)",
        "Semua sama saja"
      ],
      correctAnswer: 2,
      explanation: "External CSS adalah cara terbaik karena memisahkan konten (HTML) dari tampilan (CSS) dan bisa digunakan ulang."
    },
    {
      question: "Kenapa CSS disebut 'Cascading'?",
      options: [
        "Karena kode mengalir seperti air",
        "Karena style mengalir dari umum ke spesifik",
        "Karena dibuat di dekat air terjun",
        "Karena singkatan kebetulan"
      ],
      correctAnswer: 1,
      explanation: "CSS disebut cascading karena aturan style diterapkan secara berjenjang, dari yang paling umum hingga yang paling spesifik."
    }
  ],

  codeExamples: [
    {
      title: "Perbandingan Tanpa vs Dengan CSS",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Contoh CSS</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background: #f5f5f5;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 30px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #1572B6;
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        p {
            color: #555;
            line-height: 1.8;
            font-size: 1.1em;
        }
        .highlight {
            background: #fff3cd;
            padding: 15px;
            border-left: 4px solid #ffc107;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Halo, CSS!</h1>
        <p>Ini adalah contoh halaman yang sudah diberi styling dengan CSS.</p>
        <div class="highlight">
            <strong>Tips:</strong> CSS membuat website jadi lebih menarik dan profesional!
        </div>
    </div>
</body>
</html>`,
      output: "Halaman dengan styling CSS dasar yang menunjukkan perbedaan tampilan."
    }
  ]
};