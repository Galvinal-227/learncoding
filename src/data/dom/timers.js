export const chapter = {
  slug: "dom-timers",
  title: "Timer (setTimeout, setInterval)",
  description: "Kontrol waktu eksekusi kode dengan setTimeout dan setInterval.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["dom-events"],
  tags: ["dom", "timer", "setTimeout", "setInterval"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## setTimeout

Jalankan sekali setelah delay:

\`\`\`javascript
setTimeout(() => {
    console.log('Muncul setelah 2 detik');
}, 2000);

// Cancel
const id = setTimeout(fn, 1000);
clearTimeout(id);
\`\`\`

## setInterval

Jalankan berulang setiap interval:

\`\`\`javascript
const id = setInterval(() => {
    console.log('Setiap 1 detik');
}, 1000);

// Hentikan
clearInterval(id);
\`\`\`

## Perbedaan

| setTimeout | setInterval |
|------------|-------------|
| Sekali | Berulang |
| Delay antar call | Interval antar start |
  `,

  quiz: [
    { question: "Fungsi untuk menjalankan kode sekali setelah delay?", options: ["setInterval", "setTimeout", "requestAnimationFrame", "delay"], correctAnswer: 1 },
    { question: "Bagaimana menghentikan interval?", options: ["stopInterval", "clearInterval", "cancelInterval", "deleteInterval"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Countdown Timer",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Timer Demo</title></head>
<body>
    <h1>Countdown: <span id="timer">10</span></h1>
    <button id="start">Mulai</button>
    <button id="stop">Berhenti</button>
    
    <script>
        let count = 10;
        let intervalId;
        const timer = document.getElementById('timer');
        
        document.getElementById('start').addEventListener('click', () => {
            if (intervalId) clearInterval(intervalId);
            count = 10;
            timer.textContent = count;
            
            intervalId = setInterval(() => {
                count--;
                timer.textContent = count;
                if (count <= 0) {
                    clearInterval(intervalId);
                    timer.textContent = 'WAKTU HABIS!';
                }
            }, 1000);
        });
        
        document.getElementById('stop').addEventListener('click', () => {
            clearInterval(intervalId);
        });
    </script>
</body>
</html>`
    }
  ]
};