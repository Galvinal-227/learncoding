export const chapter = {
  slug: "async-javascript-abort-controller",
  title: "Abort Controller & Timeout",
  description: "Batalkan fetch request dan operasi async dengan AbortController.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 10,
  prerequisites: ["async-javascript-fetch-advanced"],
  tags: ["async", "abort", "controller", "cancel"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu AbortController?

AbortController memungkinkan kamu **membatalkan** fetch request atau operasi async lainnya.

## Basic Usage

\`\`\`javascript
const controller = new AbortController();
const signal = controller.signal;

fetch('/api/data', { signal })
    .then(res => res.json())
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('Request dibatalkan');
        }
    });

// Batalkan setelah 5 detik
setTimeout(() => controller.abort(), 5000);
\`\`\`

## Timeout Pattern

\`\`\`javascript
function fetchWithTimeout(url, timeoutMs = 5000) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    
    return fetch(url, { signal: controller.signal })
        .then(response => {
            clearTimeout(timeout);
            return response;
        });
}
\`\`\`

## Abort di React

\`\`\`javascript
useEffect(() => {
    const controller = new AbortController();
    
    fetch('/api/user', { signal: controller.signal })
        .then(res => res.json())
        .then(setUser)
        .catch(err => {
            if (err.name !== 'AbortError') setError(err);
        });
    
    return () => controller.abort(); // Cleanup!
}, [userId]);
\`\`\`

## Abort dengan Async/Await

\`\`\`javascript
async function fetchData(url, signal) {
    try {
        const response = await fetch(url, { signal });
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Dibatalkan');
            return null;
        }
        throw error;
    }
}
\`\`\`
  `,

  quiz: [
    { question: "AbortController untuk?", options: ["Debug", "Membatalkan fetch request", "Logging", "Caching"], correctAnswer: 1 },
    { question: "Kenapa abort di useEffect cleanup?", options: ["Hiasan", "Cegah memory leak saat komponen unmount", "Wajib", "Lebih cepat"], correctAnswer: 1 }
  ],

  codeExamples: []
};