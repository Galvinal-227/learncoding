export const chapter = {
  slug: "decorators",
  title: "Decorators",
  description: "Menggunakan decorators untuk menambahkan metadata dan fungsionalitas.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["typescript-introduction", "typescript-classes"],
  tags: ["typescript", "decorators", "metadata", "annotations"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Decorators?

Decorators adalah fungsi yang memodifikasi class, method, property, atau parameter.

## Setup

\`\`\`json
// tsconfig.json
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
\`\`\`

## Class Decorators

\`\`\`typescript
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Person {
    constructor(public name: string) {}
}
\`\`\`

## Method Decorators

\`\`\`typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(\`Calling \${propertyKey} with \${args}\`);
        return original.apply(this, args);
    };
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}
\`\`\`

## Property Decorators

\`\`\`typescript
function required(target: any, propertyKey: string) {
    let value: any;
    const getter = () => value;
    const setter = (newVal: any) => {
        if (!newVal) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

class User {
    @required
    name: string;
}
\`\`\`

## Parameter Decorators

\`\`\`typescript
function logParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(\`Parameter \${parameterIndex} in \${propertyKey}\`);
}

class Service {
    process(@logParameter data: string) {
        return data;
    }
}
\`\`\`

## Accessor Decorators

\`\`\`typescript
function logAccessor(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const original = descriptor.get;
    descriptor.get = function() {
        console.log(\`Getting \${propertyKey}\`);
        return original!.call(this);
    };
}

class Person {
    private _name: string = "";
    
    @logAccessor
    get name(): string {
        return this._name;
    }
}
\`\`\`

## Decorator Factory

\`\`\`typescript
function logWithPrefix(prefix: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function(...args: any[]) {
            console.log(\`[\${prefix}] Calling \${propertyKey}\`);
            return original.apply(this, args);
        };
    };
}

class Service {
    @logWithPrefix("API")
    fetch(): void {
        console.log("Fetching...");
    }
}
\`\`\`

## Best Practices

1. **Enable experimentalDecorators** in tsconfig
2. **Use decorator factories** for configuration
3. **Keep decorators simple** and focused
4. **Use decorators** for cross-cutting concerns
5. **Document decorators** clearly
6. **Use multiple decorators** on same target
7. **Avoid side effects** in decorators
8. **Use decorators** with classes
  `,
  quiz: [
    {
      question: "Decorator untuk class adalah?",
      options: ["@class", "@sealed", "@component", "@service"],
      correctAnswer: 1
    },
    {
      question: "Config untuk decorators di tsconfig adalah?",
      options: ["experimentalDecorators", "decorators", "emitDecorators", "useDecorators"],
      correctAnswer: 0
    },
    {
      question: "Decorator untuk method adalah?",
      options: ["@method", "@log", "@decorate", "@use"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Decorator Examples",
      code: `// ============================================
// tsconfig.json
// ============================================
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}

// ============================================
// 1. Class Decorators
// ============================================
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function timestamps<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        createdAt = new Date();
        updatedAt = new Date();
    };
}

@sealed
@timestamps
class Product {
    constructor(public name: string, public price: number) {}
}

// ============================================
// 2. Method Decorators
// ============================================
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(\`[LOG] \${propertyKey} called with arguments:\`, args);
        const result = original.apply(this, args);
        console.log(\`[LOG] \${propertyKey} returned:\`, result);
        return result;
    };
    return descriptor;
}

function measure(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args: any[]) {
        const start = performance.now();
        const result = original.apply(this, args);
        const end = performance.now();
        console.log(\`[MEASURE] \${propertyKey} took \${end - start}ms\`);
        return result;
    };
    return descriptor;
}

function throttle(ms: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        let lastCall = 0;
        descriptor.value = function(...args: any[]) {
            const now = Date.now();
            if (now - lastCall >= ms) {
                lastCall = now;
                return original.apply(this, args);
            }
            console.log(\`[THROTTLE] \${propertyKey} throttled\`);
        };
        return descriptor;
    };
}

class MathService {
    @log
    @measure
    add(a: number, b: number): number {
        return a + b;
    }
    
    @throttle(1000)
    @log
    fetchData(): void {
        console.log("Fetching data...");
    }
}

// ============================================
// 3. Property Decorators
// ============================================
function required(target: any, propertyKey: string) {
    let value: any;
    const getter = () => value;
    const setter = (newVal: any) => {
        if (newVal === undefined || newVal === null || newVal === "") {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

function defaultValue(defaultVal: any) {
    return function(target: any, propertyKey: string) {
        let value = defaultVal;
        const getter = () => value;
        const setter = (newVal: any) => {
            value = newVal !== undefined ? newVal : defaultVal;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}

function upperCase(target: any, propertyKey: string) {
    let value: string = "";
    const getter = () => value;
    const setter = (newVal: string) => {
        value = newVal.toUpperCase();
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

class User {
    @required
    name: string;
    
    @defaultValue(18)
    age: number;
    
    @upperCase
    email: string;
    
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

// ============================================
// 4. Parameter Decorators
// ============================================
function validate(target: any, propertyKey: string, parameterIndex: number) {
    console.log(\`[VALIDATE] Parameter \${parameterIndex} in \${propertyKey}\`);
}

class Validator {
    process(@validate data: string, @validate id: number): string {
        return \`Processing \${data} with id \${id}\`;
    }
}

// ============================================
// 5. Accessor Decorators
// ============================================
function logAccessor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get;
    const originalSet = descriptor.set;
    
    if (originalGet) {
        descriptor.get = function() {
            console.log(\`[GET] \${propertyKey}\`);
            return originalGet.call(this);
        };
    }
    
    if (originalSet) {
        descriptor.set = function(value: any) {
            console.log(\`[SET] \${propertyKey} = \${value}\`);
            originalSet.call(this, value);
        };
    }
}

class Person {
    private _name: string = "";
    
    @logAccessor
    get name(): string {
        return this._name;
    }
    
    set name(value: string) {
        this._name = value;
    }
}

// ============================================
// 6. Decorator Factories
// ============================================
function logWithPrefix(prefix: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function(...args: any[]) {
            console.log(\`[\${prefix}] \${propertyKey} called\`);
            return original.apply(this, args);
        };
        return descriptor;
    };
}

function retry(attempts: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = async function(...args: any[]) {
            let lastError: any;
            for (let i = 0; i < attempts; i++) {
                try {
                    return await original.apply(this, args);
                } catch (error) {
                    lastError = error;
                    console.log(\`[RETRY] Attempt \${i + 1} failed\`);
                }
            }
            throw lastError;
        };
        return descriptor;
    };
}

class ApiService {
    @logWithPrefix("API")
    @retry(3)
    async fetchData(): Promise<string> {
        console.log("Fetching data...");
        return "Data";
    }
}

// ============================================
// 7. Multiple Decorators
// ============================================
class Example {
    @log
    @measure
    @throttle(500)
    process(): void {
        console.log("Processing...");
    }
}

// ============================================
// 8. Real World Example
// ============================================
// Validation decorators
function isEmail(target: any, propertyKey: string) {
    let value: string;
    const getter = () => value;
    const setter = (newVal: string) => {
        if (!newVal.includes("@")) {
            throw new Error(\`\${propertyKey} must be a valid email\`);
        }
        value = newVal;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

function minLength(length: number) {
    return function(target: any, propertyKey: string) {
        let value: string;
        const getter = () => value;
        const setter = (newVal: string) => {
            if (newVal.length < length) {
                throw new Error(\`\${propertyKey} must be at least \${length} characters\`);
            }
            value = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}

class RegisterForm {
    @isEmail
    email: string;
    
    @minLength(8)
    password: string;
    
    @required
    name: string;
    
    constructor(email: string, password: string, name: string) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
}`,
      language: "typescript"
    }
  ]
};