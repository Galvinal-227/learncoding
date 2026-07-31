export const chapter = {
  slug: "css-blend-modes",
  title: "Blend Modes",
  description: "Pelajari CSS Blend Modes untuk mencampur warna elemen seperti di Photoshop.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Advanced",
  estimatedReadingTime: 10,
  prerequisites: ["css-backgrounds"],
  tags: ["css", "blend-mode", "efek", "photoshop"],
  order: 26,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## CSS Blend Modes

Blend modes mencampur warna elemen yang bertumpuk, mirip blending mode di Photoshop.

## Dua Properti

### mix-blend-mode
Mencampur elemen dengan elemen di belakangnya:
\`\`\`css
.element {
    mix-blend-mode: multiply;
    mix-blend-mode: screen;
    mix-blend-mode: overlay;
    mix-blend-mode: difference;
    mix-blend-mode: exclusion;
    mix-blend-mode: color-dodge;
    mix-blend-mode: color-burn;
}
\`\`\`

### background-blend-mode
Mencampur background-image dengan background-color:
\`\`\`css
.hero {
    background: url('image.jpg') center/cover, linear-gradient(blue, red);
    background-blend-mode: overlay;
}
\`\`\`

## Mode Penting

| Mode | Efek |
|------|------|
| multiply | Gelap, seperti tinta bertumpuk |
| screen | Terang, seperti proyektor |
| overlay | Kombinasi multiply + screen |
| difference | Selisih warna, efek negatif |
| color-dodge | Mencerahkan |

## Contoh Keren

### Teks di Atas Gambar
\`\`\`css
.text-overlay {
    color: white;
    mix-blend-mode: difference;
}
\`\`\`

### Hero Section dengan Blend
\`\`\`css
.hero {
    background: url('hero.jpg') center/cover, #1572B6;
    background-blend-mode: multiply;
}
\`\`\`
  `,

  quiz: [
    {
      question: "Properti mana untuk mencampur elemen dengan latar belakangnya?",
      options: ["filter", "mix-blend-mode", "background-blend-mode", "opacity"],
      correctAnswer: 1,
      explanation: "mix-blend-mode mencampur elemen dengan elemen di belakangnya. background-blend-mode untuk mencampur background layers."
    }
  ],

  codeExamples: [
    {
      title: "Demo Blend Modes",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 20px; }
        
        .hero-blend {
            background: url('https://picsum.photos/800/300') center/cover, #e74c3c;
            background-blend-mode: multiply;
            height: 200px;
            display: flex; align-items: center; justify-content: center;
            color: white; font-size: 2em; font-weight: bold;
            border-radius: 12px;
            margin-bottom: 20px;
        }
        
        .blend-demo {
            display: flex; gap: 20px; flex-wrap: wrap;
        }
        .blend-item {
            width: 120px; height: 80px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 8px;
            display: flex; align-items: center; justify-content: center;
            font-weight: bold; font-size: 14px;
        }
        .multiply { mix-blend-mode: multiply; background: #f39c12; }
        .screen { mix-blend-mode: screen; background: #2ecc71; }
        .overlay { mix-blend-mode: overlay; background: #e74c3c; }
        .difference { mix-blend-mode: difference; background: white; color: white; }
    </style>
</head>
<body>
    <div class="hero-blend">
        Hero dengan Multiply Blend
    </div>
    
    <h3>mix-blend-mode</h3>
    <div class="blend-demo">
        <div class="blend-item multiply">Multiply</div>
        <div class="blend-item screen">Screen</div>
        <div class="blend-item overlay">Overlay</div>
        <div class="blend-item difference">Difference</div>
    </div>
</body>
</html>`
    }
  ]
};