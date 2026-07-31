export const chapter = {
  slug: "canvas-shapes",
  title: "Menggambar Bentuk",
  description: "Gambar rectangle, circle, ellipse, arc, dan custom shapes di Canvas.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["canvas-drawing-basics"],
  tags: ["canvas", "shapes", "rectangle", "circle"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Rectangle (Kotak)

\`\`\`javascript
// Fill rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(x, y, width, height);

// Stroke rectangle
ctx.strokeStyle = 'red';
ctx.strokeRect(x, y, width, height);

// Clear rectangle
ctx.clearRect(x, y, width, height);
\`\`\`

## Circle & Arc

\`\`\`javascript
// Arc: arc(x, y, radius, startAngle, endAngle, counterclockwise)
// Sudut dalam radian! (0 = jam 3, Math.PI = jam 9)

// Lingkaran penuh
ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2);
ctx.fillStyle = 'blue';
ctx.fill();

// Setengah lingkaran
ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI);
ctx.strokeStyle = 'red';
ctx.stroke();

// Pac-Man!
ctx.beginPath();
ctx.arc(400, 150, 80, 0.2 * Math.PI, 1.8 * Math.PI);
ctx.lineTo(400, 150);
ctx.fillStyle = 'yellow';
ctx.fill();
\`\`\`

## Ellipse

\`\`\`javascript
ctx.beginPath();
ctx.ellipse(200, 150, 100, 60, 0, 0, Math.PI * 2);
ctx.fillStyle = 'purple';
ctx.fill();
\`\`\`

## Rounded Rectangle

\`\`\`javascript
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height);
    ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
}

roundRect(ctx, 50, 50, 300, 200, 20);
ctx.fillStyle = '#4285F4';
ctx.fill();
\`\`\`

## Polygon Custom

\`\`\`javascript
// Segitiga
ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(450, 250);
ctx.lineTo(150, 250);
ctx.closePath();
ctx.fillStyle = 'green';
ctx.fill();

// Bintang
ctx.beginPath();
for (let i = 0; i < 5; i++) {
    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
    const x = 200 + Math.cos(angle) * 80;
    const y = 200 + Math.sin(angle) * 80;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
}
ctx.closePath();
ctx.fillStyle = 'gold';
ctx.fill();
ctx.strokeStyle = 'orange';
ctx.stroke();
\`\`\`
  `,

  quiz: [
    { question: "arc() sudut dalam?", options: ["Derajat", "Radian", "Pixel", "Persen"], correctAnswer: 1 },
    { question: "beginPath() fungsi?", options: ["Hapus canvas", "Mulai path baru", "Akhiri gambar", "Reset style"], correctAnswer: 1 },
    { question: "closePath() untuk?", options: ["Hapus canvas", "Tutup path (garis dari titik akhir ke awal)", "Selesai render", "Reset"], correctAnswer: 1 }
  ],

  codeExamples: []
};