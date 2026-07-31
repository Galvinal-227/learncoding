export const chapter = {
  slug: "ux-design-accessibility",
  title: "Accessibility in UX",
  description: "Integrasikan aksesibilitas ke dalam proses UX design untuk pengalaman yang inklusif.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["ux-design-usability-testing"],
  tags: ["ux-design", "accessibility", "a11y", "inclusive"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Kenapa Aksesibilitas di UX?

- 🌍 **1 miliar+ orang** hidup dengan disabilitas
- 💰 **Pasar $8 triliun** (disposable income)
- ⚖️ **Legal requirement** di banyak negara
- ❤️ **Ethical responsibility** - web untuk semua
- 🚀 **Better UX for everyone** - aksesibilitas = usability

## 4 Types of Disabilities

| Type | Examples | Design Considerations |
|------|----------|---------------------|
| **Visual** | Blind, low vision, color blind | Screen reader, kontras tinggi |
| **Auditory** | Deaf, hard of hearing | Caption, transkrip |
| **Motor** | Tremor, paralysis | Keyboard nav, large targets |
| **Cognitive** | Dyslexia, ADHD, autism | Simple language, consistency |

## WCAG Principles (POUR)

| Principle | Deskripsi |
|-----------|-----------|
| **Perceivable** | Konten bisa dipersepsikan (alt text, captions) |
| **Operable** | Bisa dioperasikan (keyboard, no time limits) |
| **Understandable** | Mudah dipahami (simple language, predictable) |
| **Robust** | Kompatibel dengan assistive tech |

## UX Accessibility Checklist

### Visual Design
- ✅ Kontras warna minimal 4.5:1 (AA)
- ✅ Tidak hanya mengandalkan warna untuk informasi
- ✅ Font size minimal 16px untuk body
- ✅ Bisa di-zoom sampai 200% tanpa horizontal scroll

### Interaction Design
- ✅ Semua interaktif bisa via keyboard (Tab, Enter, Escape)
- ✅ Focus indicator visible (jangan dihapus!)
- ✅ Touch target minimal 44x44px (WCAG 2.5.5)
- ✅ Error messages jelas + suggestions

### Content Design
- ✅ Heading hierarchy (h1 → h2 → h3)
- ✅ Link text deskriptif (bukan "click here")
- ✅ Form labels terhubung dengan input
- ✅ Alt text untuk gambar informatif

## Inclusive Design vs Accessibility

| Accessibility | Inclusive Design |
|--------------|-----------------|
| Compliance (WCAG) | Design philosophy |
| Minimum standards | Beyond standards |
| Fixing barriers | Preventing barriers |
| Technical | Cultural |

## Tools for UX Accessibility

| Tool | Fungsi |
|------|--------|
| **Stark** | Figma plugin (contrast, color blind) |
| **WAVE** | Browser accessibility checker |
| **Axe DevTools** | Automated a11y testing |
| **Lighthouse** | Built-in Chrome audit |
| **NVDA/VoiceOver** | Screen reader testing |

## Accessibility in Design Process

\`\`\`
1. Research: Include users with disabilities
2. Design: Use accessible design system
3. Prototype: Test with keyboard + screen reader
4. Test: Automated (axe) + manual testing
5. Iterate: Fix issues before development
\`\`\`

## Common UX Accessibility Mistakes

\`\`\`
❌ Low contrast text
❌ Missing alt text on images
❌ Removing focus indicators (outline: none)
❌ Non-descriptive link text ("click here", "read more")
❌ Form inputs without labels
❌ Color-only indicators (no icons/text)
❌ Auto-play video without pause button
\`\`\`
  `,

  quiz: [
    { question: "WCAG: POUR?", options: ["Water", "Perceivable, Operable, Understandable, Robust", "Poor, Open, User, Ready", "Public, Open, Universal, Resource"], correctAnswer: 1 },
    { question: "WCAG AA contrast?", options: ["2:1", "4.5:1", "7:1", "10:1"], correctAnswer: 1 },
    { question: "Touch target size?", options: ["Any", "Minimum 44x44px", "20x20px", "No minimum"], correctAnswer: 1 },
    { question: "Inclusive vs Accessibility?", options: ["Same", "Accessibility: compliance; Inclusive: philosophy", "No difference", "Both same"], correctAnswer: 1 }
  ],

  codeExamples: []
};