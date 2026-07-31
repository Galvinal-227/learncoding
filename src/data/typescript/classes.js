export const chapter = {
  slug: "classes",
  title: "Classes",
  description: "Menggunakan class-based OOP di TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["typescript-introduction", "typescript-basic-types"],
  tags: ["typescript", "classes", "oop", "inheritance"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Basic Class

\`\`\`typescript
class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet(): string {
        return \`Hello, I'm \${this.name}\`;
    }
}

const person = new Person("John", 30);
console.log(person.greet());
\`\`\`

## Access Modifiers

### Public (default)
\`\`\`typescript
class Person {
    public name: string; // Can be accessed anywhere
}
\`\`\`

### Private
\`\`\`typescript
class Person {
    private age: number; // Only accessible inside class
    constructor(age: number) {
        this.age = age;
    }
    getAge(): number {
        return this.age;
    }
}
\`\`\`

### Protected
\`\`\`typescript
class Person {
    protected name: string; // Accessible in subclasses
}

class Employee extends Person {
    getName(): string {
        return this.name; // Allowed
    }
}
\`\`\`

### Readonly
\`\`\`typescript
class Person {
    readonly id: number; // Cannot be changed
    constructor(id: number) {
        this.id = id;
    }
}
\`\`\`

## Parameter Properties

\`\`\`typescript
class Person {
    constructor(
        public name: string,
        private age: number,
        protected email: string,
        readonly id: number
    ) {}
}

const person = new Person("John", 30, "john@example.com", 1);
console.log(person.name); // Accessible
// person.age; // ❌ Error: private
// person.email; // ❌ Error: protected
// person.id = 2; // ❌ Error: readonly
\`\`\`

## Getters and Setters

\`\`\`typescript
class Person {
    private _name: string;
    
    constructor(name: string) {
        this._name = name;
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
}

const person = new Person("John");
console.log(person.name); // Getter
person.name = "Jane"; // Setter
\`\`\`

## Inheritance

\`\`\`typescript
class Animal {
    constructor(public name: string) {}
    
    speak(): void {
        console.log(\`\${this.name} makes a sound\`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    
    speak(): void {
        console.log(\`\${this.name} barks\`);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    
    speak(): void {
        console.log(\`\${this.name} meows\`);
    }
}
\`\`\`

## Abstract Classes

\`\`\`typescript
abstract class Shape {
    abstract getArea(): number;
    
    getType(): string {
        return "Shape";
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
    
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    
    getArea(): number {
        return this.width * this.height;
    }
}
\`\`\`

## Static Properties

\`\`\`typescript
class MathUtils {
    static PI: number = 3.14159;
    
    static add(a: number, b: number): number {
        return a + b;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(2, 3));
\`\`\`

## Interfaces with Classes

\`\`\`typescript
interface Animal {
    name: string;
    speak(): void;
}

class Dog implements Animal {
    constructor(public name: string) {}
    speak(): void {
        console.log("Woof!");
    }
}

class Cat implements Animal {
    constructor(public name: string) {}
    speak(): void {
        console.log("Meow!");
    }
}
\`\`\`

## Best Practices

1. **Use access modifiers** untuk encapsulation
2. **Use readonly** untuk immutable properties
3. **Use getters/setters** untuk validation
4. **Use abstract classes** untuk base
5. **Use interfaces** untuk contracts
6. **Use private** untuk internal state
7. **Use protected** untuk inheritance
8. **Use static** untuk utility functions
  `,
  quiz: [
    {
      question: "Access modifier untuk internal class adalah?",
      options: ["public", "private", "protected", "readonly"],
      correctAnswer: 1
    },
    {
      question: "Keyword untuk inheritance adalah?",
      options: ["extends", "implements", "inherits", "uses"],
      correctAnswer: 0
    },
    {
      question: "Keyword untuk abstract class adalah?",
      options: ["abstract", "virtual", "pure", "base"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Class Examples",
      code: `// ============================================
// 1. Basic Class
// ============================================
class Person {
    name: string;
    age: number;
    private id: number;
    protected email: string;
    readonly createdAt: Date;
    
    constructor(name: string, age: number, id: number, email: string) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.email = email;
        this.createdAt = new Date();
    }
    
    greet(): string {
        return \`Hello, I'm \${this.name}\`;
    }
    
    getInfo(): string {
        return \`\${this.name} is \${this.age} years old\`;
    }
}

// ============================================
// 2. Parameter Properties
// ============================================
class User {
    constructor(
        public name: string,
        private age: number,
        protected email: string,
        readonly id: number
    ) {}
    
    getAge(): number {
        return this.age;
    }
}

const user = new User("John", 30, "john@example.com", 1);

// ============================================
// 3. Getters and Setters
// ============================================
class Product {
    private _price: number;
    private _name: string;
    
    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }
    
    get price(): number {
        return this._price;
    }
    
    set price(value: number) {
        if (value < 0) {
            throw new Error("Price cannot be negative");
        }
        this._price = value;
    }
    
    get name(): string {
        return this._name.toUpperCase();
    }
    
    set name(value: string) {
        if (value.length < 2) {
            throw new Error("Name must be at least 2 characters");
        }
        this._name = value;
    }
}

// ============================================
// 4. Inheritance
// ============================================
class Animal {
    constructor(public name: string, protected age: number) {}
    
    speak(): void {
        console.log(\`\${this.name} makes a sound\`);
    }
    
    getAge(): number {
        return this.age;
    }
}

class Dog extends Animal {
    private breed: string;
    
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
    
    speak(): void {
        console.log(\`\${this.name} barks!\`);
    }
    
    getBreed(): string {
        return this.breed;
    }
    
    // Override getAge with super
    getAge(): number {
        return super.getAge() * 7; // Dog years
    }
}

class Cat extends Animal {
    private color: string;
    
    constructor(name: string, age: number, color: string) {
        super(name, age);
        this.color = color;
    }
    
    speak(): void {
        console.log(\`\${this.name} meows!\`);
    }
    
    getColor(): string {
        return this.color;
    }
}

// ============================================
// 5. Abstract Classes
// ============================================
abstract class Shape {
    abstract getArea(): number;
    abstract getPerimeter(): number;
    
    getType(): string {
        return "Shape";
    }
    
    getInfo(): string {
        return \`Area: \${this.getArea()}, Perimeter: \${this.getPerimeter()}\`;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
    
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
    
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    
    getArea(): number {
        return this.width * this.height;
    }
    
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// ============================================
// 6. Static Members
// ============================================
class MathUtils {
    static PI: number = 3.14159;
    static E: number = 2.71828;
    
    static add(a: number, b: number): number {
        return a + b;
    }
    
    static subtract(a: number, b: number): number {
        return a - b;
    }
    
    static multiply(a: number, b: number): number {
        return a * b;
    }
    
    static divide(a: number, b: number): number {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
    }
}

// ============================================
// 7. Interfaces with Classes
// ============================================
interface Vehicle {
    brand: string;
    model: string;
    start(): void;
    stop(): void;
}

interface Electric {
    charge(): void;
}

interface Autonomous {
    drive(): void;
}

class Tesla implements Vehicle, Electric, Autonomous {
    constructor(public brand: string, public model: string) {}
    
    start(): void {
        console.log("Tesla starting...");
    }
    
    stop(): void {
        console.log("Tesla stopping...");
    }
    
    charge(): void {
        console.log("Tesla charging...");
    }
    
    drive(): void {
        console.log("Tesla driving autonomously...");
    }
}

// ============================================
// 8. Generic Classes
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
    
    size(): number {
        return this.items.length;
    }
}

// ============================================
// 9. Singleton Pattern
// ============================================
class Database {
    private static instance: Database;
    private constructor() {}
    
    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    
    query(sql: string): void {
        console.log(\`Executing: \${sql}\`);
    }
}

// ============================================
// 10. Factory Pattern
// ============================================
interface Logger {
    log(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(\`[Console] \${message}\`);
    }
}

class FileLogger implements Logger {
    log(message: string): void {
        console.log(\`[File] \${message}\`);
    }
}

class LoggerFactory {
    static createLogger(type: "console" | "file"): Logger {
        switch (type) {
            case "console": return new ConsoleLogger();
            case "file": return new FileLogger();
            default: throw new Error("Invalid logger type");
        }
    }
}`,
      language: "typescript"
    }
  ]
};