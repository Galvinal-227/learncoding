export const chapter = {
  slug: "pwa-quiz",
  title: "Quiz Akhir PWA",
  description: "Uji pemahamanmu tentang Progressive Web Apps.",
  icon: "SiPwa",
  color: "#5A0FC8",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["pwa-lighthouse"],
  tags: ["pwa", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir PWA\n\n10 soal.`,
  quiz: [
    { question: "PWA: wajib?", options: ["HTTP", "HTTPS", "FTP", "SSH"], correctAnswer: 1 },
    { question: "manifest.json?", options: ["Optional", "Required for installable", "CSS", "JS"], correctAnswer: 1 },
    { question: "display: standalone?", options: ["Browser tab", "Like native app", "Fullscreen", "Minimal"], correctAnswer: 1 },
    { question: "Service Worker?", options: ["Main thread", "Background script", "UI", "Database"], correctAnswer: 1 },
    { question: "Cache First?", options: ["Network first", "Cache first (static assets)", "No cache", "Always network"], correctAnswer: 1 },
    { question: "Stale-While-Revalidate?", options: ["Cache only", "Cache first, update from network", "Network only", "No cache"], correctAnswer: 1 },
    { question: "Install prompt?", options: ["Auto", "beforeinstallprompt event (manual)", "No install", "App Store"], correctAnswer: 1 },
    { question: "Push: permission?", options: ["Auto", "Must request", "Always", "No permission"], correctAnswer: 1 },
    { question: "Lighthouse PWA score?", options: ["50+", "90+", "70+", "0"], correctAnswer: 1 },
    { question: "SW: self.skipWaiting()?", options: ["Wait", "Activate immediately", "Stop", "Error"], correctAnswer: 1 }
  ]
};