export const chapter = {
  slug: "css-media-queries",
  title: "Media Queries",
  description: "Kuasai Media Queries untuk membuat stylesheet yang adaptif terhadap berbagai kondisi.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["css-responsive-design"],
  tags: ["css", "media-queries", "responsif", "breakpoint"],
  order: 18,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Media Queries?

Media Queries adalah fitur CSS yang memungkinkan kamu menerapkan style berdasarkan **kondisi tertentu** (ukuran layar, orientasi, preferensi pengguna, dll).

## Sintaks Dasar

\`\`\`css
@media (kondisi) {
    /* CSS yang diterapkan jika kondisi terpenuhi */
}
\`\`\`

## Media Types

\`\`\`css
@media screen { }     /* Layar (default) */
@media print { }      /* Saat dicetak */
@media all { }        /* Semua media */
@media speech { }     /* Screen reader */
\`\`\`

## Width dan Height

### min-width / max-width (Paling Sering Digunakan)
\`\`\`css
/* Lebar minimal 768px (tablet ke atas) */
@media (min-width: 768px) {
    .sidebar { display: block; }
}

/* Lebar maksimal 767px (mobile) */
@media (max-width: 767px) {
    .sidebar { display: none; }
}
\`\`\`

### Range
\`\`\`css
/* Antara 768px dan 1023px */
@media (min-width: 768px) and (max-width: 1023px) {
    /* Tablet styles */
}

/* Cara modern */
@media (width >= 768px) and (width <= 1023px) { }
\`\`\`

### height
\`\`\`css
@media (min-height: 600px) { }
@media (max-height: 800px) { }
\`\`\`

## Orientasi

\`\`\`css
@media (orientation: portrait) {
    /* Layar vertikal */
}

@media (orientation: landscape) {
    /* Layar horizontal */
}
\`\`\`

## Resolution & Pixel Density

\`\`\`css
/* Retina display */
@media (min-resolution: 2dppx) {
    .logo { background-image: url('logo@2x.png'); }
}

@media (-webkit-min-device-pixel-ratio: 2) {
    /* WebKit retina */
}
\`\`\`

## User Preferences

### Prefers Color Scheme (Dark Mode)
\`\`\`css
@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a1a;
        color: #f5f5f5;
    }
}

@media (prefers-color-scheme: light) {
    body {
        background: #fff;
        color: #333;
    }
}
\`\`\`

### Prefers Reduced Motion
\`\`\`css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
\`\`\`

### Prefers Contrast
\`\`\`css
@media (prefers-contrast: high) {
    body { background: white; color: black; }
    button { border: 2px solid black; }
}
\`\`\`

## Kombinasi Kondisi

### AND
\`\`\`css
@media screen and (min-width: 768px) and (orientation: landscape) { }
\`\`\`

### OR (koma)
\`\`\`css
@media (max-width: 600px), (orientation: portrait) { }
\`\`\`

### NOT
\`\`\`css
@media not print and (min-width: 768px) { }
\`\`\`

## Breakpoint Standar

\`\`\`css
/* Mobile First */
/* Default: mobile (< 576px) */

/* Tablet */
@media (min-width: 576px) { }

/* Tablet Landscape */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 992px) { }

/* Large Desktop */
@media (min-width: 1200px) { }

/* Extra Large */
@media (min-width: 1400px) { }
\`\`\`

## Container Queries (Modern)

\`\`\`css
@container (min-width: 400px) {
    .card { display: flex; }
}
\`\`\`

## Print Styles

\`\`\`css
@media print {
    .navbar, .sidebar, .ads { display: none; }
    body { font-size: 12pt; }
    a::after { content: " (" attr(href) ") "; }
}
\`\`\`
  `,

  quiz: [
    {
      question: "Apa perbedaan min-width dan max-width di media query?",
      options: [
        "Tidak ada perbedaan",
        "min-width: minimal segini ke atas; max-width: maksimal segini ke bawah",
        "min-width untuk mobile, max-width untuk desktop",
        "Tergantung browser"
      ],
      correctAnswer: 1,
      explanation: "min-width: aturan berlaku jika lebar >= nilai. max-width: aturan berlaku jika lebar <= nilai."
    },
    {
      question: "Media query mana untuk mendeteksi dark mode?",
      options: [
        "@media (dark-mode: true)",
        "@media (prefers-color-scheme: dark)",
        "@media (theme: dark)",
        "@media (color: black)"
      ],
      correctAnswer: 1,
      explanation: "prefers-color-scheme: dark mendeteksi preferensi pengguna untuk tampilan gelap."
    }
  ],

  codeExamples: [
    {
      title: "Dark Mode dengan Media Queries",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        :root {
            --bg: #ffffff;
            --text: #333333;
            --primary: #1572B6;
            --card-bg: #f5f5f5;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg: #1a1a2e;
                --text: #e0e0e0;
                --primary: #4a90d9;
                --card-bg: #16213e;
            }
        }
        
        @media (prefers-reduced-motion: reduce) {
            * { transition: none !important; animation: none !important; }
        }
        
        body {
            background: var(--bg);
            color: var(--text);
            font-family: Arial;
            transition: background 0.3s, color 0.3s;
            padding: 20px;
        }
        
        .card {
            background: var(--card-bg);
            padding: 20px;
            border-radius: 8px;
            margin: 10px 0;
        }
        
        @media (max-width: 600px) {
            body { padding: 10px; }
            .card { padding: 15px; }
        }
        
        @media print {
            .no-print { display: none; }
            body { font-size: 12pt; }
        }
    </style>
</head>
<body>
    <h1>Media Queries Demo</h1>
    <div class="card">
        <p>Kartu ini berubah warna sesuai tema sistem.</p>
        <p>Coba ubah mode gelap/terang di pengaturan perangkatmu.</p>
    </div>
    <button class="no-print">Tombol ini hilang saat print</button>
</body>
</html>`
    }
  ]
};