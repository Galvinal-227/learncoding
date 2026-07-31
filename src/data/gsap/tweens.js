export const chapter = {
  slug: "gsap-tweens",
  title: "Tweens (gsap.to, from, fromTo)",
  description: "Kuasai semua jenis tween: to, from, fromTo, set, stagger, dan properti animasi.",
  icon: "SiGreensock",
  color: "#88CE02",
  difficulty: "Beginner",
  estimatedReadingTime: 25,
  prerequisites: ["gsap-introduction"],
  tags: ["gsap", "tween", "animation", "stagger"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 3 Jenis Tween

### gsap.to() - Animasi KE nilai target
\`\`\`javascript
gsap.to('.box', { x: 200, opacity: 0.5, duration: 1 });
// Dari posisi sekarang → x:200
\`\`\`

### gsap.from() - Animasi DARI nilai yang ditentukan
\`\`\`javascript
gsap.from('.box', { x: -200, opacity: 0, duration: 1 });
// Dari x:-200 → posisi asli
\`\`\`

### gsap.fromTo() - Tentukan nilai AWAL dan AKHIR
\`\`\`javascript
gsap.fromTo('.box', 
    { x: -200, opacity: 0 },  // From
    { x: 200, opacity: 1, duration: 1 }  // To
);
\`\`\`

## gsap.set() - Set Nilai Langsung (Tanpa Animasi)

\`\`\`javascript
gsap.set('.box', { x: 100, opacity: 0 });
// Langsung ke x:100, opacity:0 tanpa animasi
\`\`\`

## Properti yang Bisa Dianimasikan

### Transform
\`\`\`javascript
gsap.to('.box', {
    x: 100,          // translateX (px)
    y: 50,           // translateY
    xPercent: 50,    // translateX (%)
    rotation: 360,   // rotate (derajat)
    scale: 1.5,      // scale
    scaleX: 2,       // scale horizontal
    skewX: 45        // skew
});
\`\`\`

### CSS Properties
\`\`\`javascript
gsap.to('.box', {
    opacity: 0.5,
    backgroundColor: '#ff0000',
    width: 300,
    height: 'auto',
    borderRadius: '50%',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
});
\`\`\`

### SVG Attributes
\`\`\`javascript
gsap.to('circle', {
    attr: { r: 50, cx: 100, fill: '#88CE02' }
});
\`\`\`

## Stagger (Bertahap)

\`\`\`javascript
// Semua .card animasi bareng, delay 0.1 detik antar elemen
gsap.to('.card', {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1  // Delay antar elemen
});

// Stagger dengan object
gsap.to('.card', {
    y: 0,
    stagger: {
        amount: 1,     // Total durasi stagger
        from: 'center', // Mulai dari tengah
        grid: [3, 3],  // Grid 3x3
        axis: 'x'      // Arah stagger
    }
});
\`\`\`

## Easing

\`\`\`javascript
// Built-in
gsap.to('.box', { x: 200, ease: 'none' });
gsap.to('.box', { x: 200, ease: 'power1.in' });
gsap.to('.box', { x: 200, ease: 'power2.out' });
gsap.to('.box', { x: 200, ease: 'power3.inOut' });
gsap.to('.box', { x: 200, ease: 'elastic.out(1, 0.3)' });
gsap.to('.box', { x: 200, ease: 'bounce.out' });
gsap.to('.box', { x: 200, ease: 'back.out(1.7)' });
gsap.to('.box', { x: 200, ease: 'steps(5)' });
\`\`\`

## Control Methods

\`\`\`javascript
const tween = gsap.to('.box', { x: 200, duration: 2 });

tween.pause();
tween.resume();
tween.reverse();
tween.restart();
tween.seek(1);     // Lompat ke detik 1
tween.progress(0.5); // Lompat ke 50%
tween.timeScale(2);  // 2x kecepatan
tween.kill();        // Hentikan & hapus
\`\`\`

## Callbacks

\`\`\`javascript
gsap.to('.box', {
    x: 200,
    duration: 2,
    onStart: () => console.log('Mulai'),
    onUpdate: () => console.log('Berjalan'),
    onComplete: () => console.log('Selesai'),
    onRepeat: () => console.log('Mengulang'),
    onReverseComplete: () => console.log('Reverse selesai')
});
\`\`\`
  `,

  quiz: [
    { question: "gsap.from()?", options: ["Animasi ke nilai", "Animasi dari nilai (ke posisi asli)", "Set nilai", "Hapus animasi"], correctAnswer: 1 },
    { question: "stagger?", options: ["Loop", "Delay antar elemen (bertahap)", "Easing", "Callback"], correctAnswer: 1 },
    { question: "tween.pause()?", options: ["Debug", "Pause animasi", "Restart", "Hapus"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Stagger Cards Animation",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <style>
        body { display: flex; gap: 20px; justify-content: center; padding: 60px; background: #1a1a2e; }
        .card { width: 150px; height: 200px; background: #88CE02; border-radius: 12px; opacity: 0; transform: translateY(50px); }
    </style>
</head>
<body>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    
    <script>
        gsap.to('.card', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: { amount: 1, from: 'edges' },
            ease: 'back.out(1.7)'
        });
    </script>
</body>
</html>`
    }
  ]
};