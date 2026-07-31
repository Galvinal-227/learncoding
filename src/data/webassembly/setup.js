export const chapter = {
  slug: "webassembly-setup",
  title: "Setup & Tools",
  description: "Setup tools untuk compile WebAssembly: Emscripten, wasm-pack, AssemblyScript.",
  icon: "SiWebassembly",
  color: "#654FF0",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["webassembly-introduction"],
  tags: ["webassembly", "setup", "emscripten", "wasm-pack"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Tools Overview

| Tool | Language | Best For |
|------|----------|----------|
| **Emscripten** | C/C++ | Porting existing C/C++ code |
| **wasm-pack** | Rust | New projects, NPM integration |
| **AssemblyScript** | TypeScript-like | Easy, familiar syntax |
| **TinyGo** | Go | Go developers |
| **Binaryen** | Any | Wasm optimization tools |

## Emscripten (C/C++)

\`\`\`bash
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh

# Compile C to Wasm
emcc hello.c -o hello.js
\`\`\`

## wasm-pack (Rust)

\`\`\`bash
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
# or
npm install -g wasm-pack

# Create new project
npm init rust-webpack my-app
cd my-app
npm start
\`\`\`

## AssemblyScript

\`\`\`bash
npm init
npm install --save-dev assemblyscript
npx asinit .
npm run asbuild
\`\`\`

## Check Browser Support

\`\`\`javascript
if ('WebAssembly' in window) {
    console.log('WebAssembly supported!');
    WebAssembly.compile(wasmBuffer);
}
\`\`\`
  `,

  quiz: [
    { question: "Emscripten?", options: ["Rust tool", "C/C++ to Wasm compiler", "AssemblyScript", "JS optimizer"], correctAnswer: 1 },
    { question: "wasm-pack?", options: ["C++", "Rust to Wasm tool", "Go", "Python"], correctAnswer: 1 }
  ],

  codeExamples: []
};