export const chapter = {
  slug: "css-grid",
  title: "CSS Grid",
  description: "Kuasai CSS Grid untuk layout dua dimensi yang powerful dan kompleks.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 30,
  prerequisites: ["css-display", "css-flexbox"],
  tags: ["css", "grid", "layout", "dua-dimensi"],
  order: 16,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu CSS Grid?

CSS Grid adalah sistem layout **dua dimensi** (baris DAN kolom) yang paling powerful di CSS. Cocok untuk layout halaman secara keseluruhan.

## Konsep Dasar

\`\`\`
┌─────────────────────────────────────┐
│  GRID CONTAINER                     │
│  ┌──────┬──────┬──────┐            │
│  │  1   │  2   │  3   │ ← row     │
│  ├──────┼──────┼──────┤            │
│  │  4   │  5   │  6   │            │
│  └──────┴──────┴──────┘            │
│         ↑ column                    │
└─────────────────────────────────────┘
\`\`\`

## Properti Container

### display: grid
\`\`\`css
.container {
    display: grid;
}
\`\`\`

### grid-template-columns
Definisi kolom:
\`\`\`css
/* 3 kolom sama besar */
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: repeat(3, 1fr);

/* Kolom dengan ukuran berbeda */
grid-template-columns: 200px 1fr 2fr;

/* Auto-fit: kolom otomatis responsif */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* Kombinasi fixed dan fleksibel */
grid-template-columns: 250px 1fr;
\`\`\`

### grid-template-rows
Definisi baris:
\`\`\`css
grid-template-rows: 100px 1fr auto;
grid-template-rows: repeat(4, 1fr);
grid-template-rows: minmax(200px, auto) 1fr;
\`\`\`

### gap
\`\`\`css
gap: 20px;              /* Baris dan kolom */
row-gap: 15px;          /* Hanya baris */
column-gap: 25px;       /* Hanya kolom */
\`\`\`

### grid-template-areas
Layout berbasis nama:
\`\`\`css
.container {
    display: grid;
    grid-template-areas:
        "header  header  header"
        "sidebar content content"
        "footer  footer  footer";
    grid-template-columns: 250px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }
\`\`\`

## Properti Item

### grid-column / grid-row
Penempatan item:
\`\`\`css
/* Rentang kolom */
grid-column: 1 / 3;          /* Dari line 1 sampai 3 */
grid-column: 1 / span 2;     /* Dari line 1, selebar 2 kolom */
grid-column: 1 / -1;         /* Dari awal sampai akhir */

/* Rentang baris */
grid-row: 2 / 4;
grid-row: 2 / span 2;
\`\`\`

### grid-area
Shorthand:
\`\`\`css
grid-area: row-start / col-start / row-end / col-end;
grid-area: 1 / 1 / 3 / 3;
\`\`\`

### justify-self / align-self
Alignment individual:
\`\`\`css
justify-self: center;  /* Horizontal */
align-self: center;     /* Vertikal */
place-self: center;     /* Shorthand */
\`\`\`

## Layout Umum dengan Grid

### Holy Grail Layout
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
\`\`\`

### Card Grid Responsif
\`\`\`css
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
\`\`\`

### Dashboard Layout
\`\`\`css
.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 150px);
    gap: 15px;
}
.stat-card:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
}
\`\`\`

## Grid vs Flexbox

| Gunakan Grid | Gunakan Flexbox |
|--------------|-----------------|
| Layout halaman penuh | Komponen baris |
| Dua dimensi (baris & kolom) | Satu dimensi |
| Grid items sejajar rapi | Items fleksibel |
| Area-based layout | Content-first layout |
  `,

  quiz: [
    {
      question: "Apa yang dimaksud dengan fr di CSS Grid?",
      options: [
        "Fixed Ratio",
        "Fraction (bagian dari ruang tersedia)",
        "Flex Row",
        "Frame Rate"
      ],
      correctAnswer: 1,
      explanation: "fr adalah unit fraction yang merepresentasikan bagian dari ruang yang tersedia di grid container."
    },
    {
      question: "Fungsi mana yang membuat kolom otomatis responsif?",
      options: [
        "repeat(3, 1fr)",
        "minmax(250px, 1fr)",
        "auto-fill dengan minmax",
        "A dan C benar"
      ],
      correctAnswer: 3,
      explanation: "repeat(auto-fit, minmax(250px, 1fr)) atau repeat(auto-fill, minmax(250px, 1fr)) membuat grid responsif otomatis."
    }
  ],

  codeExamples: [
    {
      title: "Layout Grid Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; margin: 0; }
        
        .grid-layout {
            display: grid;
            grid-template-areas:
                "header  header  header"
                "nav     main    aside"
                "footer  footer  footer";
            grid-template-columns: 200px 1fr 200px;
            grid-template-rows: auto 1fr auto;
            min-height: 100vh;
        }
        
        .header {
            grid-area: header;
            background: #1572B6;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .nav {
            grid-area: nav;
            background: #f5f5f5;
            padding: 20px;
        }
        
        .nav ul { list-style: none; padding: 0; }
        .nav li { margin: 10px 0; }
        
        .main {
            grid-area: main;
            padding: 20px;
        }
        
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .card {
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .aside {
            grid-area: aside;
            background: #f5f5f5;
            padding: 20px;
        }
        
        .footer {
            grid-area: footer;
            background: #333;
            color: white;
            text-align: center;
            padding: 20px;
        }
        
        @media (max-width: 768px) {
            .grid-layout {
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
    <div class="grid-layout">
        <header class="header">
            <h1>CSS Grid Layout</h1>
        </header>
        
        <nav class="nav">
            <h3>Menu</h3>
            <ul>
                <li>Dashboard</li>
                <li>Profil</li>
                <li>Pengaturan</li>
                <li>Bantuan</li>
            </ul>
        </nav>
        
        <main class="main">
            <h2>Konten Utama</h2>
            <p>Ini adalah area konten utama dengan grid layout.</p>
            
            <div class="card-grid">
                <div class="card">Card 1</div>
                <div class="card">Card 2</div>
                <div class="card">Card 3</div>
                <div class="card">Card 4</div>
                <div class="card">Card 5</div>
                <div class="card">Card 6</div>
            </div>
        </main>
        
        <aside class="aside">
            <h3>Sidebar</h3>
            <p>Info tambahan</p>
            <p>Widget</p>
        </aside>
        
        <footer class="footer">
            <p>&copy; 2026 Grid Demo</p>
        </footer>
    </div>
</body>
</html>`
    }
  ]
};