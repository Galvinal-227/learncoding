export const chapter = {
  slug: "deployment-domain-ssl",
  title: "Domain & SSL",
  description: "Setup domain kustom dan SSL certificate untuk aplikasi production.",
  icon: "SiVercel",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["deployment-introduction"],
  tags: ["deployment", "domain", "ssl", "dns"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Membeli Domain

### Provider Domain
- **Namecheap** - Murah, reliable
- **Cloudflare Registrar** - Harga modal, terintegrasi Cloudflare
- **Google Domains** - Simpel, terintegrasi Google
- **Niagahoster** - Lokal Indonesia
- **GoDaddy** - Populer (tapi upsell banyak)

## DNS Records

| Record | Fungsi | Contoh |
|--------|--------|--------|
| **A** | Point ke IPv4 | myapp.com → 123.456.789.0 |
| **AAAA** | Point ke IPv6 | myapp.com → 2001:db8::1 |
| **CNAME** | Alias ke domain lain | www → myapp.com |
| **MX** | Email server | Mail routing |
| **TXT** | Verifikasi, SPF | Google verification |

## Setup DNS

\`\`\`
Vercel:
1. Tambah domain di Vercel: myapp.com
2. Vercel kasih IP/nameserver
3. Update DNS di registrar

Netlify:
1. Domain settings → Add custom domain
2. Update DNS A record ke Netlify IP
   (atau pakai Netlify DNS nameservers)
\`\`\`

## SSL/TLS

### Let's Encrypt (Gratis!)
\`\`\`bash
# Certbot untuk Nginx
certbot --nginx -d myapp.com -d www.myapp.com

# Auto-renew
certbot renew --dry-run
\`\`\`

### Platform SSL (Auto)
- **Vercel**: SSL auto, tidak perlu setup
- **Netlify**: SSL auto via Let's Encrypt
- **Cloudflare**: Universal SSL gratis

## Redirect HTTP ke HTTPS

\`\`\`nginx
server {
    listen 80;
    server_name myapp.com;
    return 301 https://\$server_name\$request_uri;
}
\`\`\`

## HSTS Header

\`\`\`nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
\`\`\`
  `,

  quiz: [
    { question: "A record untuk?", options: ["Email", "Point domain ke IPv4", "Subdomain", "Verifikasi"], correctAnswer: 1 },
    { question: "CNAME untuk?", options: ["IP address", "Alias ke domain lain (www → root)", "Email", "SSL"], correctAnswer: 1 },
    { question: "Let's Encrypt?", options: ["Domain registrar", "SSL certificate gratis", "Hosting", "Database"], correctAnswer: 1 }
  ],

  codeExamples: []
};