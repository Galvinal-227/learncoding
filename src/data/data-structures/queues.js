export const chapter = {
  slug: "data-structures-queues",
  title: "Queues",
  description: "Queue - struktur data FIFO untuk antrian, BFS, task scheduler, dan buffer.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["data-structures-stacks"],
  tags: ["data-structures", "queue", "fifo", "bfs"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Queue

Queue adalah struktur data **FIFO (First In, First Out)**. Seperti antrian: yang pertama datang, yang pertama dilayani.

## Operasi

| Operasi | Big O | Keterangan |
|---------|-------|------------|
| enqueue() | O(1) | Tambah ke belakang |
| dequeue() | O(1) | Ambil dari depan |
| front() | O(1) | Lihat depan tanpa hapus |
| isEmpty() | O(1) | Cek kosong |

## Implementasi

\`\`\`javascript
class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    
    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    
    front() { return this.items[this.front]; }
    isEmpty() { return this.rear - this.front === 0; }
    size() { return this.rear - this.front; }
}
\`\`\`

## Variasi

### Circular Queue
Queue yang "memutar": rear balik ke 0 setelah mencapai akhir array.

### Deque (Double-Ended Queue)
Bisa insert/delete dari depan DAN belakang.

### Priority Queue
Setiap elemen punya prioritas. Elemen prioritas tinggi keluar duluan.

## Use Cases

- 📊 **BFS (Breadth-First Search)** pada tree/graph
- 🖨️ **Printer queue**
- 🎮 **Game matchmaking**
- 📱 **Message queue / Event loop**
- 🔄 **Task scheduler**
  `,

  quiz: [
    { question: "FIFO kepanjangan?", options: ["First In First Out", "Fast In Fast Out", "First In Final Out", "Fixed In First Out"], correctAnswer: 0 },
    { question: "Queue dequeue(): Big O?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0 },
    { question: "BFS pakai struktur data?", options: ["Stack", "Queue", "Array", "Tree"], correctAnswer: 1 }
  ],

  codeExamples: []
};