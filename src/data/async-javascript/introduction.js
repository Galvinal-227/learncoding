export const chapter = {
  slug: "async-javascript-introduction",
  title: "Pengenalan Async JavaScript",
  description: "Pahami kenapa JavaScript butuh asynchronous programming dan masalah yang diselesaikan.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-functions"],
  tags: ["async", "javascript", "pengenalan", "non-blocking"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Async?

JavaScript adalah **single-threaded** (satu jalur eksekusi). Jika operasi lambat (fetch API, baca file, setTimeout) dilakukan secara **synchronous**, seluruh aplikasi akan **freeze** (macet).

## Masalah Synchronous

\`\`\`javascript
// ❌ Synchronous - browser freeze 5 detik!
function freezeApp() {
    const start = Date.now();
    while (Date.now() - start < 5000) { } // Block 5 detik
    console.log('Selesai');
}
// User tidak bisa klik, scroll, apa pun selama 5 detik!
\`\`\`

## Solusi: Asynchronous

\`\`\`javascript
// ✅ Asynchronous - browser tetap responsif
console.log('Mulai');
setTimeout(() => {
    console.log('Selesai setelah 5 detik');
}, 5000);
console.log('Ini jalan duluan');
// Output: Mulai → Ini jalan duluan → (5 detik) Selesai
\`\`\`

## 3 Evolusi Async di JavaScript

| Era | Teknik | Masalah |
|-----|--------|---------|
| **Zaman Batu** | Callback | Callback Hell 🔥 |
| **ES6 (2015)** | Promise | Lebih baik, tapi masih .then() chain |
| **ES2017** | Async/Await | ✅ Paling bersih dan readable |

## Operasi Async yang Umum

- 🌐 **Network request** (fetch API, AJAX)
- ⏱️ **Timer** (setTimeout, setInterval)
- 📁 **File system** (Node.js fs)
- 🗄️ **Database query**
- 🖼️ **Image/video loading**
- 🎧 **Event listeners**

## Visualisasi

\`\`\`
Synchronous (Blocking):
[Task 1]────────────────────▶
                              [Task 2]────────────────────▶
                                                            [Task 3]────▶

Asynchronous (Non-blocking):
[Task 1]────▶
[Task 2]────────────▶
[Task 3]──▶
              ⏰ Semua selesai sekitar waktu yang sama
\`\`\`

## Perbandingan Ketiga Teknik

\`\`\`javascript
// 1. Callback
fetchUser(1, (user) => {
    fetchPosts(user.id, (posts) => {
        console.log(posts);
    });
});

// 2. Promise
fetchUser(1)
    .then(user => fetchPosts(user.id))
    .then(posts => console.log(posts));

// 3. Async/Await
const user = await fetchUser(1);
const posts = await fetchPosts(user.id);
console.log(posts);
\`\`\`
  `,

  quiz: [
    { question: "Kenapa JavaScript butuh async?", options: ["Biar keren", "Single-threaded, agar tidak freeze", "Wajib ES6", "Lebih cepat selalu"], correctAnswer: 1, explanation: "JavaScript single-threaded. Operasi lambat yang synchronous akan memblokir seluruh aplikasi." },
    { question: "3 evolusi async JavaScript?", options: ["var, let, const", "Callback, Promise, Async/Await", "HTML, CSS, JS", "Node, Deno, Bun"], correctAnswer: 1 },
    { question: "Operasi mana yang async?", options: ["2+2", "fetch()", "if(true)", "const x=1"], correctAnswer: 1, explanation: "fetch() adalah network request yang async. Operasi matematika dan deklarasi variabel adalah sync." }
  ],

  codeExamples: [
    {
      title: "Sync vs Async Demo",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Async Demo</title></head>
<body>
    <h1>Sync vs Async</h1>
    <button onclick="syncOp()">❌ Sync (Freeze 3s)</button>
    <button onclick="asyncOp()">✅ Async</button>
    <p id="output"></p>
    
    <script>
        function syncOp() {
            document.getElementById('output').textContent = 'Loading... (freeze)';
            const start = Date.now();
            while (Date.now() - start < 3000) { } // Block 3 detik
            document.getElementById('output').textContent = 'Selesai sync!';
        }
        
        function asyncOp() {
            document.getElementById('output').textContent = 'Loading... (responsive)';
            setTimeout(() => {
                document.getElementById('output').textContent = 'Selesai async!';
            }, 3000);
            console.log('Browser tetap responsif!');
        }
    </script>
</body>
</html>`
    }
  ]
};