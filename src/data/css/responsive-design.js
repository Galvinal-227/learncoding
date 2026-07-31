export const chapter = {
  slug: "css-responsive-design",
  title: "Responsive Design",
  description: "Pelajari cara membuat website yang tampil sempurna di semua ukuran layar.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["css-flexbox", "css-grid"],
  tags: ["css", "responsif", "mobile", "adaptive"],
  order: 17,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Responsive Design?

Responsive Design adalah pendekatan desain web yang membuat halaman tampil baik di semua perangkat (desktop, tablet, mobile) dengan satu kode HTML/CSS.

## Prinsip Utama

1. **Fluid Grids** - Gunakan unit relatif (% vw, fr) bukan fixed (px)
2. **Flexible Images** - Gambar menyesuaikan wadah
3. **Media Queries** - Aturan CSS berdasarkan ukuran layar

## Mobile-First Approach

Mulai desain dari layar terkecil, lalu tambahkan complexity untuk layar lebih besar:

\`\`\`css
/* Mobile first (default) */
.card {
    width: 100%;
    padding: 15px;
}

/* Tablet ke atas */
@media (min-width: 768px) {
    .card {
        width: 50%;
        padding: 20px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .card {
        width: 33.333%;
        padding: 30px;
    }
}
\`\`\`

## Unit Responsif

### Viewport Units
\`\`\`css
width: 100vw;       /* 100% lebar viewport */
height: 100vh;      /* 100% tinggi viewport */
height: 100dvh;     /* Dynamic viewport height (mobile) */
font-size: clamp(1rem, 2.5vw, 2rem); /* Responsif dengan batas */
\`\`\`

### Persentase
\`\`\`css
width: 100%;
max-width: 1200px;
margin: 0 auto;
\`\`\`

### CSS Grid/Flex Responsif
\`\`\`css
/* Grid auto-fit */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* Flex wrap */
display: flex;
flex-wrap: wrap;
\`\`\`

## Gambar Responsif

\`\`\`css
img {
    max-width: 100%;
    height: auto;
}
\`\`\`

\`\`\`html
<img srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
     src="default.jpg" alt="Responsif">
\`\`\`

## Breakpoint Umum

\`\`\`css
/* Mobile Small */     @media (max-width: 375px) { }
/* Mobile */           @media (max-width: 576px) { }
/* Tablet */           @media (min-width: 768px) { }
/* Desktop */          @media (min-width: 1024px) { }
/* Desktop Large */    @media (min-width: 1200px) { }
/* Desktop X-Large */  @media (min-width: 1400px) { }
\`\`\`

## Container Pattern

\`\`\`css
.container {
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
}

@media (min-width: 576px)  { .container { max-width: 540px; } }
@media (min-width: 768px)  { .container { max-width: 720px; } }
@media (min-width: 992px)  { .container { max-width: 960px; } }
@media (min-width: 1200px) { .container { max-width: 1140px; } }
\`\`\`

## clamp() untuk Tipografi Responsif

\`\`\`css
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }
p  { font-size: clamp(1rem, 2vw, 1.25rem); }
\`\`\`

## Testing Responsif

1. **Chrome DevTools** - Toggle device toolbar (Ctrl+Shift+M)
2. **Resize browser** - Seret tepi jendela
3. **Device nyata** - Test di smartphone dan tablet
4. **Online tools** - BrowserStack, Responsinator
  `,

  quiz: [
    {
      question: "Apa itu pendekatan Mobile-First?",
      options: [
        "Desain desktop dulu, baru mobile",
        "Mulai dari layar terkecil, lalu tambahkan untuk layar besar",
        "Hanya desain untuk mobile",
        "Aplikasi native"
      ],
      correctAnswer: 1,
      explanation: "Mobile-First berarti mendesain untuk mobile dulu sebagai default, lalu menggunakan min-width media queries untuk layar lebih besar."
    },
    {
      question: "Fungsi CSS mana yang membuat font size responsif dengan batas?",
      options: ["calc()", "minmax()", "clamp()", "var()"],
      correctAnswer: 2,
      explanation: "clamp(min, preferred, max) membuat nilai responsif yang tidak lebih kecil dari min dan tidak lebih besar dari max."
    }
  ],

  codeExamples: [
    {
      title: "Halaman Responsif Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial; }
        
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        /* Navbar responsif */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: #1572B6;
            color: white;
        }
        .nav-links { display: flex; gap: 20px; list-style: none; }
        .nav-links a { color: white; text-decoration: none; }
        .menu-toggle { display: none; background: none; border: none; color: white; font-size: 1.5em; cursor: pointer; }
        
        /* Hero responsif */
        .hero {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            text-align: center;
            padding: clamp(40px, 8vw, 100px) 20px;
        }
        .hero h1 { font-size: clamp(1.5rem, 5vw, 3rem); }
        
        /* Grid responsif */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 40px 0;
        }
        .card {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        @media (max-width: 768px) {
            .nav-links { display: none; }
            .menu-toggle { display: block; }
            .nav-links.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 60px;
                left: 0;
                right: 0;
                background: #1572B6;
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <h2>Logo</h2>
        <button class="menu-toggle">☰</button>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    
    <div class="hero">
        <h1>Website Responsif</h1>
        <p>Tampil sempurna di semua perangkat</p>
    </div>
    
    <div class="container">
        <div class="card-grid">
            <div class="card"><h3>Card 1</h3><p>Responsif otomatis</p></div>
            <div class="card"><h3>Card 2</h3><p>Dengan CSS Grid</p></div>
            <div class="card"><h3>Card 3</h3><p>Auto-fit columns</p></div>
        </div>
    </div>
</body>
</html>`
    }
  ]
};