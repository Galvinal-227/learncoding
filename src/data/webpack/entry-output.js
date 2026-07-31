export const chapter = {
  slug: "webpack-entry-output",
  title: "Entry & Output",
  description: "Konfigurasi entry points dan output bundles di Webpack.",
  icon: "SiWebpack",
  color: "#8DD6F9",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["webpack-introduction"],
  tags: ["webpack", "entry", "output", "config"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Single Entry

\`\`\`javascript
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
\`\`\`

## Multiple Entry

\`\`\`javascript
module.exports = {
    entry: {
        app: './src/app.js',
        admin: './src/admin.js',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',  // app.bundle.js, admin.bundle.js
        clean: true  // Clean dist/ before build
    }
};
\`\`\`

## Output Options

\`\`\`javascript
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',  // Cache busting
    chunkFilename: '[name].[contenthash].chunk.js',
    publicPath: '/',                       // CDN: 'https://cdn.example.com/'
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
    library: {
        name: 'MyLibrary',
        type: 'umd'  // umd, commonjs, module
    }
}
\`\`\`

## Placeholder

| Placeholder | Deskripsi |
|-------------|-----------|
| [name] | Entry/chunk name |
| [id] | Chunk ID |
| [hash] | Build hash |
| [contenthash] | Content hash (best for caching) |
| [ext] | File extension |
\`\`\`
  `,

  quiz: [
    { question: "[contenthash]?", options: ["Build hash", "Content-based hash (cache busting)", "Chunk ID", "Entry name"], correctAnswer: 1 },
    { question: "clean: true?", options: ["Lint", "Clear dist/ before build", "Minify", "Tree shake"], correctAnswer: 1 }
  ],

  codeExamples: []
};