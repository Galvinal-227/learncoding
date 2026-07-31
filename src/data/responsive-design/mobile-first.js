export const chapter = {
  slug: "mobile-first",
  title: "Mobile First Approach",
  description: "Strategi desain yang memprioritaskan perangkat mobile dalam pengembangan website.",
  icon: "SiCss3",
  color: "#2965F1",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["responsive-introduction", "responsive-media-queries"],
  tags: ["mobile-first", "design-strategy", "css", "responsive"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Mobile First?

Mobile first adalah pendekatan desain dimana kita mulai membuat desain untuk perangkat mobile terlebih dahulu, kemudian meningkatkan (progressive enhancement) untuk layar yang lebih besar.

## Keuntungan Mobile First

1. **Performa lebih baik** - Lebih sedikit CSS yang di-load
2. **Fokus pada konten penting** - Memaksa prioritisasi konten
3. **Pengalaman pengguna lebih baik** - Optimal di mobile
4. **Lebih mudah scaling up** - Tambahkan fitur untuk layar lebih besar
5. **SEO Friendly** - Google mengutamakan mobile-friendly

## Implementasi Mobile First

\`\`\`css
/* 1. Mulai dengan CSS dasar untuk mobile */
.container {
    padding: 10px;
    display: block;
}

/* 2. Tambahkan untuk tablet */
@media (min-width: 768px) {
    .container {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

/* 3. Tambahkan untuk desktop */
@media (min-width: 1024px) {
    .container {
        padding: 40px;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1200px;
        margin: 0 auto;
    }
}
\`\`\`

## Perbedaan Mobile First vs Desktop First

| Mobile First | Desktop First |
|--------------|---------------|
| min-width | max-width |
| Progressive enhancement | Graceful degradation |
| Mobile dulu | Desktop dulu |
| Lebih ringan | Lebih berat |
| Performance better | Performance worse |

## Contoh Lengkap

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Mobile First */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        
        .nav {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 20px;
            background: #333;
        }
        
        .nav a {
            color: white;
            text-decoration: none;
            padding: 10px;
            text-align: center;
        }
        
        .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
        }
        
        .card {
            background: #f4f4f4;
            padding: 20px;
            border-radius: 8px;
        }
        
        /* Tablet */
        @media (min-width: 768px) {
            .nav {
                flex-direction: row;
                justify-content: space-around;
            }
            
            .grid {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
            .container {
                max-width: 1200px;
                margin: 0 auto;
            }
            
            .grid {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
    </style>
</head>
<body>
    <nav class="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>
    <div class="container">
        <div class="grid">
            <div class="card"><h3>Card 1</h3><p>Content</p></div>
            <div class="card"><h3>Card 2</h3><p>Content</p></div>
            <div class="card"><h3>Card 3</h3><p>Content</p></div>
        </div>
    </div>
</body>
</html>
\`\`\`
  `,
  quiz: [
    { 
      question: "Prinsip mobile first dimulai dari?", 
      options: [
        "Desktop",
        "Mobile",
        "Tablet",
        "TV"
      ], 
      correctAnswer: 1 
    },
    { 
      question: "Media query yang digunakan untuk mobile first?", 
      options: [
        "max-width",
        "min-width",
        "max-height",
        "orientation"
      ], 
      correctAnswer: 1 
    },
    {
      question: "Keuntungan mobile first adalah?",
      options: [
        "Lebih banyak fitur",
        "Performa lebih baik",
        "Desain lebih kompleks",
        "Membutuhkan lebih banyak CSS"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Mobile First Layout",
      code: `/* 1. Mobile First (default) */
.header { padding: 10px; }
.nav { display: block; }
.content { padding: 10px; }
.sidebar { display: none; }

/* 2. Tablet (min-width: 768px) */
@media (min-width: 768px) {
    .header { padding: 20px; }
    .nav { display: flex; gap: 20px; }
    .content { padding: 20px; }
    .sidebar { display: block; }
}

/* 3. Desktop (min-width: 1024px) */
@media (min-width: 1024px) {
    .container { 
        display: grid; 
        grid-template-columns: 2fr 1fr; 
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .header { padding: 30px; }
}`,
      language: "css"
    }
  ]
};