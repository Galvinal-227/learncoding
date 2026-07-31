export const chapter = {
  slug: "figma-collaboration",
  title: "Collaboration & Handoff",
  description: "Kolaborasi real-time, sharing, developer handoff dengan Dev Mode.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["figma-interface"],
  tags: ["figma", "collaboration", "handoff", "dev-mode"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Real-time Collaboration

- 👥 **Multiplayer editing** - Lihat kursor orang lain
- 💬 **Comments** - Diskusi langsung di design (shortcut: C)
- 🔔 **Notifications** - Mention @nama untuk ping
- 📋 **Version history** - Lihat/revert perubahan

## Sharing

\`\`\`
Share button (kanan atas) → Copy link → Set permissions:
- View only
- View + Comment
- Can edit
\`\`\`

## Developer Handoff (Dev Mode)

\`\`\`
1. Buka file Figma
2. Klik "Dev Mode" toggle (Shift+D)
3. Klik element → lihat:
   - CSS / SwiftUI / Compose code
   - Dimensions (width, height)
   - Spacing (margin, padding)
   - Colors (HEX, RGB)
   - Typography (font, size, weight)
   - Assets export (SVG, PNG, PDF)
\`\`\`

## Export Assets

\`\`\`
1. Select element/frame
2. Properties → Export
3. Format: PNG, JPG, SVG, PDF
4. Scale: 1x, 2x, 3x
5. Klik "Export"
\`\`\`

## Figma to Code Plugins

- **Anima** - Export ke React/Vue/HTML
- **Locofy** - Figma → React/Next.js code
- **Figma to Code** - HTML/Tailwind
  `,

  quiz: [
    { question: "Shortcut Dev Mode?", options: ["Ctrl+D", "Shift+D", "Ctrl+Shift+D", "F5"], correctAnswer: 1 },
    { question: "Export format vector?", options: ["PNG", "JPG", "SVG", "GIF"], correctAnswer: 2 }
  ],

  codeExamples: []
};