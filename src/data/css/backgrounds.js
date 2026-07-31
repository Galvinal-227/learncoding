export const chapter = {
  slug: "css-backgrounds",
  title: "Background",
  description: "Kuasai semua properti background CSS: warna, gambar, gradien, posisi, dan ukuran.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["css-colors"],
  tags: ["css", "background", "gradien", "gambar"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Properti Background

CSS menyediakan banyak properti untuk mengontrol latar belakang elemen.

## Background Color

\`\`\`css
background-color: #1572B6;
background-color: rgb(21, 114, 182);
background-color: transparent;
\`\`\`

## Background Image

\`\`\`css
background-image: url('gambar.jpg');
background-image: linear-gradient(red, blue);
background-image: url('bg.jpg'), linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
\`\`\`

## Background Repeat

\`\`\`css
background-repeat: repeat;       /* Default - mengulang */
background-repeat: no-repeat;    /* Tidak mengulang */
background-repeat: repeat-x;     /* Hanya horizontal */
background-repeat: repeat-y;     /* Hanya vertikal */
background-repeat: space;        /* Ulang dengan spasi */
background-repeat: round;        /* Ulang tanpa potongan */
\`\`\`

## Background Position

\`\`\`css
background-position: center;
background-position: top left;
background-position: bottom right;
background-position: 50% 50%;
background-position: 20px 50px;
background-position: left 20px top 10px;
\`\`\`

## Background Size

\`\`\`css
background-size: auto;           /* Ukuran asli */
background-size: cover;          /* Menutupi seluruh area */
background-size: contain;        /* Memuat seluruh gambar */
background-size: 100% 100%;      /* Stretch */
background-size: 200px 150px;    /* Ukuran spesifik */
\`\`\`

## Background Attachment

\`\`\`css
background-attachment: scroll;   /* Ikut scroll (default) */
background-attachment: fixed;    /* Tetap di tempat */
background-attachment: local;    /* Ikut scroll konten */
\`\`\`

## Background Origin dan Clip

\`\`\`css
/* Origin: mulai dari mana */
background-origin: padding-box;  /* Dari padding (default) */
background-origin: border-box;   /* Dari border */
background-origin: content-box;  /* Dari content */

/* Clip: dipotong sampai mana */
background-clip: border-box;     /* Sampai border (default) */
background-clip: padding-box;    /* Sampai padding */
background-clip: content-box;    /* Sampai content */
background-clip: text;           /* Hanya di area teks! */
\`\`\`

## Background Shorthand

\`\`\`css
/* Format: color image repeat position/size attachment origin clip */
background: #f5f5f5 url('bg.jpg') no-repeat center/cover fixed;
\`\`\`

## Multiple Backgrounds

\`\`\`css
background:
    url('overlay.png') repeat-x top,
    url('pattern.png') repeat,
    linear-gradient(to bottom, #667eea, #764ba2);
\`\`\`

## Efek Keren dengan Background

### Gradient Text
\`\`\`css
.gradient-text {
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
\`\`\`

### Hero Section
\`\`\`css
.hero {
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                url('hero.jpg') center/cover no-repeat;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
\`\`\`

### Pattern Background
\`\`\`css
.pattern {
    background-color: #f5f5f5;
    background-image: 
        linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
        linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
        linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
\`\`\`
  `,

  quiz: [
    {
      question: "Nilai background-size apa yang membuat gambar menutupi seluruh area tanpa merusak rasio?",
      options: ["contain", "cover", "100% 100%", "auto"],
      correctAnswer: 1,
      explanation: "cover memastikan gambar menutupi seluruh area elemen tanpa merusak rasio aspek, meskipun sebagian gambar mungkin terpotong."
    },
    {
      question: "Bagaimana cara membuat gradien linear dari kiri ke kanan?",
      options: [
        "linear-gradient(left, red, blue)",
        "linear-gradient(to right, red, blue)",
        "linear-gradient(horizontal, red, blue)",
        "linear-gradient(90px, red, blue)"
      ],
      correctAnswer: 1,
      explanation: "Gunakan 'to right' (atau 'to left', 'to top', 'to bottom', atau sudut) untuk menentukan arah gradien."
    }
  ],

  codeExamples: [
    {
      title: "Background Kreatif",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { margin: 0; font-family: Arial; }
        
        .hero {
            background: linear-gradient(135deg, rgba(102,126,234,0.9), rgba(118,75,162,0.9)),
                        url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200') center/cover;
            min-height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
        }
        
        .hero h1 { font-size: 3em; margin: 0; }
        
        .gradient-text {
            font-size: 4em;
            font-weight: bold;
            background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
            margin: 40px 0;
        }
        
        .cards {
            display: flex; gap: 20px; padding: 40px; justify-content: center;
        }
        
        .card {
            width: 250px; padding: 30px; border-radius: 12px;
            color: white; text-align: center;
        }
        
        .card-1 { background: linear-gradient(135deg, #667eea, #764ba2); }
        .card-2 { background: linear-gradient(135deg, #f093fb, #f5576c); }
        .card-3 { background: linear-gradient(135deg, #4facfe, #00f2fe); }
    </style>
</head>
<body>
    <div class="hero">
        <div>
            <h1>Background Kreatif</h1>
            <p>Gradien + Gambar Background</p>
        </div>
    </div>
    
    <h2 class="gradient-text">Teks Gradien</h2>
    
    <div class="cards">
        <div class="card card-1">
            <h3>Card 1</h3>
            <p>Gradien ungu</p>
        </div>
        <div class="card card-2">
            <h3>Card 2</h3>
            <p>Gradien pink</p>
        </div>
        <div class="card card-3">
            <h3>Card 3</h3>
            <p>Gradien biru</p>
        </div>
    </div>
</body>
</html>`
    }
  ]
};