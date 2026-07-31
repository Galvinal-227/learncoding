export const chapter = {
  slug: "webpack-production-build",
  title: "Production Build",
  description: "Optimasi production build: minification, compression, environment variables.",
  icon: "SiWebpack",
  color: "#8DD6F9",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["webpack-plugins"],
  tags: ["webpack", "production", "minify", "optimization"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Production Mode

\`\`\`javascript
module.exports = {
    mode: 'production',  // Auto: minify, tree shake, scope hoisting
    devtool: 'source-map',  // .map files separate (not in bundle)
    
    optimization: {
        minimizer: [
            new TerserPlugin({ parallel: true }),  // Minify JS
            new CssMinimizerPlugin()                // Minify CSS
        ],
        splitChunks: {
            chunks: 'all',  // Extract vendor chunks
            cacheGroups: {
                vendor: {
                    test: /[\\\\/]node_modules[\\\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};
\`\`\`

## Environment Config

\`\`\`javascript
// webpack.config.js
module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    
    return {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'eval-source-map',
        // ...
    };
};
\`\`\`

## Production Checklist

\`\`\`
✅ mode: 'production'
✅ MiniCssExtractPlugin
✅ TerserPlugin (minify)
✅ Content hashing ([contenthash])
✅ Code splitting
✅ Tree shaking
✅ Gzip/Brotli compression (server)
✅ Environment variables
\`\`\`
  `,

  quiz: [
    { question: "mode: 'production'?", options: ["Debug", "Auto minify + optimize", "Dev server", "Watch mode"], correctAnswer: 1 },
    { question: "TerserPlugin?", options: ["CSS extract", "Minify JavaScript", "HTML generate", "Copy files"], correctAnswer: 1 }
  ],

  codeExamples: []
};