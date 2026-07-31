export const chapter = {
  slug: "javascript-async-await",
  title: "Async/Await",
  description: "Kuasai Async/Await - cara modern menulis kode asynchronous yang bersih dan mudah dibaca.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-promises"],
  tags: ["javascript", "async", "await", "modern"],
  order: 26,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Async/Await

Async/Await adalah **syntax sugar** di atas Promise. Membuat kode asynchronous terlihat dan berperilaku seperti synchronous.

## Async Function

\`\`\`javascript
// Function declaration
async function fetchData() {
    return 'Data';
}

// Arrow function
const fetchData = async () => {
    return 'Data';
};

// Async function selalu return Promise
fetchData().then(data => console.log(data));
\`\`\`

## Await

\`\`\`javascript
async function getUser() {
    const response = await fetch('https://api.example.com/user/1');
    const user = await response.json();
    return user;
}
\`\`\`

## Error Handling

### try/catch
\`\`\`javascript
async function loadData() {
    try {
        const user = await fetchUser(1);
        const posts = await fetchPosts(user.id);
        return { user, posts };
    } catch (error) {
        console.error('Gagal memuat data:', error);
        return null;
    }
}
\`\`\`

### .catch()
\`\`\`javascript
const user = await fetchUser(1).catch(err => {
    console.error(err);
    return null;
});
\`\`\`

## Sequential vs Parallel

### Sequential (lambat)
\`\`\`javascript
const user = await fetchUser(1);     // Tunggu 1 detik
const posts = await fetchPosts(1);    // Tunggu 1 detik lagi
// Total: 2 detik
\`\`\`

### Parallel (cepat)
\`\`\`javascript
const [user, posts] = await Promise.all([
    fetchUser(1),
    fetchPosts(1)
]);
// Total: 1 detik (bersamaan)
\`\`\`

## Async Iteration

\`\`\`javascript
for await (const item of asyncIterable) {
    console.log(item);
}
\`\`\`

## Top-Level Await (ES2022)

\`\`\`javascript
// Di module (file .mjs atau "type": "module")
const data = await fetch('https://api.example.com/data');
console.log(data);
\`\`\`

## Best Practices

\`\`\`javascript
// ✅ Selalu handle error
try {
    await riskyOperation();
} catch (error) {
    // Handle atau log
}

// ✅ Parallel untuk request independen
const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);

// ❌ Jangan await di loop (sequential)
for (const item of items) {
    await process(item); // Lambat jika bisa paralel
}

// ✅ Gunakan Promise.all
await Promise.all(items.map(item => process(item)));
\`\`\`
  `,

  quiz: [
    {
      question: "Apa return value dari async function?",
      options: ["Nilai langsung", "Promise", "undefined", "Callback"],
      correctAnswer: 1,
      explanation: "Async function selalu mengembalikan Promise, meskipun kamu return nilai biasa."
    },
    {
      question: "Bagaimana cara menjalankan beberapa await secara paralel?",
      options: [
        "await semua berurutan",
        "Promise.all() dengan await",
        "Tidak bisa paralel",
        "Gunakan setTimeout"
      ],
      correctAnswer: 1,
      explanation: "Gunakan await Promise.all([promise1, promise2, ...]) untuk menjalankan beberapa promise secara bersamaan."
    }
  ]
};