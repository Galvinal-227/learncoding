export const chapter = {
  slug: "css-fonts",
  title: "Font & Web Fonts",
  description: "Pelajari cara menggunakan font kustom dan web fonts di CSS.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["css-typography"],
  tags: ["css", "font", "web-fonts", "google-fonts"],
  order: 20,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Web Safe Fonts

Font yang tersedia di hampir semua OS:

\`\`\`css
/* Serif */
font-family: 'Times New Roman', Times, serif;
font-family: Georgia, 'Times New Roman', serif;

/* Sans-Serif */
font-family: Arial, Helvetica, sans-serif;
font-family: 'Trebuchet MS', 'Lucida Sans', sans-serif;
font-family: Verdana, Geneva, sans-serif;

/* Monospace */
font-family: 'Courier New', Courier, monospace;
\`\`\`

## Google Fonts

### Cara 1: Link HTML
\`\`\`html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
\`\`\`

### Cara 2: @import CSS
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
\`\`\`

### Gunakan:
\`\`\`css
body {
    font-family: 'Inter', sans-serif;
}
h1 {
    font-weight: 700;
}
\`\`\`

## @font-face (Font Lokal)

\`\`\`css
@font-face {
    font-family: 'FontKustom';
    src: url('font-kustom.woff2') format('woff2'),
         url('font-kustom.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Penting! */
}

@font-face {
    font-family: 'FontKustom';
    src: url('font-kustom-bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
\`\`\`

## font-display

\`\`\`css
font-display: swap;     /* Fallback dulu, ganti saat font siap (rekomendasi) */
font-display: block;    /* Teks tidak terlihat sampai font siap */
font-display: fallback; /* Fallback sebentar, jika font lama, tetap fallback */
font-display: optional; /* Mirip fallback, bisa tidak pakai font kustom */
font-display: auto;     /* Default browser */
\`\`\`

## Variable Fonts

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

## Tips Performa

\`\`\`html
<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload font penting -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
\`\`\`
  `,

  quiz: [
    {
      question: "Nilai font-display mana yang direkomendasikan untuk performa?",
      options: ["block", "swap", "auto", "fallback"],
      correctAnswer: 1,
      explanation: "font-display: swap menampilkan fallback font dulu lalu menggantinya saat font kustom siap, mencegah FOIT (Flash of Invisible Text)."
    },
    {
      question: "Apa itu Variable Font?",
      options: [
        "Font yang ukurannya berubah-ubah",
        "Satu file font yang mendukung banyak variasi (weight, width, style)",
        "Font animasi",
        "Font bawaan browser"
      ],
      correctAnswer: 1,
      explanation: "Variable font adalah satu file yang berisi seluruh variasi font (weight, width, slant, dll), mengurangi jumlah file yang perlu diunduh."
    }
  ]
};