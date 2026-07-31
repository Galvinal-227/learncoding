import { chapter as future } from './future.js';
import { chapter as introduction } from './introduction.js';
import { chapter as javascript_integration } from './javascript-integration.js';
import { chapter as modules } from './modules.js';
import { chapter as performance } from './performance.js';
import { chapter as quiz } from './quiz.js';
import { chapter as rust_wasm } from './rust-wasm.js';
import { chapter as setup } from './setup.js';

export const category = {
  slug: "webassembly",
  title: "WebAssembly",
  description: "Pelajari WebAssembly untuk menjalankan kode performa tinggi di browser dengan C++, Rust, dan Go.",
  icon: "SiWebassembly",
  color: "#654FF0",
  totalChapters: 8,
  difficulty: "Advanced",
  order: 73,
  isPublished: true,
  chapters: [
    future,
    introduction,
    javascript_integration,
    modules,
    performance,
    quiz,
    rust_wasm,
    setup
  ]
};
