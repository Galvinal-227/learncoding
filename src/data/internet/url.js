export const chapter = {
  slug: "internet-url",
  title: "URL Structure",
  description: "Anatomi URL: protocol, domain, path, query parameters, fragment.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["internet-introduction"],
  tags: ["internet", "url", "structure", "web-address"],
  order: 13,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Anatomi URL

\`\`\`
https://www.example.com:443/blog/article?id=1#comments
└─┬─┘ └─────┬─────┘└┬┘└────┬────┘└───┬───┘└──┬──┘
  │         │       │     │         │       │
protocol  domain  port  path    query    fragment
\`\`\`

| Bagian | Contoh | Deskripsi |
|--------|--------|-----------|
| **Protocol** | https:// | HTTP/HTTPS/FTP |
| **Domain** | www.example.com | Alamat website |
| **Port** | :443 | Opsional (default: 80/443) |
| **Path** | /blog/article | Halaman/resource spesifik |
| **Query** | ?id=1&lang=id | Parameter key=value |
| **Fragment** | #comments | Anchor ke section spesifik |

## URL Encoding

Karakter khusus di-encode untuk aman dikirim via URL:

\`\`\`
Spasi → %20 atau +
& → %26
# → %23
/ → %2F
\`\`\`

\`\`\`javascript
encodeURIComponent('Halo Dunia!'); // "Halo%20Dunia!"
decodeURIComponent('Halo%20Dunia%21'); // "Halo Dunia!"
\`\`\`
  `,

  quiz: [
    { question: "Query string diawali?", options: ["#", "?", "&", "/"], correctAnswer: 1 },
    { question: "Fragment diawali?", options: ["?", "#", "&", "/"], correctAnswer: 1 }
  ],

  codeExamples: []
};