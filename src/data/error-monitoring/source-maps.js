export const chapter = {
  slug: "error-monitoring-source-maps",
  title: "Source Maps",
  description: "Gunakan source maps untuk melihat kode asli (bukan minified) di error production.",
  icon: "SiSentry",
  color: "#362D59",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["error-monitoring-sentry"],
  tags: ["error-monitoring", "source-maps", "debugging", "minified"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Source Maps?

Kode production di-**minify** jadi 1 baris. Stack trace tidak terbaca. Source maps memetakan kode minified → kode asli.

## Generate Source Maps

### Vite
\`\`\`javascript
// vite.config.js
export default {
    build: {
        sourcemap: true
    }
};
\`\`\`

### Webpack
\`\`\`javascript
// webpack.config.js
module.exports = {
    devtool: 'source-map' // Production: 'hidden-source-map'
};
\`\`\`

### Next.js
\`\`\`javascript
// next.config.js
module.exports = {
    productionBrowserSourceMaps: true
};
\`\`\`

## Upload Source Maps ke Sentry

### Cara 1: Sentry CLI
\`\`\`bash
npm install --save-dev @sentry/cli

# Upload setelah build
sentry-cli releases files 1.0.0 upload-sourcemaps ./dist --url-prefix '~/assets'
\`\`\`

### Cara 2: Sentry Webpack Plugin
\`\`\`javascript
const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = {
    plugins: [
        new SentryWebpackPlugin({
            org: 'my-org',
            project: 'my-app',
            authToken: process.env.SENTRY_AUTH_TOKEN,
            release: '1.0.0',
            include: './dist'
        })
    ]
};
\`\`\`

## Hidden Source Maps (Production)

Jangan expose source maps ke publik:

\`\`\`javascript
// Production: hidden-source-map
devtool: 'hidden-source-map'
// Map tidak direfer di file .js, hanya diupload ke Sentry
\`\`\`
  `,

  quiz: [
    { question: "Source maps untuk?", options: ["Mempercepat", "Melihat kode asli dari kode minified di error", "Hiasan", "Backup"], correctAnswer: 1 },
    { question: "Production source map?", options: ["source-map (public)", "hidden-source-map (private, upload ke Sentry)", "inline-source-map", "Tidak perlu"], correctAnswer: 1 }
  ],

  codeExamples: []
};