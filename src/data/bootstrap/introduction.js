export const chapter = {
  slug: "bootstrap-introduction",
  title: "Pengenalan Bootstrap",
  description: "Pahami apa itu Bootstrap, kenapa populer, dan cara memulai.",
  icon: "SiBootstrap",
  color: "#7952B3",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["css-introduction"],
  tags: ["bootstrap", "css", "framework", "responsif"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Bootstrap?

Bootstrap adalah **framework CSS open-source** paling populer untuk membangun website responsif dan mobile-first dengan cepat. Dibuat oleh Twitter (Mark Otto & Jacob Thornton) tahun 2011.

## Kenapa Bootstrap?

- ⚡ **Cepat** - Prototype jadi dalam hitungan jam
- 📱 **Responsif** - Mobile-first grid system
- 🧩 **Komponen Lengkap** - Button, card, navbar, modal, dll
- 🎨 **Konsisten** - Design system terpadu
- 📚 **Dokumentasi Lengkap** - Banyak contoh dan tutorial
- 🌍 **Community Besar** - Banyak template dan resource

## Versi Bootstrap

| Versi | Tahun | Fitur Utama |
|-------|-------|-------------|
| Bootstrap 3 | 2013 | Flat design, mobile-first |
| Bootstrap 4 | 2018 | Flexbox, cards, SASS |
| **Bootstrap 5** | 2021 | **No jQuery**, vanilla JS, custom CSS vars |
| Bootstrap 5.3 | 2023 | Dark mode, color modes |

## Cara Install

### 1. CDN (Paling Cepat)
\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-primary">Hello Bootstrap!</h1>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
\`\`\`

### 2. NPM (Rekomendasi Project)
\`\`\`bash
npm install bootstrap
\`\`\`

\`\`\`javascript
// Import di JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Atau import SCSS untuk kustomisasi
import 'bootstrap/scss/bootstrap.scss';
\`\`\`

## Bootstrap vs Tailwind

| | Bootstrap | Tailwind |
|---|----------|----------|
| Filosofi | Component-first | Utility-first |
| Customization | Variables + SASS | Config file |
| Learning Curve | Rendah | Sedang-Tinggi |
| File Size | Lebih besar (bisa dipangkas) | Lebih kecil (purge) |
| Cocok Untuk | Cepat jadi, internal tools | Custom design |
  `,

  quiz: [
    { question: "Bootstrap 5 menghilangkan dependensi?", options: ["CSS", "jQuery", "JavaScript", "SASS"], correctAnswer: 1, explanation: "Bootstrap 5 tidak lagi bergantung pada jQuery. Semua plugin ditulis ulang dengan vanilla JavaScript." },
    { question: "2 cara install Bootstrap?", options: ["npm & CDN", "gem & pip", "composer & brew", "docker & k8s"], correctAnswer: 0 },
    { question: "Bootstrap cocok untuk?", options: ["Semua website", "Prototype cepat, admin panel, internal tools", "Hanya mobile", "Hanya desktop"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Bootstrap Starter Template",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5 Starter</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container py-5">
        <h1 class="display-4 text-primary">🚀 Hello Bootstrap!</h1>
        <p class="lead">Framework CSS paling populer di dunia.</p>
        <button class="btn btn-primary btn-lg">Get Started</button>
        <button class="btn btn-outline-secondary btn-lg ms-2">Learn More</button>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    }
  ]
};