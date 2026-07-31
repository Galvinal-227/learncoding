export const chapter = {
  slug: "gsap-scrolltrigger",
  title: "ScrollTrigger",
  description: "Animasi berbasis scroll dengan ScrollTrigger: pin, scrub, parallax, dan reveal.",
  icon: "SiGreensock",
  color: "#88CE02",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["gsap-timelines"],
  tags: ["gsap", "scrolltrigger", "scroll", "parallax"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu ScrollTrigger?

ScrollTrigger adalah plugin GSAP untuk **animasi berbasis scroll position**. Paling populer dari semua fitur GSAP.

## Setup

\`\`\`javascript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
\`\`\`

## Basic ScrollTrigger

\`\`\`javascript
gsap.to('.box', {
    x: 500,
    scrollTrigger: {
        trigger: '.box',       // Element pemicu
        start: 'top center',   // Kapan mulai (trigger top = viewport center)
        end: 'bottom top',     // Kapan selesai
        scrub: true,           // Animasi ikut scroll (bukan triggered)
        markers: true,         // Debug markers
        pin: true,             // Pin element saat scroll
        toggleActions: 'play none none reverse'
    }
});
\`\`\`

## Toggle Actions

\`\`\`
onEnter onLeave onEnterBack onLeaveBack
play    none    none         reverse
restart pause   resume       reset
\`\`\`

## Scrub (Animasi Terikat Scroll)

\`\`\`javascript
gsap.to('.progress', {
    width: '100%',
    scrollTrigger: {
        trigger: 'article',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1  // Smooth (0.5-2 detik lag untuk smoothing)
    }
});
\`\`\`

## Pin Element

\`\`\`javascript
gsap.to('.section', {
    scrollTrigger: {
        trigger: '.section',
        start: 'top top',
        end: '+=200%',    // Pin untuk 200% tinggi viewport
        pin: true,
        pinSpacing: true   // Tambah spacing agar konten di bawah tidak loncat
    }
});
\`\`\`

## Batch (Multiple Elements)

\`\`\`javascript
ScrollTrigger.batch('.card', {
    onEnter: (elements) => {
        gsap.to(elements, {
            opacity: 1,
            y: 0,
            stagger: 0.15
        });
    },
    start: 'top 80%'
});
\`\`\`

## Parallax

\`\`\`javascript
gsap.to('.parallax-bg', {
    yPercent: 50,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        scrub: true
    }
});
\`\`\`

## Responsive

\`\`\`javascript
scrollTrigger: {
    trigger: '.box',
    start: 'top center',
    // Disable di mobile
    invalidateOnRefresh: true
}
\`\`\`
  `,

  quiz: [
    { question: "scrub: true?", options: ["Sekali trigger", "Animasi terikat scroll (smooth)", "Pin", "Batch"], correctAnswer: 1 },
    { question: "pin: true?", options: ["Hapus", "Pin/tahan element saat scroll", "Percepat", "Parallax"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Scroll Reveal Cards",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <style>
        body { background: #1a1a2e; color: white; font-family: Arial; margin: 0; }
        .spacer { height: 100vh; display: flex; align-items: center; justify-content: center; }
        .cards { display: flex; gap: 30px; padding: 100px; }
        .card { width: 300px; height: 400px; background: #88CE02; border-radius: 16px; opacity: 0; transform: translateY(80px); }
    </style>
</head>
<body>
    <div class="spacer"><h1>Scroll Down 👇</h1></div>
    
    <div class="cards">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
    </div>
    
    <div class="spacer"><h1>⬆️ Scroll Up</h1></div>
    
    <script>
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.to('.card', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.cards',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    </script>
</body>
</html>`
    }
  ]
};