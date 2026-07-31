export const chapter = {
  slug: "next-js-quiz",
  title: "Quiz Akhir Next.js",
  description: "Uji pemahamanmu tentang Next.js.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["next-js-deployment"],
  tags: ["nextjs", "quiz"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Next.js\n\n15 soal.`,
  quiz: [
    { question: "Next.js dibuat?", options: ["Google", "Vercel", "Meta", "Microsoft"], correctAnswer: 1 },
    { question: "App Router vs Pages?", options: ["Sama", "App: modern (RSC, layouts); Pages: legacy", "Pages baru", "App deprecated"], correctAnswer: 1 },
    { question: "layout.tsx?", options: ["Page", "Wrapper persisten antar navigasi", "Error", "Loading"], correctAnswer: 1 },
    { question: "loading.tsx?", options: ["Error", "Auto loading UI (Suspense)", "Layout", "API"], correctAnswer: 1 },
    { question: "'use client'?", options: ["Server component", "Client component directive", "API", "Middleware"], correctAnswer: 1 },
    { question: "Server Component: useState?", options: ["Yes", "No (Client only)", "Via plugin", "Deprecated"], correctAnswer: 1 },
    { question: "generateStaticParams?", options: ["SSR", "SSG - generate static paths", "Client", "API"], correctAnswer: 1 },
    { question: "revalidate: 3600?", options: ["Delete", "ISR: regenerate tiap 1 jam", "Cache forever", "No cache"], correctAnswer: 1 },
    { question: "SSR trigger?", options: ["Static", "cookies/headers/cache:no-store", "Client component", "Image"], correctAnswer: 1 },
    { question: "App Router API?", options: ["pages/api/", "app/api/...route.ts", "components/", "lib/"], correctAnswer: 1 },
    { question: "NextAuth auth()?", options: ["Hook", "await auth() - server session", "useSession", "getServerSession"], correctAnswer: 1 },
    { question: "NextAuth middleware?", options: ["Manual", "auth as middleware - protect routes", "Client", "API"], correctAnswer: 1 },
    { question: "Server Actions?", options: ["Client", "Server mutations (form handling)", "Redux", "Router"], correctAnswer: 1 },
    { question: "Next.js Image?", options: ["<img>", "next/image (optimasi otomatis)", "Background", "Canvas"], correctAnswer: 1 },
    { question: "Vercel deploy?", options: ["Manual", "Git push → auto deploy", "FTP", "Docker only"], correctAnswer: 1 }
  ]
};