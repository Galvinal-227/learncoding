export const chapter = {
  slug: "performance-metrics",
  title: "Performance Metrics",
  description: "Pahami metrik performa: FCP, LCP, TTI, TBT, CLS, Speed Index.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["performance-introduction"],
  tags: ["performance", "metrics", "fcp", "lcp"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Key Metrics Timeline

\`\`\`
Navigation → FCP → LCP → TTI → Fully Loaded
     │         │      │      │
     │    First Paint  │  Interactive
     │            Largest Paint
     └── First Contentful Paint
\`\`\`

## Metrics Table

| Metric | Target | Deskripsi |
|--------|--------|-----------|
| **FCP** (First Contentful Paint) | < 1.8s | Konten pertama muncul |
| **LCP** (Largest Contentful Paint) | < 2.5s | Konten terbesar muncul |
| **TTI** (Time to Interactive) | < 3.8s | Bisa interaksi penuh |
| **TBT** (Total Blocking Time) | < 200ms | Main thread blocked |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Layout berubah tak terduga |
| **Speed Index** | < 3.4s | Seberapa cepat konten tampil |
| **TTFB** (Time to First Byte) | < 800ms | Server response pertama |

## Measure with JavaScript

\`\`\`javascript
// Web Vitals library
import { onCLS, onLCP, onFCP, onINP, onTTFB } from 'web-vitals';

onCLS(console.log);
onLCP(console.log);
onFCP(console.log);
onINP(console.log);  // Interaction to Next Paint (new)
onTTFB(console.log);

// Performance Observer
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        console.log(entry.name, entry.startTime, entry.duration);
    }
});
observer.observe({ type: 'largest-contentful-paint', buffered: true });
observer.observe({ type: 'layout-shift', buffered: true });
\`\`\`

## Lighthouse Scoring

| Score | Rating |
|-------|--------|
| 90-100 | 🟢 Good |
| 50-89 | 🟡 Needs Improvement |
| 0-49 | 🔴 Poor |
  `,

  quiz: [
    { question: "LCP target?", options: ["< 1s", "< 2.5s", "< 5s", "< 10s"], correctAnswer: 1 },
    { question: "CLS?", options: ["Speed", "Cumulative Layout Shift (visual stability)", "Network", "Memory"], correctAnswer: 1 }
  ],

  codeExamples: []
};