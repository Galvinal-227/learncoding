export const chapter = {
  slug: "css-icons",
  title: "Ikon",
  description: "Pelajari berbagai cara menampilkan ikon di web: SVG, icon fonts, dan emoji.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["css-syntax"],
  tags: ["css", "ikon", "svg", "icon-font"],
  order: 21,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Cara Menampilkan Ikon

### 1. SVG Inline (Paling Direkomendasikan)
\`\`\`html
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
</svg>
\`\`\`

### 2. Emoji
\`\`\`html
<span>🚀 ⭐ ❤️ 🔥</span>
\`\`\`

### 3. Icon Fonts (Font Awesome, Material Icons)
\`\`\`html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<i class="fas fa-home"></i>
<i class="fab fa-github"></i>
\`\`\`

### 4. CSS Pseudo-element
\`\`\`css
.icon-check::before {
    content: '✓';
    color: green;
}
\`\`\`

## Styling Ikon SVG

\`\`\`css
.icon {
    width: 24px;
    height: 24px;
    fill: currentColor; /* Ikut warna teks */
    transition: transform 0.3s;
}
.icon:hover {
    transform: scale(1.2);
}
.icon-large {
    width: 48px;
    height: 48px;
}
\`\`\`

## Rekomendasi Library Ikon

- **Heroicons** - SVG gratis, Tailwind-friendly
- **Lucide** - SVG ringan
- **Phosphor Icons** - Banyak style
- **Font Awesome** - Icon font populer
- **Material Icons** - Google

## Tips

✅ Gunakan SVG inline untuk kontrol penuh
✅ Gunakan \`currentColor\` agar ikon mengikuti warna teks
✅ Sediakan \`aria-label\` untuk aksesibilitas
❌ Jangan gunakan icon font untuk ikon kritis (bisa gagal load)
  `,

  quiz: [
    {
      question: "Metode mana yang paling direkomendasikan untuk ikon di web modern?",
      options: [
        "Icon font (Font Awesome)",
        "SVG inline",
        "Gambar PNG",
        "CSS sprite"
      ],
      correctAnswer: 1,
      explanation: "SVG inline memberikan kontrol penuh, scalable tanpa pecah, bisa di-style dengan CSS, dan tidak memerlukan request tambahan."
    },
    {
      question: "Properti CSS apa yang membuat SVG ikon mengikuti warna teks?",
      options: ["fill: inherit", "fill: currentColor", "color: inherit", "stroke: auto"],
      correctAnswer: 1,
      explanation: "fill: currentColor membuat SVG menggunakan nilai color dari elemen parent, sehingga ikon otomatis mengikuti warna teks."
    }
  ],

  codeExamples: [
    {
      title: "Koleksi Ikon",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 20px; }
        .icon-grid { display: flex; gap: 20px; flex-wrap: wrap; }
        .icon-card {
            width: 80px; height: 80px;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            background: #f5f5f5; border-radius: 8px;
            font-size: 12px; gap: 8px;
            transition: transform 0.3s, background 0.3s;
            cursor: pointer;
        }
        .icon-card:hover { transform: scale(1.1); background: #e3f2fd; }
        .icon-svg { width: 32px; height: 32px; }
    </style>
</head>
<body>
    <h1>Ikon dengan SVG Inline</h1>
    
    <div class="icon-grid">
        <!-- Home -->
        <div class="icon-card">
            <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Home</span>
        </div>
        
        <!-- Heart -->
        <div class="icon-card">
            <svg class="icon-svg" viewBox="0 0 24 24" fill="#e74c3c">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>Love</span>
        </div>
        
        <!-- Star -->
        <div class="icon-card">
            <svg class="icon-svg" viewBox="0 0 24 24" fill="#f39c12">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>Star</span>
        </div>
        
        <!-- Settings -->
        <div class="icon-card">
            <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <span>Settings</span>
        </div>
    </div>
</body>
</html>`
    }
  ]
};