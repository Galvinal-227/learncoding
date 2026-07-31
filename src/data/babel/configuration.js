export const chapter = {
  slug: "babel-configuration",
  title: "Konfigurasi Babel",
  description: "Pelajari berbagai cara konfigurasi Babel: .babelrc, babel.config.js, package.json.",
  icon: "SiBabel",
  color: "#F9DC3E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["babel-presets"],
  tags: ["babel", "config", "babelrc", "setup"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Cara Konfigurasi Babel

### 1. babel.config.js (Recommended - Project-wide)
\`\`\`javascript
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: '> 0.25%, not dead',
            useBuiltIns: 'usage',
            corejs: '3.35'
        }],
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-proposal-optional-chaining',
        ['@babel/plugin-transform-runtime', {
            corejs: 3
        }]
    ],
    env: {
        production: {
            plugins: ['transform-remove-console']
        },
        test: {
            presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
        }
    }
};
\`\`\`

### 2. .babelrc.json (File-based config)
\`\`\`json
{
  "presets": ["@babel/preset-env"],
  "plugins": []
}
\`\`\`

### 3. package.json
\`\`\`json
{
  "babel": {
    "presets": ["@babel/preset-env"]
  }
}
\`\`\`

### 4. webpack.config.js (Loader config)
\`\`\`javascript
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
\`\`\`

## Environment-Specific Config

\`\`\`javascript
module.exports = {
    presets: ['@babel/preset-env'],
    env: {
        // Hanya di production
        production: {
            plugins: ['transform-remove-console']
        },
        // Hanya di test
        test: {
            presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
        }
    }
};
\`\`\`

## Overrides

\`\`\`javascript
module.exports = {
    presets: ['@babel/preset-env'],
    overrides: [
        {
            test: './src/utils',
            presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
        },
        {
            test: './node_modules/some-library',
            sourceType: 'unambiguous'
        }
    ]
};
\`\`\`
  `,

  quiz: [
    { question: "File konfigurasi Babel yang direkomendasikan?", options: [".babelrc", "babel.config.js", "package.json", "webpack.config.js"], correctAnswer: 1, explanation: "babel.config.js adalah project-wide config yang direkomendasikan untuk monorepo dan konfigurasi kompleks." },
    { question: "env di konfigurasi Babel untuk?", options: ["Environment variable", "Konfigurasi berbeda per environment", "Node.js env", "Browser env"], correctAnswer: 1 },
    { question: "Overrides untuk?", options: ["Overwrite semua config", "Konfigurasi spesifik untuk file/folder tertentu", "Error handling", "Debugging"], correctAnswer: 1 }
  ],

  codeExamples: []
};