export const chapter = {
  slug: "performance-bundle-analyzer",
  title: "Bundle Analysis",
  description: "Analisis bundle size dengan Webpack Bundle Analyzer, Vite, dan optimasi.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["performance-code-splitting"],
  tags: ["performance", "bundle", "analysis", "webpack"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Webpack Bundle Analyzer

\`\`\`bash
npm install -D webpack-bundle-analyzer
\`\`\`

\`\`\`javascript
// webpack.config.js
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',  // Generate HTML report
            reportFilename: 'bundle-report.html',
            openAnalyzer: false
        })
    ]
};
\`\`\`

## Vite / Rollup

\`\`\`bash
npm install -D rollup-plugin-visualizer
\`\`\`

\`\`\`javascript
// vite.config.js
import { visualizer } from 'rollup-plugin-visualizer';

export default {
    plugins: [
        visualizer({
            filename: 'bundle-report.html',
            open: false,
            gzipSize: true
        })
    ]
};
\`\`\`

## Next.js Bundle Analysis

\`\`\`bash
npm install -D @next/bundle-analyzer
\`\`\`

\`\`\`javascript
// next.config.js
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
});

export default bundleAnalyzer({});
\`\`\`

\`\`\`bash
ANALYZE=true npm run build
\`\`\`

## What to Look For

\`\`\`
🔍 Large node_modules → vendor splitting
🔍 Duplicate packages → dedupe
🔍 Moment.js → dayjs (lebih kecil)
🔍 Lodash → lodash-es (tree-shakeable)
🔍 Large icons → tree-shakeable icon library
🔍 Unused code → tree shaking
\`\`\`

## Bundle Size Optimization

\`\`\`bash
# Check package size before install
npx npm-check-updates

# Find large packages
npx bundle-wizard

# Dedupe dependencies
npm dedupe

# Check import cost (VS Code extension)
Import Cost
\`\`\`

## Common Savings

| Action | Savings |
|--------|---------|
| Replace moment with dayjs | -67KB |
| Tree-shake lodash | -20KB |
| Remove unused icons | -50KB |
| Code splitting | -200KB initial |
| Brotli compression | -20% size |
  `,

  quiz: [
    { question: "Webpack Bundle Analyzer?", options: ["Debug", "Visualize bundle size (what's big)", "Test", "Lint"], correctAnswer: 1 },
    { question: "moment.js → ?", options: ["Keep", "dayjs (smaller, tree-shakeable)", "lodash", "No change"], correctAnswer: 1 }
  ],

  codeExamples: []
};