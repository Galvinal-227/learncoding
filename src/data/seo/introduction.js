export const chapter = {
  slug: "introduction",
  title: "Pengenalan SEO",
  description: "Memahami dasar-dasar SEO dan mengapa penting untuk website.",
  icon: "SiGoogle",
  color: "#4285F4",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["seo", "introduction", "google", "search-engine"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu SEO?

SEO (Search Engine Optimization) adalah proses mengoptimalkan website agar mendapatkan peringkat yang lebih baik di hasil pencarian mesin pencari seperti Google.

## Mengapa SEO Penting?

1. **Visibilitas** - Meningkatkan traffic organik
2. **Kredibilitas** - Peringkat tinggi = lebih terpercaya
3. **ROI** - Biaya lebih rendah dari iklan berbayar
4. **User Experience** - SEO dan UX saling terkait
5. **Brand Awareness** - Meningkatkan kesadaran merek

## Cara Kerja Search Engine

### 1. Crawling
Bot Google (Googlebot) menjelajahi web dan menemukan halaman baru.

### 2. Indexing
Halaman yang ditemukan disimpan dalam database Google.

### 3. Ranking
Halaman diurutkan berdasarkan relevansi dan kualitas.

## Faktor Ranking Google

### On-Page SEO
- **Konten** - Kualitas, relevansi, keyword
- **Meta Tags** - Title, description, headings
- **URL Structure** - Clean, descriptive URLs
- **Internal Linking** - Link antar halaman
- **Images** - Alt text, file names
- **Page Speed** - Waktu loading

### Off-Page SEO
- **Backlinks** - Link dari website lain
- **Social Signals** - Share di media sosial
- **Brand Mentions** - Sebutan merek
- **Guest Posting** - Artikel di website lain

### Technical SEO
- **Sitemap** - XML sitemap
- **Robots.txt** - Petunjuk untuk crawler
- **Mobile-Friendly** - Responsif
- **HTTPS** - Keamanan
- **Structured Data** - Schema markup

## Core Web Vitals

| Metric | Deskripsi | Target |
|--------|-----------|--------|
| **LCP** | Largest Contentful Paint | < 2.5s |
| **FID** | First Input Delay | < 100ms |
| **CLS** | Cumulative Layout Shift | < 0.1 |

## SEO Checklist

### Content
- [ ] Keyword research
- [ ] Quality content
- [ ] Proper headings (H1, H2, H3)
- [ ] Meta descriptions
- [ ] Image optimization
- [ ] Internal linking

### Technical
- [ ] XML sitemap
- [ ] Robots.txt
- [ ] HTTPS
- [ ] Mobile responsive
- [ ] Page speed optimization
- [ ] Structured data

### Off-Page
- [ ] Quality backlinks
- [ ] Social media presence
- [ ] Guest posting
- [ ] Directory submissions

## Tools untuk SEO

| Tool | Fungsi |
|------|--------|
| **Google Search Console** | Monitoring performa |
| **Google Analytics** | Traffic analysis |
| **Google PageSpeed Insights** | Performance test |
| **SEMrush** | Keyword research |
| **Ahrefs** | Backlink analysis |
| **Moz** | SEO tools |

## Contoh Implementasi

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>Belajar SEO - Panduan Lengkap Untuk Pemula</title>
    <meta name="description" content="Pelajari SEO dari dasar hingga mahir. Panduan lengkap tentang teknik SEO untuk meningkatkan peringkat website di Google.">
    <meta name="keywords" content="seo, belajar seo, panduan seo, optimasi website">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Belajar SEO - Panduan Lengkap">
    <meta property="og:description" content="Pelajari SEO dari dasar hingga mahir">
    <meta property="og:image" content="https://example.com/seo-thumbnail.jpg">
    <meta property="og:url" content="https://example.com/seo">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Belajar SEO - Panduan Lengkap">
    <meta name="twitter:description" content="Pelajari SEO dari dasar hingga mahir">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://example.com/seo">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Belajar SEO - Panduan Lengkap",
        "description": "Pelajari SEO dari dasar hingga mahir",
        "author": {
            "@type": "Person",
            "name": "John Doe"
        },
        "datePublished": "2024-01-01"
    }
    </script>
</head>
<body>
    <article>
        <h1>Belajar SEO - Panduan Lengkap Untuk Pemula</h1>
        <p>Selamat datang di panduan SEO lengkap...</p>
    </article>
</body>
</html>
\`\`\`

## Keyword Research

### Tools
- Google Keyword Planner
- SEMrush
- Ahrefs Keywords Explorer
- Ubersuggest
- AnswerThePublic

### Strategi
1. **Head Terms** - Keyword pendek, volume tinggi
2. **Long-tail** - Keyword panjang, spesifik
3. **LSI Keywords** - Keyword terkait
4. **Question Keywords** - Pertanyaan yang sering dicari

## Best Practices

1. **Quality Content** - Konten yang bermanfaat
2. **User Experience** - Navigasi yang mudah
3. **Mobile First** - Optimasi untuk mobile
4. **Page Speed** - Loading cepat
5. **Secure Website** - HTTPS
6. **Regular Updates** - Konten segar
7. **Internal Linking** - Link yang relevan
8. **External Linking** - Link ke sumber terpercaya
  `,
  quiz: [
    {
      question: "Apa kepanjangan SEO?",
      options: [
        "Search Engine Optimization",
        "Site Enhancement Operation",
        "Search Enhancement Organization",
        "Site Engine Optimization"
      ],
      correctAnswer: 0
    },
    {
      question: "Proses Google menemukan halaman baru disebut?",
      options: [
        "Indexing",
        "Crawling",
        "Ranking",
        "Scanning"
      ],
      correctAnswer: 1
    },
    {
      question: "LCP singkatan dari?",
      options: [
        "Largest Contentful Paint",
        "Last Content Paint",
        "Loading Content Performance",
        "Longest Content Paint"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "SEO-Friendly HTML Template",
      code: `<!-- SEO-Friendly HTML Template -->
<!DOCTYPE html>
<html lang="id">
<head>
    <!-- Character Encoding -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Title (55-60 characters) -->
    <title>Belajar SEO Lengkap | Panduan Optimasi Website 2024</title>
    
    <!-- Meta Description (150-160 characters) -->
    <meta name="description" content="Panduan SEO lengkap untuk pemula hingga mahir. Pelajari teknik optimasi website, keyword research, backlink, dan cara ranking di Google.">
    
    <!-- Keywords (Optional) -->
    <meta name="keywords" content="seo, belajar seo, panduan seo, optimasi website, google ranking, keyword research">
    
    <!-- Robots -->
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://example.com/belajar-seo">
    
    <!-- Language & Region -->
    <meta name="language" content="Indonesian">
    <meta name="geo.region" content="ID">
    
    <!-- Author -->
    <meta name="author" content="Nama Penulis">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://example.com/belajar-seo">
    <meta property="og:title" content="Belajar SEO Lengkap | Panduan Optimasi Website 2024">
    <meta property="og:description" content="Panduan SEO lengkap untuk pemula hingga mahir.">
    <meta property="og:image" content="https://example.com/images/seo-og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Nama Website">
    <meta property="og:locale" content="id_ID">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Belajar SEO Lengkap | Panduan Optimasi Website 2024">
    <meta name="twitter:description" content="Panduan SEO lengkap untuk pemula hingga mahir.">
    <meta name="twitter:image" content="https://example.com/images/seo-twitter-image.jpg">
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Belajar SEO Lengkap | Panduan Optimasi Website 2024",
        "description": "Panduan SEO lengkap untuk pemula hingga mahir.",
        "image": "https://example.com/images/seo-featured-image.jpg",
        "author": {
            "@type": "Person",
            "name": "Nama Penulis",
            "url": "https://example.com/author"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Nama Website",
            "logo": {
                "@type": "ImageObject",
                "url": "https://example.com/logo.png"
            }
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-15",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://example.com/belajar-seo"
        }
    }
    </script>
    
    <!-- BreadcrumbList -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://example.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://example.com/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Belajar SEO"
            }
        ]
    }
    </script>
    
    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- CSS -->
    <link rel="stylesheet" href="/css/style.css">
    
    <!-- RSS Feed -->
    <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/feed.xml">
</head>
<body>
    <!-- Skip to content -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Header -->
    <header>
        <nav aria-label="Main navigation">
            <div class="logo">
                <a href="/" aria-label="Homepage">
                    <img src="/logo.svg" alt="Logo" width="150" height="40">
                </a>
            </div>
            <ul>
                <li><a href="/" aria-current="page">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main Content -->
    <main id="main-content">
        <article>
            <!-- H1 (Heading 1) -->
            <h1>Belajar SEO Lengkap: Panduan Optimasi Website 2024</h1>
            
            <!-- Author & Date -->
            <div class="post-meta">
                <span class="author">By Nama Penulis</span>
                <time datetime="2024-01-01">January 1, 2024</time>
                <span class="reading-time">10 min read</span>
            </div>
            
            <!-- Introduction -->
            <p>Selamat datang di panduan SEO lengkap untuk pemula. Artikel ini akan membahas...</p>
            
            <!-- H2 Heading -->
            <h2>Apa Itu SEO?</h2>
            <p>SEO adalah...</p>
            
            <!-- H3 Heading -->
            <h3>Mengapa SEO Penting?</h3>
            <p>SEO penting karena...</p>
            
            <!-- Internal Link -->
            <p>Baca juga: <a href="/blog/seo-technical">Technical SEO</a></p>
            
            <!-- External Link -->
            <p>Menurut <a href="https://developers.google.com/search" target="_blank" rel="noopener noreferrer">Google Search Central</a>...</p>
            
            <!-- Images with Alt Text -->
            <figure>
                <img src="/images/seo-guide.jpg" 
                     alt="Infographic SEO Guide" 
                     width="800" 
                     height="400">
                <figcaption>Gambar 1: Panduan SEO Lengkap</figcaption>
            </figure>
            
            <!-- List -->
            <ul>
                <li>On-Page SEO</li>
                <li>Off-Page SEO</li>
                <li>Technical SEO</li>
            </ul>
            
            <!-- Conclusion -->
            <h2>Kesimpulan</h2>
            <p>Dengan menerapkan SEO...</p>
            
            <!-- Table of Contents -->
            <nav aria-label="Table of contents">
                <h2>Daftar Isi</h2>
                <ul>
                    <li><a href="#apa-itu-seo">Apa Itu SEO</a></li>
                    <li><a href="#mengapa-seo-penting">Mengapa SEO Penting</a></li>
                    <li><a href="#teknik-seo">Teknik SEO</a></li>
                </ul>
            </nav>
        </article>
    </main>
    
    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Nama Website. All rights reserved.</p>
        <nav aria-label="Footer navigation">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
        </nav>
    </footer>
    
    <!-- JavaScript -->
    <script src="/js/main.js" defer></script>
</body>
</html>`,
      language: "html"
    }
  ]
};