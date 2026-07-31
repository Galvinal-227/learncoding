export const chapter = {
  slug: "html-html-structure",
  title: "Struktur Dokumen HTML",
  description: "Pahami anatomi dokumen HTML dan bagian-bagian pentingnya.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["html-installation"],
  tags: ["html", "struktur", "doctype", "tag-html"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Anatomi Dokumen HTML

Setiap dokumen HTML mengikuti struktur standar. Mari kita bedah satu per satu.

## Struktur Lengkap

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman</title>
</head>
<body>
    <!-- Konten yang terlihat ada di sini -->
</body>
</html>
\`\`\`

## 1. Deklarasi DOCTYPE

\`\`\`html
<!DOCTYPE html>
\`\`\`

- Harus menjadi **baris pertama** dokumen HTML
- Memberi tahu browser: "Ini dokumen HTML5"
- Bukan tag HTML - ini adalah deklarasi
- Tanpa ini, browser masuk ke "quirks mode"

## 2. Elemen Root HTML

\`\`\`html
<html lang="id">
\`\`\`

- Elemen root yang membungkus semua konten
- Atribut \`lang\` menentukan bahasa dokumen
- Penting untuk aksesibilitas dan SEO
- Nilai umum: \`"id"\`, \`"en"\`, \`"es"\`, \`"fr"\`

## 3. Bagian Head

\`\`\`html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dokumen</title>
    <link rel="stylesheet" href="style.css">
</head>
\`\`\`

Bagian \`<head>\` berisi **metadata** - informasi tentang halaman:
- Judul halaman (ditampilkan di tab browser)
- Encoding karakter
- Pengaturan viewport
- Link ke file CSS
- Meta tags untuk SEO
- Script (kadang-kadang)

## 4. Bagian Body

\`\`\`html
<body>
    <h1>Halo Dunia</h1>
    <p>Ini adalah halamanku.</p>
</body>
\`\`\`

Bagian \`<body>\` berisi semua **konten yang terlihat**:
- Teks dan heading
- Gambar dan video
- Tautan dan tombol
- Form dan tabel
- Semua yang dilihat pengguna

## Diagram Visual

\`\`\`
┌─────────────────────────────────┐
│         <!DOCTYPE html>         │
├─────────────────────────────────┤
│ <html lang="id">                │
│ ┌─────────────────────────────┐ │
│ │ <head>                      │ │
│ │  - Metadata                 │ │
│ │  - Judul                    │ │
│ │  - Link CSS                 │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ <body>                      │ │
│ │  - Konten terlihat          │ │
│ │  - Teks, gambar, dll.       │ │
│ └─────────────────────────────┘ │
│ </html>                         │
└─────────────────────────────────┘
\`\`\`

## Kesalahan Umum yang Harus Dihindari

❌ **Lupa DOCTYPE**
\`\`\`html
<html>
<!-- Browser mungkin tidak merender dengan benar -->
\`\`\`

✅ **Benar**
\`\`\`html
<!DOCTYPE html>
<html lang="id">
\`\`\`

❌ **Beberapa tag <head> atau <body>**
\`\`\`html
<!-- Hanya boleh satu masing-masing! -->
\`\`\`

✅ **Selalu satu masing-masing**
\`\`\`html
<!DOCTYPE html>
<html>
<head>...</head>
<body>...</body>
</html>
\`\`\`
  `,

  quiz: [
    {
      question: "Apa fungsi dari <!DOCTYPE html>?",
      options: [
        "Ini adalah tag HTML untuk dokumen",
        "Memberi tahu browser bahwa ini HTML5",
        "Diperlukan agar CSS berfungsi",
        "Membuat elemen HTML baru"
      ],
      correctAnswer: 1,
      explanation: "<!DOCTYPE html> adalah deklarasi yang memberi tahu browser bahwa dokumen ditulis dalam HTML5."
    },
    {
      question: "Di mana konten yang terlihat dari halaman web ditempatkan?",
      options: ["<head>", "<html>", "<body>", "<!DOCTYPE>"],
      correctAnswer: 2,
      explanation: "Semua konten yang terlihat (teks, gambar, dll.) ditempatkan di dalam tag <body>."
    },
    {
      question: "Apa fungsi atribut lang di <html>?",
      options: [
        "Mengatur bahasa pemrograman",
        "Menentukan bahasa dokumen untuk aksesibilitas",
        "Mengubah bahasa browser",
        "Mengaktifkan JavaScript"
      ],
      correctAnswer: 1,
      explanation: "Atribut lang menentukan bahasa dokumen, yang membantu screen reader dan mesin pencari."
    }
  ],

  codeExamples: [
    {
      title: "Template Dokumen HTML Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <!-- Encoding karakter -->
    <meta charset="UTF-8">
    
    <!-- Responsivitas mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO -->
    <meta name="description" content="Website kerenku">
    
    <!-- Judul halaman -->
    <title>Websiteku</title>
    
    <!-- CSS eksternal -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header>
        <h1>Selamat Datang di Websiteku</h1>
    </header>
    
    <!-- Konten utama -->
    <main>
        <p>Di sinilah kontenmu berada.</p>
    </main>
    
    <!-- Footer -->
    <footer>
        <p>&copy; 2026 Websiteku</p>
    </footer>
</body>
</html>`,
      output: "Template dokumen HTML5 yang terstruktur dengan baik, siap untuk proyek apa pun."
    }
  ]
};