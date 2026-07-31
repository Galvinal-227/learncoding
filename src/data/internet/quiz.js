export const chapter = {
  slug: "internet-quiz",
  title: "Quiz Akhir Internet",
  description: "Uji pemahamanmu tentang cara kerja internet.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["internet-url"],
  tags: ["internet", "quiz"],
  order: 14,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Internet\n\n15 soal.`,
  quiz: [
    { question: "Internet vs WWW?", options: ["Sama", "Internet: jaringan; WWW: layanan", "WWW lebih tua", "Internet hanya WiFi"], correctAnswer: 1 },
    { question: "DNS fungsi?", options: ["Hosting", "Domain → IP", "Firewall", "Database"], correctAnswer: 1 },
    { question: "HTTP port default?", options: ["443", "80", "8080", "3000"], correctAnswer: 1 },
    { question: "HTTPS port?", options: ["80", "443", "8080", "3000"], correctAnswer: 1 },
    { question: "Status 404?", options: ["OK", "Not Found", "Server Error", "Redirect"], correctAnswer: 1 },
    { question: "TCP vs UDP?", options: ["Sama", "TCP: reliable; UDP: fast", "UDP reliable", "TCP deprecated"], correctAnswer: 1 },
    { question: "A record?", options: ["Email", "Domain → IPv4", "Alias", "Text"], correctAnswer: 1 },
    { question: "CNAME?", options: ["IP", "Alias (www → root)", "Mail", "SSL"], correctAnswer: 1 },
    { question: "Query string diawali?", options: ["#", "?", "&", "/"], correctAnswer: 1 },
    { question: "Client = ?", options: ["Database", "Frontend (Browser)", "Server", "Router"], correctAnswer: 1 },
    { question: "Chrome JS engine?", options: ["SpiderMonkey", "V8", "JSC", "Chakra"], correctAnswer: 1 },
    { question: "Let's Encrypt?", options: ["Registrar", "SSL gratis", "Hosting", "Firewall"], correctAnswer: 1 },
    { question: "TLS vs SSL?", options: ["Sama", "TLS: modern; SSL: deprecated", "SSL aman", "TLS deprecated"], correctAnswer: 1 },
    { question: "HTTP/2 vs HTTP/1.1?", options: ["Sama", "HTTP/2: multiplexing", "1.1 cepat", "2 deprecated"], correctAnswer: 1 },
    { question: "TCP handshake?", options: ["GET-POST", "SYN→SYN-ACK→ACK", "DNS→HTTP", "SSL→TLS"], correctAnswer: 1 }
  ]
};