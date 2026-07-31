export const chapter = {
  slug: "canvas-drawing-basics",
  title: "Drawing Basics",
  description: "Pelajari properti dasar canvas: warna, garis, fill, stroke, dan style.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["canvas-introduction"],
  tags: ["canvas", "drawing", "fill", "stroke"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Fill vs Stroke

- **Fill**: Isi area (fillStyle, fillRect, fill)
- **Stroke**: Garis tepi (strokeStyle, strokeRect, stroke)

\`\`\`javascript
// Fill (isi)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);

// Stroke (garis tepi)
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.strokeRect(50, 50, 200, 100);
\`\`\`

## Warna

\`\`\`javascript
ctx.fillStyle = 'red';                    // Named color
ctx.fillStyle = '#FF0000';               // Hex
ctx.fillStyle = 'rgb(255, 0, 0)';        // RGB
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';  // RGBA (transparan)
ctx.fillStyle = 'hsl(0, 100%, 50%)';     // HSL
\`\`\`

## Gradien

### Linear
\`\`\`javascript
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.5, 'yellow');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 200, 200);
\`\`\`

### Radial
\`\`\`javascript
const gradient = ctx.createRadialGradient(150, 100, 10, 150, 100, 100);
gradient.addColorStop(0, 'white');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 300, 200);
\`\`\`

## Line Styles

\`\`\`javascript
ctx.lineWidth = 5;           // Ketebalan garis
ctx.lineCap = 'round';       // butt | round | square
ctx.lineJoin = 'round';      // miter | round | bevel
ctx.miterLimit = 10;
\`\`\`

## Shadows

\`\`\`javascript
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;

ctx.fillRect(50, 50, 200, 100);
\`\`\`

## Global Alpha (Transparansi)

\`\`\`javascript
ctx.globalAlpha = 0.5; // Semua gambar setelah ini 50% transparan
ctx.fillRect(50, 50, 200, 100);

ctx.globalAlpha = 1.0; // Kembali normal
\`\`\`

## Clear Area

\`\`\`javascript
// Hapus area spesifik
ctx.clearRect(0, 0, 100, 100);

// Hapus seluruh canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);
\`\`\`
  `,

  quiz: [
    { question: "Fill vs Stroke?", options: ["Sama", "Fill: isi; Stroke: garis tepi", "Stroke: isi; Fill: tepi", "Tidak ada beda"], correctAnswer: 1 },
    { question: "Gradien linear dibuat dengan?", options: ["createGradient()", "createLinearGradient()", "linearGradient()", "gradient()"], correctAnswer: 1 },
    { question: "Menghapus seluruh canvas?", options: ["ctx.clear()", "ctx.clearRect(0,0,w,h)", "ctx.reset()", "ctx.erase()"], correctAnswer: 1 }
  ],

  codeExamples: []
};