export const chapter = {
  slug: "introduction",
  title: "Pengenalan SVG",
  description: "Memahami SVG dan kelebihannya untuk grafik web.",
  icon: "SiSvg",
  color: "#FFB13B",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["svg", "vector", "graphics", "web"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu SVG?

SVG (Scalable Vector Graphics) adalah format gambar berbasis XML untuk grafik vektor 2D yang scalable dan interaktif.

## Kelebihan SVG

1. **Scalable** - Tidak pecah saat diperbesar
2. **Small Size** - Ukuran file kecil
3. **Stylable** - Bisa di-style dengan CSS
4. **Interactive** - Bisa diberi event
5. **Animated** - Bisa dianimasi
6. **Accessible** - Support ARIA

## Struktur Dasar

\`\`\`svg
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle -->
    <circle cx="100" cy="100" r="50" fill="blue" />
    
    <!-- Rectangle -->
    <rect x="200" y="50" width="100" height="80" fill="red" />
</svg>
\`\`\`

## Cara Menggunakan SVG

### 1. Inline HTML
\`\`\`html
<svg viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="blue" />
</svg>
\`\`\`

### 2. Image Tag
\`\`\`html
<img src="image.svg" alt="SVG Image" />
\`\`\`

### 3. Background Image
\`\`\`css
.element {
    background-image: url('image.svg');
}
\`\`\`

### 4. Object Tag
\`\`\`html
<object data="image.svg" type="image/svg+xml"></object>
\`\`\`

## ViewBox

ViewBox mendefinisikan sistem koordinat SVG:

\`\`\`svg
<svg viewBox="0 0 400 300">
    <!-- x: 0-400, y: 0-300 -->
    <circle cx="200" cy="150" r="100" fill="red" />
</svg>
\`\`\`

## Perbedaan SVG vs Canvas

| SVG | Canvas |
|-----|--------|
| Vector | Raster |
| Object-based | Pixel-based |
| Scalable | Fixed resolution |
| Accessible | Not accessible |
| CSS styling | JavaScript drawing |
| Better for icons, logos | Better for games, effects |
  `,
  quiz: [
    {
      question: "Apa kepanjangan SVG?",
      options: [
        "Scalable Vector Graphics",
        "Simple Vector Graphics",
        "Scalable Visual Graphics",
        "Standard Vector Graphics"
      ],
      correctAnswer: 0
    },
    {
      question: "Atribut untuk sistem koordinat SVG adalah?",
      options: [
        "coords",
        "viewBox",
        "bbox",
        "viewport"
      ],
      correctAnswer: 1
    },
    {
      question: "SVG lebih cocok untuk?",
      options: [
        "Game",
        "Ikon & Logo",
        "Foto",
        "Video"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Basic SVG Template",
      code: `<svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <!-- Defs -->
    <defs>
        <style>
            .title { font-family: Arial; font-size: 24px; font-weight: bold; fill: #333; }
            .subtitle { font-family: Arial; font-size: 14px; fill: #666; }
        </style>
    </defs>
    
    <!-- Background -->
    <rect width="800" height="600" fill="#f5f5f5" rx="10" />
    
    <!-- Content -->
    <text x="400" y="50" text-anchor="middle" class="title">SVG Template</text>
    <text x="400" y="80" text-anchor="middle" class="subtitle">Created with SVG</text>
    
    <!-- Shapes -->
    <circle cx="200" cy="300" r="80" fill="#FF6B6B" />
    <rect x="320" y="200" width="160" height="120" fill="#4ECDC4" rx="8" />
    <ellipse cx="600" cy="300" rx="100" ry="60" fill="#FFE66D" />
</svg>`,
      language: "html"
    }
  ]
};