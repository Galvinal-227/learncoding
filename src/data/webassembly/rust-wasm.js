export const chapter = {
  slug: "webassembly-rust-wasm",
  title: "Rust + WebAssembly",
  description: "Bangun WebAssembly modules dengan Rust dan wasm-pack untuk NPM integration.",
  icon: "SiWebassembly",
  color: "#654FF0",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["webassembly-setup"],
  tags: ["webassembly", "rust", "wasm-pack", "npm"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Setup Rust Project

\`\`\`bash
wasm-pack new hello-wasm
cd hello-wasm
\`\`\`

## Rust Code

\`\`\`rust
// src/lib.rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2)
    }
}
\`\`\`

## Build

\`\`\`bash
wasm-pack build --target web
# Output: pkg/ folder with .wasm + .js glue
\`\`\`

## JavaScript Usage

\`\`\`javascript
import init, { add, fibonacci } from './pkg/hello_wasm.js';

await init();

console.log(add(5, 3));        // 8
console.log(fibonacci(40));    // 102334155 (super fast!)
\`\`\`

## NPM Package

\`\`\`javascript
// package.json
{
    "name": "hello-wasm",
    "main": "pkg/hello_wasm.js",
    "files": ["pkg/"]
}

// Publish
wasm-pack publish
\`\`\`

## wasm-bindgen Magic

\`\`\`
#[wasm_bindgen] auto-generates:
- JavaScript glue code
- TypeScript definitions
- Memory management
- String/Array conversion
\`\`\`
  `,

  quiz: [
    { question: "wasm-pack?", options: ["C++ tool", "Rust + Wasm build tool", "Go compiler", "Python bundler"], correctAnswer: 1 },
    { question: "#[wasm_bindgen]?", options: ["Comment", "Rust macro for JS interop", "Test", "Import"], correctAnswer: 1 }
  ],

  codeExamples: []
};