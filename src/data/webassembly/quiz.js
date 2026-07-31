export const chapter = {
  slug: "webassembly-quiz",
  title: "Quiz Akhir WebAssembly",
  description: "Uji pemahamanmu tentang WebAssembly.",
  icon: "SiWebassembly",
  color: "#654FF0",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["webassembly-performance"],
  tags: ["webassembly", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `## Quiz Akhir WebAssembly\n\n10 soal.`,
  quiz: [
    { question: "WebAssembly vs JS?", options: ["Same", "Wasm: binary, near-native speed", "JS faster", "Wasm deprecated"], correctAnswer: 1 },
    { question: ".wasm file?", options: ["Text", "Binary format", "JSON", "XML"], correctAnswer: 1 },
    { question: "wasm-pack?", options: ["C++", "Rust + Wasm tool", "Go", "Python"], correctAnswer: 1 },
    { question: ".wat?", options: ["Binary", "Text format (human-readable)", "Image", "Audio"], correctAnswer: 1 },
    { question: "Wasm memory?", options: ["Object", "Shared ArrayBuffer", "String", "DOM"], correctAnswer: 1 },
    { question: "#[wasm_bindgen]?", options: ["Comment", "Rust macro for JS interop", "Test", "Import"], correctAnswer: 1 },
    { question: "Wasm vs JS: computation?", options: ["JS faster", "Wasm ~10-100x faster", "Same", "Depends"], correctAnswer: 1 },
    { question: "Wasm: DOM?", options: ["Fast", "Slow (via JS interop)", "Direct", "Not possible"], correctAnswer: 1 },
    { question: "Emscripten?", options: ["Rust", "C/C++ to Wasm", "AssemblyScript", "JS"], correctAnswer: 1 },
    { question: "Wasm + Web Worker?", options: ["No", "Heavy computation off main thread", "Same thread", "Slower"], correctAnswer: 1 }
  ]
};