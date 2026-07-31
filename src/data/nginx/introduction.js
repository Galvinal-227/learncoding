export const chapter = {
  slug: "nginx-introduction",
  title: "Pengenalan Nginx",
  description: "Pahami apa itu Nginx, kenapa jadi web server #1, dan arsitekturnya.",
  icon: "SiNginx",
  color: "#009639",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["linux-introduction"],
  tags: ["nginx", "web-server", "reverse-proxy", "performance"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Nginx?

Nginx (dibaca "Engine-X") adalah **web server performa tinggi**, **reverse proxy**, **load balancer**, dan **HTTP cache**. Dibuat oleh **Igor Sysoev** tahun 2004 untuk mengatasi **C10k problem** (10.000 concurrent connections).

## Kenapa Nginx?

- ⚡ **Cepat** - Event-driven, asynchronous, non-blocking
- 🏋️ **Ringan** - Memory usage rendah
- 🔄 **Reverse proxy** - Forward request ke backend (Node.js, Python, dll)
- ⚖️ **Load balancing** - Distribusi traffic ke multiple servers
- 🔒 **SSL termination** - HTTPS handling
- 📦 **Static file serving** - Super cepat
- 🛡️ **Security** - Rate limiting, IP blocking
- 🌍 **Market share** - 34%+ website pakai Nginx

## Nginx vs Apache

| | Nginx | Apache |
|---|-------|--------|
| Arsitektur | Event-driven, async | Process/thread per request |
| Concurrency | 10.000+ connections | ~100-200 connections |
| Memory | Rendah | Lebih tinggi |
| Konfigurasi | Simple, declarative | .htaccess (per directory) |
| Reverse proxy | ⭐ Excellent | Moderate |
| Static files | ⭐ Excellent | Good |
| Dynamic content | Via reverse proxy | Built-in (mod_php) |

## Use Cases

| Use Case | Deskripsi |
|----------|-----------|
| **Static file server** | Serve HTML, CSS, JS, images |
| **Reverse proxy** | Forward ke Node.js/Python/Go backend |
| **Load balancer** | Distribusi traffic ke multiple servers |
| **SSL termination** | Handle HTTPS, forward HTTP ke backend |
| **API Gateway** | Route requests ke microservices |
| **Cache** | Cache static + dynamic content |
| **WebSocket proxy** | Proxy WebSocket connections |

## Arsitektur

\`\`\`
┌──────────┐
│  Client  │
└──────────┘
     │ HTTPS
     ▼
┌──────────┐
│  Nginx   │ ← Reverse Proxy / Load Balancer
└──────────┘
     │ HTTP (internal)
     ├────────────┬────────────┐
     ▼            ▼            ▼
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Node.js │ │ Node.js │ │ Node.js │
│  :3000  │ │  :3001  │ │  :3002  │
└─────────┘ └─────────┘ └─────────┘
\`\`\`

## Basic Commands

\`\`\`bash
# Test configuration
nginx -t

# Start / Stop / Restart
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx   # Reload config tanpa downtime

# Check status
sudo systemctl status nginx

# Enable on boot
sudo systemctl enable nginx
\`\`\`

## File Locations

\`\`\`
/etc/nginx/
├── nginx.conf              # Main configuration
├── sites-available/        # Available site configs
│   └── myapp.conf
├── sites-enabled/          # Enabled sites (symlinks)
│   └── myapp.conf → ../sites-available/myapp.conf
├── conf.d/                 # Additional configs
└── snippets/               # Reusable config snippets
\`\`\`
  `,

  quiz: [
    { question: "Nginx vs Apache?", options: ["Sama", "Nginx: event-driven, ringan; Apache: process-based", "Apache lebih cepat", "Nginx deprecated"], correctAnswer: 1 },
    { question: "nginx -t?", options: ["Start", "Test configuration (syntax check)", "Stop", "Reload"], correctAnswer: 1 },
    { question: "systemctl reload nginx?", options: ["Restart", "Reload config tanpa downtime", "Stop", "Test"], correctAnswer: 1 }
  ],

  codeExamples: []
};