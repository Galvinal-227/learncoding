export const chapter = {
  slug: "css-float",
  title: "Float & Clear",
  description: "Pelajari float (meski sudah jarang dipakai) untuk memahami legacy code.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["css-display"],
  tags: ["css", "float", "clear", "legacy"],
  order: 14,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Float (Legacy)

⚠️ Float dulunya untuk layout, sekarang gunakan **Flexbox** atau **Grid**. Pelajari untuk memahami kode lama.

## Nilai Float

\`\`\`css
float: none;    /* Default */
float: left;    /* Mengambang ke kiri */
float: right;   /* Mengambang ke kanan */
\`\`\`

## Penggunaan Modern

### Text Wrapping (Image + Text)
\`\`\`css
img {
    float: left;
    margin-right: 15px;
    margin-bottom: 10px;
}
\`\`\`

## Masalah Float

### Parent Collapse
Parent dengan child float kehilangan tingginya:
\`\`\`css
/* Solusi: Clearfix */
.clearfix::after {
    content: '';
    display: table;
    clear: both;
}
\`\`\`

### Clear
Mencegah elemen berada di samping float:
\`\`\`css
clear: left;    /* Bersihkan float kiri */
clear: right;   /* Bersihkan float kanan */
clear: both;    /* Bersihkan keduanya */
\`\`\`

## Kesimpulan

❌ JANGAN gunakan float untuk layout
✅ Gunakan Flexbox atau Grid
✅ Float masih berguna untuk text wrapping gambar
  `,

  quiz: [
    {
      question: "Haruskah float digunakan untuk layout website modern?",
      options: [
        "Ya, itu cara standar",
        "Tidak, gunakan Flexbox atau Grid",
        "Ya, untuk responsif",
        "Tergantung kebutuhan"
      ],
      correctAnswer: 1,
      explanation: "Float sudah usang untuk layout. Gunakan Flexbox (1D) atau Grid (2D) untuk layout modern."
    },
    {
      question: "Apa fungsi clearfix?",
      options: [
        "Membersihkan cache",
        "Mencegah parent collapse akibat child float",
        "Menghapus float",
        "Animasi"
      ],
      correctAnswer: 1,
      explanation: "Clearfix mencegah parent kehilangan tinggi ketika semua child menggunakan float."
    }
  ],

  codeExamples: [
    {
      title: "Float untuk Text Wrap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 20px; max-width: 600px; }
        
        .float-img {
            float: left;
            margin: 0 15px 10px 0;
            width: 150px; height: 150px;
            background: #1572B6;
            border-radius: 8px;
        }
        
        .clearfix::after {
            content: '';
            display: table;
            clear: both;
        }
    </style>
</head>
<body>
    <h1>Float untuk Text Wrap</h1>
    
    <div class="clearfix">
        <div class="float-img"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates quod quia voluptate quae voluptatem quibusdam quos quidem dolorum natus. Lorem ipsum dolor sit amet consectetur.</p>
        <p>Teks ini akan mengalir di sekitar gambar yang float ke kiri. Ini satu-satunya penggunaan float yang masih relevan di CSS modern.</p>
    </div>
</body>
</html>`
    }
  ]
};