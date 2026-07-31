export const chapter = {
  slug: "async-javascript-error-handling-async",
  title: "Error Handling Async",
  description: "Teknik menangani error di kode async: try/catch, .catch(), dan patterns.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["async-javascript-async-await"],
  tags: ["async", "error", "try-catch", "catch"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Error Handling di Async Code

Error di async code TIDAK bisa ditangkap dengan try/catch biasa. Perlu teknik khusus.

## Promise: .catch()

\`\`\`javascript
fetchUser(1)
    .then(user => console.log(user))
    .catch(error => console.error('Error:', error));
\`\`\`

## Async/Await: try/catch

\`\`\`javascript
async function loadData() {
    try {
        const user = await fetchUser(1);
        const posts = await fetchPosts(user.id);
        return { user, posts };
    } catch (error) {
        console.error('Gagal load:', error.message);
        return null; // Fallback
    }
}
\`\`\`

## Pattern: .catch() di Await

\`\`\`javascript
const user = await fetchUser(1).catch(err => {
    console.error(err);
    return null; // Fallback
});
if (!user) return;
\`\`\`

## Pattern: Wrapper (Go-style)

\`\`\`javascript
async function to(promise) {
    try {
        const data = await promise;
        return [data, null];
    } catch (error) {
        return [null, error];
    }
}

const [user, error] = await to(fetchUser(1));
if (error) {
    console.error('Error:', error);
    return;
}
console.log('User:', user);
\`\`\`

## Error di Promise.all()

\`\`\`javascript
// Promise.all() - SATU gagal → semua gagal
try {
    const [a, b, c] = await Promise.all([p1, p2, p3]);
} catch (error) {
    console.error('Salah satu gagal:', error);
}

// Promise.allSettled() - Semua selesai, lapor sendiri-sendiri
const results = await Promise.allSettled([p1, p2, p3]);
results.forEach((r, i) => {
    if (r.status === 'fulfilled') console.log(i, 'OK');
    else console.log(i, 'Error:', r.reason);
});
\`\`\`

## Unhandled Promise Rejection

\`\`\`javascript
// ❌ Error tidak tertangani
async function foo() {
    throw new Error('Oops');
}
foo(); // UnhandledPromiseRejection!

// ✅ Selalu handle
foo().catch(err => console.error(err));

// Global handler
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled:', reason);
});
\`\`\`
  `,

  quiz: [
    { question: "Bagaimana handle error di async/await?", options: ["if/else", "try/catch", "Tidak bisa", "Callback"], correctAnswer: 1 },
    { question: "Promise.all() jika salah satu reject?", options: ["Lanjut", "Semua reject", "Return undefined", "Retry otomatis"], correctAnswer: 1 },
    { question: "Apa itu UnhandledPromiseRejection?", options: ["Fitur baru", "Promise reject tanpa .catch()", "Jenis Promise", "Error di sync code"], correctAnswer: 1 }
  ],

  codeExamples: []
};