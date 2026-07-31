export const chapter = {
  slug: "components",
  title: "Components & Reuse",
  description: "Membuat komponen reusable di Tailwind CSS dengan @apply dan component classes.",
  icon: "SiTailwindcss",
  color: "#06B6D4",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["tailwind-introduction", "tailwind-installation"],
  tags: ["tailwind", "components", "reuse", "@apply"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Komponen di Tailwind

Ada beberapa cara membuat komponen reusable di Tailwind CSS.

## 1. @apply Directive

\`\`\`css
/* styles.css */
@layer components {
    .btn-primary {
        @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors;
    }
    
    .btn-secondary {
        @apply px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors;
    }
    
    .btn-danger {
        @apply px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors;
    }
    
    .card {
        @apply bg-white dark:bg-gray-800 rounded-lg shadow-md p-6;
    }
    
    .card-header {
        @apply text-xl font-bold text-gray-900 dark:text-white mb-2;
    }
    
    .card-body {
        @apply text-gray-600 dark:text-gray-300;
    }
}
\`\`\`

## 2. Component Classes

\`\`\`html
<!-- Use component classes -->
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
<button class="btn-danger">Danger Button</button>

<div class="card">
    <h3 class="card-header">Card Title</h3>
    <p class="card-body">Card content here</p>
</div>
\`\`\`

## 3. Component Variants

\`\`\`css
@layer components {
    .btn {
        @apply px-4 py-2 rounded-lg font-semibold transition-colors;
    }
    
    .btn-primary {
        @apply bg-blue-500 text-white hover:bg-blue-600;
    }
    
    .btn-secondary {
        @apply bg-gray-500 text-white hover:bg-gray-600;
    }
    
    .btn-outline {
        @apply bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white;
    }
    
    .btn-sm {
        @apply px-3 py-1 text-sm;
    }
    
    .btn-lg {
        @apply px-6 py-3 text-lg;
    }
}
\`\`\`

\`\`\`html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary btn-lg">Large Secondary</button>
<button class="btn btn-outline btn-sm">Small Outline</button>
\`\`\`

## 4. Component with Dark Mode

\`\`\`css
@layer components {
    .input {
        @apply w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent;
        @apply border-gray-300 dark:border-gray-600;
        @apply bg-white dark:bg-gray-700;
        @apply text-gray-900 dark:text-white;
    }
    
    .input-error {
        @apply border-red-500 dark:border-red-400 focus:ring-red-500;
    }
    
    .input-success {
        @apply border-green-500 dark:border-green-400 focus:ring-green-500;
    }
}
\`\`\`

\`\`\`html
<input class="input" placeholder="Normal input">
<input class="input input-error" placeholder="Error input">
<input class="input input-success" placeholder="Success input">
\`\`\`

## 5. Layout Components

\`\`\`css
@layer components {
    .container {
        @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
    }
    
    .section {
        @apply py-12 md:py-16 lg:py-20;
    }
    
    .grid-2 {
        @apply grid grid-cols-1 md:grid-cols-2 gap-6;
    }
    
    .grid-3 {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
    }
    
    .flex-center {
        @apply flex items-center justify-center;
    }
    
    .flex-between {
        @apply flex items-center justify-between;
    }
}
\`\`\`

## 6. Typography Components

\`\`\`css
@layer components {
    .heading-1 {
        @apply text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white;
    }
    
    .heading-2 {
        @apply text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white;
    }
    
    .heading-3 {
        @apply text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white;
    }
    
    .body-text {
        @apply text-gray-600 dark:text-gray-300 leading-relaxed;
    }
    
    .body-small {
        @apply text-sm text-gray-500 dark:text-gray-400;
    }
}
\`\`\`

## 7. Complex Components

\`\`\`css
@layer components {
    /* Modal */
    .modal-overlay {
        @apply fixed inset-0 bg-black/50 flex items-center justify-center z-50;
    }
    
    .modal-content {
        @apply bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4 p-6;
    }
    
    .modal-header {
        @apply flex justify-between items-center mb-4;
    }
    
    .modal-title {
        @apply text-xl font-bold text-gray-900 dark:text-white;
    }
    
    /* Alert */
    .alert {
        @apply p-4 rounded-lg border-l-4;
    }
    
    .alert-info {
        @apply bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-300;
    }
    
    .alert-success {
        @apply bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300;
    }
    
    .alert-warning {
        @apply bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 text-yellow-700 dark:text-yellow-300;
    }
    
    .alert-danger {
        @apply bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-300;
    }
}
\`\`\`

## 8. Responsive Components

\`\`\`css
@layer components {
    .hide-mobile {
        @apply hidden md:block;
    }
    
    .show-mobile {
        @apply block md:hidden;
    }
    
    .responsive-text {
        @apply text-sm md:text-base lg:text-lg;
    }
    
    .responsive-padding {
        @apply p-4 md:p-6 lg:p-8;
    }
}
\`\`\`

## Best Practices

1. **Gunakan @layer components** untuk grouping
2. **Buat komponen** yang reusable
3. **Gunakan variants** untuk variasi
4. **Buat naming** yang konsisten
5. **Tambahkan dark mode** support
6. **Dokumentasikan** komponen
7. **Hindari over-engineering** komponen
8. **Test di berbagai** ukuran layar
  `,
  quiz: [
    {
      question: "Directive untuk membuat komponen di Tailwind adalah?",
      options: [
        "@component",
        "@apply",
        "@use",
        "@include"
      ],
      correctAnswer: 1
    },
    {
      question: "Layer untuk komponen di Tailwind adalah?",
      options: [
        "@layer base",
        "@layer components",
        "@layer utilities",
        "@layer tailwind"
      ],
      correctAnswer: 1
    },
    {
      question: "Class untuk membuat container di Tailwind adalah?",
      options: [
        "container",
        "container-fluid",
        "max-w-7xl",
        "wrapper"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Component System",
      code: `/* ============================================ */
/* 1. styles.css - Component System */
/* ============================================ */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    /* ========== BUTTONS ========== */
    .btn {
        @apply inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200;
        @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
    }
    
    .btn-primary {
        @apply bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500;
    }
    
    .btn-secondary {
        @apply bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500;
    }
    
    .btn-success {
        @apply bg-green-500 text-white hover:bg-green-600 focus:ring-green-500;
    }
    
    .btn-danger {
        @apply bg-red-500 text-white hover:bg-red-600 focus:ring-red-500;
    }
    
    .btn-outline {
        @apply bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white;
    }
    
    .btn-sm {
        @apply px-3 py-1.5 text-sm;
    }
    
    .btn-lg {
        @apply px-6 py-3 text-lg;
    }
    
    /* ========== CARDS ========== */
    .card {
        @apply bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden;
    }
    
    .card-header {
        @apply px-6 py-4 border-b border-gray-200 dark:border-gray-700;
        @apply flex items-center justify-between;
    }
    
    .card-title {
        @apply text-lg font-semibold text-gray-900 dark:text-white;
    }
    
    .card-body {
        @apply px-6 py-4 text-gray-600 dark:text-gray-300;
    }
    
    .card-footer {
        @apply px-6 py-4 border-t border-gray-200 dark:border-gray-700;
        @apply flex items-center justify-end gap-2;
    }
    
    /* ========== FORMS ========== */
    .form-group {
        @apply mb-4;
    }
    
    .form-label {
        @apply block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1;
    }
    
    .form-input {
        @apply w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg;
        @apply bg-white dark:bg-gray-700 text-gray-900 dark:text-white;
        @apply focus:ring-2 focus:ring-blue-500 focus:border-transparent;
        @apply transition-colors duration-200;
    }
    
    .form-input-error {
        @apply border-red-500 dark:border-red-400 focus:ring-red-500;
    }
    
    .form-error {
        @apply text-sm text-red-500 dark:text-red-400 mt-1;
    }
    
    .form-help {
        @apply text-sm text-gray-500 dark:text-gray-400 mt-1;
    }
    
    /* ========== ALERTS ========== */
    .alert {
        @apply p-4 rounded-lg border-l-4 flex items-start gap-3;
    }
    
    .alert-info {
        @apply bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-300;
    }
    
    .alert-success {
        @apply bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300;
    }
    
    .alert-warning {
        @apply bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 text-yellow-700 dark:text-yellow-300;
    }
    
    .alert-danger {
        @apply bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-300;
    }
    
    .alert-icon {
        @apply w-5 h-5 flex-shrink-0 mt-0.5;
    }
    
    .alert-content {
        @apply flex-1;
    }
    
    .alert-title {
        @apply font-semibold;
    }
    
    .alert-message {
        @apply text-sm opacity-90;
    }
    
    /* ========== BADGES ========== */
    .badge {
        @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;
    }
    
    .badge-primary {
        @apply bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200;
    }
    
    .badge-success {
        @apply bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200;
    }
    
    .badge-warning {
        @apply bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200;
    }
    
    .badge-danger {
        @apply bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200;
    }
    
    /* ========== AVATAR ========== */
    .avatar {
        @apply rounded-full object-cover;
    }
    
    .avatar-sm {
        @apply w-8 h-8;
    }
    
    .avatar-md {
        @apply w-12 h-12;
    }
    
    .avatar-lg {
        @apply w-16 h-16;
    }
    
    .avatar-xl {
        @apply w-24 h-24;
    }
    
    /* ========== LOADING ========== */
    .spinner {
        @apply animate-spin rounded-full border-4 border-gray-200 border-t-blue-500;
        @apply w-8 h-8;
    }
    
    .spinner-sm {
        @apply w-4 h-4 border-2;
    }
    
    .spinner-lg {
        @apply w-12 h-12 border-4;
    }
}

/* ============================================ */
/* 2. HTML Usage Examples */
/* ============================================ */
<!-- 
// Buttons
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success btn-sm">Small Success</button>
<button class="btn btn-danger btn-lg">Large Danger</button>
<button class="btn btn-outline">Outline</button>

// Card
<div class="card">
    <div class="card-header">
        <h3 class="card-title">Card Title</h3>
        <span class="badge badge-primary">New</span>
    </div>
    <div class="card-body">
        This is the card body content.
    </div>
    <div class="card-footer">
        <button class="btn btn-secondary btn-sm">Cancel</button>
        <button class="btn btn-primary btn-sm">Save</button>
    </div>
</div>

// Form
<div class="form-group">
    <label class="form-label">Email</label>
    <input class="form-input" type="email" placeholder="Enter email">
    <p class="form-help">We'll never share your email.</p>
</div>

<div class="form-group">
    <label class="form-label">Password</label>
    <input class="form-input form-input-error" type="password">
    <p class="form-error">Password is required</p>
</div>

// Alert
<div class="alert alert-info">
    <svg class="alert-icon" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
    </svg>
    <div class="alert-content">
        <p class="alert-title">Information</p>
        <p class="alert-message">This is an info alert.</p>
    </div>
</div>

// Avatar
<img class="avatar avatar-lg" src="/avatar.jpg" alt="Avatar">

// Spinner
<div class="spinner"></div>
<div class="spinner spinner-sm"></div>
<div class="spinner spinner-lg"></div>
-->`,
      language: "css"
    }
  ]
};