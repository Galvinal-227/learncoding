export const chapter = {
  slug: "gsap-introduction",
  title: "Pengenalan GSAP",
  description: "Pahami apa itu GSAP, kenapa jadi standar industri, dan cara memulainya.",
  icon: "SiGreensock",
  color: "#88CE02",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction"],
  tags: ["gsap", "animation", "javascript", "greensock"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu GSAP?

GSAP (GreenSock Animation Platform) adalah library animasi **JavaScript paling powerful** untuk web. Dipakai oleh perusahaan besar seperti Apple, Google, Nike, Disney, dan 11+ juta developer.

## Kenapa GSAP?

- ⚡ **Extremely fast** - 20x lebih cepat dari jQuery animate
- 🎯 **Animate anything** - DOM, SVG, Canvas, WebGL, CSS variables, object properties
- 🧩 **Rich features** - Timeline, ScrollTrigger, morphing, text animation
- 🔧 **Framework-agnostic** - Vanilla JS, React, Vue, Angular, Svelte
- 📐 **ScrollTrigger** - Animasi berbasis scroll (paling populer!)
- 🆓 **Free** - Untuk project komersial (plugins premium untuk fitur advanced)

## GSAP vs CSS Animations vs Framer Motion

| | GSAP | CSS Animations | Framer Motion |
|---|------|---------------|---------------|
| Kontrol | Full (play, pause, reverse) | Limited | Sedang |
| Performa | Sangat tinggi | Tinggi | Tinggi |
| Timeline | ✅ Powerful | ❌ | ✅ |
| Scroll | ✅ ScrollTrigger | ❌ (JS needed) | ✅ (useScroll) |
| SVG | ✅ Superior | Terbatas | Terbatas |
| React | ✅ | ✅ | ✅ (React-native) |

## Instalasi

### CDN (Cepat)
\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
\`\`\`

### NPM
\`\`\`bash
npm install gsap
\`\`\`

\`\`\`javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
\`\`\`

## Basic Syntax

\`\`\`javascript
// Target: CSS selector, element, array
gsap.to('.box', {          // Animasi ke...
    x: 100,                // transformX
    y: 50,                 // transformY
    rotation: 360,         // rotate
    scale: 1.5,            // scale
    opacity: 0.5,          // opacity
    duration: 2,           // durasi (detik)
    delay: 0.5,            // tunda
    ease: 'power2.out',    // easing
    repeat: 1,             // ulangi
    yoyo: true             // bolak-balik
});
\`\`\`

## GSAP Core Concepts

- **Tween**: Animasi tunggal (A → B)
- **Timeline**: Sequence/orkestrasi banyak tween
- **ScrollTrigger**: Animasi terikat scroll position
- **Plugins**: Fitur tambahan (SplitText, MorphSVG, dll)
  `,

  quiz: [
    { question: "GSAP singkatan?", options: ["GreenSock Animation Platform", "Global Script Animation Protocol", "Graphic System Animation Platform", "Google Standard Animation Protocol"], correctAnswer: 0 },
    { question: "GSAP vs CSS Animations?", options: ["Sama", "GSAP: kontrol penuh, timeline, scroll; CSS: limited", "CSS lebih cepat", "GSAP deprecated"], correctAnswer: 1 },
    { question: "gsap.to vs gsap.from?", options: ["Sama", "to: animasi ke nilai; from: animasi dari nilai", "from: ke nilai", "to: dari nilai"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "GSAP Pertama",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>GSAP First</title>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <style>
        .box { width: 100px; height: 100px; background: #88CE02; border-radius: 12px; }
    </style>
</head>
<body>
    <div class="box"></div>
    
    <script>
        gsap.to('.box', {
            x: 300,
            rotation: 360,
            scale: 1.5,
            duration: 2,
            ease: 'power2.inOut',
            repeat: 1,
            yoyo: true
        });
    </script>
</body>
</html>`
    }
  ]
};