export const chapter = {
  slug: "performance-core-web-vitals",
  title: "Core Web Vitals",
  description: "Optimasi LCP, INP, dan CLS - 3 metrik utama Google untuk SEO.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["performance-metrics"],
  tags: ["performance", "core-web-vitals", "seo", "google"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 3 Core Web Vitals (2024+)

| Metric | Measure | Good |
|--------|---------|------|
| **LCP** | Loading | < 2.5s |
| **INP** | Interactivity | < 200ms |
| **CLS** | Visual Stability | < 0.1 |

## LCP (Largest Contentful Paint)

### Optimasi LCP:
\`\`\`html
<!-- 1. Preload LCP image -->
<link rel="preload" as="image" href="hero.jpg" fetchpriority="high">

<!-- 2. Gunakan priority hints -->
<img src="hero.jpg" fetchpriority="high" alt="Hero">

<!-- 3. Avoid lazy loading for LCP -->
<img src="hero.jpg" loading="eager" alt="Hero">

<!-- 4. Optimize image -->
<img src="hero.webp" width="1200" height="600" alt="Hero">
\`\`\`

\`\`\`javascript
// 5. Server-side render (Next.js)
export default async function Page() {
    const data = await fetchData();  // Server-side
    return <div>{data}</div>;        // HTML ready!
}
\`\`\`

## INP (Interaction to Next Paint)

### Optimasi INP:
\`\`\`javascript
// 1. Debounce input handlers
import { debounce } from 'lodash';

const handleSearch = debounce((query) => {
    fetchResults(query);
}, 300);

// 2. Web Workers for heavy computation
const worker = new Worker('/worker.js');
worker.postMessage(data);

// 3. Break long tasks
function processLargeArray(items) {
    const chunkSize = 100;
    let index = 0;
    
    function processChunk() {
        const chunk = items.slice(index, index + chunkSize);
        chunk.forEach(process);
        index += chunkSize;
        
        if (index < items.length) {
            requestAnimationFrame(processChunk);  // Yield to browser
        }
    }
    
    processChunk();
}
\`\`\`

## CLS (Cumulative Layout Shift)

### Optimasi CLS:
\`\`\`css
/* 1. Reserve space for images */
img {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
}

/* 2. Avoid inserting content above existing content */
/* ❌ Don't inject banners/ads without space */
/* ✅ Reserve space with skeleton */

/* 3. Use transform for animations (not layout triggers) */
.element {
    transform: translateX(100px); /* ✅ Composite only */
    /* ❌ top: 100px;  (triggers layout) */
}
\`\`\`

\`\`\`html
<!-- 4. Specify dimensions for embeds -->
<iframe width="560" height="315" src="..."></iframe>

<!-- 5. Reserve space for dynamic content -->
<div style="min-height: 200px">
    <!-- Ad will load here -->
</div>
\`\`\`
  `,

  quiz: [
    { question: "Core Web Vitals: 3 metrics?", options: ["FCP, TTI, TBT", "LCP, INP, CLS", "FID, LCP, CLS", "Speed, Size, Load"], correctAnswer: 1 },
    { question: "INP target?", options: ["< 100ms", "< 200ms", "< 500ms", "< 1s"], correctAnswer: 1 }
  ],

  codeExamples: []
};