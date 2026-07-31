export const chapter = {
  slug: "web-storage-indexed-db",
  title: "IndexedDB",
  description: "Gunakan IndexedDB untuk menyimpan data besar dan kompleks di browser.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["web-storage-local-storage"],
  tags: ["web-storage", "indexedDB", "database", "offline"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Basic Setup

\`\`\`javascript
const request = indexedDB.open('MyDB', 1);

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const store = db.createObjectStore('users', { keyPath: 'id' });
    store.createIndex('email', 'email', { unique: true });
};

request.onsuccess = (event) => {
    const db = event.target.result;
    // Use database...
};
\`\`\`

## CRUD Operations

\`\`\`javascript
const tx = db.transaction('users', 'readwrite');
const store = tx.objectStore('users');

// Add
store.add({ id: 1, name: 'Budi', email: 'budi@email.com' });

// Get
const request = store.get(1);
request.onsuccess = () => console.log(request.result);

// Update
store.put({ id: 1, name: 'Budi Updated', email: 'budi@email.com' });

// Delete
store.delete(1);
\`\`\`

## Dexie.js (Simpler API)

\`\`\`bash
npm install dexie
\`\`\`

\`\`\`javascript
import Dexie from 'dexie';

const db = new Dexie('MyDB');
db.version(1).stores({ users: '++id, email' });

// Add
await db.users.add({ name: 'Budi', email: 'budi@email.com' });

// Query
const users = await db.users.where('email').equals('budi@email.com').toArray();
\`\`\`
  `,
  quiz: [
    { question: "IndexedDB: capacity?", options: ["5MB", ">50% of disk", "4KB", "Unlimited"], correctAnswer: 1 },
    { question: "Dexie.js?", options: ["Native API", "Simpler IndexedDB wrapper", "SQL database", "Cache"], correctAnswer: 1 }
  ],
  codeExamples: []
};