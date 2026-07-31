export const chapter = {
  slug: "css-borders",
  title: "Border & Outline",
  description: "Kuasai properti border, outline, dan border-radius untuk membuat tepi elemen yang menarik.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["css-box-model"],
  tags: ["css", "border", "outline", "tepi"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Border

Border adalah garis yang mengelilingi elemen, berada di antara padding dan margin.

## Sintaks Dasar

\`\`\`css
border: width style color;
border: 2px solid #333;
\`\`\`

## Properti Border Individual

### border-width
\`\`\`css
border-width: 2px;
border-width: thin;
border-width: medium;
border-width: thick;
\`\`\`

### border-style
\`\`\`css
border-style: solid;    /* Garis penuh (paling umum) */
border-style: dashed;   /* Garis putus-putus */
border-style: dotted;   /* Titik-titik */
border-style: double;   /* Garis ganda */
border-style: groove;   /* Efek cekung */
border-style: ridge;    /* Efek cembung */
border-style: inset;    /* Efek tenggelam */
border-style: outset;   /* Efek timbul */
border-style: none;     /* Tanpa border */
border-style: hidden;   /* Tersembunyi (seperti none) */
\`\`\`

### border-color
\`\`\`css
border-color: #333;
border-color: red;
border-color: transparent;
border-color: currentColor; /* Ikut warna teks */
\`\`\`

## Border Sisi Tertentu

\`\`\`css
border-top: 2px solid red;
border-right: 1px dashed blue;
border-bottom: 3px double green;
border-left: 4px solid orange;

/* Atau per properti */
border-top-width: 2px;
border-top-style: solid;
border-top-color: red;
\`\`\`

## Border Radius

Membuat sudut melengkung:
\`\`\`css
/* Semua sudut sama */
border-radius: 10px;

/* Masing-masing sudut */
border-radius: 10px 20px 30px 40px; /* top-left top-right bottom-right bottom-left */

/* Sudut spesifik */
border-top-left-radius: 10px;
border-top-right-radius: 20px;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 40px;

/* Lingkaran sempurna */
border-radius: 50%;

/* Pil */
border-radius: 9999px;
\`\`\`

## Outline

Outline mirip border tapi **di luar border** dan **tidak mempengaruhi layout** (tidak menambah ukuran elemen).

\`\`\`css
outline: 2px solid blue;
outline-width: 2px;
outline-style: solid;
outline-color: blue;
outline-offset: 2px; /* Jarak dari border */
\`\`\`

### Outline vs Border
- Outline tidak menambah dimensi elemen
- Outline tidak bisa diatur per sisi
- Outline sering digunakan untuk :focus
\`\`\`css
input:focus {
    outline: 2px solid #1572B6;
    outline-offset: 2px;
}
\`\`\`

## Trik dengan Border

### Segitiga CSS
\`\`\`css
.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #1572B6;
}
\`\`\`

### Border Gradient (dengan trik)
\`\`\`css
.gradient-border {
    border: 3px solid transparent;
    border-image: linear-gradient(135deg, #667eea, #764ba2) 1;
    border-radius: 8px; /* Tidak berfungsi dengan border-image */
}
\`\`\`
  `,

  quiz: [
    {
      question: "Apa perbedaan utama border dan outline?",
      options: [
        "Tidak ada perbedaan",
        "Outline tidak menambah ukuran elemen, border menambah",
        "Outline lebih tebal",
        "Border hanya untuk div"
      ],
      correctAnswer: 1,
      explanation: "Outline digambar di luar border dan tidak mempengaruhi layout/dimensi elemen. Border adalah bagian dari box model."
    },
    {
      question: "Nilai border-radius untuk membuat lingkaran sempurna?",
      options: ["10px", "100%", "50%", "9999px"],
      correctAnswer: 2,
      explanation: "border-radius: 50% pada elemen persegi akan membuat lingkaran sempurna."
    }
  ],

  codeExamples: [
    {
      title: "Demo Border Kreatif",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 20px; display: flex; flex-wrap: wrap; gap: 20px; }
        
        .box {
            width: 120px; height: 120px;
            display: flex; align-items: center; justify-content: center;
            font-size: 12px; text-align: center;
            background: #f0f0f0;
        }
        
        .solid { border: 3px solid #1572B6; }
        .dashed { border: 3px dashed #e74c3c; }
        .dotted { border: 3px dotted #2ecc71; }
        .double { border: 5px double #f39c12; }
        .groove { border: 8px groove #9b59b6; }
        
        .radius { border: 3px solid #333; border-radius: 20px; }
        .circle { border: 3px solid #e74c3c; border-radius: 50%; }
        .pill { border: 3px solid #2ecc71; border-radius: 9999px; width: 200px; height: 80px; }
        
        .outline-demo { 
            border: 2px solid #333; 
            outline: 3px solid #e74c3c; 
            outline-offset: 5px;
        }
        
        .triangle {
            width: 0; height: 0;
            border-left: 40px solid transparent;
            border-right: 40px solid transparent;
            border-bottom: 70px solid #1572B6;
        }
    </style>
</head>
<body>
    <div class="box solid">Solid</div>
    <div class="box dashed">Dashed</div>
    <div class="box dotted">Dotted</div>
    <div class="box double">Double</div>
    <div class="box groove">Groove</div>
    <div class="box radius">Radius 20px</div>
    <div class="box circle">Circle 50%</div>
    <div class="box pill">Pill Shape</div>
    <div class="box outline-demo">Outline</div>
    <div class="triangle"></div>
</body>
</html>`
    }
  ]
};