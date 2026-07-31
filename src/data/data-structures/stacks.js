export const chapter = {
  slug: "data-structures-stacks",
  title: "Stacks",
  description: "Stack - struktur data LIFO untuk undo/redo, validasi parentheses, dan backtracking.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["data-structures-linked-lists"],
  tags: ["data-structures", "stack", "lifo", "interview"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Stack

Stack adalah struktur data **LIFO (Last In, First Out)**. Seperti tumpukan piring: yang terakhir ditumpuk, yang pertama diambil.

## Operasi

| Operasi | Big O | Keterangan |
|---------|-------|------------|
| push() | O(1) | Tambah ke atas |
| pop() | O(1) | Ambil dari atas |
| peek() | O(1) | Lihat atas tanpa hapus |
| isEmpty() | O(1) | Cek kosong |

## Implementasi

### Array-based
\`\`\`javascript
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) { this.items.push(element); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
    size() { return this.items.length; }
}
\`\`\`

### Linked List-based
\`\`\`javascript
class Node {
    constructor(value) { this.value = value; this.next = null; }
}

class Stack {
    constructor() { this.top = null; this.size = 0; }
    
    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }
    
    pop() {
        if (!this.top) return null;
        const value = this.top.value;
        this.top = this.top.next;
        this.size--;
        return value;
    }
    
    peek() { return this.top?.value; }
    isEmpty() { return this.size === 0; }
}
\`\`\`

## Use Cases

### 1. Valid Parentheses (LeetCode #20)
\`\`\`javascript
function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (const c of s) {
        if (!map[c]) stack.push(c);
        else if (stack.pop() !== map[c]) return false;
    }
    return stack.length === 0;
}
\`\`\`

### 2. Browser History (Back/Forward)
\`\`\`javascript
const backStack = [];
const forwardStack = [];

function visit(url) { backStack.push(url); forwardStack = []; }
function back() { forwardStack.push(backStack.pop()); return backStack[backStack.length-1]; }
function forward() { backStack.push(forwardStack.pop()); return backStack[backStack.length-1]; }
\`\`\`

### 3. Undo/Redo
### 4. Expression Evaluation
### 5. Function Call Stack
  `,

  quiz: [
    { question: "LIFO kepanjangan?", options: ["Last In First Out", "Long In First Out", "Last In Fast Out", "Linear In First Out"], correctAnswer: 0 },
    { question: "Stack pop(): Big O?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0 }
  ],

  codeExamples: []
};