export const chapter = {
  slug: "meta-tags",
  title: "Meta Tags",
  description: "Menggunakan meta tags untuk optimasi SEO dan social sharing.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["seo-introduction"],
  tags: ["meta-tags", "seo", "html", "social-media"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Meta Tags?

Meta tags adalah elemen HTML yang memberikan informasi tentang halaman web kepada mesin pencari dan browser.

## Meta Tags Penting untuk SEO

### 1. Title Tag
\`\`\`html
<title>Belajar SEO Lengkap | Panduan Optimasi Website 2024</title>
\`\`\`

**Best Practices:**
- Panjang: 50-60 karakter
- Keyword di awal
- Brand name di akhir
- Unik per halaman

### 2. Meta Description
\`\`\`html
<meta name="description" content="Panduan SEO lengkap untuk pemula hingga mahir. Pelajari teknik optimasi website, keyword research, dan cara ranking di Google.">
\`\`\`

**Best Practices:**
- Panjang: 150-160 karakter
- Include keyword
- Call to action
- Unique per page

### 3. Meta Robots
\`\`\`html
<!-- Index and follow -->
<meta name="robots" content="index, follow">

<!-- No index -->
<meta name="robots" content="noindex, nofollow">

<!-- Specific instructions -->
<meta name="robots" content="noindex, follow">
\`\`\`

**Options:**
- \`index\` / \`noindex\`
- \`follow\` / \`nofollow\`
- \`noarchive\`
- \`nosnippet\`
- \`notranslate\`

### 4. Canonical Tag
\`\`\`html
<link rel="canonical" href="https://example.com/belajar-seo">
\`\`\`

**Fungsi:**
- Mencegah duplicate content
- Menentukan URL utama
- Consolidate link juice

### 5. Open Graph (Facebook)
\`\`\`html
<meta property="og:title" content="Belajar SEO Lengkap">
<meta property="og:description" content="Panduan SEO lengkap untuk pemula">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/seo">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Nama Website">
<meta property="og:locale" content="id_ID">
\`\`\`

### 6. Twitter Cards
\`\`\`html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Belajar SEO Lengkap">
<meta name="twitter:description" content="Panduan SEO lengkap untuk pemula">
<meta name="twitter:image" content="https://example.com/image.jpg">
<meta name="twitter:site" content="@username">
\`\`\`

### 7. Hreflang (Multi-language)
\`\`\`html
<link rel="alternate" hreflang="id" href="https://example.com/id/seo">
<link rel="alternate" hreflang="en" href="https://example.com/en/seo">
<link rel="alternate" hreflang="x-default" href="https://example.com/en/seo">
\`\`\`

### 8. Viewport
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

### 9. Charset
\`\`\`html
<meta charset="UTF-8">
\`\`\`

## Meta Tags untuk Rich Snippets

### Article
\`\`\`html
<meta property="article:published_time" content="2024-01-01">
<meta property="article:modified_time" content="2024-01-15">
<meta property="article:author" content="https://example.com/author">
<meta property="article:section" content="Technology">
<meta property="article:tag" content="SEO">
\`\`\`

### Product
\`\`\`html
<meta property="product:price:amount" content="100000">
<meta property="product:price:currency" content="IDR">
<meta property="product:availability" content="in stock">
\`\`\`

## Best Practices

### 1. Title Tag Optimization
\`\`\`html
<!-- ✅ Good -->
<title>Belajar SEO | Panduan Lengkap 2024 | Nama Website</title>

<!-- ❌ Bad -->
<title>Belajar SEO</title>
<title>Homepage | Nama Website</title>
\`\`\`

### 2. Meta Description Optimization
\`\`\`html
<!-- ✅ Good -->
<meta name="description" content="Pelajari SEO dari dasar hingga mahir. Panduan lengkap dengan teknik terbaru untuk ranking di Google.">

<!-- ❌ Bad -->
<meta name="description" content="SEO">
<meta name="description" content="">
\`\`\`

### 3. Open Graph Optimization
\`\`\`html
<!-- ✅ Complete OG tags -->
<meta property="og:type" content="website">
<meta property="og:title" content="Belajar SEO Lengkap">
<meta property="og:description" content="Panduan SEO lengkap untuk pemula">
<meta property="og:image" content="https://example.com/og-image.jpg">
<meta property="og:url" content="https://example.com/seo">
<meta property="og:site_name" content="Nama Website">

<!-- ❌ Missing og:image -->
<meta property="og:title" content="Belajar SEO Lengkap">
<meta property="og:description" content="Panduan SEO lengkap untuk pemula">
\`\`\`

## Contoh Lengkap Meta Tags

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <!-- Basic -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO -->
    <title>Belajar SEO Lengkap | Panduan Optimasi Website 2024 | Nama Website</title>
    <meta name="description" content="Panduan SEO lengkap untuk pemula hingga mahir. Pelajari teknik optimasi website, keyword research, backlink, dan cara ranking di Google.">
    <meta name="keywords" content="seo, belajar seo, panduan seo, optimasi website, google ranking">
    <meta name="robots" content="index, follow">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://example.com/belajar-seo">
    
    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://example.com/belajar-seo">
    <meta property="og:title" content="Belajar SEO Lengkap | Panduan Optimasi Website 2024">
    <meta property="og:description" content="Panduan SEO lengkap untuk pemula hingga mahir.">
    <meta property="og:image" content="https://example.com/images/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Nama Website">
    <meta property="og:locale" content="id_ID">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Belajar SEO Lengkap | Panduan Optimasi Website 2024">
    <meta name="twitter:description" content="Panduan SEO lengkap untuk pemula hingga mahir.">
    <meta name="twitter:image" content="https://example.com/images/twitter-image.jpg">
    <meta name="twitter:site" content="@username">
    
    <!-- Article -->
    <meta property="article:published_time" content="2024-01-01">
    <meta property="article:modified_time" content="2024-01-15">
    <meta property="article:author" content="https://example.com/author">
    <meta property="article:section" content="Technology">
    
    <!-- Additional -->
    <meta name="author" content="Nama Penulis">
    <meta name="copyright" content="Nama Website">
    <meta name="language" content="Indonesian">
    <meta name="geo.region" content="ID">
    <meta name="theme-color" content="#4285F4">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
</head>
<body>
    <!-- Content -->
</body>
</html>
\`\`\`

## Meta Tags Checker

### Tools untuk Testing
- **Facebook Sharing Debugger** - https://developers.facebook.com/tools/debug/
- **Twitter Card Validator** - https://cards-dev.twitter.com/validator
- **Google Rich Results Test** - https://search.google.com/test/rich-results
- **Meta Tags Tester** - https://metatags.io
  `,
  quiz: [
    {
      question: "Panjang ideal untuk meta description adalah?",
      options: [
        "50-60 karakter",
        "150-160 karakter",
        "200-250 karakter",
        "300-350 karakter"
      ],
      correctAnswer: 1
    },
    {
      question: "Tag untuk mencegah duplicate content adalah?",
      options: [
        "meta robots",
        "canonical",
        "hreflang",
        "meta description"
      ],
      correctAnswer: 1
    },
    {
      question: "Property untuk gambar di Open Graph adalah?",
      options: [
        "og:img",
        "og:image",
        "og:photo",
        "og:picture"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Meta Tags Generator",
      code: `// meta-tags.js - Meta Tags Generator
class MetaTags {
    constructor(config) {
        this.config = {
            title: config.title || 'Default Title',
            description: config.description || 'Default description',
            url: config.url || 'https://example.com',
            image: config.image || 'https://example.com/default-og-image.jpg',
            siteName: config.siteName || 'My Website',
            author: config.author || 'Author Name',
            type: config.type || 'website',
            locale: config.locale || 'id_ID',
            twitter: config.twitter || '@username',
            keywords: config.keywords || [],
            publishedTime: config.publishedTime || new Date().toISOString(),
            modifiedTime: config.modifiedTime || new Date().toISOString(),
            section: config.section || 'General',
            tags: config.tags || []
        };
    }
    
    generate() {
        const tags = {
            basic: this.getBasicTags(),
            seo: this.getSEOTags(),
            og: this.getOGTags(),
            twitter: this.getTwitterTags(),
            article: this.getArticleTags(),
            additional: this.getAdditionalTags()
        };
        
        return tags;
    }
    
    getBasicTags() {
        return {
            charset: '<meta charset="UTF-8">',
            viewport: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
            'x-ua-compatible': '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
        };
    }
    
    getSEOTags() {
        return {
            title: \`<title>\${this.config.title}</title>\`,
            description: \`<meta name="description" content="\${this.config.description}">\`,
            keywords: \`<meta name="keywords" content="\${this.config.keywords.join(', ')}">\`,
            robots: '<meta name="robots" content="index, follow">',
            canonical: \`<link rel="canonical" href="\${this.config.url}">\`
        };
    }
    
    getOGTags() {
        return {
            'og:type': \`<meta property="og:type" content="\${this.config.type}">\`,
            'og:url': \`<meta property="og:url" content="\${this.config.url}">\`,
            'og:title': \`<meta property="og:title" content="\${this.config.title}">\`,
            'og:description': \`<meta property="og:description" content="\${this.config.description}">\`,
            'og:image': \`<meta property="og:image" content="\${this.config.image}">\`,
            'og:image:width': '<meta property="og:image:width" content="1200">',
            'og:image:height': '<meta property="og:image:height" content="630">',
            'og:site_name': \`<meta property="og:site_name" content="\${this.config.siteName}">\`,
            'og:locale': \`<meta property="og:locale" content="\${this.config.locale}">\`
        };
    }
    
    getTwitterTags() {
        return {
            'twitter:card': '<meta name="twitter:card" content="summary_large_image">',
            'twitter:title': \`<meta name="twitter:title" content="\${this.config.title}">\`,
            'twitter:description': \`<meta name="twitter:description" content="\${this.config.description}">\`,
            'twitter:image': \`<meta name="twitter:image" content="\${this.config.image}">\`,
            'twitter:site': \`<meta name="twitter:site" content="\${this.config.twitter}">\`
        };
    }
    
    getArticleTags() {
        return {
            'article:published_time': \`<meta property="article:published_time" content="\${this.config.publishedTime}">\`,
            'article:modified_time': \`<meta property="article:modified_time" content="\${this.config.modifiedTime}">\`,
            'article:author': \`<meta property="article:author" content="\${this.config.author}">\`,
            'article:section': \`<meta property="article:section" content="\${this.config.section}">\`,
            'article:tag': this.config.tags.map(tag => 
                \`<meta property="article:tag" content="\${tag}">\`
            ).join('\\n')
        };
    }
    
    getAdditionalTags() {
        return {
            author: \`<meta name="author" content="\${this.config.author}">\`,
            copyright: \`<meta name="copyright" content="\${this.config.siteName}">\`,
            language: '<meta name="language" content="Indonesian">',
            'theme-color': '<meta name="theme-color" content="#4285F4">',
            'apple-mobile-web-app-capable': '<meta name="apple-mobile-web-app-capable" content="yes">'
        };
    }
    
    // Generate HTML string
    toHTML() {
        const tags = this.generate();
        let html = '<!-- ========== META TAGS ========== -->\\n';
        html += '<!-- Basic Tags -->\\n';
        Object.values(tags.basic).forEach(tag => html += tag + '\\n');
        html += '\\n<!-- SEO Tags -->\\n';
        Object.values(tags.seo).forEach(tag => html += tag + '\\n');
        html += '\\n<!-- Open Graph Tags -->\\n';
        Object.values(tags.og).forEach(tag => html += tag + '\\n');
        html += '\\n<!-- Twitter Tags -->\\n';
        Object.values(tags.twitter).forEach(tag => html += tag + '\\n');
        html += '\\n<!-- Article Tags -->\\n';
        Object.values(tags.article).forEach(tag => html += tag + '\\n');
        html += '\\n<!-- Additional Tags -->\\n';
        Object.values(tags.additional).forEach(tag => html += tag + '\\n');
        return html;
    }
}

// Usage
const metaTags = new MetaTags({
    title: 'Belajar SEO Lengkap | Panduan Optimasi Website 2024',
    description: 'Panduan SEO lengkap untuk pemula hingga mahir. Pelajari teknik optimasi website, keyword research, dan cara ranking di Google.',
    url: 'https://example.com/belajar-seo',
    image: 'https://example.com/images/og-image.jpg',
    siteName: 'Nama Website',
    author: 'John Doe',
    type: 'article',
    locale: 'id_ID',
    twitter: '@johndoe',
    keywords: ['seo', 'belajar seo', 'panduan seo', 'optimasi website'],
    publishedTime: '2024-01-01T00:00:00Z',
    modifiedTime: '2024-01-15T00:00:00Z',
    section: 'Technology',
    tags: ['SEO', 'Digital Marketing', 'Web Development']
});

console.log(metaTags.toHTML());`,
      language: "javascript"
    }
  ]
};