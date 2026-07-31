export const chapter = {
  slug: "type-guards",
  title: "Type Guards",
  description: "Menggunakan type guards untuk memeriksa tipe di TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["typescript-introduction", "typescript-basic-types"],
  tags: ["typescript", "type-guards", "narrowing", "type-checking"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Type Guards?

Type guards adalah fungsi yang memeriksa tipe dan mengembalikan tipe yang sudah dipersempit.

## typeof Type Guard

\`\`\`typescript
function process(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return value.toFixed(2);
    }
}
\`\`\`

## instanceof Type Guard

\`\`\`typescript
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    meow(): void {
        console.log("Meow!");
    }
}

function handleAnimal(animal: Animal): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else if (animal instanceof Cat) {
        animal.meow();
    }
}
\`\`\`

## Custom Type Guard

\`\`\`typescript
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

function isArray<T>(value: unknown): value is T[] {
    return Array.isArray(value);
}

function isObject(value: unknown): value is object {
    return typeof value === "object" && value !== null;
}
\`\`\`

## in Operator

\`\`\`typescript
interface Admin {
    role: "admin";
    permissions: string[];
}

interface User {
    role: "user";
    name: string;
}

function getInfo(account: Admin | User): string {
    if ("permissions" in account) {
        return \`Admin with permissions: \${account.permissions.join(", ")}\`;
    }
    return \`User: \${account.name}\`;
}
\`\`\`

## Discriminated Unions

\`\`\`typescript
type Circle = {
    kind: "circle";
    radius: number;
};

type Square = {
    kind: "square";
    sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle": return Math.PI * shape.radius ** 2;
        case "square": return shape.sideLength ** 2;
    }
}
\`\`\`

## Truthiness Narrowing

\`\`\`typescript
function process(value: string | null | undefined): string {
    if (value) {
        return value.toUpperCase();
    }
    return "empty";
}
\`\`\`

## Equality Narrowing

\`\`\`typescript
function process(a: string | number, b: string | boolean): void {
    if (a === b) {
        // Both are string
        console.log(a.toUpperCase());
    }
}
\`\`\`

## Best Practices

1. **Use typeof** for primitives
2. **Use instanceof** for classes
3. **Use custom guards** for complex types
4. **Use discriminated unions** for objects
5. **Use in operator** for checking properties
6. **Use truthiness** for null/undefined
7. **Use equality** for narrowing
8. **Use assertion functions** for validation
  `,
  quiz: [
    {
      question: "Type guard untuk primitives menggunakan?",
      options: ["typeof", "instanceof", "in", "is"],
      correctAnswer: 0
    },
    {
      question: "Type guard untuk classes menggunakan?",
      options: ["typeof", "instanceof", "in", "is"],
      correctAnswer: 1
    },
    {
      question: "Syntax untuk custom type guard adalah?",
      options: ["value is Type", "value as Type", "value instanceof Type", "typeof value"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Type Guards Examples",
      code: `// ============================================
// 1. typeof Type Guard
// ============================================
function processValue(value: string | number | boolean): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value.toFixed(2);
    }
    return value ? "true" : "false";
}

// ============================================
// 2. instanceof Type Guard
// ============================================
class Animal {
    constructor(public name: string) {}
    speak(): void {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name);
    }
    speak(): void {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    constructor(name: string, public color: string) {
        super(name);
    }
    speak(): void {
        console.log("Meow!");
    }
}

function handleAnimal(animal: Animal): void {
    if (animal instanceof Dog) {
        console.log(\`Dog: \${animal.name}, Breed: \${animal.breed}\`);
        animal.speak();
    } else if (animal instanceof Cat) {
        console.log(\`Cat: \${animal.name}, Color: \${animal.color}\`);
        animal.speak();
    } else {
        console.log(\`Animal: \${animal.name}\`);
        animal.speak();
    }
}

// ============================================
// 3. Custom Type Guards
// ============================================
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

function isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
}

function isArray<T>(value: unknown): value is T[] {
    return Array.isArray(value);
}

function isObject(value: unknown): value is object {
    return typeof value === "object" && value !== null;
}

function isDate(value: unknown): value is Date {
    return value instanceof Date;
}

function isError(value: unknown): value is Error {
    return value instanceof Error;
}

// Using custom guards
function processData(data: unknown): string {
    if (isString(data)) {
        return data.toUpperCase();
    }
    if (isNumber(data)) {
        return data.toFixed(2);
    }
    if (isArray(data)) {
        return \`Array of length \${data.length}\`;
    }
    if (isDate(data)) {
        return data.toISOString();
    }
    if (isError(data)) {
        return \`Error: \${data.message}\`;
    }
    return "Unknown type";
}

// ============================================
// 4. in Operator Guard
// ============================================
interface Admin {
    role: "admin";
    permissions: string[];
}

interface User {
    role: "user";
    name: string;
    email: string;
}

interface Guest {
    role: "guest";
    sessionId: string;
}

type Account = Admin | User | Guest;

function getAccountInfo(account: Account): string {
    if ("permissions" in account) {
        return \`Admin with permissions: \${account.permissions.join(", ")}\`;
    }
    if ("email" in account) {
        return \`User: \${account.name} (\${account.email})\`;
    }
    return \`Guest: \${account.sessionId}\`;
}

// ============================================
// 5. Discriminated Unions
// ============================================
type Circle = {
    kind: "circle";
    radius: number;
};

type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
};

type Triangle = {
    kind: "triangle";
    base: number;
    height: number;
};

type Shape = Circle | Rectangle | Triangle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return 0.5 * shape.base * shape.height;
        default:
            return assertNever(shape);
    }
}

function assertNever(value: never): never {
    throw new Error(\`Unhandled case: \${value}\`);
}

// ============================================
// 6. Truthiness Narrowing
// ============================================
function processOptional(value: string | null | undefined): string {
    if (value) {
        return value.toUpperCase();
    }
    return "Empty";
}

function processArray(items: number[] | null): number {
    if (items && items.length > 0) {
        return items.reduce((a, b) => a + b, 0);
    }
    return 0;
}

// ============================================
// 7. Equality Narrowing
// ============================================
function processEquality(
    a: string | number,
    b: string | boolean
): string | boolean {
    if (a === b) {
        // Both are string
        return a.toUpperCase();
    }
    return b;
}

// ============================================
// 8. Assertion Functions
// ============================================
function assert(condition: any, message?: string): asserts condition {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

function assertIsString(value: any): asserts value is string {
    if (typeof value !== "string") {
        throw new Error("Value must be a string");
    }
}

function assertIsNumber(value: any): asserts value is number {
    if (typeof value !== "number") {
        throw new Error("Value must be a number");
    }
}

function processWithAssertion(value: unknown): string {
    assertIsString(value);
    // value is now string
    return value.toUpperCase();
}

// ============================================
// 9. Combined Type Guards
// ============================================
type Result<T> = { success: true; data: T } | { success: false; error: string };

function isSuccess<T>(result: Result<T>): result is { success: true; data: T } {
    return result.success === true;
}

function isError<T>(result: Result<T>): result is { success: false; error: string } {
    return result.success === false;
}

function processResult<T>(result: Result<T>): T | null {
    if (isSuccess(result)) {
        return result.data;
    }
    if (isError(result)) {
        console.error(result.error);
        return null;
    }
    return null;
}

// ============================================
// 10. Real World Example
// ============================================
type ApiResponse<T> = {
    status: number;
    data?: T;
    error?: string;
};

function isSuccessResponse<T>(
    response: ApiResponse<T>
): response is { status: 200 | 201 | 204; data: T } {
    return response.status >= 200 && response.status < 300 && 'data' in response;
}

function isErrorResponse<T>(
    response: ApiResponse<T>
): response is { status: 400 | 401 | 403 | 404 | 500; error: string } {
    return response.status >= 400 && 'error' in response;
}

function handleApiResponse<T>(response: ApiResponse<T>): T | null {
    if (isSuccessResponse(response)) {
        console.log("Success:", response.data);
        return response.data;
    }
    if (isErrorResponse(response)) {
        console.error(\`Error \${response.status}: \${response.error}\`);
        return null;
    }
    return null;
}`,
      language: "typescript"
    }
  ]
};