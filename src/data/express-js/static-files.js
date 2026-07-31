export const chapter = {
  slug: "express-js-static-files",
  title: "Static Files",
  description: "Serve static files (HTML, CSS, JS, images) dengan Express.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["express-js-introduction"],
  tags: ["express", "static", "files", "public"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## express.static()

\`\`\`javascript
// Serve folder 'public'
app.use(express.static('public'));

// Akses: http://localhost:3000/style.css → public/style.css
// Akses: http://localhost:3000/images/logo.png → public/images/logo.png
\`\`\`

## Virtual Path Prefix

\`\`\`javascript
app.use('/static', express.static('public'));
// Akses: http://localhost:3000/static/style.css
\`\`\`

## Multiple Folders

\`\`\`javascript
app.use(express.static('public'));
app.use(express.static('uploads'));
\`\`\`

## Production: Cache Control

\`\`\`javascript
app.use(express.static('public', {
    maxAge: '1d',              // Cache 1 hari
    etag: true,                // ETag untuk cache validation
    lastModified: true,
    setHeaders: (res, path) => {
        if (path.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
        }
    }
}));
\`\`\`
  `,

  quiz: [
    { question: "Middleware static files?", options: ["express.static()", "app.static()", "express.files()", "app.serve()"], correctAnswer: 0 },
    { question: "maxAge untuk?", options: ["Debug", "Cache header (optimasi)", "Upload limit", "Timeout"], correctAnswer: 1 }
  ],

  codeExamples: []
};