export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir Roadmap",
  description: "Uji pemahaman Anda tentang semua konsep learning roadmap yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "roadmap-introduction",
    "roadmap-frontend-roadmap",
    "roadmap-backend-roadmap",
    "roadmap-devops-roadmap",
    "roadmap-fullstack-roadmap",
    "roadmap-resources"
  ],
  tags: ["quiz", "roadmap", "assessment"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir Learning Roadmap

Selamat! Anda telah menyelesaikan semua materi tentang Learning Roadmap. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
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
      question: "Skill pertama yang harus dipelajari untuk Frontend Developer adalah?",
      options: [
        "React",
        "HTML & CSS",
        "Node.js",
        "TypeScript"
      ],
      correctAnswer: 1
    },
    {
      question: "Framework Node.js yang paling populer adalah?",
      options: [
        "Django",
        "Express.js",
        "Flask",
        "Spring"
      ],
      correctAnswer: 1
    },
    {
      question: "Containerization tool yang paling populer adalah?",
      options: [
        "Kubernetes",
        "Docker",
        "Podman",
        "Containerd"
      ],
      correctAnswer: 1
    },
    {
      question: "MERN stack terdiri dari?",
      options: [
        "MySQL, Express, React, Node.js",
        "MongoDB, Express, React, Node.js",
        "MongoDB, Express, Ruby, Node.js",
        "MySQL, Express, Ruby, Node.js"
      ],
      correctAnswer: 1
    },
    {
      question: "Platform gratis untuk belajar coding dengan proyek praktis adalah?",
      options: [
        "FreeCodeCamp",
        "Frontend Masters",
        "Pluralsight",
        "Udemy"
      ],
      correctAnswer: 0
    },
    {
      question: "Orchestration platform untuk container adalah?",
      options: [
        "Docker Compose",
        "Kubernetes",
        "Jenkins",
        "Terraform"
      ],
      correctAnswer: 1
    },
    {
      question: "Tools untuk API testing yang paling populer adalah?",
      options: [
        "Swagger",
        "Postman",
        "Insomnia",
        "Bruno"
      ],
      correctAnswer: 1
    },
    {
      question: "Infrastructure as Code tool dari HashiCorp adalah?",
      options: [
        "CloudFormation",
        "Ansible",
        "Terraform",
        "Pulumi"
      ],
      correctAnswer: 2
    },
    {
      question: "Durasi belajar untuk menjadi Fullstack Developer biasanya?",
      options: [
        "6-9 bulan",
        "12-18 bulan",
        "20-30 bulan",
        "3-6 bulan"
      ],
      correctAnswer: 2
    }
  ],
  codeExamples: []
};