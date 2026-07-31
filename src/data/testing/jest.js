export const chapter = {
  slug: "jest",
  title: "Jest",
  description: "Testing framework Jest untuk JavaScript dan React.",
  icon: "SiJest",
  color: "#C21325",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["testing-introduction", "testing-unit-testing"],
  tags: ["testing", "jest", "react", "snapshot"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Jest?

Jest adalah testing framework dari Facebook untuk JavaScript dan React.

## Instalasi

\`\`\`bash
npm install --save-dev jest
npm install --save-dev @types/jest
\`\`\`

## Basic Test

\`\`\`javascript
// sum.js
function sum(a, b) { return a + b; }
module.exports = sum;

// sum.test.js
const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
\`\`\`

## Matchers

### Equality
\`\`\`javascript
test('equality matchers', () => {
    expect(2 + 2).toBe(4);
    expect({ name: 'John' }).toEqual({ name: 'John' });
    expect([1, 2]).toEqual([1, 2]);
});
\`\`\`

### Truthiness
\`\`\`javascript
test('truthiness matchers', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
});
\`\`\`

### Numbers
\`\`\`javascript
test('number matchers', () => {
    expect(5).toBeGreaterThan(3);
    expect(5).toBeLessThan(10);
    expect(5).toBeGreaterThanOrEqual(5);
    expect(0.1 + 0.2).toBeCloseTo(0.3);
});
\`\`\`

### Strings
\`\`\`javascript
test('string matchers', () => {
    expect('hello world').toMatch(/world/);
    expect('hello').toContain('ell');
});
\`\`\`

### Arrays
\`\`\`javascript
test('array matchers', () => {
    expect([1, 2, 3]).toContain(2);
    expect([1, 2, 3]).toHaveLength(3);
});
\`\`\`

## Async Testing

### Promises
\`\`\`javascript
test('async with promises', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});
\`\`\`

### Async/Await
\`\`\`javascript
test('async with async/await', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});
\`\`\`

### Callbacks
\`\`\`javascript
test('async with callback', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }
    fetchData(callback);
});
\`\`\`

## Mock Functions

### Basic Mock
\`\`\`javascript
test('mock function', () => {
    const mock = jest.fn();
    mock('hello');
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith('hello');
});
\`\`\`

### Mock Return Value
\`\`\`javascript
test('mock return value', () => {
    const mock = jest.fn().mockReturnValue('mocked');
    expect(mock()).toBe('mocked');
});
\`\`\`

### Mock Implementation
\`\`\`javascript
test('mock implementation', () => {
    const mock = jest.fn().mockImplementation(() => 'custom');
    expect(mock()).toBe('custom');
});
\`\`\`

## Snapshot Testing

\`\`\`javascript
test('snapshot test', () => {
    const user = {
        name: 'John',
        age: 30,
        email: 'john@example.com'
    };
    expect(user).toMatchSnapshot();
});
\`\`\`

## Setup and Teardown

\`\`\`javascript
beforeAll(() => { console.log('before all'); });
afterAll(() => { console.log('after all'); });
beforeEach(() => { console.log('before each'); });
afterEach(() => { console.log('after each'); });
\`\`\`

## Config

### jest.config.js
\`\`\`javascript
module.exports = {
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.js'],
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js']
};
\`\`\`

## Best Practices

1. **Test one thing per test**
2. **Use describe for grouping**
3. **Write descriptive test names**
4. **Use beforeEach for setup**
5. **Mock external dependencies**
6. **Use snapshot for UI**
7. **Run tests in watch mode**
8. **Aim for high coverage**
  `,
  quiz: [
    {
      question: "Framework testing dari Facebook adalah?",
      options: ["Mocha", "Jest", "Cypress", "Playwright"],
      correctAnswer: 1
    },
    {
      question: "Matcher untuk equality object adalah?",
      options: ["toBe", "toEqual", "toMatch", "toBeEqual"],
      correctAnswer: 1
    },
    {
      question: "Hook yang dijalankan sebelum setiap test adalah?",
      options: ["beforeAll", "beforeEach", "afterAll", "afterEach"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Jest Examples",
      code: `// ============================================
// 1. Math Functions
// ============================================
// math.js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

// math.test.js
describe('Math functions', () => {
    test('adds numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });
    
    test('subtracts numbers', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(0, 5)).toBe(-5);
    });
    
    test('multiplies numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
    });
    
    test('divides numbers', () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(10, 4)).toBe(2.5);
    });
    
    test('throws on division by zero', () => {
        expect(() => divide(10, 0)).toThrow('Division by zero');
    });
});

// ============================================
// 2. Async Functions
// ============================================
// async.js
async function fetchUser(id) {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) throw new Error('User not found');
    return response.json();
}

// async.test.js
describe('Async functions', () => {
    test('fetches user', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ id: 1, name: 'John' })
        });
        
        const user = await fetchUser(1);
        expect(user).toEqual({ id: 1, name: 'John' });
    });
    
    test('handles error', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false
        });
        
        await expect(fetchUser(999)).rejects.toThrow('User not found');
    });
});

// ============================================
// 3. Mock Functions
// ============================================
// mock.test.js
describe('Mock functions', () => {
    test('creates mock function', () => {
        const mock = jest.fn();
        mock('hello');
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith('hello');
        expect(mock).toHaveBeenCalledTimes(1);
    });
    
    test('mock with return value', () => {
        const mock = jest.fn().mockReturnValue('mocked');
        expect(mock()).toBe('mocked');
    });
    
    test('mock with implementation', () => {
        const mock = jest.fn().mockImplementation((a, b) => a + b);
        expect(mock(2, 3)).toBe(5);
    });
});

// ============================================
// 4. Snapshot Testing
// ============================================
// snapshot.test.js
describe('Snapshot tests', () => {
    test('user object matches snapshot', () => {
        const user = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            createdAt: '2024-01-01'
        };
        expect(user).toMatchSnapshot();
    });
    
    test('array matches snapshot', () => {
        const items = ['apple', 'banana', 'orange'];
        expect(items).toMatchSnapshot();
    });
});

// ============================================
// 5. Timer Mocks
// ============================================
// timer.js
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

// timer.test.js
describe('Timer mocks', () => {
    jest.useFakeTimers();
    
    test('debounces function', () => {
        const fn = jest.fn();
        const debounced = debounce(fn, 1000);
        
        debounced();
        debounced();
        debounced();
        
        expect(fn).not.toHaveBeenCalled();
        jest.advanceTimersByTime(1000);
        expect(fn).toHaveBeenCalledTimes(1);
    });
});

// ============================================
// 6. Class Testing
// ============================================
// class.test.js
class Calculator {
    constructor() {
        this.value = 0;
    }
    
    add(n) { this.value += n; return this; }
    subtract(n) { this.value -= n; return this; }
    getResult() { return this.value; }
}

describe('Calculator class', () => {
    let calc;
    
    beforeEach(() => {
        calc = new Calculator();
    });
    
    test('initializes with 0', () => {
        expect(calc.getResult()).toBe(0);
    });
    
    test('adds value', () => {
        calc.add(5);
        expect(calc.getResult()).toBe(5);
        calc.add(3);
        expect(calc.getResult()).toBe(8);
    });
    
    test('subtracts value', () => {
        calc.add(10);
        calc.subtract(3);
        expect(calc.getResult()).toBe(7);
    });
    
    test('chains operations', () => {
        calc.add(5).subtract(2).add(10);
        expect(calc.getResult()).toBe(13);
    });
});`,
      language: "javascript"
    }
  ]
};