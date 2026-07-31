export const chapter = {
  slug: "css-layout-patterns",
  title: "Layout Patterns",
  description: "Kumpulan pola layout CSS yang sering digunakan: holy grail, sidebar, card grid, dan lainnya.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["css-flexbox", "css-grid"],
  tags: ["css", "layout", "pattern", "arsitektur"],
  order: 31,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Layout Patterns CSS

Kumpulan pola layout yang paling sering digunakan dalam web development modern.

## 1. Holy Grail Layout

Header, footer, konten utama dengan 2 sidebar.

### Dengan Grid:
\`\`\`css
body {
    display: grid;
    grid-template-areas:
        "header  header  header"
        "nav     main    aside"
        "footer  footer  footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
.header  { grid-area: header; }
.nav     { grid-area: nav; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }

@media (max-width: 768px) {
    body {
        grid-template-areas:
            "header"
            "nav"
            "main"
            "aside"
            "footer";
        grid-template-columns: 1fr;
    }
}
\`\`\`

## 2. Centered Content

Konten di tengah dengan lebar maksimal:
\`\`\`css
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
\`\`\`

## 3. Sidebar + Content

### Flexbox:
\`\`\`css
.layout {
    display: flex;
    gap: 20px;
}
.sidebar {
    flex: 0 0 250px; /* Lebar tetap */
}
.content {
    flex: 1; /* Sisa ruang */
}
@media (max-width: 768px) {
    .layout { flex-direction: column; }
}
\`\`\`

### Grid:
\`\`\`css
.layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 20px;
}
@media (max-width: 768px) {
    .layout { grid-template-columns: 1fr; }
}
\`\`\`

## 4. Card Grid Responsif

\`\`\`css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}
\`\`\`

## 5. Sticky Footer

\`\`\`css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    flex: 1;
}
\`\`\`

## 6. Stack (Vertical Spacing)

\`\`\`css
.stack > * + * {
    margin-top: 20px;
}

/* Atau dengan flexbox */
.stack {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
\`\`\`

## 7. Cluster (Horizontal Wrap)

\`\`\`css
.cluster {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}
\`\`\`

## 8. Grid 12 Kolom

\`\`\`css
.grid-12 {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
}
.col-1  { grid-column: span 1; }
.col-2  { grid-column: span 2; }
.col-3  { grid-column: span 3; }
.col-4  { grid-column: span 4; }
.col-6  { grid-column: span 6; }
.col-8  { grid-column: span 8; }
.col-12 { grid-column: span 12; }
\`\`\`

## 9. Media Object (Gambar + Teks)

\`\`\`css
.media {
    display: flex;
    gap: 15px;
    align-items: flex-start;
}
.media-img {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.media-body {
    flex: 1;
}
\`\`\`

## 10. Full-Bleed Layout

\`\`\`css
.full-bleed {
    width: 100vw;
    margin-left: calc(50% - 50vw);
}

/* Atau */
.wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
.full-bleed {
    max-width: none;
    padding: 0;
}
\`\`\`

## 11. Masonry (Tanpa JS)

\`\`\`css
.masonry {
    columns: 3 250px;
    column-gap: 20px;
}
.masonry-item {
    break-inside: avoid;
    margin-bottom: 20px;
}
\`\`\`

## 12. Overlap Effect

\`\`\`css
.overlap-container {
    position: relative;
}
.overlap-top {
    position: relative;
    z-index: 2;
}
.overlap-bottom {
    position: relative;
    margin-top: -50px;
    z-index: 1;
}
\`\`\`
  `,

  quiz: [
    {
      question: "Layout apa yang cocok untuk card grid responsif tanpa media query?",
      options: [
        "display: flex",
        "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))",
        "float: left",
        "display: inline-block"
      ],
      correctAnswer: 1,
      explanation: "repeat(auto-fit, minmax(250px, 1fr)) membuat grid otomatis menyesuaikan jumlah kolom berdasarkan lebar container, tanpa perlu media queries."
    },
    {
      question: "Bagaimana cara membuat sticky footer dengan Flexbox?",
      options: [
        "position: fixed pada footer",
        "body flex column + main flex: 1",
        "footer margin-top: auto",
        "Semua benar"
      ],
      correctAnswer: 1,
      explanation: "Dengan body display: flex; flex-direction: column; min-height: 100vh; dan main flex: 1;, footer akan terdorong ke bawah."
    }
  ],

  codeExamples: [
    {
      title: "Koleksi Layout Patterns",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial; }
        
        /* Holy Grail */
        .holy-grail {
            display: grid;
            grid-template-areas:
                "header header header"
                "nav    main   aside"
                "footer footer footer";
            grid-template-columns: 200px 1fr 200px;
            grid-template-rows: auto 1fr auto;
            min-height: 100vh;
        }
        .holy-grail .header { grid-area: header; background: #1572B6; color: white; padding: 20px; text-align: center; }
        .holy-grail .nav { grid-area: nav; background: #f5f5f5; padding: 20px; }
        .holy-grail .main { grid-area: main; padding: 20px; }
        .holy-grail .aside { grid-area: aside; background: #f5f5f5; padding: 20px; }
        .holy-grail .footer { grid-area: footer; background: #333; color: white; padding: 15px; text-align: center; }
        
        /* Card Grid */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            padding: 20px;
        }
        .card {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        /* Media Object */
        .media {
            display: flex;
            gap: 15px;
            align-items: flex-start;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 8px;
        }
        .media-avatar {
            width: 50px; height: 50px;
            background: #1572B6; border-radius: 50%;
            flex-shrink: 0;
        }
        
        @media (max-width: 768px) {
            .holy-grail {
                grid-template-areas:
                    "header"
                    "nav"
                    "main"
                    "aside"
                    "footer";
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <h2 style="text-align:center; padding:20px;">Holy Grail Layout</h2>
    <div class="holy-grail">
        <header class="header"><h1>Header</h1></header>
        <nav class="nav"><h3>Navigation</h3><p>Menu links...</p></nav>
        <main class="main">
            <h2>Main Content</h2>
            <p>Konten utama di sini.</p>
        </main>
        <aside class="aside"><h3>Sidebar</h3><p>Widget area</p></aside>
        <footer class="footer"><p>Footer &copy; 2026</p></footer>
    </div>
    
    <h2 style="text-align:center; padding:20px;">Card Grid Responsif</h2>
    <div class="card-grid">
        <div class="card"><h3>Card 1</h3><p>Konten card</p></div>
        <div class="card"><h3>Card 2</h3><p>Konten card</p></div>
        <div class="card"><h3>Card 3</h3><p>Konten card</p></div>
        <div class="card"><h3>Card 4</h3><p>Konten card</p></div>
    </div>
    
    <h2 style="text-align:center; padding:20px;">Media Object</h2>
    <div class="media" style="margin:20px;">
        <div class="media-avatar"></div>
        <div>
            <h4>Nama Pengguna</h4>
            <p>Ini adalah contoh media object dengan Flexbox. Cocok untuk komentar atau daftar postingan.</p>
        </div>
    </div>
</body>
</html>`
    }
  ]
};