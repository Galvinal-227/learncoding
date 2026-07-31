export const chapter = {
  slug: "open-source-introduction",
  title: "Pengenalan Open Source",
  description: "Pahami apa itu open source, kenapa penting, dan manfaat berkontribusi.",
  icon: "SiOpensourceinitiative",
  color: "#3DA639",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["open-source", "community", "contribution", "github"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Open Source?

Open Source adalah **software yang kode sumbernya tersedia untuk publik**. Siapa pun bisa **melihat, menggunakan, memodifikasi, dan mendistribusikan**. Lawannya adalah **proprietary software** (kode tertutup).

## Kenapa Open Source?

- 🌍 **Kolaborasi global** - Developer dari seluruh dunia berkontribusi
- 📚 **Belajar** - Baca kode developer hebat, belajar best practices
- 🎯 **Portfolio** - Kontribusi nyata yang bisa ditunjukkan ke recruiter
- 🤝 **Networking** - Kenalan dengan developer dari perusahaan top
- 💰 **Karir** - Banyak perusahaan rekrut dari open source contributors
- 🔧 **Tools gratis** - 90%+ tools developer adalah open source

## Contoh Proyek Open Source

| Proyek | Deskripsi | Kontributor |
|--------|-----------|-------------|
| **Linux** | Operating system kernel | 15,000+ |
| **VS Code** | Code editor | 1,500+ |
| **React** | UI library (Meta) | 1,600+ |
| **Node.js** | JavaScript runtime | 3,000+ |
| **TensorFlow** | Machine learning (Google) | 3,000+ |
| **Kubernetes** | Container orchestration (Google) | 3,500+ |

## Jenis Kontribusi

Bukan cuma coding! Banyak cara berkontribusi:

| Jenis | Contoh |
|-------|--------|
| 💻 **Code** | Fix bug, add feature, improve performance |
| 📝 **Documentation** | Perbaiki typo, tambah contoh, translate |
| 🎨 **Design** | UI/UX improvement, logo, branding |
| 🐛 **Bug Report** | Laporkan bug dengan detail |
| 💬 **Support** | Jawab pertanyaan di forum/issue |
| 📊 **Testing** | Test beta, QA, reproduce bugs |
| 🌍 **Translation** | Terjemahkan dokumentasi |
| 📢 **Advocacy** | Tulis blog, share di sosial media |

## Manfaat untuk Developer

- 📚 **Belajar real-world code** - Baca kode production skala besar
- 🎯 **Portfolio** - Green squares di GitHub = bukti konsistensi
- 🤝 **Mentorship** - Maintainer sering kasih feedback kode
- 💼 **Job opportunities** - "Kontributor React" di CV = standout!
- 🧠 **Problem solving** - Hadapi masalah nyata, bukan tutorial
- 🌐 **Global network** - Kenalan dengan developer seluruh dunia

## Mitos tentang Open Source

❌ **"Harus jago coding"** → Banyak kontribusi non-code!
❌ **"Harus punya banyak waktu"** → 1-2 jam/minggu cukup
❌ **"Cuma untuk senior developer"** → Banyak label "good first issue"
❌ **"Tidak dibayar"** → Banyak perusahaan sponsor open source
  `,

  quiz: [
    { question: "Open Source?", options: ["Software gratis", "Software dengan kode sumber terbuka untuk publik", "Software bajakan", "Software cloud"], correctAnswer: 1 },
    { question: "Kontribusi selain coding?", options: ["Tidak ada", "Dokumentasi, testing, desain, support", "Hanya code review", "Hanya bug report"], correctAnswer: 1 },
    { question: "'good first issue'?", options: ["Bug sulit", "Issue untuk kontributor baru (mudah)", "Bug critical", "Feature request"], correctAnswer: 1 }
  ],

  codeExamples: []
};