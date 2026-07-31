export const chapter = {
  slug: "javascript-loops",
  title: "Perulangan (for, while)",
  description: "Kuasai semua jenis perulangan di JavaScript.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-conditionals"],
  tags: ["javascript", "loop", "for", "while"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## for Loop

\`\`\`javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
\`\`\`

## while Loop

\`\`\`javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
\`\`\`

## do...while

\`\`\`javascript
let i = 0;
do {
    console.log(i); // Minimal jalan 1 kali
    i++;
} while (i < 5);
\`\`\`

## for...of (Array, String, Map, Set)

\`\`\`javascript
const fruits = ['apel', 'jeruk', 'mangga'];
for (const fruit of fruits) {
    console.log(fruit);
}
\`\`\`

## for...in (Object keys)

\`\`\`javascript
const user = { nama: 'Budi', umur: 25 };
for (const key in user) {
    console.log(key, user[key]);
}
\`\`\`

## break & continue

\`\`\`javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;    // Berhenti total
    if (i % 2 === 0) continue; // Lewati iterasi
    console.log(i); // 1, 3
}
\`\`\`
  `,

  quiz: [
    { question: "Apa beda for...of dan for...in?", options: ["Tidak ada beda", "for...of untuk values, for...in untuk keys", "for...in untuk values", "Tergantung browser"], correctAnswer: 1, explanation: "for...of iterasi nilai (array, string), for...in iterasi key/properti (object)." },
    { question: "Apa fungsi continue?", options: ["Hentikan loop", "Lewati iterasi saat ini, lanjut berikutnya", "Ulang dari awal", "Keluar dari fungsi"], correctAnswer: 1 }
  ]
};