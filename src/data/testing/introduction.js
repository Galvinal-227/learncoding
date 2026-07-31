export const chapter = {
  slug: "introduction",
  title: "Pengenalan Testing",
  description: "Memahami pentingnya testing dan berbagai jenis testing dalam pengembangan software.",
  icon: "SiTestinglibrary",
  color: "#E33332",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["testing", "tdd", "quality", "software"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Testing?

Testing adalah proses mengevaluasi software untuk memastikan berfungsi sesuai yang diharapkan.

## Mengapa Testing Penting?

1. **Mencegah Bug** - Menemukan masalah lebih awal
2. **Kualitas** - Meningkatkan kualitas kode
3. **Confidence** - Yakin saat deploy
4. **Documentation** - Dokumentasi hidup
5. **Refactoring** - Aman untuk refactor
6. **Productivity** - Mengurangi debugging

## Jenis Testing

| Jenis | Deskripsi |
|-------|-----------|
| **Unit Test** | Menguji komponen terkecil |
| **Integration Test** | Menguji interaksi antar komponen |
| **E2E Test** | Menguji seluruh aplikasi |
| **Regression Test** | Memastikan tidak ada regresi |
| **Performance Test** | Menguji performa |
| **Security Test** | Menguji keamanan |

## Testing Pyramid

\`\`\`
        /\\
       /  \\
      / E2E \\
     /--------\\
    / Integration \\
   /---------------\\
  /    Unit Tests    \\
 /-------------------\\
\`\`\`

- **Unit Tests** - Banyak, cepat, murah
- **Integration Tests** - Sedang
- **E2E Tests** - Sedikit, lambat, mahal

## Testing Tools

### JavaScript
- **Jest** - Testing framework
- **Mocha** - Testing framework
- **Chai** - Assertion library
- **Sinon** - Spies, mocks, stubs
- **Supertest** - HTTP testing

### React
- **React Testing Library** - Component testing
- **Enzyme** - Component testing
- **Storybook** - Visual testing

### E2E
- **Cypress** - E2E testing
- **Playwright** - E2E testing
- **Puppeteer** - Headless browser

## Prinsip Testing

### FIRST
- **F**ast - Cepat
- **I**ndependent - Independen
- **R**epeatable - Bisa diulang
- **S**elf-validating - Otomatis
- **T**imely - Tepat waktu

### AAA Pattern
\`\`\`
Arrange → Act → Assert
\`\`\`

## Contoh Sederhana

\`\`\`javascript
// function.js
function add(a, b) {
    return a + b;
}

// function.test.js
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
\`\`\`

## Best Practices

1. Tulis test sebelum code (TDD)
2. Test satu hal per test
3. Gunakan deskriptif nama test
4. Jaga test tetap sederhana
5. Test edge cases
6. Mock dependencies
7. Gunakan coverage tools
8. Test di CI/CD pipeline
  `,
  quiz: [
    {
      question: "Jenis testing yang menguji komponen terkecil adalah?",
      options: ["Unit Test", "Integration Test", "E2E Test", "Performance Test"],
      correctAnswer: 0
    },
    {
      question: "Testing pyramid yang paling bawah adalah?",
      options: ["E2E", "Integration", "Unit", "Performance"],
      correctAnswer: 2
    },
    {
      question: "Prinsip FIRST dalam testing adalah?",
      options: ["Fast, Independent, Repeatable, Self-validating, Timely", "Fast, Integrated, Reliable, Simple, Testable", "Flexible, Independent, Reliable, Simple, Timely", "Fast, Isolated, Reusable, Secure, Traceable"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Testing Setup",
      code: `// ============================================
// package.json
// ============================================
{
    "scripts": {
        "test": "jest",
        "test:watch": "jest --watch",
        "test:coverage": "jest --coverage",
        "test:ci": "jest --ci --coverage"
    },
    "devDependencies": {
        "jest": "^29.0.0",
        "@testing-library/react": "^14.0.0",
        "@testing-library/jest-dom": "^6.0.0"
    }
}

// ============================================
// jest.config.js
// ============================================
module.exports = {
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/**/*.js',
        '!src/**/*.test.js',
        '!src/index.js'
    ],
    testMatch: [
        '**/__tests__/**/*.js',
        '**/?(*.)+(spec|test).js'
    ],
    verbose: true
};

// ============================================
// Example: Calculator
// ============================================
// calculator.js
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
    multiply(a, b) { return a * b; }
    divide(a, b) {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
    }
}

// calculator.test.js
describe('Calculator', () => {
    let calc;
    
    beforeEach(() => {
        calc = new Calculator();
    });
    
    test('adds numbers correctly', () => {
        expect(calc.add(2, 3)).toBe(5);
        expect(calc.add(-1, 1)).toBe(0);
    });
    
    test('subtracts numbers correctly', () => {
        expect(calc.subtract(5, 3)).toBe(2);
        expect(calc.subtract(0, 5)).toBe(-5);
    });
    
    test('multiplies numbers correctly', () => {
        expect(calc.multiply(2, 3)).toBe(6);
        expect(calc.multiply(-2, 3)).toBe(-6);
    });
    
    test('divides numbers correctly', () => {
        expect(calc.divide(10, 2)).toBe(5);
        expect(calc.divide(10, 4)).toBe(2.5);
    });
    
    test('throws error when dividing by zero', () => {
        expect(() => calc.divide(10, 0)).toThrow('Division by zero');
    });
});`,
      language: "javascript"
    }
  ]
};