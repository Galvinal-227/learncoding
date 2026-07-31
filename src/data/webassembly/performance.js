export const chapter = {
  slug: "webassembly-performance",
  title: "Performance",
  description: "Benchmark dan optimasi WebAssembly vs JavaScript.",
  icon: "SiWebassembly",
  color: "#654FF0",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["webassembly-javascript-integration"],
  tags: ["webassembly", "performance", "benchmark", "optimization"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Wasm vs JS Benchmark

\`\`\`javascript
// JavaScript
function fibJS(n) {
    if (n <= 1) return n;
    return fibJS(n - 1) + fibJS(n - 2);
}

// Wasm
const fibWasm = instance.exports.fibonacci;

// Benchmark
console.time('JS');
fibJS(40);
console.timeEnd('JS'); // ~1000ms

console.time('Wasm');
fibWasm(40);
console.timeEnd('Wasm'); // ~50ms (20x faster!)
\`\`\`

## When Wasm is Faster

\`\`\`
✅ Mathematical computation
✅ Image/video processing
✅ Encryption/compression
✅ Game physics
✅ Data serialization

❌ Simple DOM manipulation
❌ Small tasks (<1ms)
❌ Frequent JS interop (call overhead)
\`\`\`

## Optimization Tips

\`\`\`
✅ Minimize JS ↔ Wasm calls (batch data)
✅ Use TypedArrays for shared memory
✅ Avoid frequent memory allocation in Wasm
✅ Use Web Workers for parallel processing
✅ Profile with browser DevTools
\`\`\`
  `,

  quiz: [
    { question: "Wasm vs JS: computation?", options: ["JS faster", "Wasm ~10-100x faster", "Same", "Depends"], correctAnswer: 1 },
    { question: "Wasm: DOM?", options: ["Fast", "Slow (via JS interop overhead)", "Direct", "Not possible"], correctAnswer: 1 }
  ],

  codeExamples: []
};