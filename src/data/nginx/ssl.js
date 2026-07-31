export const chapter = {
  slug: "nginx-ssl",
  title: "SSL/TLS & HTTPS",
  description: "Setup SSL/TLS dengan Let's Encrypt, redirect HTTP ke HTTPS, HSTS.",
  icon: "SiNginx",
  color: "#009639",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["nginx-configuration"],
  tags: ["nginx", "ssl", "https", "lets-encrypt"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Let's Encrypt (Certbot)

\`\`\`bash
# Install Certbot (Ubuntu)
sudo apt install -y certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d example.com -d www.example.com

# Auto-renewal (Certbot auto-adds cron job)
sudo certbot renew --dry-run  # Test renewal
\`\`\`

## SSL Server Block

\`\`\`nginx
# HTTP → HTTPS redirect
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;
    
    # SSL certificates (Certbot auto-generates)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # SSL configuration
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    root /var/www/example;
    index index.html;
}
\`\`\`

## Manual SSL Configuration

\`\`\`nginx
server {
    listen 443 ssl http2;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # Protocols (TLS 1.2+, disable old SSL)
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # Ciphers
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers on;
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # Session cache
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
}
\`\`\`

## HSTS Header

\`\`\`nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
\`\`\`

## Redirect HTTP → HTTPS

\`\`\`nginx
# Method 1: Separate server block (recommended)
server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}

# Method 2: Same server block
server {
    listen 80;
    listen 443 ssl;
    
    if ($scheme = http) {
        return 301 https://$host$request_uri;
    }
}
\`\`\`

## Wildcard Certificate

\`\`\`bash
certbot certonly --manual --preferred-challenges dns -d "*.example.com"
\`\`\`
  `,

  quiz: [
    { question: "Certbot?", options: ["Database", "Let's Encrypt SSL certificate tool", "Firewall", "Load balancer"], correctAnswer: 1 },
    { question: "HSTS?", options: ["Cache", "Force HTTPS (HTTP Strict Transport Security)", "Redirect", "Cookie"], correctAnswer: 1 }
  ],

  codeExamples: []
};