export const chapter = {
  slug: "javascript-generators",
  title: "Generator & Iterator",
  description: "Pelajari Generator functions dan Iterator protocol.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-functions"],
  tags: ["javascript", "generator", "iterator", "lazy"],
  order: 32,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Iterator Protocol

Object yang punya method \`next()\` yang mengembalikan \`{ value, done }\`:

\`\`\`javascript
function buatIterator(arr) {
    let index = 0;
    return {
        next() {
            if (index < arr.length) {
                return { value: arr[index++], done: false };
            }
            return { value: undefined, done: true };
        }
    };
}
\`\`\`

## Generator Function

\`\`\`javascript
function* angkaGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = angkaGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
\`\`\`

## Generator dengan Parameter

\`\`\`javascript
function* counter() {
    let count = 0;
    while (true) {
        const increment = yield count;
        count += increment || 1;
    }
}

const c = counter();
c.next();     // { value: 0 }
c.next(5);    // { value: 5 }
c.next(3);    // { value: 8 }
\`\`\`

## Use Case

### ID Generator
\`\`\`javascript
function* idGenerator() {
    let id = 1;
    while (true) yield id++;
}
\`\`\`

### Range
\`\`\`javascript
function* range(start, end) {
    for (let i = start; i <= end; i++) yield i;
}
[...range(1, 5)]; // [1, 2, 3, 4, 5]
\`\`\`
  `,

  quiz: [
    { question: "Apa output yield di generator?", options: ["Return", "Pause dan return value", "Error", "Lanjut tanpa henti"], correctAnswer: 1, explanation: "yield menjeda eksekusi generator dan mengembalikan value ke pemanggil next()." },
    { question: "Bagaimana mendeklarasikan generator function?", options: ["function*", "generator function", "async function", "yield function"], correctAnswer: 0 }
  ]
};