export const chapter = {
  slug: "interfaces",
  title: "Interfaces",
  description: "Menggunakan interfaces untuk mendefinisikan kontrak dan tipe object di TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["typescript-introduction", "typescript-basic-types"],
  tags: ["typescript", "interfaces", "objects", "contracts"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Interface?

Interface mendefinisikan kontrak untuk struktur object di TypeScript.

## Basic Interface

\`\`\`typescript
interface User {
    id: number;
    name: string;
    email: string;
}

const user: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
};
\`\`\`

## Optional Properties

\`\`\`typescript
interface User {
    id: number;
    name: string;
    email?: string;  // Optional
    age?: number;    // Optional
}

const user1: User = { id: 1, name: "John" };
const user2: User = { id: 2, name: "Jane", email: "jane@example.com" };
\`\`\`

## Readonly Properties

\`\`\`typescript
interface User {
    readonly id: number;  // Cannot be changed
    name: string;
}

const user: User = { id: 1, name: "John" };
// user.id = 2; // ❌ Error
\`\`\`

## Function Types

\`\`\`typescript
interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (source: string, subString: string): boolean => {
    return source.includes(subString);
};
\`\`\`

## Indexable Types

\`\`\`typescript
// String index
interface StringArray {
    [index: number]: string;
}

const arr: StringArray = ["a", "b", "c"];

// Dictionary
interface Dictionary {
    [key: string]: string;
}

const dict: Dictionary = {
    name: "John",
    city: "Jakarta"
};
\`\`\`

## Extending Interfaces

\`\`\`typescript
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: string;
    department: string;
}

interface Manager extends Employee {
    teamSize: number;
}

const manager: Manager = {
    name: "John",
    age: 35,
    employeeId: "EMP001",
    department: "Engineering",
    teamSize: 10
};
\`\`\`

## Interface vs Type

| Interface | Type |
|-----------|------|
| Extendable | Not extendable |
| Declaration merging | No merging |
| Better for objects | Better for unions |
| Can be implemented | Cannot be implemented |

## Declaration Merging

\`\`\`typescript
// Multiple declarations merge
interface User {
    name: string;
}

interface User {
    age: number;
}

// User now has both name and age
const user: User = {
    name: "John",
    age: 30
};
\`\`\`

## Interfaces for Classes

\`\`\`typescript
interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    constructor(public name: string) {}
    makeSound(): void {
        console.log("Woof!");
    }
}

class Cat implements Animal {
    constructor(public name: string) {}
    makeSound(): void {
        console.log("Meow!");
    }
}
\`\`\`

## Best Practices

1. **Use interface** untuk object shapes
2. **Use type** untuk unions dan tuples
3. **Use readonly** untuk immutable
4. **Use optional** untuk flexible
5. **Extend interfaces** untuk reusability
6. **Use declaration merging** dengan hati-hati
7. **Name interfaces** dengan PascalCase
8. **Use interface** untuk API contracts
  `,
  quiz: [
    {
      question: "Keyword untuk mendefinisikan interface adalah?",
      options: ["interface", "type", "class", "object"],
      correctAnswer: 0
    },
    {
      question: "Property yang tidak bisa diubah adalah?",
      options: ["readonly", "const", "immutable", "fixed"],
      correctAnswer: 0
    },
    {
      question: "Interface bisa di-extend menggunakan?",
      options: ["extends", "implements", "inherits", "uses"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Interface Examples",
      code: `// ============================================
// 1. Basic Interface
// ============================================
interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

const user: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    createdAt: new Date()
};

// ============================================
// 2. Optional & Readonly
// ============================================
interface Product {
    readonly id: number;
    name: string;
    price: number;
    description?: string;
    category?: string;
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 1000
};
// product.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property

// ============================================
// 3. Function Interface
// ============================================
interface Calculator {
    (a: number, b: number): number;
}

const add: Calculator = (a: number, b: number): number => a + b;
const subtract: Calculator = (a: number, b: number): number => a - b;

// ============================================
// 4. Index Signature
// ============================================
interface StringMap {
    [key: string]: string;
}

const map: StringMap = {
    name: "John",
    city: "Jakarta",
    country: "Indonesia"
};

interface NumberArray {
    [index: number]: number;
}

const numbers: NumberArray = [1, 2, 3, 4, 5];

// ============================================
// 5. Extending Interface
// ============================================
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: string;
    department: string;
}

interface Manager extends Employee {
    teamSize: number;
    manage(): void;
}

const manager: Manager = {
    name: "John",
    age: 35,
    employeeId: "EMP001",
    department: "Engineering",
    teamSize: 10,
    manage() {
        console.log("Managing team");
    }
};

// Multiple inheritance
interface A {
    a: string;
}
interface B {
    b: string;
}
interface C extends A, B {
    c: string;
}

const obj: C = {
    a: "A",
    b: "B",
    c: "C"
};

// ============================================
// 6. Interface with Class
// ============================================
interface Animal {
    name: string;
    age: number;
    speak(): void;
    eat(food: string): void;
}

class Dog implements Animal {
    constructor(public name: string, public age: number) {}
    
    speak(): void {
        console.log("Woof!");
    }
    
    eat(food: string): void {
        console.log(\`Eating \${food}\`);
    }
}

class Cat implements Animal {
    constructor(public name: string, public age: number) {}
    
    speak(): void {
        console.log("Meow!");
    }
    
    eat(food: string): void {
        console.log(\`Eating \${food}\`);
    }
}

// ============================================
// 7. Interface with Generics
// ============================================
interface Box<T> {
    value: T;
    getValue(): T;
}

class StringBox implements Box<string> {
    constructor(public value: string) {}
    getValue(): string {
        return this.value;
    }
}

class NumberBox implements Box<number> {
    constructor(public value: number) {}
    getValue(): number {
        return this.value;
    }
}

// ============================================
// 8. Declaration Merging
// ============================================
interface Config {
    host: string;
    port: number;
}

interface Config {
    ssl: boolean;
}

// Config now has host, port, and ssl
const config: Config = {
    host: "localhost",
    port: 3000,
    ssl: true
};

// ============================================
// 9. Hybrid Types
// ============================================
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function(start: number): string {
        return \`Count: \${start}\`;
    } as Counter;
    counter.interval = 1000;
    counter.reset = function() {
        console.log("Reset");
    };
    return counter;
}

const c = getCounter();
console.log(c(10));
c.reset();

// ============================================
// 10. Nested Interfaces
// ============================================
interface Address {
    street: string;
    city: string;
    country: string;
    zipCode: string;
}

interface Customer {
    id: number;
    name: string;
    address: Address;
    contacts: {
        email: string;
        phone: string;
    };
}

const customer: Customer = {
    id: 1,
    name: "John Doe",
    address: {
        street: "Jl. Sudirman",
        city: "Jakarta",
        country: "Indonesia",
        zipCode: "10110"
    },
    contacts: {
        email: "john@example.com",
        phone: "08123456789"
    }
};`,
      language: "typescript"
    }
  ]
};