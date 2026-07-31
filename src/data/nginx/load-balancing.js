export const chapter = {
  slug: "nginx-load-balancing",
  title: "Load Balancing",
  description: "Distribusi traffic dengan Nginx load balancing: round-robin, least-conn, ip-hash.",
  icon: "SiNginx",
  color: "#009639",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["nginx-reverse-proxy"],
  tags: ["nginx", "load-balancing", "upstream", "scaling"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Load Balancing Methods

| Method | Deskripsi | Use Case |
|--------|-----------|----------|
| **Round Robin** | Bergiliran (default) | Server sama kuat |
| **Least Connections** | Kirim ke server paling sepi | Request time bervariasi |
| **IP Hash** | Client IP yang sama → server yang sama | Session persistence |
| **Generic Hash** | Custom hash key | Advanced routing |
| **Random** | Acak | Simple |
| **Weight** | Bobot (server kuat dapat lebih banyak) | Heterogeneous servers |

## Upstream Configuration

### Round Robin (Default)
\`\`\`nginx
upstream backend {
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}
\`\`\`

### Weighted Round Robin
\`\`\`nginx
upstream backend {
    server backend1.example.com weight=3;  # Dapat 3x lebih banyak
    server backend2.example.com weight=1;
}
\`\`\`

### Least Connections
\`\`\`nginx
upstream backend {
    least_conn;
    server backend1.example.com;
    server backend2.example.com;
}
\`\`\`

### IP Hash (Session Persistence)
\`\`\`nginx
upstream backend {
    ip_hash;
    server backend1.example.com;
    server backend2.example.com;
}
# Client dari IP yang sama → selalu ke server yang sama
\`\`\`

## Health Checks

\`\`\`nginx
upstream backend {
    server backend1.example.com max_fails=3 fail_timeout=30s;
    server backend2.example.com max_fails=3 fail_timeout=30s;
    server backend3.example.com backup;  # Hanya dipakai jika semua down
}
\`\`\`

## Active Health Checks (Nginx Plus / Open Source with module)

\`\`\`nginx
upstream backend {
    zone backend 64k;
    server backend1.example.com;
    server backend2.example.com;
}

server {
    location /api/ {
        proxy_pass http://backend;
        health_check interval=5s fails=2 passes=3;
    }
}
\`\`\`

## Keepalive Connections

\`\`\`nginx
upstream backend {
    server backend1.example.com;
    keepalive 32;  # Keep 32 idle connections
}

server {
    location /api/ {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
}
\`\`\`

## Sticky Sessions (Cookie-based)

\`\`\`nginx
upstream backend {
    server backend1.example.com;
    server backend2.example.com;
    
    sticky cookie srv_id expires=1h domain=.myapp.com path=/;
}
\`\`\`
  `,

  quiz: [
    { question: "Default load balancing?", options: ["Random", "Round Robin", "Least Conn", "IP Hash"], correctAnswer: 1 },
    { question: "ip_hash?", options: ["Random", "Client IP sama → server sama (session persistence)", "Least load", "Fastest"], correctAnswer: 1 }
  ],

  codeExamples: []
};