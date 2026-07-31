export const chapter = {
  slug: "javascript-strict-mode",
  title: "Strict Mode",
  description: "Pahami strict mode untuk menulis JavaScript yang lebih aman.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 8,
  prerequisites: ["javascript-variables"],
  tags: ["javascript", "strict", "mode", "aman"],
  order: 29,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Strict Mode?

\`"use strict"\` mengaktifkan mode ketat yang menangkap error umum dan mencegah perilaku berbahaya.

## Mengaktifkan

\`\`\`javascript
// Global (di awal file)
"use strict";

// Per fungsi
function myFunc() {
    "use strict";
}
\`\`\`

## Perubahan Utama

\`\`\`javascript
// ❌ Normal: variable tanpa deklarasi = global
x = 10;

// ✅ Strict: Error!
"use strict";
x = 10; // ReferenceError: x is not defined

// ❌ Normal: duplicate parameter diizinkan
function(a, a) { }

// ✅ Strict: Error!
function(a, a) { } // SyntaxError

// ❌ Normal: this di fungsi = window
// ✅ Strict: this di fungsi = undefined
\`\`\`

## Haruskah Pakai?

✅ **Ya**, terutama untuk kode baru. ES6 modules otomatis strict mode.
  `,

  quiz: [
    { question: "Apa yang terjadi pada variabel tanpa deklarasi di strict mode?", options: ["Jadi global", "Error", "undefined", "null"], correctAnswer: 1 },
    { question: "Apakah ES6 modules otomatis strict mode?", options: ["Ya", "Tidak", "Tergantung browser", "Hanya di Node.js"], correctAnswer: 0 }
  ]
};