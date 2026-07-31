export const chapter = {
  slug: "async-javascript-promise-all-race",
  title: "Promise.all, race, allSettled, any",
  description: "Kuasai static methods Promise untuk mengelola multiple async operations.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["async-javascript-promises"],
  tags: ["async", "promise", "all", "race", "allSettled"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 4 Static Methods Promise

### 1. Promise.all()
**Semua harus sukses.** Satu gagal → semua gagal.

\`\`\`javascript
const [user, posts, settings] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
    fetchSettings()
]);
// Jalan paralel, total waktu = yang paling lama
// Jika SATU reject → langsung reject
\`\`\`

### 2. Promise.allSettled()
**Tunggu semua selesai** (sukses atau gagal).

\`\`\`javascript
const results = await Promise.allSettled([
    fetchUser(1),
    fetchUser(999), // Gagal
    fetchUser(3)
]);

results.forEach(r => {
    if (r.status === 'fulfilled') console.log('OK:', r.value);
    else console.log('Error:', r.reason);
});
// Tetap lanjut, semua dapat hasil
\`\`\`

### 3. Promise.race()
Hasil dari yang **paling cepat** (entah sukses/gagal).

\`\`\`javascript
// Timeout pattern
const result = await Promise.race([
    fetch('/api/data'),
    timeout(5000) // Reject setelah 5 detik
]);

function timeout(ms) {
    return new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout!')), ms)
    );
}
\`\`\`

### 4. Promise.any()
Hasil dari yang **pertama sukses** (abaikan yang gagal).

\`\`\`javascript
const data = await Promise.any([
    fetchFromServer1(), // Coba server 1
    fetchFromServer2(), // Fallback server 2
    fetchFromServer3()  // Fallback server 3
]);
// Ambil yang pertama berhasil
// Jika SEMUA gagal → AggregateError
\`\`\`

## Perbandingan

| Method | Menunggu | Jika Gagal |
|--------|----------|------------|
| **all** | Semua selesai | 1 gagal → semua gagal |
| **allSettled** | Semua selesai | Tetap lanjut, lapor sendiri |
| **race** | 1 selesai (tercepat) | Ikut yang tercepat |
| **any** | 1 sukses | Cari yang sukses |
  `,

  quiz: [
    { question: "Promise.all() jika satu reject?", options: ["Lanjut", "Semua reject", "Abaikan", "Retry"], correctAnswer: 1 },
    { question: "Beda Promise.all() dan Promise.allSettled()?", options: ["Sama", "all: 1 gagal semua gagal; allSettled: semua selesai apa pun hasilnya", "allSettled lebih cepat", "all hanya 2 promise"], correctAnswer: 1 },
    { question: "Promise.any() untuk?", options: ["Semua sukses", "Ambil yang pertama sukses", "Yang tercepat", "Timeout"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Demo Promise Methods",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Promise Methods Demo</title></head>
<body>
    <h1>Promise.all / race / allSettled / any</h1>
    <button onclick="demoAll()">Promise.all</button>
    <button onclick="demoRace()">Promise.race</button>
    <button onclick="demoAllSettled()">Promise.allSettled</button>
    <button onclick="demoAny()">Promise.any</button>
    <pre id="output"></pre>
    
    <script>
        const out = document.getElementById('output');
        
        function delay(name, ms, shouldReject = false) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    shouldReject ? reject(name + ' GAGAL') : resolve(name + ' OK');
                }, ms);
            });
        }
        
        async function demoAll() {
            out.textContent = 'Promise.all - semua harus sukses...\\n';
            try {
                const results = await Promise.all([
                    delay('A', 1000), delay('B', 500), delay('C', 200)
                ]);
                out.textContent += '✅ ' + results.join(', ');
            } catch(e) { out.textContent += '❌ ' + e; }
        }
        
        async function demoRace() {
            out.textContent = 'Promise.race - yang tercepat menang...\\n';
            const result = await Promise.race([
                delay('Cepat', 500), delay('Lambat', 2000)
            ]);
            out.textContent += '🏆 ' + result;
        }
        
        async function demoAllSettled() {
            out.textContent = 'Promise.allSettled - semua selesai...\\n';
            const results = await Promise.allSettled([
                delay('A', 1000), delay('B', 500, true), delay('C', 200)
            ]);
            results.forEach(r => {
                out.textContent += r.status === 'fulfilled' 
                    ? '✅ ' + r.value + '\\n' 
                    : '❌ ' + r.reason + '\\n';
            });
        }
        
        async function demoAny() {
            out.textContent = 'Promise.any - pertama sukses...\\n';
            const result = await Promise.any([
                delay('Server1', 1000, true), 
                delay('Server2', 500), 
                delay('Server3', 2000, true)
            ]);
            out.textContent += '✅ ' + result;
        }
    </script>
</body>
</html>`
    }
  ]
};