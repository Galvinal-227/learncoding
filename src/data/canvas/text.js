export const chapter = {
  slug: "canvas-text",
  title: "Teks di Canvas",
  description: "Tampilkan dan style teks di Canvas dengan berbagai font dan efek.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["canvas-drawing-basics"],
  tags: ["canvas", "text", "font", "typography"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## fillText()

\`\`\`javascript
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello Canvas!', 50, 100);
\`\`\`

## strokeText()

\`\`\`javascript
ctx.font = 'bold 40px Impact';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.strokeText('Outline Text', 50, 200);
\`\`\`

## Font Properties

\`\`\`javascript
ctx.font = 'italic bold 30px Arial, sans-serif';
ctx.textAlign = 'center';    // left | center | right | start | end
ctx.textBaseline = 'middle'; // top | hanging | middle | alphabetic | bottom
ctx.direction = 'ltr';       // ltr | rtl
\`\`\`

## Mengukur Teks

\`\`\`javascript
const metrics = ctx.measureText('Hello');
console.log(metrics.width); // Lebar teks dalam pixel
\`\`\`

## Gradient Text

\`\`\`javascript
const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.5, 'yellow');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.font = 'bold 60px Arial';
ctx.fillText('Gradient Text', 50, 150);
\`\`\`
  `,

  quiz: [
    { question: "fillText vs strokeText?", options: ["Sama", "fillText: teks solid; strokeText: outline", "strokeText lebih cepat", "fillText deprecated"], correctAnswer: 1 },
    { question: "measureText() untuk?", options: ["Mengubah font", "Mengukur lebar teks", "Menghitung karakter", "Animasi teks"], correctAnswer: 1 }
  ],

  codeExamples: []
};