export const chapter = {
  slug: "async-javascript-async-await",
  title: "Async/Await",
  description: "Kuasai Async/Await - cara paling modern dan bersih menulis kode async.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["async-javascript-promises"],
  tags: ["async", "await", "modern", "syntactic-sugar"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Async/Await?

Async/Await adalah **syntax sugar** di atas Promise. Membuat kode async terlihat dan dibaca seperti kode synchronous.

## Aturan Dasar

1. \`async\` didepan function → function mengembalikan Promise
2. \`await\` hanya bisa di dalam \`async function\`
3. \`await\` menjeda eksekusi sampai Promise selesai

## Sintaks Dasar

\`\`\`javascript
async function getData() {
    return 'Data'; // Otomatis dibungkus Promise
}
// Sama dengan:
function getData() {
    return Promise.resolve('Data');
}

// Gunakan:
getData().then(data => console.log(data));
\`\`\`

## Await in Action

\`\`\`javascript
async function loadUserProfile(userId) {
    try {
        const user = await fetchUser(userId);
        const posts = await fetchPosts(user.id);
        const followers = await fetchFollowers(user.id);
        
        return { user, posts, followers };
    } catch (error) {
        console.error('Gagal:', error);
        throw error; // Re-throw untuk caller
    }
}

// Gunakan:
const profile = await loadUserProfile(1);
\`\`\`

## Sequential vs Parallel

\`\`\`javascript
// ❌ Sequential (lambat) - 3 detik total
const user = await fetchUser(1);    // 1 detik
const posts = await fetchPosts(1);   // 1 detik
const tags = await fetchTags(1);     // 1 detik

// ✅ Parallel (cepat) - 1 detik total
const [user, posts, tags] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
    fetchTags(1)
]);
\`\`\`

## Async Arrow Function

\`\`\`javascript
const getData = async () => {
    const res = await fetch('/api');
    return res.json();
};

// IIFE async
(async () => {
    const data = await getData();
    console.log(data);
})();
\`\`\`

## Top-Level Await (ES2022)

Hanya di ES Modules (\`"type": "module"\` atau \`.mjs\`):

\`\`\`javascript
// Di file module
const data = await fetch('/api/data').then(r => r.json());
console.log(data);
// Tidak perlu async wrapper!
\`\`\`
  `,

  quiz: [
    { question: "Apa return value async function?", options: ["Data", "Promise", "undefined", "Callback"], correctAnswer: 1 },
    { question: "await hanya bisa di dalam?", options: ["Loop", "async function", "if statement", "callback"], correctAnswer: 1 },
    { question: "Bagaimana menjalankan multiple await paralel?", options: ["await berurutan", "Promise.all() + await", "Tidak bisa", "Gunakan callback"], correctAnswer: 1 }
  ],

  codeExamples: []
};