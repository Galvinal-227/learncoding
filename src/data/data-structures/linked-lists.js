export const chapter = {
  slug: "data-structures-linked-lists",
  title: "Linked Lists",
  description: "Implementasi dan operasi Linked List: singly, doubly, dan circular.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["data-structures-arrays"],
  tags: ["data-structures", "linked-list", "node", "pointer"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Linked List

Linked list adalah kumpulan **node** di mana setiap node punya **data** dan **pointer ke node berikutnya**.

## Array vs Linked List

| | Array | Linked List |
|---|-------|-------------|
| Memori | Contiguous | Tersebar (node + pointer) |
| Access by index | O(1) | O(n) |
| Insert/delete awal | O(n) | O(1) |
| Insert/delete akhir | O(1) | O(1)* |
| Cache friendly | ✅ | ❌ |

## Singly Linked List

\`\`\`javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    // Tambah di akhir - O(1)
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    
    // Tambah di awal - O(1)
    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        if (!this.tail) this.tail = node;
        this.length++;
    }
    
    // Hapus node - O(n)
    delete(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                if (!current.next) this.tail = current;
                this.length--;
                return;
            }
            current = current.next;
        }
    }
    
    // Search - O(n)
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }
    
    // Reverse - O(n)
    reverse() {
        let prev = null;
        let current = this.head;
        this.tail = this.head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}
\`\`\`

## Doubly Linked List

\`\`\`javascript
class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;  // Extra pointer!
    }
}
// Insert/delete lebih fleksibel, tapi lebih boros memori
\`\`\`

## Common Interview Questions

1. **Reverse a Linked List**
2. **Detect Cycle** (Floyd's Tortoise & Hare)
3. **Find Middle Element**
4. **Merge Two Sorted Lists**
5. **Remove Nth from End**
  `,

  quiz: [
    { question: "Linked List insert di awal: Big O?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0 },
    { question: "Array vs Linked List: access by index?", options: ["Sama O(1)", "Array O(1); LL O(n)", "LL O(1); Array O(n)", "Sama O(n)"], correctAnswer: 1 },
    { question: "Floyd's algorithm untuk?", options: ["Sorting", "Detect cycle di linked list", "Reverse", "Merge"], correctAnswer: 1 }
  ],

  codeExamples: []
};