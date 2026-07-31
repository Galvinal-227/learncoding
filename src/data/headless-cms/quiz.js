export const chapter = {
  slug: "headless-cms-quiz",
  title: "Quiz Akhir Headless CMS",
  description: "Uji pemahamanmu tentang Headless CMS modern.",
  icon: "SiStrapi",
  color: "#4945FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["headless-cms-usage"],
  tags: ["headless-cms", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Headless CMS\n\n10 soal.`,
  quiz: [
    { question: "Headless CMS vs WordPress?", options: ["Sama", "Headless: decoupled API; WordPress: monolith", "WP lebih cepat", "Headless tanpa API"], correctAnswer: 1 },
    { question: "Headless CMS open source?", options: ["Contentful", "Strapi", "Sanity", "Hygraph"], correctAnswer: 1 },
    { question: "Strapi: API?", options: ["REST only", "GraphQL only", "REST + GraphQL", "SOAP"], correctAnswer: 2 },
    { question: "Strapi: hosting?", options: ["Cloud only", "Self-hosted", "Shared", "Static"], correctAnswer: 1 },
    { question: "Contentful: hosting?", options: ["Self-host", "Cloud (SaaS)", "Both", "Static"], correctAnswer: 1 },
    { question: "Sanity: query language?", options: ["SQL", "GROQ", "REST", "SOAP"], correctAnswer: 1 },
    { question: "Sanity: real-time?", options: ["Tidak", "Ya (seperti Google Docs)", "Via plugin", "Preview only"], correctAnswer: 1 },
    { question: "ISR?", options: ["Server", "Incremental Static Regeneration", "Client", "No cache"], correctAnswer: 1 },
    { question: "Webhook?", options: ["Debug", "Trigger rebuild saat konten berubah", "Auth", "DB"], correctAnswer: 1 },
    { question: "generateStaticParams?", options: ["Server", "Generate static paths (SSG)", "Client", "API"], correctAnswer: 1 }
  ]
};