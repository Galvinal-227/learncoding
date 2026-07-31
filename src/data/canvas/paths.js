export const chapter = {
  slug: "canvas-paths",
  title: "Paths & Lines",
  description: "Gambar garis, kurva Bezier, dan path kompleks di Canvas.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["canvas-drawing-basics"],
  tags: ["canvas", "path", "bezier", "lines"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Path Basics

\`\`\`javascript
ctx.beginPath();      // Mulai path baru
ctx.moveTo(x, y);     // Pindah tanpa menggambar
ctx.lineTo(x, y);     // Garis ke titik
ctx.closePath();      // Tutup path (kembali ke moveTo)
ctx.fill();           // Isi path
ctx.stroke();         // Gambar garis path
\`\`\`

## Garis Sederhana

\`\`\`javascript
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 150);
ctx.lineTo(50, 250);
ctx.lineWidth = 3;
ctx.strokeStyle = 'blue';
ctx.stroke();
\`\`\`

## Quadratic Bezier Curve

\`\`\`javascript
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.quadraticCurveTo(cpX, cpY, endX, endY);
// cpX, cpY = control point
ctx.stroke();
\`\`\`

## Cubic Bezier Curve

\`\`\`javascript
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
// Dua control points untuk kurva lebih kompleks
ctx.stroke();
\`\`\`

## Arc Methods

\`\`\`javascript
// arcTo (lebih mudah untuk rounded corners)
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.arcTo(250, 50, 250, 150, 50); // radius 50
ctx.lineTo(250, 150);
ctx.stroke();
\`\`\`

## Menggambar Hati dengan Path

\`\`\`javascript
function drawHeart(ctx, x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y + size * 0.3);
    ctx.bezierCurveTo(x, y, x - size * 0.5, y, x - size * 0.5, y + size * 0.3);
    ctx.bezierCurveTo(x - size * 0.5, y + size * 0.6, x, y + size * 0.8, x, y + size);
    ctx.bezierCurveTo(x, y + size * 0.8, x + size * 0.5, y + size * 0.6, x + size * 0.5, y + size * 0.3);
    ctx.bezierCurveTo(x + size * 0.5, y, x, y, x, y + size * 0.3);
    ctx.fillStyle = 'red';
    ctx.fill();
}

drawHeart(ctx, 300, 150, 60);
\`\`\`
  `,

  quiz: [
    { question: "moveTo vs lineTo?", options: ["Sama", "moveTo: pindah tanpa garis; lineTo: gambar garis", "lineTo lebih cepat", "moveTo deprecated"], correctAnswer: 1 },
    { question: "Bezier curve untuk?", options: ["Garis lurus", "Kurva halus", "Lingkaran", "Kotak"], correctAnswer: 1 }
  ],

  codeExamples: []
};