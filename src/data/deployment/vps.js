export const chapter = {
  slug: "deployment-vps",
  title: "VPS (Virtual Private Server)",
  description: "Deploy aplikasi Node.js ke VPS dengan Nginx, PM2, dan SSL.",
  icon: "SiDigitalocean",
  color: "#0080FF",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["deployment-introduction", "linux-introduction", "nginx-introduction"],
  tags: ["deployment", "vps", "nginx", "pm2", "nodejs"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Deploy Node.js ke VPS

### Setup VPS
\`\`\`bash
# SSH ke server
ssh root@your-server-ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install Nginx
apt install -y nginx

# Install PM2 (process manager)
npm install -g pm2

# Install Git
apt install -y git
\`\`\`

### Deploy Aplikasi
\`\`\`bash
# Clone repo
cd /var/www
git clone https://github.com/user/myapp.git
cd myapp

# Install dependencies
npm ci

# Setup environment
cp .env.example .env
nano .env  # Edit production values

# Build (jika perlu)
npm run build

# Start dengan PM2
pm2 start npm --name "myapp" -- start
pm2 save
pm2 startup  # Auto-start setelah reboot
\`\`\`

### Nginx Reverse Proxy
\`\`\`nginx
# /etc/nginx/sites-available/myapp
server {
    listen 80;
    server_name myapp.com www.myapp.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_cache_bypass \$http_upgrade;
    }
}
\`\`\`

\`\`\`bash
ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
\`\`\`

### SSL dengan Let's Encrypt
\`\`\`bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d myapp.com -d www.myapp.com
# Auto-renew: certbot renew --dry-run
\`\`\`

## Keamanan Dasar

\`\`\`bash
# Firewall
ufw allow 22    # SSH
ufw allow 80    # HTTP
ufw allow 443   # HTTPS
ufw enable

# Fail2ban (anti brute force)
apt install -y fail2ban
\`\`\`
  `,

  quiz: [
    { question: "PM2 untuk?", options: ["Database", "Process manager Node.js (keep alive, restart)", "Web server", "Firewall"], correctAnswer: 1 },
    { question: "Nginx sebagai?", options: ["Database", "Reverse proxy + static files", "Process manager", "Firewall"], correctAnswer: 1 },
    { question: "Certbot untuk?", options: ["Database", "SSL gratis (Let's Encrypt)", "Deploy", "Monitoring"], correctAnswer: 1 }
  ],

  codeExamples: []
};