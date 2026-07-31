export const chapter = {
  slug: "babel-integration",
  title: "Integrasi dengan Tools",
  description: "Integrasikan Babel dengan Webpack, Vite, Jest, dan ESLint.",
  icon: "SiBabel",
  color: "#F9DC3E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["babel-configuration"],
  tags: ["babel", "webpack", "vite", "jest", "integration"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Babel + Webpack

\`\`\`bash
npm install --save-dev babel-loader @babel/core @babel/preset-env
\`\`\`

\`\`\`javascript
// webpack.config.js
module.exports = {
    module: {
        rules: [
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
        ]
    }
};
\`\`\`

## Babel + Vite

\`\`\`bash
npm install --save-dev @vitejs/plugin-legacy
\`\`\`

\`\`\`javascript
// vite.config.js
import legacy from '@vitejs/plugin-legacy';

export default {
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        })
    ]
};
\`\`\`

## Babel + Jest

\`\`\`javascript
// babel.config.js
module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }]
    ]
};
\`\`\`

## Babel + ESLint

\`\`\`bash
npm install --save-dev @babel/eslint-parser
\`\`\`

\`\`\`javascript
// .eslintrc.js
module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-env']
        }
    }
};
\`\`\`

## Babel + TypeScript

\`\`\`javascript
{
  "presets": [
    ["@babel/preset-env", { "targets": "> 0.25%" }],
    "@babel/preset-typescript"
  ]
}
\`\`\`
⚠️ Babel hanya menghapus type annotations, tidak type checking. Gunakan \`tsc --noEmit\` untuk type checking.

## Babel + React (JSX)

\`\`\`javascript
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", {
      "runtime": "automatic" // React 17+ JSX Transform
    }]
  ]
}
\`\`\`
  `,

  quiz: [
    { question: "Loader Babel untuk Webpack?", options: ["babel-loader", "js-loader", "es6-loader", "transform-loader"], correctAnswer: 0 },
    { question: "Plugin Vite untuk legacy browser?", options: ["@vitejs/plugin-react", "@vitejs/plugin-legacy", "@vitejs/plugin-vue", "vite-plugin-babel"], correctAnswer: 1 },
    { question: "Babel + TypeScript: type checking?", options: ["Ya, otomatis", "Tidak, Babel hanya hapus types", "Ya, dengan preset", "Tidak bisa"], correctAnswer: 1, explanation: "Babel hanya menghapus type annotations. Harus jalankan tsc --noEmit untuk type checking." }
  ],

  codeExamples: []
};