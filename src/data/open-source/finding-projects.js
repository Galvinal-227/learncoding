export const chapter = {
  slug: "open-source-finding-projects",
  title: "Mencari Proyek",
  description: "Temukan proyek open source yang cocok untuk kontribusi pertama.",
  icon: "SiOpensourceinitiative",
  color: "#3DA639",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["open-source-introduction"],
  tags: ["open-source", "projects", "github", "good-first-issue"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Cara Mencari Proyek

### 1. Good First Issues

GitHub punya label khusus untuk kontributor baru:

\`\`\`
- github.com/topics/good-first-issue
- Label: "good first issue", "beginner-friendly", "help wanted"
- Situs: goodfirstissue.dev, firsttimersonly.com
\`\`\`

### 2. Teknologi yang Kamu Kuasai

Cari proyek dengan stack yang kamu kenal:

\`\`\`
github.com → Search → "language:typescript label:good-first-issue"
github.com → Explore → Topics → react, node, python
\`\`\`

### 3. Tools yang Kamu Pakai

Kontribusi ke tools yang kamu gunakan sehari-hari:

\`\`\`
- Library yang kamu install via npm
- VS Code extensions
- Framework yang kamu pakai (Next.js, Express)
\`\`\`

### 4. Situs Khusus

| Situs | Deskripsi |
|-------|-----------|
| **goodfirstissue.dev** | Koleksi good first issues |
| **firsttimersonly.com** | Guide untuk first-timer |
| **up-for-grabs.net** | Projects dengan task untuk newbie |
| **24pullrequests.com** | Advent calendar kontribusi |
| **github.com/explore** | GitHub Explore |

## Kriteria Proyek yang Baik

\`\`\`
✅ Punya CONTRIBUTING.md (panduan kontribusi)
✅ Punya CODE_OF_CONDUCT.md (aturan komunitas)
✅ Issues dengan label jelas
✅ Maintainer responsif (liat issue/PR terakhir)
✅ Dokumentasi setup jelas
✅ Ada recent commits (bukan abandoned)
✅ Lisensi jelas (MIT, Apache, GPL)
\`\`\`

## Evaluasi Sebelum Kontribusi

Sebelum terjun, cek:

1. **Last commit** - Kapan terakhir commit? (>6 bulan = mungkin abandoned)
2. **Open issues vs closed** - Apakah maintainer aktif?
3. **Response time** - Lihat PR terakhir, berapa lama di-review?
4. **Community** - Ada Discord/Slack/Discussion?
5. **Setup** - Bisa dijalankan lokal dalam <30 menit?

## Contoh Proyek untuk Pemula

| Proyek | Stack | Good For |
|--------|-------|----------|
| **Next.js** | React, TypeScript | Docs, examples |
| **VS Code** | TypeScript | Docs, bug fixes |
| **Tailwind CSS** | JavaScript | Docs, tests |
| **React** | JavaScript | Docs, issues |
| **Node.js** | C++, JavaScript | Docs, tests |
| **Strapi** | Node.js, React | Docs, translations |
| **Supabase** | TypeScript | Docs, examples |
  `,

  quiz: [
    { question: "good first issue?", options: ["Bug kritis", "Issue untuk kontributor baru", "Feature besar", "Security fix"], correctAnswer: 1 },
    { question: "Tanda proyek aktif?", options: ["Commit terbaru >6 bulan", "Recent commits + maintainer responsif", "Tidak ada issues", "Lisensi"], correctAnswer: 1 }
  ],

  codeExamples: []
};