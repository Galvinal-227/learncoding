export const chapter = {
  slug: "generics",
  title: "Generics",
  description: "Menggunakan generics untuk membuat kode yang reusable dan type-safe.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["typescript-introduction", "typescript-basic-types"],
  tags: ["typescript", "generics", "reusable", "type-safe"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Generics?

Generics memungkinkan membuat komponen yang bekerja dengan berbagai tipe.

## Basic Generics

\`\`\`typescript
function identity<T>(value: T): T {
    return value;
}

const num = identity<number>(42);
const str = identity<string>("hello");
\`\`\`

## Generic Constraints

\`\`\`typescript
interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(value: T): number {
    return value.length;
}

getLength("hello"); // 5
getLength([1, 2, 3]); // 3
getLength({ length: 10 }); // 10
// getLength(42); // ❌ Error
\`\`\`

## Generic Interfaces

\`\`\`typescript
interface Box<T> {
    value: T;
    getValue(): T;
}

const stringBox: Box<string> = {
    value: "hello",
    getValue: () => "hello"
};

const numberBox: Box<number> = {
    value: 42,
    getValue: () => 42
};
\`\`\`

## Generic Classes

\`\`\`typescript
class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
    
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
const num = numberStack.pop(); // 2
\`\`\`

## Generic Functions

\`\`\`typescript
function merge<T, U>(a: T, b: U): T & U {
    return { ...a, ...b };
}

const result = merge({ name: "John" }, { age: 30 });
// result: { name: string } & { age: number }
\`\`\`

## Generic Constraints with keyof

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "John", age: 30 };
getProperty(person, "name"); // "John"
getProperty(person, "age"); // 30
// getProperty(person, "email"); // ❌ Error
\`\`\`

## Multiple Generic Types

\`\`\`typescript
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const result = pair<string, number>("hello", 42);
\`\`\`

## Generic Type Aliases

\`\`\`typescript
type Container<T> = {
    value: T;
    get: () => T;
    set: (value: T) => void;
};

type Callback<T> = (data: T) => void;
type Result<T, E = Error> = { success: boolean; data?: T; error?: E };
\`\`\`

## Generic Utility Types

\`\`\`typescript
// Partial
type PartialUser = Partial<User>;

// Required
type RequiredUser = Required<User>;

// Readonly
type ReadonlyUser = Readonly<User>;

// Pick
type UserName = Pick<User, "name">;

// Omit
type UserWithoutEmail = Omit<User, "email">;

// Record
type UserMap = Record<string, User>;
\`\`\`

## Best Practices

1. **Use generics** untuk reusable code
2. **Use constraints** untuk safety
3. **Use keyof** untuk property access
4. **Use multiple generics** for complex types
5. **Use generic interfaces** for contracts
6. **Use generic classes** for data structures
7. **Use utility types** for transformations
8. **Avoid overusing generics**
  `,
  quiz: [
    {
      question: "Syntax untuk generic adalah?",
      options: ["<T>", "[T]", "{T}", "(T)"],
      correctAnswer: 0
    },
    {
      question: "Keyword untuk constraint generic adalah?",
      options: ["extends", "implements", "inherits", "uses"],
      correctAnswer: 0
    },
    {
      question: "keyof digunakan untuk?",
      options: ["Keys of object", "Values of object", "Both", "Neither"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Generics Examples",
      code: `// ============================================
// 1. Basic Generics
// ============================================
// Generic function
function identity<T>(value: T): T {
    return value;
}

// Explicit type
const num = identity<number>(42);
const str = identity<string>("hello");

// Implicit type (type inference)
const bool = identity(true);

// ============================================
// 2. Generic Constraints
// ============================================
interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(value: T): number {
    return value.length;
}

// Works
getLength("hello");
getLength([1, 2, 3]);
getLength({ length: 10 });

// Error
// getLength(42);

// With multiple constraints
interface HasId {
    id: number;
}

interface HasName {
    name: string;
}

function process<T extends HasId & HasName>(value: T): string {
    return \`\${value.name} (ID: \${value.id})\`;
}

// ============================================
// 3. Generic Interfaces
// ============================================
interface Box<T> {
    value: T;
    get(): T;
    set(value: T): void;
}

class StringBox implements Box<string> {
    private _value: string = "";
    
    get value(): string {
        return this._value;
    }
    
    set value(val: string) {
        this._value = val;
    }
    
    get(): string {
        return this.value;
    }
    
    set(value: string): void {
        this.value = value;
    }
}

// Generic interface with methods
interface Repository<T, ID> {
    findById(id: ID): T | null;
    findAll(): T[];
    save(entity: T): T;
    delete(id: ID): void;
}

// ============================================
// 4. Generic Classes
// ============================================
class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
    
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    
    size(): number {
        return this.items.length;
    }
}

class Queue<T> {
    private items: T[] = [];
    
    enqueue(item: T): void {
        this.items.push(item);
    }
    
    dequeue(): T | undefined {
        return this.items.shift();
    }
    
    peek(): T | undefined {
        return this.items[0];
    }
    
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

// ============================================
// 5. Generic Functions with keyof
// ============================================
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

const user = { id: 1, name: "John", age: 30 };
const name = getProperty(user, "name"); // John
setProperty(user, "age", 31);

// ============================================
// 6. Multiple Generic Types
// ============================================
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

function merge<T, U>(a: T, b: U): T & U {
    return { ...a, ...b };
}

function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
    const minLen = Math.min(arr1.length, arr2.length);
    const result: [T, U][] = [];
    for (let i = 0; i < minLen; i++) {
        result.push([arr1[i], arr2[i]]);
    }
    return result;
}

// ============================================
// 7. Generic Type Aliases
// ============================================
type Result<T, E = Error> = {
    success: boolean;
    data?: T;
    error?: E;
};

type AsyncFunction<T> = (...args: any[]) => Promise<T>;
type Callback<T> = (data: T) => void;
type Mapper<T, U> = (input: T) => U;
type Predicate<T> = (value: T) => boolean;

// ============================================
// 8. Generic Utility Types
// ============================================
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Partial
type PartialUser = Partial<User>;

// Required
type RequiredUser = Required<PartialUser>;

// Readonly
type ReadonlyUser = Readonly<User>;

// Pick
type UserPreview = Pick<User, "id" | "name">;

// Omit
type UserWithoutEmail = Omit<User, "email">;

// Record
type UserMap = Record<string, User>;

// Exclude
type T1 = Exclude<"a" | "b" | "c", "a" | "f">; // "b" | "c"

// Extract
type T2 = Extract<"a" | "b" | "c", "a" | "f">; // "a"

// NonNullable
type T3 = NonNullable<string | null | undefined>; // string

// ReturnType
type T4 = ReturnType<() => string>; // string

// Parameters
type T5 = Parameters<(a: number, b: string) => void>; // [number, string]

// ============================================
// 9. Custom Generic Utility Types
// ============================================
// Deep readonly
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Nullable
type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

// Optional
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Flatten
type Flatten<T> = T extends any[] ? T[number] : T;

// ============================================
// 10. Real World Example
// ============================================
// Generic API Client
class ApiClient<T> {
    constructor(private baseUrl: string) {}
    
    async get(id: string): Promise<T> {
        const response = await fetch(\`\${this.baseUrl}/\${id}\`);
        return response.json();
    }
    
    async list(): Promise<T[]> {
        const response = await fetch(this.baseUrl);
        return response.json();
    }
    
    async create(data: Omit<T, "id">): Promise<T> {
        const response = await fetch(this.baseUrl, {
            method: "POST",
            body: JSON.stringify(data)
        });
        return response.json();
    }
    
    async update(id: string, data: Partial<T>): Promise<T> {
        const response = await fetch(\`\${this.baseUrl}/\${id}\`, {
            method: "PUT",
            body: JSON.stringify(data)
        });
        return response.json();
    }
    
    async delete(id: string): Promise<void> {
        await fetch(\`\${this.baseUrl}/\${id}\`, { method: "DELETE" });
    }
}

interface User {
    id: string;
    name: string;
    email: string;
}

const userClient = new ApiClient<User>("/api/users");
const users = await userClient.list();`,
      language: "typescript"
    }
  ]
};