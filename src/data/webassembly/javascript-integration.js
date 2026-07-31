export const chapter = {
  slug: "webassembly-javascript-integration",
  title: "JavaScript Integration",
  description: "Panggil Wasm dari JavaScript dan sebaliknya dengan interop.",
  icon: "SiWebassembly",
  color: "#654FF0",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["webassembly-modules"],
  tags: ["webassembly", "javascript", "interop", "memory"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## JS → Wasm

\`\`\`javascript
// Load Wasm
const { instance } = await WebAssembly.instantiateStreaming(
    fetch('math.wasm')
);

// Call Wasm function
const result = instance.exports.fibonacci(40);
console.log(result);
\`\`\`

## Wasm → JS (Import)

\`\`\`javascript
const importObject = {
    env: {
        jsLog: (value) => console.log('Wasm says:', value),
        getTime: () => Date.now()
    }
};

const { instance } = await WebAssembly.instantiateStreaming(
    fetch('module.wasm'),
    importObject
);
\`\`\`

## Memory Sharing

\`\`\`javascript
// Wasm memory is ArrayBuffer
const memory = instance.exports.memory;
const buffer = new Uint8Array(memory.buffer);

// Write data for Wasm
buffer[0] = 42;
buffer[1] = 7;

// Call Wasm to process
instance.exports.process(0, 2);

// Read result from Wasm
console.log(buffer[2]);
\`\`\`

## Web Workers + Wasm

\`\`\`javascript
// worker.js
self.onmessage = async (event) => {
    const { instance } = await WebAssembly.instantiateStreaming(
        fetch('heavy.wasm')
    );
    const result = instance.exports.compute(event.data);
    self.postMessage(result);
};

// main.js
const worker = new Worker('worker.js');
worker.postMessage(inputData);
worker.onmessage = (e) => console.log('Result:', e.data);
\`\`\`
  `,

  quiz: [
    { question: "Wasm memory?", options: ["JS object", "Shared ArrayBuffer", "String", "DOM"], correctAnswer: 1 },
    { question: "Wasm + Web Worker?", options: ["Not possible", "Heavy computation off main thread", "Same thread", "Slower"], correctAnswer: 1 }
  ],

  codeExamples: []
};