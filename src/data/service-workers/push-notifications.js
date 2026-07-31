export const chapter = {
  slug: "service-workers-push-notifications",
  title: "Push Notifications",
  description: "Kirim push notifications dengan Service Worker Push API.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["service-workers-lifecycle"],
  tags: ["service-worker", "push", "notification", "engagement"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Subscribe to Push

\`\`\`javascript
async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    
    const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: vapidPublicKey
    });
    
    // Send subscription to server
    await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscription)
    });
}
\`\`\`

## Handle Push Event

\`\`\`javascript
// sw.js
self.addEventListener('push', (event) => {
    const data = event.data?.json() || {};
    
    const options = {
        body: data.body,
        icon: '/icon-192.png',
        badge: '/badge-72.png',
        vibrate: [200, 100, 200],
        data: { url: data.url || '/' },
        actions: [
            { action: 'open', title: 'Open' },
            { action: 'close', title: 'Close' }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    if (event.action === 'open') {
        clients.openWindow(event.notification.data.url);
    }
});
\`\`\`

## VAPID Keys

\`\`\`bash
npm install web-push -g
web-push generate-vapid-keys
\`\`\`
  `,

  quiz: [
    { question: "Push API?", options: ["Pull data", "Server push to browser", "Client push", "Database push"], correctAnswer: 1 },
    { question: "VAPID?", options: ["Encryption", "Voluntary Application Server Identification", "Protocol", "Cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};