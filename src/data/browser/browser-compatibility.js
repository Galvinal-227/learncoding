export const chapter = {
  slug: "browser-browser-compatibility",
  title: "Browser Compatibility",
  description: "Pastikan website berjalan di semua browser dengan feature detection dan fallback.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["browser-introduction"],
  tags: ["browser", "compatibility", "cross-browser", "caniuse"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Cross-Browser Penting?

User pakai browser berbeda. Website harus berfungsi di semua browser utama.

## Cek Dukungan Fitur

### 1. caniuse.com
Cek dukungan browser untuk fitur HTML/CSS/JS.

### 2. MDN Browser Compat Data
\`\`\`
developer.mozilla.org → setiap halaman ada tabel "Browser compatibility"
\`\`\`

## Feature Detection

\`\`\`javascript
// ✅ Feature detection (cek kemampuan)
if ('IntersectionObserver' in window) {
    // Pakai Intersection Observer
} else {
    // Fallback: scroll event listener
}

if (CSS.supports('display', 'grid')) {
    // Pakai Grid
} else {
    // Fallback: Flexbox
}

// ❌ Browser sniffing (jangan!)
if (navigator.userAgent.includes('Chrome')) { }
\`\`\`

## CSS Fallbacks

\`\`\`css
/* Modern */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

/* Fallback untuk browser lama */
@supports not (display: grid) {
    .grid {
        display: flex;
        flex-wrap: wrap;
    }
    .grid > * {
        width: calc(33.33% - 20px);
    }
}
\`\`\`

## JavaScript Polyfills

\`\`\`javascript
// Polyfill manual
if (!Array.prototype.includes) {
    Array.prototype.includes = function(search) {
        return this.indexOf(search) !== -1;
    };
}

// Atau pakai core-js
import 'core-js/actual/array/includes';
\`\`\`

## Testing Cross-Browser

| Tool | Fungsi |
|------|--------|
| **BrowserStack** | Test di real devices |
| **LambdaTest** | Cloud testing |
| **Virtual Machines** | Windows + Mac + Linux |
| **Chrome DevTools** | Device mode |
| **Firefox DevTools** | Responsive Design Mode |

## Browserslist

\`\`\`json
{
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie 11"
  ]
}
\`\`\`

## Checklist

\`\`\`
✅ Test di Chrome, Firefox, Safari, Edge
✅ Feature detection, bukan browser sniffing
✅ CSS fallback dengan @supports
✅ JS polyfills untuk fitur baru
✅ Responsive di mobile
✅ Test di iOS Safari (wajib!)
✅ Accessible di semua browser
\`\`\`
  `,

  quiz: [
    { question: "Feature detection vs browser sniffing?", options: ["Sama", "Feature: cek kemampuan; Sniffing: cek user agent (buruk)", "Sniffing lebih baik", "Feature lebih lambat"], correctAnswer: 1 },
    { question: "caniuse.com untuk?", options: ["Cek browser support", "Download browser", "Test speed", "Debugging"], correctAnswer: 0 },
    { question: "Browserslist untuk?", options: ["Daftar semua browser", "Konfigurasi target browser untuk Babel/Autoprefixer", "Daftar user", "Daftar bug"], correctAnswer: 1 }
  ],

  codeExamples: []
};