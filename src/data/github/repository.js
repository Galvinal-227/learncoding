export const chapter = {
  slug: "github-repository",
  title: "Repository Management",
  description: "Kelola repository: create, clone, fork, branch protection, settings.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["github-introduction"],
  tags: ["github", "repository", "fork", "settings"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Create Repository

### Via GitHub Web
\`\`\`
1. Klik "+" → New repository
2. Nama repo: my-project
3. Description (opsional)
4. Public / Private
5. Initialize with: README, .gitignore (Node), license (MIT)
6. Create repository
\`\`\`

### Via CLI
\`\`\`bash
# Create repo from CLI
gh repo create my-project --public --clone

# Push existing project
cd existing-project
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/my-project.git
git push -u origin main
\`\`\`

## Clone

\`\`\`bash
# HTTPS
git clone https://github.com/username/repo.git

# SSH (recommended)
git clone git@github.com:username/repo.git
\`\`\`

## Fork

Fork = copy repo orang lain ke akunmu. Untuk kontribusi open source.

\`\`\`bash
# 1. Fork via GitHub UI (klik Fork)
# 2. Clone fork-mu
git clone git@github.com:your-username/repo.git

# 3. Tambah upstream (repo original)
git remote add upstream git@github.com:original-owner/repo.git

# 4. Sync fork dengan upstream
git fetch upstream
git merge upstream/main
git push origin main
\`\`\`

## Branch Protection Rules

\`\`\`
Settings → Branches → Add rule:
- Branch name pattern: main
- Require pull request reviews (min 1)
- Require status checks to pass
- Require branches to be up to date
- Do not allow bypassing
\`\`\`

## Repository Settings Penting

\`\`\`
✅ Default branch: main (bukan master)
✅ Pull Request: Allow merge, squash, rebase
✅ Automatically delete head branches (after merge)
✅ Code scanning alerts (Security)
✅ Dependabot alerts
\`\`\`
  `,

  quiz: [
    { question: "Fork?", options: ["Clone", "Copy repo orang ke akun sendiri (kontribusi)", "Delete", "Merge"], correctAnswer: 1 },
    { question: "Branch protection?", options: ["Debug", "Require PR review sebelum merge ke main", "Hapus branch", "Rename"], correctAnswer: 1 }
  ],

  codeExamples: []
};