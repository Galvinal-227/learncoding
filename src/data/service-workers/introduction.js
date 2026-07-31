export const chapter = {
  slug: "service-workers-introduction",
  title: "Pengenalan Service Workers",
  description: "Pahami apa itu Service Worker, kenapa penting, dan arsitekturnya.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction"],
  tags: ["service-worker", "pwa", "cache", "offline"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu Service Worker?

Service Worker adalah **JavaScript yang berjalan di background**, terpisah dari halaman web. Seperti **proxy server** di browser untuk handle network requests, caching, dan push notifications.

## Kenapa Service Workers?

- 📡 **Offline Support** - Website bisa diakses tanpa internet
- ⚡ **Caching** - Asset disimpan lokal, load super cepat
- 🔔 **Push Notifications** - Kirim notifikasi native
- 🔄 **Background Sync** - Sinkronisasi data saat online
- 🌐 **Proxy Network** - Intercept semua request

## Service Worker Features

| Feature | Deskripsi |
|---------|-----------|
| **Cache API** | Simpan asset/responses |
| **Fetch Event** | Intercept network requests |
| **Push API** | Terima push notifications |
| **Sync API** | Background data sync |
| **Notifications API** | Tampilkan system notification |

## Browser Support

\`\`\`
✅ Chrome 40+
✅ Firefox 44+
✅ Safari 11.1+
✅ Edge 17+
✅ 97% global support
\`\`\`

## First Registration

\`\`\`javascript
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered!', reg.scope))
        .catch(err => console.error('SW failed:', err));
}
\`\`\`
  `,
  quiz: [
    { question: "Service Worker?", options: ["Main thread JS", "Background script (proxy, cache, offline)", "Database", "CSS"], correctAnswer: 1 },
    { question: "SW: HTTPS?", options: ["Optional", "Required (except localhost)", "Not needed", "HTTP only"], correctAnswer: 1 }
  ],
  codeExamples: []
};