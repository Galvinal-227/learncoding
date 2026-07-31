export const chapter = {
  slug: "babel-introduction",
  title: "Pengenalan Babel",
  description: "Pahami apa itu Babel dan kenapa JavaScript butuh compiler.",
  icon: "SiBabel",
  color: "#F9DC3E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["babel", "compiler", "javascript", "transpile"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Babel?

Babel adalah **JavaScript compiler** yang mengubah kode JavaScript modern (ES6+) menjadi JavaScript yang kompatibel dengan browser lama.

## Kenapa Butuh Babel?

\`\`\`
Browser User (lama):
- Tidak support arrow functions
- Tidak support async/await
- Tidak support optional chaining
- Tidak support class
\`\`\`

**Solusi:** Babel mengubah kode modern → kode yang dimengerti browser lama.

## Contoh Transformasi

### Input (ES6+):
\`\`\`javascript
const greet = (name) => \`Hello, \${name}!\`;
const user = { name: "Budi", ...details };
const value = obj?.property ?? "default";
\`\`\`

### Output (ES5):
\`\`\`javascript
"use strict";
var greet = function(name) {
    return "Hello, " + name + "!";
};
var user = Object.assign({ name: "Budi" }, details);
var value = obj !== null && obj !== void 0 ? obj.property : "default";
\`\`\`

## Yang Dilakukan Babel

1. **Transform syntax** - Ubah syntax baru ke lama
2. **Polyfill features** - Tambah implementasi fitur baru (via core-js)
3. **Source maps** - Debug kode asli meski sudah di-compile
4. **JSX transformation** - Ubah JSX React ke JavaScript

## Yang TIDAK Dilakukan Babel

❌ **Tidak** menambahkan fitur yang tidak bisa di-polyfill (Proxy, WeakMap, dll)
❌ **Tidak** membundling (itu tugas Webpack/Vite)
❌ **Tidak** minifikasi (itu tugas Terser/SWC)
❌ **Tidak** type checking (itu tugas TypeScript)

## Instalasi

\`\`\`bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
\`\`\`

## Penggunaan Dasar

\`\`\`bash
# Compile file
npx babel src/script.js --out-dir dist

# Compile dengan preset
npx babel src --out-dir dist --presets=@babel/preset-env
\`\`\`

## Ekosistem Babel

\`\`\`
@babel/core          - Engine utama
@babel/cli           - Command line tool
@babel/preset-env    - Smart preset (auto detect target)
@babel/preset-react  - Untuk JSX
@babel/preset-typescript - Untuk TypeScript
@babel/plugin-*      - Plugin spesifik
core-js              - Polyfill library
\`\`\`
  `,

  quiz: [
    { question: "Babel adalah?", options: ["Framework", "JavaScript compiler/transpiler", "Bundler", "Testing tool"], correctAnswer: 1 },
    { question: "Apa yang dilakukan Babel?", options: ["Minify code", "Transform JS modern ke JS lama", "Bundle modules", "Type checking"], correctAnswer: 1 },
    { question: "Apa yang TIDAK dilakukan Babel?", options: ["Transform syntax", "Bundle modules", "Source maps", "JSX transform"], correctAnswer: 1, explanation: "Babel hanya transform syntax, tidak membundling. Bundling dilakukan Webpack/Vite/Rollup." }
  ],

  codeExamples: [
    {
      title: "Before & After Babel",
      language: "javascript",
      code: `// ===== INPUT (Modern JS) =====
const greet = (name) => \`Hello, \${name}!\`;
const arr = [1, 2, 3];
const doubled = arr.map(n => n * 2);
const { a, ...rest } = { a: 1, b: 2, c: 3 };
const value = obj?.prop ?? 'default';
class User {
    #privateField = 'secret';
    getField() { return this.#privateField; }
}

// ===== OUTPUT (ES5 after Babel) =====
"use strict";
var greet = function(name) {
    return "Hello, " + name + "!";
};
var arr = [1, 2, 3];
var doubled = arr.map(function(n) { return n * 2; });
var _obj$a = { a: 1, b: 2, c: 3 }, a = _obj$a.a, rest = _objectWithoutProperties(_obj$a, ["a"]);
var value = (_obj = obj) !== null && _obj !== void 0 ? _obj.prop : 'default';`
    }
  ]
};