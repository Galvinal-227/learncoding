export const chapter = {
  slug: "web-storage-introduction",
  title: "Pengenalan Web Storage",
  description: "Pahami berbagai opsi penyimpanan data di browser dan kapan menggunakannya.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction"],
  tags: ["web-storage", "localStorage", "cookies", "indexedDB"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Storage Options di Browser

| API | Kapasitas | Persistensi | Scope | Async |
|-----|-----------|------------|-------|-------|
| **localStorage** | 5-10 MB | Permanent | Per origin | ❌ Sync |
| **sessionStorage** | 5-10 MB | Tab session | Per origin + tab | ❌ Sync |
| **Cookies** | 4 KB | Configurable | Per domain | ❌ Sync |
| **IndexedDB** | >50% disk | Permanent | Per origin | ✅ Async |
| **Cache API** | Bervariasi | Manual | Per origin | ✅ Async |

## Which to Use?

| Use Case | Best Storage |
|----------|-------------|
| User preferences (theme) | localStorage |
| Form data (temporary) | sessionStorage |
| Auth token (secure) | httpOnly Cookie |
| Large data (offline) | IndexedDB |
| Offline assets | Cache API |
  `,
  quiz: [
    { question: "localStorage: capacity?", options: ["4KB", "5-10MB", "Unlimited", "1GB"], correctAnswer: 1 },
    { question: "IndexedDB vs localStorage?", options: ["Same", "IndexedDB: large, async; localStorage: small, sync", "localStorage larger", "IndexedDB deprecated"], correctAnswer: 1 }
  ],
  codeExamples: []
};