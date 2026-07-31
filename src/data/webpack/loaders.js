export const chapter = {
  slug: "webpack-loaders",
  title: "Loaders",
  description: "Gunakan loaders untuk transform CSS, TypeScript, images, dan files.",
  icon: "SiWebpack",
  color: "#8DD6F9",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["webpack-entry-output"],
  tags: ["webpack", "loaders", "css", "typescript"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Loader Concept

Loaders **mentransform file** sebelum dibundle. Diproses **dari kanan ke kiri** (atau bawah ke atas).

\`\`\`javascript
module: {
    rules: [
        {
            test: /\\.css$/,
            use: ['style-loader', 'css-loader']
            // Execute: css-loader → style-loader
        }
    ]
}
\`\`\`

## CSS Loaders

\`\`\`bash
npm install -D style-loader css-loader
\`\`\`

\`\`\`javascript
{
    test: /\\.css$/,
    use: ['style-loader', 'css-loader']
}

// CSS Modules
{
    test: /\\.module\\.css$/,
    use: [
        'style-loader',
        { loader: 'css-loader', options: { modules: true } }
    ]
}
\`\`\`

## SCSS/SASS

\`\`\`bash
npm install -D sass-loader sass
\`\`\`

\`\`\`javascript
{
    test: /\\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
}
\`\`\`

## TypeScript

\`\`\`bash
npm install -D ts-loader typescript
\`\`\`

\`\`\`javascript
{
    test: /\\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
}
\`\`\`

## Babel (JavaScript Transpilation)

\`\`\`bash
npm install -D babel-loader @babel/core @babel/preset-env
\`\`\`

\`\`\`javascript
{
    test: /\\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
}
\`\`\`

## Images & Assets

\`\`\`javascript
// Webpack 5: Asset Modules (no loader needed!)
{
    test: /\\.(png|jpg|gif|svg)$/,
    type: 'asset/resource'  // Copy to output
}
{
    test: /\\.(png|jpg)$/,
    type: 'asset',
    parser: { dataUrlCondition: { maxSize: 8 * 1024 } }  // 8KB → inline base64
}
\`\`\`

## Loader Chains

\`\`\`javascript
{
    test: /\\.scss$/,
    use: [
        'style-loader',   // 3. Inject CSS to DOM
        'css-loader',     // 2. CSS → JS
        'sass-loader'     // 1. SCSS → CSS
    ]
}
\`\`\`
  `,

  quiz: [
    { question: "Loader order?", options: ["Left to right", "Right to left (bottom to top)", "Random", "Alphabetical"], correctAnswer: 1 },
    { question: "Asset Modules?", options: ["Plugin", "Built-in (Webpack 5, no loader needed)", "Loader", "Config"], correctAnswer: 1 }
  ],

  codeExamples: []
};