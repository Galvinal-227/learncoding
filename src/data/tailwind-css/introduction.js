export const chapter = {
  slug: "introduction",
  title: "Pengenalan Tailwind CSS",
  description: "Memahami Tailwind CSS dan keunggulannya dibanding framework CSS lainnya.",
  icon: "SiTailwindcss",
  color: "#06B6D4",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["tailwind", "css", "framework", "utility-first"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Tailwind CSS?

Tailwind CSS adalah framework CSS utility-first yang memungkinkan styling langsung di HTML menggunakan class utility.

## Keunggulan Tailwind

| Keunggulan | Deskripsi |
|------------|-----------|
| **Utility-First** | Style langsung di HTML |
| **Customizable** | Mudah dikustomisasi |
| **Responsive** | Built-in responsive |
| **Dark Mode** | Support dark mode |
| **Performance** | Purge unused CSS |
| **Consistency** | Design system terintegrasi |

## Utility-First vs Traditional

### Traditional CSS
\`\`\`css
/* styles.css */
.btn-primary {
    padding: 10px 20px;
    background: blue;
    color: white;
    border-radius: 4px;
}
.btn-primary:hover {
    background: darkblue;
}
\`\`\`

### Tailwind CSS
\`\`\`html
<button class="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
    Button
</button>
\`\`\`

## Core Concepts

### 1. Utility Classes
\`\`\`html
<!-- Spacing -->
<div class="p-4 m-2 w-1/2 h-16">...</div>

<!-- Typography -->
<h1 class="text-2xl font-bold text-gray-800">Title</h1>

<!-- Layout -->
<div class="flex items-center justify-between gap-4">...</div>
\`\`\`

### 2. Variants
\`\`\`html
<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-700">Hover me</button>

<!-- Focus -->
<input class="border focus:ring-2 focus:ring-blue-400">

<!-- Active -->
<button class="active:scale-95">Click me</button>
\`\`\`

### 3. Responsive
\`\`\`html
<!-- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    ...
</div>
\`\`\`

## Setup Cepat

\`\`\`bash
# Via CDN
<script src="https://cdn.tailwindcss.com"></script>

# Via npm
npm install -D tailwindcss
npx tailwindcss init

# Via PostCSS
# Add to postcss.config.js
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
}
\`\`\`

## Mengapa Memilih Tailwind?

1. **Produktivitas** - Styling lebih cepat
2. **Konsistensi** - Design system terpusat
3. **Maintainability** - Mudah di-maintain
4. **Performance** - Bundle size kecil
5. **Flexibility** - Mudah dikustomisasi
6. **Community** - Ekosistem besar
  `,
  quiz: [
    {
      question: "Apa filosofi utama Tailwind CSS?",
      options: [
        "Component-first",
        "Utility-first",
        "Semantic-first",
        "Atomic-first"
      ],
      correctAnswer: 1
    },
    {
      question: "Keunggulan Tailwind dibanding Bootstrap?",
      options: [
        "Lebih banyak komponen",
        "Utility-first approach",
        "Built-in JavaScript",
        "Database support"
      ],
      correctAnswer: 1
    },
    {
      question: "Class untuk membuat flex container di Tailwind adalah?",
      options: [
        "flex-container",
        "flex",
        "display-flex",
        "d-flex"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Tailwind vs Traditional CSS",
      code: `<!-- ============================================ -->
<!-- 1. Traditional CSS -->
<!-- ============================================ -->
<style>
    .card {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        padding: 20px;
        transition: all 0.3s ease;
    }
    .card:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        transform: translateY(-2px);
    }
    .card-title {
        font-size: 20px;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 8px;
    }
    .card-text {
        color: #666;
        line-height: 1.6;
    }
    .card-button {
        background: #3b82f6;
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.3s ease;
    }
    .card-button:hover {
        background: #2563eb;
    }
</style>

<div class="card">
    <h2 class="card-title">Traditional CSS</h2>
    <p class="card-text">This uses traditional CSS classes.</p>
    <button class="card-button">Click Me</button>
</div>

<!-- ============================================ -->
<!-- 2. Tailwind CSS -->
<!-- ============================================ -->
<div class="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <h2 class="text-xl font-semibold text-gray-900 mb-2">Tailwind CSS</h2>
    <p class="text-gray-600 leading-relaxed">This uses Tailwind utility classes.</p>
    <button class="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Click Me
    </button>
</div>

<!-- ============================================ -->
<!-- 3. Tailwind with Dark Mode -->
<!-- ============================================ -->
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 transition-colors">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dark Mode Support</h2>
    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">This card supports dark mode.</p>
    <button class="mt-3 bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700">
        Click Me
    </button>
</div>

<!-- ============================================ -->
<!-- 4. Responsive Grid -->
<!-- ============================================ -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-white p-4 rounded shadow">Item 1</div>
    <div class="bg-white p-4 rounded shadow">Item 2</div>
    <div class="bg-white p-4 rounded shadow">Item 3</div>
    <div class="bg-white p-4 rounded shadow">Item 4</div>
    <div class="bg-white p-4 rounded shadow">Item 5</div>
    <div class="bg-white p-4 rounded shadow">Item 6</div>
</div>`,
      language: "html"
    }
  ]
};