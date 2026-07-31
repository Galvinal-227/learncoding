export const chapter = {
  slug: "html-seo-meta",
  title: "Meta Tags untuk SEO",
  description: "Optimasi HTML kamu untuk mesin pencari dengan meta tags yang tepat dan structured data.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["html-meta-tags", "html-head"],
  tags: ["html", "seo", "meta", "mesin-pencari"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu SEO?

SEO (Search Engine Optimization) adalah praktik meningkatkan website agar lebih terlihat di mesin pencari seperti Google, Bing, dan Yahoo.

## Kenapa Meta Tags Penting untuk SEO

Meta tags membantu mesin pencari memahami:
- Tentang apa halamanmu
- Bagaimana cara mengindeksnya
- Bagaimana menampilkannya di hasil pencarian
- Apakah kontennya berharga

## Meta Tags SEO yang Kritis

### 1. Title Tag (Paling Penting)
\`\`\`html
<title>Belajar HTML - Panduan Lengkap untuk Pemula | Learn By GWD</title>
\`\`\`
**Best Practices:**
- Maksimal 60 karakter
- Sertakan kata kunci utama
- Taruh nama brand di akhir
- Buat setiap halaman unik

### 2. Meta Description
\`\`\`html
<meta name="description" content="Tutorial HTML interaktif gratis dari dasar hingga mahir. Pelajari HTML semantik, form, aksesibilitas, dan best practices dengan contoh langsung.">
\`\`\`
**Best Practices:**
- Maksimal 160 karakter
- Sertakan kata kunci secara alami
- Tulis copy yang menarik
- Sertakan call to action
- Buat setiap halaman unik

### 3. Meta Tag Robots
\`\`\`html
<meta name="robots" content="index, follow">
\`\`\`
Nilai umum:
- \`index, follow\` - Default, izinkan indexing
- \`noindex, follow\` - Jangan indeks tapi ikuti tautan
- \`index, nofollow\` - Indeks tapi jangan ikuti tautan
- \`noindex, nofollow\` - Jangan indeks dan jangan ikuti tautan

### 4. URL Kanonikal
\`\`\`html
<link rel="canonical" href="https://example.com/halaman">
\`\`\`
Mencegah masalah duplikat konten.

### 5. Hreflang (Multi-bahasa)
\`\`\`html
<link rel="alternate" hreflang="id" href="https://example.com/id/">
<link rel="alternate" hreflang="en" href="https://example.com/en/">
\`\`\`

## Structured Data (Schema.org)

Menambahkan structured data membantu mesin pencari memahami kontenmu:

### Skema Artikel
\`\`\`html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Panduan Lengkap HTML",
  "author": {
    "@type": "Person",
    "name": "Budi Santoso"
  },
  "datePublished": "2026-01-15",
  "description": "Panduan lengkap HTML dari dasar hingga mahir"
}
</script>
\`\`\`

### Skema Breadcrumb
\`\`\`html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Beranda",
    "item": "https://example.com"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "HTML",
    "item": "https://example.com/html"
  }]
}
</script>
\`\`\`

## Open Graph untuk SEO Sosial

\`\`\`html
<meta property="og:title" content="Panduan Lengkap HTML">
<meta property="og:description" content="Belajar HTML dari nol">
<meta property="og:image" content="https://example.com/thumbnail.jpg">
<meta property="og:url" content="https://example.com/html">
<meta property="og:type" content="article">
\`\`\`

## Checklist SEO

\`\`\`
✅ Judul unik dan deskriptif untuk setiap halaman
✅ Meta description yang menarik dengan kata kunci
✅ URL kanonikal diatur dengan benar
✅ Meta tag robots dikonfigurasi
✅ Structured data diterapkan
✅ Open Graph tags untuk berbagi sosial
✅ Meta tag viewport mobile
✅ Struktur HTML semantik
✅ Hierarki heading yang benar (h1 → h6)
✅ Alt text untuk semua gambar
✅ Kecepatan loading cepat
✅ HTTPS aktif
\`\`\`

## Kesalahan SEO yang Umum

❌ Title tag hilang atau duplikat
❌ Meta description terlalu panjang atau hilang
❌ Tidak ada URL kanonikal di halaman serupa
❌ Memblokir mesin pencari dengan robots
❌ Keyword stuffing
❌ Tidak ada structured data
❌ Tautan rusak
  `,

  quiz: [
    {
      question: "Berapa panjang maksimal yang disarankan untuk title tag?",
      options: ["30 karakter", "60 karakter", "100 karakter", "Tidak terbatas"],
      correctAnswer: 1,
      explanation: "Title tag sebaiknya maksimal 60 karakter agar tidak terpotong di hasil pencarian."
    },
    {
      question: "Apa fungsi tag URL kanonikal?",
      options: [
        "Membuat halaman lebih cepat",
        "Mencegah masalah duplikat konten",
        "Membuat sitemap",
        "Memblokir mesin pencari"
      ],
      correctAnswer: 1,
      explanation: "URL kanonikal memberi tahu mesin pencari versi halaman mana yang utama, mencegah penalti duplikat konten."
    },
    {
      question: "Untuk apa structured data digunakan?",
      options: [
        "Organisasi database",
        "Layout CSS",
        "Membantu mesin pencari memahami konten",
        "Fungsi JavaScript"
      ],
      correctAnswer: 2,
      explanation: "Structured data (Schema.org) membantu mesin pencari memahami konten dan dapat mengaktifkan rich snippets di hasil pencarian."
    }
  ],

  codeExamples: [
    {
      title: "Halaman HTML yang Dioptimasi SEO",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Judul SEO - Maksimal 60 karakter -->
    <title>Panduan Lengkap HTML: Belajar HTML5 dari Nol | Learn By GWD</title>
    
    <!-- Deskripsi SEO - Maksimal 160 karakter -->
    <meta name="description" content="Kuasai HTML dengan tutorial interaktif gratis. Pelajari HTML semantik, form, aksesibilitas, SEO, dan fitur HTML5 modern. Cocok untuk pemula.">
    
    <!-- URL Kanonikal -->
    <link rel="canonical" href="https://learnbygwd.com/html">
    
    <!-- Robots -->
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Panduan Lengkap HTML: Belajar HTML5 dari Nol">
    <meta property="og:description" content="Kuasai HTML dengan tutorial interaktif gratis. Pelajari HTML semantik, form, dan fitur HTML5 modern.">
    <meta property="og:image" content="https://learnbygwd.com/images/html-og.jpg">
    <meta property="og:url" content="https://learnbygwd.com/html">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Panduan Lengkap HTML">
    <meta name="twitter:description" content="Kuasai HTML dengan tutorial interaktif gratis.">
    <meta name="twitter:image" content="https://learnbygwd.com/images/html-twitter.jpg">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Panduan Lengkap HTML",
      "description": "Belajar HTML dari dasar hingga mahir",
      "provider": {
        "@type": "Organization",
        "name": "Learn By GWD"
      }
    }
    </script>
</head>
<body>
    <header>
        <nav aria-label="Navigasi utama">
            <a href="/">Beranda</a>
            <a href="/html">HTML</a>
        </nav>
    </header>
    
    <main>
        <article>
            <h1>Panduan Lengkap HTML</h1>
            <p>Belajar HTML5 dari nol hingga profesional.</p>
            
            <section>
                <h2>Memulai</h2>
                <p>Mulai perjalanan HTML kamu di sini...</p>
            </section>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2026 Learn By GWD</p>
    </footer>
</body>
</html>`,
      output: "Halaman HTML yang sepenuhnya dioptimasi SEO mengikuti semua best practices."
    }
  ]
};