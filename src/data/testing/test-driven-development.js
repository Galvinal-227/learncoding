export const chapter = {
  slug: "test-driven-development",
  title: "Test Driven Development",
  description: "Metodologi pengembangan software dengan menulis test terlebih dahulu.",
  icon: "SiTestinglibrary",
  color: "#E33332",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["testing-introduction", "testing-unit-testing"],
  tags: ["testing", "tdd", "red-green-refactor"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu TDD?

TDD (Test Driven Development) adalah metodologi di mana test ditulis sebelum code.

## Siklus TDD

### Red → Green → Refactor

\`\`\`
1. RED   - Tulis test yang gagal
2. GREEN - Tulis code minimal agar test lulus
3. REFACTOR - Refactor code
\`\`\`

## Contoh TDD

### Step 1: Red (Test Gagal)
\`\`\`javascript
// calculator.test.js
describe('Calculator', () => {
    test('adds two numbers', () => {
        const result = add(2, 3);
        expect(result).toBe(5);
    });
});
// ❌ Test fails because add doesn't exist
\`\`\`

### Step 2: Green (Code Minimal)
\`\`\`javascript
// calculator.js
function add(a, b) {
    return 5; // Hardcoded to pass test
}
// ✅ Test passes
\`\`\`

### Step 3: Refactor (Improve Code)
\`\`\`javascript
// calculator.js
function add(a, b) {
    return a + b;
}
// ✅ Test still passes, code is better
\`\`\`

## TDD Process

### 1. Write Test
\`\`\`javascript
test('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
});
\`\`\`

### 2. Run Test (Fails)
\`\`\`
❌ multiply is not defined
\`\`\`

### 3. Write Code
\`\`\`javascript
function multiply(a, b) {
    return a * b;
}
\`\`\`

### 4. Run Test (Passes)
\`\`\`
✅ All tests passed
\`\`\`

### 5. Refactor
\`\`\`javascript
// Add error handling
function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input');
    }
    return a * b;
}
\`\`\`

## TDD Example: FizzBuzz

### Test
\`\`\`javascript
// fizzbuzz.test.js
describe('fizzbuzz', () => {
    test('returns "Fizz" for multiples of 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
        expect(fizzbuzz(6)).toBe('Fizz');
    });
    
    test('returns "Buzz" for multiples of 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
        expect(fizzbuzz(10)).toBe('Buzz');
    });
    
    test('returns "FizzBuzz" for multiples of 15', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
        expect(fizzbuzz(30)).toBe('FizzBuzz');
    });
    
    test('returns number as string for others', () => {
        expect(fizzbuzz(1)).toBe('1');
        expect(fizzbuzz(2)).toBe('2');
        expect(fizzbuzz(4)).toBe('4');
    });
});
\`\`\`

### Code
\`\`\`javascript
// fizzbuzz.js
function fizzbuzz(n) {
    if (n % 15 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n.toString();
}
\`\`\`

## TDD Best Practices

1. **Write test first**
2. **Test one thing at a time**
3. **Keep tests simple**
4. **Write minimal code to pass**
5. **Refactor after passing**
6. **Commit after each cycle**
7. **Test edge cases**
8. **Keep tests fast**

## Benefits of TDD

1. **Better code quality**
2. **Fewer bugs**
3. **Confidence to refactor**
4. **Living documentation**
5. **Better design**
6. **Reduced debugging time**
7. **Faster development**

## TDD vs Traditional

| Traditional | TDD |
|-------------|-----|
| Code first | Test first |
| Test later | Test early |
| Hard to test | Easy to test |
| More bugs | Fewer bugs |
| Hard to refactor | Easy to refactor |
  `,
  quiz: [
    {
      question: "Siklus TDD adalah?",
      options: ["Green → Red → Refactor", "Red → Green → Refactor", "Refactor → Red → Green", "Green → Refactor → Red"],
      correctAnswer: 1
    },
    {
      question: "Tahap pertama di TDD adalah?",
      options: ["Write code", "Write test", "Refactor", "Deploy"],
      correctAnswer: 1
    },
    {
      question: "Tahap 'Green' di TDD berarti?",
      options: ["Test fails", "Test passes", "Code is perfect", "Deployment ready"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete TDD Example",
      code: `// ============================================
// TDD Example: Shopping Cart
// ============================================

// ============================================
// 1. Step 1: Write Test (RED)
// ============================================
// cart.test.js
describe('Shopping Cart', () => {
    let cart;
    
    beforeEach(() => {
        cart = new ShoppingCart();
    });
    
    test('adds items to cart', () => {
        cart.addItem('apple', 1, 1000);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0]).toEqual({ name: 'apple', quantity: 1, price: 1000 });
    });
    
    test('calculates total price', () => {
        cart.addItem('apple', 2, 1000);
        cart.addItem('banana', 3, 2000);
        expect(cart.getTotal()).toBe(8000);
    });
    
    test('removes items from cart', () => {
        cart.addItem('apple', 1, 1000);
        cart.removeItem('apple');
        expect(cart.items.length).toBe(0);
    });
    
    test('clears cart', () => {
        cart.addItem('apple', 1, 1000);
        cart.addItem('banana', 1, 2000);
        cart.clear();
        expect(cart.items.length).toBe(0);
    });
});

// ============================================
// 2. Step 2: Write Code (GREEN)
// ============================================
// cart.js
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(name, quantity, price) {
        this.items.push({ name, quantity, price });
    }
    
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.quantity * item.price);
        }, 0);
    }
    
    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    }
    
    clear() {
        this.items = [];
    }
}

// ============================================
// 3. Step 3: Refactor
// ============================================
// cart.js (refactored)
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(name, quantity, price) {
        if (!name || quantity <= 0 || price <= 0) {
            throw new Error('Invalid item data');
        }
        this.items.push({ name, quantity, price });
    }
    
    getTotal() {
        return this.items.reduce((total, { quantity, price }) => {
            return total + (quantity * price);
        }, 0);
    }
    
    removeItem(name) {
        const index = this.items.findIndex(item => item.name === name);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    
    clear() {
        this.items = [];
    }
}

// ============================================
// 4. Add More Features (TDD Cycle)
// ============================================
// cart.test.js (add tests)
test('updates item quantity', () => {
    cart.addItem('apple', 1, 1000);
    cart.updateQuantity('apple', 3);
    expect(cart.items[0].quantity).toBe(3);
});

test('throws error for invalid item', () => {
    expect(() => cart.addItem('', 1, 1000)).toThrow('Invalid item data');
    expect(() => cart.addItem('apple', -1, 1000)).toThrow('Invalid item data');
});

// cart.js (add implementation)
updateQuantity(name, quantity) {
    if (quantity <= 0) {
        throw new Error('Quantity must be positive');
    }
    const item = this.items.find(item => item.name === name);
    if (item) {
        item.quantity = quantity;
    }
}

// ============================================
// 5. Integration Test
// ============================================
// cart-integration.test.js
describe('Shopping Cart Integration', () => {
    let cart;
    
    beforeEach(() => {
        cart = new ShoppingCart();
    });
    
    test('complete shopping flow', () => {
        // Add items
        cart.addItem('apple', 2, 1000);
        cart.addItem('banana', 3, 2000);
        cart.addItem('orange', 1, 1500);
        
        // Update quantity
        cart.updateQuantity('banana', 5);
        
        // Calculate total
        expect(cart.getTotal()).toBe(13500);
        
        // Remove item
        cart.removeItem('orange');
        expect(cart.items.length).toBe(2);
        expect(cart.getTotal()).toBe(12000);
        
        // Clear cart
        cart.clear();
        expect(cart.items.length).toBe(0);
        expect(cart.getTotal()).toBe(0);
    });
});`,
      language: "javascript"
    }
  ]
};