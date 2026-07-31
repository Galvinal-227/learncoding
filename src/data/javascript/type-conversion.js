export const chapter = {
  slug: "javascript-type-conversion",
  title: "Konversi Tipe Data",
  description: "Pahami type coercion dan cara mengkonversi tipe data di JavaScript.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["javascript-data-types"],
  tags: ["javascript", "konversi", "coercion", "casting"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Type Conversion vs Coercion

- **Type Conversion** (Explicit): Kamu sengaja mengubah tipe
- **Type Coercion** (Implicit): JavaScript otomatis mengubah tipe

## Konversi ke String

### Explicit
\`\`\`javascript
String(123);       // "123"
String(true);      // "true"
(123).toString();  // "123"
\`\`\`

### Implicit (Coercion)
\`\`\`javascript
123 + "";          // "123"
\` + 123\`;         // "123"
\`\`\`

## Konversi ke Number

### Explicit
\`\`\`javascript
Number("123");     // 123
Number("123abc");  // NaN
Number(true);      // 1
Number(false);     // 0
Number(null);      // 0
Number(undefined); // NaN

parseInt("123px");  // 123
parseFloat("3.14"); // 3.14
\`\`\`

### Implicit
\`\`\`javascript
+"123";            // 123
"6" / "2";        // 3
"6" * "2";        // 12
"6" - "2";        // 4
// "6" + "2" = "62" (string concatenation!)
\`\`\`

## Konversi ke Boolean

### Explicit
\`\`\`javascript
Boolean(1);        // true
Boolean(0);        // false
Boolean("");       // false
Boolean("halo");   // true
Boolean(null);     // false
Boolean(undefined);// false
\`\`\`

### Implicit
\`\`\`javascript
!!"halo";         // true
!!0;              // false
\`\`\`

## Falsy Values (8 nilai)
\`\`\`javascript
false, 0, -0, 0n, "", null, undefined, NaN
\`\`\`

## Truthy Values
Semua yang bukan falsy, termasuk:
\`\`\`javascript
"0", "false", [], {}, function(){}
\`\`\`
  `,

  quiz: [
    { question: "Hasil Number('123abc')?", options: ["123", "NaN", "0", "Error"], correctAnswer: 1, explanation: "Number() pada string yang tidak valid menghasilkan NaN (Not a Number)." },
    { question: "Hasil '5' + 3?", options: ["8", "'53'", "53", "Error"], correctAnswer: 1, explanation: "Operator + dengan string melakukan concatenation. '5' + 3 = '53'." },
    { question: "Berapa jumlah falsy values di JavaScript?", options: ["5", "6", "8", "10"], correctAnswer: 2, explanation: "Ada 8 falsy values: false, 0, -0, 0n, '', null, undefined, NaN." }
  ]
};