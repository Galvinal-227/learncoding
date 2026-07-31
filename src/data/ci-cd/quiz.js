export const chapter = {
  slug: "ci-cd-quiz",
  title: "Quiz Akhir CI/CD",
  description: "Uji pemahamanmu tentang CI/CD.",
  icon: "SiGithubactions",
  color: "#2088FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["ci-cd-deployment-strategies"],
  tags: ["ci-cd", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir CI/CD\n\n10 soal.`,
  quiz: [
    { question: "CI vs CD?", options: ["Sama", "CI: integrasi+test; CD: delivery/deploy", "CD lebih cepat", "Tidak penting"], correctAnswer: 1 },
    { question: "Tool CI/CD untuk GitHub?", options: ["Jenkins", "GitHub Actions", "CircleCI", "Travis"], correctAnswer: 1 },
    { question: "File workflow disimpan di?", options: ["/workflows", ".github/workflows/", "/actions", "root"], correctAnswer: 1 },
    { question: "Secrets diset di?", options: ["YAML file", "GitHub Settings → Secrets", ".env", "package.json"], correctAnswer: 1 },
    { question: "Blue-Green deployment?", options: ["Warna", "Dua environment switch traffic", "Satu server", "Recreate"], correctAnswer: 1 },
    { question: "Canary release?", options: ["Semua user", "Sebagian kecil user dulu", "Internal only", "Langsung production"], correctAnswer: 1 },
    { question: "Feature flags?", options: ["Styling", "Aktif/nonaktif fitur tanpa deploy", "Database", "Logging"], correctAnswer: 1 },
    { question: "Matrix build untuk?", options: ["Satu config", "Multi Node/OS versions test", "Debugging", "Hiasan"], correctAnswer: 1 },
    { question: "Zero downtime strategy?", options: ["Recreate", "Rolling/Blue-Green/Canary", "Manual", "FTP upload"], correctAnswer: 1 },
    { question: "Continuous Deployment?", options: ["Manual deploy", "Otomatis deploy ke production", "Staging only", "No deploy"], correctAnswer: 1 }
  ]
};