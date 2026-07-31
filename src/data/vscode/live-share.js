export const chapter = {
  slug: "vscode-live-share",
  title: "Live Share",
  description: "Kolaborasi real-time dengan Live Share untuk pair programming.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["vscode-extensions"],
  tags: ["vscode", "live-share", "collaboration", "pair-programming"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Install

\`\`\`
Extensions → Search: "Live Share" → Install
\`\`\`

## Start Session

\`\`\`
1. Ctrl+Shift+P → "Live Share: Start Collaboration Session"
2. Share link dengan teammate
3. Mereka join via browser atau VS Code
\`\`\`

## Features

\`\`\`
✅ Shared editing (real-time)
✅ Shared terminal (read-only or read-write)
✅ Shared server (localhost forwarding)
✅ Shared debugging
✅ Audio call (optional)
✅ Follow cursor
✅ Focus participant
\`\`\`

## Localhost Sharing

\`\`\`
1. Start local server (npm run dev)
2. Live Share → "Share Server"
3. Teammate can access http://localhost:3000
\`\`\`

## Best Practices

\`\`\`
✅ Take turns (driver/navigator)
✅ Use audio call for communication
✅ Share terminal for pair debugging
✅ Respect focus/follow mode
✅ End session when done
\`\`\`
  `,

  quiz: [
    { question: "Live Share?", options: ["Git tool", "Real-time collaboration", "Theme", "Debugger"], correctAnswer: 1 },
    { question: "Share localhost?", options: ["Not possible", "Live Share shares localhost to teammates", "Only production", "VPN needed"], correctAnswer: 1 }
  ],

  codeExamples: []
};