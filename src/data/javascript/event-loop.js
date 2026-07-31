export const chapter = {
  slug: "javascript-event-loop",
  title: "Event Loop",
  description: "Pahami cara kerja Event Loop, Call Stack, Task Queue, dan Microtask di JavaScript.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["javascript-promises", "javascript-async-await"],
  tags: ["javascript", "event-loop", "async", "runtime"],
  order: 27,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## JavaScript itu Single-Threaded

JavaScript hanya punya **satu Call Stack** (satu thread). Tapi bisa menangani operasi async via **Event Loop**.

## Arsitektur Runtime

\`\`\`
┌─────────────────────────────────────┐
│         JAVASCRIPT ENGINE           │
│  ┌───────────┐  ┌────────────────┐  │
│  │Call Stack │  │  Memory Heap   │  │
│  └───────────┘  └────────────────┘  │
└─────────────────────────────────────┘
         │                    ▲
         ▼                    │
┌─────────────────┐  ┌─────────────────┐
│   Web APIs      │  │  Task Queue     │
│ (setTimeout,    │  │  (Macrotasks)   │
│  fetch, DOM)    │  │  - setTimeout   │
└─────────────────┘  │  - setInterval  │
         │           │  - I/O          │
         ▼           └─────────────────┘
┌─────────────────┐           │
│Microtask Queue  │           ▼
│ - Promise.then  │    ┌─────────────┐
│ - queueMicrotask│    │ EVENT LOOP  │
│ - MutationObs.  │    └─────────────┘
└─────────────────┘
\`\`\`

## Call Stack

Stack yang melacak eksekusi fungsi:
\`\`\`javascript
function pertama() {
    console.log('pertama');
    kedua();
}

function kedua() {
    console.log('kedua');
}

pertama();
// Stack: [pertama] → [pertama, kedua] → [pertama] → []
\`\`\`

## Macrotask vs Microtask

### Microtask (Prioritas Lebih Tinggi)
- Promise.then/catch/finally
- queueMicrotask()
- MutationObserver

### Macrotask
- setTimeout, setInterval
- I/O operations
- UI rendering

## Urutan Eksekusi

\`\`\`javascript
console.log('1'); // Sync

setTimeout(() => console.log('2'), 0); // Macrotask

Promise.resolve()
    .then(() => console.log('3')); // Microtask

console.log('4'); // Sync

// Output: 1, 4, 3, 2
\`\`\`

**Kenapa?**
1. Sync code dulu (1, 4)
2. Microtask queue (3)
3. Macrotask queue (2)

## Contoh Lengkap

\`\`\`javascript
console.log('Start');

setTimeout(() => console.log('Timeout'), 0);

Promise.resolve()
    .then(() => console.log('Promise 1'))
    .then(() => console.log('Promise 2'));

queueMicrotask(() => console.log('Microtask'));

console.log('End');

// Output:
// Start
// End
// Promise 1
// Promise 2
// Microtask
// Timeout
\`\`\`

## Starvation

Microtask bisa membuat macrotask kelaparan:
\`\`\`javascript
function recursiveMicrotask() {
    Promise.resolve().then(() => {
        console.log('Microtask');
        recursiveMicrotask(); // Infinite microtask!
    });
}
// setTimeout tidak akan pernah jalan!
\`\`\`
  `,

  quiz: [
    {
      question: "Mana yang dieksekusi lebih dulu: Microtask atau Macrotask?",
      options: ["Macrotask", "Microtask", "Bersamaan", "Tergantung browser"],
      correctAnswer: 1,
      explanation: "Setelah Call Stack kosong, Event Loop memproses semua Microtask dulu sebelum mengambil Macrotask berikutnya."
    },
    {
      question: "setTimeout dengan delay 0 akan dieksekusi setelah?",
      options: [
        "Segera",
        "Setelah semua sync code dan semua microtask selesai",
        "Sebelum sync code",
        "Setelah 0 detik pasti"
      ],
      correctAnswer: 1,
      explanation: "setTimeout(..., 0) adalah macrotask. Ia harus menunggu Call Stack kosong dan semua Microtask selesai dulu."
    }
  ]
};