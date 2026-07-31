export const chapter = {
  slug: "canvas-introduction",
  title: "Pengenalan Canvas",
  description: "Pahami apa itu Canvas API dan kapan menggunakannya.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["html-elements", "javascript-functions"],
  tags: ["canvas", "html5", "graphics", "2d"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Canvas?

Canvas adalah elemen HTML5 yang menyediakan **area gambar bitmap** yang bisa dimanipulasi dengan JavaScript. Cocok untuk grafik, game, animasi, dan visualisasi data.

## Canvas vs SVG

| | Canvas | SVG |
|---|--------|-----|
| Tipe | Bitmap (pixel-based) | Vector (math-based) |
| Kualitas Zoom | Pecah | Tetap tajam |
| Jumlah Objek | Bagus untuk banyak | Lambat jika banyak |
| Event Handling | Manual | Per elemen |
| Cocok Untuk | Game, animasi, grafik real-time | Ikon, logo, ilustrasi |

## Setup Dasar

### HTML
\`\`\`html
<canvas id="myCanvas" width="600" height="400">
    Browser kamu tidak mendukung Canvas.
</canvas>
\`\`\`

### JavaScript
\`\`\`javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Mulai menggambar!
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);
\`\`\`

## Sistem Koordinat

\`\`\`
(0,0) ──────────────────────────▶ X (width)
 │
 │    Canvas Area
 │         (x, y)
 │           ┌──────┐ width
 │           │      │
 │           └──────┘
 │              height
 ▼
 Y (height)
\`\`\`

- (0,0) = pojok kiri atas
- X bertambah ke kanan
- Y bertambah ke bawah

## Canvas Context

\`\`\`javascript
// 2D (paling umum)
const ctx = canvas.getContext('2d');

// 3D (WebGL)
const gl = canvas.getContext('webgl');

// WebGL 2
const gl2 = canvas.getContext('webgl2');
\`\`\`

## Responsive Canvas

\`\`\`javascript
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Gambar ulang setelah resize
    draw();
}
window.addEventListener('resize', resizeCanvas);
\`\`\`
⚠️ Jangan resize pakai CSS (akan stretch)! Harus set atribut width/height.
  `,

  quiz: [
    { question: "Canvas vs SVG: mana untuk game real-time?", options: ["SVG", "Canvas", "Sama saja", "Tidak keduanya"], correctAnswer: 1, explanation: "Canvas (bitmap) lebih cocok untuk game dengan banyak objek. SVG lambat jika terlalu banyak elemen DOM." },
    { question: "Context 2D diakses dengan?", options: ["canvas.getContext('2d')", "canvas.get2D()", "canvas.createContext()", "canvas.context2d"], correctAnswer: 0 },
    { question: "Koordinat (0,0) Canvas di mana?", options: ["Pojok kiri bawah", "Pojok kiri atas", "Tengah", "Pojok kanan atas"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Canvas Starter",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Canvas Starter</title>
    <style>canvas { border: 2px solid #333; display: block; margin: 20px auto; }</style>
</head>
<body>
    <canvas id="myCanvas" width="600" height="400"></canvas>
    
    <script>
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        
        // Background
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Kotak biru
        ctx.fillStyle = '#4285F4';
        ctx.fillRect(100, 100, 200, 150);
        
        // Lingkaran merah
        ctx.beginPath();
        ctx.arc(400, 200, 80, 0, Math.PI * 2);
        ctx.fillStyle = '#EA4335';
        ctx.fill();
        
        // Teks
        ctx.fillStyle = '#333';
        ctx.font = 'bold 24px Arial';
        ctx.fillText('Hello Canvas!', 180, 350);
    </script>
</body>
</html>`
    }
  ]
};