export const chapter = {
  slug: "javascript-operators",
  title: "Operator",
  description: "Kuasai semua jenis operator di JavaScript: aritmatika, perbandingan, logika, dan lainnya.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-variables", "javascript-data-types"],
  tags: ["javascript", "operator", "aritmatika", "logika"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Operator di JavaScript

Operator adalah simbol yang melakukan operasi pada nilai (operand).

## 1. Operator Aritmatika

\`\`\`javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (penjumlahan)
console.log(a - b);  // 7  (pengurangan)
console.log(a * b);  // 30 (perkalian)
console.log(a / b);  // 3.333... (pembagian)
console.log(a % b);  // 1  (modulus/sisa bagi)
console.log(a ** b); // 1000 (pangkat)

// Increment/Decrement
let x = 5;
x++;  // x = 6
x--;  // x = 5
++x;  // x = 6 (prefix)
\`\`\`

## 2. Operator Penugasan

\`\`\`javascript
let score = 0;
score += 10;  // score = score + 10
score -= 5;   // score = score - 5
score *= 2;   // score = score * 2
score /= 2;   // score = score / 2
score %= 3;   // score = score % 3
score **= 2;  // score = score ** 2
\`\`\`

## 3. Operator Perbandingan

\`\`\`javascript
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
console.log(5 <= 4);  // false

// Equality
console.log(5 == "5");   // true  (loose, bandingkan nilai)
console.log(5 === "5");  // false (strict, bandingkan nilai + tipe)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
\`\`\`
⚠️ **Selalu gunakan === (strict equality)** untuk menghindari bug!

## 4. Operator Logika

\`\`\`javascript
// AND (&&)
console.log(true && true);   // true
console.log(true && false);  // false

// OR (||)
console.log(true || false);  // true
console.log(false || false); // false

// NOT (!)
console.log(!true);          // false
console.log(!false);         // true

// Short-circuit evaluation
let name = user.name || "Anonymous";
let isLoggedIn = true;
isLoggedIn && console.log("User logged in");
\`\`\`

## 5. Ternary Operator

\`\`\`javascript
// kondisi ? jika_true : jika_false
let umur = 20;
let status = umur >= 18 ? "Dewasa" : "Anak-anak";

let isLoggedIn = true;
let message = isLoggedIn ? "Selamat datang!" : "Silakan login";
\`\`\`

## 6. Optional Chaining (?.)

\`\`\`javascript
const user = { nama: "Budi", alamat: { kota: "Jakarta" } };

console.log(user?.alamat?.kota);  // "Jakarta"
console.log(user?.profile?.umur); // undefined (tidak error!)
\`\`\`

## 7. Nullish Coalescing (??)

\`\`\`javascript
let name = null;
console.log(name ?? "Anonymous"); // "Anonymous"

let score = 0;
console.log(score ?? 100); // 0 (0 bukan null/undefined)
console.log(score || 100); // 100 (0 dianggap falsy!)
\`\`\`

## 8. Spread Operator (...)

\`\`\`javascript
// Array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]

// Object
const user = { nama: "Budi" };
const userLengkap = { ...user, umur: 25, kota: "Jakarta" };
\`\`\`

## 9. Rest Parameter

\`\`\`javascript
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
\`\`\`
  `,

  quiz: [
    {
      question: "Apa beda == dan ===?",
      options: [
        "Tidak ada beda",
        "== bandingkan nilai, === bandingkan nilai dan tipe",
        "=== lebih lambat",
        "== hanya untuk angka"
      ],
      correctAnswer: 1,
      explanation: "== (loose equality) membandingkan nilai setelah konversi tipe. === (strict equality) membandingkan nilai dan tipe tanpa konversi."
    },
    {
      question: "Apa hasil dari 5 + '5'?",
      options: ["10", "'55'", "25", "Error"],
      correctAnswer: 1,
      explanation: "JavaScript melakukan type coercion - jika string terlibat, operator + menjadi concatenation, menghasilkan string '55'."
    },
    {
      question: "Apa perbedaan || dan ??",
      options: [
        "Tidak ada beda",
        "|| cek falsy, ?? hanya cek null/undefined",
        "?? lebih cepat",
        "|| hanya untuk string"
      ],
      correctAnswer: 1,
      explanation: "|| menganggap falsy values (0, '', false) sebagai false. ?? hanya menganggap null dan undefined, sehingga 0 atau '' tetap dianggap valid."
    }
  ]
};