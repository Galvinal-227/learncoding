export const chapter = {
  slug: "ui-design-design-systems",
  title: "Design Systems",
  description: "Bangun design system yang konsisten dengan components, tokens, dan documentation.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["ui-design-color-theory", "ui-design-typography"],
  tags: ["ui-design", "design-system", "components", "tokens"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu Design System?

Design system adalah **kumpulan komponen, aturan, dan standar** yang bisa digunakan ulang untuk membangun UI yang konsisten.

## Komponen Design System

| Komponen | Deskripsi |
|----------|-----------|
| **Design Tokens** | Variabel (warna, spacing, font) |
| **UI Components** | Button, Input, Card, Modal |
| **Patterns** | Form layout, navigation |
| **Guidelines** | Aturan penggunaan |
| **Documentation** | Storybook, Zeroheight |

## Design Tokens

\`\`\`css
:root {
    /* Colors */
    --color-primary-500: #3B82F6;
    --color-primary-600: #2563EB;
    
    /* Spacing */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-6: 24px;
    --space-8: 32px;
    
    /* Typography */
    --font-sans: 'Inter', sans-serif;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
}
\`\`\`

## Component Library

\`\`\`jsx
// Button component using tokens
function Button({ variant = 'primary', size = 'md', children }) {
    return (
        <button className={\`btn btn-\${variant} btn-\${size}\`}>
            {children}
        </button>
    );
}
\`\`\`

## Popular Design Systems

| System | Creator | Best For |
|--------|---------|----------|
| **Material Design** | Google | Android, general |
| **Ant Design** | Alibaba | Enterprise |
| **Chakra UI** | Community | React apps |
| **Shadcn/ui** | shadcn | Modern React |
| **Radix UI** | Modulz | Accessible primitives |
| **Tailwind CSS** | Tailwind Labs | Utility-first |

## Benefits

\`\`\`
✅ Konsistensi visual
✅ Development lebih cepat
✅ Onboarding mudah
✅ Single source of truth
✅ Accessibility built-in
\`\`\`
  `,

  quiz: [
    { question: "Design tokens?", options: ["NFT", "Variables (color, spacing, font)", "Component", "API"], correctAnswer: 1 },
    { question: "Storybook?", options: ["Database", "Component documentation tool", "Design tool", "Framework"], correctAnswer: 1 }
  ],

  codeExamples: []
};