export const chapter = {
  slug: "browser-rendering-engine",
  title: "Rendering Engine",
  description: "Deep dive ke rendering engine: parsing, layout, paint, composite, dan optimasi.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["browser-how-browsers-work"],
  tags: ["browser", "rendering", "layout", "paint", "composite"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Rendering Pipeline Detail

\`\`\`
JavaScript → Style → Layout → Paint → Composite
\`\`\`

## 1. JavaScript
Eksekusi JS → bisa mengubah DOM/CSSOM.

## 2. Style (Recalculate)
Hitung style final setiap elemen (specificity, cascade, inheritance).

## 3. Layout (Reflow)
Hitung geometri: posisi (x, y) dan ukuran (width, height).

### Yang Trigger Layout:
\`\`\`javascript
// ❌ Semua ini trigger layout (MAHAL)
element.offsetWidth;
element.offsetHeight;
element.getBoundingClientRect();
window.getComputedStyle(element);
// + mengubah properti: width, height, margin, padding, top, left, position, display
\`\`\`

## 4. Paint
Gambar piksel: warna, border, shadow, text.

### Yang Trigger Paint:
\`\`\`javascript
// ⚠️ Trigger paint (medium cost)
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.boxShadow = '...';
\`\`\`

## 5. Composite
Gabung layer. Hanya **transform** dan **opacity** yang murni composite.

### Yang HANYA Composite (TERBAIK):
\`\`\`css
/* ✅ Hanya composite - 60fps smooth */
transform: translateX(100px);
transform: rotate(45deg);
transform: scale(1.2);
opacity: 0.5;
\`\`\`

## Create New Layer

\`\`\`css
/* Force new layer (gunakan bijak) */
will-change: transform;
transform: translateZ(0);
\`\`\`
⚠️ Terlalu banyak layer = banyak memory!

## Optimasi Rendering

\`\`\`
✅ Animasikan transform & opacity saja
✅ Gunakan requestAnimationFrame
✅ Hindari layout thrashing (baca lalu tulis berulang)
✅ Batch DOM changes dengan DocumentFragment
✅ Gunakan contain: layout untuk isolasi
✅ Lazy load off-screen content
\`\`\`

## Layout Thrashing

\`\`\`javascript
// ❌ Layout thrashing - baca lalu tulis berulang
for (let i = 0; i < items.length; i++) {
    const h = items[i].offsetHeight; // BACA (force layout)
    items[i].style.height = h + 10;   // TULIS (invalidate layout)
}

// ✅ Batch: baca semua dulu, tulis semua kemudian
const heights = items.map(item => item.offsetHeight); // BACA
items.forEach((item, i) => item.style.height = heights[i] + 10); // TULIS
\`\`\`

## DevTools Rendering

1. DevTools → More Tools → Rendering
2. Centang **Paint Flashing** (hijau = area di-repaint)
3. Centang **Layout Shift Regions** (biru = CLS)
4. Centang **FPS Meter** (lihat frame rate)
  `,

  quiz: [
    { question: "Properti yang HANYA trigger composite?", options: ["width, height", "color, background", "transform, opacity", "margin, padding"], correctAnswer: 2 },
    { question: "Apa itu layout thrashing?", options: ["Layout error", "Baca-tulis DOM berulang yang trigger reflow terus", "CSS bug", "Browser crash"], correctAnswer: 1 },
    { question: "Cara force new composite layer?", options: ["position: absolute", "will-change: transform", "z-index: 999", "display: flex"], correctAnswer: 1 }
  ],

  codeExamples: []
};