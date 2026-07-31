export const chapter = {
  slug: "performance-lazy-loading",
  title: "Lazy Loading",
  description: "Implementasi lazy loading untuk images, components, dan routes.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["performance-metrics"],
  tags: ["performance", "lazy-loading", "images", "components"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Native Lazy Loading

\`\`\`html
<!-- Images -->
<img src="photo.jpg" loading="lazy" alt="Photo">

<!-- Iframes -->
<iframe src="https://example.com" loading="lazy"></iframe>
\`\`\`

## JavaScript Lazy Loading

### Intersection Observer
\`\`\`javascript
const images = document.querySelectorAll('img[data-src]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, { rootMargin: '200px' });  // Load 200px before visible

images.forEach(img => observer.observe(img));
\`\`\`

## React Lazy Loading

\`\`\`jsx
import { lazy, Suspense } from 'react';

// Component lazy loading
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HeavyComponent />
        </Suspense>
    );
}

// Route lazy loading (React Router)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

<Routes>
    <Route path="/" element={<Suspense fallback={<Spinner />}><Home /></Suspense>} />
    <Route path="/about" element={<Suspense fallback={<Spinner />}><About /></Suspense>} />
</Routes>
\`\`\`

## Next.js Dynamic Import

\`\`\`jsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
    loading: () => <p>Loading...</p>,
    ssr: false  // Skip SSR for client-only components
});
\`\`\`

## Video Lazy Loading

\`\`\`html
<video controls poster="thumbnail.jpg" preload="none">
    <source src="video.mp4" type="video/mp4">
</video>
\`\`\`
  `,

  quiz: [
    { question: "loading='lazy'?", options: ["Eager load", "Lazy load (native HTML)", "Preload", "No load"], correctAnswer: 1 },
    { question: "Intersection Observer?", options: ["CSS", "Detect element visibility (lazy load)", "HTTP", "Database"], correctAnswer: 1 }
  ],

  codeExamples: []
};