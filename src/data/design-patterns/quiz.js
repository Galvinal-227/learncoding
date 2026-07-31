export const chapter = {
  slug: "design-patterns-quiz",
  title: "Quiz Akhir Design Patterns",
  description: "Uji pemahamanmu tentang design patterns dan SOLID principles.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["design-patterns-javascript-patterns"],
  tags: ["design-patterns", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Design Patterns\n\n15 soal.`,
  quiz: [
    { question: "GoF terbit tahun?", options: ["1984", "1994", "2004", "2014"], correctAnswer: 1 },
    { question: "3 kategori GoF?", options: ["Create,Read,Delete", "Creational,Structural,Behavioral", "Start,Process,End", "Input,Output,Storage"], correctAnswer: 1 },
    { question: "SRP singkatan?", options: ["Single Responsibility", "Simple Return", "Solid React", "Standard Resource"], correctAnswer: 0 },
    { question: "Singleton?", options: ["Banyak instance", "Satu instance, global access", "Tanpa instance", "Instance baru tiap request"], correctAnswer: 1 },
    { question: "Factory pattern?", options: ["Satu instance", "Buat object tanpa specify concrete class", "Bangun step by step", "Clone object"], correctAnswer: 1 },
    { question: "Observer pattern?", options: ["Satu observer", "Satu subject, banyak observer di-notify", "Pub/Sub via broker", "Singleton"], correctAnswer: 1 },
    { question: "Adapter pattern?", options: ["Menambah behavior", "Interface tidak kompatibel → kompatibel", "Sederhanakan", "Tree structure"], correctAnswer: 1 },
    { question: "Decorator pattern?", options: ["Adapt interface", "Tambah behavior dinamis (wrap)", "Sederhanakan", "Proxy akses"], correctAnswer: 1 },
    { question: "Facade pattern?", options: ["Complex UI", "Interface sederhana untuk sistem kompleks", "Decorator", "Adapter"], correctAnswer: 1 },
    { question: "Strategy pattern?", options: ["Satu algoritma", "Pilih algoritma di runtime", "Enkapsulasi command", "State machine"], correctAnswer: 1 },
    { question: "Command pattern?", options: ["Command line", "Enkapsulasi request (undo support)", "Execute script", "CLI tool"], correctAnswer: 1 },
    { question: "State pattern?", options: ["Stateless", "Object ubah behavior saat state berubah", "Global state", "React state"], correctAnswer: 1 },
    { question: "Module pattern pakai?", options: ["Class", "Closure/IIFE", "Prototype", "Generator"], correctAnswer: 1 },
    { question: "Open/Closed: 'Closed for...'?", options: ["Extension", "Modification", "Testing", "Deployment"], correctAnswer: 1 },
    { question: "Chaining pattern?", options: ["Async", "Return this untuk method chaining", "Promise chain", "Event chain"], correctAnswer: 1 }
  ]
};