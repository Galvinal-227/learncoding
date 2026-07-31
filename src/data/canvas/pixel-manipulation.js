export const chapter = {
  slug: "canvas-pixel-manipulation",
  title: "Manipulasi Pixel",
  description: "Akses dan manipulasi data pixel langsung dengan ImageData.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["canvas-images"],
  tags: ["canvas", "pixel", "imageData", "filter"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## ImageData API

\`\`\`javascript
// Ambil data pixel
const imageData = ctx.getImageData(x, y, width, height);
const pixels = imageData.data; // Uint8ClampedArray

// Struktur: [R, G, B, A, R, G, B, A, ...]
// pixels[0] = Red pixel 1
// pixels[1] = Green pixel 1
// pixels[2] = Blue pixel 1
// pixels[3] = Alpha pixel 1
// pixels[4] = Red pixel 2 ... dst
\`\`\`

## Filter Grayscale

\`\`\`javascript
function grayscale(imageData) {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i+1] + data[i+2]) / 3;
        data[i] = avg;     // R
        data[i+1] = avg;   // G
        data[i+2] = avg;   // B
        // data[i+3] = alpha (tidak diubah)
    }
    return imageData;
}

const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
grayscale(imageData);
ctx.putImageData(imageData, 0, 0);
\`\`\`

## Filter Sepia

\`\`\`javascript
function sepia(imageData) {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        
        data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
        data[i+1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
        data[i+2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
    }
    return imageData;
}
\`\`\`

## Invert Colors

\`\`\`javascript
function invert(imageData) {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];
    }
    return imageData;
}
\`\`\`

## Pixel Manipulation Performance

\`\`\`javascript
// ✅ Batch processing dengan ImageData
const imageData = ctx.getImageData(0, 0, w, h);
// Proses semua pixel...
ctx.putImageData(imageData, 0, 0);

// ❌ Jangan set pixel satu per satu
for (let i = 0; i < 10000; i++) {
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, 1, 1); // Sangat lambat!
}
\`\`\`
  `,

  quiz: [
    { question: "Struktur data pixel di ImageData?", options: ["[R, G, B]", "[R, G, B, A, R, G, B, A...]", "[X, Y, Color]", "[Index, Value]"], correctAnswer: 1 },
    { question: "getImageData return?", options: ["Array", "ImageData (Uint8ClampedArray)", "Canvas", "Image"], correctAnswer: 1 },
    { question: "putImageData untuk?", options: ["Ambil pixel", "Tulis data pixel kembali ke canvas", "Hapus canvas", "Resize"], correctAnswer: 1 }
  ],

  codeExamples: []
};