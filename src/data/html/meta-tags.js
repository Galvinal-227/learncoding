export const chapter = {
  slug: "html-meta-tags",
  title: "Meta Tags",
  description: "Panduan lengkap meta tags HTML untuk SEO, media sosial, dan konfigurasi browser.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["html-head"],
  tags: ["html", "meta", "seo", "head"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Meta Tags?

Meta tags adalah elemen HTML yang menyediakan **metadata** tentang halaman web. Mereka tidak muncul di halaman tapi dibaca oleh browser, mesin pencari, dan platform media sosial.

## Sintaks

\`\`\`html
<meta name="nama" content="nilai">
<meta property="properti" content="nilai">
<meta http-equiv="http-header" content="nilai">
\`\`\`

## Meta Tags Penting

### 1. Charset
\`\`\`html
<meta charset="UTF-8">
\`\`\`

### 2. Viewport
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

### 3. Description
\`\`\`html
<meta name="description" content="Panduan lengkap tentang meta tags HTML">
\`\`\`

### 4. Author
\`\`\`html
<meta name="author" content="Budi Santoso">
\`\`\`

### 5. Robots
\`\`\`html
<meta name="robots" content="index, follow">
\`\`\`
Pilihan:
- \`index\` / \`noindex\` - Izinkan/larang indexing
- \`follow\` / \`nofollow\` - Ikuti/jangan ikuti tautan
- \`noarchive\` - Jangan cache halaman
- \`nosnippet\` - Jangan tampilkan cuplikan di hasil

### 6. Keywords (kurang penting sekarang)
\`\`\`html
<meta name="keywords" content="HTML, meta tags, tutorial">
\`\`\`

## Meta Tags untuk Media Sosial

### Open Graph (Facebook, LinkedIn)
\`\`\`html
<meta property="og:title" content="Judul Halaman">
<meta property="og:description" content="Deskripsi halaman">
<meta property="og:image" content="https://example.com/gambar.jpg">
<meta property="og:url" content="https://example.com/halaman">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Nama Situs">
\`\`\`

### Twitter Cards
\`\`\`html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Judul Halaman">
<meta name="twitter:description" content="Deskripsi">
<meta name="twitter:image" content="https://example.com/gambar.jpg">
\`\`\`

## Meta Tags HTTP-Equiv

Ini menyimulasikan HTTP headers:

### 1. Refresh / Redirect
\`\`\`html
<meta http-equiv="refresh" content="5; url=https://example.com">
\`\`\`

### 2. Content Security Policy
\`\`\`html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
\`\`\`

### 3. Kompatibilitas IE
\`\`\`html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
\`\`\`

## Meta Tags Berguna Lainnya

### Theme Color
\`\`\`html
<meta name="theme-color" content="#4285f4">
\`\`\`

### Color Scheme
\`\`\`html
<meta name="color-scheme" content="light dark">
\`\`\`

### Nama Aplikasi
\`\`\`html
<meta name="application-name" content="Aplikasiku">
\`\`\`

## Template Meta Tags Lengkap

\`\`\`html
<!-- Meta Tags Utama -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Judul Halaman</title>
<meta name="title" content="Judul Halaman">
<meta name="description" content="Deskripsi halaman di sini">
<meta name="author" content="Nama Penulis">
<meta name="robots" content="index, follow">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/">
<meta property="og:title" content="Judul Halaman">
<meta property="og:description" content="Deskripsi halaman">
<meta property="og:image" content="gambar.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://example.com/">
<meta name="twitter:title" content="Judul Halaman">
<meta name="twitter:description" content="Deskripsi halaman">
<meta name="twitter:image" content="gambar.jpg">
\`\`\`
  `,

  quiz: [
    {
      question: "Meta tag apa yang digunakan untuk mengontrol bagaimana halaman muncul di hasil pencarian?",
      options: [
        "<meta name='viewport'>",
        "<meta name='robots'>",
        "<meta name='author'>",
        "<meta http-equiv='refresh'>"
      ],
      correctAnswer: 1,
      explanation: "Meta tag robots mengontrol apakah mesin pencari mengindeks halaman dan mengikuti tautannya."
    },
    {
      question: "Apa fungsi protokol Open Graph?",
      options: [
        "Membuat grafik di halaman",
        "Mengontrol tampilan halaman saat dibagikan di media sosial",
        "Membuka beberapa jendela browser",
        "Menghasilkan grafik dari data"
      ],
      correctAnswer: 1,
      explanation: "Meta tag Open Graph mengontrol bagaimana halamanmu muncul saat dibagikan di platform seperti Facebook, LinkedIn, dan media sosial lainnya."
    },
    {
      question: "Meta tag mana yang penting untuk desain responsif mobile?",
      options: [
        "<meta charset='UTF-8'>",
        "<meta name='description'>",
        "<meta name='viewport'>",
        "<meta name='theme-color'>"
      ],
      correctAnswer: 2,
      explanation: "Meta tag viewport sangat penting untuk desain responsif karena mengontrol bagaimana halaman diskalakan di perangkat mobile."
    }
  ],

  codeExamples: [
    {
      title: "Setup Meta Tags Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Meta Tags Utama -->
    <title>Panduan Lengkap Meta Tags</title>
    <meta name="title" content="Panduan Lengkap Meta Tags - Learn By GWD">
    <meta name="description" content="Kuasai meta tags HTML untuk SEO, optimasi media sosial, dan konfigurasi browser.">
    <meta name="keywords" content="HTML, meta tags, SEO, Open Graph, Twitter Cards">
    <meta name="author" content="Learn By GWD">
    <meta name="robots" content="index, follow">
    <meta name="language" content="Indonesian">
    
    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://learnbygwd.com/html/meta-tags">
    <meta property="og:title" content="Panduan Lengkap Meta Tags">
    <meta property="og:description" content="Kuasai meta tags HTML untuk SEO dan media sosial.">
    <meta property="og:image" content="https://learnbygwd.com/images/meta-tags-og.jpg">
    <meta property="og:site_name" content="Learn By GWD">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://learnbygwd.com/html/meta-tags">
    <meta name="twitter:title" content="Panduan Lengkap Meta Tags">
    <meta name="twitter:description" content="Kuasai meta tags HTML untuk SEO dan media sosial.">
    <meta name="twitter:image" content="https://learnbygwd.com/images/meta-tags-twitter.jpg">
    
    <!-- Tambahan -->
    <meta name="theme-color" content="#E34F26">
    <meta name="color-scheme" content="light dark">
    <link rel="canonical" href="https://learnbygwd.com/html/meta-tags">
</head>
<body>
    <h1>Panduan Meta Tags</h1>
</body>
</html>`,
      output: "Implementasi meta tags lengkap untuk website produksi."
    }
  ]
};