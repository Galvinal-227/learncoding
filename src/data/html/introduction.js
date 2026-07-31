export const chapter = {
  slug: "html-introduction",
  title: "Pengenalan HTML",
  description: "Pelajari apa itu HTML, mengapa penting, dan bagaimana HTML menggerakkan web.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["html", "pengenalan", "web", "frontend"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu HTML?

HTML adalah singkatan dari **HyperText Markup Language**. Ini adalah bahasa standar yang digunakan untuk membuat halaman web. HTML mendeskripsikan struktur halaman web menggunakan sistem tag dan atribut.

Bayangkan HTML sebagai kerangka sebuah website:
- **HTML** = Struktur (tulang)
- **CSS** = Gaya (kulit, pakaian)
- **JavaScript** = Perilaku (otot, gerakan)

## Apa Arti HyperText?

HyperText mengacu pada teks yang berisi tautan ke teks lainnya. Ini adalah fondasi bagaimana web bekerja - halaman saling terhubung satu sama lain.

## Apa Arti Markup?

Markup berarti memberi anotasi pada konten untuk memberinya makna. HTML menggunakan **tag** untuk menandai konten dan memberi tahu browser cara menampilkannya.

## Contoh Sederhana

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Halaman Pertamaku</title>
</head>
<body>
    <h1>Halo, Dunia!</h1>
    <p>Ini adalah halaman web pertamaku.</p>
</body>
</html>
\`\`\`

## Apa yang Bisa Kamu Bangun dengan HTML?

- Website pribadi
- Blog
- Landing page
- Template email
- Dokumentasi
- Aplikasi web (bersama CSS & JavaScript)

## Siapa yang Menciptakan HTML?

HTML diciptakan oleh **Tim Berners-Lee** pada tahun 1991 saat bekerja di CERN. Dia ingin para peneliti bisa berbagi dokumen melalui internet.

## Kenapa Harus Belajar HTML?

1. **Fondasi web** - Setiap website menggunakan HTML
2. **Mudah dipelajari** - Sintaks sederhana, hasil langsung terlihat
3. **Skill wajib** - Diperlukan untuk frontend development
4. **SEO & Aksesibilitas** - HTML yang baik meningkatkan peringkat pencarian
5. **Peluang karir** - Langkah pertama menjadi web developer

## Prasyarat

Untuk mulai belajar HTML, kamu hanya perlu:
- Komputer
- Text editor (disarankan VS Code)
- Web browser (Chrome, Firefox, dll.)
- Kemauan untuk belajar
  `,

  quiz: [
    {
      question: "Apa kepanjangan dari HTML?",
      options: [
        "HyperText Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
      ],
      correctAnswer: 0,
      explanation: "HTML adalah singkatan dari HyperText Markup Language. Diciptakan oleh Tim Berners-Lee pada tahun 1991."
    },
    {
      question: "Apa yang didefinisikan HTML untuk sebuah website?",
      options: [
        "Warna dan gaya",
        "Struktur dan konten",
        "Interaksi pengguna",
        "Koneksi database"
      ],
      correctAnswer: 1,
      explanation: "HTML mendefinisikan struktur dan konten halaman web. CSS menangani styling, dan JavaScript menangani interaksi."
    },
    {
      question: "Siapa yang menciptakan HTML?",
      options: [
        "Bill Gates",
        "Steve Jobs",
        "Tim Berners-Lee",
        "Mark Zuckerberg"
      ],
      correctAnswer: 2,
      explanation: "Tim Berners-Lee menciptakan HTML pada tahun 1991 saat bekerja di CERN."
    }
  ],

  codeExamples: [
    {
      title: "Halaman HTML Pertamamu",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Pertamaku</title>
</head>
<body>
    <h1>Halo, Dunia!</h1>
    <p>Selamat datang di websiteku!</p>
</body>
</html>`,
      output: "Halaman web sederhana yang menampilkan heading dan paragraf."
    }
  ]
};