export const chapter = {
  slug: "introduction",
  title: "Pendahuluan Roadmap",
  description: "Memahami pentingnya learning roadmap dan bagaimana menggunakannya untuk pengembangan karir.",
  icon: "SiRoadmapdotcom",
  color: "#4285F4",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["roadmap", "introduction", "career", "learning"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Learning Roadmap?

Learning roadmap adalah panduan belajar terstruktur yang membantu Anda menguasai keterampilan yang diperlukan untuk menjadi seorang profesional di bidang tertentu.

## Mengapa Roadmap Penting?

1. **Arah yang Jelas** - Mengetahui apa yang harus dipelajari selanjutnya
2. **Efisiensi** - Menghindari belajar hal yang tidak relevan
3. **Motivasi** - Melihat progress dan pencapaian
4. **Karir** - Memenuhi kebutuhan industri
5. **Struktur** - Pembelajaran yang terorganisir

## Cara Menggunakan Roadmap

### 1. Assess Diri
- Evaluasi skill saat ini
- Tentukan tujuan karir
- Identifikasi gap pengetahuan

### 2. Ikuti Urutan
- Mulai dari dasar
- Progress ke topik yang lebih advance
- Jangan skip fundamental

### 3. Praktik Terus
- Build projects
- Contribusi ke open source
- Ikuti komunitas

### 4. Evaluasi Berkala
- Review progress setiap bulan
- Update roadmap sesuai kebutuhan
- Cari feedback dari mentor

## Jalur Karir di Tech

| Role | Fokus Utama | Durasi Belajar |
|------|-------------|----------------|
| Frontend Developer | UI/UX, JavaScript, Framework | 6-12 bulan |
| Backend Developer | Server, Database, API | 6-12 bulan |
| Fullstack Developer | Frontend + Backend | 12-18 bulan |
| DevOps Engineer | Infrastructure, CI/CD, Cloud | 12-18 bulan |

## Skill Matrix

### Beginner (0-6 bulan)
- Dasar programming
- HTML, CSS, JavaScript
- Git & GitHub
- Basic terminal

### Intermediate (6-12 bulan)
- Framework (React/Vue/Angular)
- Database (SQL/NoSQL)
- API development
- Testing

### Advanced (12-24 bulan)
- Architecture
- Performance optimization
- Security
- DevOps practices

## Tips Sukses

1. **Konsisten** - Belajar setiap hari minimal 1-2 jam
2. **Project-based** - Bangun project untuk setiap topik
3. **Komunitas** - Bergabung dengan komunitas developer
4. **Mentor** - Cari mentor untuk guidance
5. **Portofolio** - Kumpulkan hasil karya
6. **Network** - Bangun koneksi profesional
7. **Update** - Ikuti perkembangan teknologi
  `,
  quiz: [
    {
      question: "Apa fungsi utama dari learning roadmap?",
      options: [
        "Memberikan sertifikasi",
        "Memberikan arah belajar yang jelas",
        "Mendapatkan pekerjaan",
        "Menghafal teknologi"
      ],
      correctAnswer: 1
    },
    {
      question: "Durasi belajar untuk menjadi Frontend Developer biasanya?",
      options: [
        "3-4 bulan",
        "6-12 bulan",
        "18-24 bulan",
        "2-3 tahun"
      ],
      correctAnswer: 1
    },
    {
      question: "Skill yang harus dikuasai di level Beginner adalah?",
      options: [
        "Microservices",
        "Dasar programming",
        "Cloud Computing",
        "Machine Learning"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Learning Plan Template",
      code: `// Learning Plan Template
const learningPlan = {
    goal: "Become Fullstack Developer",
    timeline: "12 months",
    
    phases: [
        {
            name: "Fundamentals",
            duration: "2 months",
            skills: [
                "HTML/CSS",
                "JavaScript Basics",
                "Git & GitHub",
                "Command Line"
            ],
            projects: [
                "Personal Portfolio",
                "Landing Page"
            ]
        },
        {
            name: "Frontend Development",
            duration: "4 months",
            skills: [
                "React/Vue.js",
                "State Management",
                "API Integration",
                "Responsive Design"
            ],
            projects: [
                "E-commerce Website",
                "Task Management App"
            ]
        },
        {
            name: "Backend Development",
            duration: "4 months",
            skills: [
                "Node.js/Express",
                "SQL/NoSQL",
                "REST API",
                "Authentication"
            ],
            projects: [
                "Blog API",
                "Social Media API"
            ]
        },
        {
            name: "Advanced Topics",
            duration: "2 months",
            skills: [
                "Testing",
                "Performance Optimization",
                "Security",
                "DevOps Basics"
            ],
            projects: [
                "Fullstack Application",
                "Open Source Contribution"
            ]
        }
    ]
};`,
      language: "javascript"
    }
  ]
};