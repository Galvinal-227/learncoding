export const chapter = {
  slug: "async-javascript-promises",
  title: "Promise",
  description: "Kuasai Promise untuk menangani operasi async dengan lebih elegan.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["async-javascript-callbacks"],
  tags: ["async", "promise", "then", "catch"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Promise?

Promise adalah object yang merepresentasikan **hasil akhir** operasi async. Analogi: **janji** — bisa ditepati (resolve) atau diingkari (reject).

## 3 State Promise

\`\`\`
pending ──→ fulfilled (resolve) ✅
       └──→ rejected  (reject)  ❌
\`\`\`

Begitu settled (fulfilled/rejected), state tidak bisa berubah.

## Membuat Promise

\`\`\`javascript
const janji = new Promise((resolve, reject) => {
    // Operasi async
    setTimeout(() => {
        const sukses = Math.random() > 0.5;
        if (sukses) {
            resolve('Data berhasil diambil! 🎉');
        } else {
            reject('Gagal mengambil data ❌');
        }
    }, 2000);
});
\`\`\`

## Menggunakan Promise

\`\`\`javascript
janji
    .then(hasil => {
        console.log('Sukses:', hasil);
        return hasil.toUpperCase();
    })
    .then(hasilUpper => {
        console.log('Chaining:', hasilUpper);
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() => {
        console.log('Selesai (selalu dijalankan)');
    });
\`\`\`

## Chaining Promises

\`\`\`javascript
function fetchUser(id) {
    return fetch(\`/api/users/\${id}\`).then(res => res.json());
}

function fetchPosts(userId) {
    return fetch(\`/api/users/\${userId}/posts\`).then(res => res.json());
}

fetchUser(1)
    .then(user => {
        console.log('User:', user);
        return fetchPosts(user.id); // Return promise baru
    })
    .then(posts => {
        console.log('Posts:', posts);
    })
    .catch(error => {
        console.error('Error di mana saja:', error);
    });
\`\`\`

## Promisify: Ubah Callback ke Promise

\`\`\`javascript
// Callback-based
function bacaFileCallback(path, callback) {
    fs.readFile(path, 'utf8', callback);
}

// Promisify manual
function bacaFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

// Atau pakai util.promisify (Node.js)
import { promisify } from 'util';
const bacaFile = promisify(fs.readFile);
\`\`\`
  `,

  quiz: [
    { question: "Apa 3 state Promise?", options: ["Start, Run, Stop", "Pending, Fulfilled, Rejected", "Open, Process, Close", "Begin, Middle, End"], correctAnswer: 1 },
    { question: "finally() dijalankan kapan?", options: ["Hanya sukses", "Hanya error", "Selalu (sukses maupun error)", "Tidak pernah"], correctAnswer: 2 },
    { question: "Apa return value .then()?", options: ["Data", "Promise baru", "undefined", "Error"], correctAnswer: 1, explanation: ".then() selalu mengembalikan Promise baru, memungkinkan chaining." }
  ],

  codeExamples: [
    {
      title: "Promise Simulasi API",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Promise Demo</title></head>
<body>
    <h1>Promise Demo</h1>
    <button onclick="loadData()">Load User Data</button>
    <div id="output"></div>
    
    <script>
        function fetchUser(id) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const users = { 1: 'Budi', 2: 'Siti', 3: 'Agus' };
                    const user = users[id];
                    user ? resolve({ id, name: user }) : reject('User tidak ditemukan');
                }, 1500);
            });
        }
        
        function loadData() {
            const out = document.getElementById('output');
            out.innerHTML = '⏳ Loading...';
            
            fetchUser(1)
                .then(user => {
                    out.innerHTML += \`<p>✅ User: \${user.name}</p>\`;
                    return fetchUser(2);
                })
                .then(user => {
                    out.innerHTML += \`<p>✅ User: \${user.name}</p>\`;
                    return fetchUser(999); // Error
                })
                .then(user => {
                    out.innerHTML += \`<p>✅ User: \${user.name}</p>\`;
                })
                .catch(err => {
                    out.innerHTML += \`<p>❌ \${err}</p>\`;
                })
                .finally(() => {
                    out.innerHTML += '<p>🏁 Selesai</p>';
                });
        }
    </script>
</body>
</html>`
    }
  ]
};