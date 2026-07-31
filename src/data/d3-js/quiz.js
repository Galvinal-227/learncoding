export const chapter = {
  slug: "d3-js-quiz",
  title: "Quiz Akhir D3.js",
  description: "Uji pemahamanmu tentang visualisasi data dengan D3.js.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["d3-js-interactivity"],
  tags: ["d3js", "quiz"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir D3.js\n\n10 soal.`,
  quiz: [
    { question: "D3.js kepanjangan?", options: ["Data-Driven Documents", "Digital 3D", "Dynamic Data", "Document Draw"], correctAnswer: 0 },
    { question: "3 stages data binding?", options: ["Add,Edit,Delete", "Enter,Update,Exit", "Create,Read,Delete", "Bind,Sync,Remove"], correctAnswer: 1 },
    { question: "Domain vs Range?", options: ["Sama", "Domain: data; Range: visual pixel", "Range: data", "Tidak berhubungan"], correctAnswer: 1 },
    { question: "scaleBand untuk?", options: ["Line", "Bar chart (kategori)", "Pie", "Map"], correctAnswer: 1 },
    { question: "Line chart pakai element?", options: ["rect", "circle", "path (d3.line)", "text"], correctAnswer: 2 },
    { question: "Transisi stagger delay?", options: [".delay(1000)", ".delay((d,i)=>i*100)", ".stagger(100)", ".duration(100)"], correctAnswer: 1 },
    { question: "D3 layouts hasilkan?", options: ["SVG", "Koordinat (tidak gambar)", "Warna", "Animasi"], correctAnswer: 1 },
    { question: "GeoJSON untuk?", options: ["Chart", "Data peta geografis", "Database", "Animasi"], correctAnswer: 1 },
    { question: "d3.zoom() untuk?", options: ["Tooltip", "Zoom & pan chart", "Drag", "Brush"], correctAnswer: 1 },
    { question: ".join() shorthand untuk?", options: ["String join", "Enter + Update + Exit", "Array merge", "Object combine"], correctAnswer: 1 }
  ]
};