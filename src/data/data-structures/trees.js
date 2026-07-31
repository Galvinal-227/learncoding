export const chapter = {
  slug: "data-structures-trees",
  title: "Trees",
  description: "Tree: BST, traversal (DFS/BFS), binary trees, dan operasi utama.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["data-structures-queues"],
  tags: ["data-structures", "tree", "bst", "traversal"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Tree

Tree adalah struktur data **hierarkis** yang terdiri dari **node** (simpul) dan **edge** (penghubung).

## Terminologi

\`\`\`
        [Root]          ← Node paling atas
        /    \\
    [Child] [Child]      ← Anak dari root
     /   \\
  [Leaf] [Leaf]          ← Node tanpa anak
\`\`\`

- **Root**: Node paling atas
- **Parent/Child**: Hubungan antar node
- **Leaf**: Node tanpa child
- **Depth**: Jarak dari root
- **Height**: Jarak dari leaf terjauh

## Binary Search Tree (BST)

BST: **left < parent < right**.

### Implementasi
\`\`\`javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() { this.root = null; }
    
    // Insert - O(log n) avg, O(n) worst
    insert(value) {
        const node = new TreeNode(value);
        if (!this.root) { this.root = node; return; }
        
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) { current.left = node; return; }
                current = current.left;
            } else {
                if (!current.right) { current.right = node; return; }
                current = current.right;
            }
        }
    }
    
    // Search - O(log n) avg
    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return current;
            current = value < current.value ? current.left : current.right;
        }
        return null;
    }
}
\`\`\`

## Tree Traversal

### DFS (Depth-First Search)
\`\`\`javascript
// Preorder: Root → Left → Right
function preorder(node) {
    if (!node) return;
    console.log(node.value);
    preorder(node.left);
    preorder(node.right);
}

// Inorder: Left → Root → Right (BST = sorted!)
function inorder(node) {
    if (!node) return;
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
}

// Postorder: Left → Right → Root
function postorder(node) {
    if (!node) return;
    postorder(node.left);
    postorder(node.right);
    console.log(node.value);
}
\`\`\`

### BFS (Breadth-First Search)
\`\`\`javascript
function bfs(root) {
    if (!root) return;
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        console.log(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}
\`\`\`
  `,

  quiz: [
    { question: "BST: left child vs right child?", options: ["Sama", "Left < parent < Right", "Left > parent", "Random"], correctAnswer: 1 },
    { question: "Inorder traversal BST hasil?", options: ["Unsorted", "Sorted (ascending)", "Reverse", "Random"], correctAnswer: 1 },
    { question: "BFS pakai struktur data?", options: ["Stack", "Queue", "Array", "Linked List"], correctAnswer: 1 }
  ],

  codeExamples: []
};