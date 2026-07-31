export const chapter = {
  slug: "ux-design-introduction",
  title: "Pengenalan UX Design",
  description: "Pahami apa itu UX Design, prosesnya, dan kenapa penting untuk developer.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["ux-design", "user-experience", "research", "usability"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu UX Design?

UX (User Experience) Design adalah proses **membuat produk yang memberikan pengalaman bermakna** bagi pengguna. Fokus pada **kemudahan, efisiensi, dan kepuasan**.

## UX vs UI (Recap)

| UX | UI |
|----|----|
| Bagaimana cara kerjanya | Bagaimana tampilannya |
| Research & testing | Warna & tipografi |
| Information architecture | Visual design |
| User flows | Component design |
| "Mudah digunakan" | "Terlihat bagus" |

## UX Design Process (Design Thinking)

\`\`\`
1. Empathize  - Riset user, pahami masalah
2. Define     - Definisikan masalah utama
3. Ideate     - Brainstorm solusi
4. Prototype  - Buat versi uji coba
5. Test       - Uji dengan user nyata
\`\`\`

## Kenapa Developer Perlu UX?

- 🎯 **Bikin fitur yang benar-benar dibutuhkan**
- 🐛 **Kurangi rework (sudah divalidasi user)**
- 😊 **User happy = product success**
- 💰 **UX yang baik = konversi lebih tinggi**
- 🤝 **Kolaborasi lebih baik dengan UX designer**

## UX Laws (Hukum Psikologi)

| Law | Deskripsi |
|-----|-----------|
| **Hick's Law** | Banyak pilihan = lama decide |
| **Fitts's Law** | Target besar + dekat = mudah klik |
| **Jakob's Law** | User prefer pola yang familiar |
| **Miller's Law** | Manusia ingat 7±2 item |
| **Tesler's Law** | Setiap sistem punya kompleksitas minimum |

## UX Metrics

| Metric | Deskripsi |
|--------|-----------|
| **Task Success Rate** | % user menyelesaikan task |
| **Time on Task** | Waktu untuk menyelesaikan task |
| **Error Rate** | Jumlah error yang dibuat user |
| **Satisfaction Score** | NPS, CSAT |
| **Retention** | User kembali lagi? |
  `,

  quiz: [
    { question: "UX: kepanjangan?", options: ["User Experience", "User Interface", "Ultra Xtreme", "Unified Exchange"], correctAnswer: 0 },
    { question: "Design Thinking step 1?", options: ["Prototype", "Empathize (research)", "Test", "Code"], correctAnswer: 1 },
    { question: "Hick's Law?", options: ["Speed", "More choices = slower decisions", "Color theory", "Layout"], correctAnswer: 1 }
  ],

  codeExamples: []
};