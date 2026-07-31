export const chapter = {
  slug: "design-patterns-singleton-pattern",
  title: "Singleton Pattern",
  description: "Singleton pattern: satu instance, global access point, dan use cases.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["design-patterns-module-pattern"],
  tags: ["design-patterns", "singleton", "instance", "global"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Singleton Pattern

Memastikan class **hanya punya satu instance** dan menyediakan **global access point** ke instance tersebut.

## Implementasi Modern (ES6+)

\`\`\`javascript
class ConfigManager {
    static #instance = null;
    
    constructor() {
        if (ConfigManager.#instance) {
            return ConfigManager.#instance;
        }
        this.config = {};
        ConfigManager.#instance = this;
    }
    
    set(key, value) { this.config[key] = value; }
    get(key) { return this.config[key]; }
    getAll() { return { ...this.config }; }
}

const config1 = new ConfigManager();
const config2 = new ConfigManager();
console.log(config1 === config2); // true!
\`\`\`

## Use Cases

- 📦 **Configuration manager**
- 🗄️ **Database connection pool**
- 📝 **Logger service**
- 🔒 **Authentication state**
- 🎯 **Redux store** (single store)
- 📡 **WebSocket connection** (satu koneksi)

## Singleton di JavaScript Modules

\`\`\`javascript
// logger.js - Otomatis singleton!
class Logger {
    log(msg) { console.log(\`[INFO] \${msg}\`); }
    error(msg) { console.error(\`[ERROR] \${msg}\`); }
}

export default new Logger(); // Satu instance untuk seluruh app

// Di file manapun:
import logger from './logger.js';
logger.log('Hello'); // Instance yang sama
\`\`\`

## Singleton vs Static Class

| | Singleton | Static Class |
|---|----------|--------------|
| Instance | Bisa dibuat (meski satu) | Tidak bisa |
| Inheritance | ✅ Bisa | ❌ Tidak bisa |
| Interface | ✅ Bisa implement | ❌ Tidak bisa |
| Lazy init | ✅ Bisa | ❌ Selalu loaded |
| State | Mutable | Static (shared) |

## Singleton + Module Pattern

\`\`\`javascript
const Database = (function() {
    let instance;
    
    function createInstance() {
        return { query: (sql) => console.log(\`Executing: \${sql}\`) };
    }
    
    return {
        getInstance() {
            if (!instance) instance = createInstance();
            return instance;
        }
    };
})();

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true
\`\`\`
  `,

  quiz: [
    { question: "Singleton pattern?", options: ["Banyak instance", "Satu instance, global access", "Tanpa instance", "Setiap request instance baru"], correctAnswer: 1 },
    { question: "ES6 module export new Class()?", options: ["Banyak instance", "Otomatis singleton (satu instance)", "Error", "Tidak bisa"], correctAnswer: 1 },
    { question: "Singleton vs Static?", options: ["Sama", "Singleton: bisa instance, inheritance; Static: tidak", "Static lebih fleksibel", "Singleton deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};