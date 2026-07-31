export const chapter = {
  slug: "basic-types",
  title: "Basic Types",
  description: "Memahami tipe data dasar di TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["typescript-introduction"],
  tags: ["typescript", "types", "primitives", "arrays"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Tipe Data Dasar

### Boolean
\`\`\`typescript
let isDone: boolean = false;
let isActive: boolean = true;
\`\`\`

### Number
\`\`\`typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14;
\`\`\`

### String
\`\`\`typescript
let name: string = "John Doe";
let template: string = \`Hello, \${name}\`;
let multiLine: string = \`
    Line 1
    Line 2
\`;
\`\`\`

### Array
\`\`\`typescript
// Two ways
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Mixed types
let mixed: (string | number)[] = ["hello", 42];

// Readonly array
let readonly: readonly number[] = [1, 2, 3];
\`\`\`

### Tuple
\`\`\`typescript
let tuple: [string, number] = ["hello", 42];
let [name, age] = tuple;

// Optional tuple
let optional: [string, number?] = ["hello"];

// Rest tuple
let rest: [string, ...number[]] = ["hello", 1, 2, 3];
\`\`\`

### Enum
\`\`\`typescript
// Numeric enum
enum Color {
    Red,    // 0
    Green,  // 1
    Blue    // 2
}

// Custom values
enum Status {
    Active = 1,
    Inactive = 0,
    Pending = 2
}

// String enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// Usage
let color: Color = Color.Red;
let direction: Direction = Direction.Up;
\`\`\`

### Unknown
\`\`\`typescript
let unknownValue: unknown = "hello";

// Type checking required
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}

// Cannot assign to other types without check
// let str: string = unknownValue; // ❌ Error
\`\`\`

### Any (Avoid!)
\`\`\`typescript
let anyValue: any = "hello";
anyValue = 42;
anyValue = true;

// No type checking
let str: string = anyValue; // Allowed (dangerous!)
\`\`\`

### Void
\`\`\`typescript
function logMessage(message: string): void {
    console.log(message);
}

let unusable: void = undefined;
\`\`\`

### Null and Undefined
\`\`\`typescript
let nullable: string | null = null;
let undefinedValue: string | undefined = undefined;

// With strictNullChecks: true
let strict: string = "hello";
// strict = null; // ❌ Error
\`\`\`

### Never
\`\`\`typescript
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}
\`\`\`

### Object
\`\`\`typescript
// Object type
let obj: object = { name: "John" };

// Index signature
let dict: { [key: string]: number } = {
    one: 1,
    two: 2
};

// Optional properties
let optionalObj: { name: string; age?: number } = {
    name: "John"
};
\`\`\`

### Type Assertion
\`\`\`typescript
let someValue: unknown = "this is a string";

// Two ways
let strLength1: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;
\`\`\`

### Literal Types
\`\`\`typescript
let exact: "hello" = "hello";
// exact = "world"; // ❌ Error

let direction: "up" | "down" = "up";
// direction = "left"; // ❌ Error
\`\`\`

## Best Practices

1. **Use unknown instead of any**
2. **Use const assertions** for literals
3. **Use readonly** for immutable arrays
4. **Use tuples** for fixed-length arrays
5. **Use enums** for constants
6. **Avoid any** at all costs
7. **Use type inference** when possible
8. **Use union types** for flexibility
  `,
  quiz: [
    {
      question: "Tipe untuk nilai yang tidak diketahui adalah?",
      options: ["any", "unknown", "void", "never"],
      correctAnswer: 1
    },
    {
      question: "Tuple di TypeScript adalah?",
      options: ["Array with fixed length", "Object with keys", "Union type", "Enum"],
      correctAnswer: 0
    },
    {
      question: "Tipe untuk function yang tidak return adalah?",
      options: ["any", "unknown", "void", "never"],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Complete Basic Types Examples",
      code: `// ============================================
// 1. Primitives
// ============================================
// Boolean
let isDone: boolean = false;
let isLoading: boolean = true;

// Number
let decimal: number = 42;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14159;

// String
let firstName: string = "John";
let lastName: string = 'Doe';
let fullName: string = \`\${firstName} \${lastName}\`;
let multiline: string = \`
    This is a
    multiline string
\`;

// ============================================
// 2. Arrays
// ============================================
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["a", "b", "c"];
let mixed: (string | number)[] = ["hello", 42, "world", 100];
let readonly: readonly number[] = [1, 2, 3];
let tuple: [string, number, boolean] = ["hello", 42, true];

// ============================================
// 3. Objects
// ============================================
// Object literal
let person: { name: string; age: number } = {
    name: "John",
    age: 30
};

// Optional properties
let optional: { name: string; age?: number } = {
    name: "Jane"
};

// Readonly properties
let readonlyObj: { readonly name: string } = {
    name: "John"
};

// Index signature
let dictionary: { [key: string]: number } = {
    one: 1,
    two: 2,
    three: 3
};

// ============================================
// 4. Enums
// ============================================
// Numeric enum
enum Color {
    Red,    // 0
    Green,  // 1
    Blue    // 2
}

// Custom numeric values
enum Status {
    Active = 1,
    Inactive = 0,
    Pending = 2
}

// String enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// Const enum (optimized)
const enum LogLevel {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}

// Usage
let myColor: Color = Color.Red;
let myDirection: Direction = Direction.Up;
let logLevel: LogLevel = LogLevel.Info;

// ============================================
// 5. Union & Intersection
// ============================================
// Union
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42;

// Union with literal
type StatusType = "active" | "inactive" | "pending";
let status: StatusType = "active";

// Intersection
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;
let person2: Person = { name: "John", age: 30 };

// ============================================
// 6. Type Aliases
// ============================================
type User = {
    id: number;
    name: string;
    email: string;
};

type Point = {
    x: number;
    y: number;
};

type Callback = (data: string) => void;

let user: User = {
    id: 1,
    name: "John",
    email: "john@example.com"
};

// ============================================
// 7. Type Assertions
// ============================================
let unknownValue: unknown = "hello world";

// as syntax
let strLength1: number = (unknownValue as string).length;

// angle-bracket syntax (not in JSX)
let strLength2: number = (<string>unknownValue).length;

// const assertion
let literal = "hello" as const;
// literal = "world"; // ❌ Error

let array = [1, 2, 3] as const;
// array[0] = 5; // ❌ Error

// ============================================
// 8. Null and Undefined
// ============================================
let nullable: string | null = null;
let undefinedable: string | undefined = undefined;
let optionalString?: string; // undefined

// Non-null assertion operator (!)
function processValue(value: string | null): string {
    return value!.toUpperCase(); // Assumes value is not null
}

// ============================================
// 9. Never
// ============================================
function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {}
}

// Exhaustive check
function assertNever(value: never): never {
    throw new Error(\`Unexpected value: \${value}\`);
}

// ============================================
// 10. Type Guards
// ============================================
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

function process(input: string | number): string {
    if (isString(input)) {
        return input.toUpperCase();
    }
    return input.toString();
}`,
      language: "typescript"
    }
  ]
};