export const chapter = {
  slug: "pwa-manifest",
  title: "Web App Manifest",
  description: "Buat manifest.json untuk installable app dengan nama, icon, dan theme.",
  icon: "SiPwa",
  color: "#5A0FC8",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["pwa-introduction"],
  tags: ["pwa", "manifest", "install", "icons"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Web App Manifest?

\`manifest.json\` adalah file JSON yang memberi tahu browser tentang PWA kamu: nama, icon, warna, orientasi. Tanpa ini, PWA tidak bisa di-install.

## manifest.json

\`\`\`json
{
    "name": "My Awesome PWA",
    "short_name": "MyPWA",
    "description": "An awesome Progressive Web App",
    "start_url": "/",
    "scope": "/",
    "display": "standalone",
    "display_override": ["window-controls-overlay"],
    "background_color": "#ffffff",
    "theme_color": "#5A0FC8",
    "orientation": "portrait-primary",
    "lang": "id",
    "dir": "ltr",
    "icons": [
        {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
        },
        {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
        }
    ],
    "screenshots": [
        {
            "src": "/screenshots/home.png",
            "sizes": "1280x720",
            "type": "image/png",
            "form_factor": "wide"
        },
        {
            "src": "/screenshots/home-mobile.png",
            "sizes": "720x1280",
            "type": "image/png",
            "form_factor": "narrow"
        }
    ],
    "categories": ["productivity", "utilities"],
    "shortcuts": [
        {
            "name": "New Document",
            "url": "/new",
            "description": "Create a new document",
            "icons": [{ "src": "/icons/new.png", "sizes": "96x96" }]
        }
    ],
    "related_applications": [
        {
            "platform": "play",
            "url": "https://play.google.com/store/apps/details?id=com.myapp",
            "id": "com.myapp"
        }
    ]
}
\`\`\`

## Link di HTML

\`\`\`html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#5A0FC8">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="MyPWA">
<link rel="apple-touch-icon" href="/icons/icon-192x192.png">
\`\`\`

## Display Modes

| Mode | Deskripsi |
|------|-----------|
| **standalone** | Seperti app native (no browser UI) |
| **fullscreen** | Full screen, no status bar |
| **minimal-ui** | Minimal browser controls |
| **browser** | Tab browser biasa |

## Icon Requirements

\`\`\`
✅ Minimal 2 icon: 192x192 + 512x512
✅ Format: PNG (recommended) atau WebP
✅ purpose: "any" atau "maskable"
✅ Maskable icon = adaptive icon (Android)
✅ Background color untuk padding
\`\`\`

## Testing Manifest

\`\`\`
Chrome DevTools → Application → Manifest:
- Lihat parsed manifest
- Cek icons
- Test installability
\`\`\`
  `,

  quiz: [
    { question: "manifest.json?", options: ["Optional", "Required for installable PWA", "CSS file", "JS file"], correctAnswer: 1 },
    { question: "display: standalone?", options: ["Browser tab", "Like native app (no browser UI)", "Fullscreen", "Minimal"], correctAnswer: 1 },
    { question: "Minimum icons?", options: ["1", "192x192 + 512x512", "16x16 only", "No icons needed"], correctAnswer: 1 }
  ],

  codeExamples: []
};