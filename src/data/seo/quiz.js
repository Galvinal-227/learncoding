export const chapter = {
  slug: "quiz",
  title: "Final Assessment",
  description: "Uji pemahaman komprehensif kamu tentang dasar-dasar SEO, On-Page, Off-Page, dan Technical.",
  icon: "TbChecklist",
  color: "#2E7D32",
  difficulty: "Advanced",
  estimatedReadingTime: 10,
  prerequisites: [
    "introduction", "meta-tags", "robots-txt", 
    "sitemap", "backlinks", "mobile-friendly", 
    "performance", "structured-data", "tools"
  ],
  tags: ["exam", "quiz", "certification"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Selamat! 🎉

Kamu telah mencapai tahap akhir dari modul **Belajar SEO Lengkap**. Mulai dari memahami bagaimana mesin pencari bekerja, optimasi Meta Tags, mengatur *Crawl Budget* dengan robots.txt, meracik Core Web Vitals, hingga membangun Backlink yang berkualitas.

## Ujian Akhir (Final Assessment)

Di bagian bawah halaman ini, terdapat kuis komprehensif yang merangkum semua materi yang sudah kamu pelajari. 

**Persiapan Ujian:**
1. Pastikan kamu sudah memahami perbedaan On-Page, Off-Page, dan Technical SEO.
2. Ingat kembali kode-kode HTML meta dasar yang wajib ada.
3. Review metrik-metrik kecepatan (LCP, INP, CLS).

Kuis ini dirancang untuk memastikan kamu siap terjun langsung menerapkan praktik SEO di website atau project nyata kamu. 

**Selamat mengerjakan kuis, dan sukses selalu untuk trafik organikmu!** 🚀
  `,
  quiz: [
    {
      question: "Mana dari pilihan berikut yang merupakan kombinasi SEO On-Page?",
      options: [
        "Mendapatkan backlink dari Wikipedia dan PR News",
        "Membuat konten berkualitas, optimasi Meta Title, dan URL yang deskriptif",
        "Submit sitemap XML dan setting robots.txt",
        "Membayar influencer untuk share artikel"
      ],
      correctAnswer: 1
    },
    {
      question: "Mengapa teks dalam website tidak boleh disembunyikan pakai 'display: none' khusus di versi Mobile?",
      options: [
        "Karena melanggar hukum hak cipta",
        "Karena desain akan menjadi jelek",
        "Karena era Mobile-First Indexing menyebabkan teks yang disembunyikan di HP tidak akan diindeks oleh Google",
        "Karena akan membuat baterai HP pengguna cepat habis"
      ],
      correctAnswer: 2
    },
    {
      question: "Tag HTML <link rel='canonical' href='...'> berfungsi untuk?",
      options: [
        "Membuat gambar loading lebih cepat",
        "Mendapatkan backlink secara instan",
        "Mengatasi isu konten duplikat dengan menunjuk URL utama",
        "Mengarahkan paksa pengguna ke halaman iklan"
      ],
      correctAnswer: 2
    },
    {
      question: "Pilihan mana yang BUKAN merupakan bagian dari Core Web Vitals?",
      options: [
        "Largest Contentful Paint (LCP)",
        "Cumulative Layout Shift (CLS)",
        "Domain Authority (DA)",
        "Interaction to Next Paint (INP)"
      ],
      correctAnswer: 2
    },
    {
      question: "Jika kamu ingin menyembunyikan halaman /wp-admin/ dari mesin pencari, metode paling efisien adalah menggunakan...",
      options: [
        "File robots.txt",
        "Schema.org JSON-LD",
        "Google Analytics",
        "Canonical tags"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: []
};