export const chapter = {
  slug: "serverless-quiz",
  title: "Quiz Akhir Serverless",
  description: "Uji pemahamanmu tentang arsitektur serverless.",
  icon: "SiAwslambda",
  color: "#FF9900",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["serverless-limitations"],
  tags: ["serverless", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: "Quiz Serverless - 10 soal.",
  quiz: [
    { question: "Serverless: server?", options: ["No server", "Managed by provider", "Own server", "Local"], correctAnswer: 1 },
    { question: "FaaS?", options: ["Framework", "Function as a Service", "File", "Frontend"], correctAnswer: 1 },
    { question: "AWS Lambda?", options: ["Database", "Serverless compute", "Storage", "CDN"], correctAnswer: 1 },
    { question: "Cold start?", options: ["Fast", "Delay when function initializes", "Error", "Warm up"], correctAnswer: 1 },
    { question: "Vercel: api route?", options: ["pages/", "app/api/...route.ts", "src/", "public/"], correctAnswer: 1 },
    { question: "Edge runtime?", options: ["Regional", "Global CDN edge", "DB", "Local"], correctAnswer: 1 },
    { question: "Pay-per-use?", options: ["Monthly fee", "Pay per execution", "Free always", "Flat rate"], correctAnswer: 1 },
    { question: "Serverless timeout?", options: ["Unlimited", "Limited (15s-15min)", "1 hour", "24h"], correctAnswer: 1 },
    { question: "Serverless: stateful?", options: ["Yes", "Stateless (use DB/cache)", "Always", "Sometimes"], correctAnswer: 1 },
    { question: "Cloud Functions?", options: ["AWS", "Google Cloud / Firebase", "Azure", "All"], correctAnswer: 1 }
  ]
};