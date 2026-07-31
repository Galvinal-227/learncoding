export const chapter = {
  slug: "javascript-json",
  title: "JSON",
  description: "Pelajari JSON (JavaScript Object Notation) untuk pertukaran data.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-objects"],
  tags: ["javascript", "json", "data", "api"],
  order: 23,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu JSON?

JSON (JavaScript Object Notation) adalah format **pertukaran data** ringan yang mudah dibaca manusia dan mudah di-parse mesin.

## JSON vs Object JavaScript

| JSON | JavaScript Object |
|------|-------------------|
| Key harus string (quotes) | Key bisa tanpa quotes |
| Tidak boleh ada fungsi | Boleh fungsi |
| Tidak boleh trailing comma | Boleh |
| Hanya tipe data tertentu | Semua tipe JS |

## JSON.stringify()

\`\`\`javascript
const user = { nama: "Budi", umur: 25 };
const json = JSON.stringify(user);
// '{"nama":"Budi","umur":25}'

// Pretty print
JSON.stringify(user, null, 2);
\`\`\`

## JSON.parse()

\`\`\`javascript
const json = '{"nama":"Budi","umur":25}';
const user = JSON.parse(json);
console.log(user.nama); // "Budi"
\`\`\`

## Error Handling

\`\`\`javascript
try {
    const data = JSON.parse(invalidJson);
} catch (error) {
    console.error('JSON tidak valid:', error);
}
\`\`\`

## JSON + Local Storage

\`\`\`javascript
const user = { nama: 'Budi', tema: 'dark' };
localStorage.setItem('user', JSON.stringify(user));
const saved = JSON.parse(localStorage.getItem('user'));
\`\`\`
  `,

  quiz: [
    { question: "Apa kepanjangan JSON?", options: ["JavaScript Object Notation", "Java Script Online", "JSON Standard Object", "Just Simple Object"], correctAnswer: 0 },
    { question: "Method apa untuk mengkonversi object ke string JSON?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.encode()"], correctAnswer: 1 }
  ]
};