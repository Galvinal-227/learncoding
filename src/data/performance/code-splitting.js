export const chapter = {
  slug: "performance-code-splitting",
  title: "Code Splitting",
  description: "Pecah bundle JavaScript dengan code splitting dan dynamic imports.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["performance-lazy-loading"],
  tags: ["performance", "code-splitting", "dynamic-import", "bundle"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Dynamic Import

\`\`\`javascript
// Load only when needed
button.addEventListener('click', async () => {
    const { drawChart } = await import('./chart.js');
    drawChart();
});

// Conditional load
if (featureEnabled) {
    const module = await import('./feature.js');
    module.init();
}
\`\`\`

## Route-Based Splitting (React)

\`\`\`jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

// Webpack: auto-split per route
// Vite: auto-split per route
\`\`\`

## Vendor Splitting (Vite)

\`\`\`javascript
// vite.config.js
export default {
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    ui: ['@mui/material', '@emotion/react']
                }
            }
        }
    }
};
\`\`\`

## Webpack SplitChunks

\`\`\`javascript
// webpack.config.js
module.exports = {
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};
\`\`\`
  `,

  quiz: [
    { question: "Dynamic import?", options: ["Static", "import() - load module on demand", "require()", "CSS import"], correctAnswer: 1 },
    { question: "Vendor splitting?", options: ["One bundle", "Separate vendor (node_modules) from app code", "All in one", "No splitting"], correctAnswer: 1 }
  ],

  codeExamples: []
};