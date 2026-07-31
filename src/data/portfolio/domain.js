export const chapter = {
  slug: "portfolio-domain",
  title: "Domain & Hosting",
  description: "Beli domain kustom dan setup hosting untuk portfolio profesional.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["portfolio-introduction"],
  tags: ["portfolio", "domain", "hosting", "custom"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Domain Name Ideas

\`\`\`
✅ firstnamelastname.com     (budisantoso.com)
✅ firstname.dev              (budi.dev)
✅ lastname.io                (santoso.io)
✅ firstname.me               (budi.me)

❌ nicknames (xXx_coder_xXx)
❌ too long (budisantoso-fullstackdeveloper.com)
❌ hyphens (budi-santoso-dev.com)
\`\`\`

## Registrar Domain

| Registrar | Harga .com | Harga .dev |
|-----------|-----------|-----------|
| **Namecheap** | $10-15/tahun | $15-20/tahun |
| **Cloudflare** | $9.77/tahun | $12/tahun |
| **Google Domains** | $12/tahun | $12/tahun |
| **Porkbun** | $9/tahun | $12/tahun |

## Domain + Hosting Setup

\`\`\`
1. Beli domain di Namecheap/Cloudflare
2. Setup hosting di Vercel/Netlify (gratis)
3. Add custom domain di hosting
4. Update DNS records
5. Tunggu propagation (1-48 jam, biasanya <30 menit)
6. HTTPS auto-provisioned
\`\`\`

## DNS Records

\`\`\`
Type    Name    Value
A       @       76.76.21.21 (Vercel IP)
CNAME   www     cname.vercel-dns.com
\`\`\`

## Email with Domain (Optional)

\`\`\`
- Zoho Mail (free up to 5 users)
- Forward Email (free)
- Cloudflare Email Routing (free)
- Google Workspace ($6/bln)
\`\`\`

## Checklist

\`\`\`
✅ Nama domain profesional
✅ HTTPS enabled
✅ www redirect ke root (atau sebaliknya)
✅ Email profesional (opsional)
✅ Privacy protection (whois guard)
✅ Auto-renewal (jangan expired!)
\`\`\`
  `,

  quiz: [
    { question: "Domain: .dev?", options: ["Company only", "Developer portfolio (trending)", "Country", "Not allowed"], correctAnswer: 1 },
    { question: "DNS propagation?", options: ["Instant", "1-48 jam (biasanya <30 menit)", "1 minggu", "1 bulan"], correctAnswer: 1 }
  ],

  codeExamples: []
};