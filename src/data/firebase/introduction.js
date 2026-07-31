export const chapter = {
  slug: "firebase-introduction",
  title: "Pengenalan Firebase",
  description: "Pahami apa itu Firebase dan layanan-layanan yang disediakan.",
  icon: "SiFirebase",
  color: "#DD2C00",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["firebase", "baas", "google", "backend"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Firebase?

Firebase adalah **Backend-as-a-Service (BaaS)** dari Google. Menyediakan berbagai layanan backend siap pakai tanpa perlu setup server sendiri.

## Kenapa Firebase?

- ⚡ **Cepat development** - Tidak perlu bangun backend dari nol
- 🆓 **Free tier generous** - Cocok untuk MVP & prototyping
- 🔄 **Realtime** - Database realtime built-in
- 🔐 **Auth siap pakai** - Google, Facebook, Email/Password
- 📈 **Scalable** - Dari 0 ke jutaan user (bayar sesuai pakai)
- 🧩 **All-in-one** - Auth, Database, Storage, Hosting, Functions

## Layanan Firebase

| Layanan | Fungsi | Cocok Untuk |
|---------|--------|-------------|
| **Authentication** | Login/register siap pakai | Semua aplikasi |
| **Cloud Firestore** | Database NoSQL realtime | Data aplikasi |
| **Realtime Database** | Database realtime (old) | Chat, live updates |
| **Cloud Storage** | Upload file (gambar, video) | User uploads |
| **Cloud Functions** | Serverless functions | Backend logic |
| **Hosting** | Hosting static + SSR | Frontend deploy |
| **Analytics** | User behavior tracking | Semua aplikasi |
| **Cloud Messaging** | Push notifications | Mobile/web |
| **Remote Config** | Feature flags | A/B testing |

## Setup Project

\`\`\`bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Init project
firebase init

# Install SDK
npm install firebase
\`\`\`

\`\`\`javascript
// firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'myapp.firebaseapp.com',
    projectId: 'myapp-12345',
    storageBucket: 'myapp.appspot.com',
    messagingSenderId: '123456789',
    appId: '1:123456789:web:abc123'
};

export const app = initializeApp(firebaseConfig);
\`\`\`

## Firebase vs Supabase

| | Firebase | Supabase |
|---|----------|----------|
| Database | Firestore (NoSQL) | PostgreSQL (SQL) |
| Realtime | ✅ | ✅ |
| Auth | ✅ (banyak provider) | ✅ |
| Open source | ❌ | ✅ |
| Self-host | ❌ | ✅ |
| Pricing | Pay-per-use | Pay-per-use + free |
  `,

  quiz: [
    { question: "Firebase adalah?", options: ["Database only", "Backend-as-a-Service (BaaS)", "Frontend framework", "Testing tool"], correctAnswer: 1 },
    { question: "Firebase vs Supabase?", options: ["Sama", "Firebase: NoSQL; Supabase: PostgreSQL SQL", "Supabase lebih mahal", "Firebase open source"], correctAnswer: 1 },
    { question: "Firebase Authentication?", options: ["Manual login", "Auth siap pakai (Google, Email, dll)", "Hanya email", "Hanya Google"], correctAnswer: 1 }
  ],

  codeExamples: []
};