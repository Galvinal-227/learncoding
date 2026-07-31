export const chapter = {
  slug: "webassembly-introduction",
  title: "Pengenalan WebAssembly",
  description: "Pahami apa itu WebAssembly, kenapa revolusioner, dan use cases-nya.",
  icon: "SiWebassembly",
  color: "#654FF0",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction"],
  tags: ["webassembly", "wasm", "performance", "binary"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu WebAssembly?

WebAssembly (disingkat **Wasm**) adalah **binary instruction format** yang berjalan di browser dengan performa **near-native**. Dibuat sebagai **compilation target** untuk bahasa seperti C, C++, Rust, Go.

## Kenapa WebAssembly?

- ⚡ **Near-native speed** - 10-100x lebih cepat dari JavaScript untuk komputasi berat
- 🔒 **Secure** - Sandboxed execution, same-origin policy
- 🌐 **Cross-platform** - Jalan di semua browser modern
- 🔧 **Multi-language** - C, C++, Rust, Go, AssemblyScript, Zig
- 🤝 **Interop** - Bisa dipanggil dari JavaScript (dan sebaliknya)

## WebAssembly vs JavaScript

| | JavaScript | WebAssembly |
|---|-----------|-------------|
| Format | Text (parse slow) | Binary (parse fast) |
| Speed | Good (JIT) | Near-native |
| Type | Dynamic | Static |
| GC | Yes | No (future) |
| DOM | ✅ | ❌ (via JS) |
| Use case | UI, business logic | Heavy computation |

## Use Cases

| Use Case | Contoh |
|----------|--------|
| 🎮 **Game Engine** | Unity, Unreal di browser |
| 🎨 **Image/Video Editing** | Photoshop Web, Figma |
| 🧮 **Scientific Computing** | ML inference, simulations |
| 🔐 **Cryptography** | Hashing, encryption |
| 🎵 **Audio Processing** | Codec, synthesizer |
| 📊 **Data Visualization** | Large dataset rendering |
| 🗜️ **Compression** | Zstd, Brotli di browser |

## Who Uses WebAssembly?

| Company | Use Case |
|---------|----------|
| **Figma** | Design tool (C++ → Wasm) |
| **Google Earth** | 3D rendering |
| **Photoshop Web** | Image processing |
| **1Password** | Encryption |
| **AutoCAD** | CAD di browser |
| **Unity** | Game engine |

## .wasm File

\`\`\`
C/Rust Code → Compiler → .wasm (binary) → Browser runs at near-native speed
\`\`\`

## Browser Support

\`\`\`
✅ Chrome 57+
✅ Firefox 52+
✅ Safari 11+
✅ Edge 16+
✅ 97% global support
\`\`\`
  `,

  quiz: [
    { question: "WebAssembly vs JS?", options: ["Same speed", "Wasm: binary, near-native speed", "JS faster", "Wasm deprecated"], correctAnswer: 1 },
    { question: "Wasm: DOM access?", options: ["Yes", "No (via JavaScript)", "Direct", "Full"], correctAnswer: 1 },
    { question: ".wasm file?", options: ["Text", "Binary format", "JSON", "XML"], correctAnswer: 1 }
  ],

  codeExamples: []
};