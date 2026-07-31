export const chapter = {
  slug: "union-intersection",
  title: "Union & Intersection Types",
  description: "Menggunakan union dan intersection types untuk fleksibilitas tipe di TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["typescript-introduction", "typescript-basic-types"],
  tags: ["typescript", "union", "intersection", "type-combination"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Union Types

Union types memungkinkan nilai bisa salah satu dari beberapa tipe.

\`\`\`typescript
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42;

// Union with objects
type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; name: string };
type Account = Admin | User;
\`\`\`

## Discriminated Unions

\`\`\`typescript
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

interface Triangle {
    kind: "triangle";
    base: number;
    height: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle": return Math.PI * shape.radius ** 2;
        case "square": return shape.sideLength ** 2;
        case "triangle": return 0.5 * shape.base * shape.height;
    }
}
\`\`\`

## Intersection Types

Intersection types menggabungkan beberapa tipe menjadi satu.

\`\`\`typescript
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;

const person: Person = { name: "John", age: 30 };

// Multiple intersection
type WithId = { id: number };
type WithTimestamp = { createdAt: Date };
type Entity = WithId & WithTimestamp & Person;
\`\`\`

## Union vs Intersection

| Union | Intersection |
|-------|--------------|
| OR ( | ) | AND ( & ) |
| One of the types | All of the types |
| Flexible | Strict |
| Use with discriminated unions | Use for combining |

## Type Narrowing

\`\`\`typescript
function process(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return value.toString();
    }
}

function handleShape(shape: Shape): void {
    switch (shape.kind) {
        case "circle":
            console.log(\`Circle with radius \${shape.radius}\`);
            break;
        case "square":
            console.log(\`Square with side \${shape.sideLength}\`);
            break;
        case "triangle":
            console.log(\`Triangle with base \${shape.base}\`);
            break;
    }
}
\`\`\`

## Best Practices

1. **Use union** untuk multiple possible types
2. **Use discriminated unions** untuk objects
3. **Use intersection** untuk combining types
4. **Use type guards** untuk narrowing
5. **Use switch** with discriminated unions
6. **Use union** for enums (string unions)
7. **Use intersection** for mixins
8. **Avoid complex unions** when possible
  `,
  quiz: [
    {
      question: "Union type ditandai dengan?",
      options: ["&", "|", "+", "-"],
      correctAnswer: 1
    },
    {
      question: "Intersection type ditandai dengan?",
      options: ["&", "|", "+", "-"],
      correctAnswer: 0
    },
    {
      question: "Discriminated union menggunakan property?",
      options: ["type", "kind", "discriminator", "tag"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Union & Intersection Examples",
      code: `// ============================================
// 1. Union Types
// ============================================
// Primitives
type ID = string | number;
type Status = "active" | "inactive" | "pending";

let id: ID = "abc-123";
id = 456;
let status: Status = "active";

// Arrays
type StringOrNumberArray = (string | number)[];
const mixed: StringOrNumberArray = ["hello", 42, "world", 100];

// Objects
type Admin = {
    role: "admin";
    permissions: string[];
};

type User = {
    role: "user";
    name: string;
    email: string;
};

type Account = Admin | User;

function getAccountInfo(account: Account): string {
    if (account.role === "admin") {
        return \`Admin with permissions: \${account.permissions.join(", ")}\`;
    }
    return \`User: \${account.name} (\${account.email})\`;
}

// ============================================
// 2. Discriminated Unions
// ============================================
interface Circle {
    kind: "circle";
    radius: number;
    color?: string;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
    color?: string;
}

interface Triangle {
    kind: "triangle";
    base: number;
    height: number;
    color?: string;
}

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

function getColor(shape: Shape): string {
    return shape.color || "no color";
}

// Exhaustive check
function assertNever(value: never): never {
    throw new Error(\`Unhandled case: \${value}\`);
}

// ============================================
// 3. Intersection Types
// ============================================
type Name = { name: string };
type Age = { age: number };
type Email = { email: string };

type Person = Name & Age & Email;

const person: Person = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// Multiple intersections
type WithId = { id: number };
type WithTimestamp = { createdAt: Date; updatedAt: Date };
type WithSoftDelete = { deletedAt: Date | null };

type Entity = Person & WithId & WithTimestamp & WithSoftDelete;

const entity: Entity = {
    id: 1,
    name: "John",
    age: 30,
    email: "john@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
};

// ============================================
// 4. Union + Intersection Combined
// ============================================
type BaseUser = {
    id: number;
    name: string;
};

type AdminUser = BaseUser & {
    role: "admin";
    permissions: string[];
};

type RegularUser = BaseUser & {
    role: "user";
    preferences: Record<string, unknown>;
};

type AppUser = AdminUser | RegularUser;

function getUserInfo(user: AppUser): string {
    if (user.role === "admin") {
        return \`Admin: \${user.name} (Permissions: \${user.permissions.join(", ")})\`;
    }
    return \`User: \${user.name} (Preferences: \${JSON.stringify(user.preferences)})\`;
}

// ============================================
// 5. Type Narrowing
// ============================================
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

function processValue(value: string | number): string {
    if (isString(value)) {
        return value.toUpperCase();
    }
    if (isNumber(value)) {
        return value.toFixed(2);
    }
    return "Invalid";
}

// instanceof narrowing
class Animal {
    constructor(public name: string) {}
}

class Dog extends Animal {
    bark(): void { console.log("Woof!"); }
}

class Cat extends Animal {
    meow(): void { console.log("Meow!"); }
}

function handleAnimal(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

// ============================================
// 6. Utility Types with Union/Intersection
// ============================================
// Extract - get types that match
type T1 = Extract<"a" | "b" | "c", "a" | "f">; // "a"

// Exclude - remove types that match
type T2 = Exclude<"a" | "b" | "c", "a" | "f">; // "b" | "c"

// NonNullable - remove null/undefined
type T3 = NonNullable<string | null | undefined>; // string

// ReturnType - get return type
type T4 = ReturnType<() => string>; // string

// Parameters - get parameter types
type T5 = Parameters<(a: number, b: string) => void>; // [number, string]

// ============================================
// 7. Real World Example
// ============================================
// API Response types
type ApiResponse<T> = {
    data: T;
    status: number;
    message: string;
};

type SuccessResponse<T> = ApiResponse<T> & {
    success: true;
};

type ErrorResponse = ApiResponse<null> & {
    success: false;
    error: string;
};

type ApiResult<T> = SuccessResponse<T> | ErrorResponse;

function handleApiResult<T>(result: ApiResult<T>): T | null {
    if (result.success) {
        console.log(\`Success: \${result.message}\`);
        return result.data;
    } else {
        console.error(\`Error: \${result.error}\`);
        return null;
    }
}`,
      language: "typescript"
    }
  ]
};