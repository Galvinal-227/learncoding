export const chapter = {
  slug: "authentication-quiz",
  title: "Quiz Akhir Authentication",
  description: "Uji pemahamanmu tentang sistem autentikasi web.",
  icon: "SiAuth0",
  color: "#EB5424",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["authentication-security-considerations"],
  tags: ["auth", "quiz"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Authentication\n\n15 soal.`,

  quiz: [
    { question: "AuthN vs AuthZ?", options: ["Sama", "AuthN: identitas; AuthZ: hak akses", "AuthZ: login", "Tidak beda"], correctAnswer: 1 },
    { question: "3 bagian JWT?", options: ["Header.Payload.Signature", "User.Pass.Token", "Start.Middle.End", "A.B.C"], correctAnswer: 0 },
    { question: "Access token lifespan?", options: ["Permanen", "15 menit - 1 jam", "1 tahun", "7 hari"], correctAnswer: 1 },
    { question: "Simpan JWT paling aman?", options: ["localStorage", "httpOnly cookie", "URL", "Variable JS biasa"], correctAnswer: 1 },
    { question: "OAuth 2.0 untuk?", options: ["Authentication", "Authorization", "Database", "Testing"], correctAnswer: 1 },
    { question: "Bcrypt untuk?", options: ["Encryption", "Password hashing", "Token generation", "CORS"], correctAnswer: 1 },
    { question: "TOTP singkatan?", options: ["Total OTP", "Time-Based One-Time Password", "Temporary OTP", "Token OTP"], correctAnswer: 1 },
    { question: "Rate limiting tujuan?", options: ["Mempercepat", "Mencegah brute force", "Hiasan", "Wajib"], correctAnswer: 1 },
    { question: "Helmet untuk?", options: ["UI", "Secure headers", "Database", "Testing"], correctAnswer: 1 },
    { question: "CSRF serangan?", options: ["XSS", "Paksa user eksekusi aksi", "DDoS", "Phishing"], correctAnswer: 1 },
    { question: "2FA faktor?", options: ["User+Pass", "Know+Have+Are", "Token+Session", "Cookie+Header"], correctAnswer: 1 },
    { question: "OAuth grant type paling aman?", options: ["Implicit", "Authorization Code", "Password", "Client Credentials"], correctAnswer: 1 },
    { question: "Refresh token untuk?", options: ["Akses API", "Dapat access token baru", "Login", "Logout"], correctAnswer: 1 },
    { question: "CORS kepanjangan?", options: ["Cross-Origin Resource Sharing", "Create-Origin Request System", "Client-Origin Response", "Cookie-Origin Resource"], correctAnswer: 0 },
    { question: "Backup codes 2FA?", options: ["Hiasan", "Recovery jika kehilangan device", "Password", "Tidak perlu"], correctAnswer: 1 }
  ],

  codeExamples: []
};