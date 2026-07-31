export const chapter = {
  slug: "bootstrap-rtl",
  title: "RTL & Internasionalisasi",
  description: "Implementasi Right-to-Left (RTL) untuk bahasa Arab, Urdu, Hebrew, dll.",
  icon: "SiBootstrap",
  color: "#7952B3",
  difficulty: "Intermediate",
  estimatedReadingTime: 10,
  prerequisites: ["bootstrap-customization"],
  tags: ["bootstrap", "rtl", "arabic", "internasionalisasi"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Bootstrap RTL

Bootstrap 5 mendukung RTL (Right-to-Left) untuk bahasa seperti Arab, Urdu, Hebrew, Farsi.

## Aktivasi RTL

### 1. HTML Direction
\`\`\`html
<html lang="ar" dir="rtl">
\`\`\`

### 2. Bootstrap RTL CSS
\`\`\`html
<!-- Ganti CSS biasa dengan versi RTL -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css">
\`\`\`

### 3. SASS
\`\`\`scss
$enable-rtl: true;
@import "bootstrap/scss/bootstrap";
\`\`\`

## Yang Berubah di RTL

\`\`\`
✅ Margin/padding start ↔ end (ms → me)
✅ Text alignment (start ↔ end)
✅ Float (float-start ↔ float-end)
✅ Border radius direction
✅ Dropdown/carousel direction
✅ Breadcrumb separator
\`\`\`

## Toggle RTL/LTR Dinamis

\`\`\`javascript
function toggleRTL() {
    const html = document.documentElement;
    const current = html.getAttribute('dir');
    html.setAttribute('dir', current === 'rtl' ? 'ltr' : 'rtl');
}
\`\`\`
  `,

  quiz: [
    { question: "Atribut HTML untuk RTL?", options: ["lang='rtl'", "dir='rtl'", "direction='rtl'", "rtl='true'"], correctAnswer: 1 },
    { question: "Bootstrap RTL: margin-start jadi?", options: ["Tetap start", "Berubah jadi end di RTL", "Hilang", "Double"], correctAnswer: 1 }
  ],

  codeExamples: []
};