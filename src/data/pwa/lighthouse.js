export const chapter = {
  slug: "pwa-lighthouse",
  title: "Lighthouse PWA Audit",
  description: "Gunakan Lighthouse untuk audit dan optimasi skor PWA.",
  icon: "SiPwa",
  color: "#5A0FC8",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["pwa-manifest", "pwa-service-workers"],
  tags: ["pwa", "lighthouse", "audit", "score"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Lighthouse PWA Checklist

| Audit | Requirement |
|-------|------------|
| **HTTPS** | ✅ Must be HTTPS |
| **Manifest** | ✅ Valid manifest.json |
| **Service Worker** | ✅ Registered + fetch handler |
| **200 Offline** | ✅ Offline page working |
| **Installable** | ✅ Meets install criteria |
| **Splash Screen** | ✅ Icons 192x192 + 512x512 |
| **Theme Color** | ✅ Meta theme-color tag |
| **Viewport** | ✅ Meta viewport tag |
| **Apple Touch Icon** | ✅ apple-touch-icon link |
| **Redirects HTTP→HTTPS** | ✅ Automatic redirect |
| **No dangerous JS** | ✅ No deprecated APIs |

## How to Run Lighthouse

### Chrome DevTools
\`\`\`
1. F12 → Lighthouse tab
2. Categories: PWA (centang)
3. Mode: Navigation (default)
4. Device: Mobile
5. Generate report
\`\`\`

### CLI
\`\`\`bash
npm install -g lighthouse
lighthouse https://myapp.com --only-categories=pwa --view
\`\`\`

### CI/CD
\`\`\`yaml
# GitHub Actions
- name: Run Lighthouse
  run: |
    npm install -g lighthouse
    lighthouse https://myapp.com --only-categories=pwa --output=json --output-path=lighthouse.json
- name: Check score
  run: |
    SCORE=$(cat lighthouse.json | jq '.categories.pwa.score * 100')
    if [ $SCORE -lt 90 ]; then exit 1; fi
\`\`\`

## Fix Common Issues

### "Does not register a service worker"
\`\`\`javascript
// Make sure SW is registered
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}
\`\`\`

### "Does not respond with 200 when offline"
\`\`\`javascript
// sw.js - Return cached page or offline.html
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            if (event.request.mode === 'navigate') {
                return caches.match('/offline.html');
            }
            return new Response('Offline', { status: 503 });
        })
    );
});
\`\`\`

### "Is not installable"
\`\`\`
✅ Valid manifest.json
✅ Service worker registered
✅ HTTPS
✅ Icons at least 192x192 + 512x512
✅ start_url in manifest
✅ display: standalone
\`\`\`

## PWA Score Target

| Score | Rating |
|-------|--------|
| 90-100 | 🟢 Good (Installable) |
| 70-89 | 🟡 Needs work |
| 0-69 | 🔴 Poor |

## Continuous Monitoring

\`\`\`javascript
// package.json
{
    "scripts": {
        "audit:pwa": "lighthouse https://myapp.com --only-categories=pwa --view",
        "audit:ci": "lighthouse https://myapp.com --only-categories=pwa --output=json --output-path=reports/pwa.json"
    }
}
\`\`\`
  `,

  quiz: [
    { question: "Lighthouse PWA score target?", options: ["50+", "90+", "70+", "0"], correctAnswer: 1 },
    { question: "PWA: offline response?", options: ["Error", "Must respond with 200 when offline", "503", "Ignore"], correctAnswer: 1 }
  ],

  codeExamples: []
};