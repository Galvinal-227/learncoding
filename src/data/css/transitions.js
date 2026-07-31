export const chapter = {
  slug: "css-transitions",
  title: "Transition",
  description: "Pelajari cara membuat animasi halus antar state dengan CSS Transitions.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["css-syntax"],
  tags: ["css", "transisi", "animasi", "halus"],
  order: 23,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## CSS Transitions

Transitions memungkinkan perubahan properti CSS terjadi secara **halus** dalam durasi tertentu.

## Sintaks Dasar

\`\`\`css
transition: property duration timing-function delay;
\`\`\`

## Properti Transition

### transition-property
Properti apa yang ditransisikan:
\`\`\`css
transition-property: background;
transition-property: all;
transition-property: opacity, transform;
\`\`\`

### transition-duration
Berapa lama transisi berlangsung:
\`\`\`css
transition-duration: 0.3s;
transition-duration: 300ms;
transition-duration: 1s;
\`\`\`

### transition-timing-function
Kurva kecepatan transisi:
\`\`\`css
transition-timing-function: ease;         /* Default */
transition-timing-function: ease-in;      /* Mulai lambat */
transition-timing-function: ease-out;     /* Akhiri lambat */
transition-timing-function: ease-in-out;  /* Lambat di awal & akhir */
transition-timing-function: linear;       /* Kecepatan konstan */
transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
\`\`\`

### transition-delay
Jeda sebelum transisi dimulai:
\`\`\`css
transition-delay: 0.2s;
transition-delay: 0s;
\`\`\`

## Shorthand

\`\`\`css
transition: property duration timing-function delay;
transition: opacity 0.3s ease;
transition: all 0.3s ease-in-out;
transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
\`\`\`

## Multiple Transitions

\`\`\`css
.button {
    transition: background 0.3s ease,
                transform 0.2s ease,
                box-shadow 0.3s ease;
}

.button:hover {
    background: #1572B6;
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}
\`\`\`

## Properti yang Bisa Ditransisikan

- **Warna**: color, background-color, border-color
- **Ukuran**: width, height, padding, margin
- **Posisi**: top, left, right, bottom
- **Transformasi**: transform, rotate, scale
- **Visibilitas**: opacity, visibility
- **Lainnya**: box-shadow, border-radius, filter

⚠️ **Tidak bisa**: display, background-image, font-family

## Efek Transisi Keren

### Card Hover
\`\`\`css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}
\`\`\`

### Button Ripple
\`\`\`css
.button {
    position: relative;
    overflow: hidden;
    transition: background 0.3s;
}
.button::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.3);
    transform: scale(0);
    transition: transform 0.3s;
}
.button:hover::after {
    transform: scale(1);
}
\`\`\`
  `,

  quiz: [
    {
      question: "Properti mana yang TIDAK bisa ditransisikan?",
      options: ["opacity", "transform", "display", "background"],
      correctAnswer: 2,
      explanation: "display tidak bisa ditransisikan karena nilainya diskrit (none, block, dll). Gunakan opacity + visibility untuk efek fade."
    },
    {
      question: "Apa fungsi transition-timing-function?",
      options: [
        "Menentukan durasi transisi",
        "Menentukan kurva kecepatan transisi",
        "Menentukan properti yang ditransisi",
        "Menentukan delay"
      ],
      correctAnswer: 1,
      explanation: "transition-timing-function mengontrol akselerasi transisi (ease, linear, ease-in-out, dll)."
    }
  ],

  codeExamples: [
    {
      title: "Galeri Transisi",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 40px; display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; background: #f5f5f5; }
        
        .card {
            width: 250px; background: white; border-radius: 12px;
            padding: 30px; text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }
        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .btn {
            padding: 12px 24px; border: none; border-radius: 6px;
            color: white; cursor: pointer; font-size: 16px;
            transition: all 0.3s ease;
        }
        .btn-primary { background: #1572B6; }
        .btn-primary:hover { background: #0d5a91; transform: scale(1.05); }
        
        .btn-gradient {
            background: linear-gradient(135deg, #667eea, #764ba2);
            background-size: 100% 100%;
            transition: background-size 0.5s ease;
        }
        .btn-gradient:hover { background-size: 150% 150%; }
        
        .fade-box {
            background: white; padding: 30px; border-radius: 8px;
            opacity: 0.5; transition: opacity 0.5s ease;
        }
        .fade-box:hover { opacity: 1; }
        
        .scale-img {
            width: 200px; height: 200px; object-fit: cover; border-radius: 12px;
            transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .scale-img:hover { transform: scale(1.2) rotate(5deg); }
    </style>
</head>
<body>
    <div class="card">
        <h3>Card Hover</h3>
        <p>Terangkat saat hover</p>
    </div>
    
    <div>
        <button class="btn btn-primary">Button Scale</button>
        <br><br>
        <button class="btn btn-gradient">Button Gradient</button>
    </div>
    
    <div class="fade-box">
        <h3>Fade In</h3>
        <p>Opacity bertambah</p>
    </div>
    
    <img class="scale-img" src="https://picsum.photos/400" alt="Gambar">
</body>
</html>`
    }
  ]
};