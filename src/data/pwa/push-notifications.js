export const chapter = {
  slug: "pwa-push-notifications",
  title: "Push Notifications",
  description: "Implementasi push notifications dengan Web Push API dan Service Worker.",
  icon: "SiPwa",
  color: "#5A0FC8",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["pwa-service-workers"],
  tags: ["pwa", "push", "notifications", "engagement"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Web Push Flow

\`\`\`
1. Request permission
2. Subscribe to push service
3. Save subscription to server
4. Server sends push message
5. Service Worker receives push
6. Show notification
\`\`\`

## Request Permission

\`\`\`javascript
async function requestNotificationPermission() {
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
        console.log('Notification permission granted');
        await subscribeToPush();
    } else {
        console.log('Notification permission denied');
    }
}
\`\`\`

## Subscribe to Push

\`\`\`javascript
async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    
    const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(process.env.VAPID_PUBLIC_KEY)
    });
    
    // Send subscription to your server
    await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscription)
    });
    
    console.log('User subscribed:', subscription);
}
\`\`\`

## Service Worker: Receive Push

\`\`\`javascript
// sw.js
self.addEventListener('push', (event) => {
    const data = event.data?.json() || {};
    
    const options = {
        body: data.body || 'You have a new notification',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/badge-72x72.png',
        vibrate: [200, 100, 200],
        data: {
            url: data.url || '/'
        },
        actions: [
            { action: 'open', title: 'Open' },
            { action: 'dismiss', title: 'Dismiss' }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title || 'New Notification', options)
    );
});
\`\`\`

## Notification Click Handler

\`\`\`javascript
// sw.js
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    if (event.action === 'dismiss') return;
    
    const url = event.notification.data?.url || '/';
    
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(clientsArr => {
            // If window exists, focus it
            const existing = clientsArr.find(c => c.url === url && 'focus' in c);
            if (existing) return existing.focus();
            
            // Otherwise open new window
            return clients.openWindow(url);
        })
    );
});
\`\`\`

## Server: Send Push

\`\`\`javascript
import webpush from 'web-push';

webpush.setVapidDetails(
    'mailto:admin@example.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
);

async function sendNotification(subscription, payload) {
    try {
        await webpush.sendNotification(subscription, JSON.stringify(payload));
    } catch (error) {
        if (error.statusCode === 410) {
            // Subscription expired, remove from database
            await removeSubscription(subscription);
        }
    }
}
\`\`\`

## VAPID Keys

\`\`\`bash
# Generate VAPID keys
npx web-push generate-vapid-keys

# Output:
# Public Key: BNi6...
# Private Key: abc123...
\`\`\`
  `,

  quiz: [
    { question: "Push: permission?", options: ["Auto", "Must request (Notification.requestPermission)", "Always granted", "No permission"], correctAnswer: 1 },
    { question: "VAPID?", options: ["Encryption", "Voluntary Application Server Identification (web push auth)", "Cache", "Protocol"], correctAnswer: 1 }
  ],

  codeExamples: []
};