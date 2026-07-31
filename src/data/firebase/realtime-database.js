export const chapter = {
  slug: "firebase-realtime-database",
  title: "Realtime Database",
  description: "Gunakan Firebase Realtime Database untuk chat dan live data sync.",
  icon: "SiFirebase",
  color: "#DD2C00",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["firebase-introduction"],
  tags: ["firebase", "realtime", "database", "chat"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Firestore vs Realtime DB

| | Firestore | Realtime DB |
|---|----------|-------------|
| Data model | Collections + Docs | JSON tree |
| Queries | Complex (compound) | Limited |
| Realtime | Via snapshot | Native |
| Scale | Very large | Large |
| Price | Per operation | Per bandwidth |
| Cocok | App data | Chat, live cursors |

## Setup

\`\`\`javascript
import { getDatabase, ref, set, push, onValue, update, remove } from 'firebase/database';

const db = getDatabase();
\`\`\`

## Write Data

\`\`\`javascript
// Set (overwrite)
await set(ref(db, 'users/' + userId), {
    name: 'Budi',
    email: 'budi@email.com'
});

// Push (auto-generated key)
const newRef = push(ref(db, 'posts'));
await set(newRef, { title: 'Hello', content: 'World' });
\`\`\`

## Realtime Listener

\`\`\`javascript
const usersRef = ref(db, 'users');
onValue(usersRef, (snapshot) => {
    const data = snapshot.val();
    console.log('Users updated:', data);
});
\`\`\`
  `,

  quiz: [
    { question: "Realtime DB vs Firestore?", options: ["Sama", "Realtime: JSON tree, chat; Firestore: queries, app data", "Firestore lebih lambat", "Realtime deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};