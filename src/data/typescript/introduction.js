export const chapter = {
  slug: "introduction",
  title: "Pengenalan TypeScript",
  description: "Memahami TypeScript dan manfaatnya dalam pengembangan JavaScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["typescript", "javascript", "typing", "superset"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu TypeScript?

TypeScript adalah superset JavaScript yang menambahkan static typing dan fitur modern lainnya.

## Keunggulan TypeScript

1. **Static Typing** - Deteksi error lebih awal
2. **IDE Support** - Autocomplete, IntelliSense
3. **Modern Features** - Decorators, generics
4. **Better Refactoring** - Aman untuk refactor
5. **Documentation** - Type sebagai dokumentasi
6. **Large Community** - Banyak library support

## TypeScript vs JavaScript

| Fitur | JavaScript | TypeScript |
|-------|------------|------------|
| Typing | Dynamic | Static |
| Type Checking | Runtime | Compile-time |
| IDE Support | Limited | Excellent |
| Modern Features | ES6+ | ES6+ + Extra |
| Tooling | Basic | Advanced |
| Learning Curve | Low | Medium |

## Contoh Sederhana

### JavaScript
\`\`\`javascript
function greet(name) {
    return "Hello " + name;
}
greet(123); // No error, but unexpected
\`\`\`

### TypeScript
\`\`\`typescript
function greet(name: string): string {
    return "Hello " + name;
}
greet(123); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'
\`\`\`

## Basic Types

\`\`\`typescript
// Primitive types
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;
let nullable: null = null;
let undefinedValue: undefined = undefined;

// Any (avoid when possible)
let dynamic: any = "hello";
dynamic = 123;

// Unknown (safer than any)
let unknownValue: unknown = "hello";
// unknownValue.toUpperCase(); // ❌ Error

// Void
function logMessage(): void {
    console.log("Hello");
}

// Never
function throwError(): never {
    throw new Error("Error!");
}
\`\`\`

## Type Inference

\`\`\`typescript
// TypeScript infers types automatically
let message = "Hello"; // string
let count = 10; // number
let isDone = false; // boolean

// Better to let TypeScript infer
// Avoid unnecessary type annotations
\`\`\`

## Getting Started

\`\`\`bash
# Install TypeScript globally
npm install -g typescript

# Check version
tsc --version

# Compile TypeScript
tsc index.ts

# Watch mode
tsc --watch
\`\`\`

## Best Practices

1. **Use strict mode** - strict: true
2. **Avoid any** - Use unknown instead
3. **Use interfaces** untuk objects
4. **Use type inference** when possible
5. **Use union types** untuk multiple types
6. **Use generics** untuk reusable code
7. **Use readonly** for immutable data
8. **Use optional properties** with ?
  `,
  quiz: [
    {
      question: "TypeScript adalah?",
      options: ["JavaScript framework", "Superset JavaScript", "CSS framework", "Database"],
      correctAnswer: 1
    },
    {
      question: "Type untuk nilai yang tidak diketahui adalah?",
      options: ["any", "unknown", "void", "never"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk compile TypeScript adalah?",
      options: ["tsc", "ts", "typescript", "compile"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "TypeScript Basics",
      code: `// ============================================
// 1. Basic Types
// ============================================
// Primitive
let name: string = "John Doe";
let age: number = 30;
let isActive: boolean = true;
let hobbies: string[] = ["reading", "coding"];
let person: { name: string; age: number } = {
    name: "Jane",
    age: 25
};

// Any (avoid)
let dynamic: any = "hello";
dynamic = 42;
dynamic = true;

// Unknown
let secure: unknown = "secure";
if (typeof secure === "string") {
    console.log(secure.toUpperCase());
}

// Void
function log(message: string): void {
    console.log(message);
}

// Never
function fail(): never {
    throw new Error("Failed");
}

// Null & Undefined
let nullable: string | null = null;
let optional: string | undefined = undefined;

// ============================================
// 2. Type Inference
// ============================================
let inferredString = "Hello"; // string
let inferredNumber = 42; // number
let inferredBoolean = true; // boolean
let inferredArray = [1, 2, 3]; // number[]
let inferredObject = { name: "John" }; // { name: string }

// ============================================
// 3. Union Types
// ============================================
let id: string | number;
id = "123";
id = 123;

// ============================================
// 4. Type Aliases
// ============================================
type User = {
    id: number;
    name: string;
    email?: string;
};

const user: User = {
    id: 1,
    name: "John",
    email: "john@example.com"
};

// ============================================
// 5. Interfaces
// ============================================
interface Animal {
    name: string;
    age: number;
    speak(): void;
}

class Dog implements Animal {
    constructor(public name: string, public age: number) {}
    speak(): void {
        console.log("Woof!");
    }
}

// ============================================
// 6. Functions
// ============================================
function add(a: number, b: number): number {
    return a + b;
}

const multiply = (a: number, b: number): number => a * b;

// Optional parameters
function greet(name: string, greeting?: string): string {
    return greeting ? \`\${greeting}, \${name}\` : \`Hello, \${name}\`;
}

// Default parameters
function sayHello(name: string = "World"): string {
    return \`Hello, \${name}\`;
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

// ============================================
// 7. Classes
// ============================================
class Person {
    private _name: string;
    protected age: number;
    public email: string;
    
    constructor(name: string, age: number, email: string) {
        this._name = name;
        this.age = age;
        this.email = email;
    }
    
    get name(): string {
        return this._name;
    }
    
    set name(value: string) {
        if (value.length < 2) {
            throw new Error("Name must be at least 2 characters");
        }
        this._name = value;
    }
    
    greet(): string {
        return \`Hello, I'm \${this._name}\`;
    }
}

// ============================================
// 8. Generics
// ============================================
function identity<T>(value: T): T {
    return value;
}

let num = identity<number>(42);
let str = identity<string>("hello");

// Generic class
class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);

// ============================================
// 9. Type Guards
// ============================================
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function processValue(value: string | number): string {
    if (isString(value)) {
        return value.toUpperCase();
    }
    return value.toString();
}

// ============================================
// 10. Utility Types
// ============================================
interface Todo {
    id: number;
    title: string;
    completed: boolean;
    description?: string;
}

// Partial - all properties optional
type PartialTodo = Partial<Todo>;

// Required - all properties required
type RequiredTodo = Required<Todo>;

// Readonly - all properties readonly
type ReadonlyTodo = Readonly<Todo>;

// Pick - select properties
type TodoPreview = Pick<Todo, "id" | "title">;

// Omit - exclude properties
type TodoWithoutDescription = Omit<Todo, "description">;

// Record - key-value pairs
type UserMap = Record<string, User>;`,
      language: "typescript"
    }
  ]
};