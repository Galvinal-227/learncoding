export const chapter = {
  slug: "canvas-transformations",
  title: "Transformasi",
  description: "Translate, rotate, scale, dan transform matrix di Canvas.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["canvas-drawing-basics"],
  tags: ["canvas", "transform", "rotate", "scale"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Save & Restore

\`\`\`javascript
ctx.save();    // Simpan state saat ini
// ... lakukan transformasi ...
ctx.restore(); // Kembalikan state
\`\`\`

## Translate (Geser)

\`\`\`javascript
ctx.save();
ctx.translate(100, 50);
ctx.fillRect(0, 0, 100, 50); // Digambar di (100, 50)
ctx.restore();
\`\`\`

## Rotate (Putar)

\`\`\`javascript
ctx.save();
ctx.translate(200, 150);    // Pindah origin ke tengah
ctx.rotate(Math.PI / 4);    // Putar 45°
ctx.fillRect(-50, -25, 100, 50); // Gambar di pusat
ctx.restore();
\`\`\`

## Scale (Skala)

\`\`\`javascript
ctx.save();
ctx.scale(2, 1);  // Lebar 2x, tinggi normal
ctx.fillRect(50, 50, 50, 50); // Akan jadi 100x50
ctx.restore();
\`\`\`

## Transform Matrix

\`\`\`javascript
// transform(a, b, c, d, e, f)
// a = scaleX, b = skewY, c = skewX, d = scaleY, e = translateX, f = translateY
ctx.transform(1, 0, 0, 1, 100, 50); // Sama seperti translate(100, 50)

// Reset transform
ctx.setTransform(1, 0, 0, 1, 0, 0);
\`\`\`

## Kombinasi Transformasi

\`\`\`javascript
ctx.save();
ctx.translate(300, 200);
ctx.rotate(Date.now() / 1000); // Animasi putar
ctx.scale(1.5, 1.5);
ctx.fillStyle = 'blue';
ctx.fillRect(-25, -25, 50, 50);
ctx.restore();
\`\`\`
  `,

  quiz: [
    { question: "save() / restore() untuk?", options: ["Simpan file", "Simpan/pulihkan state transformasi", "Save as image", "Undo"], correctAnswer: 1 },
    { question: "Urutan transformasi penting?", options: ["Tidak", "Ya, translate dulu baru rotate (agar pusat benar)", "Selalu rotate dulu", "Acak"], correctAnswer: 1 }
  ],

  codeExamples: []
};