export const chapter = {
  slug: "webpack-dev-server",
  title: "Dev Server & HMR",
  description: "Setup Webpack Dev Server dengan Hot Module Replacement.",
  icon: "SiWebpack",
  color: "#8DD6F9",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["webpack-loaders"],
  tags: ["webpack", "dev-server", "hmr", "development"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install

\`\`\`bash
npm install -D webpack-dev-server
\`\`\`

## Config

\`\`\`javascript
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 3000,
        hot: true,              // HMR
        open: true,              // Auto-open browser
        historyApiFallback: true, // SPA fallback
        compress: true,          // Gzip
        client: {
            overlay: true         // Show errors in browser
        },
        proxy: {
            '/api': 'http://localhost:8080'
        }
    }
};
\`\`\`

## HMR (Hot Module Replacement)

\`\`\`javascript
// Enable in code
if (module.hot) {
    module.hot.accept('./component', () => {
        // Re-render component
        render();
    });
}
\`\`\`

## NPM Scripts

\`\`\`json
{
    "scripts": {
        "dev": "webpack serve --open",
        "build": "webpack --mode production",
        "analyze": "webpack --mode production --env analyze"
    }
}
\`\`\`
  `,

  quiz: [
    { question: "HMR?", options: ["Reload page", "Hot Module Replacement (update without reload)", "Build", "Error"], correctAnswer: 1 },
    { question: "webpack serve?", options: ["Production build", "Dev server with HMR", "Analyze", "Test"], correctAnswer: 1 }
  ],

  codeExamples: []
};