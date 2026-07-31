export const chapter = {
  slug: "dark-mode",
  title: "Dark Mode",
  description: "Mengimplementasikan dark mode di Tailwind CSS.",
  icon: "SiTailwindcss",
  color: "#06B6D4",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["tailwind-introduction", "tailwind-installation"],
  tags: ["tailwind", "dark-mode", "theme", "color"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Dark Mode di Tailwind

Tailwind mendukung dark mode dengan class \`dark:\` untuk styling dalam mode gelap.

## Setup Dark Mode

### 1. Configuration
\`\`\`javascript
// tailwind.config.js
module.exports = {
    darkMode: 'class', // or 'media'
    // ...
};
\`\`\`

### 2. Toggle Dark Mode
\`\`\`html
<html class="dark">
    <!-- Dark mode enabled -->
</html>

<html>
    <!-- Light mode (default) -->
</html>
\`\`\`

### 3. JavaScript Toggle
\`\`\`javascript
// Toggle dark mode
const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
};

// Check stored preference
if (localStorage.theme === 'dark' || 
    (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}
\`\`\`

## Dark Mode Utilities

### Background
\`\`\`html
<div class="bg-white dark:bg-gray-800">
    <!-- White in light mode, dark in dark mode -->
</div>
\`\`\`

### Text
\`\`\`html
<h1 class="text-gray-900 dark:text-white">
    Dark mode text
</h1>
<p class="text-gray-600 dark:text-gray-300">
    Gray text that adapts
</p>
\`\`\`

### Border
\`\`\`html
<div class="border-gray-200 dark:border-gray-700">
    Border that adapts
</div>
\`\`\`

### Shadow
\`\`\`html
<div class="shadow-md dark:shadow-gray-800">
    Shadow that adapts
</div>
\`\`\`

## Dark Mode Components

### Card
\`\`\`html
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Card Title</h3>
    <p class="text-gray-600 dark:text-gray-300 mt-2">Card content that adapts to dark mode.</p>
    <button class="mt-4 px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700">
        Button
    </button>
</div>
\`\`\`

### Navbar
\`\`\`html
<nav class="bg-white dark:bg-gray-900 shadow-md">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
            <span class="text-gray-900 dark:text-white font-bold">Logo</span>
            <button class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Dark Mode Toggle
            </button>
        </div>
    </div>
</nav>
\`\`\`

### Input
\`\`\`html
<input class="
    w-full px-3 py-2 
    border border-gray-300 dark:border-gray-600 
    bg-white dark:bg-gray-700 
    text-gray-900 dark:text-white 
    rounded-lg 
    focus:ring-2 focus:ring-blue-500 
    dark:focus:ring-blue-400 
    focus:border-transparent
">
\`\`\`

## Dark Mode in Tailwind Config

\`\`\`javascript
module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Both light and dark
                primary: {
                    light: '#3b82f6',
                    dark: '#60a5fa'
                }
            }
        }
    }
};
\`\`\`

## Toggle Component

\`\`\`html
<!-- Dark Mode Toggle Button -->
<button 
    onclick="toggleDarkMode()" 
    class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
>
    <span class="dark:hidden">🌙</span>
    <span class="hidden dark:inline">☀️</span>
</button>

<script>
function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
}
</script>
\`\`\`

## System Preference

\`\`\`javascript
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Apply initial theme
if (prefersDark.matches) {
    document.documentElement.classList.add('dark');
}

// Listen for changes
prefersDark.addEventListener('change', (e) => {
    if (e.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});
\`\`\`

## Best Practices

1. **Use dark: prefix** untuk semua warna
2. **Test both modes** regularly
3. **Store user preference** in localStorage
4. **Respect system preference** as default
5. **Use semantic colors** (e.g., text-primary)
6. **Avoid hardcoded colors** for text
7. **Add smooth transitions** for mode change
8. **Test contrast** in both modes
  `,
  quiz: [
    {
      question: "Prefix untuk dark mode di Tailwind adalah?",
      options: [
        "dark:",
        "night:",
        "dark-mode:",
        "dm:"
      ],
      correctAnswer: 0
    },
    {
      question: "Konfigurasi dark mode di tailwind.config.js adalah?",
      options: [
        "darkMode: 'class'",
        "mode: 'dark'",
        "theme: 'dark'",
        "dark: true"
      ],
      correctAnswer: 0
    },
    {
      question: "Untuk toggle dark mode menggunakan JavaScript adalah?",
      options: [
        "document.documentElement.toggle('dark')",
        "document.documentElement.classList.toggle('dark')",
        "document.body.toggle('dark')",
        "document.toggle('dark')"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Dark Mode Setup",
      code: `<!-- ============================================ -->
<!-- Dark Mode Complete Example -->
<!-- ============================================ -->
<!DOCTYPE html>
<html lang="id" class="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        // Initial theme
        if (localStorage.theme === 'dark' || 
            (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    </script>
</head>
<body class="bg-white dark:bg-gray-900 transition-colors duration-300">
    
    <!-- Navbar -->
    <nav class="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 z-50 transition-colors duration-300">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <span class="text-xl font-bold text-gray-900 dark:text-white">Logo</span>
                
                <div class="flex items-center gap-4">
                    <!-- Theme Toggle -->
                    <button onclick="toggleTheme()" 
                            class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <span class="dark:hidden">🌙</span>
                        <span class="hidden dark:inline">☀️</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    
    <!-- Hero Section -->
    <section class="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div class="container mx-auto px-4 py-16">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Dark Mode <span class="text-blue-500 dark:text-blue-400">Tailwind</span>
                </h1>
                <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Seamless dark mode integration with Tailwind CSS
                </p>
                <button class="mt-8 px-8 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                    Get Started
                </button>
            </div>
        </div>
    </section>
    
    <!-- Cards Section -->
    <section class="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">Features</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Card 1 -->
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Light/Dark</h3>
                    <p class="text-gray-600 dark:text-gray-300 mt-2">Seamlessly switch between themes</p>
                </div>
                
                <!-- Card 2 -->
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Customizable</h3>
                    <p class="text-gray-600 dark:text-gray-300 mt-2">Easy to customize colors</p>
                </div>
                
                <!-- Card 3 -->
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Responsive</h3>
                    <p class="text-gray-600 dark:text-gray-300 mt-2">Works on all devices</p>
                </div>
            </div>
        </div>
    </section>
    
    <script>
        function toggleTheme() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                html.classList.add('dark');
                localStorage.theme = 'dark';
            }
        }
    </script>
</body>
</html>`,
      language: "html"
    }
  ]
};