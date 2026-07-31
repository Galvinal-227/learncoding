export const chapter = {
  slug: "internet-web-standards",
  title: "Web Standards",
  description: "Pahami organisasi standar web: W3C, WHATWG, ECMA, dan proses standardisasi.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["internet-introduction"],
  tags: ["internet", "standards", "w3c", "ecma"],
  order: 16,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Web Standards?

Web standards adalah **aturan dan spesifikasi** yang memastikan website berjalan konsisten di semua browser. Tanpa standar = chaos (setiap browser render berbeda).

## Organisasi Standar Web

| Organisasi | Mengatur | Contoh |
|-----------|----------|--------|
| **W3C** | HTML, CSS, SVG, Accessibility | HTML5, CSS Grid, WCAG |
| **WHATWG** | HTML Living Standard | HTML spec terkini |
| **ECMA International** | JavaScript (ECMAScript) | ES6, ES2024 |
| **IETF** | HTTP, TCP/IP, TLS | HTTP/2, HTTP/3 |
| **TC39** | JavaScript proposals | Optional chaining, BigInt |

## Proses Standardisasi (Contoh: JavaScript)

\`\`\`
Stage 0: Ide (Strawman)
Stage 1: Proposal
Stage 2: Draft
Stage 3: Candidate (implementasi browser)
Stage 4: Finished (jadi standar!)
\`\`\`

## Kenapa Web Standards Penting?

- 🌐 **Interoperabilitas** - Website jalan di semua browser
- 🔮 **Future-proof** - Kode tidak obsolete
- ♿ **Accessibility** - Bisa diakses semua orang
- 📚 **Documentation** - Ada spesifikasi resmi
- 🤝 **Collaboration** - Semua browser ikut standar yang sama

## Contoh: CSS Grid

\`\`\`
2011: Microsoft usulkan CSS Grid
2012-2016: Working draft, revisi
2017: CSS Grid jadi W3C Recommendation
Sekarang: Didukung semua browser!
\`\`\`

## Cara Ikut Perkembangan Standar

- 🌐 [w3.org](https://w3.org) - W3C specs
- 📝 [github.com/tc39/proposals](https://github.com/tc39/proposals) - JavaScript proposals
- 🐦 [@intenttoship](https://twitter.com/intenttoship) - Browser updates
- 📊 [caniuse.com](https://caniuse.com) - Cek browser support
  `,

  quiz: [
    { question: "W3C mengatur?", options: ["JavaScript", "HTML, CSS, SVG, Accessibility", "HTTP", "TCP/IP"], correctAnswer: 1 },
    { question: "JavaScript distandarisasi oleh?", options: ["W3C", "ECMA International (TC39)", "IETF", "WHATWG"], correctAnswer: 1 },
    { question: "Stage 4 TC39 artinya?", options: ["Ide awal", "Sudah jadi standar resmi", "Draft", "Ditolak"], correctAnswer: 1 }
  ],

  codeExamples: []
};