export const chapter = {
  slug: "pwa-introduction",
  title: "Pengenalan PWA",
  description: "Pahami apa itu PWA, keunggulannya, dan kenapa jadi masa depan web apps.",
  icon: "SiPwa",
  color: "#5A0FC8",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["html-introduction", "javascript-introduction"],
  tags: ["pwa", "mobile", "offline", "native-like"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu PWA?

**Progressive Web App (PWA)** adalah aplikasi web yang menggunakan teknologi modern untuk memberikan pengalaman seperti **aplikasi native**. Bisa di-install, bekerja offline, dan mengirim push notification.

## Karakteristik PWA

| Karakteristik | Deskripsi |
|---------------|-----------|
| **Progressive** | Bekerja di semua browser |
| **Responsive** | Cocok di semua ukuran layar |
| **Offline** | Bekerja tanpa internet |
| **Installable** | Bisa di-install ke home screen |
| **Fresh** | Selalu up-to-date (Service Worker) |
| **Safe** | HTTPS only |
| **Discoverable** | Search engine friendly |
| **Engaging** | Push notifications, fullscreen |

## PWA vs Native App vs Website

| | PWA | Native App | Website |
|---|-----|-----------|---------|
| Install | ✅ (home screen) | ✅ (App Store) | ❌ |
| Offline | ✅ | ✅ | ❌ |
| Push Notifications | ✅ | ✅ | ❌ |
| App Store | ❌ (bisa via TWA) | ✅ | ❌ |
| Update | Instant | App Store review | Instant |
| Development | HTML/CSS/JS | Swift/Kotlin | HTML/CSS/JS |
| Size | KB-MB | 10-100MB | KB-MB |
| Cost | $ | $$$ | $ |

## PWA Sukses Stories

| Company | PWA | Impact |
|---------|-----|--------|
| **Twitter** | Twitter Lite | 65% increase in pages per session |
| **Starbucks** | PWA | 2x daily active users |
| **Pinterest** | PWA | 60% increase in engagement |
| **Uber** | m.uber.com | Super fast on 2G |
| **Spotify** | PWA | Free tier in browser |

## PWA Requirements (Google)

1. ✅ **HTTPS** - Harus secure
2. ✅ **Web App Manifest** - Name, icons, theme color
3. ✅ **Service Worker** - Offline support
4. ✅ **Responsive** - Mobile-friendly
5. ✅ **Fast** - Lighthouse PWA score >90

## Quick Check: Is This a PWA?

\`\`\`
1. Bisa diakses via HTTPS?
2. Ada manifest.json?
3. Service worker registered?
4. Bisa di-install? (ada install prompt)
5. Bekerja offline?
\`\`\`

## PWA Tools

| Tool | Fungsi |
|------|--------|
| **Lighthouse** | Audit PWA score |
| **Workbox** | Service worker library (Google) |
| **PWA Builder** | Generate manifest + SW |
| **Web Dev Tools** | Application panel (Chrome) |
  `,

  quiz: [
    { question: "PWA?", options: ["Website biasa", "Web app with native-like features (install, offline, push)", "Native app", "Mobile only"], correctAnswer: 1 },
    { question: "PWA: wajib?", options: ["HTTP", "HTTPS (secure)", "FTP", "SSH"], correctAnswer: 1 },
    { question: "PWA vs Native?", options: ["Same", "PWA: web tech, no app store; Native: Swift/Kotlin", "Native cheaper", "PWA bigger"], correctAnswer: 1 }
  ],

  codeExamples: []
};