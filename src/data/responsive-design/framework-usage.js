export const chapter = {
  slug: "framework-usage",
  title: "Framework Usage (Bootstrap/Tailwind)",
  description: "Menggunakan framework CSS populer untuk responsive design.",
  icon: "SiBootstrap",
  color: "#7952B3",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["responsive-introduction", "responsive-fluid-grids"],
  tags: ["bootstrap", "tailwind", "framework", "css"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Bootstrap

### Grid System

\`\`\`html
<!-- Bootstrap Grid -->
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <!-- Responsive column -->
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <!-- Responsive column -->
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <!-- Responsive column -->
        </div>
    </div>
</div>
\`\`\`

### Breakpoints Bootstrap

| Breakpoint | Class | Width |
|------------|-------|-------|
| Extra small | col- | <576px |
| Small | col-sm- | ≥576px |
| Medium | col-md- | ≥768px |
| Large | col-lg- | ≥992px |
| XL | col-xl- | ≥1200px |

## Tailwind CSS

### Responsive Classes

\`\`\`html
<!-- Tailwind responsive classes -->
<div class="
    w-full 
    md:w-1/2 
    lg:w-1/3 
    p-4 
    md:p-6 
    lg:p-8
">
    Responsive content
</div>

<!-- Grid with Tailwind -->
<div class="
    grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    gap-4 
    md:gap-6
">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
</div>
\`\`\`

### Tailwind Breakpoints

| Breakpoint | Prefix | Width |
|------------|--------|-------|
| Default | - | 0px |
| sm | sm: | 640px |
| md | md: | 768px |
| lg | lg: | 1024px |
| xl | xl: | 1280px |
| 2xl | 2xl: | 1536px |

## Perbandingan Framework

| Fitur | Bootstrap | Tailwind |
|-------|-----------|----------|
| Approach | Component-based | Utility-first |
| Learning Curve | Moderate | Steep initial |
| Customization | Harder | Very easy |
| Bundle Size | Larger | Smaller |
| Flexibility | Limited | Unlimited |

## Best Practices

1. **Mobile First** - Gunakan mobile-first approach dengan kedua framework
2. **Customization** - Sesuaikan theme sesuai kebutuhan
3. **Performance** - Hanya gunakan komponen yang diperlukan
4. **Consistency** - Gunakan spacing utilities yang konsisten
  `,
  quiz: [
    {
      question: "Class Bootstrap untuk tablet (≥768px) adalah?",
      options: ["col-sm-", "col-md-", "col-lg-", "col-xl-"],
      correctAnswer: 1
    },
    {
      question: "Tailwind menggunakan pendekatan?",
      options: [
        "Component-first",
        "Utility-first",
        "Framework-first",
        "Library-first"
      ],
      correctAnswer: 1
    },
    {
      question: "Prefix Tailwind untuk breakpoint 1024px adalah?",
      options: ["sm:", "md:", "lg:", "xl:"],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Bootstrap vs Tailwind Comparison",
      code: `<!-- Bootstrap -->
<div class="container">
    <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Bootstrap Card</h5>
                    <p class="card-text">Responsive with Bootstrap</p>
                    <button class="btn btn-primary">Click</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Tailwind -->
<div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg shadow p-6">
            <h5 class="text-xl font-bold mb-2">Tailwind Card</h5>
            <p class="text-gray-600 mb-4">Responsive with Tailwind</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Click
            </button>
        </div>
    </div>
</div>`,
      language: "html"
    }
  ]
};