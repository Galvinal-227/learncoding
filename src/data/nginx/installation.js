export const chapter = {
  slug: "nginx-installation",
  title: "Instalasi & Setup",
  description: "Install Nginx di Ubuntu, CentOS, Mac, dan konfigurasi dasar pertama.",
  icon: "SiNginx",
  color: "#009639",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["nginx-introduction"],
  tags: ["nginx", "instalasi", "setup", "first-config"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Ubuntu/Debian

\`\`\`bash
sudo apt update
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
# Cek: http://your-server-ip
\`\`\`

## CentOS/RHEL

\`\`\`bash
sudo yum install -y epel-release
sudo yum install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
\`\`\`

## Mac (Homebrew)

\`\`\`bash
brew install nginx
brew services start nginx
# Config: /opt/homebrew/etc/nginx/
\`\`\`

## Docker

\`\`\`bash
docker run -d --name nginx -p 80:80 nginx:alpine
\`\`\`

## First Configuration

\`\`\`nginx
# /etc/nginx/sites-available/default
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    root /var/www/html;
    index index.html index.htm;
    
    server_name _;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
\`\`\`

\`\`\`bash
# Test & reload
sudo nginx -t
sudo systemctl reload nginx
\`\`\`

## Firewall

\`\`\`bash
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
\`\`\`
  `,

  quiz: [
    { question: "nginx -t?", options: ["Start", "Test configuration", "Stop", "Reload"], correctAnswer: 1 },
    { question: "Default Nginx port?", options: ["3000", "80", "443", "8080"], correctAnswer: 1 }
  ],

  codeExamples: []
};