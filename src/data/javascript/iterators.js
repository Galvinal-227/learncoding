export const chapter = {
  slug: "javascript-iterators",
  title: "Iterator & Iterable",
  description: "Pahami Iterator Protocol dan cara membuat object yang bisa di-loop dengan for...of.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-generators"],
  tags: ["javascript", "iterator", "iterable", "symbol"],
  order: 33,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Iterator Protocol

Iterator adalah object yang mengimplementasikan method \`next()\` yang mengembalikan \`{ value, done }\`.

## Iterable Protocol

Object disebut **iterable** jika memiliki method \`[Symbol.iterator]()\` yang mengembalikan iterator. String, Array, Map, Set adalah iterable bawaan.

\`\`\`javascript
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
\`\`\`

## for...of

\`for...of\` otomatis menggunakan \`[Symbol.iterator]()\`:

\`\`\`javascript
for (const item of arr) {
    console.log(item); // 1, 2, 3
}

// String juga iterable
for (const char of "Halo") {
    console.log(char); // H, a, l, o
}
\`\`\`

## Membuat Custom Iterable

\`\`\`javascript
const range = {
    from: 1,
    to: 5,
    
    [Symbol.iterator]() {
        let current = this.from;
        const last = this.to;
        
        return {
            next() {
                if (current <= last) {
                    return { value: current++, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

for (const num of range) {
    console.log(num); // 1, 2, 3, 4, 5
}

// Bisa juga pakai spread
console.log([...range]); // [1, 2, 3, 4, 5]
\`\`\`

## Custom Iterable dengan Generator

Lebih singkat pakai generator:

\`\`\`javascript
const range = {
    from: 1,
    to: 5,
    
    *[Symbol.iterator]() {
        for (let i = this.from; i <= this.to; i++) {
            yield i;
        }
    }
};
\`\`\`

## Use Case: Linked List Iterable

\`\`\`javascript
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    add(value) {
        this.head = new Node(value, this.head);
    }
    
    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.add(3);
list.add(2);
list.add(1);

for (const val of list) {
    console.log(val); // 1, 2, 3
}
\`\`\`

## Async Iterator

\`\`\`javascript
const asyncIterable = {
    async *[Symbol.asyncIterator]() {
        for (let i = 0; i < 3; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            yield i;
        }
    }
};

for await (const val of asyncIterable) {
    console.log(val); // 0, 1, 2 (setiap 1 detik)
}
\`\`\`

## Built-in Iterables

\`\`\`javascript
// String
[..."Halo"]; // ['H', 'a', 'l', 'o']

// Array
[...[1, 2, 3]];

// Map
[...new Map([['a', 1], ['b', 2]])];

// Set
[...new Set([1, 2, 3])];

// arguments (function lama)
// NodeList (DOM)
\`\`\`
  `,

  quiz: [
    {
      question: "Method apa yang membuat object menjadi iterable?",
      options: [
        ".forEach()",
        "[Symbol.iterator]()",
        ".next()",
        ".iterate()"
      ],
      correctAnswer: 1,
      explanation: "Object harus mengimplementasikan method [Symbol.iterator]() yang mengembalikan iterator agar bisa digunakan dengan for...of."
    },
    {
      question: "Apa return value dari iterator.next()?",
      options: [
        "Nilai langsung",
        "{ value, done }",
        "[value, done]",
        "Promise"
      ],
      correctAnswer: 1,
      explanation: "Iterator.next() mengembalikan object dengan properti value (nilai saat ini) dan done (boolean, true jika iterasi selesai)."
    },
    {
      question: "Mana yang BUKAN iterable bawaan JavaScript?",
      options: [
        "Array",
        "String",
        "Object literal {}",
        "Map"
      ],
      correctAnswer: 2,
      explanation: "Object literal {} tidak iterable secara default. Gunakan Object.keys(), Object.values(), atau Object.entries() untuk iterasi object."
    }
  ],

  codeExamples: [
    {
      title: "Demo Custom Iterable",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Iterator Demo</title></head>
<body>
    <h1>Demo Iterator & Iterable</h1>
    <p>Buka Console (F12)</p>
    
    <script>
        // Custom Iterable: Fibonacci
        const fibonacci = {
            max: 100,
            *[Symbol.iterator]() {
                let a = 0, b = 1;
                while (a <= this.max) {
                    yield a;
                    [a, b] = [b, a + b];
                }
            }
        };
        
        console.log('Fibonacci sampai 100:');
        console.log([...fibonacci]);
        
        // Custom Iterable: Tanggal dalam range
        const dateRange = {
            start: new Date('2026-01-01'),
            end: new Date('2026-01-05'),
            
            *[Symbol.iterator]() {
                let current = new Date(this.start);
                while (current <= this.end) {
                    yield current.toLocaleDateString('id-ID');
                    current.setDate(current.getDate() + 1);
                }
            }
        };
        
        console.log('\\nRange Tanggal:');
        for (const date of dateRange) {
            console.log(date);
        }
        
        // Object entries dengan iterator
        const user = { nama: 'Budi', umur: 25, kota: 'Jakarta' };
        console.log('\\nObject entries:');
        for (const [key, value] of Object.entries(user)) {
            console.log(key, ':', value);
        }
    </script>
</body>
</html>`
    }
  ]
};