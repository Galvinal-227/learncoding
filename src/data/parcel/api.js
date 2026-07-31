export const chapter = {
  slug: "parcel-api",
  title: "Parcel API",
  description: "Gunakan Parcel API untuk build programmatic dan integrasi dengan Node.js.",
  icon: "SiParcel",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["parcel-zero-config"],
  tags: ["parcel", "api", "programmatic", "nodejs"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Programmatic API

\`\`\`javascript
import { Parcel } from '@parcel/core';

const bundler = new Parcel({
    entries: './src/index.html',
    defaultConfig: '@parcel/config-default',
    mode: 'production',  // 'development' | 'production'
    targets: {
        main: {
            distDir: './dist',
            publicUrl: '/',
            engines: {
                browsers: '> 0.5%, last 2 versions'
            }
        }
    },
    shouldDisableCache: false,
    cacheDir: '.parcel-cache'
});

// Run build
const { bundleGraph, buildTime } = await bundler.run();
console.log(\`Build completed in \${buildTime}ms\`);

// Watch mode
const subscription = await bundler.watch((err, event) => {
    if (err) throw err;
    if (event.type === 'buildSuccess') {
        console.log('Build success!', event.bundleGraph);
    }
});

// Unsubscribe later
// await subscription.unsubscribe();
\`\`\`

## Custom Reporter

\`\`\`javascript
import { Reporter } from '@parcel/plugin';

export default new Reporter({
    async report({ event }) {
        if (event.type === 'buildSuccess') {
            console.log(\`Build success in \${event.buildTime}ms\`);
            const bundles = event.bundleGraph.getBundles();
            bundles.forEach(bundle => {
                console.log(\`  \${bundle.name || bundle.id}: \${bundle.totalSize} bytes\`);
            });
        }
        
        if (event.type === 'buildFailure') {
            console.error('Build failed:', event.diagnostics);
        }
    }
});
\`\`\`

## Express + Parcel Middleware

\`\`\`javascript
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// In development, proxy to Parcel dev server
if (process.env.NODE_ENV === 'development') {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'http://localhost:1234',
            changeOrigin: true
        })
    );
} else {
    app.use(express.static('dist'));
}

app.listen(3000);
\`\`\`
  `,

  quiz: [
    { question: "Parcel API?", options: ["CLI only", "Programmatic API (Parcel class)", "REST", "GraphQL"], correctAnswer: 1 },
    { question: "bundler.watch()?", options: ["Build once", "Watch mode (rebuild on changes)", "Production", "Stop"], correctAnswer: 1 }
  ],

  codeExamples: []
};