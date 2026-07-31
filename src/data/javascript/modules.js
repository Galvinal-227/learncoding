export const chapter = {
  slug: "javascript-modules",
  title: "Module (ES6)",
  description: "Pelajari ES6 Modules untuk mengorganisir kode JavaScript.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-functions"],
  tags: ["javascript", "module", "import", "export"],
  order: 22,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## ES6 Modules

Modules memungkinkan kamu memecah kode menjadi file-file terpisah.

## Named Export/Import

\`\`\`javascript
// user.js
export const nama = 'Budi';
export function sapa() { return 'Halo'; }

// main.js
import { nama, sapa } from './user.js';
import { nama as userName } from './user.js'; // Alias
import * as User from './user.js'; // Semua
\`\`\`

## Default Export/Import

\`\`\`javascript
// api.js
export default class Api { }

// main.js
import Api from './api.js';
\`\`\`

## Mixed Export

\`\`\`javascript
// utils.js
export default function main() { }
export const helper = () => { };

// main.js
import main, { helper } from './utils.js';
\`\`\`

## Dynamic Import

\`\`\`javascript
const module = await import('./module.js');
module.default();
\`\`\`
  `,

  quiz: [
    { question: "Apa beda named dan default export?", options: ["Tidak ada", "Named: banyak per file; Default: satu per file", "Default: banyak; Named: satu", "Tergantung browser"], correctAnswer: 1 },
    { question: "Syntax untuk dynamic import?", options: ["require()", "import()", "fetch()", "load()"], correctAnswer: 1, explanation: "import() mengembalikan Promise dan bisa digunakan untuk dynamic/lazy loading." }
  ]
};