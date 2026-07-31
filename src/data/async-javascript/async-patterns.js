export const chapter = {
  slug: "async-javascript-async-patterns",
  title: "Async Design Patterns",
  description: "Pelajari design patterns untuk async: retry, timeout, queue, pool, dan circuit breaker.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["async-javascript-async-await"],
  tags: ["async", "pattern", "retry", "timeout", "queue"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Retry Pattern

Coba lagi jika gagal, dengan exponential backoff:

\`\`\`javascript
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network error');
            return response.json();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            await new Promise(r => setTimeout(r, Math.pow(2, i) * 1000));
            console.log(\`Retry \${i + 1}...\`);
        }
    }
}
\`\`\`

## 2. Timeout Pattern

Batalkan jika terlalu lama:

\`\`\`javascript
function fetchWithTimeout(url, timeoutMs = 5000) {
    return Promise.race([
        fetch(url).then(r => r.json()),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Request timeout')), timeoutMs)
        )
    ]);
}
\`\`\`

## 3. Queue (Concurrency Limiter)

Batasi jumlah request paralel:

\`\`\`javascript
async function asyncPool(concurrency, items, fn) {
    const results = [];
    const executing = new Set();
    
    for (const item of items) {
        const p = Promise.resolve().then(() => fn(item));
        results.push(p);
        executing.add(p);
        
        const clean = () => executing.delete(p);
        p.then(clean, clean);
        
        if (executing.size >= concurrency) {
            await Promise.race(executing);
        }
    }
    return Promise.all(results);
}

// Max 3 request paralel
const results = await asyncPool(3, urls, url => fetch(url));
\`\`\`

## 4. Sequential Execution

\`\`\`javascript
async function sequential(items, fn) {
    const results = [];
    for (const item of items) {
        results.push(await fn(item));
    }
    return results;
}
\`\`\`

## 5. Debounce Async

\`\`\`javascript
function debounceAsync(fn, delay) {
    let timeout;
    return (...args) => new Promise((resolve, reject) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args).then(resolve, reject), delay);
    });
}

const search = debounceAsync(query => fetch(\`/search?q=\${query}\`), 300);
\`\`\`

## 6. Cache/Memoize Async

\`\`\`javascript
function memoizeAsync(fn) {
    const cache = new Map();
    return async (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Cache hit!');
            return cache.get(key);
        }
        const result = await fn(...args);
        cache.set(key, result);
        return result;
    };
}
\`\`\`
  `,

  quiz: [
    { question: "Retry pattern untuk?", options: ["Mempercepat", "Mencoba lagi jika gagal", "Cache", "Timeout"], correctAnswer: 1 },
    { question: "Concurrency limiter untuk?", options: ["Mempercepat semua", "Membatasi jumlah request paralel", "Timeout", "Cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};