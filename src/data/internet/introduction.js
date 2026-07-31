export const chapter = {
  slug: "internet-introduction",
  title: "Pengenalan Internet",
  description: "Pahami apa itu internet, sejarahnya, dan infrastruktur yang membuatnya bekerja.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["internet", "web", "network", "pengenalan"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Internet?

Internet adalah **jaringan global** yang menghubungkan miliaran komputer di seluruh dunia. Internet adalah infrastruktur, sedangkan **World Wide Web (WWW)** adalah salah satu layanan yang berjalan di atasnya.

## Internet vs World Wide Web

| Internet | World Wide Web |
|----------|---------------|
| Jaringan fisik (kabel, router, server) | Kumpulan halaman web |
| Infrastruktur | Layanan di atas internet |
| Email, FTP, VoIP juga pakai internet | Hanya HTTP/HTTPS |
| Ada sejak 1960-an (ARPANET) | Diciptakan 1989 oleh Tim Berners-Lee |

## Sejarah Singkat

- **1969** - ARPANET, cikal bakal internet (4 komputer)
- **1973** - TCP/IP protocol ditemukan
- **1983** - DNS diciptakan
- **1989** - Tim Berners-Lee menciptakan World Wide Web
- **1991** - Website pertama online
- **1998** - Google didirikan
- **2007** - iPhone, era mobile internet
- **2024** - 5+ miliar pengguna internet

## Infrastruktur Internet

\`\`\`
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Device  │────▶│   ISP    │────▶│ Backbone │
│  (HP/PC) │     │(Indihome)│     │ Internet │
└──────────┘     └──────────┘     └──────────┘
                                       │
                                 ┌─────┴─────┐
                                 │  Server   │
                                 │(Website)  │
                                 └───────────┘
\`\`\`

- **ISP (Internet Service Provider)**: Indihome, Biznet, XL
- **Backbone**: Kabel fiber optik bawah laut antar benua
- **IXP (Internet Exchange Point)**: Titik temu jaringan
- **Data Center**: Gedung berisi ribuan server

## Angka Penting

- 🌍 5+ miliar pengguna internet
- 📱 60% traffic dari mobile
- 🎬 80% traffic adalah video streaming
- 🔌 500+ kabel bawah laut menghubungkan benua
- ⚡ 200+ miliar email dikirim per hari
  `,

  quiz: [
    { question: "Internet vs WWW?", options: ["Sama", "Internet: jaringan; WWW: layanan web", "WWW lebih tua", "Internet hanya WiFi"], correctAnswer: 1 },
    { question: "Siapa pencipta WWW?", options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"], correctAnswer: 1 },
    { question: "ISP singkatan?", options: ["Internet Service Provider", "International Signal Protocol", "Internet Security Program", "Integrated System Platform"], correctAnswer: 0 }
  ],

  codeExamples: []
};