export const chapter = {
  slug: "webpack-code-splitting",
  title: "Code Splitting",
  description: "Pecah bundle dengan code splitting: dynamic imports, splitChunks, lazy loading.",
  icon: "SiWebpack",
  color: "#8DD6F9",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["webpack-plugins"],
  tags: ["webpack", "code-splitting", "dynamic-import", "lazy"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 3 Ways to Code Split

| Method | Use Case |
|--------|----------|
| **Dynamic import()** | Lazy load components/routes |
| **Entry Points** | Multiple pages (MPA) |
| **splitChunks** | Extract shared/vendor code |

## Dynamic Import (Automatic)

\`\`\`javascript
// Button click → load module
button.addEventListener('click', async () => {
    const { default: _ } = await import('lodash');
    console.log(_.chunk([1, 2, 3, 4], 2));
});

// Route-based splitting (React)
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
\`\`\`

## splitChunks (Shared/Vendor)

\`\`\`javascript
module.exports = {
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\\\/]node_modules[\\\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: 10
                },
                common: {
                    minChunks: 2,
                    priority: 5,
                    reuseExistingChunk: true
                }
            }
        }
    }
};
\`\`\`

## Magic Comments

\`\`\`javascript
// Name the chunk
import(/* webpackChunkName: "dashboard" */ './pages/Dashboard');

// Prefetch
import(/* webpackPrefetch: true */ './pages/About');

// Preload
import(/* webpackPreload: true */ './critical-module');
\`\`\`

## React.lazy() + Suspense

\`\`\`jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import(/* webpackChunkName: "dashboard" */ './Dashboard'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
        </Suspense>
    );
}
\`\`\`

## Prefetch/Preload

\`\`\`javascript
// Webpack auto-adds <link rel="prefetch"> for lazy chunks
// Magic comments:
import(/* webpackPrefetch: true */ './module');
import(/* webpackPreload: true */ './critical');
\`\`\`
  `,

  quiz: [
    { question: "Dynamic import()?", options: ["Sync", "import() - lazy load module", "require()", "Static"], correctAnswer: 1 },
    { question: "splitChunks: vendor?", options: ["App code", "Extract node_modules to separate chunk", "CSS only", "Images"], correctAnswer: 1 }
  ],

  codeExamples: []
};