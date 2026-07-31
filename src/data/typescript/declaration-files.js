export const chapter = {
  slug: "declaration-files",
  title: "Declaration Files",
  description: "Membuat dan menggunakan declaration files (.d.ts) di TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["typescript-introduction"],
  tags: ["typescript", "declaration-files", "d.ts", "types"],
  order: 14,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Declaration Files?

Declaration files (.d.ts) memberikan informasi tipe untuk JavaScript libraries.

## Basic Declaration

\`\`\`typescript
// math.d.ts
declare module "math" {
    export function add(a: number, b: number): number;
    export function subtract(a: number, b: number): number;
    export const PI: number;
}
\`\`\`

## Global Declaration

\`\`\`typescript
// global.d.ts
declare global {
    interface Window {
        myGlobal: string;
        myFunction(): void;
    }
    
    const MY_CONSTANT: string;
}
\`\`\`

## Module Declaration

\`\`\`typescript
// modules.d.ts
declare module "my-library" {
    export interface Config {
        apiKey: string;
        timeout?: number;
    }
    
    export function initialize(config: Config): void;
    export function process(data: any): Promise<any>;
}
\`\`\`

## Class Declaration

\`\`\`typescript
// classes.d.ts
declare class Calculator {
    constructor();
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    result: number;
}
\`\`\`

## Function Declaration

\`\`\`typescript
// functions.d.ts
declare function createUser(name: string, email: string): User;
declare function createUser(data: { name: string; email: string }): User;

interface User {
    id: number;
    name: string;
    email: string;
}
\`\`\`

## Generic Declaration

\`\`\`typescript
// generics.d.ts
declare class Container<T> {
    value: T;
    get(): T;
    set(value: T): void;
}

declare function identity<T>(value: T): T;
\`\`\`

## Namespace Declaration

\`\`\`typescript
// namespace.d.ts
declare namespace MyLib {
    interface Options {
        debug: boolean;
    }
    
    function init(options: Options): void;
    function process(data: any): any;
}
\`\`\`

## Merging Declarations

\`\`\`typescript
// merge.d.ts
interface Window {
    myLibrary: {
        version: string;
        init(): void;
    };
}

// Another file
interface Window {
    myLibrary: {
        version: string;
        init(): void;
        destroy(): void;
    };
}
\`\`\`

## DefinitelyTyped

\`\`\`bash
npm install --save-dev @types/node
npm install --save-dev @types/react
npm install --save-dev @types/express
npm install --save-dev @types/lodash
\`\`\`

## Best Practices

1. **Use .d.ts** for type definitions
2. **Use @types** for third-party libraries
3. **Use declare** for global variables
4. **Use declare module** for external modules
5. **Use namespace** for legacy code
6. **Use export** for module definitions
7. **Use interface** for object shapes
8. **Use type** for complex types
  `,
  quiz: [
    {
      question: "Extension file declaration TypeScript adalah?",
      options: [".ts", ".d.ts", ".tsx", ".js"],
      correctAnswer: 1
    },
    {
      question: "Keyword untuk mendeklarasikan module adalah?",
      options: ["declare module", "module", "namespace", "export"],
      correctAnswer: 0
    },
    {
      question: "Package @types digunakan untuk?",
      options: ["Runtime", "Type definitions", "Testing", "Build"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Declaration Files Examples",
      code: `// ============================================
// 1. Basic Declaration (math.d.ts)
// ============================================
declare module "math" {
    export const PI: number;
    export const E: number;
    
    export function add(a: number, b: number): number;
    export function subtract(a: number, b: number): number;
    export function multiply(a: number, b: number): number;
    export function divide(a: number, b: number): number;
    
    export interface MathFunction {
        (a: number, b: number): number;
    }
}

// ============================================
// 2. Class Declaration (calculator.d.ts)
// ============================================
declare module "calculator" {
    export default class Calculator {
        constructor(initialValue?: number);
        add(value: number): this;
        subtract(value: number): this;
        multiply(value: number): this;
        divide(value: number): this;
        getResult(): number;
        reset(): this;
    }
}

// ============================================
// 3. Function Declaration (utils.d.ts)
// ============================================
declare module "utils" {
    export function capitalize(str: string): string;
    export function truncate(str: string, length: number): string;
    export function isEmpty(str: string): boolean;
    
    export function debounce<T extends (...args: any[]) => any>(
        fn: T,
        delay: number
    ): T;
    
    export function throttle<T extends (...args: any[]) => any>(
        fn: T,
        limit: number
    ): T;
}

// ============================================
// 4. Generic Declaration (container.d.ts)
// ============================================
declare module "container" {
    export class Container<T> {
        constructor(value: T);
        get(): T;
        set(value: T): void;
        map<U>(fn: (value: T) => U): Container<U>;
    }
    
    export function identity<T>(value: T): T;
}

// ============================================
// 5. Namespace Declaration (legacy.d.ts)
// ============================================
declare namespace LegacyLib {
    interface Config {
        debug: boolean;
        timeout: number;
    }
    
    function init(config: Config): void;
    function process(data: any): Promise<any>;
    
    namespace utils {
        function format(data: any): string;
        function parse(data: string): any;
    }
}

// ============================================
// 6. Global Declaration (global.d.ts)
// ============================================
// This file is automatically included
declare global {
    // Window extensions
    interface Window {
        __ENV__: {
            API_URL: string;
            DEBUG: boolean;
        };
        __APP_VERSION__: string;
    }
    
    // Global variables
    const APP_VERSION: string;
    const API_URL: string;
    
    // Global functions
    function globalLog(message: string): void;
    function globalError(message: string): void;
    
    // Global namespaces
    namespace __global {
        const config: {
            env: string;
            debug: boolean;
        };
    }
}

// ============================================
// 7. Module Augmentation (augment.d.ts)
// ============================================
import { User } from './models';

declare module 'express' {
    interface Request {
        user?: User;
        sessionId?: string;
    }
}

declare module 'axios' {
    export interface AxiosRequestConfig {
        retry?: number;
        retryDelay?: number;
    }
}

// ============================================
// 8. Declaration Merging (merge.d.ts)
// ============================================
interface MyLib {
    version: string;
    init(): void;
}

interface MyLib {
    destroy(): void;
    process(data: any): Promise<any>;
}

// ============================================
// 9. Third-party Type Augmentation
// ============================================
// Add missing types to existing library
declare module 'lodash' {
    interface LoDashStatic {
        customFn<T>(data: T): T;
    }
}

// ============================================
// 10. Complete Library Declaration
// ============================================
// mylib.d.ts
declare module "mylib" {
    // Options interface
    export interface Options {
        apiKey: string;
        baseUrl?: string;
        timeout?: number;
        retries?: number;
    }
    
    // Response interface
    export interface Response<T = any> {
        data: T;
        status: number;
        message: string;
        timestamp: string;
    }
    
    // Error interface
    export interface ApiError {
        code: string;
        message: string;
        status: number;
    }
    
    // Main client class
    export class Client {
        constructor(options: Options);
        get<T>(url: string): Promise<Response<T>>;
        post<T>(url: string, data: any): Promise<Response<T>>;
        put<T>(url: string, data: any): Promise<Response<T>>;
        delete<T>(url: string): Promise<Response<T>>;
        setHeader(key: string, value: string): void;
        removeHeader(key: string): void;
    }
    
    // Utility functions
    export function formatError(error: ApiError): string;
    export function parseResponse<T>(response: Response<T>): T;
    
    // Constants
    export const VERSION: string;
    export const DEFAULT_CONFIG: Partial<Options>;
}`,
      language: "typescript"
    }
  ]
};