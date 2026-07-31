export const chapter = {
  slug: "canvas-performance",
  title: "Performa Canvas",
  description: "Optimasi performa Canvas untuk game dan animasi kompleks.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["canvas-animations"],
  tags: ["canvas", "performance", "optimization", "offscreen"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Optimasi Canvas

### 1. Pre-render Static Elements
\`\`\`javascript
const offscreen = document.createElement('canvas');
offscreen.width = 200;
offscreen.height = 200;
const offCtx = offscreen.getContext('2d');
// Gambar background statis di sini sekali...

// Di game loop, tinggal drawImage
ctx.drawImage(offscreen, 0, 0);
\`\`\`

### 2. Minimalkan State Changes
\`\`\`javascript
// ❌ Ganti fillStyle setiap kali
for (const obj of objects) {
    ctx.fillStyle = obj.color;
    ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
}

// ✅ Group by color
const groups = groupBy(objects, 'color');
for (const [color, objs] of Object.entries(groups)) {
    ctx.fillStyle = color;
    for (const obj of objs) {
        ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
    }
}
\`\`\`

### 3. Gunakan requestAnimationFrame
\`\`\`javascript
// ✅
requestAnimationFrame(animate);

// ❌
setInterval(animate, 16);
\`\`\`

### 4. Clear dengan fillRect (bukan clearRect)
\`\`\`javascript
// ✅ Lebih cepat di beberapa engine
ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);
\`\`\`

### 5. Batasi Area Gambar
\`\`\`javascript
// ✅ Hanya gambar yang berubah
ctx.clearRect(x, y, width, height);
// Gambar ulang hanya area itu
\`\`\`

### 6. OffscreenCanvas (Web Worker)
\`\`\`javascript
// Di main thread
const offscreen = canvas.transferControlToOffscreen();
worker.postMessage({ canvas: offscreen }, [offscreen]);

// Di worker
self.onmessage = ({ data: { canvas } }) => {
    const ctx = canvas.getContext('2d');
    // Render di background thread!
};
\`\`\`

## Profiling Canvas

\`\`\`javascript
let frameCount = 0;
let lastTime = performance.now();

function measureFPS() {
    frameCount++;
    const now = performance.now();
    if (now - lastTime >= 1000) {
        console.log(\`FPS: \${frameCount}\`);
        frameCount = 0;
        lastTime = now;
    }
}
\`\`\`
  `,

  quiz: [
    { question: "Pre-rendering untuk?", options: ["Memperlambat", "Cache elemen statis, gambar sekali", "Debugging", "Hiasan"], correctAnswer: 1 },
    { question: "OffscreenCanvas manfaat?", options: ["Lebih kecil", "Render di Web Worker (background thread)", "Lebih cepat di mobile", "Tidak perlu"], correctAnswer: 1 },
    { question: "Kenapa group by color?", options: ["Estetika", "Kurangi state changes (fillStyle)", "Wajib", "Debugging"], correctAnswer: 1 }
  ],

  codeExamples: []
};