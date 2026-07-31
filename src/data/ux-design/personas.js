export const chapter = {
  slug: "ux-design-personas",
  title: "Personas & User Stories",
  description: "Buat personas dan user stories untuk memahami target user.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["ux-design-user-research"],
  tags: ["ux-design", "persona", "user-story", "empathy"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu Persona?

Persona adalah **representasi fiksi** dari target user berdasarkan data riset. Bukan real user, tapi archetype.

## Persona Template

\`\`\`
┌─────────────────────────────┐
│ [Photo]                     │
│                             │
│ Name: Budi Santoso          │
│ Age: 28                     │
│ Role: Full-Stack Developer  │
│ Location: Jakarta           │
│                             │
│ Goals:                      │
│ - Build apps faster         │
│ - Learn new technologies    │
│                             │
│ Pain Points:                │
│ - Complex documentation     │
│ - Slow build tools          │
│                             │
│ Quote: "I just want it to   │
│        work out of the box" │
└─────────────────────────────┘
\`\`\`

## User Story Format

\`\`\`
As a [type of user],
I want [goal],
So that [benefit].

Contoh:
As a developer,
I want to deploy my app with one click,
So that I can ship faster.
\`\`\`

## Job Stories (Alternative)

\`\`\`
When [situation],
I want to [motivation],
So I can [expected outcome].

Contoh:
When I finish coding a feature,
I want to deploy it instantly,
So I can get user feedback quickly.
\`\`\`

## Tips

\`\`\`
✅ Based on real data (not imagination)
✅ 3-5 personas per project
✅ Fokus ke goals & pain points
✅ Hindari demographics irrelevant
✅ Update personas regularly
\`\`\`
  `,

  quiz: [
    { question: "Persona?", options: ["Real user", "Fictional representative user based on research", "Employee", "CEO"], correctAnswer: 1 },
    { question: "User story format?", options: ["Code", "As a... I want... So that...", "Database schema", "API endpoint"], correctAnswer: 1 }
  ],

  codeExamples: []
};