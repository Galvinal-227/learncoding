export const chapter = {
  slug: "nginx-reverse-proxy",
  title: "Reverse Proxy",
  description: "Konfigurasi Nginx sebagai reverse proxy untuk Node.js, Python, dan aplikasi backend.",
  icon: "SiNginx",
  color: "#009639",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["nginx-configuration"],
  tags: ["nginx", "reverse-proxy", "proxy-pass", "backend"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Reverse Proxy?

Reverse proxy menerima request dari client dan **meneruskannya ke backend server**. Client tidak tahu ada backend di belakang Nginx.

## Basic Reverse Proxy (Node.js)

\`\`\`nginx
server {
    listen 80;
    server_name api.myapp.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

## Multiple Backends

\`\`\`nginx
server {
    listen 80;
    server_name myapp.com;
    
    # Frontend (static files)
    location / {
        root /var/www/frontend/dist;
        try_files $uri /index.html;
    }
    
    # Backend API
    location /api/ {
        proxy_pass http://localhost:3000/;
        include snippets/proxy-params.conf;
    }
    
    # Admin panel
    location /admin/ {
        proxy_pass http://localhost:3001/;
        include snippets/proxy-params.conf;
    }
    
    # WebSocket
    location /ws/ {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
\`\`\`

## Proxy Snippet

\`\`\`nginx
# snippets/proxy-params.conf
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_cache_bypass $http_upgrade;
\`\`\`

## WebSocket Proxy

\`\`\`nginx
location /socket.io/ {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_read_timeout 86400;  # Long timeout untuk WS
}
\`\`\`

## Proxy Timeouts

\`\`\`nginx
location /api/ {
    proxy_pass http://backend;
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
}
\`\`\`

## Proxy Buffering

\`\`\`nginx
# Disable buffering untuk streaming/SSE
location /stream/ {
    proxy_pass http://backend;
    proxy_buffering off;
    proxy_cache off;
}
\`\`\`

## Upstream Block

\`\`\`nginx
# Definisikan backend di luar server block
upstream backend {
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

server {
    location /api/ {
        proxy_pass http://backend;  # Refer ke upstream
    }
}
\`\`\`
  `,

  quiz: [
    { question: "proxy_pass?", options: ["Static files", "Forward request ke backend", "SSL", "Cache"], correctAnswer: 1 },
    { question: "X-Forwarded-For?", options: ["Host", "Meneruskan IP asli client ke backend", "Port", "Protocol"], correctAnswer: 1 }
  ],

  codeExamples: []
};