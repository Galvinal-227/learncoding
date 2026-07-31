export const chapter = {
  slug: "modules",
  title: "Modules",
  description: "Mengorganisir kode menggunakan modules di TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["typescript-introduction"],
  tags: ["typescript", "modules", "import", "export"],
  order: 13,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Export

### Named Export
\`\`\`typescript
// math.ts
export const PI = 3.14159;
export function add(a: number, b: number): number {
    return a + b;
}
export class Calculator {
    multiply(a: number, b: number): number {
        return a * b;
    }
}
\`\`\`

### Default Export
\`\`\`typescript
// calculator.ts
export default class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
}
\`\`\`

### Export All
\`\`\`typescript
// index.ts
export * from './math';
export * from './calculator';
export { default as Calculator } from './calculator';
\`\`\`

## Import

### Named Import
\`\`\`typescript
import { PI, add, Calculator } from './math';
console.log(PI);
console.log(add(2, 3));
const calc = new Calculator();
\`\`\`

### Default Import
\`\`\`typescript
import Calculator from './calculator';
const calc = new Calculator();
\`\`\`

### Rename Import
\`\`\`typescript
import { add as sum } from './math';
import * as MathUtils from './math';
\`\`\`

### Dynamic Import
\`\`\`typescript
async function loadModule() {
    const module = await import('./math');
    console.log(module.add(2, 3));
}
\`\`\`

## Re-export

\`\`\`typescript
// index.ts
export { add, multiply } from './math';
export { default as Calculator } from './calculator';
export * from './utils';
\`\`\`

## Namespace (Legacy)

\`\`\`typescript
namespace MathUtils {
    export const PI = 3.14159;
    export function add(a: number, b: number): number {
        return a + b;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(2, 3));
\`\`\`

## Module Resolution

### Node.js
\`\`\`json
{
    "compilerOptions": {
        "module": "commonjs",
        "moduleResolution": "node"
    }
}
\`\`\`

### ES Modules
\`\`\`json
{
    "compilerOptions": {
        "module": "ES2020",
        "moduleResolution": "node"
    }
}
\`\`\`

## Path Aliases

\`\`\`json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"],
            "@components/*": ["src/components/*"],
            "@utils/*": ["src/utils/*"]
        }
    }
}
\`\`\`

\`\`\`typescript
import { Button } from '@components/Button';
import { formatDate } from '@utils/date';
\`\`\`

## Best Practices

1. **Use named exports** for multiple exports
2. **Use default export** for single export
3. **Use index.ts** for barrel exports
4. **Use path aliases** for clean imports
5. **Use ES modules** over namespaces
6. **Avoid circular dependencies**
7. **Group related exports** in index
8. **Use dynamic imports** for lazy loading
  `,
  quiz: [
    {
      question: "Keyword untuk export default adalah?",
      options: ["export", "export default", "module.exports", "exports"],
      correctAnswer: 1
    },
    {
      question: "Path aliases menggunakan property?",
      options: ["paths", "aliases", "resolutions", "modules"],
      correctAnswer: 0
    },
    {
      question: "Dynamic import menggunakan?",
      options: ["import()", "require()", "load()", "fetch()"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Module Examples",
      code: `// ============================================
// 1. math.ts - Named exports
// ============================================
export const PI = 3.14159;
export const E = 2.71828;

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
}

export class MathOperations {
    static add(a: number, b: number): number {
        return a + b;
    }
    static subtract(a: number, b: number): number {
        return a - b;
    }
}

// ============================================
// 2. calculator.ts - Default export
// ============================================
export default class Calculator {
    private result: number = 0;
    
    add(value: number): this {
        this.result += value;
        return this;
    }
    
    subtract(value: number): this {
        this.result -= value;
        return this;
    }
    
    multiply(value: number): this {
        this.result *= value;
        return this;
    }
    
    divide(value: number): this {
        if (value === 0) throw new Error("Division by zero");
        this.result /= value;
        return this;
    }
    
    getResult(): number {
        return this.result;
    }
    
    clear(): this {
        this.result = 0;
        return this;
    }
}

// ============================================
// 3. utils/index.ts - Barrel export
// ============================================
export * from './string';
export * from './array';
export * from './date';
export { default as Logger } from './logger';

// ============================================
// 4. utils/string.ts
// ============================================
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function truncate(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

export function isEmpty(str: string): boolean {
    return str.trim().length === 0;
}

// ============================================
// 5. utils/array.ts
// ============================================
export function sum(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
}

export function average(arr: number[]): number {
    return arr.length === 0 ? 0 : sum(arr) / arr.length;
}

export function unique<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

// ============================================
// 6. utils/date.ts
// ============================================
export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function formatDateTime(date: Date): string {
    return date.toISOString().replace('T', ' ').slice(0, 19);
}

export function daysBetween(date1: Date, date2: Date): number {
    const diff = date2.getTime() - date1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// ============================================
// 7. utils/logger.ts - Default export
// ============================================
export default class Logger {
    private prefix: string;
    
    constructor(prefix: string = 'APP') {
        this.prefix = prefix;
    }
    
    info(message: string): void {
        console.log(\`[\${this.prefix}] INFO: \${message}\`);
    }
    
    warn(message: string): void {
        console.warn(\`[\${this.prefix}] WARN: \${message}\`);
    }
    
    error(message: string): void {
        console.error(\`[\${this.prefix}] ERROR: \${message}\`);
    }
    
    debug(message: string): void {
        if (process.env.NODE_ENV === 'development') {
            console.debug(\`[\${this.prefix}] DEBUG: \${message}\`);
        }
    }
}

// ============================================
// 8. app.ts - Import usage
// ============================================
// Named imports
import { PI, E, add, subtract, multiply, divide, MathOperations } from './math';

// Default import with alias
import Calculator from './calculator';

// Barrel imports with aliases
import { capitalize, truncate, sum, average, unique, formatDate, formatDateTime } from './utils';
import Logger from './utils/logger';

// Using imports
console.log('PI:', PI);
console.log('E:', E);
console.log('Add:', add(10, 5));
console.log('Subtract:', subtract(10, 5));
console.log('Multiply:', multiply(10, 5));
console.log('Divide:', divide(10, 5));

const calc = new Calculator();
calc.add(10).subtract(3).multiply(2);
console.log('Calculator result:', calc.getResult());

console.log('Capitalize:', capitalize('hello world'));
console.log('Truncate:', truncate('This is a long string', 10));
console.log('Sum:', sum([1, 2, 3, 4, 5]));
console.log('Average:', average([1, 2, 3, 4, 5]));
console.log('Unique:', unique([1, 2, 2, 3, 3, 3]));

console.log('Today:', formatDate(new Date()));
console.log('Now:', formatDateTime(new Date()));

const logger = new Logger('APP');
logger.info('Application started');

// ============================================
// 9. tsconfig.json for modules
// ============================================
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"],
            "@utils/*": ["src/utils/*"],
            "@models/*": ["src/models/*"],
            "@services/*": ["src/services/*"]
        },
        "outDir": "./dist",
        "rootDir": "./src"
    }
}

// ============================================
// 10. Dynamic Import
// ============================================
async function loadMathModule() {
    try {
        const math = await import('./math');
        console.log('Dynamic import result:', math.add(100, 200));
    } catch (error) {
        console.error('Failed to load module:', error);
    }
}

// Conditionally load module
if (process.env.NODE_ENV === 'production') {
    const { default: Logger } = await import('./utils/logger');
    const logger = new Logger('PROD');
    logger.info('Running in production mode');
}`,
      language: "typescript"
    }
  ]
};