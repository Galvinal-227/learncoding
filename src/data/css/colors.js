export const chapter = {
  slug: "css-colors",
  title: "Warna di CSS",
  description: "Pelajari berbagai format warna di CSS: keyword, hex, RGB, HSL, dan cara menggunakannya.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["css-syntax"],
  tags: ["css", "warna", "color", "hex", "rgb"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Format Warna di CSS

CSS mendukung berbagai cara untuk mendefinisikan warna.

### 1. Color Keywords
\`\`\`css
color: red;
color: blue;
color: transparent;
color: currentColor; /* Warna teks saat ini */
\`\`\`

### 2. Hexadecimal (Hex)
\`\`\`css
color: #FF0000;      /* Merah */
color: #00FF00;      /* Hijau */
color: #0000FF;      /* Biru */
color: #f00;         /* Shorthand: #ff0000 */
color: #1572B6;      /* Warna kustom */
color: #000;         /* #000000 */
color: #fff;         /* #ffffff */
\`\`\`

### 3. RGB dan RGBA
\`\`\`css
color: rgb(255, 0, 0);           /* Merah */
color: rgb(0, 255, 0);           /* Hijau */
color: rgb(21, 114, 182);        /* Biru kustom */
color: rgba(255, 0, 0, 0.5);    /* Merah 50% transparan */
color: rgba(0, 0, 0, 0.1);      /* Hitam 10% opacity */
\`\`\`

### 4. HSL dan HSLA
\`\`\`css
color: hsl(0, 100%, 50%);        /* Merah */
color: hsl(120, 100%, 50%);      /* Hijau */
color: hsl(240, 100%, 50%);      /* Biru */
color: hsla(0, 100%, 50%, 0.5);  /* Merah transparan */
\`\`\`
- **H**ue (0-360): Jenis warna
- **S**aturation (0-100%): Intensitas
- **L**ightness (0-100%): Kecerahan

### 5. Format Modern
\`\`\`css
/* RGB tanpa koma (CSS4) */
color: rgb(255 0 0);
color: rgb(255 0 0 / 0.5);

/* HSL tanpa koma */
color: hsl(0 100% 50%);
color: hsl(0 100% 50% / 0.5);

/* HWB */
color: hwb(0 0% 0%); /* Merah */

/* LAB */
color: lab(50% 50 0);
\`\`\`

## Properti yang Menggunakan Warna

\`\`\`css
color: #333;              /* Warna teks */
background-color: #f5f5f5; /* Warna latar */
border-color: #ddd;        /* Warna border */
outline-color: blue;       /* Warna outline */
box-shadow: 0 0 10px rgba(0,0,0,0.3); /* Warna bayangan */
text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
\`\`\`

## Gradien

### Linear Gradient
\`\`\`css
background: linear-gradient(to right, red, blue);
background: linear-gradient(45deg, red, orange, yellow);
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
\`\`\`

### Radial Gradient
\`\`\`css
background: radial-gradient(circle, red, blue);
background: radial-gradient(circle at center, white, #f0f0f0, #ccc);
\`\`\`

### Conic Gradient
\`\`\`css
background: conic-gradient(red, yellow, green, blue, red);
background: conic-gradient(from 45deg, red, blue);
\`\`\`

## Variabel Warna

\`\`\`css
:root {
    --primary: #1572B6;
    --primary-dark: #0d5a91;
    --primary-light: #4a90d9;
    --danger: #e74c3c;
    --success: #2ecc71;
    --warning: #f39c12;
    --text: #333;
    --text-light: #666;
    --bg: #f5f5f5;
}

.button {
    background: var(--primary);
    color: white;
}

.button--danger {
    background: var(--danger);
}
\`\`\`

## Tips Memilih Warna

1. **Gunakan palette tools**: Coolors.co, Adobe Color
2. **60-30-10 rule**: 60% warna dominan, 30% sekunder, 10% aksen
3. **Contras yang cukup**: Minimal 4.5:1 untuk teks normal
4. **Konsistensi**: Gunakan variabel CSS
  `,

  quiz: [
    {
      question: "Format warna mana yang memungkinkan transparansi?",
      options: ["Hex", "rgb()", "rgba()", "Keyword"],
      correctAnswer: 2,
      explanation: "rgba() memiliki parameter ke-4 (alpha) untuk mengatur transparansi (0-1)."
    },
    {
      question: "Apa kepanjangan HSL?",
      options: [
        "Height Saturation Light",
        "Hue Saturation Lightness",
        "High Speed Light",
        "Hot Style Layout"
      ],
      correctAnswer: 1,
      explanation: "HSL adalah Hue (jenis warna), Saturation (intensitas), Lightness (kecerahan)."
    }
  ],

  codeExamples: [
    {
      title: "Palette Warna dengan CSS Variables",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        :root {
            --primary: #1572B6;
            --secondary: #2ecc71;
            --danger: #e74c3c;
            --dark: #2c3e50;
            --light: #ecf0f1;
        }
        body { font-family: Arial; margin: 20px; background: var(--light); }
        .palette { display: flex; gap: 10px; margin: 20px 0; }
        .swatch {
            width: 100px; height: 100px; border-radius: 8px;
            display: flex; align-items: center; justify-content: center;
            color: white; font-weight: bold;
        }
        .btn {
            padding: 10px 20px; border: none; border-radius: 6px;
            color: white; cursor: pointer; margin: 5px;
        }
        .btn-primary { background: var(--primary); }
        .btn-secondary { background: var(--secondary); }
        .btn-danger { background: var(--danger); }
        
        .gradient-box {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            padding: 40px; border-radius: 10px; color: white; text-align: center;
        }
    </style>
</head>
<body>
    <h1>Demo Warna CSS</h1>
    
    <h3>Palette</h3>
    <div class="palette">
        <div class="swatch" style="background: var(--primary)">Primary</div>
        <div class="swatch" style="background: var(--secondary)">Success</div>
        <div class="swatch" style="background: var(--danger)">Danger</div>
        <div class="swatch" style="background: var(--dark)">Dark</div>
    </div>
    
    <h3>Buttons</h3>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Success</button>
    <button class="btn btn-danger">Danger</button>
    
    <h3>Gradient</h3>
    <div class="gradient-box">
        <h2>Gradien CSS</h2>
        <p>Linear gradient dari primary ke secondary</p>
    </div>
</body>
</html>`
    }
  ]
};