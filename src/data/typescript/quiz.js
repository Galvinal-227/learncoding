export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir TypeScript",
  description: "Uji pemahaman Anda tentang semua konsep TypeScript yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "typescript-introduction",
    "typescript-installation",
    "typescript-basic-types",
    "typescript-interfaces",
    "typescript-type-aliases",
    "typescript-union-intersection",
    "typescript-functions",
    "typescript-classes",
    "typescript-enums",
    "typescript-generics",
    "typescript-type-guards",
    "typescript-decorators",
    "typescript-modules",
    "typescript-declaration-files",
    "typescript-node-typescript",
    "typescript-react-typescript",
    "typescript-tsconfig",
    "typescript-best-practices"
  ],
  tags: ["quiz", "typescript", "assessment"],
  order: 19,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir TypeScript

Selamat! Anda telah menyelesaikan semua materi tentang TypeScript. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "TypeScript adalah?",
      options: ["JavaScript framework", "Superset JavaScript", "CSS framework", "Database"],
      correctAnswer: 1
    },
    {
      question: "Tipe untuk nilai yang tidak diketahui adalah?",
      options: ["any", "unknown", "void", "never"],
      correctAnswer: 1
    },
    {
      question: "Syntax untuk generic adalah?",
      options: ["<T>", "[T]", "{T}", "(T)"],
      correctAnswer: 0
    },
    {
      question: "Keyword untuk mendefinisikan interface adalah?",
      options: ["interface", "type", "class", "object"],
      correctAnswer: 0
    },
    {
      question: "Union type ditandai dengan?",
      options: ["&", "|", "+", "-"],
      correctAnswer: 1
    },
    {
      question: "Access modifier untuk internal class adalah?",
      options: ["public", "private", "protected", "readonly"],
      correctAnswer: 1
    },
    {
      question: "Keyword untuk mendefinisikan enum adalah?",
      options: ["enum", "type", "interface", "class"],
      correctAnswer: 0
    },
    {
      question: "Type guard untuk primitives menggunakan?",
      options: ["typeof", "instanceof", "in", "is"],
      correctAnswer: 0
    },
    {
      question: "Property untuk strict mode di tsconfig adalah?",
      options: ["strict", "strictMode", "noImplicitAny", "allStrict"],
      correctAnswer: 0
    },
    {
      question: "Apa yang harus dihindari di TypeScript?",
      options: ["any", "unknown", "void", "never"],
      correctAnswer: 0
    }
  ],
  codeExamples: []
};