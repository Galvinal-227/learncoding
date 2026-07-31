export const chapter = {
  slug: "pwa-offline-support",
  title: "Offline Support",
  description: "Bangun aplikasi yang tetap berfungsi tanpa koneksi internet.",
  icon: "SiPwa",
  color: "#5A0FC8",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["pwa-caching-strategies"],
  tags: ["pwa", "offline", "cache", "sync"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Offline Strategies

### 1. App Shell (Cache First)
\`\`\`javascript
// Pre-cache app shell saat install
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('app-shell').then(cache => {
            return cache.addAll([
                '/',
                '/static/css/main.css',
                '/static/js/main.js',
                '/offline.html'
            ]);
        })
    );
});
\`\`\`

### 2. Offline Page
\`\`\`javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            // Jika navigation request, tampilkan halaman offline
            if (event.request.mode === 'navigate') {
                return caches.match('/offline.html');
            }
            // Untuk assets, return cached atau error
            return caches.match(event.request);
        })
    );
});
\`\`\`

### 3. Offline Form Submission
\`\`\`javascript
// Simpan form data saat offline, kirim saat online
async function submitForm(data) {
    if (navigator.onLine) {
        return fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    } else {
        // Simpan ke IndexedDB
        const db = await openDB('offline-forms', 1, {
            upgrade(db) {
                db.createObjectStore('pending');
            }
        });
        await db.add('pending', { data, timestamp: Date.now() });
        showToast('Form saved. Will be submitted when online.');
    }
}

// Sync saat online
window.addEventListener('online', async () => {
    const db = await openDB('offline-forms', 1);
    const pending = await db.getAll('pending');
    
    for (const item of pending) {
        await fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify(item.data)
        });
        await db.delete('pending', item.timestamp);
    }
    
    showToast('All pending forms submitted!');
});
\`\`\`

## Background Sync

\`\`\`javascript
// Register sync
async function registerSync() {
    const registration = await navigator.serviceWorker.ready;
    
    try {
        await registration.sync.register('sync-forms');
        console.log('Sync registered');
    } catch {
        console.log('Sync not supported');
    }
}

// sw.js - Handle sync
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-forms') {
        event.waitUntil(syncPendingForms());
    }
});

async function syncPendingForms() {
    const db = await openDB('offline-forms', 1);
    const pending = await db.getAll('pending');
    
    for (const item of pending) {
        try {
            await fetch('/api/submit', {
                method: 'POST',
                body: JSON.stringify(item.data)
            });
            await db.delete('pending', item.timestamp);
        } catch (error) {
            console.error('Sync failed, will retry:', error);
        }
    }
}
\`\`\`

## Periodic Background Sync

\`\`\`javascript
// Register periodic sync
async function registerPeriodicSync() {
    const registration = await navigator.serviceWorker.ready;
    
    if ('periodicSync' in registration) {
        try {
            await registration.periodicSync.register('update-content', {
                minInterval: 24 * 60 * 60 * 1000  // 1 day
            });
        } catch (error) {
            console.log('Periodic sync not available');
        }
    }
}

// sw.js
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'update-content') {
        event.waitUntil(updateCachedContent());
    }
});
\`\`\`

## Detect Online/Offline Status

\`\`\`javascript
// UI indicator
window.addEventListener('online', () => {
    document.body.classList.remove('offline');
    showToast('Back online!');
});

window.addEventListener('offline', () => {
    document.body.classList.add('offline');
    showToast('You are offline. Changes will be saved.');
});

// Check status
console.log(navigator.onLine); // true/false
\`\`\`

## Offline UX Best Practices

\`\`\`
✅ Tampilkan indikator offline (banner/icon)
✅ Simpan data form secara lokal
✅ Sinkronisasi otomatis saat online
✅ Tampilkan konten yang tersedia (cached)
✅ Beri pesan jelas jika fitur tidak tersedia offline
✅ Background sync untuk data penting
✅ Periodic sync untuk update konten
\`\`\`
  `,

  quiz: [
    { question: "Background Sync?", options: ["Real-time", "Sync data when back online", "Cache only", "No sync"], correctAnswer: 1 },
    { question: "navigator.onLine?", options: ["Speed", "Check if browser is online/offline", "Storage", "Cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};