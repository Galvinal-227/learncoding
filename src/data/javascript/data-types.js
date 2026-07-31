export const chapter = {
  slug: "javascript-data-types",
  title: "Tipe Data",
  description: "Pelajari 8 tipe data di JavaScript: primitive types dan reference types.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-variables"],
  tags: ["javascript", "tipe-data", "primitive", "object"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Tipe Data di JavaScript

JavaScript memiliki 8 tipe data: 7 primitive dan 1 non-primitive.

## Primitive Types (Immutable)

### 1. String
\`\`\`javascript
let nama = "Budi";
let pesan = 'Halo Dunia';
let template = \`Halo \${nama}\`; // Template literal

console.log(typeof nama); // "string"
\`\`\`

### 2. Number
\`\`\`javascript
let umur = 25;
let harga = 99.99;
let infinity = Infinity;
let notANumber = NaN;

console.log(typeof umur); // "number"
\`\`\`

### 3. Boolean
\`\`\`javascript
let isActive = true;
let isLoggedIn = false;

console.log(typeof isActive); // "boolean"
\`\`\`

### 4. Undefined
\`\`\`javascript
let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"
\`\`\`

### 5. Null
\`\`\`javascript
let data = null;
console.log(typeof data); // "object" (bug historis!)
\`\`\`

### 6. Symbol (ES6)
\`\`\`javascript
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false (selalu unik)
\`\`\`

### 7. BigInt (ES2020)
\`\`\`javascript
const bigNumber = 9007199254740991n;
const anotherBig = BigInt("9007199254740991");
\`\`\`

## Non-Primitive (Reference)

### 8. Object
\`\`\`javascript
const user = { nama: "Budi", umur: 25 };
const arr = [1, 2, 3];
const func = function() { return "halo"; };

console.log(typeof user); // "object"
console.log(typeof arr);  // "object"
console.log(typeof func); // "function"
\`\`\`

## Primitive vs Reference

\`\`\`javascript
// Primitive - disalin nilainya
let a = 10;
let b = a;    // b = 10 (copy)
a = 20;
console.log(b); // 10 (tidak berubah)

// Reference - disalin referensinya
let obj1 = { nama: "Budi" };
let obj2 = obj1;     // obj2 menunjuk ke objek yang sama
obj1.nama = "Siti";
console.log(obj2.nama); // "Siti" (berubah!)
\`\`\`

## Mengecek Tipe Data

\`\`\`javascript
typeof "Halo";        // "string"
typeof 42;            // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object" ⚠️
typeof Symbol();      // "symbol"
typeof {};            // "object"
typeof [];            // "object"
typeof function(){};  // "function"

// Cek null
let value = null;
console.log(value === null); // true

// Cek array
console.log(Array.isArray([])); // true
\`\`\`
  `,

  quiz: [
    {
      question: "Apa hasil typeof null?",
      options: ["'null'", "'object'", "'undefined'", "'boolean'"],
      correctAnswer: 1,
      explanation: "typeof null mengembalikan 'object' - ini adalah bug historis JavaScript yang tidak bisa diperbaiki karena alasan kompatibilitas."
    },
    {
      question: "Apa perbedaan primitive dan reference types?",
      options: [
        "Tidak ada perbedaan",
        "Primitive disalin nilai, reference disalin referensi/alamat",
        "Primitive lebih besar",
        "Reference lebih cepat"
      ],
      correctAnswer: 1,
      explanation: "Primitive types disalin nilainya (by value), sedangkan reference types (object, array) disalin referensinya (by reference)."
    }
  ]
};