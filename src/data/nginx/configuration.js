export const chapter = {
  slug: "nginx-configuration",
  title: "Konfigurasi Nginx",
  description: "Pahami struktur konfigurasi Nginx: directives, contexts, variables, dan best practices.",
  icon: "SiNginx",
  color: "#009639",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["nginx-installation"],
  tags: ["nginx", "configuration", "directives", "server-block"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Struktur Konfigurasi

\`\`\`nginx
# Main context (nginx.conf)
user www-data;
worker_processes auto;
error_log /var/log/nginx/error.log;

# Events context
events {
    worker_connections 1024;
}

# HTTP context
http {
    include /etc/nginx/mime.types;
    
    # Server context (virtual host)
    server {
        listen 80;
        server_name example.com;
        
        # Location context
        location / {
            root /var/www/html;
            index index.html;
        }
        
        location /api/ {
            proxy_pass http://localhost:3000;
        }
    }
}
\`\`\`

## Context Hierarchy

\`\`\`
main
├── events
├── http
│   ├── server (virtual host)
│   │   ├── location / { }
│   │   ├── location /api/ { }
│   │   └── location ~ \\.php$ { }
│   └── server (another virtual host)
└── stream (TCP/UDP proxy)
\`\`\`

## Server Block (Virtual Host)

\`\`\`nginx
server {
    listen 80;                          # Port
    listen [::]:80;                     # IPv6
    server_name example.com www.example.com;  # Domain
    
    root /var/www/example;               # Document root
    index index.html index.htm;
    
    # Logs
    access_log /var/log/nginx/example-access.log;
    error_log /var/log/nginx/example-error.log;
}
\`\`\`

## Location Block

\`\`\`nginx
# Exact match
location = / {
    return 200 'Hello';
}

# Prefix match
location /api/ {
    proxy_pass http://backend;
}

# Regex match (case-sensitive)
location ~ \\.php$ {
    fastcgi_pass unix:/var/run/php/php-fpm.sock;
}

# Regex match (case-insensitive)
location ~* \\.(jpg|png|css|js)$ {
    expires 30d;
    add_header Cache-Control "public";
}

# Preferential prefix
location ^~ /images/ {
    root /var/www/assets;
}
\`\`\`

## Location Priority

\`\`\`
1. = exact match
2. ^~ preferential prefix
3. ~ regex (case-sensitive)
4. ~* regex (case-insensitive)
5. / prefix match
\`\`\`

## Variables

\`\`\`nginx
location / {
    # Built-in variables
    set $custom_var "Hello";
    
    # Common variables
    # $host          → example.com
    # $uri           → /page
    # $args          → query string
    # $scheme        → http/https
    # $remote_addr   → client IP
    # $http_header   → any HTTP header
    
    add_header X-Custom $custom_var;
}
\`\`\`

## Include Directive

\`\`\`nginx
# Modular configuration
include /etc/nginx/conf.d/*.conf;
include /etc/nginx/sites-enabled/*;

# Reusable snippets
include snippets/ssl-params.conf;
include snippets/security-headers.conf;
\`\`\`

## Best Practices

\`\`\`nginx
# ✅ Gunakan sites-available/sites-enabled pattern
# ✅ Pisahkan config per domain
# ✅ Gunakan include untuk reusable config
# ✅ Test config sebelum reload: nginx -t
# ✅ Gunakan reload (bukan restart) untuk apply changes
# ❌ Jangan edit nginx.conf langsung (pakai include)
# ❌ Jangan gunakan if di location (kecuali rewrite)
\`\`\`
  `,

  quiz: [
    { question: "nginx -t?", options: ["Start", "Test configuration syntax", "Stop", "Reload"], correctAnswer: 1 },
    { question: "Location priority tertinggi?", options: ["/ prefix", "= exact match", "~ regex", "^~ preferential"], correctAnswer: 1 },
    { question: "server_name?", options: ["IP", "Domain (virtual host)", "Port", "Username"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Complete Virtual Host",
      language: "nginx",
      code: `# /etc/nginx/sites-available/myapp
server {
    listen 80;
    listen [::]:80;
    server_name myapp.com www.myapp.com;
    
    root /var/www/myapp/public;
    index index.html;
    
    # Logs
    access_log /var/log/nginx/myapp-access.log;
    error_log /var/log/nginx/myapp-error.log;
    
    # Static files
    location / {
        try_files $uri $uri/ =404;
    }
    
    # API proxy
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    
    # Cache static assets
    location ~* \\.(js|css|png|jpg|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}`
    }
  ]
};