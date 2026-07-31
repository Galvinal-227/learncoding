export const chapter = {
  slug: "internet-https",
  title: "HTTPS & SSL/TLS",
  description: "Pahami HTTPS, SSL/TLS encryption, certificates, dan cara kerja secure connections.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["internet-http"],
  tags: ["internet", "https", "ssl", "tls", "security"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## HTTP vs HTTPS

| HTTP | HTTPS |
|------|-------|
| Plain text (tidak terenkripsi) | Terenkripsi (TLS/SSL) |
| Port 80 | Port 443 |
| Rentan MITM attack | Aman |
| ❌ Tidak dapat gembok | ✅ Ada gembok 🔒 |
| SEO: peringkat rendah | SEO: peringkat lebih tinggi |

## TLS Handshake

\`\`\`
Client                          Server
  │────── ClientHello ──────────▶│
  │       (supported ciphers)    │
  │◀───── ServerHello ──────────│
  │       (chosen cipher + cert) │
  │◀───── Certificate ──────────│
  │────── Key Exchange ─────────▶│
  │◀───── Finished ─────────────│
  │────── Finished ─────────────▶│
  │                              │
  │◀════ Encrypted Data ═══════▶│
\`\`\`

## SSL/TLS Certificate

Certificate berisi:
- Domain name
- Organization
- Issuer (CA - Certificate Authority)
- Public key
- Valid from / to
- Digital signature

### Jenis Certificate:
| Jenis | Validasi | Contoh |
|-------|----------|--------|
| **DV (Domain Validation)** | Hanya cek domain ownership | Let's Encrypt (gratis) |
| **OV (Organization Validation)** | Cek organisasi | Mid-level |
| **EV (Extended Validation)** | Cek ketat, green bar | Bank, e-commerce besar |

## Let's Encrypt

Gratis, otomatis, open certificate authority:

\`\`\`bash
certbot --nginx -d example.com -d www.example.com
\`\`\`

## HSTS (HTTP Strict Transport Security)

\`\`\`
Strict-Transport-Security: max-age=31536000; includeSubDomains
\`\`\`

Force HTTPS, cegah downgrade attack.
  `,

  quiz: [
    { question: "HTTPS port?", options: ["80", "443", "8080", "3000"], correctAnswer: 1 },
    { question: "Let's Encrypt?", options: ["Domain registrar", "SSL certificate gratis + otomatis", "Hosting", "Firewall"], correctAnswer: 1 },
    { question: "TLS vs SSL?", options: ["Sama", "TLS: modern; SSL: deprecated", "SSL lebih aman", "TLS deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};