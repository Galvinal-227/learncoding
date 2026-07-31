export const chapter = {
  slug: "viewport",
  title: "Viewport & Meta Tags",
  description: "Memahami viewport dan meta tags penting untuk responsive design.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["responsive-introduction"],
  tags: ["viewport", "meta-tags", "html", "mobile"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Viewport?

Viewport adalah area yang terlihat dari halaman web di browser. Pada perangkat mobile, viewport biasanya lebih kecil dari desktop.

## Meta Viewport Tag

Tag HTML yang mengontrol bagaimana halaman ditampilkan pada perangkat mobile:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

## Pengaturan Viewport

Parameter penting dalam viewport:

- **width=device-width** - Lebar viewport mengikuti lebar perangkat
- **initial-scale=1.0** - Skala awal halaman
- **minimum-scale** - Skala minimum yang diizinkan
- **maximum-scale** - Skala maksimum yang diizinkan
- **user-scalable** - Mengizinkan user zoom atau tidak

## Best Practices

1. Selalu gunakan meta viewport di setiap halaman
2. Hindari mencegah user zooming
3. Gunakan width=device-width
4. Jangan menggunakan nilai fixed untuk viewport

## Contoh Lengkap

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
    <title>Viewport Example</title>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial; }
        .box { 
            width: 100%; 
            max-width: 600px; 
            background: #f0f0f0; 
            padding: 20px; 
            margin: 10px auto; 
        }
        img { max-width: 100%; height: auto; }
    </style>
</head>
<body>
    <div class="box">
        <h1>Viewport Test</h1>
        <p>Halaman ini menggunakan meta viewport yang benar.</p>
        <img src="https://via.placeholder.com/800x400" alt="Responsive Image">
    </div>
</body>
</html>
\`\`\`
  `,
  quiz: [
    { 
      question: "Apa fungsi meta viewport?", 
      options: [
        "Mengatur warna background",
        "Mengontrol layout di perangkat mobile",
        "Mengatur font size",
        "Menambahkan footer"
      ], 
      correctAnswer: 1 
    },
    { 
      question: "Apa nilai yang benar untuk width pada viewport?", 
      options: [
        "width=100%",
        "width=device-width",
        "width=auto",
        "width=100px"
      ], 
      correctAnswer: 1 
    },
    {
      question: "Parameter viewport untuk mengizinkan zoom adalah?",
      options: [
        "user-scalable=no",
        "user-scalable=yes",
        "zoom=on",
        "scale=1.0"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Meta Viewport Configuration",
      code: `<!-- Basic -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Allow zoom -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">

<!-- Disable zoom (not recommended) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`,
      language: "html"
    }
  ]
};