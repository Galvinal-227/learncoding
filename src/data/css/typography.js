export const chapter = {
  slug: "css-typography",
  title: "Tipografi",
  description: "Kuasai seni mengatur teks di web dengan properti tipografi CSS.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["css-syntax"],
  tags: ["css", "tipografi", "font", "teks"],
  order: 19,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Tipografi di CSS

Tipografi adalah seni mengatur teks agar mudah dibaca dan menarik secara visual.

## Properti Font

### font-family
\`\`\`css
font-family: Arial, sans-serif;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-family: 'Times New Roman', serif;
font-family: 'Courier New', monospace;
\`\`\`

### font-size
\`\`\`css
font-size: 16px;
font-size: 1rem;       /* Relatif ke root */
font-size: 1.2em;      /* Relatif ke parent */
font-size: 2.5vw;      /* Relatif ke viewport */
font-size: clamp(1rem, 2.5vw, 2rem); /* Responsif */
\`\`\`

### font-weight
\`\`\`css
font-weight: 400;      /* Normal */
font-weight: 700;      /* Bold */
font-weight: bold;     /* = 700 */
font-weight: lighter;  /* Lebih ringan dari parent */
\`\`\`

### font-style
\`\`\`css
font-style: normal;
font-style: italic;
font-style: oblique;
\`\`\`

### line-height
\`\`\`css
line-height: 1.5;      /* Tanpa unit (rekomendasi) */
line-height: 1.8;
line-height: 24px;
line-height: 150%;
\`\`\`

## Properti Teks

### text-align
\`\`\`css
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
\`\`\`

### text-decoration
\`\`\`css
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;
text-decoration: overline;
\`\`\`

### text-transform
\`\`\`css
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
\`\`\`

### letter-spacing & word-spacing
\`\`\`css
letter-spacing: 1px;
letter-spacing: -0.5px;
word-spacing: 5px;
\`\`\`

### text-indent
\`\`\`css
text-indent: 2em;      /* Baris pertama paragraf */
\`\`\`

### white-space
\`\`\`css
white-space: normal;     /* Default */
white-space: nowrap;     /* Tidak wrap */
white-space: pre;        /* Seperti <pre> */
white-space: pre-wrap;   /* pre + wrap */
\`\`\`

### word-break & overflow-wrap
\`\`\`css
word-break: break-all;
overflow-wrap: break-word; /* Lebih aman */
\`\`\`

### text-overflow
\`\`\`css
.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
\`\`\`

## Tipografi Modern

### Variable Fonts
\`\`\`css
@font-face {
    font-family: 'Roboto Flex';
    src: url('RobotoFlex.woff2') format('woff2-variations');
    font-weight: 100 900;
    font-stretch: 75% 125%;
}

.text {
    font-family: 'Roboto Flex';
    font-weight: 450;
    font-stretch: 90%;
}
\`\`\`

### Fluid Typography
\`\`\`css
h1 { font-size: clamp(2rem, 5vw, 4rem); }
h2 { font-size: clamp(1.5rem, 3vw, 2.5rem); }
body { font-size: clamp(1rem, 1.5vw, 1.25rem); }
\`\`\`
  `,

  quiz: [
    {
      question: "Kenapa line-height sebaiknya tanpa unit (misal 1.5 bukan 24px)?",
      options: [
        "Lebih cepat",
        "Nilai relatif mengikuti ukuran font, lebih konsisten",
        "Wajib di CSS3",
        "Tidak ada bedanya"
      ],
      correctAnswer: 1,
      explanation: "line-height tanpa unit bersifat relatif terhadap font-size elemen tersebut, jadi tetap proporsional saat ukuran font berubah."
    },
    {
      question: "Properti apa yang membuat teks terpotong dengan '...'?",
      options: ["text-overflow: ellipsis", "overflow: hidden", "text-truncate", "text-clip"],
      correctAnswer: 0,
      explanation: "text-overflow: ellipsis (dikombinasikan dengan white-space: nowrap dan overflow: hidden) akan menampilkan '...' saat teks terlalu panjang."
    }
  ],

  codeExamples: [
    {
      title: "Sistem Tipografi Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        :root {
            --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            --line-height: 1.6;
        }
        
        body {
            font-family: var(--font-primary);
            line-height: var(--line-height);
            max-width: 700px;
            margin: 40px auto;
            padding: 0 20px;
            color: #333;
        }
        
        h1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; line-height: 1.2; }
        h2 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 600; line-height: 1.3; }
        h3 { font-size: 1.25rem; font-weight: 600; }
        
        p { margin-bottom: 1.5em; }
        
        .lead { font-size: 1.25rem; color: #555; line-height: 1.7; }
        .small { font-size: 0.875rem; color: #777; }
        
        .ellipsis {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 300px;
            padding: 10px;
            background: #f5f5f5;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>Judul Utama Artikel</h1>
    <p class="lead">Paragraf pembuka yang lebih besar untuk menarik perhatian pembaca dan memberikan ringkasan konten.</p>
    
    <h2>Bagian Pertama</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae voluptatem quibusdam quos quidem dolorum natus.</p>
    
    <h3>Sub Bagian</h3>
    <p>Detail lebih lanjut tentang topik yang sedang dibahas dengan format tipografi yang nyaman dibaca.</p>
    
    <h2>Contoh Text Overflow</h2>
    <div class="ellipsis">
        Teks panjang yang akan terpotong dengan elipsis jika melebihi lebar wadahnya...
    </div>
    
    <p class="small">Catatan kecil dengan ukuran font lebih kecil untuk informasi tambahan.</p>
</body>
</html>`
    }
  ]
};