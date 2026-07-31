export const chapter = {
  slug: "github-issues",
  title: "Issues & Project Management",
  description: "Gunakan Issues untuk bug tracking, feature requests, dan task management.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["github-repository"],
  tags: ["github", "issues", "bug-tracking", "task"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Issues

Issue = ticket untuk bug, feature request, task, atau diskusi.

## Create Issue

\`\`\`markdown
### Bug: Login button not working on Safari

**Describe the bug**
Login button does nothing when clicked on Safari 17.2

**To Reproduce**
1. Open https://myapp.com/login on Safari
2. Enter email & password
3. Click "Login"
4. Nothing happens

**Expected behavior**
Should redirect to /dashboard

**Screenshots**
[screenshot]

**Environment**
- OS: MacOS 14.2
- Browser: Safari 17.2
- App version: v1.2.3

**Additional context**
Works fine on Chrome & Firefox
\`\`\`

## Labels

| Label | Contoh |
|-------|--------|
| **bug** | Something isn't working |
| **enhancement** | New feature request |
| **documentation** | Docs improvement |
| **good first issue** | Cocok untuk kontributor baru |
| **help wanted** | Butuh bantuan |
| **priority: high** | Urgent |

## Milestones

Kelompokkan issues ke dalam milestone (sprint/release):

\`\`\`
Milestone: v2.0 Release (due: 15 Feb 2026)
├── #123 feat: add dark mode
├── #124 fix: login bug on Safari
├── #125 chore: update dependencies
└── #126 docs: API documentation
\`\`\`

## Issue Templates

\`\`\`yaml
# .github/ISSUE_TEMPLATE/bug_report.yml
name: Bug Report
description: File a bug report
labels: [bug]
body:
  - type: textarea
    attributes:
      label: Describe the bug
    validations:
      required: true
  - type: textarea
    attributes:
      label: Steps to reproduce
  - type: dropdown
    attributes:
      label: Browser
      options: [Chrome, Firefox, Safari, Edge]
\`\`\`

## Link Issues ke PR

\`\`\`
# Di PR description:
Closes #123
Fixes #124
Resolves #125

# Di commit message:
fix: resolve login issue (#124)

# Di comment:
/add label bug
/assign @username
\`\`\`
  `,

  quiz: [
    { question: "Good first issue label?", options: ["Bug", "Cocok untuk kontributor baru", "Urgent", "Documentation"], correctAnswer: 1 },
    { question: "Closes #123 di PR?", options: ["Hiasan", "Auto-close issue #123 saat PR di-merge", "Mention user", "Add label"], correctAnswer: 1 }
  ],

  codeExamples: []
};