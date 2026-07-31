export const chapter = {
  slug: "introduction",
  title: "Pengenalan Responsive Design",
  description: "Memahami konsep dasar responsive design dan mengapa penting dalam pengembangan web modern.",
  icon: "SiCss3",
  color: "#2965F1",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["responsive-design", "css", "web-development"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Responsive Design?

Responsive design adalah pendekatan dalam pengembangan web yang membuat tampilan website dapat menyesuaikan diri dengan berbagai ukuran layar dan perangkat. Tujuannya adalah memberikan pengalaman pengguna yang optimal, baik di desktop, tablet, maupun smartphone.

## Mengapa Responsive Design Penting?

Dengan meningkatnya penggunaan perangkat mobile, responsive design menjadi keharusan. Website yang tidak responsif akan sulit diakses, mengurangi kepuasan pengguna, dan berdampak negatif pada SEO.

## Prinsip Dasar Responsive Design

Tiga prinsip utama:

1. **Fluid Grid** - Grid fleksibel yang menggunakan unit relatif
2. **Flexible Images** - Gambar yang dapat menyesuaikan ukuran
3. **Media Queries** - CSS untuk kondisi tertentu

## Tools Testing Responsive

Beberapa tools untuk testing:
- Chrome DevTools
- Firefox Developer Tools
- BrowserStack
- Responsively App

## Contoh Dasar

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Base CSS */
        body { font-family: Arial, sans-serif; }
        
        /* Responsive */
        @media (max-width: 600px) {
            body { font-size: 14px; }
        }
    </style>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Ini adalah website responsif.</p>
</body>
</html>
\`\`\`
  `,
  quiz: [
    { 
      question: "Apa tujuan utama dari responsive design?", 
      options: [
        "Membuat website lebih cepat", 
        "Membuat website dapat diakses di semua perangkat", 
        "Membuat website lebih aman", 
        "Mengurangi biaya hosting"
      ], 
      correctAnswer: 1 
    },
    { 
      question: "Manakah yang BUKAN prinsip responsive design?", 
      options: [
        "Fluid grid", 
        "Flexible images", 
        "Media queries", 
        "Static layout"
      ], 
      correctAnswer: 3 
    },
    {
      question: "Apa fungsi meta viewport?",
      options: [
        "Mengatur warna background",
        "Mengontrol layout di perangkat mobile",
        "Mengatur font size",
        "Menambahkan footer"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Basic Responsive Template",
      code: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        
        @media (min-width: 768px) {
            .grid { grid-template-columns: 1fr 1fr; }
        }
        
        @media (min-width: 1024px) {
            .grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        
        .card { 
            background: #f4f4f4; 
            padding: 20px; 
            border-radius: 8px; 
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Responsive Grid</h1>
        <div class="grid">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
        </div>
    </div>
</body>
</html>`,
      language: "html"
    }
  ]
};