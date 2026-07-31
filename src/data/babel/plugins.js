export const chapter = {
  slug: "babel-plugins",
  title: "Plugins & Transformations",
  description: "Pahami cara kerja plugin Babel untuk transformasi kode spesifik.",
  icon: "SiBabel",
  color: "#F9DC3E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["babel-presets"],
  tags: ["babel", "plugin", "transform", "ast"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Plugin Babel

Plugin adalah unit terkecil transformasi Babel. Setiap plugin menangani **satu fitur spesifik**.

## Contoh Plugin

\`\`\`bash
# Arrow functions → regular functions
npm install --save-dev @babel/plugin-transform-arrow-functions

# Classes → prototype-based
npm install --save-dev @babel/plugin-transform-classes

# Optional chaining
npm install --save-dev @babel/plugin-proposal-optional-chaining
\`\`\`

## Konfigurasi Plugin

\`\`\`json
{
  "plugins": [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-classes",
    ["@babel/plugin-proposal-decorators", {
      "legacy": true
    }]
  ]
}
\`\`\`

## Urutan Plugin Penting

1. Plugins dijalankan **sebelum** presets
2. Plugins dijalankan **dari kiri ke kanan**
3. Presets dijalankan **dari kanan ke kiri**

## Cara Kerja Transformasi

\`\`\`
Source Code → Parse → AST → Transform → AST baru → Generate → Output Code
\`\`\`

### AST (Abstract Syntax Tree)
\`\`\`javascript
// Input
const x = 1;

// AST Representation
{
  "type": "VariableDeclaration",
  "declarations": [{
    "type": "VariableDeclarator",
    "id": { "type": "Identifier", "name": "x" },
    "init": { "type": "NumericLiteral", "value": 1 }
  }]
}
\`\`\`

## Plugin Kustom (Contoh)

\`\`\`javascript
// plugin-hapus-console.js
module.exports = function() {
    return {
        visitor: {
            CallExpression(path) {
                if (path.node.callee.object?.name === 'console') {
                    path.remove();
                }
            }
        }
    };
};

// Gunakan di .babelrc
{
  "plugins": ["./plugin-hapus-console.js"]
}
\`\`\`
  `,

  quiz: [
    { question: "Plugin vs Preset?", options: ["Sama", "Plugin: satu fitur; Preset: kumpulan plugin", "Preset lebih kecil", "Plugin deprecated"], correctAnswer: 1 },
    { question: "Urutan eksekusi plugin?", options: ["Kanan ke kiri", "Kiri ke kanan", "Acak", "Alphabetical"], correctAnswer: 1 },
    { question: "AST singkatan?", options: ["Abstract Syntax Tree", "Auto Script Transform", "Async System Tool", "Application State Tree"], correctAnswer: 0 }
  ],

  codeExamples: []
};