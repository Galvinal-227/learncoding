export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir Sequelize",
  description: "Uji pemahaman Anda tentang semua konsep Sequelize yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "sequelize-introduction",
    "sequelize-models",
    "sequelize-associations",
    "sequelize-queries",
    "sequelize-hooks",
    "sequelize-transactions",
    "sequelize-migrations"
  ],
  tags: ["quiz", "sequelize", "assessment"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir Sequelize

Selamat! Anda telah menyelesaikan semua materi tentang Sequelize. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Apa itu Sequelize?",
      options: [
        "Database",
        "ORM untuk Node.js",
        "Framework CSS",
        "JavaScript Library"
      ],
      correctAnswer: 1
    },
    {
      question: "Data type untuk string panjang (tanpa batas) adalah?",
      options: [
        "DataTypes.STRING",
        "DataTypes.TEXT",
        "DataTypes.VARCHAR",
        "DataTypes.CHAR"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk One-to-Many association adalah?",
      options: [
        "hasOne / belongsTo",
        "hasMany / belongsTo",
        "belongsToMany",
        "hasMany / hasOne"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk bulk create adalah?",
      options: [
        "createMany",
        "bulkCreate",
        "insertMany",
        "multipleCreate"
      ],
      correctAnswer: 1
    },
    {
      question: "Operator untuk LIKE di Sequelize adalah?",
      options: [
        "Op.like",
        "Op.contains",
        "Op.match",
        "Op.startsWith"
      ],
      correctAnswer: 0
    },
    {
      question: "Hook yang dijalankan sebelum create adalah?",
      options: [
        "afterCreate",
        "beforeCreate",
        "preCreate",
        "onCreate"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk rollback transaction adalah?",
      options: [
        "t.rollback()",
        "t.undo()",
        "t.revert()",
        "t.cancel()"
      ],
      correctAnswer: 0
    },
    {
      question: "Isolation level paling ketat adalah?",
      options: [
        "READ UNCOMMITTED",
        "READ COMMITTED",
        "REPEATABLE READ",
        "SERIALIZABLE"
      ],
      correctAnswer: 3
    },
    {
      question: "Perintah untuk create migration adalah?",
      options: [
        "migration:create",
        "migration:generate",
        "migration:new",
        "migration:make"
      ],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk run all pending migrations adalah?",
      options: [
        "db:migrate",
        "migrate:run",
        "migrate:all",
        "db:run"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: []
};