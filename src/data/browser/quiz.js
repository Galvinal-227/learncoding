export const chapter = {
  slug: "browser-quiz",
  title: "Quiz Akhir Browser",
  description: "Uji pemahamanmu tentang browser dan DevTools.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["browser-browser-compatibility"],
  tags: ["browser", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Browser\n\n15 soal.`,

  quiz: [
    { question: "Engine browser Chrome?", options: ["Gecko", "Blink", "WebKit", "Trident"], correctAnswer: 1 },
    { question: "JavaScript engine Chrome?", options: ["SpiderMonkey", "V8", "JavaScriptCore", "Chakra"], correctAnswer: 1 },
    { question: "Langkah pertama browser setelah ketik URL?", options: ["Render", "DNS Lookup", "Paint", "JS execute"], correctAnswer: 1 },
    { question: "Properti HANYA composite?", options: ["width", "color", "transform, opacity", "margin"], correctAnswer: 2 },
    { question: "Shortcut buka DevTools?", options: ["F5", "F12", "Ctrl+S", "Alt+Tab"], correctAnswer: 1 },
    { question: "Panel edit HTML/CSS live?", options: ["Console", "Elements", "Sources", "Network"], correctAnswer: 1 },
    { question: "console.table() untuk?", options: ["HTML table", "Data tabular", "Storage", "Sorting"], correctAnswer: 1 },
    { question: "TTFB singkatan?", options: ["Time To First Byte", "Time To Full Buffer", "Total Time For Browser", "Transfer Time From Backend"], correctAnswer: 0 },
    { question: "Long Task = berapa ms?", options: [">10ms", ">50ms", ">100ms", ">500ms"], correctAnswer: 1 },
    { question: "localStorage vs sessionStorage?", options: ["Sama", "localStorage: permanen; sessionStorage: tab close hilang", "sessionStorage lebih besar", "localStorage lebih cepat"], correctAnswer: 1 },
    { question: "CSP singkatan?", options: ["Content Security Policy", "Cross Site Protection", "Cookie Secure Protocol", "Client Server Protocol"], correctAnswer: 0 },
    { question: "Mixed content warning?", options: ["Konten campur", "HTTP di halaman HTTPS", "CSS error", "JS error"], correctAnswer: 1 },
    { question: "Feature detection?", options: ["Cek user agent", "Cek kemampuan browser (rekomendasi)", "Hanya Chrome", "Tidak perlu"], correctAnswer: 1 },
    { question: "caniuse.com untuk?", options: ["Download browser", "Cek browser support fitur", "Test speed", "Debugging"], correctAnswer: 1 },
    { question: "Browser paralel request per domain?", options: ["Unlimited", "~6", "~20", "~50"], correctAnswer: 1 }
  ],

  codeExamples: []
};