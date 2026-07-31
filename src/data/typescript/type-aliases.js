export const chapter = {
  slug: "type-aliases",
  title: "Type Aliases",
  description: "Menggunakan type aliases untuk membuat tipe custom di TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["typescript-introduction", "typescript-basic-types"],
  tags: ["typescript", "type-aliases", "custom-types"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Type Aliases?

Type aliases membuat nama baru untuk tipe data di TypeScript.

## Basic Type Aliases

\`\`\`typescript
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

const user: User = { id: 1, name: "John", email: "john@example.com" };
const point: Point = { x: 10, y: 20 };
const callback: Callback = (data) => console.log(data);
\`\`\`

## Union Types

\`\`\`typescript
type StringOrNumber = string | number;
type Status = "active" | "inactive" | "pending";
type UserId = string | number;

let id: UserId = "123";
id = 123;
let status: Status = "active";
\`\`\`

## Intersection Types

\`\`\`typescript
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;

const person: Person = { name: "John", age: 30 };

// Combine multiple
type WithId = { id: number };
type WithTimestamp = { createdAt: Date };
type Entity = WithId & WithTimestamp & Person;
\`\`\`

## Tuple Types

\`\`\`typescript
type Point3D = [number, number, number];
type UserTuple = [string, number, boolean];

const point: Point3D = [1, 2, 3];
const user: UserTuple = ["John", 30, true];
\`\`\`

## Generic Types

\`\`\`typescript
type Container<T> = {
    value: T;
    get(): T;
};

type Result<T, E> = {
    success: boolean;
    data?: T;
    error?: E;
};

type Callback<T> = (data: T) => void;

const stringContainer: Container<string> = {
    value: "hello",
    get: () => "hello"
};
\`\`\`

## Utility Types

\`\`\`typescript
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;
type UserName = Pick<User, "name">;
type UserWithoutEmail = Omit<User, "email">;
\`\`\`

## Recursive Types

\`\`\`typescript
type TreeNode = {
    value: number;
    left?: TreeNode;
    right?: TreeNode;
};

type JSONValue = 
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [key: string]: JSONValue };

const tree: TreeNode = {
    value: 1,
    left: { value: 2 },
    right: { value: 3 }
};
\`\`\`

## Conditional Types

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    "object";
\`\`\`

## Mapped Types

\`\`\`typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

type Optional<T> = {
    [P in keyof T]?: T[P];
};

type User = { id: number; name: string; email: string };
type ReadonlyUser = Readonly<User>;
type NullableUser = Nullable<User>;
\`\`\`

## Best Practices

1. **Use type aliases** untuk complex types
2. **Use PascalCase** untuk type names
3. **Use type aliases** untuk unions
4. **Use type aliases** untuk tuples
5. **Use type aliases** untuk function signatures
6. **Use generic types** untuk reusability
7. **Use conditional types** untuk logic
8. **Use mapped types** untuk transformations
  `,
  quiz: [
    {
      question: "Keyword untuk membuat type alias adalah?",
      options: ["type", "alias", "typedef", "newtype"],
      correctAnswer: 0
    },
    {
      question: "Union type ditandai dengan?",
      options: ["&", "|", "+", "-"],
      correctAnswer: 1
    },
    {
      question: "Intersection type ditandai dengan?",
      options: ["&", "|", "+", "-"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Type Aliases Examples",
      code: `// ============================================
// 1. Basic Type Aliases
// ============================================
type User = {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
};

type Point = {
    x: number;
    y: number;
    z?: number;
};

type Callback = (error: Error | null, data?: any) => void;

const user: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    createdAt: new Date()
};

const point: Point = { x: 10, y: 20 };

// ============================================
// 2. Union Types
// ============================================
type Status = "active" | "inactive" | "pending";
type ID = string | number;
type MaybeString = string | undefined;

let id: ID = "123";
id = 456;
let status: Status = "active";

// Union with objects
type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; name: string };
type Account = Admin | User;

function getAccount(account: Account): string {
    if (account.role === "admin") {
        return \`Admin with permissions: \${account.permissions.join(", ")}\`;
    }
    return \`User: \${account.name}\`;
}

// ============================================
// 3. Intersection Types
// ============================================
type WithId = { id: number };
type WithName = { name: string };
type WithEmail = { email: string };

type Person = WithId & WithName & WithEmail;

const person: Person = {
    id: 1,
    name: "John",
    email: "john@example.com"
};

// Multiple intersections
type Timestamped = { createdAt: Date; updatedAt: Date };
type SoftDelete = { deletedAt: Date | null };
type Entity = Person & Timestamped & SoftDelete;

// ============================================
// 4. Tuple Types
// ============================================
type Point3D = [number, number, number];
type UserTuple = [id: number, name: string, email: string];
type OptionalTuple = [string, number?];

const point3D: Point3D = [1, 2, 3];
const userTuple: UserTuple = [1, "John", "john@example.com"];
const optional: OptionalTuple = ["hello"];

// Rest tuples
type RestTuple = [string, ...number[]];
const rest: RestTuple = ["hello", 1, 2, 3, 4];

// ============================================
// 5. Generic Types
// ============================================
type Container<T> = {
    value: T;
    get(): T;
    set(value: T): void;
};

type Result<T, E = Error> = {
    success: boolean;
    data?: T;
    error?: E;
};

type AsyncFunction<T> = (...args: any[]) => Promise<T>;

const stringContainer: Container<string> = {
    value: "hello",
    get() { return this.value; },
    set(value) { this.value = value; }
};

// ============================================
// 6. Utility Types (Custom)
// ============================================
type ReadonlyDeep<T> = {
    readonly [P in keyof T]: T[P] extends object ? ReadonlyDeep<T[P]> : T[P];
};

type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

type Optional<T> = {
    [P in keyof T]?: T[P];
};

type Flatten<T> = T extends any[] ? T[number] : T;

// ============================================
// 7. Conditional Types
// ============================================
type IsArray<T> = T extends any[] ? true : false;
type ElementType<T> = T extends any[] ? T[number] : T;

type A = IsArray<number[]>; // true
type B = IsArray<string>; // false
type C = ElementType<number[]>; // number

// ============================================
// 8. Mapped Types
// ============================================
type Getters<T> = {
    [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

type Setters<T> = {
    [P in keyof T as \`set\${Capitalize<string & P>}\`]: (value: T[P]) => void;
};

type User2 = {
    name: string;
    age: number;
};

type UserGetters = Getters<User2>; // { getName: () => string; getAge: () => number }
type UserSetters = Setters<User2>; // { setName: (value: string) => void; setAge: (value: number) => void }

// ============================================
// 9. Recursive Types
// ============================================
type JSONValue = 
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [key: string]: JSONValue };

type LinkedList<T> = {
    value: T;
    next: LinkedList<T> | null;
};

type Tree<T> = {
    value: T;
    children: Tree<T>[];
};

// ============================================
// 10. Function Types
// ============================================
type BinaryFunction = (a: number, b: number) => number;
type EventHandler<T = Event> = (event: T) => void;
type Middleware = (req: any, res: any, next: () => void) => void;

const add: BinaryFunction = (a, b) => a + b;
const handleClick: EventHandler = (event) => console.log(event);
const logger: Middleware = (req, res, next) => {
    console.log(req.url);
    next();
};

// ============================================
// 11. Discriminated Unions
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
        case "circle": return Math.PI * shape.radius ** 2;
        case "rectangle": return shape.width * shape.height;
        case "triangle": return 0.5 * shape.base * shape.height;
    }
}`,
      language: "typescript"
    }
  ]
};