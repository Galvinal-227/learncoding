export const chapter = {
  slug: "dom-quiz",
  title: "Quiz Akhir DOM",
  description: "Uji pemahamanmu tentang DOM dengan quiz komprehensif.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["dom-dom-performance"],
  tags: ["dom", "quiz"],
  order: 13,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir DOM\n\n15 soal tentang DOM.`,

  quiz: [
    { question: "Apa kepanjangan DOM?", options: ["Document Object Model", "Data Object Module", "Document Orientation Model", "Digital Object Method"], correctAnswer: 0 },
    { question: "Method untuk mencari elemen dengan CSS selector?", options: ["getElementById", "querySelector", "getBySelector", "findElement"], correctAnswer: 1 },
    { question: "Apa return querySelectorAll?", options: ["Array", "NodeList", "HTMLCollection", "Element"], correctAnswer: 1 },
    { question: "textContent vs innerHTML?", options: ["Sama", "textContent aman, innerHTML parse HTML", "innerHTML lebih cepat", "textContent tidak ada"], correctAnswer: 1 },
    { question: "Method menambah class?", options: ["el.class = 'x'", "el.classList.add('x')", "el.addClass('x')", "el.setClass('x')"], correctAnswer: 1 },
    { question: "Cara tambah event listener?", options: ["el.onclick", "el.addEventListener", "el.listen", "el.click"], correctAnswer: 1 },
    { question: "Arah event bubbling?", options: ["Atas ke bawah", "Bawah ke atas", "Horizontal", "Acak"], correctAnswer: 1 },
    { question: "Hentikan bubbling?", options: ["preventDefault", "stopPropagation", "stop", "halt"], correctAnswer: 1 },
    { question: "Keuntungan event delegation?", options: ["Satu listener banyak elemen", "Lebih cepat", "Tanpa JS", "Hanya klik"], correctAnswer: 0 },
    { question: "setTimeout untuk?", options: ["Berulang", "Sekali setelah delay", "Animasi", "Loop"], correctAnswer: 1 },
    { question: "Hentikan interval?", options: ["stopInterval", "clearInterval", "cancelInterval", "endInterval"], correctAnswer: 1 },
    { question: "Membuat elemen baru?", options: ["document.newElement", "document.createElement", "document.addElement", "document.buildElement"], correctAnswer: 1 },
    { question: "Menghapus elemen?", options: ["el.delete()", "el.remove()", "el.destroy()", "el.hide()"], correctAnswer: 1 },
    { question: "e.target vs e.currentTarget?", options: ["Sama", "target: yang diklik; currentTarget: yang punya listener", "Tidak ada beda", "currentTarget selalu null"], correctAnswer: 1 },
    { question: "DOMContentLoaded vs load?", options: ["Sama", "DOMContentLoaded: HTML selesai; load: semua resource selesai", "load lebih cepat", "DOMContentLoaded tidak ada"], correctAnswer: 1 }
  ],

  codeExamples: []
};