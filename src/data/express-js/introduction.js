export const chapter = {
  slug: "express-js-introduction",
  title: "Pengenalan Express.js",
  description: "Pahami apa itu Express.js, kenapa jadi framework Node.js paling populer, dan cara memulai.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["node-js-introduction"],
  tags: ["express", "nodejs", "backend", "framework"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Express.js?

Express.js adalah **web framework minimalis dan fleksibel** untuk Node.js. Menyediakan fitur untuk membangun aplikasi web, REST API, dan mobile backend.

## Kenapa Express.js?

- ⚡ **Minimalis & Cepat** - Tidak opininated, kamu bebas struktur
- 🌍 **Paling Populer** - 60%+ aplikasi Node.js pakai Express
- 🧩 **Ekosistem Besar** - Ribuan middleware tersedia
- 📚 **Dokumentasi Lengkap** - Banyak tutorial & community support
- 🔧 **Fleksibel** - Bisa MVC, REST API, GraphQL, WebSocket

## Instalasi

\`\`\`bash
npm init -y
npm install express
\`\`\`

## Hello World

\`\`\`javascript
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(\`Server running at http://localhost:\${PORT}\`);
});
\`\`\`

## Express vs Framework Lain

| | Express | Fastify | Koa | NestJS |
|---|---------|---------|-----|--------|
| Filosofi | Minimalis | Cepat & Schema | Modern | Opinionated (MVC) |
| Popularitas | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| Learning Curve | Rendah | Rendah | Sedang | Tinggi |
| TypeScript | Manual | Built-in | Manual | Built-in |
| Cocok Untuk | Semua | High-performance | Modern apps | Enterprise |
  `,

  quiz: [
    { question: "Express.js adalah?", options: ["Database", "Web framework Node.js", "Frontend framework", "Testing tool"], correctAnswer: 1 },
    { question: "Express vs NestJS?", options: ["Sama", "Express: minimalis; NestJS: opinionated enterprise", "NestJS lebih kecil", "Express deprecated"], correctAnswer: 1 },
    { question: "Method untuk route GET?", options: ["app.post()", "app.get()", "app.put()", "app.delete()"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Express Hello World",
      language: "javascript",
      code: `import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Route
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!', timestamp: new Date() });
});

// Start server
app.listen(PORT, () => {
    console.log(\`Server running at http://localhost:\${PORT}\`);
});`
    }
  ]
};