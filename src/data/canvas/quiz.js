export const chapter = {
  slug: "canvas-quiz",
  title: "Quiz Akhir Canvas",
  description: "Uji pemahamanmu tentang Canvas API.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["canvas-performance"],
  tags: ["canvas", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Canvas\n\n15 soal.`,

  quiz: [
    { question: "Context 2D diakses dengan?", options: ["canvas.getContext('2d')", "canvas.get2D()", "canvas.createContext()", "canvas.context2d"], correctAnswer: 0 },
    { question: "Koordinat (0,0) di mana?", options: ["Kiri bawah", "Kiri atas", "Tengah", "Kanan atas"], correctAnswer: 1 },
    { question: "Fill vs Stroke?", options: ["Sama", "Fill: isi; Stroke: garis tepi", "Stroke: isi", "Tidak ada"], correctAnswer: 1 },
    { question: "arc() sudut dalam?", options: ["Derajat", "Radian", "Pixel", "Persen"], correctAnswer: 1 },
    { question: "beginPath() fungsi?", options: ["Hapus canvas", "Mulai path baru", "Reset", "Selesai render"], correctAnswer: 1 },
    { question: "drawImage() bisa?", options: ["Hanya utuh", "Basic, resize, crop", "Hanya crop", "Hanya resize"], correctAnswer: 1 },
    { question: "save() / restore() untuk?", options: ["Simpan file", "Simpan/pulihkan state transformasi", "Export", "Undo"], correctAnswer: 1 },
    { question: "requestAnimationFrame manfaat?", options: ["Mudah", "Sinkron refresh rate, pause inactive", "Lebih cepat", "Tidak perlu clear"], correctAnswer: 1 },
    { question: "Struktur pixel ImageData?", options: ["[R,G,B]", "[R,G,B,A,R,G,B,A...]", "[X,Y,Color]", "[Index,Value]"], correctAnswer: 1 },
    { question: "getImageData return?", options: ["Array", "ImageData (Uint8ClampedArray)", "Canvas", "Image"], correctAnswer: 1 },
    { question: "Pre-rendering untuk?", options: ["Lambat", "Cache elemen statis", "Debugging", "Hiasan"], correctAnswer: 1 },
    { question: "OffscreenCanvas untuk?", options: ["Kecil", "Render di Web Worker", "Mobile", "Tidak perlu"], correctAnswer: 1 },
    { question: "toDataURL() untuk?", options: ["Load gambar", "Export canvas ke data URL", "Resize", "Filter"], correctAnswer: 1 },
    { question: "Delta time untuk?", options: ["Warna", "Kecepatan konsisten di semua device", "Ukuran", "Jumlah objek"], correctAnswer: 1 },
    { question: "Game loop 3 langkah?", options: ["Start,Play,End", "Clear,Update,Draw", "Input,Process,Output", "Init,Run,Stop"], correctAnswer: 1 }
  ],

  codeExamples: []
};