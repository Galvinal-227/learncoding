export const chapter = {
  slug: "npm-audit",
  title: "Security Audit",
  description: "Deteksi dan perbaiki security vulnerabilities dengan npm audit.",
  icon: "SiNpm",
  color: "#CB3837",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["npm-dependencies"],
  tags: ["npm", "audit", "security", "vulnerabilities"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## npm audit

\`\`\`bash
# Scan for vulnerabilities
npm audit

# Output severity levels:
# - low, moderate, high, critical

# Detailed report
npm audit --json
npm audit --audit-level=high

# Auto-fix (safe updates)
npm audit fix

# Force fix (may include breaking changes)
npm audit fix --force

# Dry run (lihat apa yang akan diubah)
npm audit fix --dry-run
\`\`\`

## Severity Levels

| Level | Deskripsi | Action |
|-------|-----------|--------|
| **low** | Minor risk | Update when convenient |
| **moderate** | Some risk | Update soon |
| **high** | Significant risk | Update ASAP |
| **critical** | Severe risk | Fix immediately! |

## CI/CD Integration

\`\`\`yaml
# GitHub Actions
- name: Audit dependencies
  run: npm audit --audit-level=high
\`\`\`

## Prevent Vulnerabilities

\`\`\`bash
# Check before install
npm audit

# Regular updates
npm update
npm outdated

# Use .nsprc to suppress known issues
# .nsprc (hidden config)
\`\`\`

## npm audit vs Snyk vs Socket

| | npm audit | Snyk | Socket.dev |
|---|----------|------|-----------|
| Price | Free | Free tier | Free |
| Depth | Direct + transitive | Full dependency tree | Supply chain |
| Fix | Basic (npm audit fix) | Advanced | Detection only |
| CI/CD | ✅ | ✅ | ✅ |
\`\`\`
  `,

  quiz: [
    { question: "npm audit?", options: ["Install", "Scan security vulnerabilities", "Update", "Publish"], correctAnswer: 1 },
    { question: "npm audit fix?", options: ["Scan only", "Auto-fix vulnerabilities", "Ignore", "Report"], correctAnswer: 1 }
  ],

  codeExamples: []
};