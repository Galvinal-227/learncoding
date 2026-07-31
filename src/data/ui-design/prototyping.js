export const chapter = {
  slug: "ui-design-prototyping",
  title: "Prototyping",
  description: "Buat prototype interaktif untuk testing sebelum development.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["ui-design-layout"],
  tags: ["ui-design", "prototype", "interactive", "testing"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu Prototype?

Prototype adalah **versi interaktif** dari desain yang bisa diklik dan di-test. Bukan kode final, tapi simulasi.

## Prototype Levels

| Level | Deskripsi | Tools |
|-------|-----------|-------|
| **Low-Fi** | Paper sketch, wireframe | Pen & Paper |
| **Mid-Fi** | Clickable wireframe | Figma, Balsamiq |
| **High-Fi** | Pixel-perfect interactive | Figma, Framer |

## Figma Prototyping

\`\`\`
1. Select element (button, card)
2. Tab "Prototype" di sidebar
3. Drag connector ke target frame
4. Set interaction:
   - Trigger: On Click, On Hover
   - Action: Navigate to, Open Overlay
   - Animation: Smart Animate, Dissolve
\`\`\`

## Prototype Testing

\`\`\`
1. Beri user task: "Coba daftar akun baru"
2. Observasi tanpa membantu
3. Catat di mana mereka bingung
4. Tanya feedback setelah selesai
5. Iterasi desain berdasarkan temuan
\`\`\`

## Tools

| Tool | Best For |
|------|----------|
| **Figma** | Design + Prototype in one |
| **Framer** | High-fidelity, animations |
| **Protopie** | Complex interactions |
| **Marvel** | Simple prototypes |
| **Axure** | Enterprise UX |

## Developer Handoff

\`\`\`
Figma Dev Mode:
- Inspect CSS values
- Download assets (SVG, PNG)
- Copy spacing/sizing
- View component specs
\`\`\`
  `,

  quiz: [
    { question: "High-fi prototype?", options: ["Paper sketch", "Interactive pixel-perfect (Figma)", "Wireframe", "Code"], correctAnswer: 1 },
    { question: "Figma prototype trigger?", options: ["Manual", "On Click, On Hover (interactive)", "Code only", "Terminal"], correctAnswer: 1 }
  ],

  codeExamples: []
};