export const chapter = {
  slug: "bootstrap-grid-system",
  title: "Grid System",
  description: "Kuasai Bootstrap Grid System untuk layout responsif yang fleksibel.",
  icon: "SiBootstrap",
  color: "#7952B3",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["bootstrap-introduction"],
  tags: ["bootstrap", "grid", "layout", "responsif"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Grid System Bootstrap

Bootstrap Grid adalah sistem layout **12 kolom** berbasis Flexbox. Paling powerful untuk layout responsif.

## Struktur Dasar

\`\`\`html
<div class="container">
    <div class="row">
        <div class="col">Kolom 1</div>
        <div class="col">Kolom 2</div>
        <div class="col">Kolom 3</div>
    </div>
</div>
\`\`\`

## Container

\`\`\`html
<!-- Fixed width (responsive breakpoints) -->
<div class="container">...</div>

<!-- Full width -->
<div class="container-fluid">...</div>

<!-- Breakpoint-specific -->
<div class="container-sm">100% sampai sm breakpoint</div>
<div class="container-md">100% sampai md breakpoint</div>
<div class="container-lg">100% sampai lg breakpoint</div>
\`\`\`

## 5 Breakpoints

| Breakpoint | Class Infix | Min Width |
|------------|-------------|-----------|
| X-Small | (default) | <576px |
| Small | \`-sm\` | ≥576px |
| Medium | \`-md\` | ≥768px |
| Large | \`-lg\` | ≥992px |
| X-Large | \`-xl\` | ≥1200px |
| XX-Large | \`-xxl\` | ≥1400px |

## Column Sizing

### Auto-width
\`\`\`html
<div class="row">
    <div class="col">Auto</div>
    <div class="col-6">6 kolom (50%)</div>
    <div class="col">Auto</div>
</div>
\`\`\`

### Responsive Columns
\`\`\`html
<div class="row">
    <div class="col-12 col-md-6 col-lg-4">
        Full di mobile, ½ di tablet, ⅓ di desktop
    </div>
    <div class="col-12 col-md-6 col-lg-4">
        Full di mobile, ½ di tablet, ⅓ di desktop
    </div>
    <div class="col-12 col-md-6 col-lg-4">
        Full di mobile, ½ di tablet, ⅓ di desktop
    </div>
</div>
\`\`\`

## Alignment

### Vertical (align-items)
\`\`\`html
<div class="row align-items-start">   <!-- Atas -->
<div class="row align-items-center">  <!-- Tengah -->
<div class="row align-items-end">     <!-- Bawah -->
\`\`\`

### Horizontal (justify-content)
\`\`\`html
<div class="row justify-content-start">   <!-- Kiri -->
<div class="row justify-content-center">  <!-- Tengah -->
<div class="row justify-content-end">     <!-- Kanan -->
<div class="row justify-content-between"> <!-- Spasi antara -->
<div class="row justify-content-around">  <!-- Spasi sekitar -->
\`\`\`

## Offset & Order

\`\`\`html
<!-- Offset (geser kanan) -->
<div class="col-md-4 offset-md-4">Tengah (4+4+4=12)</div>

<!-- Order (urutan visual) -->
<div class="row">
    <div class="col order-3">Pertama di HTML, ketiga di tampilan</div>
    <div class="col order-1">Kedua di HTML, pertama di tampilan</div>
    <div class="col order-2">Ketiga di HTML, kedua di tampilan</div>
</div>
\`\`\`

## Gutters (Spacing antar kolom)

\`\`\`html
<!-- Default gutter -->
<div class="row g-3">
    <div class="col-6">...</div>
    <div class="col-6">...</div>
</div>

<!-- No gutter -->
<div class="row g-0">

<!-- Gutter horizontal & vertikal -->
<div class="row gx-3 gy-4">
\`\`\`
  `,

  quiz: [
    { question: "Grid Bootstrap berapa kolom?", options: ["6", "10", "12", "24"], correctAnswer: 2 },
    { question: "Class untuk 50% lebar di tablet?", options: ["col-sm-6", "col-md-6", "col-lg-6", "col-6"], correctAnswer: 1 },
    { question: "Breakpoint 'md' minimal lebar?", options: ["576px", "768px", "992px", "1200px"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Grid Layout Responsif",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>.demo-col{background:#7952B3;color:white;padding:15px;border:2px solid white;border-radius:4px;text-align:center}.demo-row{margin-bottom:20px}</style>
</head>
<body class="p-4">
    <h2>Grid Responsif</h2>
    <p>Resize browser untuk lihat perubahan!</p>
    
    <div class="row demo-row">
        <div class="col-12 col-md-6 col-lg-3"><div class="demo-col">1</div></div>
        <div class="col-12 col-md-6 col-lg-3"><div class="demo-col">2</div></div>
        <div class="col-12 col-md-6 col-lg-3"><div class="demo-col">3</div></div>
        <div class="col-12 col-md-6 col-lg-3"><div class="demo-col">4</div></div>
    </div>
    
    <h2>Alignment</h2>
    <div class="row align-items-center demo-row" style="min-height:150px;background:#f5f5f5">
        <div class="col"><div class="demo-col">Top (default)</div></div>
        <div class="col"><div class="demo-col" style="padding:30px">Center</div></div>
        <div class="col"><div class="demo-col">Bottom</div></div>
    </div>
</body>
</html>`
    }
  ]
};