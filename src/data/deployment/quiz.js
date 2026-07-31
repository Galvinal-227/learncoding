export const chapter = {
  slug: "deployment-quiz",
  title: "Quiz Akhir Deployment",
  description: "Uji pemahamanmu tentang deployment aplikasi web.",
  icon: "SiVercel",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["deployment-domain-ssl"],
  tags: ["deployment", "quiz"],
  order: 13,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Deployment\n\n15 soal.`,
  quiz: [
    { question: "Vercel optimal untuk?", options: ["Database", "Frontend/Next.js", "Mobile", "Desktop"], correctAnswer: 1 },
    { question: "Netlify cocok untuk?", options: ["Database", "Static sites & JAMstack", "Game server", "AI"], correctAnswer: 1 },
    { question: "PM2 untuk?", options: ["Database", "Process manager Node.js", "Web server", "Firewall"], correctAnswer: 1 },
    { question: "Nginx sebagai?", options: ["Database", "Reverse proxy", "Process manager", "Firewall"], correctAnswer: 1 },
    { question: "Certbot untuk?", options: ["Domain", "SSL gratis (Let's Encrypt)", "Deploy", "Monitor"], correctAnswer: 1 },
    { question: "A record DNS?", options: ["Email", "Point domain ke IPv4", "Subdomain alias", "Verifikasi"], correctAnswer: 1 },
    { question: "CNAME record?", options: ["IP address", "Alias domain (www → root)", "Email", "SSL"], correctAnswer: 1 },
    { question: "Sentry untuk?", options: ["Hosting", "Error tracking", "Database", "CI/CD"], correctAnswer: 1 },
    { question: "Docker multi-stage build?", options: ["Debug", "Pisahkan build & production (hemat size)", "Test", "CI/CD"], correctAnswer: 1 },
    { question: "Heroku free tier?", options: ["Masih ada", "Dihapus 2022", "Selalu gratis", "Student only"], correctAnswer: 1 },
    { question: "Alternatif Heroku?", options: ["Railway, Render, Fly.io", "AWS EC2 only", "Google Cloud only", "Azure only"], correctAnswer: 0 },
    { question: "Production NODE_ENV?", options: ["development", "production", "test", "staging"], correctAnswer: 1 },
    { question: "HTTPS production?", options: ["Optional", "Required", "E-commerce only", "Not needed"], correctAnswer: 1 },
    { question: "Shared hosting folder?", options: ["root/", "public_html/", "www/", "html/"], correctAnswer: 1 },
    { question: "Cloud Run milik?", options: ["AWS", "Google Cloud", "Azure", "DigitalOcean"], correctAnswer: 1 }
  ]
};