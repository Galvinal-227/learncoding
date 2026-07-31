export const chapter = {
  slug: "linux-processes",
  title: "Process Management",
  description: "Monitor dan kelola proses: ps, top, kill, background/foreground.",
  icon: "SiLinux",
  color: "#FCC624",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["linux-commands"],
  tags: ["linux", "processes", "kill", "background"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Process Monitoring

\`\`\`bash
# List processes
ps aux                  # All processes
ps aux | grep nginx     # Filter

# Real-time monitor
top                     # Interactive
htop                    # Better UI (install dulu)

# Process tree
pstree

# Find process by port
lsof -i :3000
ss -tlnp | grep :3000
\`\`\`

## Kill Process

\`\`\`bash
# By PID
kill 1234               # Graceful (SIGTERM)
kill -9 1234            # Force (SIGKILL)

# By name
pkill nginx
pkill -f "node server"  # Match full command
killall node
\`\`\`

## Background & Foreground

\`\`\`bash
# Run in background
node server.js &
npm start &

# List background jobs
jobs

# Bring to foreground
fg %1

# Suspend current process
Ctrl+Z

# Resume in background
bg %1

# Detach from terminal
nohup node server.js &   # Output ke nohup.out
disown
\`\`\`

## Process Priority (Nice)

\`\`\`bash
nice -n 10 command       # Lower priority (10)
nice -n -10 command      # Higher priority (butuh root)
renice -n 5 -p 1234      # Change running process
\`\`\`
  `,

  quiz: [
    { question: "kill -9?", options: ["Graceful", "Force kill (SIGKILL)", "Pause", "Resume"], correctAnswer: 1 },
    { question: "Background process?", options: ["command &", "command!", "command #", "command @"], correctAnswer: 0 },
    { question: "htop?", options: ["Editor", "Better top (interactive process viewer)", "Database", "Network"], correctAnswer: 1 }
  ],

  codeExamples: []
};