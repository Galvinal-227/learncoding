export const chapter = {
  slug: "css-flexbox",
  title: "Flexbox",
  description: "Kuasai Flexbox untuk layout satu dimensi yang fleksibel dan responsif.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["css-display"],
  tags: ["css", "flexbox", "layout", "responsif"],
  order: 15,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Flexbox?

Flexbox (Flexible Box Layout) adalah model layout **satu dimensi** untuk mengatur elemen dalam baris atau kolom. Sangat cocok untuk komponen UI dan layout skala kecil.

## Konsep Dasar

\`\`\`
┌──────────────────────────────────────────┐
│  FLEX CONTAINER                          │
│  ┌─────┐ ┌─────┐ ┌─────┐               │
│  │Item1│ │Item2│ │Item3│    ← main axis │
│  └─────┘ └─────┘ └─────┘               │
│                                    ↑     │
│                               cross axis │
└──────────────────────────────────────────┘
\`\`\`

- **Flex Container**: Elemen parent dengan \`display: flex\`
- **Flex Items**: Elemen anak langsung dari container
- **Main Axis**: Arah utama (horizontal default)
- **Cross Axis**: Arah tegak lurus (vertikal default)

## Properti Container

### display: flex
\`\`\`css
.container {
    display: flex;
}
\`\`\`

### flex-direction
Arah item:
\`\`\`css
flex-direction: row;            /* Default: kiri ke kanan */
flex-direction: row-reverse;    /* Kanan ke kiri */
flex-direction: column;         /* Atas ke bawah */
flex-direction: column-reverse; /* Bawah ke atas */
\`\`\`

### flex-wrap
Apakah item boleh wrap:
\`\`\`css
flex-wrap: nowrap;       /* Default: tidak wrap */
flex-wrap: wrap;         /* Wrap ke baris berikutnya */
flex-wrap: wrap-reverse; /* Wrap terbalik */
\`\`\`

### justify-content (Main Axis)
\`\`\`css
justify-content: flex-start;    /* Awal (default) */
justify-content: flex-end;      /* Akhir */
justify-content: center;        /* Tengah */
justify-content: space-between; /* Spasi di antara */
justify-content: space-around;  /* Spasi di sekitar */
justify-content: space-evenly;  /* Spasi sama rata */
\`\`\`

### align-items (Cross Axis)
\`\`\`css
align-items: stretch;     /* Default: tinggi penuh */
align-items: flex-start;  /* Atas */
align-items: flex-end;    /* Bawah */
align-items: center;      /* Tengah */
align-items: baseline;    /* Sejajar baseline teks */
\`\`\`

### align-content (Multi-line)
\`\`\`css
align-content: flex-start;
align-content: center;
align-content: space-between;
\`\`\`

### gap
\`\`\`css
gap: 20px;              /* Jarak antar item */
row-gap: 10px;          /* Jarak vertikal */
column-gap: 20px;       /* Jarak horizontal */
\`\`\`

## Properti Item

### flex (shorthand)
\`\`\`css
flex: flex-grow flex-shrink flex-basis;
flex: 1;        /* flex: 1 1 0% */
flex: 1 0 auto; /* grow:1, shrink:0, basis:auto */
flex: 0 0 200px; /* Ukuran tetap 200px */
\`\`\`

### flex-grow
Seberapa banyak item bisa tumbuh:
\`\`\`css
flex-grow: 1; /* Bisa tumbuh */
flex-grow: 0; /* Tidak tumbuh */
\`\`\`

### flex-shrink
Seberapa banyak item bisa menyusut:
\`\`\`css
flex-shrink: 1; /* Bisa menyusut */
flex-shrink: 0; /* Tidak menyusut */
\`\`\`

### flex-basis
Ukuran awal item:
\`\`\`css
flex-basis: auto;
flex-basis: 200px;
flex-basis: 50%;
\`\`\`

### align-self
Override align-items untuk satu item:
\`\`\`css
align-self: center;
align-self: flex-end;
\`\`\`

### order
Urutan item (default 0, makin kecil makin depan):
\`\`\`css
.item-pertama { order: -1; }
.item-terakhir { order: 1; }
\`\`\`

## Layout Umum dengan Flexbox

### Centering Sempurna
\`\`\`css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
\`\`\`

### Navbar
\`\`\`css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}
\`\`\`

### Card Grid Sederhana
\`\`\`css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.card {
    flex: 1 1 300px; /* Min 300px, bisa tumbuh */
}
\`\`\`

### Sticky Footer
\`\`\`css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    flex: 1; /* Dorong footer ke bawah */
}
\`\`\`
  `,

  quiz: [
    {
      question: "Apa fungsi justify-content di Flexbox?",
      options: [
        "Mengatur alignment vertikal",
        "Mengatur alignment di main axis (horizontal)",
        "Mengatur ukuran item",
        "Mengatur wrap"
      ],
      correctAnswer: 1,
      explanation: "justify-content mengatur posisi item di sepanjang main axis (horizontal default, vertikal jika flex-direction: column)."
    },
    {
      question: "Apa singkatan dari flex: 1?",
      options: [
        "flex: 1 1 auto",
        "flex: 1 0 auto",
        "flex: 1 1 0%",
        "flex: 1 0 0%"
      ],
      correctAnswer: 2,
      explanation: "flex: 1 adalah shorthand untuk flex-grow: 1, flex-shrink: 1, flex-basis: 0%."
    }
  ],

  codeExamples: [
    {
      title: "Layout Flexbox Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial; min-height: 100vh; display: flex; flex-direction: column; }
        
        /* Navbar */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #1572B6;
            color: white;
            padding: 15px 30px;
        }
        .nav-links { display: flex; gap: 20px; list-style: none; }
        .nav-links a { color: white; text-decoration: none; }
        
        /* Main Content */
        main { flex: 1; padding: 30px; }
        
        /* Hero */
        .hero {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-height: 300px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border-radius: 12px;
            margin-bottom: 30px;
        }
        
        /* Card Grid */
        .card-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        .card {
            flex: 1 1 300px;
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        /* Features */
        .features {
            display: flex;
            gap: 30px;
            margin: 30px 0;
        }
        .feature {
            flex: 1;
            text-align: center;
            padding: 20px;
        }
        
        /* Footer */
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 20px;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <h2>Logo</h2>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    
    <main>
        <div class="hero">
            <div>
                <h1>Flexbox Layout</h1>
                <p>Layout modern dengan Flexbox</p>
            </div>
        </div>
        
        <div class="features">
            <div class="feature">
                <h3>🚀 Cepat</h3>
                <p>Flexbox memudahkan pembuatan layout</p>
            </div>
            <div class="feature">
                <h3>📱 Responsif</h3>
                <p>Mudah diatur untuk berbagai ukuran layar</p>
            </div>
            <div class="feature">
                <h3>🎯 Presisi</h3>
                <p>Kontrol penuh atas alignment</p>
            </div>
        </div>
        
        <h2>Artikel Terbaru</h2>
        <div class="card-grid">
            <div class="card">
                <h3>Artikel 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="card">
                <h3>Artikel 2</h3>
                <p>Adipisicing elit sed do eiusmod tempor.</p>
            </div>
            <div class="card">
                <h3>Artikel 3</h3>
                <p>Incididunt ut labore et dolore magna.</p>
            </div>
        </div>
    </main>
    
    <footer>
        <p>&copy; 2026 Flexbox Demo</p>
    </footer>
</body>
</html>`
    }
  ]
};