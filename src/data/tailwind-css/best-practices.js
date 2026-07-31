export const chapter = {
  slug: "best-practices",
  title: "Best Practices",
  description: "Best practices dalam menggunakan Tailwind CSS untuk project yang maintainable.",
  icon: "SiTailwindcss",
  color: "#06B6D4",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["tailwind-introduction"],
  tags: ["tailwind", "best-practices", "maintainable"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Best Practices Tailwind CSS

## 1. Organisasi Class

### Group Classes by Function
\`\`\`html
<!-- ✅ Good -->
<div class="
    /* Layout */
    flex items-center justify-between
    /* Spacing */
    p-4 gap-4
    /* Appearance */
    bg-white rounded-lg shadow-md
    /* Typography */
    text-gray-800
    /* Responsive */
    md:flex-col lg:p-6
">
    ...
</div>

<!-- ❌ Bad -->
<div class="flex items-center justify-between p-4 gap-4 bg-white rounded-lg shadow-md text-gray-800 md:flex-col lg:p-6">
    ...
</div>
\`\`\`

## 2. Konsistensi

### Gunakan Design Tokens
\`\`\`html
<!-- ✅ Use design tokens -->
<div class="text-primary-500 bg-primary-50 border-primary-200">
    Consistent colors
</div>

<!-- ❌ Hardcoded colors -->
<div class="text-blue-500 bg-blue-50 border-blue-200">
    Inconsistent
</div>
\`\`\`

## 3. Component Extraction

### Gunakan @apply untuk Pattern Berulang
\`\`\`css
@layer components {
    .btn-primary {
        @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors;
    }
    
    .card {
        @apply bg-white rounded-lg shadow-md p-6 dark:bg-gray-800;
    }
}
\`\`\`

## 4. Responsive Design

### Mobile First
\`\`\`html
<!-- ✅ Mobile first -->
<div class="
    text-sm    /* Mobile */
    md:text-base /* Tablet */
    lg:text-lg   /* Desktop */
">
    Responsive text
</div>

<!-- ❌ Desktop first -->
<div class="
    text-lg    /* Desktop */
    md:text-base /* Tablet */
    sm:text-sm   /* Mobile */
">
    Harder to maintain
</div>
\`\`\`

## 5. Dark Mode

### Gunakan dark: prefix
\`\`\`html
<div class="
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-white
    border-gray-200 dark:border-gray-700
">
    Dark mode ready
</div>
\`\`\`

## 6. Customization

### Extend Theme
\`\`\`javascript
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#FF4785',
                    light: '#FF6B9D',
                    dark: '#E63E6C'
                }
            }
        }
    }
};
\`\`\`

## 7. Performance

### Purge Unused CSS
\`\`\`javascript
module.exports = {
    content: [
        './src/**/*.{html,js,jsx,ts,tsx,vue}',
        './public/**/*.html'
    ]
};
\`\`\`

## 8. Documentation

### Tambahkan Komentar
\`\`\`html
<!-- Hero Section -->
<section class="py-20 bg-gradient-to-br from-blue-500 to-purple-600">
    <div class="container mx-auto px-4">
        ...
    </div>
</section>
\`\`\`

## 9. Folder Structure

\`\`\`
src/
├── styles/
│   ├── base.css
│   ├── components.css
│   └── utilities.css
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   └── ...
└── ...
\`\`\`

## 10. Reusable Components

### Buat Component Library
\`\`\`jsx
// Button.jsx
export const Button = ({ 
    variant = 'primary', 
    size = 'md',
    children,
    ...props 
}) => {
    const className = \`btn btn-\${variant} btn-\${size}\`;
    
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};
\`\`\`

## 11. Avoid Over-Nesting

### Jangan Terlalu Dalam
\`\`\`html
<!-- ✅ Better -->
<div class="grid grid-cols-3 gap-4">
    <div class="p-4 bg-white rounded shadow">Item</div>
</div>

<!-- ❌ Too nested -->
<div class="container">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">Item</div>
            </div>
        </div>
    </div>
</div>
\`\`\`

## 12. State Management

### Gunakan State Variants
\`\`\`html
<button class="
    bg-blue-500 
    hover:bg-blue-600 
    focus:ring-2 focus:ring-blue-500
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed
">
    Button
</button>
\`\`\`

## 13. Performance Tips

1. **Minimize CSS** with purge
2. **Use CDN** for development
3. **Optimize images** with next/image
4. **Lazy load** components
5. **Use CSS variables** for theming
6. **Avoid inline styles** when possible
7. **Use CSS grid** instead of flex for layouts
8. **Limit animations** for performance

## 14. Common Mistakes to Avoid

### ❌ Jangan Lakukan Ini
\`\`\`html
<!-- 1. Terlalu banyak class -->
<div class="flex items-center justify-center p-4 m-2 bg-white rounded-lg shadow-md border border-gray-200 text-gray-800 hover:shadow-lg transition-shadow duration-300">
    Too many classes
</div>

<!-- 2. Inline styles -->
<div style="color: blue; padding: 20px;">
    Bad practice
</div>

<!-- 3. Hardcoded colors -->
<div class="text-[#FF4785] bg-[#FFF0F5]">
    Hardcoded
</div>
\`\`\`

### ✅ Yang Benar
\`\`\`html
<!-- 1. Group classes -->
<div class="
    flex items-center justify-center
    p-4 m-2
    bg-white rounded-lg shadow-md border border-gray-200
    text-gray-800
    hover:shadow-lg transition-shadow duration-300
">
    Clean
</div>

<!-- 2. Use Tailwind classes -->
<div class="text-blue-500 p-5">
    Better
</div>

<!-- 3. Use theme colors -->
<div class="text-brand bg-brand-light">
    Custom theme
</div>
\`\`\`

## 15. Checklist

- [ ] Gunakan mobile-first approach
- [ ] Group classes by function
- [ ] Gunakan @apply untuk pattern berulang
- [ ] Extend theme untuk design tokens
- [ ] Gunakan dark: prefix untuk dark mode
- [ ] Purge unused CSS untuk production
- [ ] Buat reusable components
- [ ] Dokumentasikan komponen
- [ ] Test di berbagai device
- [ ] Optimasi performance
  `,
  quiz: [
    {
      question: "Best practice untuk responsive design di Tailwind adalah?",
      options: [
        "Desktop first",
        "Mobile first",
        "Tablet first",
        "All at once"
      ],
      correctAnswer: 1
    },
    {
      question: "Untuk pattern berulang sebaiknya menggunakan?",
      options: [
        "Inline styles",
        "@apply",
        "JavaScript",
        "Hardcoded"
      ],
      correctAnswer: 1
    },
    {
      question: "Untuk dark mode menggunakan prefix?",
      options: [
        "night:",
        "dark:",
        "dm:",
        "dark-mode:"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Best Practices Example",
      code: `<!-- ============================================ -->
<!-- Complete Best Practices Example -->
<!-- ============================================ -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Best Practices</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* @layer components */
        @layer components {
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
            
            .btn-sm {
                @apply px-3 py-1.5 text-sm;
            }
            
            .btn-lg {
                @apply px-6 py-3 text-lg;
            }
            
            .card {
                @apply bg-white dark:bg-gray-800 rounded-lg shadow-md p-6;
            }
            
            .card-title {
                @apply text-xl font-bold text-gray-900 dark:text-white mb-2;
            }
            
            .card-text {
                @apply text-gray-600 dark:text-gray-300;
            }
            
            .input {
                @apply w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg;
                @apply bg-white dark:bg-gray-700 text-gray-900 dark:text-white;
                @apply focus:ring-2 focus:ring-blue-500 focus:border-transparent;
            }
        }
    </style>
</head>
<body class="bg-gray-50 dark:bg-gray-900">
    
    <!-- ========================================== -->
    <!-- 1. Component dengan Grouped Classes -->
    <!-- ========================================== -->
    <div class="container mx-auto px-4 py-8">
        
        <!-- Card Component -->
        <div class="
            card
            max-w-md mx-auto
            hover:shadow-lg transition-shadow
        ">
            <h3 class="card-title">Best Practices Card</h3>
            <p class="card-text">
                This card follows Tailwind best practices:
                grouped classes, dark mode support, and clean structure.
            </p>
            <div class="mt-4 flex gap-2">
                <button class="btn btn-primary btn-sm">Action</button>
                <button class="btn btn-secondary btn-sm">Cancel</button>
            </div>
        </div>
        
        <!-- ========================================== -->
        <!-- 2. Form dengan Best Practices -->
        <!-- ========================================== -->
        <div class="
            max-w-md mx-auto mt-8
            bg-white dark:bg-gray-800
            rounded-lg shadow-md p-6
        ">
            <h3 class="
                text-lg font-semibold 
                text-gray-900 dark:text-white 
                mb-4
            ">
                Contact Form
            </h3>
            
            <div class="space-y-4">
                <div>
                    <label class="
                        block text-sm font-medium
                        text-gray-700 dark:text-gray-300
                        mb-1
                    ">
                        Name
                    </label>
                    <input type="text" class="input" placeholder="Your name">
                </div>
                
                <div>
                    <label class="
                        block text-sm font-medium
                        text-gray-700 dark:text-gray-300
                        mb-1
                    ">
                        Email
                    </label>
                    <input type="email" class="input" placeholder="your@email.com">
                </div>
                
                <div>
                    <label class="
                        block text-sm font-medium
                        text-gray-700 dark:text-gray-300
                        mb-1
                    ">
                        Message
                    </label>
                    <textarea rows="3" class="input" placeholder="Your message"></textarea>
                </div>
                
                <button class="
                    btn btn-primary w-full
                    py-3 text-base
                ">
                    Send Message
                </button>
            </div>
        </div>
        
        <!-- ========================================== -->
        <!-- 3. Responsive Grid -->
        <!-- ========================================== -->
        <div class="mt-8">
            <h3 class="
                text-xl font-bold text-gray-900 dark:text-white 
                text-center mb-6
            ">
                Responsive Grid
            </h3>
            
            <div class="
                grid grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-4
            ">
                <div class="
                    bg-white dark:bg-gray-800
                    p-4 rounded-lg shadow
                    hover:shadow-lg transition-shadow
                ">
                    <h4 class="font-semibold text-gray-900 dark:text-white">Card 1</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Responsive card that adapts to all screen sizes.
                    </p>
                </div>
                
                <div class="
                    bg-white dark:bg-gray-800
                    p-4 rounded-lg shadow
                    hover:shadow-lg transition-shadow
                ">
                    <h4 class="font-semibold text-gray-900 dark:text-white">Card 2</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Responsive card that adapts to all screen sizes.
                    </p>
                </div>
                
                <div class="
                    bg-white dark:bg-gray-800
                    p-4 rounded-lg shadow
                    hover:shadow-lg transition-shadow
                ">
                    <h4 class="font-semibold text-gray-900 dark:text-white">Card 3</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Responsive card that adapts to all screen sizes.
                    </p>
                </div>
            </div>
        </div>
        
        <!-- ========================================== -->
        <!-- 4. Alert Components -->
        <!-- ========================================== -->
        <div class="mt-8 space-y-3">
            <div class="
                p-4 rounded-lg border-l-4
                bg-blue-50 dark:bg-blue-900/20 
                border-blue-500
                text-blue-700 dark:text-blue-300
                flex items-start gap-3
            ">
                <span class="text-xl">ℹ️</span>
                <div>
                    <p class="font-semibold">Information</p>
                    <p class="text-sm opacity-90">This is an informational message.</p>
                </div>
            </div>
            
            <div class="
                p-4 rounded-lg border-l-4
                bg-green-50 dark:bg-green-900/20 
                border-green-500
                text-green-700 dark:text-green-300
                flex items-start gap-3
            ">
                <span class="text-xl">✅</span>
                <div>
                    <p class="font-semibold">Success</p>
                    <p class="text-sm opacity-90">Operation completed successfully.</p>
                </div>
            </div>
            
            <div class="
                p-4 rounded-lg border-l-4
                bg-yellow-50 dark:bg-yellow-900/20 
                border-yellow-500
                text-yellow-700 dark:text-yellow-300
                flex items-start gap-3
            ">
                <span class="text-xl">⚠️</span>
                <div>
                    <p class="font-semibold">Warning</p>
                    <p class="text-sm opacity-90">Please review your input.</p>
                </div>
            </div>
            
            <div class="
                p-4 rounded-lg border-l-4
                bg-red-50 dark:bg-red-900/20 
                border-red-500
                text-red-700 dark:text-red-300
                flex items-start gap-3
            ">
                <span class="text-xl">❌</span>
                <div>
                    <p class="font-semibold">Error</p>
                    <p class="text-sm opacity-90">Something went wrong.</p>
                </div>
            </div>
        </div>
        
    </div>
    
    <footer class="mt-12 py-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div class="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
            Built with ❤️ using Tailwind CSS Best Practices
        </div>
    </footer>
</body>
</html>`,
      language: "html"
    }
  ]
};