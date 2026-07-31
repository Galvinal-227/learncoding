export const chapter = {
  slug: "javascript-promises",
  title: "Promise",
  description: "Kuasai Promise untuk menangani operasi asynchronous dengan elegan.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-functions"],
  tags: ["javascript", "promise", "async", "callback"],
  order: 25,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Promise?

Promise adalah object yang merepresentasikan **hasil akhir** dari operasi asynchronous. Janji akan nilai yang mungkin tersedia sekarang, nanti, atau tidak sama sekali.

## 3 State Promise

\`\`\`
pending ──→ fulfilled (resolve)
       └──→ rejected  (reject)
\`\`\`

- **Pending**: Awal, belum selesai
- **Fulfilled**: Berhasil, \`.then()\` dipanggil
- **Rejected**: Gagal, \`.catch()\` dipanggil

## Membuat Promise

\`\`\`javascript
const promise = new Promise((resolve, reject) => {
    // Operasi async
    const sukses = true;
    
    if (sukses) {
        resolve('Data berhasil diambil!');
    } else {
        reject('Gagal mengambil data');
    }
});
\`\`\`

## Menggunakan Promise

\`\`\`javascript
promise
    .then(hasil => {
        console.log('Sukses:', hasil);
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() => {
        console.log('Selesai (baik sukses maupun gagal)');
    });
\`\`\`

## Contoh Praktis

\`\`\`javascript
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1: { nama: 'Budi', umur: 25 },
                2: { nama: 'Siti', umur: 23 }
            };
            
            const user = users[id];
            if (user) {
                resolve(user);
            } else {
                reject('User tidak ditemukan');
            }
        }, 1000);
    });
}

fetchUser(1)
    .then(user => {
        console.log('User:', user);
        return user.nama;
    })
    .then(nama => console.log('Nama:', nama))
    .catch(error => console.error(error));
\`\`\`

## Promise Static Methods

### Promise.all()
Menunggu semua promise selesai (paralel):
\`\`\`javascript
const [user, posts, comments] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
    fetchComments(1)
]);
// Gagal jika SATU saja reject
\`\`\`

### Promise.allSettled()
Menunggu semua, baik sukses maupun gagal:
\`\`\`javascript
const results = await Promise.allSettled([
    fetchUser(1),
    fetchUser(999) // Gagal
]);
// results[0]: {status: 'fulfilled', value: ...}
// results[1]: {status: 'rejected', reason: ...}
\`\`\`

### Promise.race()
Hasil dari promise yang paling cepat selesai:
\`\`\`javascript
const result = await Promise.race([
    fetch('/api/fast'),
    timeout(5000) // Timeout setelah 5 detik
]);
\`\`\`

### Promise.any()
Hasil dari promise pertama yang sukses:
\`\`\`javascript
const result = await Promise.any([
    fetchFromServer1(),
    fetchFromServer2(),
    fetchFromServer3()
]);
\`\`\`

## Chaining Promises

\`\`\`javascript
fetchUser(1)
    .then(user => {
        console.log('User:', user);
        return fetchPosts(user.id); // Return promise baru
    })
    .then(posts => {
        console.log('Posts:', posts);
        return posts.length;
    })
    .then(count => console.log('Jumlah posts:', count))
    .catch(error => console.error('Error di mana saja:', error));
\`\`\`

## Error Handling

\`\`\`javascript
fetchUser(999)
    .then(user => console.log(user))
    .catch(error => {
        console.error('Terjadi error:', error);
        return { nama: 'Default', umur: 0 }; // Recovery
    })
    .then(user => console.log('Lanjut dengan:', user));
\`\`\`
  `,

  quiz: [
    {
      question: "Apa 3 state Promise?",
      options: [
        "Start, Running, End",
        "Pending, Fulfilled, Rejected",
        "Open, Processing, Closed",
        "Begin, Middle, Finish"
      ],
      correctAnswer: 1,
      explanation: "Promise memiliki 3 state: Pending (awal), Fulfilled (sukses/resolve), Rejected (gagal/reject)."
    },
    {
      question: "Apa beda Promise.all() dan Promise.allSettled()?",
      options: [
        "Tidak ada beda",
        "all() reject jika satu gagal; allSettled() selalu menunggu semua",
        "allSettled() lebih cepat",
        "all() hanya untuk 2 promise"
      ],
      correctAnswer: 1,
      explanation: "Promise.all() akan reject jika ada satu yang gagal. Promise.allSettled() menunggu semua selesai dan mengembalikan status masing-masing."
    }
  ],

  codeExamples: [
    {
      title: "Demo Promise",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Promise Demo</title></head>
<body>
    <h1>Demo Promise</h1>
    <button onclick="loadData()">Load Data</button>
    <button onclick="loadParallel()">Load Parallel</button>
    <div id="output"></div>
    
    <script>
        function fetchData(id, delay) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (id === 0) reject('Invalid ID');
                    else resolve({ id, data: \`Data-\${id}\`, time: delay });
                }, delay);
            });
        }
        
        async function loadData() {
            const out = document.getElementById('output');
            out.innerHTML = 'Loading...';
            
            try {
                const data1 = await fetchData(1, 1000);
                out.innerHTML += \`<p>✅ \${data1.data} (\${data1.time}ms)</p>\`;
                
                const data2 = await fetchData(2, 500);
                out.innerHTML += \`<p>✅ \${data2.data} (\${data2.time}ms)</p>\`;
            } catch(err) {
                out.innerHTML += \`<p>❌ \${err}</p>\`;
            }
        }
        
        async function loadParallel() {
            const out = document.getElementById('output');
            out.innerHTML = 'Loading parallel...';
            
            const results = await Promise.all([
                fetchData(1, 1000),
                fetchData(2, 800),
                fetchData(3, 600)
            ]);
            
            out.innerHTML = results.map(r => \`<p>✅ \${r.data}</p>\`).join('');
        }
    </script>
</body>
</html>`
    }
  ]
};