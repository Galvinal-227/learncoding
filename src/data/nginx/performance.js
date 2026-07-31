export const chapter = {
  slug: "nginx-performance",
  title: "Performance Optimization",
  description: "Optimasi Nginx: Gzip, caching, worker processes, keepalive, HTTP/2.",
  icon: "SiNginx",
  color: "#009639",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["nginx-configuration"],
  tags: ["nginx", "performance", "caching", "gzip"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Worker Processes

\`\`\`nginx
# Auto-set berdasarkan CPU cores
worker_processes auto;
worker_rlimit_nofile 65535;

events {
    worker_connections 1024;  # Atau 2048
    multi_accept on;
    use epoll;  # Linux
}
\`\`\`

## Gzip Compression

\`\`\`nginx
http {
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/javascript
        application/javascript
        application/json
        image/svg+xml;
    gzip_disable "msie6";
}
\`\`\`

## Static File Caching

\`\`\`nginx
location ~* \\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
    access_log off;  # Jangan log static files
}
\`\`\`

## Browser Caching

\`\`\`nginx
# HTML - no cache
location / {
    expires -1;
    add_header Cache-Control "no-store, no-cache, must-revalidate";
}

# Assets - long cache
location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
\`\`\`

## Keepalive

\`\`\`nginx
http {
    keepalive_timeout 65;
    keepalive_requests 100;
}

upstream backend {
    keepalive 32;
}
\`\`\`

## Sendfile & TCP Optimization

\`\`\`nginx
http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
}
\`\`\`

## FastCGI Cache (PHP)

\`\`\`nginx
fastcgi_cache_path /var/cache/nginx levels=1:2 keys_zone=php_cache:10m max_size=1g inactive=60m;

server {
    location ~ \\.php$ {
        fastcgi_cache php_cache;
        fastcgi_cache_key "$scheme$request_method$host$request_uri";
        fastcgi_cache_valid 200 60m;
        fastcgi_cache_bypass $no_cache;
    }
}
\`\`\`

## HTTP/2

\`\`\`nginx
server {
    listen 443 ssl http2;  # Enable HTTP/2
    # HTTP/2 otomatis: multiplexing, header compression, server push
}
\`\`\`

## Monitoring

\`\`\`nginx
location /nginx_status {
    stub_status on;
    access_log off;
    allow 127.0.0.1;
    deny all;
}
# Akses: curl http://localhost/nginx_status
\`\`\`
  `,

  quiz: [
    { question: "worker_processes auto?", options: ["Manual", "Auto-detect CPU cores", "Disable", "Single"], correctAnswer: 1 },
    { question: "gzip on?", options: ["Debug", "Compress response (smaller size)", "Security", "Proxy"], correctAnswer: 1 }
  ],

  codeExamples: []
};