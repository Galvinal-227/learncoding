export const chapter = {
  slug: "css-animations-transitions",
  title: "CSS Transitions",
  description: "Kuasai CSS Transitions untuk animasi halus antar state.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["css-transitions"],
  tags: ["css", "transition", "animasi", "halus"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## CSS Transitions

Transition memungkinkan perubahan properti CSS terjadi secara **halus** dalam durasi tertentu.

## Sintaks

\`\`\`css
transition: property duration timing-function delay;
\`\`\`

### Properti Individual
\`\`\`css
transition-property: all;             /* Semua properti (default) */
transition-property: background;       /* Properti spesifik */
transition-property: opacity, transform; /* Multiple */

transition-duration: 0.3s;            /* 300ms */
transition-duration: 200ms;           /* Milidetik */
transition-duration: 1s;              /* 1 detik */

transition-timing-function: ease;     /* Default */
transition-timing-function: linear;
transition-timing-function: ease-in-out;

transition-delay: 0s;                 /* Langsung */
transition-delay: 0.5s;               /* Tunda 500ms */
\`\`\`

## Shorthand

\`\`\`css
transition: all 0.3s ease 0s;
transition: opacity 0.5s ease-in-out;
transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
\`\`\`

## Multiple Transitions

\`\`\`css
.card {
    transition: 
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background 0.5s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    background: #f0f0f0;
}
\`\`\`

## Properti yang Bisa Ditransisikan

\`\`\`
✅ color, background-color, border-color
✅ opacity, visibility
✅ transform (translate, rotate, scale, skew)
✅ width, height, margin, padding (⚠️ lambat)
✅ box-shadow, text-shadow
✅ font-size, line-height, letter-spacing
✅ filter, backdrop-filter

❌ display (tidak bisa)
❌ background-image (tidak bisa)
❌ position (tidak bisa)
❌ font-family (tidak bisa)
\`\`\`

## Trigger Transitions

### 1. Hover
\`\`\`css
.button { transition: background 0.3s; }
.button:hover { background: blue; }
\`\`\`

### 2. Class Change (JavaScript)
\`\`\`javascript
element.classList.add('active');
\`\`\`

\`\`\`css
.modal {
    opacity: 0;
    transition: opacity 0.3s;
}
.modal.active { opacity: 1; }
\`\`\`

### 3. Focus
\`\`\`css
input { transition: border-color 0.3s; }
input:focus { border-color: blue; }
\`\`\`

## Trik Transitions

### Transition Height (auto → 0)
\`\`\`css
.collapse {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}
.collapse.open {
    max-height: 500px; /* Estimasi, tidak bisa auto */
}
\`\`\`

### Staggered Delay
\`\`\`css
.item:nth-child(1) { transition-delay: 0s; }
.item:nth-child(2) { transition-delay: 0.1s; }
.item:nth-child(3) { transition-delay: 0.2s; }
\`\`\`
  `,

  quiz: [
    { question: "Properti yang TIDAK bisa ditransisikan?", options: ["opacity", "transform", "display", "background"], correctAnswer: 2, explanation: "display tidak bisa ditransisikan karena nilainya diskrit (none, block, dll)." },
    { question: "Cara trigger transition via JS?", options: ["element.animate()", "element.classList.add('active')", "element.transition()", "element.style.transition = true"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Card Hover dengan Multiple Transitions",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><title>Transition Demo</title>
<style>
    body { display: flex; gap: 30px; justify-content: center; padding: 60px; background: #f5f5f5; font-family: Arial; }
    .card {
        width: 250px; background: white; border-radius: 16px; padding: 30px; text-align: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1); cursor: pointer;
        transition: transform 0.3s cubic-bezier(0.68,-0.55,0.27,1.55),
                    box-shadow 0.3s ease,
                    background 0.3s ease;
    }
    .card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        background: #667eea;
        color: white;
    }
    .card h3 { margin: 0 0 10px; transition: color 0.3s; }
    .card p { color: #666; transition: color 0.3s; }
    .card:hover p { color: rgba(255,255,255,0.9); }
</style>
</head>
<body>
    <div class="card"><h3>🚀 Fast</h3><p>Lightning fast performance</p></div>
    <div class="card"><h3>🔒 Secure</h3><p>Enterprise-grade security</p></div>
    <div class="card"><h3>🎨 Beautiful</h3><p>Stunning design system</p></div>
</body>
</html>`
    }
  ]
};