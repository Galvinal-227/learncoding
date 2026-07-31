export const chapter = {
  slug: "canvas-animations",
  title: "Animasi dengan Canvas",
  description: "Buat animasi halus 60fps dengan requestAnimationFrame di Canvas.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["canvas-shapes", "canvas-transformations"],
  tags: ["canvas", "animation", "requestAnimationFrame", "game-loop"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Game Loop Pattern

\`\`\`javascript
function gameLoop() {
    // 1. Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 2. Update state
    update();
    
    // 3. Draw
    draw();
    
    // 4. Request frame berikutnya
    requestAnimationFrame(gameLoop);
}

gameLoop();
\`\`\`

## Animasi Sederhana

\`\`\`javascript
let x = 50;
let dx = 3;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Gambar bola
    ctx.beginPath();
    ctx.arc(x, 200, 30, 0, Math.PI * 2);
    ctx.fillStyle = '#4285F4';
    ctx.fill();
    
    // Update posisi
    x += dx;
    if (x > canvas.width - 30 || x < 30) dx = -dx;
    
    requestAnimationFrame(animate);
}
animate();
\`\`\`

## Delta Time (Framerate Independent)

\`\`\`javascript
let lastTime = 0;
const speed = 200; // pixel per detik

function animate(currentTime) {
    // Hitung delta time dalam detik
    const dt = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    
    // Update dengan delta time
    x += speed * dt; // Kecepatan konsisten di semua device
    
    draw();
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
\`\`\`

## Animasi Banyak Objek

\`\`\`javascript
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4;
        this.radius = Math.random() * 5 + 2;
        this.color = \`hsl(\${Math.random() * 360}, 70%, 60%)\`;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce walls
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const particles = Array.from({length: 100}, () => 
    new Particle(canvas.width/2, canvas.height/2)
);

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Trail effect
    
    particles.forEach(p => {
        p.update();
        p.draw(ctx);
    });
    
    requestAnimationFrame(animate);
}
\`\`\`

## Easing Functions

\`\`\`javascript
// Linear
const linear = t => t;

// Ease In Out
const easeInOut = t => t < 0.5 ? 2*t*t : -1+(4-2*t)*t;

// Bounce
const bounce = t => {
    if (t < 1/2.75) return 7.5625*t*t;
    if (t < 2/2.75) return 7.5625*(t-=1.5/2.75)*t + 0.75;
    if (t < 2.5/2.75) return 7.5625*(t-=2.25/2.75)*t + 0.9375;
    return 7.5625*(t-=2.625/2.75)*t + 0.984375;
};

// Gunakan
let progress = 0; // 0 ke 1
function animate() {
    progress += 0.01;
    if (progress > 1) progress = 0;
    
    const easedProgress = easeInOut(progress);
    x = startX + (endX - startX) * easedProgress;
    
    draw();
    requestAnimationFrame(animate);
}
\`\`\`
  `,

  quiz: [
    { question: "requestAnimationFrame keuntungan?", options: ["Lebih mudah", "Sinkron refresh rate, pause saat tab inactive", "Lebih cepat dari setTimeout", "Tidak perlu clear"], correctAnswer: 1 },
    { question: "Delta time untuk?", options: ["Warna", "Kecepatan konsisten di semua device", "Ukuran canvas", "Jumlah objek"], correctAnswer: 1 },
    { question: "Game loop 3 langkah?", options: ["Start,Play,End", "Clear,Update,Draw", "Input,Process,Output", "Init,Run,Stop"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Bouncing Balls Animation",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Bouncing Balls</title>
    <style>canvas { background: #1a1a2e; display: block; margin: 20px auto; border-radius: 8px; }</style>
</head>
<body>
    <canvas id="canvas" width="800" height="500"></canvas>
    
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        class Ball {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 6;
                this.vy = (Math.random() - 0.5) * 6;
                this.radius = Math.random() * 20 + 10;
                this.color = \`hsl(\${Math.random() * 360}, 80%, 60%)\`;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < this.radius || this.x > canvas.width - this.radius) this.vx *= -1;
                if (this.y < this.radius || this.y > canvas.height - this.radius) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.strokeStyle = 'rgba(255,255,255,0.3)';
                ctx.stroke();
            }
        }
        
        const balls = Array.from({length: 30}, () => new Ball());
        
        function animate() {
            ctx.fillStyle = 'rgba(26, 26, 46, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            balls.forEach(ball => { ball.update(); ball.draw(); });
            requestAnimationFrame(animate);
        }
        animate();
    </script>
</body>
</html>`
    }
  ]
};