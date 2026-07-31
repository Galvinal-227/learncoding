export const chapter = {
  slug: "ci-cd-introduction",
  title: "Pengenalan CI/CD",
  description: "Pahami konsep CI/CD dan kenapa penting dalam software development modern.",
  icon: "SiGithubactions",
  color: "#2088FF",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["ci-cd", "devops", "automation", "deployment"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu CI/CD?

### Continuous Integration (CI)
Praktik **menggabungkan kode** ke repository utama secara sering (beberapa kali sehari). Setiap merge trigger **automated build & test**.

### Continuous Delivery (CD)
Setiap perubahan kode yang lolos CI **otomatis siap deploy** ke production. Tim bisa deploy kapan saja dengan satu klik.

### Continuous Deployment
Sama seperti Continuous Delivery, tapi **deploy otomatis** tanpa klik. Begitu lolos CI → langsung ke production.

## Pipeline CI/CD

\`\`\`
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Commit  │───▶│   Build  │───▶│   Test   │───▶│  Deploy  │───▶│ Monitor  │
│  Code    │    │          │    │          │    │  Staging │    │          │
└──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
                                                     │
                                                     ▼
                                               ┌──────────┐
                                               │  Deploy  │
                                               │Production│
                                               └──────────┘
\`\`\`

## Kenapa CI/CD Penting?

- 🚀 **Deploy lebih cepat** - Dari mingguan → harian/jam
- 🐛 **Deteksi bug cepat** - Test otomatis setiap commit
- 🔄 **Kurangi human error** - Deploy manual → otomatis
- 📦 **Consistent build** - Environment yang sama setiap build
- 👥 **Kolaborasi lebih baik** - Semua tim lihat status build
- 🛡️ **Rollback mudah** - Kembali ke versi sebelumnya

## Tools CI/CD Populer

| Tool | Hosting | Cocok Untuk |
|------|---------|-------------|
| **GitHub Actions** | Cloud | Repo GitHub, paling populer |
| **GitLab CI/CD** | Cloud/Self-host | Repo GitLab |
| **Jenkins** | Self-host | Enterprise, kustomisasi tinggi |
| **CircleCI** | Cloud | Startup, cepat setup |
| **Travis CI** | Cloud | Open source |
| **Vercel** | Cloud | Frontend, Next.js |
| **Netlify** | Cloud | Static sites |
\`\`\`
  `,

  quiz: [
    { question: "CI vs CD?", options: ["Sama", "CI: integrasi+test; CD: delivery/deployment", "CD lebih cepat", "CI tidak penting"], correctAnswer: 1 },
    { question: "Tool CI/CD paling populer untuk GitHub?", options: ["Jenkins", "GitHub Actions", "CircleCI", "Travis CI"], correctAnswer: 1 },
    { question: "Continuous Deployment artinya?", options: ["Manual deploy", "Otomatis deploy ke production", "Hanya staging", "Tidak deploy"], correctAnswer: 1 }
  ],

  codeExamples: []
};