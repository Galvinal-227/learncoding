export const chapter = {
  slug: "best-practices",
  title: "Best Practices",
  description: "Best practices dalam menggunakan TypeScript untuk project yang maintainable.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["typescript-introduction"],
  tags: ["typescript", "best-practices", "maintainable"],
  order: 18,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Best Practices TypeScript

### 1. Use Strict Mode
\`\`\`json
{
    "compilerOptions": {
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true
    }
}
\`\`\`

### 2. Avoid Any
\`\`\`typescript
// ❌ Bad
let data: any = fetchData();

// ✅ Good
let data: unknown = fetchData();
// Or
interface Data {
    id: number;
    name: string;
}
let data: Data = fetchData();
\`\`\`

### 3. Use Type Inference
\`\`\`typescript
// ❌ Bad
let name: string = "John";
let age: number = 30;

// ✅ Good
let name = "John";
let age = 30;
\`\`\`

### 4. Use Interfaces for Objects
\`\`\`typescript
// ✅ Good
interface User {
    id: number;
    name: string;
    email: string;
}

// ❌ Bad
type User = {
    id: number;
    name: string;
    email: string;
};
\`\`\`

### 5. Use Type Aliases for Unions
\`\`\`typescript
// ✅ Good
type Status = "active" | "inactive" | "pending";
type ID = string | number;

// ❌ Bad
interface Status {
    value: "active" | "inactive" | "pending";
}
\`\`\`

### 6. Use Readonly
\`\`\`typescript
// ✅ Good
interface Config {
    readonly apiKey: string;
    readonly timeout: number;
}

// ❌ Bad
interface Config {
    apiKey: string;
    timeout: number;
}
\`\`\`

### 7. Use Optional Properties
\`\`\`typescript
// ✅ Good
interface User {
    id: number;
    name: string;
    email?: string;
    age?: number;
}

// ❌ Bad
interface User {
    id: number;
    name: string;
    email: string | null;
    age: number | null;
}
\`\`\`

### 8. Use Generics
\`\`\`typescript
// ✅ Good
function identity<T>(value: T): T {
    return value;
}

// ❌ Bad
function identity(value: any): any {
    return value;
}
\`\`\`

### 9. Use Utility Types
\`\`\`typescript
interface User {
    id: number;
    name: string;
    email: string;
}

// Partial
type PartialUser = Partial<User>;

// Pick
type UserPreview = Pick<User, "id" | "name">;

// Omit
type UserWithoutEmail = Omit<User, "email">;

// Readonly
type ReadonlyUser = Readonly<User>;
\`\`\`

### 10. Use Discriminated Unions
\`\`\`typescript
// ✅ Good
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Shape = Circle | Square;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle": return Math.PI * shape.radius ** 2;
        case "square": return shape.side ** 2;
    }
}

// ❌ Bad
type Shape = { type: string; radius?: number; side?: number };
\`\`\`

### 11. Use Type Guards
\`\`\`typescript
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function process(value: string | number): string {
    if (isString(value)) {
        return value.toUpperCase();
    }
    return value.toString();
}
\`\`\`

### 12. Use Consistent Naming
\`\`\`typescript
// ✅ Good
interface UserService {}
class UserController {}
type UserId = string | number;
enum UserStatus { Active, Inactive }

// ❌ Bad
interface userService {}
class userController {}
type userId = string | number;
enum userStatus { Active, Inactive }
\`\`\`

### 13. Use Path Aliases
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

### 14. Use ESLint
\`\`\`javascript
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-unused-vars': 'error'
    }
};
\`\`\`

### 15. Use JSDoc for Documentation
\`\`\`typescript
/**
 * Calculates the sum of two numbers
 * @param a - First number
 * @param b - Second number
 * @returns Sum of a and b
 */
function add(a: number, b: number): number {
    return a + b;
}
\`\`\`

## Code Organization

### Folder Structure
\`\`\`
src/
├── components/
│   └── Button/
│       ├── Button.tsx
│       ├── Button.styles.ts
│       ├── Button.types.ts
│       └── Button.test.tsx
├── hooks/
│   ├── useFetch.ts
│   └── useAuth.ts
├── services/
│   ├── api.ts
│   └── auth.ts
├── utils/
│   ├── format.ts
│   └── validation.ts
├── types/
│   └── index.ts
└── index.ts
\`\`\`

## Checklist

- [ ] Strict mode enabled
- [ ] No any usage
- [ ] Interfaces for objects
- [ ] Type aliases for unions
- [ ] Readonly where needed
- [ ] Optional properties
- [ ] Generics for reusability
- [ ] Utility types
- [ ] Discriminated unions
- [ ] Type guards
- [ ] Consistent naming
- [ ] Path aliases
- [ ] ESLint configured
- [ ] JSDoc for APIs
  `,
  quiz: [
    {
      question: "Apa yang harus dihindari di TypeScript?",
      options: ["any", "unknown", "void", "never"],
      correctAnswer: 0
    },
    {
      question: "Interface vs Type untuk objects sebaiknya menggunakan?",
      options: ["Interface", "Type", "Class", "Enum"],
      correctAnswer: 0
    },
    {
      question: "Utility type untuk membuat semua properties optional adalah?",
      options: ["Partial", "Required", "Readonly", "Pick"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Best Practices Example",
      code: `// ============================================
// 1. Good Practices
// ============================================
// ✅ Use interfaces for objects
interface User {
    id: number;
    name: string;
    email: string;
    readonly createdAt: Date;
    updatedAt: Date;
}

// ✅ Use type aliases for unions
type Status = "active" | "inactive" | "pending";
type UserId = string | number;

// ✅ Use generics
class Repository<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }
    
    find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }
}

// ✅ Use discriminated unions
type Result<T> = 
    | { success: true; data: T }
    | { success: false; error: string };

// ✅ Use type guards
function isSuccess<T>(result: Result<T>): result is { success: true; data: T } {
    return result.success === true;
}

// ✅ Use readonly
interface Config {
    readonly apiKey: string;
    readonly timeout: number;
}

// ✅ Use optional properties
interface UserUpdate {
    name?: string;
    email?: string;
}

// ✅ Use utility types
type PartialUser = Partial<User>;
type UserPreview = Pick<User, "id" | "name">;
type UserWithoutEmail = Omit<User, "email">;

// ============================================
// 2. Bad Practices to Avoid
// ============================================
// ❌ Avoid any
// let data: any = fetchData();

// ❌ Avoid unnecessary type annotations
// let name: string = "John";

// ❌ Avoid using type for objects
// type User = { id: number; name: string };

// ❌ Avoid using interface for unions
// interface Status { value: "active" | "inactive" }

// ❌ Avoid mutable properties
// interface Config { apiKey: string; timeout: number; }

// ============================================
// 3. Naming Conventions
// ============================================
// ✅ PascalCase for interfaces, types, classes, enums
interface UserService {}
class UserController {}
type UserId = string | number;
enum UserStatus { Active, Inactive }

// ✅ camelCase for variables, functions, properties
const userName = "John";
function getUserById(id: number): User | null { return null; }

// ✅ UPPERCASE for constants
const MAX_RETRIES = 3;
const API_URL = "https://api.example.com";

// ✅ Prefix interfaces with I (optional, but consistent)
interface IUserService {}

// ============================================
// 4. Documentation
// ============================================
/**
 * User service for managing users
 */
class UserService {
    /**
     * Get user by ID
     * @param id - User ID
     * @returns User or null if not found
     */
    async getUser(id: number): Promise<User | null> {
        // Implementation
        return null;
    }
    
    /**
     * Create a new user
     * @param data - User data
     * @throws {Error} If email already exists
     */
    async createUser(data: CreateUserDto): Promise<User> {
        // Implementation
        return {} as User;
    }
}

// ============================================
// 5. Error Handling
// ============================================
class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;
    
    constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }
}

function validateUser(user: User): void {
    if (!user.name) {
        throw new AppError('Name is required', 400);
    }
    if (!user.email.includes('@')) {
        throw new AppError('Invalid email', 400);
    }
}

// ============================================
// 6. Testing
// ============================================
describe('UserService', () => {
    let userService: UserService;
    
    beforeEach(() => {
        userService = new UserService();
    });
    
    test('should get user by id', async () => {
        const user = await userService.getUser(1);
        expect(user).toBeDefined();
        expect(user?.id).toBe(1);
    });
    
    test('should create user', async () => {
        const data: CreateUserDto = {
            name: 'John',
            email: 'john@example.com'
        };
        const user = await userService.createUser(data);
        expect(user.name).toBe('John');
        expect(user.email).toBe('john@example.com');
    });
});

// ============================================
// 7. Project Structure
// ============================================
/*
src/
├── components/
│   └── Button/
│       ├── Button.tsx
│       ├── Button.styles.ts
│       ├── Button.types.ts
│       └── Button.test.tsx
├── hooks/
│   ├── useFetch.ts
│   └── useAuth.ts
├── services/
│   ├── api.ts
│   └── auth.ts
├── utils/
│   ├── format.ts
│   └── validation.ts
├── types/
│   └── index.ts
└── index.ts
*/

// ============================================
// 8. tsconfig Best Practices
// ============================================
{
    "compilerOptions": {
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true,
        "strictBindCallApply": true,
        "strictPropertyInitialization": true,
        "noImplicitThis": true,
        "alwaysStrict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    }
}`,
      language: "typescript"
    }
  ]
};