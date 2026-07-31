export const chapter = {
  slug: "ui-design-icons",
  title: "Icons & Imagery",
  description: "Pilih dan gunakan ikon serta gambar yang efektif di UI.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["ui-design-introduction"],
  tags: ["ui-design", "icons", "images", "illustration"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Icon Types

| Type | Style | Use |
|------|-------|-----|
| **Outlined** | Thin strokes | UI elements |
| **Filled** | Solid shapes | Navigation, status |
| **Duotone** | Two colors | Branding, feature |
| **Glyph** | Minimal | Small spaces |

## Icon Libraries

| Library | Style | License |
|---------|-------|---------|
| **Lucide** | Outlined | MIT (Free) |
| **Heroicons** | Outlined/Solid | MIT (Free) |
| **Phosphor** | 6 styles | MIT (Free) |
| **Font Awesome** | Classic | Free + Pro |
| **Material Icons** | Google style | Apache 2.0 |
| **Remix Icon** | Clean | Apache 2.0 |

## Icon Best Practices

\`\`\`
✅ Konsisten style (jangan campur outline + filled)
✅ Ukuran standar: 16px, 20px, 24px, 32px
✅ Pakai SVG (bukan PNG)
✅ Accessibility: aria-label atau aria-hidden
✅ Color: ikuti teks (currentColor)
\`\`\`

## SVG Usage

\`\`\`html
<!-- Inline SVG (best) -->
<svg width="24" height="24" fill="none" stroke="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
</svg>

<!-- With aria -->
<button aria-label="Settings">
    <svg aria-hidden="true">...</svg>
</button>
\`\`\`

## Images

\`\`\`css
img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}
\`\`\`
  `,

  quiz: [
    { question: "SVG: why?", options: ["Raster", "Scalable, small, CSS-stylable", "JPEG only", "Large files"], correctAnswer: 1 },
    { question: "Icon consistency?", options: ["Mix styles", "Use same style throughout", "Random", "No rule"], correctAnswer: 1 }
  ],

  codeExamples: []
};