export const chapter = {
  slug: "dom-requestAnimationFrame",
  title: "requestAnimationFrame",
  description: "Pelajari requestAnimationFrame untuk animasi JavaScript yang halus dan efisien.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 10,
  prerequisites: ["dom-timers"],
  tags: ["dom", "animasi", "rAF", "performa"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu requestAnimationFrame?

\`requestAnimationFrame\` (rAF) adalah method browser untuk menjalankan animasi yang **sinkron dengan refresh rate** layar (biasanya 60fps).

## Kenapa rAF?

- ✅ **Otomatis pause** saat tab tidak aktif (hemat CPU)
- ✅ **Timing tepat** sesuai refresh rate
- ✅ **Lebih halus** dari setInterval
- ✅ **Browser optimasi** batch update

## Sintaks

\`\`\`javascript
let animationId;

function animate() {
    // Kode animasi di sini
    animationId = requestAnimationFrame(animate);
}

// Mulai
animationId = requestAnimationFrame(animate);

// Berhenti
cancelAnimationFrame(animationId);
\`\`\`

## setInterval vs rAF

\`\`\`javascript
// ❌ setInterval - bisa tidak sinkron
setInterval(() => {
    box.style.left = (parseInt(box.style.left) + 1) + 'px';
}, 16); // ~60fps

// ✅ requestAnimationFrame - sinkron refresh rate
function animate() {
    box.style.left = (parseInt(box.style.left) + 1) + 'px';
    requestAnimationFrame(animate);
}
animate();
\`\`\`

## Delta Time

Untuk kecepatan konsisten di semua device:

\`\`\`javascript
let lastTime = 0;
const speed = 100; // pixel per detik

function animate(currentTime) {
    const deltaTime = (currentTime - lastTime) / 1000; // detik
    lastTime = currentTime;
    
    x += speed * deltaTime; // Kecepatan konsisten
    
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
\`\`\`
  `,

  quiz: [
    { question: "Keuntungan utama requestAnimationFrame dibanding setInterval?", options: ["Lebih mudah", "Sinkron refresh rate, pause saat tab inactive", "Lebih cepat selalu", "Tidak perlu clear"], correctAnswer: 1 },
    { question: "Bagaimana menghentikan rAF?", options: ["clearInterval()", "cancelAnimationFrame()", "stopAnimation()", "clearTimeout()"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Animasi Bola dengan rAF",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>rAF Demo</title>
<style>.ball{width:40px;height:40px;background:#e74c3c;border-radius:50%;position:absolute}</style>
</head>
<body>
    <h1>Animasi dengan requestAnimationFrame</h1>
    <button onclick="start()">Mulai</button>
    <button onclick="stop()">Berhenti</button>
    <button onclick="reset()">Reset</button>
    <div class="ball" id="ball" style="top:100px;left:0;"></div>
    
    <script>
        const ball = document.getElementById('ball');
        let x = 0, y = 100;
        let dx = 3, dy = 2;
        let animId;
        
        function animate() {
            const maxX = window.innerWidth - 50;
            const maxY = window.innerHeight - 100;
            
            x += dx;
            y += dy;
            
            if (x >= maxX || x <= 0) dx *= -1;
            if (y >= maxY || y <= 60) dy *= -1;
            
            ball.style.left = x + 'px';
            ball.style.top = y + 'px';
            
            animId = requestAnimationFrame(animate);
        }
        
        function start() { 
            if (!animId) animate(); 
        }
        function stop() { 
            cancelAnimationFrame(animId); 
            animId = null; 
        }
        function reset() { 
            stop(); 
            x = 0; y = 100; 
            ball.style.left = '0px'; 
            ball.style.top = '100px'; 
        }
        
        start();
    </script>
</body>
</html>`
    }
  ]
};