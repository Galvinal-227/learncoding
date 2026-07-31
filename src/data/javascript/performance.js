export const chapter = {
  slug: "javascript-performance",
  title: "Performance Optimization",
  description: "Optimasi performa JavaScript: debounce, throttle, lazy loading, dan tips.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-event-loop"],
  tags: ["javascript", "performa", "optimasi", "debounce"],
  order: 33,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Debounce

Tunda eksekusi sampai user berhenti melakukan aksi:

\`\`\`javascript
function debounce(fn, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// Search input
input.addEventListener('input', debounce(search, 300));
\`\`\`

## Throttle

Batasi frekuensi eksekusi:

\`\`\`javascript
function throttle(fn, limit) {
    let inThrottle = false;
    return (...args) => {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Scroll event
window.addEventListener('scroll', throttle(handleScroll, 100));
\`\`\`

## Lazy Loading

\`\`\`javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
\`\`\`

## Tips Performa

\`\`\`javascript
// ✅ Cache DOM queries
const el = document.getElementById('app');

// ✅ Gunakan DocumentFragment
const fragment = document.createDocumentFragment();
items.forEach(item => fragment.appendChild(item));
parent.appendChild(fragment);

// ✅ Hindari reflow
// Batch DOM changes, gunakan requestAnimationFrame

// ✅ Web Workers untuk heavy computation
const worker = new Worker('worker.js');
worker.postMessage(data);
\`\`\`
  `,

  quiz: [
    { question: "Apa beda debounce dan throttle?", options: ["Tidak ada beda", "Debounce: tunda; Throttle: batasi frekuensi", "Throttle lebih cepat", "Debounce untuk scroll"], correctAnswer: 1, explanation: "Debounce menunda eksekusi sampai aksi berhenti. Throttle membatasi eksekusi maksimal sekali per interval." },
    { question: "API apa untuk lazy loading berbasis visibilitas?", options: ["setTimeout", "IntersectionObserver", "requestAnimationFrame", "MutationObserver"], correctAnswer: 1 }
  ]
};