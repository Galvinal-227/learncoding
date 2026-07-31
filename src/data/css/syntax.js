export const chapter = {
  slug: "css-syntax",
  title: "Sintaks CSS",
  description: "Pelajari struktur dasar penulisan CSS: selector, property, dan value.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["css-introduction"],
  tags: ["css", "sintaks", "dasar", "selector"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Struktur Dasar CSS

CSS terdiri dari aturan (rule) yang memiliki format:

\`\`\`css
selector {
    property: value;
    property: value;
}
\`\`\`

### Anatomi Aturan CSS:

\`\`\`css
h1 {
    color: blue;
    font-size: 24px;
}
\`\`\`

- **Selector** (\`h1\`) - Memilih elemen HTML yang akan di-style
- **Declaration Block** (\`{ }\`) - Berisi satu atau lebih deklarasi
- **Property** (\`color\`) - Properti yang ingin diubah
- **Value** (\`blue\`) - Nilai untuk properti tersebut
- **Declaration** (\`color: blue;\`) - Pasangan properti dan nilai

## Beberapa Deklarasi Sekaligus

\`\`\`css
p {
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
}
\`\`\`

## Komentar di CSS

\`\`\`css
/* Ini komentar satu baris */

/*
   Ini komentar
   multi baris
   untuk penjelasan panjang
*/

/* === Bagian Header === */
header {
    background: #333;
}
\`\`\`

## Multiple Selector

Beberapa selector bisa berbagi deklarasi yang sama:
\`\`\`css
h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: #222;
}
\`\`\`

## Shorthand Properties

CSS menyediakan cara singkat untuk menulis beberapa properti:

\`\`\`css
/* Longhand */
margin-top: 10px;
margin-right: 15px;
margin-bottom: 10px;
margin-left: 15px;

/* Shorthand - 4 nilai: top right bottom left */
margin: 10px 15px 10px 15px;

/* Shorthand - 2 nilai: top/bottom left/right */
margin: 10px 15px;

/* Shorthand - 1 nilai: semua sisi */
margin: 10px;
\`\`\`

### Shorthand Lainnya:
\`\`\`css
/* Background */
background: #fff url('bg.jpg') no-repeat center/cover;

/* Border */
border: 2px solid red;

/* Font */
font: bold 16px/1.5 Arial, sans-serif;

/* Flex */
flex: 1 0 auto; /* grow shrink basis */
\`\`\`

## Values dan Units

### Warna
\`\`\`css
color: red;                      /* Keyword */
color: #ff0000;                  /* Hex */
color: #f00;                     /* Hex pendek */
color: rgb(255, 0, 0);          /* RGB */
color: rgba(255, 0, 0, 0.5);    /* RGBA */
color: hsl(0, 100%, 50%);       /* HSL */
\`\`\`

### Panjang
\`\`\`css
width: 100px;      /* Pixel */
width: 50%;        /* Persentase */
width: 10rem;      /* Root EM */
width: 2em;        /* EM (relatif ke parent) */
width: 100vw;      /* Viewport Width */
width: 100vh;      /* Viewport Height */
width: 10vmin;     /* Viewport Minimum */
\`\`\`

## Urutan Penting

Saat ada konflik, CSS menggunakan urutan prioritas:
1. **!important** (hindari jika bisa)
2. **Inline style** (di atribut HTML)
3. **Internal/External** (sesuai urutan deklarasi)
4. **Specificity** (semakin spesifik semakin tinggi)
5. **Urutan sumber** (yang terakhir menimpa)

## Best Practices

\`\`\`css
/* ✅ Gunakan format yang konsisten */
.card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* ✅ Spasi yang rapi */
.nav-item {
    display: inline-block;
    margin-right: 15px;
}

/* ❌ Hindari !important jika tidak terpaksa */
.button {
    background: blue !important; /* Hindari! */
}

/* ✅ Gunakan komentar untuk grouping */
/* ===== Header ===== */
.header { ... }
/* ===== Navigation ===== */
.nav { ... }
\`\`\`
  `,

  quiz: [
    {
      question: "Apa tiga bagian utama dari aturan CSS?",
      options: [
        "Tag, class, id",
        "Selector, property, value",
        "HTML, head, body",
        "Open, content, close"
      ],
      correctAnswer: 1,
      explanation: "Aturan CSS terdiri dari selector (memilih elemen), property (apa yang diubah), dan value (nilai perubahannya)."
    },
    {
      question: "Bagaimana menulis shorthand margin: atas 10, kanan 20, bawah 10, kiri 20?",
      options: [
        "margin: 10px 20px;",
        "margin: 10px 20px 10px 20px;",
        "margin: 20px 10px;",
        "A dan B benar"
      ],
      correctAnswer: 3,
      explanation: "Keduanya benar. Margin: 10px 20px (top/bottom left/right) dan margin: 10px 20px 10px 20px (top right bottom left) menghasilkan hasil yang sama."
    }
  ],

  codeExamples: [
    {
      title: "Contoh Sintaks CSS Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        /* Multiple selectors */
        h1, h2, h3 {
            font-family: 'Segoe UI', sans-serif;
            color: #333;
        }
        
        /* Shorthand background */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 60px 20px;
            text-align: center;
            color: white;
        }
        
        /* Shorthand border */
        .card {
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            padding: 24px;
            margin: 16px;
        }
        
        /* Shorthand font */
        .card h3 {
            font: bold 20px/1.4 'Segoe UI', sans-serif;
            margin: 0 0 8px 0;
        }
        
        /* Transition shorthand */
        .button {
            background: #1572B6;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .button:hover {
            background: #0d5a91;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(21, 114, 182, 0.4);
        }
    </style>
</head>
<body>
    <div class="hero">
        <h1>Selamat Datang</h1>
        <p>Contoh sintaks CSS dasar</p>
    </div>
    
    <div class="card">
        <h3>Kartu Informasi</h3>
        <p>Ini adalah contoh kartu dengan border dan padding.</p>
        <button class="button">Pelajari Lebih</button>
    </div>
</body>
</html>`
    }
  ]
};