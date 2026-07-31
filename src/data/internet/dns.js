export const chapter = {
  slug: "internet-dns",
  title: "DNS (Domain Name System)",
  description: "Pahami DNS - buku telepon internet yang menerjemahkan domain ke IP address.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["internet-how-internet-works"],
  tags: ["internet", "dns", "domain", "ip-address"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu DNS?

DNS (Domain Name System) adalah sistem yang **menerjemahkan nama domain** (google.com) menjadi **IP address** (142.250.80.46). Seperti buku telepon internet.

## Cara Kerja DNS

\`\`\`
Browser → DNS Resolver → Root Server → TLD Server → Authoritative Server
\`\`\`

### Contoh: google.com
\`\`\`
1. Browser: "Siapa google.com?"
2. DNS Resolver (ISP): Cek cache → tidak ada
3. Root Server: "Tanya ke .com TLD server (1.2.3.4)"
4. .com TLD Server: "Tanya ke Google DNS (5.6.7.8)"
5. Google DNS: "google.com = 142.250.80.46"
6. Resolver: Cache + kirim ke browser
7. Browser: Konek ke 142.250.80.46
\`\`\`

## DNS Record Types

| Record | Fungsi | Contoh |
|--------|--------|--------|
| **A** | Domain → IPv4 | example.com → 93.184.216.34 |
| **AAAA** | Domain → IPv6 | example.com → 2606:2800:220:1:: |
| **CNAME** | Alias | www → example.com |
| **MX** | Mail server | Email routing |
| **NS** | Nameserver | DNS server untuk domain |
| **TXT** | Text data | SPF, DKIM, verifikasi |
| **CAA** | Certificate Authority | SSL issuer restriction |

## DNS Propagation

Saat ganti DNS, perubahan bisa butuh **24-48 jam** menyebar ke seluruh dunia karena caching.

## DNS Tools

\`\`\`bash
# Cek A record
nslookup google.com
dig google.com

# Cek MX record
dig google.com MX

# Cek DNS propagation
# https://www.whatsmydns.net
\`\`\`
  `,

  quiz: [
    { question: "DNS fungsi?", options: ["Hosting", "Domain → IP address", "Firewall", "Database"], correctAnswer: 1 },
    { question: "A record?", options: ["Email", "Domain → IPv4", "Alias", "Text"], correctAnswer: 1 },
    { question: "CNAME?", options: ["IP address", "Alias (www → root)", "Mail", "SSL"], correctAnswer: 1 }
  ],

  codeExamples: []
};