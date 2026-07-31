export const chapter = {
  slug: "service-workers-background-sync",
  title: "Background Sync",
  description: "Sinkronisasi data di background saat koneksi kembali.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["service-workers-offline-support"],
  tags: ["service-worker", "background-sync", "sync", "offline"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Register Sync

\`\`\`javascript
// Main thread
async function registerSync() {
    const registration = await navigator.serviceWorker.ready;
    
    try {
        await registration.sync.register('sync-forms');
        console.log('Sync registered');
    } catch {
        console.log('Sync not supported');
    }
}
\`\`\`

## Handle Sync

\`\`\`javascript
// sw.js
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-forms') {
        event.waitUntil(syncPendingForms());
    }
});

async function syncPendingForms() {
    const db = await openDB('offline-forms');
    const pending = await db.getAll('pending');
    
    for (const item of pending) {
        try {
            await fetch('/api/submit', {
                method: 'POST',
                body: JSON.stringify(item.data)
            });
            await db.delete('pending', item.id);
        } catch (error) {
            console.error('Sync failed:', error);
        }
    }
}
\`\`\`

## Periodic Background Sync

\`\`\`javascript
// Register periodic sync
await registration.periodicSync.register('update-content', {
    minInterval: 24 * 60 * 60 * 1000 // 1 day
});

// Handle in SW
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'update-content') {
        event.waitUntil(updateCachedContent());
    }
});
\`\`\`
  `,

  quiz: [
    { question: "Background Sync?", options: ["Real-time", "Sync data when back online", "Cache only", "Push notification"], correctAnswer: 1 },
    { question: "sync.register()?", options: ["Push API", "Register sync task", "Fetch API", "Cache API"], correctAnswer: 1 }
  ],

  codeExamples: []
};