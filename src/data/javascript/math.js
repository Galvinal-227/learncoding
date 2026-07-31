export const chapter = {
  slug: "javascript-math",
  title: "Math Object",
  description: "Pelajari Math object untuk operasi matematika di JavaScript.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-data-types"],
  tags: ["javascript", "math", "matematika", "angka"],
  order: 19,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Math Object

\`\`\`javascript
// Konstanta
Math.PI;      // 3.14159...
Math.E;       // 2.71828...

// Pembulatan
Math.round(4.7);   // 5
Math.floor(4.7);   // 4 (bawah)
Math.ceil(4.3);    // 5 (atas)
Math.trunc(4.7);   // 4 (buang desimal)

// Min/Max
Math.min(1, 2, 3); // 1
Math.max(1, 2, 3); // 3

// Random
Math.random();           // 0 - 0.999...
Math.floor(Math.random() * 10); // 0-9
Math.floor(Math.random() * 10) + 1; // 1-10

// Lainnya
Math.abs(-5);      // 5 (absolute)
Math.pow(2, 3);    // 8 (pangkat)
Math.sqrt(16);     // 4 (akar)
Math.sign(-10);    // -1
\`\`\`

## Random dalam Range

\`\`\`javascript
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomBetween(10, 20); // 10-20
\`\`\`
  `,

  quiz: [
    { question: "Math.random() menghasilkan angka dalam range?", options: ["0 - 1", "0 - 0.999...", "0 - 100", "1 - 10"], correctAnswer: 1, explanation: "Math.random() menghasilkan 0 (inklusif) sampai <1 (eksklusif)." },
    { question: "Math.floor(4.9) menghasilkan?", options: ["5", "4", "4.9", "0"], correctAnswer: 1 }
  ]
};