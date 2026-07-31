export const chapter = {
  slug: "mocha",
  title: "Mocha & Chai",
  description: "Testing framework Mocha dengan assertion library Chai.",
  icon: "SiTestinglibrary",
  color: "#E33332",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["testing-introduction", "testing-unit-testing"],
  tags: ["testing", "mocha", "chai", "assertion"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Mocha & Chai?

Mocha adalah testing framework, Chai adalah assertion library.

## Instalasi

\`\`\`bash
npm install --save-dev mocha chai
\`\`\`

## Basic Test

\`\`\`javascript
// test.js
const { expect } = require('chai');

describe('Array', () => {
    it('should return -1 when value is not present', () => {
        expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
});
\`\`\`

## Chai Assertions

### Assert
\`\`\`javascript
const assert = require('chai').assert;

assert.equal(2 + 2, 4);
assert.typeOf('hello', 'string');
assert.isArray([1, 2]);
\`\`\`

### Expect
\`\`\`javascript
const { expect } = require('chai');

expect(2 + 2).to.equal(4);
expect('hello').to.be.a('string');
expect([1, 2]).to.be.an('array').that.has.lengthOf(2);
\`\`\`

### Should
\`\`\`javascript
const should = require('chai').should();

(2 + 2).should.equal(4);
'hello'.should.be.a('string');
[1, 2].should.be.an('array').that.has.lengthOf(2);
\`\`\`

## Async Testing

### Promise
\`\`\`javascript
it('should resolve with data', async () => {
    const data = await fetchData();
    expect(data).to.equal('peanut butter');
});
\`\`\`

### Callback
\`\`\`javascript
it('should work with callback', (done) => {
    fetchData((err, data) => {
        expect(data).to.equal('peanut butter');
        done();
    });
});
\`\`\`

## Hooks

\`\`\`javascript
describe('User', () => {
    before(() => { console.log('before all'); });
    after(() => { console.log('after all'); });
    beforeEach(() => { console.log('before each'); });
    afterEach(() => { console.log('after each'); });
});
\`\`\`

## Running Tests

\`\`\`bash
# Run tests
npx mocha

# Run with watch
npx mocha --watch

# Run specific file
npx mocha test/specific.js

# Run with reporter
npx mocha --reporter spec
\`\`\`

## Config

### mocha.opts
\`\`\`
--reporter spec
--timeout 5000
--recursive
test/**/*.test.js
\`\`\`

## Best Practices

1. **Use describe for grouping**
2. **Use it for test cases**
3. **Write clear assertions**
4. **Test async properly**
5. **Use hooks for setup**
6. **Keep tests independent**
7. **Use meaningful names**
  `,
  quiz: [
    {
      question: "Assertion library untuk Mocha adalah?",
      options: ["Jest", "Chai", "Sinon", "Cypress"],
      correctAnswer: 1
    },
    {
      question: "Keyword untuk test case di Mocha adalah?",
      options: ["test", "it", "spec", "case"],
      correctAnswer: 1
    },
    {
      question: "Hook yang dijalankan setelah semua test adalah?",
      options: ["before", "after", "beforeEach", "afterEach"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Mocha Examples",
      code: `// ============================================
// 1. Basic Tests
// ============================================
// basic.test.js
const { expect } = require('chai');

describe('Basic Math', () => {
    it('should add numbers correctly', () => {
        expect(2 + 2).to.equal(4);
        expect(-1 + 1).to.equal(0);
    });
    
    it('should subtract numbers correctly', () => {
        expect(5 - 3).to.equal(2);
        expect(0 - 5).to.equal(-5);
    });
    
    it('should multiply numbers correctly', () => {
        expect(2 * 3).to.equal(6);
        expect(-2 * 3).to.equal(-6);
    });
});

// ============================================
// 2. Array Tests
// ============================================
// array.test.js
const { expect } = require('chai');

describe('Array Operations', () => {
    let arr;
    
    beforeEach(() => {
        arr = [1, 2, 3];
    });
    
    it('should add elements', () => {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
        expect(arr).to.include(4);
    });
    
    it('should remove elements', () => {
        arr.pop();
        expect(arr).to.have.lengthOf(2);
        expect(arr).to.not.include(3);
    });
    
    it('should filter elements', () => {
        const filtered = arr.filter(n => n > 1);
        expect(filtered).to.deep.equal([2, 3]);
    });
});

// ============================================
// 3. Async Tests
// ============================================
// async.test.js
const { expect } = require('chai');

describe('Async Operations', () => {
    it('should resolve with data', async () => {
        const data = await Promise.resolve('success');
        expect(data).to.equal('success');
    });
    
    it('should reject with error', async () => {
        try {
            await Promise.reject(new Error('failed'));
        } catch (error) {
            expect(error.message).to.equal('failed');
        }
    });
    
    it('should work with done callback', (done) => {
        setTimeout(() => {
            expect(true).to.be.true;
            done();
        }, 100);
    });
});

// ============================================
// 4. Object Tests
// ============================================
// object.test.js
const { expect } = require('chai');

describe('Object Operations', () => {
    it('should have properties', () => {
        const user = { name: 'John', age: 30 };
        expect(user).to.have.property('name');
        expect(user).to.have.property('age', 30);
    });
    
    it('should deep equal', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 2 } };
        expect(obj1).to.deep.equal(obj2);
    });
    
    it('should include keys', () => {
        const obj = { a: 1, b: 2, c: 3 };
        expect(obj).to.have.all.keys('a', 'b', 'c');
    });
});

// ============================================
// 5. Class Tests
// ============================================
// class.test.js
const { expect } = require('chai');

class Calculator {
    constructor() { this.value = 0; }
    add(n) { this.value += n; return this; }
    subtract(n) { this.value -= n; return this; }
    getResult() { return this.value; }
}

describe('Calculator Class', () => {
    let calc;
    
    beforeEach(() => {
        calc = new Calculator();
    });
    
    it('should start at 0', () => {
        expect(calc.getResult()).to.equal(0);
    });
    
    it('should add numbers', () => {
        calc.add(5);
        expect(calc.getResult()).to.equal(5);
        calc.add(3);
        expect(calc.getResult()).to.equal(8);
    });
    
    it('should subtract numbers', () => {
        calc.add(10);
        calc.subtract(3);
        expect(calc.getResult()).to.equal(7);
    });
    
    it('should chain operations', () => {
        calc.add(5).subtract(2).add(10);
        expect(calc.getResult()).to.equal(13);
    });
});

// ============================================
// 6. Error Tests
// ============================================
// error.test.js
const { expect } = require('chai');

describe('Error Handling', () => {
    function throwError() {
        throw new Error('Something went wrong');
    }
    
    it('should throw error', () => {
        expect(() => throwError()).to.throw('Something went wrong');
    });
    
    it('should throw TypeError', () => {
        expect(() => {
            throw new TypeError('Invalid type');
        }).to.throw(TypeError);
    });
});`,
      language: "javascript"
    }
  ]
};