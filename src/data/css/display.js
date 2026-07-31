export const chapter = {
  slug: "css-display",
  title: "Display",
  description: "Kuasai properti display CSS untuk mengontrol bagaimana elemen ditampilkan.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["css-box-model"],
  tags: ["css", "display", "layout"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Properti Display

Properti \`display\` menentukan **bagaimana elemen ditampilkan** di halaman. Ini adalah salah satu properti paling fundamental di CSS.

## Nilai Display Utama

### display: block
- Dimulai di baris baru
- Mengambil lebar penuh parent
- Bisa diatur width dan height
\`\`\`css
div, p, h1, section, header, footer {
    display: block;
}
\`\`\`

### display: inline
- Tidak dimulai di baris baru
- Hanya mengambil lebar konten
- Width dan height TIDAK berpengaruh
\`\`\`css
span, a, strong, em {
    display: inline;
}
\`\`\`

### display: inline-block
- Seperti inline (tidak baris baru)
- Tapi bisa diatur width dan height
- Bisa diatur margin/padding vertikal
\`\`\`css
.button {
    display: inline-block;
    width: 150px;
    padding: 10px;
}
\`\`\`

### display: none
- Elemen tidak ditampilkan
- Tidak mengambil ruang di layout
- Berbeda dengan \`visibility: hidden\` (tetap ambil ruang)
\`\`\`css
.hidden { display: none; }
.invisible { visibility: hidden; } /* Masih ambil ruang */
\`\`\`

## Display Modern

### display: flex
Layout satu dimensi (baris atau kolom):
\`\`\`css
.container {
    display: flex;
    gap: 20px;
}
\`\`\`

### display: grid
Layout dua dimensi (baris dan kolom):
\`\`\`css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
\`\`\`

### display: inline-flex / inline-grid
Seperti flex/grid tapi berperilaku inline:
\`\`\`css
.container {
    display: inline-flex;
}
\`\`\`

## Tabel Perbandingan

| Display | Baris Baru | Width/Height | Margin Vertikal |
|---------|------------|--------------|-----------------|
| block | Ya | Bisa | Bisa |
| inline | Tidak | Tidak bisa | Tidak bisa |
| inline-block | Tidak | Bisa | Bisa |
| none | - | - | Hilang total |
| flex | Ya | Bisa (flex item) | Bisa |
| grid | Ya | Bisa (grid item) | Bisa |

## Visibilitas vs Display

\`\`\`css
/* Hilang total, tidak ambil ruang */
.element { display: none; }

/* Tidak terlihat, tapi tetap ambil ruang */
.element { visibility: hidden; }

/* Transparan penuh */
.element { opacity: 0; }
\`\`\`

## Centering dengan Display

### Horizontal Center (inline/inline-block)
\`\`\`css
.parent { text-align: center; }
\`\`\`

### Horizontal Center (block)
\`\`\`css
.element {
    width: 500px;
    margin: 0 auto;
}
\`\`\`

### Center Sempurna (flex)
\`\`\`css
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
\`\`\`
  `,

  quiz: [
    {
      question: "Apa perbedaan display: none dan visibility: hidden?",
      options: [
        "Tidak ada perbedaan",
        "none: hilang total; hidden: tetap ambil ruang",
        "hidden: hilang total; none: tetap ambil ruang",
        "Tergantung browser"
      ],
      correctAnswer: 1,
      explanation: "display: none menghilangkan elemen sepenuhnya dari layout. visibility: hidden menyembunyikan elemen tapi masih mengambil ruang."
    },
    {
      question: "Display apa yang cocok untuk membuat navigasi horizontal?",
      options: ["block", "inline", "inline-block", "none"],
      correctAnswer: 2,
      explanation: "inline-block cocok untuk nav horizontal karena elemen sejajar horizontal tapi tetap bisa diatur width, padding, dan marginnya."
    }
  ],

  codeExamples: [
    {
      title: "Demo Semua Display",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 20px; }
        .demo { margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 8px; }
        
        .block { display: block; background: #e3f2fd; padding: 10px; margin: 5px 0; }
        .inline { display: inline; background: #e8f5e9; padding: 5px; margin: 5px; }
        .inline-block { display: inline-block; background: #fff3e0; padding: 10px 20px; margin: 5px; }
        
        .flex-container { display: flex; gap: 10px; }
        .flex-item { background: #f3e5f5; padding: 20px; text-align: center; flex: 1; }
        
        .grid-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .grid-item { background: #e0f7fa; padding: 20px; text-align: center; }
        
        .nav-inline-block a {
            display: inline-block;
            padding: 10px 20px;
            background: #1572B6;
            color: white;
            text-decoration: none;
            margin: 2px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>Demo Display CSS</h1>
    
    <div class="demo">
        <h3>display: block</h3>
        <div class="block">Block 1</div>
        <div class="block">Block 2</div>
        <div class="block">Block 3</div>
    </div>
    
    <div class="demo">
        <h3>display: inline</h3>
        <span class="inline">Inline 1</span>
        <span class="inline">Inline 2</span>
        <span class="inline">Inline 3</span>
    </div>
    
    <div class="demo">
        <h3>display: inline-block (Navigasi)</h3>
        <nav class="nav-inline-block">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </div>
    
    <div class="demo">
        <h3>display: flex</h3>
        <div class="flex-container">
            <div class="flex-item">Flex 1</div>
            <div class="flex-item">Flex 2</div>
            <div class="flex-item">Flex 3</div>
        </div>
    </div>
    
    <div class="demo">
        <h3>display: grid</h3>
        <div class="grid-container">
            <div class="grid-item">Grid 1</div>
            <div class="grid-item">Grid 2</div>
            <div class="grid-item">Grid 3</div>
        </div>
    </div>
</body>
</html>`
    }
  ]
};