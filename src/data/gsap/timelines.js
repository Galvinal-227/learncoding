export const chapter = {
  slug: "gsap-timelines",
  title: "Timelines",
  description: "Orkestrasi animasi kompleks dengan Timeline: sequence, overlap, labels, dan kontrol.",
  icon: "SiGreensock",
  color: "#88CE02",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["gsap-tweens"],
  tags: ["gsap", "timeline", "sequence", "orchestration"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Timeline = Orkestrasi Tweens

Timeline memungkinkan kamu **menyusun banyak animasi** dalam sequence yang mudah dikontrol.

## Basic Timeline

\`\`\`javascript
const tl = gsap.timeline();

tl.to('.box', { x: 200, duration: 1 })
  .to('.box', { y: 100, duration: 0.5 })
  .to('.box', { rotation: 360, duration: 1 })
  .to('.box', { scale: 1.5, duration: 0.5 });
// Default: sequence (satu per satu)
\`\`\`

## Position Parameter (Kunci Timeline!)

\`\`\`javascript
const tl = gsap.timeline();

// Sequence (default)
tl.to('.a', { x: 100, duration: 1 })
  .to('.b', { x: 100, duration: 1 }); // Mulai setelah .a selesai

// Bersamaan (absolute time)
tl.to('.a', { x: 100, duration: 1 }, 0)
  .to('.b', { x: 100, duration: 1 }, 0); // Mulai di detik 0

// Overlap
tl.to('.a', { x: 100, duration: 2 }, 0)
  .to('.b', { x: 100, duration: 1 }, 0.5); // Mulai di detik 0.5

// Relative (+= -=)
tl.to('.a', { x: 100, duration: 1 })
  .to('.b', { x: 100, duration: 1 }, '+=0') // Bersamaan
  .to('.c', { x: 100, duration: 1 }, '-=0.5'); // Mundur 0.5 detik

// Labels
tl.add('start')
  .to('.a', { x: 100, duration: 1 }, 'start')
  .to('.b', { x: 100, duration: 1 }, 'start+=0.3');
\`\`\`

## Timeline Control

\`\`\`javascript
const tl = gsap.timeline({ paused: true });

tl.play();
tl.pause();
tl.reverse();
tl.restart();
tl.seek(2);
tl.progress(0.5);
tl.timeScale(2);
tl.kill();
\`\`\`

## Timeline Callbacks

\`\`\`javascript
const tl = gsap.timeline({
    onStart: () => console.log('Timeline mulai'),
    onComplete: () => console.log('Timeline selesai'),
    repeat: 1,
    yoyo: true,
    repeatDelay: 0.5
});
\`\`\`

## Defaults

\`\`\`javascript
const tl = gsap.timeline({
    defaults: {
        duration: 0.5,
        ease: 'power2.out'
    }
});

// Semua tween pakai defaults di atas
tl.to('.a', { x: 100 })
  .to('.b', { y: 100 });
\`\`\`

## Nested Timelines

\`\`\`javascript
function introAnimation() {
    const tl = gsap.timeline();
    tl.from('.logo', { opacity: 0, y: -50 })
      .from('nav a', { opacity: 0, y: -20, stagger: 0.1 }, '-=0.3');
    return tl;
}

function contentAnimation() {
    const tl = gsap.timeline();
    tl.from('h1', { opacity: 0, x: -50 })
      .from('p', { opacity: 0 });
    return tl;
}

// Master timeline
const master = gsap.timeline();
master.add(introAnimation())
      .add(contentAnimation(), '-=0.5'); // Overlap
\`\`\`
  `,

  quiz: [
    { question: "Position parameter '+=0'?", options: ["Setelah selesai", "Bersamaan dengan tween sebelumnya", "Mundur", "Absolute"], correctAnswer: 1 },
    { question: "Timeline: add()?", options: ["Hapus", "Tambah tween/timeline ke sequence", "Pause", "Restart"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Landing Page Animation",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <style>
        body { background: #1a1a2e; color: white; font-family: Arial; padding: 60px; }
        .logo { font-size: 2em; font-weight: bold; margin-bottom: 40px; }
        h1 { font-size: 3em; }
        p { font-size: 1.2em; color: #aaa; }
        button { padding: 12px 30px; background: #88CE02; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="logo">LOGO</div>
    <h1>Welcome to GSAP</h1>
    <p>The most powerful animation library</p>
    <button>Get Started</button>
    
    <script>
        const tl = gsap.timeline();
        
        tl.from('.logo', { opacity: 0, y: -30, duration: 0.8 })
          .from('h1', { opacity: 0, x: -50, duration: 0.6 }, '-=0.4')
          .from('p', { opacity: 0, x: -30, duration: 0.5 }, '-=0.3')
          .from('button', { opacity: 0, scale: 0.8, duration: 0.4 }, '-=0.2');
    </script>
</body>
</html>`
    }
  ]
};