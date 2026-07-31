export const chapter = {
  slug: "nginx-quiz",
  title: "Quiz Akhir Nginx",
  description: "Uji pemahamanmu tentang Nginx web server.",
  icon: "SiNginx",
  color: "#009639",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["nginx-performance"],
  tags: ["nginx", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Nginx\n\n15 soal.`,
  quiz: [
    { question: "Nginx vs Apache?", options: ["Sama", "Nginx: event-driven; Apache: process-based", "Apache cepat", "Nginx deprecated"], correctAnswer: 1 },
    { question: "nginx -t?", options: ["Start", "Test config syntax", "Stop", "Reload"], correctAnswer: 1 },
    { question: "server_name?", options: ["IP", "Domain (virtual host)", "Port", "User"], correctAnswer: 1 },
    { question: "proxy_pass?", options: ["Static", "Forward ke backend", "SSL", "Cache"], correctAnswer: 1 },
    { question: "Default load balancing?", options: ["Random", "Round Robin", "Least Conn", "IP Hash"], correctAnswer: 1 },
    { question: "ip_hash?", options: ["Random", "Same client → same server (session)", "Least", "Fastest"], correctAnswer: 1 },
    { question: "Certbot?", options: ["DB", "Let's Encrypt SSL tool", "Firewall", "Load balancer"], correctAnswer: 1 },
    { question: "HSTS?", options: ["Cache", "Force HTTPS", "Redirect", "Cookie"], correctAnswer: 1 },
    { question: "limit_req_zone?", options: ["Cache", "Rate limiting", "SSL", "Proxy"], correctAnswer: 1 },
    { question: "server_tokens off?", options: ["Debug", "Hide Nginx version", "Disable SSL", "Off"], correctAnswer: 1 },
    { question: "worker_processes auto?", options: ["Manual", "Auto CPU cores", "Disable", "Single"], correctAnswer: 1 },
    { question: "gzip on?", options: ["Debug", "Compress response", "Security", "Proxy"], correctAnswer: 1 },
    { question: "X-Forwarded-For?", options: ["Host", "Client real IP", "Port", "Protocol"], correctAnswer: 1 },
    { question: "systemctl reload nginx?", options: ["Restart", "Reload tanpa downtime", "Stop", "Test"], correctAnswer: 1 },
    { question: "Location priority = ?", options: ["/ prefix", "= exact (highest)", "~ regex", "^~ prefix"], correctAnswer: 1 }
  ]
};