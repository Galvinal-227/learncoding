export const chapter = {
  slug: "responsive-design",
  title: "Responsive Design",
  description: "Membuat design responsif dengan Tailwind CSS menggunakan breakpoints.",
  icon: "SiTailwindcss",
  color: "#06B6D4",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["tailwind-introduction", "tailwind-installation"],
  tags: ["tailwind", "responsive", "breakpoints", "mobile-first"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Breakpoints Default

| Breakpoint | Prefix | Width |
|------------|--------|-------|
| Small | sm | 640px |
| Medium | md | 768px |
| Large | lg | 1024px |
| XL | xl | 1280px |
| 2XL | 2xl | 1536px |

## Penggunaan Responsive

### Basic Responsive
\`\`\`html
<!-- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    ...
</div>

<!-- Mobile: small text, Desktop: large text -->
<p class="text-sm lg:text-lg">Responsive text</p>

<!-- Hide on mobile, show on desktop -->
<div class="hidden lg:block">Desktop only</div>
<div class="block lg:hidden">Mobile only</div>
\`\`\`

### Mobile-First Approach
\`\`\`html
<!-- Default: mobile, then scale up -->
<div class="
    p-4           /* Mobile */
    md:p-6        /* Tablet */
    lg:p-8        /* Desktop */
    xl:p-12       /* Large desktop */
">
    ...
</div>
\`\`\`

## Layout Responsive

### Grid
\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="col-span-1 md:col-span-2">Wide on tablet</div>
    <div class="col-span-1">Normal</div>
    <div class="col-span-1">Normal</div>
</div>
\`\`\`

### Flexbox
\`\`\`html
<div class="flex flex-col md:flex-row gap-4">
    <div class="flex-1">Item 1</div>
    <div class="flex-1">Item 2</div>
    <div class="flex-1">Item 3</div>
</div>
\`\`\`

### Container
\`\`\`html
<div class="container mx-auto px-4">
    <div class="max-w-7xl">...</div>
</div>
\`\`\`

## Typography Responsive

\`\`\`html
<!-- Font sizes -->
<h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
    Responsive Heading
</h1>

<!-- Line height -->
<p class="leading-relaxed md:leading-loose">
    Responsive line height
</p>

<!-- Text alignment -->
<p class="text-center md:text-left">
    Centered on mobile, left on desktop
</p>
\`\`\`

## Spacing Responsive

\`\`\`html
<!-- Padding -->
<div class="p-4 md:p-6 lg:p-8">
    Responsive padding
</div>

<!-- Margin -->
<div class="m-2 md:m-4 lg:m-6">
    Responsive margin
</div>

<!-- Gap -->
<div class="gap-2 md:gap-4 lg:gap-6">
    ...
</div>
\`\`\`

## Visibility Responsive

\`\`\`html
<!-- Hide/Show -->
<div class="hidden md:block">Tablet and above</div>
<div class="block md:hidden">Mobile only</div>

<!-- Inline -->
<div class="inline-block md:inline-flex">
    Responsive display
</div>

<!-- Overflow -->
<div class="overflow-hidden md:overflow-visible">
    ...
</div>
\`\`\`

## Custom Breakpoints

\`\`\`javascript
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            screens: {
                'xs': '475px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
                '3xl': '1920px',
                'tablet': '768px',
                'desktop': '1024px'
            }
        }
    }
};
\`\`\`

## Contoh Lengkap

\`\`\`html
<!-- Responsive Hero Section -->
<section class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
    <div class="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <!-- Left Content -->
            <div class="flex-1 text-center md:text-left">
                <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    Build Better <br class="hidden sm:block">
                    <span class="text-yellow-300">Websites</span>
                </h1>
                <p class="mt-4 text-lg md:text-xl text-white/90 max-w-xl mx-auto md:mx-0">
                    Create stunning websites with Tailwind CSS. Responsive, fast, and customizable.
                </p>
                <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                    <button class="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
            
            <!-- Right Image -->
            <div class="flex-1 flex justify-center">
                <div class="w-full max-w-md aspect-square bg-white/20 rounded-2xl flex items-center justify-center text-white text-xl">
                    Image Placeholder
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Responsive Card Grid -->
<div class="container mx-auto px-4 py-12">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Features</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 class="text-lg font-semibold">Feature 1</h3>
            <p class="text-gray-600 mt-2">Description of feature 1</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 class="text-lg font-semibold">Feature 2</h3>
            <p class="text-gray-600 mt-2">Description of feature 2</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 class="text-lg font-semibold">Feature 3</h3>
            <p class="text-gray-600 mt-2">Description of feature 3</p>
        </div>
    </div>
</div>
\`\`\`

## Best Practices

1. **Mobile First** - Desain untuk mobile dulu
2. **Use Responsive Prefixes** - sm:, md:, lg:, xl:
3. **Consistent Spacing** - Gunakan spacing scale
4. **Test on Real Devices** - Jangan hanya di browser
5. **Use Container** - Untuk layout
6. **Optimize Images** - srcset dan sizes
7. **Hide/Show Wisely** - Jangan terlalu banyak
8. **Typography Scale** - Gunakan scale yang konsisten
  `,
  quiz: [
    {
      question: "Breakpoint untuk tablet di Tailwind adalah?",
      options: [
        "sm",
        "md",
        "lg",
        "xl"
      ],
      correctAnswer: 1
    },
    {
      question: "Prefix untuk desktop di Tailwind adalah?",
      options: [
        "sm:",
        "md:",
        "lg:",
        "xl:"
      ],
      correctAnswer: 2
    },
    {
      question: "Untuk menyembunyikan elemen di mobile menggunakan?",
      options: [
        "hidden",
        "hidden sm:block",
        "block sm:hidden",
        "hidden md:block"
      ],
      correctAnswer: 3
    }
  ],
  codeExamples: [
    {
      title: "Complete Responsive Layout",
      code: `<!-- ============================================ -->
<!-- Complete Responsive Layout -->
<!-- ============================================ -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Layout</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- Navbar -->
    <nav class="bg-white shadow-md fixed w-full top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="text-xl font-bold text-gray-800">Logo</div>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex space-x-8">
                    <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
                </div>
                
                <!-- Mobile Menu Button -->
                <button class="md:hidden text-gray-600 hover:text-gray-900">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-20 min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <div class="container mx-auto px-4 py-16">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="flex-1 text-center lg:text-left">
                    <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                        Build Amazing <br class="hidden sm:block">
                        <span class="text-yellow-300">Websites</span>
                    </h1>
                    <p class="mt-4 text-lg sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
                        Create beautiful, responsive websites quickly with Tailwind CSS.
                    </p>
                    <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Get Started
                        </button>
                        <button class="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
                            Learn More
                        </button>
                    </div>
                </div>
                <div class="flex-1 flex justify-center">
                    <div class="w-full max-w-md bg-white/20 rounded-2xl p-8 backdrop-blur-sm">
                        <div class="bg-white rounded-lg p-6 shadow-xl">
                            <h3 class="text-lg font-semibold text-gray-800">Card Preview</h3>
                            <p class="text-gray-600 mt-2">This card adapts to all screen sizes.</p>
                            <button class="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                                Try it
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Grid -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl sm:text-3xl font-bold text-center mb-4">Features</h2>
            <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Everything you need to build modern websites
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <!-- Feature Cards -->
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold">Fast</h3>
                    <p class="text-gray-600 mt-2">Lightning fast performance</p>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold">Reliable</h3>
                    <p class="text-gray-600 mt-2">Trusted by developers</p>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold">Customizable</h3>
                    <p class="text-gray-600 mt-2">Flexible and extensible</p>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold">Documented</h3>
                    <p class="text-gray-600 mt-2">Great documentation</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2024 Your Company</p>
                <div class="flex gap-4 mt-4 md:mt-0">
                    <a href="#" class="hover:text-gray-300">Privacy</a>
                    <a href="#" class="hover:text-gray-300">Terms</a>
                    <a href="#" class="hover:text-gray-300">Contact</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`,
      language: "html"
    }
  ]
};