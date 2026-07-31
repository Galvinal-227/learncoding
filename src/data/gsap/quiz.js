export const chapter = {
  slug: "gsap-quiz",
  title: "Quiz Akhir GSAP",
  description: "Uji pemahamanmu tentang animasi web dengan GSAP.",
  icon: "SiGreensock",
  color: "#88CE02",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["gsap-react-gsap"],
  tags: ["gsap", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir GSAP\n\n10 soal.`,
  quiz: [
    { question: "GSAP singkatan?", options: ["GreenSock Animation Platform", "Global Script Protocol", "Graphic System Platform", "Google Animation"], correctAnswer: 0 },
    { question: "gsap.to vs gsap.from?", options: ["Sama", "to: ke nilai; from: dari nilai", "from: ke nilai", "to: dari nilai"], correctAnswer: 1 },
    { question: "stagger?", options: ["Loop", "Delay antar elemen (bertahap)", "Easing", "Callback"], correctAnswer: 1 },
    { question: "Position '+=0'?", options: ["Setelah", "Bersamaan", "Mundur", "Absolute"], correctAnswer: 1 },
    { question: "scrub: true?", options: ["Trigger", "Animasi ikut scroll", "Pin", "Batch"], correctAnswer: 1 },
    { question: "pin: true?", options: ["Hapus", "Pin element saat scroll", "Cepat", "Parallax"], correctAnswer: 1 },
    { question: "SplitText?", options: ["CSS", "Animasikan per karakter/kata", "Free", "Font"], correctAnswer: 1 },
    { question: "useRef di GSAP React?", options: ["Style", "Ref DOM untuk animasi", "State", "Props"], correctAnswer: 1 },
    { question: "gsap.context()?", options: ["Debug", "Group + auto cleanup", "Plugin", "CSS"], correctAnswer: 1 },
    { question: "tween.pause()?", options: ["Debug", "Pause animasi", "Restart", "Hapus"], correctAnswer: 1 }
  ]
};