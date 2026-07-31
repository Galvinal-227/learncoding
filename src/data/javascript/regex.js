export const chapter = {
  slug: "javascript-regex",
  title: "Regular Expression",
  description: "Kuasai Regular Expression untuk pencarian dan manipulasi string.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-strings"],
  tags: ["javascript", "regex", "pattern", "string"],
  order: 20,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Membuat Regex

\`\`\`javascript
// Literal
const regex = /pattern/flags;

// Constructor
const regex = new RegExp('pattern', 'flags');
\`\`\`

## Flags

\`\`\`javascript
/g - Global (semua)
/i - Case-insensitive
/m - Multiline
/s - DotAll (. cocok newline)
/u - Unicode
\`\`\`

## Method Regex

\`\`\`javascript
regex.test(str);     // true/false
str.match(regex);    // Array hasil
str.replace(regex, ''); // Ganti
str.search(regex);   // Index pertama
str.split(regex);    // Split
\`\`\`

## Pattern Penting

\`\`\`javascript
/^abc/;        // Mulai dengan abc
/xyz$/;        // Akhiri dengan xyz
/a.b/;         // a + karakter apa pun + b
/[a-z]/;       // Huruf kecil
/[0-9]/;       // Angka
/\\d/;          // Digit (sama [0-9])
/\\w/;          // Word (a-z, A-Z, 0-9, _)
/\\s/;          // Whitespace
/a+/;          // Satu atau lebih
/a*/;          // Nol atau lebih
/a?/;          // Opsional
/a{2,4}/;      // 2-4 kali
/(ab)+/;       // Group
/a|b/;         // Alternatif (OR)
\`\`\`

## Contoh Praktis

\`\`\`javascript
// Email
/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/

// Nomor telepon Indonesia
/^(\\+62|62|0)8[1-9][0-9]{6,9}$/

// Hanya huruf dan spasi
/^[A-Za-z ]+$/
\`\`\`
  `,

  quiz: [
    { question: "Flag /g di regex berarti?", options: ["Global", "Group", "Greedy", "General"], correctAnswer: 0, explanation: "Flag g (global) membuat regex mencari semua kecocokan, bukan hanya yang pertama." },
    { question: "Pattern \\d cocok dengan?", options: ["Huruf", "Digit (0-9)", "Spasi", "Semua karakter"], correctAnswer: 1 }
  ]
};