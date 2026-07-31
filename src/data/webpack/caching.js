export const chapter = {
  slug: "webpack-caching",
  title: "Caching & Hashing",
  description: "Optimasi caching browser dengan content hashing dan code splitting.",
  icon: "SiWebpack",
  color: "#8DD6F9",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["webpack-production-build"],
  tags: ["webpack", "caching", "contenthash", "hashing"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Content Hashing

\`\`\`javascript
module.exports = {
    output: {
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].chunk.js'
    }
};

// Result: main.8f3a2b1c.js
// File content changes → hash changes → cache bust!
// File content same → hash same → browser cache!
\`\`\`

## Hash Types

| Hash | When Changes | Use Case |
|------|-------------|----------|
| **[hash]** | Any file changes | ❌ Avoid (cache miss too often) |
| **[chunkhash]** | Chunk content changes | ⚠️ Better but still |
| **[contenthash]** | File content changes | ✅ Best for caching |

## Extract CSS (Content Hash)

\`\`\`javascript
new MiniCssExtractPlugin({
    filename: '[name].[contenthash:8].css'
})
\`\`\`

## Module IDs (Stable Hashing)

\`\`\`javascript
module.exports = {
    optimization: {
        moduleIds: 'deterministic',  // Stable IDs across builds
        chunkIds: 'deterministic',
        runtimeChunk: 'single'       // Extract runtime to separate file
    }
};
\`\`\`

## runtimeChunk

\`\`\`javascript
optimization: {
    runtimeChunk: 'single'  // Extract webpack runtime to separate file
}
// Runtime: webpack bootstrap code (changes rarely)
// Separating it prevents vendor chunk cache invalidation
\`\`\`

## Caching Strategy

\`\`\`
1. [contenthash] for output files
2. moduleIds: 'deterministic'
3. runtimeChunk: 'single'
4. MiniCssExtractPlugin with contenthash
5. Long cache headers in server (Cache-Control: max-age=31536000)
6. index.html: no-cache (always fresh)
\`\`\`

## Nginx Cache Config

\`\`\`nginx
# Static assets - cache forever
location ~* \\.[a-f0-9]{8}\\.(js|css|png|jpg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# HTML - never cache
location / {
    expires -1;
    add_header Cache-Control "no-cache";
}
\`\`\`
  `,

  quiz: [
    { question: "[contenthash]?", options: ["Build hash", "Content-based hash (best for caching)", "Chunk ID", "Name"], correctAnswer: 1 },
    { question: "runtimeChunk: 'single'?", options: ["No effect", "Extract runtime to separate file (better caching)", "Error", "More chunks"], correctAnswer: 1 }
  ],

  codeExamples: []
};