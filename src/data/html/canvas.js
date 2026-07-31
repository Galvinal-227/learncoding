export const chapter = {
  slug: "html-canvas",
  title: "Canvas",
  description: "Pelajari cara menggambar grafik, animasi, dan game dengan Canvas API di HTML5.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Advanced",
  estimatedReadingTime: 30,
  prerequisites: ["html-elements", "javascript"],
  tags: ["html", "canvas", "grafik", "animasi", "html5"],
  order: 23,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Canvas?

Canvas adalah elemen HTML5 yang menyediakan area gambar bitmap yang bisa dimanipulasi dengan JavaScript. Cocok untuk grafik, game, animasi, dan visualisasi data.

## Sintaks Dasar

\`\`\`html
<canvas id="canvasKu" width="500" height="300">
    Browser kamu tidak mendukung Canvas.
</canvas>
\`\`\`

\`\`\`javascript
const canvas = document.getElementById('canvasKu');
const ctx = canvas.getContext('2d');
\`\`\`

## Menggambar Bentuk Dasar

### Rectangle
\`\`\`javascript
const canvas = document.getElementById('canvasKu');
const ctx = canvas.getContext('2d');

// Kotak berisi
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);

// Kotak outline
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.strokeRect(50, 50, 200, 100);

// Hapus area
ctx.clearRect(60, 60, 50, 50);
\`\`\`

### Garis
\`\`\`javascript
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 150);
ctx.lineTo(50, 250);
ctx.closePath();
ctx.strokeStyle = 'green';
ctx.stroke();
\`\`\`

### Lingkaran dan Arc
\`\`\`javascript
// Lingkaran penuh
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = 'orange';
ctx.fill();

// Setengah lingkaran
ctx.beginPath();
ctx.arc(300, 150, 50, 0, Math.PI);
ctx.stroke();
\`\`\`

## Warna dan Style

\`\`\`javascript
// Fill color
ctx.fillStyle = '#3498db';
ctx.fillStyle = 'rgb(52, 152, 219)';
ctx.fillStyle = 'rgba(52, 152, 219, 0.5)';

// Gradien linear
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.5, 'yellow');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 200, 200);

// Gradien radial
const radialGradient = ctx.createRadialGradient(150, 100, 10, 150, 100, 100);
radialGradient.addColorStop(0, 'white');
radialGradient.addColorStop(1, 'blue');
ctx.fillStyle = radialGradient;
ctx.fillRect(0, 0, 300, 200);
\`\`\`

## Teks di Canvas

\`\`\`javascript
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Halo Canvas!', 50, 100);

ctx.font = 'bold 40px Roboto';
ctx.strokeStyle = 'blue';
ctx.strokeText('Teks Outline', 50, 200);

// Text alignment
ctx.textAlign = 'center';
ctx.fillText('Tengah', 250, 300);
\`\`\`

## Gambar di Canvas

\`\`\`javascript
const img = new Image();
img.src = 'foto.jpg';
img.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.drawImage(img, 0, 0, 200, 150); // Resize
    // Crop: drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.drawImage(img, 50, 50, 100, 100, 0, 0, 200, 200);
};
\`\`\`

## Transformasi

\`\`\`javascript
ctx.save(); // Simpan state

ctx.translate(100, 100);
ctx.rotate(Math.PI / 4);
ctx.scale(2, 1);
ctx.fillRect(-25, -25, 50, 50);

ctx.restore(); // Kembalikan state
\`\`\`

## Animasi Sederhana

\`\`\`javascript
let x = 0;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'red';
    ctx.fillRect(x, 100, 50, 50);
    
    x += 2;
    if (x > canvas.width) x = -50;
    
    requestAnimationFrame(animate);
}

animate();
\`\`\`
  `,

  quiz: [
    {
      question: "Metode apa yang digunakan untuk mendapatkan context 2D canvas?",
      options: ["canvas.getContext('2d')", "canvas.createContext()", "canvas.draw2D()", "canvas.get2D()"],
      correctAnswer: 0,
      explanation: "getContext('2d') mengembalikan objek CanvasRenderingContext2D untuk menggambar di canvas."
    },
    {
      question: "Fungsi apa untuk membuat animasi smooth di canvas?",
      options: ["setInterval()", "setTimeout()", "requestAnimationFrame()", "animate()"],
      correctAnswer: 2,
      explanation: "requestAnimationFrame() mengoptimalkan animasi dengan sinkronisasi refresh rate browser."
    }
  ],

  codeExamples: [
    {
      title: "Canvas: Bola Memantul",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Canvas Animation</title>
</head>
<body>
    <h1>Canvas: Bola Memantul</h1>
    <canvas id="canvas" width="600" height="400" 
            style="border:1px solid #ccc;"></canvas>
    
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        let x = 300, y = 200;
        let dx = 3, dy = 2;
        const radius = 20;
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Gambar bola
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = '#E34F26';
            ctx.fill();
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Pantulan
            if (x + radius > canvas.width || x - radius < 0) {
                dx = -dx;
            }
            if (y + radius > canvas.height || y - radius < 0) {
                dy = -dy;
            }
            
            x += dx;
            y += dy;
            
            requestAnimationFrame(animate);
        }
        
        animate();
    </script>
</body>
</html>`,
      output: "Animasi bola memantul menggunakan Canvas API."
    }
  ]
};