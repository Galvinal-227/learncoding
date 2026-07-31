export const chapter = {
  slug: "webassembly-modules",
  title: "WebAssembly Modules",
  description: "Pahami struktur .wasm module: imports, exports, memory, tables.",
  icon: "SiWebassembly",
  color: "#654FF0",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["webassembly-setup"],
  tags: ["webassembly", "modules", "wat", "text-format"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## .wasm vs .wat

| Format | Deskripsi |
|--------|-----------|
| **.wasm** | Binary format (production) |
| **.wat** | Text format (human-readable) |

## WAT Example (Text Format)

\`\`\`wat
(module
    ;; Import from JavaScript
    (import "console" "log" (func $log (param i32)))
    
    ;; Export to JavaScript
    (func (export "add") (param i32 i32) (result i32)
        local.get 0
        local.get 1
        i32.add
    )
    
    ;; Memory
    (memory (export "memory") 1)  ;; 1 page = 64KB
)
\`\`\`

## Module Structure

\`\`\`javascript
// Load & instantiate
const response = await fetch('module.wasm');
const bytes = await response.arrayBuffer();
const module = await WebAssembly.instantiate(bytes, {
    console: {
        log: (value) => console.log(value)
    }
});

// Call exported function
console.log(module.instance.exports.add(5, 3)); // 8

// Access memory
const memory = module.instance.exports.memory;
const buffer = new Uint8Array(memory.buffer);
\`\`\`

## Key Concepts

| Concept | Deskripsi |
|---------|-----------|
| **Module** | Compiled .wasm file |
| **Instance** | Running module with state |
| **Memory** | Linear memory (ArrayBuffer) |
| **Table** | Function references |
| **Import** | JS functions passed to Wasm |
| **Export** | Wasm functions exposed to JS |
  `,

  quiz: [
    { question: ".wat?", options: ["Binary", "WebAssembly Text Format (human-readable)", "Image", "Audio"], correctAnswer: 1 },
    { question: "WebAssembly.instantiate()?", options: ["Delete", "Load and compile .wasm module", "Unload", "Pause"], correctAnswer: 1 }
  ],

  codeExamples: []
};