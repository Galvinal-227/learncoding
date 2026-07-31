export const chapter = {
  slug: "css-transforms",
  title: "Transform",
  description: "Kuasai CSS Transform untuk memanipulasi elemen dengan translate, rotate, scale, dan skew.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["css-transitions"],
  tags: ["css", "transform", "rotate", "scale", "translate"],
  order: 22,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## CSS Transform

Transform memungkinkan kamu memanipulasi elemen: menggeser, memutar, memperbesar, dan memiringkan.

## Fungsi Transform

### translate() - Menggeser
\`\`\`css
transform: translateX(50px);      /* Geser kanan */
transform: translateY(-20px);     /* Geser atas */
transform: translate(50px, -20px); /* X dan Y */
transform: translate(50px, 0);    /* Hanya X */

/* Centering trick */
transform: translate(-50%, -50%); /* Relatif ke ukuran sendiri */
\`\`\`

### rotate() - Memutar
\`\`\`css
transform: rotate(45deg);      /* Putar 45° */
transform: rotate(-90deg);     /* Putar -90° */
transform: rotate(0.5turn);    /* Setengah putaran */
transform: rotate(3.14rad);    /* Radian */
\`\`\`

### scale() - Memperbesar/Memperkecil
\`\`\`css
transform: scale(1.5);         /* 150% */
transform: scale(0.5);         /* 50% */
transform: scaleX(1.5);        /* Lebar saja */
transform: scaleY(0.5);        /* Tinggi saja */
transform: scale(1.2, 0.8);    /* X dan Y berbeda */
\`\`\`

### skew() - Memiringkan
\`\`\`css
transform: skewX(10deg);
transform: skewY(5deg);
transform: skew(10deg, 5deg);
\`\`\`

## Kombinasi Transform

\`\`\`css
/* Urutan penting! */
transform: translateX(50px) rotate(45deg) scale(1.2);
transform: rotate(45deg) translateX(50px); /* Berbeda! */
\`\`\`

## transform-origin

Titik pusat transformasi:
\`\`\`css
transform-origin: center;       /* Default */
transform-origin: top left;
transform-origin: bottom right;
transform-origin: 50% 50%;
transform-origin: 0 0;         /* Pojok kiri atas */
transform-origin: 100% 100%;   /* Pojok kanan bawah */
\`\`\`

## Transform vs Position

✅ Gunakan transform untuk animasi (performa lebih baik)
❌ Jangan gunakan top/left untuk animasi

\`\`\`css
/* ✅ Performa baik */
.element { transition: transform 0.3s; }
.element:hover { transform: translateY(-5px); }

/* ❌ Performa buruk */
.element { transition: top 0.3s; }
.element:hover { top: -5px; }
\`\`\`

## Trik dengan Transform

### Centering Perfect
\`\`\`css
.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
\`\`\`

### Card Flip
\`\`\`css
.card {
    transition: transform 0.6s;
    transform-style: preserve-3d;
}
.card.flipped {
    transform: rotateY(180deg);
}
\`\`\`

### Hover Zoom Gambar
\`\`\`css
.img-container { overflow: hidden; }
.img-container img { transition: transform 0.5s; }
.img-container:hover img { transform: scale(1.1); }
\`\`\`
  `,

  quiz: [
    {
      question: "Kenapa transform lebih baik untuk animasi daripada top/left?",
      options: [
        "Lebih mudah ditulis",
        "Hanya trigger composite, tidak trigger layout/paint",
        "Lebih cepat di semua browser",
        "Tidak ada perbedaan"
      ],
      correctAnswer: 1,
      explanation: "transform hanya memicu composite step di rendering pipeline, tidak memicu layout atau paint ulang, sehingga lebih performant."
    },
    {
      question: "Urutan fungsi transform penting karena?",
      options: [
        "Tidak penting",
        "Transformasi diterapkan berurutan, mengubah hasil akhir",
        "Browser membatasi urutan",
        "Hanya di Chrome"
      ],
      correctAnswer: 1,
      explanation: "rotate dulu lalu translate akan menghasilkan posisi berbeda dibanding translate dulu lalu rotate karena sumbu berubah setelah rotasi."
    }
  ],

  codeExamples: [
    {
      title: "Demo Transform Kreatif",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 40px; display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; }
        
        .card {
            width: 150px; height: 200px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 12px;
            display: flex; align-items: center; justify-content: center;
            color: white; font-weight: bold;
            transition: transform 0.5s ease;
            cursor: pointer;
        }
        
        .translate:hover { transform: translateY(-15px); }
        .rotate:hover { transform: rotate(15deg); }
        .scale:hover { transform: scale(1.1); }
        .skew:hover { transform: skew(-5deg); }
        .combo:hover { transform: translateY(-10px) rotate(5deg) scale(1.05); }
        
        .origin-demo {
            width: 100px; height: 100px;
            background: #e74c3c; border-radius: 8px;
            transition: transform 0.5s ease;
            transform-origin: top left;
        }
        .origin-demo:hover { transform: rotate(45deg); }
    </style>
</head>
<body>
    <div class="card translate">Translate</div>
    <div class="card rotate">Rotate</div>
    <div class="card scale">Scale</div>
    <div class="card skew">Skew</div>
    <div class="card combo">Combo</div>
    <div class="origin-demo"></div>
</body>
</html>`
    }
  ]
};