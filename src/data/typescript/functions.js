export const chapter = {
  slug: "functions",
  title: "Functions",
  description: "Mendefinisikan dan menggunakan functions di TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["typescript-introduction", "typescript-basic-types"],
  tags: ["typescript", "functions", "parameters", "overloads"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Function Types

### Basic Function
\`\`\`typescript
function greet(name: string): string {
    return \`Hello, \${name}\`;
}

const result: string = greet("John");
\`\`\`

### Arrow Function
\`\`\`typescript
const greet = (name: string): string => {
    return \`Hello, \${name}\`;
};

// Short form
const greet = (name: string): string => \`Hello, \${name}\`;
\`\`\`

## Parameters

### Optional Parameters
\`\`\`typescript
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return \`\${greeting}, \${name}\`;
    }
    return \`Hello, \${name}\`;
}

greet("John"); // Hello, John
greet("John", "Hi"); // Hi, John
\`\`\`

### Default Parameters
\`\`\`typescript
function greet(name: string, greeting: string = "Hello"): string {
    return \`\${greeting}, \${name}\`;
}

greet("John"); // Hello, John
greet("John", "Hi"); // Hi, John
\`\`\`

### Rest Parameters
\`\`\`typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3); // 6
sum(1, 2, 3, 4, 5); // 15
\`\`\`

### Destructuring Parameters
\`\`\`typescript
interface User {
    name: string;
    age: number;
    email?: string;
}

function greetUser({ name, age }: User): string {
    return \`\${name} is \${age} years old\`;
}

greetUser({ name: "John", age: 30 });
\`\`\`

## Return Types

### Void Return
\`\`\`typescript
function log(message: string): void {
    console.log(message);
}
\`\`\`

### Never Return
\`\`\`typescript
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}
\`\`\`

### Async Return
\`\`\`typescript
async function fetchData(): Promise<string> {
    const response = await fetch("/api/data");
    return response.text();
}
\`\`\`

## Function Overloads

\`\`\`typescript
// Overload signatures
function process(value: string): string;
function process(value: number): number;
function process(value: boolean): boolean;

// Implementation
function process(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value * 2;
    }
    return !value;
}
\`\`\`

## Generic Functions

\`\`\`typescript
function identity<T>(value: T): T {
    return value;
}

const result1 = identity<string>("hello");
const result2 = identity<number>(42);

// Generic constraints
function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

getLength("hello"); // 5
getLength([1, 2, 3]); // 3
// getLength(42); // ❌ Error
\`\`\`

## Function Types

\`\`\`typescript
// Define function type
type GreetFunction = (name: string) => string;

// Use function type
const greet: GreetFunction = (name) => \`Hello, \${name}\`;

// Interface function type
interface Greet {
    (name: string): string;
}

const greet2: Greet = (name) => \`Hello, \${name}\`;
\`\`\`

## Best Practices

1. **Specify return types** for clarity
2. **Use optional parameters** with ?
3. **Use default parameters** for defaults
4. **Use rest parameters** for variable args
5. **Use function overloads** carefully
6. **Use generic functions** for reusability
7. **Use type guards** for narrowing
8. **Use readonly** for array parameters
  `,
  quiz: [
    {
      question: "Parameter opsional ditandai dengan?",
      options: ["?", "!", "*", ":"],
      correctAnswer: 0
    },
    {
      question: "Keyword untuk generic function adalah?",
      options: ["<T>", "[T]", "{T}", "(T)"],
      correctAnswer: 0
    },
    {
      question: "Tipe untuk function yang tidak return adalah?",
      options: ["any", "void", "never", "undefined"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Function Examples",
      code: `// ============================================
// 1. Basic Functions
// ============================================
// Named function
function greet(name: string): string {
    return \`Hello, \${name}\`;
}

// Arrow function
const greetArrow = (name: string): string => \`Hello, \${name}\`;

// Function expression
const greetExpr = function(name: string): string {
    return \`Hello, \${name}\`;
};

// ============================================
// 2. Parameters
// ============================================
// Optional
function greetOptional(name: string, greeting?: string): string {
    return greeting ? \`\${greeting}, \${name}\` : \`Hello, \${name}\`;
}

// Default
function greetDefault(name: string, greeting: string = "Hello"): string {
    return \`\${greeting}, \${name}\`;
}

// Rest
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

// Destructuring
function greetUser({ name, age }: { name: string; age: number }): string {
    return \`\${name} is \${age} years old\`;
}

// With interface
interface User {
    name: string;
    age: number;
    email?: string;
}

function greetUser2(user: User): string {
    return \`\${user.name} is \${user.age} years old\`;
}

// ============================================
// 3. Return Types
// ============================================
// Void
function logMessage(message: string): void {
    console.log(message);
}

// Never
function throwError(message: string): never {
    throw new Error(message);
}

// Async
async function fetchUser(id: number): Promise<{ id: number; name: string }> {
    const response = await fetch(\`/api/users/\${id}\`);
    return response.json();
}

// ============================================
// 4. Function Overloads
// ============================================
// Overload signatures
function format(input: string): string;
function format(input: number): string;
function format(input: Date): string;

// Implementation
function format(input: string | number | Date): string {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
    if (typeof input === "number") {
        return input.toFixed(2);
    }
    return input.toISOString();
}

// Multiple overloads
function createElement(tag: "div"): HTMLDivElement;
function createElement(tag: "span"): HTMLSpanElement;
function createElement(tag: "p"): HTMLParagraphElement;
function createElement(tag: string): HTMLElement {
    return document.createElement(tag);
}

// ============================================
// 5. Generic Functions
// ============================================
// Basic generic
function identity<T>(value: T): T {
    return value;
}

// Generic with constraints
function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

// Generic with multiple types
function merge<T, U>(a: T, b: U): T & U {
    return { ...a, ...b };
}

// Generic with default
function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

// ============================================
// 6. Function Types
// ============================================
// Type alias
type BinaryFunction = (a: number, b: number) => number;

// Interface
interface Calculator {
    (a: number, b: number): number;
}

// Generic function type
type Mapper<T, U> = (input: T) => U;

// Usage
const add: BinaryFunction = (a, b) => a + b;
const multiply: Calculator = (a, b) => a * b;
const toString: Mapper<number, string> = (n) => n.toString();

// ============================================
// 7. Higher-Order Functions
// ============================================
function createGreeting(greeting: string): (name: string) => string {
    return (name: string): string => \`\${greeting}, \${name}\`;
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

console.log(sayHello("John")); // Hello, John
console.log(sayHi("Jane")); // Hi, Jane

// Function composition
function compose<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
    return (arg: T) => fns.reduce((acc, fn) => fn(acc), arg);
}

const trim = (s: string) => s.trim();
const lower = (s: string) => s.toLowerCase();
const exclaim = (s: string) => s + "!";

const processString = compose(trim, lower, exclaim);
console.log(processString("  HELLO WORLD  ")); // hello world!

// ============================================
// 8. Type Guards
// ============================================
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

function isArray(value: unknown): value is any[] {
    return Array.isArray(value);
}

function processValue(value: unknown): string {
    if (isString(value)) {
        return value.toUpperCase();
    }
    if (isNumber(value)) {
        return value.toFixed(2);
    }
    if (isArray(value)) {
        return value.length.toString();
    }
    return "Unknown";
}

// ============================================
// 9. This Context
// ============================================
interface Counter {
    count: number;
    increment(this: Counter): void;
    getCount(this: Counter): number;
}

const counter: Counter = {
    count: 0,
    increment(this: Counter) {
        this.count++;
    },
    getCount(this: Counter) {
        return this.count;
    }
};

counter.increment();
counter.increment();
console.log(counter.getCount()); // 2

// ============================================
// 10. Utility Types for Functions
// ============================================
type MyFunction = (a: number, b: string) => boolean;

// Parameters - get parameter types
type Params = Parameters<MyFunction>; // [number, string]

// ReturnType - get return type
type Return = ReturnType<MyFunction>; // boolean

// ThisParameterType - get this type
type ThisType = ThisParameterType<MyFunction>; // unknown

// OmitThisParameter - remove this
type NoThis = OmitThisParameter<MyFunction>; // (a: number, b: string) => boolean`,
      language: "typescript"
    }
  ]
};