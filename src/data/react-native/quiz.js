export const chapter = {
  slug: "react-native-quiz",
  title: "Quiz Akhir React Native",
  description: "Uji pemahamanmu tentang React Native mobile development.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["react-native-deployment"],
  tags: ["react-native", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir React Native\n\n10 soal.`,
  quiz: [
    { question: "RN: satu kode?", options: ["iOS only", "iOS + Android", "Android only", "Web only"], correctAnswer: 1 },
    { question: "Expo vs Bare?", options: ["Same", "Expo: managed; Bare: full control", "Bare easier", "Expo deprecated"], correctAnswer: 1 },
    { question: "RN: View = HTML?", options: ["<span>", "<div>", "<p>", "<img>"], correctAnswer: 1 },
    { question: "FlatList?", options: ["ScrollView", "Lazy render large lists", "All at once", "Static"], correctAnswer: 1 },
    { question: "RN: flexDirection default?", options: ["row", "column", "reverse", "none"], correctAnswer: 1 },
    { question: "Expo Router?", options: ["Manual", "File-based routing", "Config", "API"], correctAnswer: 1 },
    { question: "Context API in RN?", options: ["No", "Yes (same as React)", "Different", "Redux only"], correctAnswer: 1 },
    { question: "expo-camera?", options: ["Web only", "Native camera access", "Simulator", "Gallery"], correctAnswer: 1 },
    { question: "EAS Build?", options: ["Local", "Cloud build service", "Simulator", "Emulator"], correctAnswer: 1 },
    { question: "App Store review?", options: ["No", "Yes (like native apps)", "Auto", "Never"], correctAnswer: 1 }
  ]
};