export const chapter = {
  slug: "unit-testing",
  title: "Unit Testing",
  description: "Menulis unit test untuk menguji komponen terkecil dari aplikasi.",
  icon: "SiTestinglibrary",
  color: "#E33332",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["testing-introduction"],
  tags: ["testing", "unit-test", "jest", "mocha"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Unit Test?

Unit test menguji unit terkecil dari kode (fungsi, method, class) secara terisolasi.

## Karakteristik Unit Test

1. **Isolated** - Tidak bergantung pada external
2. **Fast** - Cepat dijalankan
3. **Deterministic** - Hasil selalu sama
4. **Small** - Menguji satu hal

## Struktur Unit Test

### Arrange
\`\`\`
Siapkan data dan dependencies
\`\`\`

### Act
\`\`\`
Jalankan fungsi yang di-test
\`\`\`

### Assert
\`\`\`
Verifikasi hasil
\`\`\`

## Contoh Unit Test

### Pure Function
\`\`\`javascript
// utils.js
function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// utils.test.js
describe('capitalize', () => {
    test('capitalizes first letter', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('WORLD')).toBe('World');
    });
    
    test('returns empty string for empty input', () => {
        expect(capitalize('')).toBe('');
        expect(capitalize(null)).toBe('');
        expect(capitalize(undefined)).toBe('');
    });
});
\`\`\`

### Class
\`\`\`javascript
// user.js
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }
    
    getFullName() {
        return this.name;
    }
    
    isValidEmail() {
        return this.email.includes('@');
    }
}

// user.test.js
describe('User', () => {
    let user;
    
    beforeEach(() => {
        user = new User('John Doe', 'john@example.com');
    });
    
    test('creates user with name and email', () => {
        expect(user.name).toBe('John Doe');
        expect(user.email).toBe('john@example.com');
        expect(user.createdAt).toBeInstanceOf(Date);
    });
    
    test('returns full name', () => {
        expect(user.getFullName()).toBe('John Doe');
    });
    
    test('validates email', () => {
        expect(user.isValidEmail()).toBe(true);
        
        const invalidUser = new User('Jane', 'invalid');
        expect(invalidUser.isValidEmail()).toBe(false);
    });
});
\`\`\`

### Async Function
\`\`\`javascript
// api.js
async function fetchUser(id) {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) throw new Error('User not found');
    return response.json();
}

// api.test.js
describe('fetchUser', () => {
    test('fetches user successfully', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ id: 1, name: 'John' })
        });
        
        const user = await fetchUser(1);
        expect(user).toEqual({ id: 1, name: 'John' });
    });
    
    test('throws error when user not found', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false
        });
        
        await expect(fetchUser(999)).rejects.toThrow('User not found');
    });
});
\`\`\`

## Best Practices

1. **Test one thing per test**
2. **Use descriptive names**
3. **Keep tests simple**
4. **Test edge cases**
5. **Mock external dependencies**
6. **Use beforeEach/afterEach**
7. **Don't test implementation details**
8. **Keep tests independent**
  `,
  quiz: [
    {
      question: "Struktur unit test yang benar adalah?",
      options: ["Act → Arrange → Assert", "Arrange → Act → Assert", "Assert → Act → Arrange", "Arrange → Assert → Act"],
      correctAnswer: 1
    },
    {
      question: "Unit test harus bersifat?",
      options: ["Dependent", "Isolated", "Slow", "Complex"],
      correctAnswer: 1
    },
    {
      question: "Hook yang dijalankan sebelum setiap test adalah?",
      options: ["afterEach", "beforeEach", "beforeAll", "afterAll"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Unit Test Examples",
      code: `// ============================================
// 1. String Utils
// ============================================
// string-utils.js
function reverse(str) { return str.split('').reverse().join(''); }
function isPalindrome(str) { return str === reverse(str); }
function countVowels(str) { return (str.match(/[aeiou]/gi) || []).length; }
function truncate(str, max) { return str.length > max ? str.slice(0, max) + '...' : str; }

// string-utils.test.js
describe('String Utils', () => {
    test('reverses string', () => {
        expect(reverse('hello')).toBe('olleh');
        expect(reverse('')).toBe('');
    });
    
    test('checks palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
        expect(isPalindrome('hello')).toBe(false);
    });
    
    test('counts vowels', () => {
        expect(countVowels('hello')).toBe(2);
        expect(countVowels('why')).toBe(0);
        expect(countVowels('AEIOU')).toBe(5);
    });
    
    test('truncates string', () => {
        expect(truncate('hello world', 5)).toBe('hello...');
        expect(truncate('hello', 10)).toBe('hello');
    });
});

// ============================================
// 2. Array Utils
// ============================================
// array-utils.js
function sum(arr) { return arr.reduce((a, b) => a + b, 0); }
function average(arr) { return sum(arr) / arr.length; }
function unique(arr) { return [...new Set(arr)]; }
function groupBy(arr, key) { return arr.reduce((acc, item) => {
    const val = item[key]; acc[val] = [...(acc[val] || []), item]; return acc;
}, {}); }

// array-utils.test.js
describe('Array Utils', () => {
    test('calculates sum', () => {
        expect(sum([1, 2, 3])).toBe(6);
        expect(sum([])).toBe(0);
    });
    
    test('calculates average', () => {
        expect(average([1, 2, 3])).toBe(2);
        expect(average([10, 20])).toBe(15);
    });
    
    test('removes duplicates', () => {
        expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
        expect(unique([])).toEqual([]);
    });
    
    test('groups by key', () => {
        const items = [{ type: 'a', val: 1 }, { type: 'b', val: 2 }, { type: 'a', val: 3 }];
        const result = groupBy(items, 'type');
        expect(result.a).toHaveLength(2);
        expect(result.b).toHaveLength(1);
    });
});

// ============================================
// 3. Async Functions
// ============================================
// async-utils.js
async function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
async function retry(fn, attempts = 3) {
    let lastError;
    for (let i = 0; i < attempts; i++) {
        try { return await fn(); }
        catch (error) { lastError = error; }
    }
    throw lastError;
}

// async-utils.test.js
describe('Async Utils', () => {
    test('delays execution', async () => {
        const start = Date.now();
        await delay(100);
        const end = Date.now();
        expect(end - start).toBeGreaterThanOrEqual(100);
    });
    
    test('retries on failure', async () => {
        let attempts = 0;
        const fn = jest.fn().mockImplementation(() => {
            attempts++;
            if (attempts < 3) throw new Error('Failed');
            return 'success';
        });
        
        const result = await retry(fn, 3);
        expect(result).toBe('success');
        expect(fn).toHaveBeenCalledTimes(3);
    });
    
    test('throws after max attempts', async () => {
        const fn = jest.fn().mockRejectedValue(new Error('Always fails'));
        await expect(retry(fn, 2)).rejects.toThrow('Always fails');
        expect(fn).toHaveBeenCalledTimes(2);
    });
});`,
      language: "javascript"
    }
  ]
};