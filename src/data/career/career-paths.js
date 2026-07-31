export const chapter = {
  slug: "career-career-paths",
  title: "Career Paths di Tech",
  description: "Jelajahi berbagai jalur karir di industri teknologi.",
  icon: "SiLinkedin",
  color: "#0A66C2",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["career-introduction"],
  tags: ["career", "path", "specialization", "role"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Individual Contributor (IC) Track

Tetap hands-on coding, tidak manage orang.

\`\`\`
Junior Developer → Mid-Level → Senior → Staff → Principal → Distinguished/Fellow
\`\`\`

Cocok untuk: Yang suka coding dan problem solving teknis.

## 2. Engineering Management Track

Kelola tim dan orang.

\`\`\`
Senior Developer → Tech Lead → Engineering Manager → Senior EM → Director → VP Engineering → CTO
\`\`\`

Cocok untuk: Yang suka mentoring, manage people, dan strategi.

## 3. Spesialisasi Teknis

Deep dive ke satu area spesifik:

| Spesialisasi | Fokus | Skills |
|-------------|-------|--------|
| **Frontend Engineer** | UI/UX, browser, React/Vue | CSS, accessibility, performance |
| **Backend Engineer** | API, database, server | Node.js/Python/Go, SQL, system design |
| **Full-Stack Engineer** | Frontend + Backend | Semua di atas |
| **Mobile Engineer** | iOS/Android apps | Swift/Kotlin, React Native/Flutter |
| **DevOps/SRE** | Infrastructure, deployment | Docker, K8s, AWS, CI/CD |
| **Data Engineer** | Data pipeline, ETL | Python, SQL, Spark, Airflow |
| **ML/AI Engineer** | Machine learning models | Python, TensorFlow, PyTorch |
| **Security Engineer** | Keamanan aplikasi | Pentesting, cryptography, compliance |
| **QA Engineer** | Testing, automation | Selenium, Cypress, Jest |

## 4. Hybrid/Alternatif

| Role | Deskripsi |
|------|-----------|
| **Developer Advocate** | Ngoding + public speaking + content |
| **Technical Writer** | Dokumentasi, tutorial, artikel teknis |
| **Solutions Architect** | Desain solusi untuk client |
| **Product Manager** | Manage product vision & roadmap |
| **Founder/Indie Hacker** | Bangun produk sendiri |

## Cara Memilih Path

\`\`\`
1. Coba dulu (magang, freelance, side project)
2. Identifikasi apa yang kamu enjoy:
   - Ngoding terus? → IC track
   - Bantu orang berkembang? → Management
   - Spesifik banget? → Spesialisasi
   - Bikin konten + ngoding? → DevRel/Writer
3. Jangan takut pivot (pindah jalur)
4. Career is a marathon, not a sprint
\`\`\`
  `,

  quiz: [
    { question: "IC track puncaknya?", options: ["Manager", "Principal/Distinguished Engineer", "CTO", "CEO"], correctAnswer: 1 },
    { question: "Cocok jadi Engineering Manager jika?", options: ["Suka ngoding", "Suka mentoring dan manage orang", "Suka desain", "Suka data"], correctAnswer: 1 },
    { question: "Developer Advocate melakukan?", options: ["Hanya ngoding", "Ngoding + public speaking + content", "Hanya menulis", "Hanya manage"], correctAnswer: 1 }
  ],

  codeExamples: []
};