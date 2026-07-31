export const chapter = {
  slug: "html-svg",
  title: "SVG di HTML",
  description: "Pelajari cara menggunakan SVG untuk grafik vektor yang scalable di HTML.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["html-elements"],
  tags: ["html", "svg", "vektor", "grafik"],
  order: 24,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu SVG?

SVG (Scalable Vector Graphics) adalah format gambar berbasis XML yang tidak pecah saat diperbesar. SVG bisa langsung ditulis di HTML.

## Cara Menggunakan SVG

### 1. Inline SVG (Direkomendasikan)
\`\`\`html
<svg width="200" height="200" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="80" fill="blue" />
</svg>
\`\`\`

### 2. Sebagai Gambar
\`\`\`html
<img src="gambar.svg" alt="Gambar SVG">
\`\`\`

### 3. Sebagai Background CSS
\`\`\`css
div {
    background-image: url('gambar.svg');
}
\`\`\`

## Bentuk Dasar SVG

### Rectangle
\`\`\`html
<svg width="400" height="200">
    <rect x="50" y="30" width="150" height="100" fill="blue" rx="10" />
    <rect x="220" y="30" width="150" height="100" stroke="red" stroke-width="3" fill="none" />
</svg>
\`\`\`

### Circle
\`\`\`html
<svg width="400" height="200">
    <circle cx="100" cy="100" r="80" fill="green" />
    <circle cx="300" cy="100" r="60" stroke="orange" stroke-width="5" fill="none" />
</svg>
\`\`\`

### Ellipse
\`\`\`html
<svg width="400" height="200">
    <ellipse cx="200" cy="100" rx="120" ry="60" fill="purple" />
</svg>
\`\`\`

### Line
\`\`\`html
<svg width="400" height="200">
    <line x1="50" y1="50" x2="350" y2="150" stroke="black" stroke-width="3" />
</svg>
\`\`\`

### Polygon & Polyline
\`\`\`html
<svg width="400" height="200">
    <!-- Segitiga -->
    <polygon points="200,20 350,180 50,180" fill="red" />
    
    <!-- Bintang -->
    <polygon points="100,10 120,80 190,80 130,120 150,190 100,150 50,190 70,120 10,80 80,80" 
             fill="gold" stroke="orange" stroke-width="2" />
</svg>
\`\`\`

### Path (Paling Powerful)
\`\`\`html
<svg width="400" height="200">
    <!-- Kurva sederhana -->
    <path d="M 50 150 Q 200 0 350 150" stroke="blue" stroke-width="3" fill="none" />
    
    <!-- Hati -->
    <path d="M 200 180 
             C 200 180 100 120 100 80 
             C 100 40 160 20 200 60 
             C 240 20 300 40 300 80 
             C 300 120 200 180 200 180 Z" 
          fill="red" />
</svg>
\`\`\`

## SVG dengan Teks

\`\`\`html
<svg width="400" height="200">
    <text x="50" y="80" font-family="Arial" font-size="40" fill="blue">
        Halo SVG!
    </text>
    <text x="50" y="150" font-family="Arial" font-size="30" font-weight="bold" 
          fill="none" stroke="green" stroke-width="1">
        Teks Outline
    </text>
</svg>
\`\`\`

## Gradien dan Pattern

### Gradien Linear
\`\`\`html
<svg width="400" height="200">
    <defs>
        <linearGradient id="gradienKu" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:red;stop-opacity:1" />
            <stop offset="50%" style="stop-color:yellow;stop-opacity:1" />
            <stop offset="100%" style="stop-color:blue;stop-opacity:1" />
        </linearGradient>
    </defs>
    <rect x="50" y="30" width="300" height="140" fill="url(#gradienKu)" />
</svg>
\`\`\`

## Animasi SVG

\`\`\`html
<svg width="400" height="200">
    <circle cx="100" cy="100" r="30" fill="blue">
        <animate attributeName="cx" from="100" to="300" 
                 dur="2s" repeatCount="indefinite" />
        <animate attributeName="r" values="30;50;30" 
                 dur="2s" repeatCount="indefinite" />
    </circle>
</svg>
\`\`\`

## SVG Ikon Sederhana

\`\`\`html
<!-- Play Button -->
<svg width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="#E34F26" />
    <polygon points="40,30 70,50 40,70" fill="white" />
</svg>

<!-- Checkmark -->
<svg width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="#4CAF50" />
    <path d="M 30 50 L 45 65 L 70 35" stroke="white" 
          stroke-width="6" fill="none" stroke-linecap="round" />
</svg>
\`\`\`
  `,

  quiz: [
    {
      question: "Apa keunggulan utama SVG dibanding gambar raster (PNG/JPG)?",
      options: [
        "Ukuran file lebih kecil",
        "Tidak pecah saat diperbesar (scalable)",
        "Loading lebih cepat",
        "Warna lebih bagus"
      ],
      correctAnswer: 1,
      explanation: "SVG adalah grafik vektor yang tidak akan pecah atau blur saat diperbesar, tidak seperti gambar raster."
    },
    {
      question: "Elemen SVG apa yang paling fleksibel untuk membuat bentuk kompleks?",
      options: ["<rect>", "<circle>", "<path>", "<line>"],
      correctAnswer: 2,
      explanation: "<path> adalah elemen paling powerful di SVG, bisa membuat hampir semua bentuk dengan perintah M, L, C, Q, A, Z."
    }
  ],

  codeExamples: [
    {
      title: "Koleksi Ikon SVG",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Contoh SVG</title>
    <style>
        .icon-container { display: flex; gap: 20px; flex-wrap: wrap; }
        .icon { text-align: center; }
        svg:hover { transform: scale(1.1); transition: 0.3s; }
    </style>
</head>
<body>
    <h1>Koleksi Ikon SVG</h1>
    <div class="icon-container">
        <!-- Home -->
        <div class="icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <p>Home</p>
        </div>
        
        <!-- Heart -->
        <div class="icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="#E34F26">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <p>Love</p>
        </div>
        
        <!-- Star -->
        <div class="icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFA500" stroke-width="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <p>Star</p>
        </div>
        
        <!-- Cart -->
        <div class="icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <p>Cart</p>
        </div>
    </div>
</body>
</html>`,
      output: "Koleksi ikon SVG yang bisa digunakan langsung di halaman web."
    }
  ]
};