export const chapter = {
  slug: "firebase-firestore",
  title: "Cloud Firestore",
  description: "CRUD operations, queries, realtime listeners, dan security rules di Firestore.",
  icon: "SiFirebase",
  color: "#DD2C00",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["firebase-introduction"],
  tags: ["firebase", "firestore", "database", "nosql"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Struktur Firestore

\`\`\`
Collection (users)
  └── Document (userId)
       ├── name: "Budi"
       ├── email: "budi@email.com"
       └── Subcollection (posts)
            └── Document (postId)
                 ├── title: "Hello"
                 └── content: "World"
\`\`\`

## Setup

\`\`\`javascript
import { getFirestore, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc, query, where, orderBy, limit, onSnapshot } from 'firebase/firestore';

const db = getFirestore();
\`\`\`

## Create (Add)

\`\`\`javascript
const userRef = await addDoc(collection(db, 'users'), {
    name: 'Budi',
    email: 'budi@email.com',
    createdAt: new Date()
});
console.log('Created:', userRef.id);
\`\`\`

## Read

\`\`\`javascript
// Get all documents
const snapshot = await getDocs(collection(db, 'users'));
snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
});

// Get single document
const docSnap = await getDoc(doc(db, 'users', 'userId123'));
if (docSnap.exists()) {
    console.log(docSnap.data());
}
\`\`\`

## Update

\`\`\`javascript
await updateDoc(doc(db, 'users', 'userId123'), {
    name: 'Budi Updated',
    updatedAt: new Date()
});
\`\`\`

## Delete

\`\`\`javascript
await deleteDoc(doc(db, 'users', 'userId123'));
\`\`\`

## Queries

\`\`\`javascript
// Filter
const q = query(collection(db, 'users'), where('age', '>=', 18));

// Sort
const q = query(collection(db, 'users'), orderBy('name', 'asc'));

// Limit
const q = query(collection(db, 'users'), limit(10));

// Combine
const q = query(
    collection(db, 'users'),
    where('active', '==', true),
    orderBy('createdAt', 'desc'),
    limit(20)
);
\`\`\`

## Realtime Listener

\`\`\`javascript
const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') console.log('New:', change.doc.data());
        if (change.type === 'modified') console.log('Updated:', change.doc.data());
        if (change.type === 'removed') console.log('Deleted:', change.doc.data());
    });
});

// Stop listening
unsubscribe();
\`\`\`
  `,

  quiz: [
    { question: "Firestore: collection atau document?", options: ["Table", "Collection > Document > fields", "Row", "Column"], correctAnswer: 1 },
    { question: "onSnapshot untuk?", options: ["One-time read", "Realtime listener (auto-update)", "Write data", "Delete data"], correctAnswer: 1 }
  ],

  codeExamples: []
};