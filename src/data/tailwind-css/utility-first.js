export const chapter = {
  slug: "utility-first",
  title: "Utility-First Philosophy",
  description: "Memahami dan mengimplementasikan pendekatan utility-first di Tailwind CSS.",
  icon: "SiTailwindcss",
  color: "#06B6D4",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["tailwind-introduction", "tailwind-installation"],
  tags: ["tailwind", "utility-first", "css", "design"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Utility-First Philosophy

Pendekatan utility-first berarti menggunakan class kecil, single-purpose untuk styling langsung di HTML.

## Core Utilities

### 1. Layout
\`\`\`html
<!-- Display -->
<div class="block hidden inline inline-block flex grid">...</div>

<!-- Position -->
<div class="relative absolute fixed sticky">...</div>

<!-- Top / Right / Bottom / Left -->
<div class="top-0 right-0 bottom-0 left-0">...</div>
\`\`\`

### 2. Flexbox
\`\`\`html
<div class="flex flex-col flex-wrap justify-center items-center gap-4">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
\`\`\`

### 3. Grid
\`\`\`html
<div class="grid grid-cols-3 gap-4">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
\`\`\`

### 4. Spacing
\`\`\`html
<!-- Padding -->
<div class="p-4 px-6 py-2 pt-4 pb-4 pl-4 pr-4">...</div>

<!-- Margin -->
<div class="m-4 mx-auto my-2 mt-4 mb-4 ml-4 mr-4">...</div>

<!-- Width / Height -->
<div class="w-full w-1/2 h-16 h-screen max-w-lg min-h-screen">...</div>
\`\`\`

### 5. Typography
\`\`\`html
<!-- Font Size -->
<h1 class="text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl">...</h1>

<!-- Font Weight -->
<p class="font-thin font-light font-normal font-medium font-semibold font-bold">...</p>

<!-- Text Color -->
<p class="text-gray-500 text-blue-600 text-red-700">...</p>

<!-- Text Alignment -->
<p class="text-left text-center text-right text-justify">...</p>
\`\`\`

### 6. Background
\`\`\`html
<div class="bg-white bg-gray-100 bg-blue-500 bg-gradient-to-r from-blue-500 to-purple-500">
    ...
</div>
\`\`\`

### 7. Borders
\`\`\`html
<div class="border border-2 border-4 border-gray-300 border-blue-500 rounded rounded-lg rounded-full">
    ...
</div>
\`\`\`

### 8. Shadows
\`\`\`html
<div class="shadow-sm shadow shadow-md shadow-lg shadow-xl shadow-2xl shadow-inner">
    ...
</div>
\`\`\`

## Keuntungan Utility-First

### 1. No More CSS Files
\`\`\`html
<!-- No need to switch between HTML and CSS -->
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
    <h2 class="text-xl font-bold">Title</h2>
    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Button
    </button>
</div>
\`\`\`

### 2. Consistensi
\`\`\`html
<!-- Same spacing everywhere -->
<div class="p-4">Same padding</div>
<div class="p-4">Same padding</div>
<div class="p-4">Same padding</div>
\`\`\`

### 3. No Naming
\`\`\`html
<!-- No need to think of class names -->
<div class="flex items-center gap-4">
    <!-- Instead of .card-container .card-item .card-title -->
</div>
\`\`\`

### 4. Maintainability
\`\`\`html
<!-- Changes are localized -->
<button class="bg-blue-500 hover:bg-blue-700">
    <!-- Change color here only -->
</button>
\`\`\`

## Membandingkan Pendekatan

### Traditional CSS
\`\`\`css
/* styles.css */
.card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.card-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
}
.card-text {
    color: #666;
    line-height: 1.6;
}
\`\`\`

\`\`\`html
<div class="card">
    <h2 class="card-title">Title</h2>
    <p class="card-text">Content</p>
</div>
\`\`\`

### Tailwind CSS
\`\`\`html
<div class="bg-white rounded-lg p-5 shadow">
    <h2 class="text-xl font-semibold mb-2">Title</h2>
    <p class="text-gray-600 leading-relaxed">Content</p>
</div>
\`\`\`

## Kapan Menggunakan @apply

\`\`\`css
/* Use @apply for repeated patterns */
.btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors;
}

.card {
    @apply bg-white rounded-lg shadow-md p-6;
}
\`\`\`

\`\`\`html
<button class="btn-primary">Button</button>
<div class="card">Content</div>
\`\`\`

## Tips Menggunakan Utility Classes

1. **Mulai dengan utility** di HTML
2. **Gunakan @apply** untuk pattern berulang
3. **Manfaatkan responsive variants**
4. **Gunakan dark mode** variants
5. **Group classes** dengan logika
6. **Jangan takut** dengan banyak class
  `,
  quiz: [
    {
      question: "Class flex di Tailwind digunakan untuk?",
      options: [
        "Display flex",
        "Flex container",
        "Flex item",
        "Flex direction"
      ],
      correctAnswer: 1
    },
    {
      question: "Class untuk shadow di Tailwind adalah?",
      options: [
        "shadow",
        "box-shadow",
        "shadow-box",
        "drop-shadow"
      ],
      correctAnswer: 0
    },
    {
      question: "Class untuk membuat grid 3 kolom adalah?",
      options: [
        "grid-cols-3",
        "cols-3",
        "grid-3",
        "grid-col-3"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Utility-First Examples",
      code: `<!-- ============================================ -->
<!-- 1. Card Component -->
<!-- ============================================ -->
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-lg transition-shadow duration-300">
    <div class="md:flex">
        <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-48" src="/card-image.jpg" alt="Card image">
        </div>
        <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                Finding customers for your new business
            </a>
            <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
    </div>
</div>

<!-- ============================================ -->
<!-- 2. Navigation Bar -->
<!-- ============================================ -->
<nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex">
                <div class="flex-shrink-0 flex items-center">
                    <span class="text-xl font-bold text-gray-800">Logo</span>
                </div>
                <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <a href="#" class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Home
                    </a>
                    <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        About
                    </a>
                    <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Services
                    </a>
                    <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Contact
                    </a>
                </div>
            </div>
            <div class="flex items-center">
                <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Sign In
                </button>
            </div>
        </div>
    </div>
</nav>

<!-- ============================================ -->
<!-- 3. Form -->
<!-- ============================================ -->
<form class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
    
    <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    </div>
    
    <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    </div>
    
    <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
    </div>
    
    <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
        Send Message
    </button>
</form>

<!-- ============================================ -->
<!-- 4. Hero Section -->
<!-- ============================================ -->
<section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <div class="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Build Faster with Tailwind
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
            </button>
            <button class="px-8 py-3 border border-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
            </button>
        </div>
    </div>
</section>

<!-- ============================================ -->
<!-- 5. Pricing Cards -->
<!-- ============================================ -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
    <!-- Basic -->
    <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
        <h3 class="text-lg font-semibold text-gray-800">Basic</h3>
        <p class="text-4xl font-bold text-gray-900 mt-4">$9</p>
        <p class="text-gray-500">per month</p>
        <ul class="mt-6 space-y-2 text-gray-600">
            <li>✓ 5 Projects</li>
            <li>✓ 10GB Storage</li>
            <li>✓ Basic Support</li>
        </ul>
        <button class="mt-6 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Get Started
        </button>
    </div>
    
    <!-- Pro (Featured) -->
    <div class="bg-white rounded-lg shadow-xl p-6 text-center border-2 border-blue-500 transform scale-105">
        <span class="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">Popular</span>
        <h3 class="text-lg font-semibold text-gray-800 mt-2">Pro</h3>
        <p class="text-4xl font-bold text-gray-900 mt-4">$29</p>
        <p class="text-gray-500">per month</p>
        <ul class="mt-6 space-y-2 text-gray-600">
            <li>✓ Unlimited Projects</li>
            <li>✓ 100GB Storage</li>
            <li>✓ Priority Support</li>
            <li>✓ Advanced Features</li>
        </ul>
        <button class="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Get Started
        </button>
    </div>
    
    <!-- Enterprise -->
    <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
        <h3 class="text-lg font-semibold text-gray-800">Enterprise</h3>
        <p class="text-4xl font-bold text-gray-900 mt-4">$99</p>
        <p class="text-gray-500">per month</p>
        <ul class="mt-6 space-y-2 text-gray-600">
            <li>✓ Unlimited Projects</li>
            <li>✓ 1TB Storage</li>
            <li>✓ 24/7 Support</li>
            <li>✓ Custom Solutions</li>
        </ul>
        <button class="mt-6 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Contact Sales
        </button>
    </div>
</div>`,
      language: "html"
    }
  ]
};