export const chapter = {
  slug: "github-projects",
  title: "GitHub Projects",
  description: "Manajemen proyek ala Kanban dengan GitHub Projects.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["github-issues"],
  tags: ["github", "projects", "kanban", "management"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## GitHub Projects

Built-in project management tool (Kanban board) yang terintegrasi dengan Issues dan Pull Requests.

## Views

| View | Fungsi |
|------|--------|
| **Board** | Kanban (To Do → In Progress → Done) |
| **Table** | Spreadsheet-like |
| **Roadmap** | Timeline/Gantt chart |
| **Calendar** | Deadline view |

## Workflow Kanban

\`\`\`
┌──────────┬──────────────┬──────────┐
│  To Do   │ In Progress  │   Done   │
├──────────┼──────────────┼──────────┤
│ Issue A  │ Issue C      │ Issue B  │
│ Issue D  │ PR #45       │ Issue E  │
│          │              │          │
└──────────┴──────────────┴──────────┘
\`\`\`

## Custom Fields

\`\`\`
- Priority: Urgent, High, Medium, Low
- Effort: S, M, L, XL
- Sprint: Sprint 1, Sprint 2
- Status: Ready, Blocked, In Review
\`\`\`

## Automation

\`\`\`
When: Issue is added to project
Set: Status = "To Do"

When: Pull Request is merged
Set: Status = "Done"
\`\`\`
  `,

  quiz: [
    { question: "GitHub Projects view?", options: ["Board (Kanban)", "Table, Roadmap, Calendar", "Semua benar", "Hanya Board"], correctAnswer: 2 }
  ],

  codeExamples: []
};