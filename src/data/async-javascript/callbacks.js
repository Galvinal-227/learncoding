export const chapter = {
  slug: "async-javascript-callbacks",
  title: "Callback Functions",
  description: "Pahami callback - teknik async pertama di JavaScript dan masalah Callback Hell.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["async-javascript-introduction"],
  tags: ["async", "callback", "callback-hell", "pattern"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Callback?

Callback adalah **fungsi yang dikirim sebagai argumen** ke fungsi lain dan dieksekusi setelah operasi selesai.

## Contoh Dasar

\`\`\`javascript
function sapa(nama, callback) {
    console.log('Halo, ' + nama);
    callback();
}

sapa('Budi', function() {
    console.log('Callback dipanggil!');
});
// Output: Halo, Budi → Callback dipanggil!
\`\`\`

## Callback di Operasi Async

\`\`\`javascript
// setTimeout dengan callback
console.log('Mulai');
setTimeout(() => {
    console.log('Ini callback setelah 2 detik');
}, 2000);
console.log('Selesai (jalan duluan)');

// Event listener dengan callback
button.addEventListener('click', function(event) {
    console.log('Tombol diklik!');
});
\`\`\`

## Error-First Callback (Node.js Pattern)

\`\`\`javascript
function bacaFile(path, callback) {
    // Simulasi baca file
    setTimeout(() => {
        const error = null; // atau new Error('File tidak ditemukan')
        const data = 'Isi file...';
        callback(error, data);
    }, 1000);
}

bacaFile('/data.txt', function(err, data) {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Data:', data);
});
\`\`\`

## Callback Hell 🔥

Masalah terbesar callback: nesting yang dalam dan sulit dibaca.

\`\`\`javascript
// 🔥 CALLBACK HELL - Piramida Kematian
getUser(1, (err, user) => {
    if (err) return console.error(err);
    getPosts(user.id, (err, posts) => {
        if (err) return console.error(err);
        getComments(posts[0].id, (err, comments) => {
            if (err) return console.error(err);
            getLikes(comments[0].id, (err, likes) => {
                if (err) return console.error(err);
                console.log(likes);
            });
        });
    });
});
\`\`\`

## Solusi Callback Hell

### 1. Named Functions
\`\`\`javascript
function handleLikes(err, likes) { console.log(likes); }
function handleComments(err, comments) { getLikes(comments[0].id, handleLikes); }
function handlePosts(err, posts) { getComments(posts[0].id, handleComments); }
function handleUser(err, user) { getPosts(user.id, handlePosts); }

getUser(1, handleUser);
\`\`\`

### 2. Promise (ES6) ✅
\`\`\`javascript
getUser(1)
    .then(user => getPosts(user.id))
    .then(posts => getComments(posts[0].id))
    .then(comments => getLikes(comments[0].id))
    .then(likes => console.log(likes))
    .catch(err => console.error(err));
\`\`\`

### 3. Async/Await (ES2017) ✅✅
\`\`\`javascript
try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    const likes = await getLikes(comments[0].id);
    console.log(likes);
} catch (err) {
    console.error(err);
}
\`\`\`
  `,

  quiz: [
    { question: "Apa itu callback?", options: ["Variabel", "Fungsi yang dikirim sebagai argumen", "Loop", "Object"], correctAnswer: 1 },
    { question: "Apa masalah utama callback?", options: ["Lambat", "Callback Hell (nesting dalam)", "Tidak didukung", "Hanya untuk Node"], correctAnswer: 1 },
    { question: "Error-first callback pattern?", options: ["callback(data, err)", "callback(err, data)", "callback(data)", "callback()"], correctAnswer: 1, explanation: "Error-first: parameter pertama selalu error (null jika sukses), kedua data." }
  ],

  codeExamples: []
};