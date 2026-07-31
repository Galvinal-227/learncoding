export const chapter = {
  slug: "nginx-security",
  title: "Security Hardening",
  description: "Amankan Nginx: rate limiting, IP blocking, security headers, DDoS protection.",
  icon: "SiNginx",
  color: "#009639",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["nginx-configuration"],
  tags: ["nginx", "security", "rate-limiting", "hardening"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Rate Limiting

\`\`\`nginx
# Define rate limit zone
http {
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;
    limit_conn_zone $binary_remote_addr zone=conn_limit:10m;
    
    server {
        location /api/ {
            # Rate limit: 10 requests/second, burst 20
            limit_req zone=api_limit burst=20 nodelay;
            
            # Connection limit: max 10 connections per IP
            limit_conn conn_limit 10;
            
            proxy_pass http://backend;
        }
        
        location /login/ {
            # Strict rate limit untuk login
            limit_req zone=api_limit burst=3 nodelay;
            proxy_pass http://backend;
        }
    }
}
\`\`\`

## IP Blocking

\`\`\`nginx
# Block specific IP
deny 192.168.1.100;
deny 10.0.0.0/8;

# Allow only specific IPs
allow 192.168.1.0/24;
deny all;
\`\`\`

## Security Headers

\`\`\`nginx
# snippets/security-headers.conf
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;

# CSP (Content Security Policy)
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" always;
\`\`\`

## Hide Nginx Version

\`\`\`nginx
http {
    server_tokens off;  # Sembunyikan versi Nginx di error pages
}
\`\`\`

## Request Size Limit

\`\`\`nginx
server {
    client_max_body_size 10M;  # Max upload 10MB
    client_body_timeout 12;
    client_header_timeout 12;
}
\`\`\`

## Buffer Overflow Protection

\`\`\`nginx
server {
    client_body_buffer_size 10K;
    client_header_buffer_size 1k;
    large_client_header_buffers 2 1k;
}
\`\`\`

## Bot Protection

\`\`\`nginx
# Block common bad bots
if ($http_user_agent ~* (wget|curl|libwww-perl|scrapy|python-requests)) {
    return 403;
}

# Block empty user agent
if ($http_user_agent = "") {
    return 403;
}
\`\`\`

## Security Checklist

\`\`\`
✅ SSL/TLS enabled (HTTPS only)
✅ HSTS header set
✅ Rate limiting configured
✅ Security headers applied
✅ server_tokens off
✅ client_max_body_size limited
✅ Firewall (UFW) enabled
✅ Regular updates (apt update)
✅ Fail2ban installed
✅ Access logs monitored
\`\`\`
  `,

  quiz: [
    { question: "limit_req_zone?", options: ["Cache", "Rate limiting (requests per second)", "SSL", "Proxy"], correctAnswer: 1 },
    { question: "server_tokens off?", options: ["Debug", "Hide Nginx version", "Disable SSL", "Turn off server"], correctAnswer: 1 }
  ],

  codeExamples: []
};