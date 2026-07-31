export const chapter = {
  slug: "html-head",
  title: "Elemen Head",
  description: "Kuasai elemen head HTML - mengontrol metadata, styles, dan konfigurasi halaman.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["html-html-structure"],
  tags: ["html", "head", "metadata", "judul"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Elemen Head?

Elemen \`<head>\` berisi **metadata** (data tentang data) - informasi tentang dokumen HTML yang **tidak ditampilkan** di halaman.

## Apa Saja yang Ada di Dalam <head>?

### 1. Title (Wajib)
\`\`\`html
<title>Websiteku - Beranda</title>
\`\`\`
- Ditampilkan di tab browser
- Ditampilkan di hasil pencarian
- Ditampilkan di bookmark
- **Harus ada** di setiap dokumen HTML

### 2. Encoding Karakter
\`\`\`html
<meta charset="UTF-8">
\`\`\`
- Harus menjadi **elemen pertama** di head
- UTF-8 mendukung semua karakter di dunia
- Mencegah masalah tampilan karakter khusus

### 3. Viewport
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`
- Penting untuk responsivitas mobile
- Mengontrol dimensi dan skala halaman
- Tanpa ini, browser mobile merender dengan lebar desktop

### 4. Meta Tags
\`\`\`html
<meta name="description" content="Belajar HTML dari nol">
<meta name="author" content="Budi Santoso">
<meta name="keywords" content="HTML, tutorial, web development">
<meta name="robots" content="index, follow">
\`\`\`

### 5. Link CSS
\`\`\`html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto">
\`\`\`

### 6. Favicon
\`\`\`html
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
\`\`\`

### 7. Script (kadang-kadang)
\`\`\`html
<script src="script.js" defer></script>
\`\`\`

## Contoh Head Lengkap

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <!-- Encoding karakter - harus pertama -->
    <meta charset="UTF-8">
    
    <!-- Viewport mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Kompatibilitas IE -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Meta tags SEO -->
    <title>Belajar HTML - Panduan Lengkap</title>
    <meta name="description" content="Tutorial HTML gratis untuk pemula hingga developer mahir">
    <meta name="author" content="Learn By GWD">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph (Media Sosial) -->
    <meta property="og:title" content="Belajar HTML">
    <meta property="og:description" content="Panduan lengkap HTML">
    <meta property="og:image" content="thumbnail.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/style.css">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <h1>Halo Dunia</h1>
</body>
</html>
\`\`\`

## Apa yang TIDAK BOLEH Dimasukkan ke <head>

❌ Konten yang terlihat (teks, gambar)
❌ Kebanyakan tag <script> (lebih baik di akhir body)
❌ Elemen yang hanya untuk <body>

## Urutan Itu Penting

Urutan yang disarankan di dalam <head>:
1. Charset
2. Viewport
3. Title
4. Meta tags (description, keywords)
5. Favicon
6. Link CSS
7. Fonts
8. Script (jika diperlukan)
  `,

  quiz: [
    {
      question: "Apa yang terjadi pada konten yang ditempatkan di dalam tag <head>?",
      options: [
        "Muncul di bagian atas halaman",
        "Tersembunyi tapi mempengaruhi styling",
        "Tidak terlihat di halaman",
        "Hanya muncul di mobile"
      ],
      correctAnswer: 2,
      explanation: "Konten di dalam <head> adalah metadata dan tidak ditampilkan di halaman web."
    },
    {
      question: "Elemen apa yang wajib ada di dalam <head>?",
      options: ["<meta>", "<link>", "<title>", "<script>"],
      correctAnswer: 2,
      explanation: "Elemen <title> wajib ada di setiap dokumen HTML. Elemen ini memberikan judul halaman yang ditampilkan di tab browser."
    },
    {
      question: "Kenapa <meta charset='UTF-8'> harus ditempatkan pertama di <head>?",
      options: [
        "Agar loading lebih cepat",
        "Untuk memastikan karakter dirender dengan benar",
        "Hanya kebiasaan saja",
        "Untuk keperluan SEO"
      ],
      correctAnswer: 1,
      explanation: "Menempatkan deklarasi charset di awal memastikan browser tahu encoding karakter sebelum membaca sisa dokumen, mencegah masalah tampilan karakter."
    }
  ],

  codeExamples: [
    {
      title: "Bagian Head Siap Produksi",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <title>Website Profesional - Beranda</title>
    <meta name="description" content="Selamat datang di website profesional saya yang menampilkan karya dan layanan.">
    <meta name="keywords" content="web development, desain, portofolio">
    <meta name="author" content="Nama Kamu">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Website Profesional Saya">
    <meta property="og:description" content="Layanan web development dan desain">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://websiteku.com">
    <meta property="og:image" content="https://websiteku.com/og-image.jpg">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Website Profesional Saya">
    <meta name="twitter:description" content="Layanan web development dan desain">
    
    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    
    <!-- URL Kanonikal -->
    <link rel="canonical" href="https://websiteku.com">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/style.css">
    
    <!-- Preload font kritis -->
    <link rel="preload" href="/fonts/roboto.woff2" as="font" type="font/woff2" crossorigin>
</head>
<body>
    <h1>Selamat Datang di Website Saya</h1>
</body>
</html>`,
      output: "Bagian <head> yang lengkap dan siap produksi dengan optimasi SEO, media sosial, dan performa."
    }
  ]
};