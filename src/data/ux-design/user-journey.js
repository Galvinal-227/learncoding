export const chapter = {
  slug: "ux-design-user-journey",
  title: "User Journey Mapping",
  description: "Petakan perjalanan user dari awal sampai akhir.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["ux-design-personas"],
  tags: ["ux-design", "journey", "mapping", "flow"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu User Journey Map?

User Journey Map adalah **visualisasi langkah demi langkah** yang menggambarkan pengalaman user saat menggunakan produk.

## Journey Map Structure

\`\`\`
Stage: Awareness → Consideration → Purchase → Onboarding → Usage → Advocacy

Stage 1: Awareness
├── Actions: Search Google, See ads
├── Thoughts: "I need a solution for..."
├── Emotions: 😊 Curious
├── Pain Points: Too many options
└── Opportunities: Clear value proposition

Stage 2: Consideration
├── Actions: Compare plans, Read reviews
├── Thoughts: "Is this worth it?"
├── Emotions: 🤔 Skeptical
├── Pain Points: Pricing unclear
└── Opportunities: Transparent pricing
\`\`\`

## Example: E-Commerce Checkout

\`\`\`
View Cart → Login → Shipping → Payment → Confirmation
   😊          😐       😊        🤔         🎉

Pain Points:
- Login: "Kenapa harus buat akun?"
- Payment: "Apakah kartu saya aman?"
\`\`\`

## Service Blueprint (Advanced)

\`\`\`
Frontstage (User actions) ──────
─────────────────────────────────
Backstage (System/Staff actions) ─
─────────────────────────────────
Support Processes ──────────────
\`\`\`

## Tips

\`\`\`
✅ Map CURRENT state (not ideal)
✅ Include emotions (emoji works!)
✅ Identify pain points
✅ Note opportunities
✅ Share with entire team
\`\`\`
  `,

  quiz: [
    { question: "Journey map?", options: ["Code map", "Visualization of user experience step by step", "API flow", "Database diagram"], correctAnswer: 1 },
    { question: "Journey map: emotions?", options: ["Ignore", "Include (emoji, satisfaction level)", "Hide", "Not relevant"], correctAnswer: 1 }
  ],

  codeExamples: []
};