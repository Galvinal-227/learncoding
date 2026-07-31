export const chapter = {
  slug: "async-javascript-microtasks-macrotasks",
  title: "Microtasks & Macrotasks",
  description: "Deep dive ke Event Loop: perbedaan microtask dan macrotask serta urutan eksekusinya.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["async-javascript-promises"],
  tags: ["async", "event-loop", "microtask", "macrotask"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Dua Jenis Task di Event Loop

### Microtasks (Prioritas Tinggi)
- Promise.then/catch/finally
- queueMicrotask()
- MutationObserver

### Macrotasks (Prioritas Normal)
- setTimeout, setInterval
- I/O operations
- UI rendering
- setImmediate (Node.js)

## Urutan Eksekusi

\`\`\`
1. Execute sync code (Call Stack)
2. Execute ALL microtasks
3. Execute 1 macrotask
4. Repeat from step 2
\`\`\`

## Contoh Klasik

\`\`\`javascript
console.log('1'); // Sync

setTimeout(() => console.log('2'), 0); // Macrotask

Promise.resolve()
    .then(() => console.log('3')); // Microtask

console.log('4'); // Sync

// Output: 1, 4, 3, 2
\`\`\`

**Kenapa?**
1. Sync: 1, 4
2. Microtask queue: 3
3. Macrotask queue: 2

## Contoh Kompleks

\`\`\`javascript
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
    Promise.resolve().then(() => console.log('Micro in Timeout'));
}, 0);

Promise.resolve()
    .then(() => {
        console.log('Promise 1');
        setTimeout(() => console.log('Timeout in Promise'), 0);
    })
    .then(() => console.log('Promise 2'));

console.log('End');

// Output: Start, End, Promise 1, Promise 2, Timeout 1, Micro in Timeout, Timeout in Promise
\`\`\`

## queueMicrotask()

\`\`\`javascript
queueMicrotask(() => {
    console.log('Microtask manual');
});
// Sama seperti Promise.resolve().then(() => ...)
\`\`\`

## Starvation

Microtask yang terus menerus bisa membuat macrotask "kelaparan":

\`\`\`javascript
function recursiveMicrotask() {
    Promise.resolve().then(() => {
        console.log('Microtask');
        recursiveMicrotask(); // Infinite microtasks!
    });
}
// setTimeout tidak akan pernah jalan!
\`\`\`
  `,

  quiz: [
    { question: "Mana prioritas lebih tinggi?", options: ["Macrotask", "Microtask", "Sama", "Tergantung"], correctAnswer: 1 },
    { question: "setTimeout termasuk?", options: ["Microtask", "Macrotask", "Sync", "Tidak keduanya"], correctAnswer: 1 },
    { question: "Output: setTimeout(()=>console.log(1),0); Promise.resolve().then(()=>console.log(2)); console.log(3);", options: ["1,2,3", "3,2,1", "2,3,1", "3,1,2"], correctAnswer: 1, explanation: "Sync dulu (3), microtask (2), macrotask (1)." }
  ],

  codeExamples: []
};