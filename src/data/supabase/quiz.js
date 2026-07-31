export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir Supabase",
  description: "Uji pemahaman Anda tentang semua konsep Supabase yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "supabase-introduction",
    "supabase-database",
    "supabase-auth",
    "supabase-row-level-security",
    "supabase-storage",
    "supabase-realtime",
    "supabase-edge-functions"
  ],
  tags: ["quiz", "supabase", "assessment"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir Supabase

Selamat! Anda telah menyelesaikan semua materi tentang Supabase. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Database yang digunakan Supabase adalah?",
      options: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Firestore"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa kepanjangan RLS?",
      options: [
        "Row Level Security",
        "Record Level Security",
        "Role Level Security",
        "Resource Level Security"
      ],
      correctAnswer: 0
    },
    {
      question: "Method untuk sign up di Supabase adalah?",
      options: [
        "supabase.auth.signUp()",
        "supabase.auth.register()",
        "supabase.auth.createUser()",
        "supabase.auth.newUser()"
      ],
      correctAnswer: 0
    },
    {
      question: "Fitur untuk data live di Supabase adalah?",
      options: [
        "Live",
        "Realtime",
        "WebSocket",
        "SSE"
      ],
      correctAnswer: 1
    },
    {
      question: "Runtime yang digunakan Edge Functions adalah?",
      options: [
        "Node.js",
        "Deno",
        "Bun",
        "Python"
      ],
      correctAnswer: 1
    },
    {
      question: "Fungsi untuk mendapatkan user ID di RLS adalah?",
      options: [
        "current_user_id()",
        "auth.user_id()",
        "auth.uid()",
        "get_user_id()"
      ],
      correctAnswer: 2
    },
    {
      question: "Supabase adalah alternatif dari?",
      options: [
        "Firebase",
        "AWS",
        "Heroku",
        "Netlify"
      ],
      correctAnswer: 0
    },
    {
      question: "Perintah untuk deploy Edge Function adalah?",
      options: [
        "supabase deploy",
        "supabase functions deploy",
        "supabase publish",
        "supabase functions publish"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk INSERT di Supabase adalah?",
      options: [
        ".add()",
        ".insert()",
        ".create()",
        ".put()"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk sign in dengan OAuth adalah?",
      options: [
        "supabase.auth.signInOAuth()",
        "supabase.auth.signInWithOAuth()",
        "supabase.auth.oauthLogin()",
        "supabase.auth.socialLogin()"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: []
};