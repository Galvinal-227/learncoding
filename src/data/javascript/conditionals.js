export const chapter = {
  slug: "javascript-conditionals",
  title: "Percabangan (if, switch)",
  description: "Kontrol alur program dengan if/else, switch, dan ternary operator.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-operators"],
  tags: ["javascript", "if", "switch", "kondisi"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## if/else

\`\`\`javascript
if (kondisi) {
    // Kode jika true
} else if (kondisi2) {
    // Kode jika kondisi2 true
} else {
    // Kode jika semua false
}
\`\`\`

## Ternary Operator

\`\`\`javascript
const status = umur >= 18 ? "Dewasa" : "Anak-anak";
const akses = isAdmin ? "Full" : isUser ? "Terbatas" : "Tidak ada";
\`\`\`

## switch

\`\`\`javascript
switch (nilai) {
    case 1:
        console.log("Satu");
        break;
    case 2:
        console.log("Dua");
        break;
    default:
        console.log("Lainnya");
}
\`\`\`

## Truthy/Falsy di Kondisi

\`\`\`javascript
if (nama) { }  // false jika nama = "", null, undefined
if (arr.length) { } // false jika array kosong
\`\`\`

## Guard Clause (Early Return)

\`\`\`javascript
function proses(user) {
    if (!user) return;           // Guard
    if (!user.isActive) return;  // Guard
    // Logika utama...
}
\`\`\`
  `,

  quiz: [
    { question: "Kapan menggunakan switch vs if/else?", options: ["Selalu if/else", "switch untuk banyak nilai spesifik, if/else untuk range/kondisi kompleks", "Selalu switch", "Tidak ada bedanya"], correctAnswer: 1 },
    { question: "Apa output: if ('') { console.log('ya') } else { console.log('tidak') }?", options: ["ya", "tidak", "Error", "undefined"], correctAnswer: 1, explanation: "String kosong '' adalah falsy, jadi masuk ke else." }
  ]
};