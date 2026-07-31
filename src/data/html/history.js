export const chapter = {
  slug: "html-history",
  title: "Sejarah HTML",
  description: "Jelajahi evolusi HTML dari tahun 1991 hingga HTML5 modern.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 8,
  prerequisites: ["html-introduction"],
  tags: ["html", "sejarah", "standar-web"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Evolusi HTML

### HTML 1.0 (1991)
- Dibuat oleh Tim Berners-Lee
- Sangat sederhana: teks, tautan, heading
- Hanya 18 elemen
- Tidak ada gambar, tabel, atau form

### HTML 2.0 (1995)
- Standar resmi pertama (RFC 1866)
- Menambahkan form dan tabel
- Memperkenalkan tag \`<img>\`
- Masih sangat sederhana

### HTML 3.2 (1997)
- Standarisasi oleh W3C
- Dukungan tabel, applet, text flow
- Dukungan gambar lebih baik
- Dukungan script untuk JavaScript

### HTML 4.01 (1999)
- Pembaruan besar dengan tiga varian:
  - Strict
  - Transitional
  - Frameset
- Pengenalan CSS
- Fitur aksesibilitas lebih baik
- Dukungan internasional

### XHTML 1.0 (2000)
- Reformulasi HTML 4 sebagai XML
- Aturan sintaks lebih ketat
- Wajib menutup semua tag
- Wajib menggunakan huruf kecil

### HTML5 (2014 - Sekarang)
- Living Standard oleh WHATWG
- Elemen semantik baru: \`<header>\`, \`<footer>\`, \`<nav>\`, \`<article>\`, \`<section>\`
- Multimedia native: \`<audio>\`, \`<video>\`
- Dukungan Canvas dan SVG
- Geolocation API
- Local Storage
- Web Workers
- Dukungan mobile lebih baik

## Organisasi Penting

- **W3C** (World Wide Web Consortium) - Membuat standar web
- **WHATWG** (Web Hypertext Application Technology Working Group) - Memelihara HTML Living Standard
- **IETF** (Internet Engineering Task Force) - Standar HTML awal

## Timeline Singkat

\`\`\`
1991 - HTML 1.0
1995 - HTML 2.0
1997 - HTML 3.2
1999 - HTML 4.01
2000 - XHTML 1.0
2014 - HTML5 Recommendation
2019 - HTML Living Standard
\`\`\`

## Kenapa Sejarah Itu Penting?

Memahami sejarah HTML membantumu:
- Tahu kenapa fitur tertentu ada
- Memahami kompatibilitas browser
- Menghargai kemampuan web modern
- Menulis kode yang lebih baik dan semantik
  `,

  quiz: [
    {
      question: "Kapan HTML pertama kali dibuat?",
      options: ["1989", "1991", "1995", "2000"],
      correctAnswer: 1,
      explanation: "HTML pertama kali dibuat oleh Tim Berners-Lee pada tahun 1991."
    },
    {
      question: "Versi mana yang memperkenalkan elemen semantik seperti <header> dan <footer>?",
      options: ["HTML 2.0", "HTML 4.01", "XHTML", "HTML5"],
      correctAnswer: 3,
      explanation: "HTML5 memperkenalkan elemen semantik seperti <header>, <footer>, <nav>, <article>, dan <section>."
    },
    {
      question: "Organisasi apa yang saat ini memelihara HTML Living Standard?",
      options: ["W3C", "WHATWG", "IETF", "ECMA"],
      correctAnswer: 1,
      explanation: "WHATWG (Web Hypertext Application Technology Working Group) memelihara HTML Living Standard."
    }
  ],

  codeExamples: [
    {
      title: "Perbandingan HTML 1.0 vs HTML5",
      language: "html",
      code: `<!-- HTML 1.0 (1991) -->
<h1>Halamanku</h1>
<p>Halo Dunia</p>

<!-- HTML5 (Modern) -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halamanku</title>
</head>
<body>
    <header>
        <h1>Halamanku</h1>
    </header>
    <main>
        <p>Halo Dunia</p>
    </main>
</body>
</html>`,
      output: "Menunjukkan evolusi dari markup sederhana ke HTML yang semantik dan terstruktur."
    }
  ]
};