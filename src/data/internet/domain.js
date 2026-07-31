export const chapter = {
  slug: "internet-domain",
  title: "Domain & Hosting",
  description: "Pahami domain names, registrars, DNS settings, dan cara memilih hosting.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["internet-dns"],
  tags: ["internet", "domain", "hosting", "web"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Struktur Domain

\`\`\`
subdomain.domain.tld
   www  . google . com
   api  . github . io
   blog . example . co.id
\`\`\`

## TLD (Top-Level Domain)

| Jenis | Contoh |
|-------|--------|
| **gTLD** (generic) | .com, .org, .net, .io, .dev |
| **ccTLD** (country) | .id, .co.id, .sg, .my, .jp |
| **sTLD** (sponsored) | .gov, .edu, .mil |
| **New gTLD** | .app, .blog, .online, .tech |

## Registrar Domain

| Registrar | Keunggulan |
|-----------|------------|
| **Namecheap** | Murah, reliable |
| **Cloudflare** | Harga modal (no markup) |
| **Google Domains** | Simpel, terintegrasi |
| **Niagahoster** | Lokal Indonesia |
| **GoDaddy** | Populer (banyak upsell) |

## Tips Memilih Domain

\`\`\`
✅ Pendek & mudah diingat
✅ Hindari angka & hyphen
✅ .com adalah king
✅ Cek trademark (jangan melanggar)
✅ Beli varian (.com, .id) untuk lindungi brand
\`\`\`
  `,

  quiz: [
    { question: "ccTLD Indonesia?", options: [".com", ".id / .co.id", ".io", ".org"], correctAnswer: 1 },
    { question: "Registrar domain termurah?", options: ["GoDaddy", "Cloudflare (at cost)", "Google", "Namecheap"], correctAnswer: 1 }
  ],

  codeExamples: []
};