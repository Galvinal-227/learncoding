export const chapter = {
  slug: "jamstack-quiz",
  title: "Quiz Akhir JAMStack",
  description: "Uji pemahamanmu tentang arsitektur JAMStack.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["jamstack-benefits"],
  tags: ["jamstack", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir JAMStack\n\n10 soal.`,
  quiz: [
    { question: "JAMStack?", options: ["Java,Android,Mobile", "JavaScript,APIs,Markup", "JSON,Ajax,MySQL", "JWT,Auth,Mongo"], correctAnswer: 1 },
    { question: "SSG contoh?", options: ["WordPress", "Next.js, Gatsby, Astro", "Express", "Node.js"], correctAnswer: 1 },
    { question: "Next.js SSG?", options: ["getServerSideProps", "getStaticProps", "useEffect", "fetch"], correctAnswer: 1 },
    { question: "Webhook?", options: ["Debug", "Trigger rebuild konten berubah", "Auth", "DB"], correctAnswer: 1 },
    { question: "Netlify deploy dir?", options: ["src/", "dist/ atau .next/out", "node_modules/", "public/"], correctAnswer: 1 },
    { question: "Vercel optimal?", options: ["WordPress", "Next.js", "Laravel", "Django"], correctAnswer: 1 },
    { question: "JAMStack: keamanan?", options: ["Rawan", "Minimal attack surface", "Sama WP", "Tidak aman"], correctAnswer: 1 },
    { question: "JAMStack: scaling?", options: ["Sulit", "Auto-scale CDN", "Manual", "Vertical"], correctAnswer: 1 },
    { question: "Netlify Functions?", options: ["Docker", "AWS Lambda", "K8s", "Heroku"], correctAnswer: 1 },
    { question: "SSG vs SSR?", options: ["Sama", "SSG: build time; SSR: request time", "SSR lebih cepat", "SSG deprecated"], correctAnswer: 1 }
  ]
};