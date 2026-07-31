export const chapter = {
  slug: "open-source-contributing",
  title: "Cara Berkontribusi",
  description: "Panduan langkah demi langkah kontribusi pertama ke open source.",
  icon: "SiOpensourceinitiative",
  color: "#3DA639",
  difficulty: "Beginner",
  estimatedReadingTime: 25,
  prerequisites: ["open-source-finding-projects"],
  tags: ["open-source", "contributing", "first-contribution", "workflow"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Workflow Kontribusi

\`\`\`
1. Fork repository
2. Clone fork ke lokal
3. Buat branch baru
4. Baca CONTRIBUTING.md
5. Buat perubahan
6. Commit (ikuti convention)
7. Push ke fork
8. Buat Pull Request
9. Respond to review
10. 🎉 Merged!
\`\`\`

## Step by Step

### 1. Fork Repository
\`\`\`
Klik "Fork" di GitHub → repo masuk ke akunmu
\`\`\`

### 2. Clone
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/repo.git
cd repo
\`\`\`

### 3. Setup Upstream
\`\`\`bash
git remote add upstream https://github.com/ORIGINAL_OWNER/repo.git
git fetch upstream
\`\`\`

### 4. Buat Branch
\`\`\`bash
git checkout -b fix/typo-readme
# Atau: feat/add-docs, docs/update-api
\`\`\`

### 5. Baca CONTRIBUTING.md
\`\`\`
- Cara setup development
- Code style conventions
- Commit message format
- Testing requirements
\`\`\`

### 6. Buat Perubahan
\`\`\`bash
# Edit file...
# Test perubahan
npm test
npm run lint
\`\`\`

### 7. Commit
\`\`\`bash
git add .
git commit -m "docs: fix typo in README installation guide"
# Ikuti conventional commits!
\`\`\`

### 8. Push
\`\`\`bash
git push origin fix/typo-readme
\`\`\`

### 9. Buat Pull Request
\`\`\`
1. Buka repo original di GitHub
2. Klik "Compare & pull request"
3. Isi judul & deskripsi
4. Link issue terkait (Closes #123)
5. Submit!
\`\`\`

### 10. Respond to Review
\`\`\`
- Terima feedback dengan terbuka
- Jangan defensif
- Revisi sesuai review
- Push commit baru → PR auto-update
\`\`\`

## Tips Kontribusi Pertama

\`\`\`
✅ Mulai dari yang kecil (typo, docs, simple bug)
✅ Baca CONTRIBUTING.md dulu
✅ Cari issue dengan label "good first issue"
✅ Tanya di issue sebelum mulai kerja (ada yang sudah handle?)
✅ Ikuti code style project (jangan pakai style sendiri)
✅ Test lokal sebelum push
✅ Jangan push ke main/master branch
✅ Bersabar (maintainer volunteer, tidak dibayar)
✅ Jangan takut ditolak (rejection = pembelajaran)
\`\`\`

## Tools untuk Kontribusi

| Tool | Fungsi |
|------|--------|
| **GitHub CLI** | Manage PR, issues dari terminal |
| **Gitpod** | Development environment online |
| **CodeSandbox** | Instant dev environment |
| **StackBlitz** | Web-based IDE |
  `,

  quiz: [
    { question: "Fork?", options: ["Clone", "Copy repo ke akun sendiri (kontribusi)", "Delete", "Merge"], correctAnswer: 1 },
    { question: "Sebelum kontribusi, baca?", options: ["Kode saja", "CONTRIBUTING.md", "README only", "Tidak perlu"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "First Contribution Commands",
      language: "bash",
      code: `# Fork via GitHub UI, lalu:
git clone https://github.com/YOUR_USERNAME/repo.git
cd repo
git remote add upstream https://github.com/ORIGINAL/repo.git

# Buat branch
git checkout -b docs/fix-typo

# Edit file...
git add .
git commit -m "docs: fix typo in installation guide"
git push origin docs/fix-typo

# Buka GitHub → Create Pull Request 🎉`
    }
  ]
};