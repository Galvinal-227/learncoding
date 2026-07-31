export const chapter = {
  slug: "css-filters",
  title: "Filter & Effects",
  description: "Pelajari CSS Filter untuk efek visual seperti blur, brightness, dan drop-shadow.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 12,
  prerequisites: ["css-syntax"],
  tags: ["css", "filter", "efek", "visual"],
  order: 25,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## CSS Filter

Filter menerapkan efek visual grafis ke elemen.

## Fungsi Filter

\`\`\`css
/* Blur */
filter: blur(5px);

/* Kecerahan (1 = normal) */
filter: brightness(1.5);   /* 150% */
filter: brightness(0.5);   /* 50% */

/* Kontras */
filter: contrast(150%);
filter: contrast(0.5);

/* Grayscale */
filter: grayscale(100%);   /* Hitam putih */
filter: grayscale(0%);     /* Normal */

/* Sepia */
filter: sepia(100%);

/* Saturasi */
filter: saturate(200%);    /* Lebih berwarna */
filter: saturate(0%);      /* Desaturasi */

/* Hue Rotate */
filter: hue-rotate(90deg);
filter: hue-rotate(180deg); /* Warna terbalik */

/* Invert */
filter: invert(100%);       /* Negatif */

/* Opacity */
filter: opacity(0.5);       /* 50% transparan */

/* Drop Shadow (lebih baik dari box-shadow untuk PNG) */
filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));

/* Kombinasi */
filter: blur(2px) brightness(0.8) saturate(150%);
\`\`\`

## backdrop-filter

Filter yang diterapkan ke area **di belakang** elemen:
\`\`\`css
.glass {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 12px;
}
\`\`\`

## Filter vs backdrop-filter

| filter | backdrop-filter |
|--------|-----------------|
| Efek pada elemen itu sendiri | Efek pada yang di belakang elemen |
| \`filter: blur(5px)\` | \`backdrop-filter: blur(5px)\` |
| Elemen jadi blur | Background di balik elemen jadi blur |

## Efek Keren

### Glassmorphism
\`\`\`css
.glass-card {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
}
\`\`\`

### Image Hover Effects
\`\`\`css
.img-wrapper img {
    transition: filter 0.5s;
}
.img-wrapper:hover img {
    filter: brightness(1.1) saturate(120%);
}
\`\`\`
  `,

  quiz: [
    {
      question: "Apa perbedaan filter dan backdrop-filter?",
      options: [
        "Tidak ada perbedaan",
        "filter: efek pada elemen sendiri; backdrop-filter: efek pada area di belakang elemen",
        "backdrop-filter lebih cepat",
        "filter hanya untuk gambar"
      ],
      correctAnswer: 1,
      explanation: "filter diterapkan pada elemen itu sendiri. backdrop-filter diterapkan pada konten yang berada di balik elemen (seperti kaca buram)."
    }
  ],

  codeExamples: [
    {
      title: "Demo Filter & Glass Effect",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body {
            font-family: Arial;
            background: linear-gradient(135deg, #667eea, #764ba2);
            min-height: 100vh;
            padding: 40px;
        }
        
        .glass-card {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 16px;
            padding: 30px;
            color: white;
            max-width: 400px;
        }
        
        .filter-grid {
            display: flex; gap: 20px; flex-wrap: wrap; margin: 20px 0;
        }
        .filter-box {
            width: 100px; height: 100px;
            background: linear-gradient(45deg, #f39c12, #e74c3c);
            border-radius: 8px;
            display: flex; align-items: center; justify-content: center;
            font-size: 12px; color: white; text-align: center;
        }
        .blur { filter: blur(3px); }
        .grayscale { filter: grayscale(100%); }
        .sepia { filter: sepia(100%); }
        .invert { filter: invert(100%); }
    </style>
</head>
<body>
    <div class="glass-card">
        <h2>Glassmorphism</h2>
        <p>Kartu dengan efek kaca buram menggunakan backdrop-filter.</p>
    </div>
    
    <h3 style="color:white; margin-top: 30px;">Filter Effects</h3>
    <div class="filter-grid">
        <div class="filter-box">Normal</div>
        <div class="filter-box blur">Blur</div>
        <div class="filter-box grayscale">Grayscale</div>
        <div class="filter-box sepia">Sepia</div>
        <div class="filter-box invert">Invert</div>
    </div>
</body>
</html>`
    }
  ]
};