export const chapter = {
  slug: "figma-components",
  title: "Components & Variants",
  description: "Bangun design system dengan components, variants, dan component properties.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["figma-frames"],
  tags: ["figma", "components", "variants", "design-system"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Component = Reusable Element

Seperti komponen di React: sekali buat, pakai di mana-mana. Update master → semua instance ikut update.

### Create Component
\`\`\`
1. Select element(s)
2. Ctrl+Alt+K (Create Component)
3. Atau klik "Create Component" di toolbar
\`\`\`

### Use Component
- Copy-paste (Ctrl+D)
- Assets panel → drag ke canvas
- Instance bisa di-override (warna, teks, visibility)

## Variants

Satu component dengan **multiple states**.

### Contoh Button:
\`\`\`
Variant: Size (Small, Medium, Large)
Variant: Type (Primary, Secondary, Danger)
Variant: State (Default, Hover, Disabled, Loading)
\`\`\`

### Create Variant
\`\`\`
1. Buat component
2. Duplicate → edit
3. Select semua → "Combine as Variants"
4. Rename properties di sidebar
\`\`\`

## Component Properties

\`\`\`
- Text property: Bisa edit teks dari instance
- Boolean property: Show/Hide element
- Instance swap: Tukar nested component
\`\`\`

## Best Practices

- ✅ Nama jelas: \`Button/Primary/Default\`
- ✅ Satu component = satu fungsi
- ✅ Variants untuk state, bukan component beda
- ✅ Component library terpisah per project
  `,

  quiz: [
    { question: "Shortcut create component?", options: ["Ctrl+K", "Ctrl+Alt+K", "Ctrl+G", "Ctrl+C"], correctAnswer: 1 },
    { question: "Variants untuk?", options: ["Hiasan", "Multiple states dalam 1 component", "File terpisah", "Export"], correctAnswer: 1 }
  ],

  codeExamples: []
};