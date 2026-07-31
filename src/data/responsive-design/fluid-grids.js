export const chapter = {
  slug: "fluid-grids",
  title: "Fluid Grids & Layout",
  description: "Membangun layout yang fleksibel dengan fluid grids menggunakan persentase dan unit relatif.",
  icon: "SiCss3",
  color: "#2965F1",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["responsive-introduction", "responsive-mobile-first"],
  tags: ["fluid-grid", "css-grid", "flexbox", "layout"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Fluid Grids?

Fluid grids adalah sistem grid yang menggunakan unit relatif (persentase, rem, em) alih-alih unit fixed (px) sehingga layout dapat menyesuaikan dengan ukuran layar.

## Unit Relatif vs Fixed

**Unit Relatif:**
- % - Persentase dari parent
- em - Ukuran relatif terhadap font-size parent
- rem - Ukuran relatif terhadap root font-size
- vw - Viewport width (1vw = 1% dari lebar viewport)
- vh - Viewport height (1vh = 1% dari tinggi viewport)

**Unit Fixed:**
- px - Pixels
- pt - Points

## CSS Grid untuk Fluid Layouts

\`\`\`css
/* Fluid grid dengan CSS Grid */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Atau dengan persentase */
.grid {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    gap: 20px;
}
\`\`\`

## Flexbox untuk Fluid Layouts

\`\`\`css
/* Flexbox fluid */
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    flex: 1 1 calc(33.33% - 20px);
    min-width: 250px;
}
\`\`\`

## Fluid Typography

\`\`\`css
/* Fluid typography dengan clamp() */
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
}

/* Atau dengan calc() */
p {
    font-size: calc(14px + 0.5vw);
}
\`\`\`

## Contoh Lengkap

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: clamp(10px, 2vw, 40px);
        }
        
        /* Fluid Grid */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: clamp(10px, 2vw, 30px);
        }
        
        .card {
            background: #f4f4f4;
            padding: clamp(15px, 3vw, 30px);
            border-radius: 8px;
        }
        
        /* Fluid Typography */
        h1 {
            font-size: clamp(1.5rem, 5vw, 3rem);
            margin-bottom: clamp(10px, 2vw, 30px);
        }
        
        p {
            font-size: clamp(0.875rem, 1.5vw, 1.125rem);
            line-height: 1.6;
        }
        
        /* Fluid Images */
        img {
            max-width: 100%;
            height: auto;
        }
        
        /* Custom Breakpoints */
        @media (max-width: 600px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Fluid Grid Layout</h1>
        <div class="grid">
            <div class="card">
                <img src="https://via.placeholder.com/400x200" alt="Placeholder">
                <h2>Card Title</h2>
                <p>Content with fluid typography.</p>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/400x200" alt="Placeholder">
                <h2>Card Title</h2>
                <p>Content with fluid typography.</p>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/400x200" alt="Placeholder">
                <h2>Card Title</h2>
                <p>Content with fluid typography.</p>
            </div>
        </div>
    </div>
</body>
</html>
\`\`\`
  `,
  quiz: [
    {
      question: "Unit CSS mana yang BUKAN unit relatif?",
      options: ["%", "em", "rem", "px"],
      correctAnswer: 3
    },
    {
      question: "Apa fungsi 'auto-fit' pada CSS Grid?",
      options: [
        "Membuat grid otomatis",
        "Menyesuaikan jumlah kolom berdasarkan ruang",
        "Membuat semua item sama",
        "Menambah margin otomatis"
      ],
      correctAnswer: 1
    },
    {
      question: "Clamp() digunakan untuk apa?",
      options: [
        "Mengatur warna",
        "Membuat nilai fluid antara min dan max",
        "Menambah animasi",
        "Mengatur margin"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Fluid Grid with CSS Grid",
      code: `/* Responsive Grid with auto-fit */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Specific columns with percentage */
.grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

/* Nested grids */
.grid-nested {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
}

/* Fluid Typography */
.fluid-text {
    font-size: clamp(1rem, 2.5vw, 2rem);
}

/* Fluid spacing */
.fluid-spacing {
    padding: clamp(10px, 5%, 40px);
    margin: clamp(10px, 3vw, 30px) auto;
}`,
      language: "css"
    }
  ]
};