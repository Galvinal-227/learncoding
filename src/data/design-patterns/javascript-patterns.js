export const chapter = {
  slug: "design-patterns-javascript-patterns",
  title: "JavaScript-Specific Patterns",
  description: "Pattern khusus JavaScript: Module, Revealing Module, Prototype, Chaining, Currying.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["design-patterns-observer-pattern"],
  tags: ["design-patterns", "javascript", "closure", "prototype"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## JavaScript-Specific Patterns

## 1. Chaining Pattern

\`\`\`javascript
class Calculator {
    #value = 0;
    
    add(n) { this.#value += n; return this; }
    subtract(n) { this.#value -= n; return this; }
    multiply(n) { this.#value *= n; return this; }
    divide(n) { this.#value /= n; return this; }
    getValue() { return this.#value; }
}

const result = new Calculator()
    .add(10)
    .multiply(2)
    .subtract(5)
    .divide(3)
    .getValue();
console.log(result); // 5
\`\`\`

## 2. Currying Pattern

\`\`\`javascript
// Curry function
const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) return fn(...args);
        return (...next) => curried(...args, ...next);
    };
};

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
\`\`\`

## 3. Memoization Pattern

\`\`\`javascript
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

const fibonacci = memoize((n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(50)); // Instant!
\`\`\`

## 4. Lazy Initialization

\`\`\`javascript
class ExpensiveResource {
    constructor() {
        console.log('Expensive initialization...');
        this.data = Array(1000000).fill(0).map((_, i) => i);
    }
}

class LazyService {
    #resource = null;
    
    getResource() {
        if (!this.#resource) {
            this.#resource = new ExpensiveResource();
        }
        return this.#resource;
    }
}
\`\`\`
  `,

  quiz: [
    { question: "Chaining pattern?", options: ["Async", "Return this untuk method chaining", "Promise chain", "Event chain"], correctAnswer: 1 },
    { question: "Currying?", options: ["Cooking", "Transform fungsi multi-arg ke nested unary", "Looping", "Error handling"], correctAnswer: 1 }
  ],

  codeExamples: []
};