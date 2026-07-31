export const chapter = {
  slug: "open-source-licensing",
  title: "Lisensi Open Source",
  description: "Pahami jenis lisensi open source: MIT, GPL, Apache, dan implikasinya.",
  icon: "SiOpensourceinitiative",
  color: "#3DA639",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["open-source-introduction"],
  tags: ["open-source", "license", "mit", "gpl"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Lisensi Penting?

Lisensi menentukan **bagaimana orang lain boleh menggunakan kode kamu**. Tanpa lisensi = **semua hak dilindungi** (orang tidak boleh pakai).

## Lisensi Populer

| Lisensi | Tipe | Deskripsi |
|---------|------|-----------|
| **MIT** | Permissive | Bebas pakai, modifikasi, distribusi. Hanya butuh attribution. |
| **Apache 2.0** | Permissive | Seperti MIT + patent protection. |
| **GPL v3** | Copyleft | Jika pakai kode GPL, project kamu HARUS pakai GPL juga. |
| **BSD** | Permissive | Mirip MIT, dengan clause tambahan. |
| **ISC** | Permissive | Simplified MIT. |

## Permissive vs Copyleft

| | Permissive (MIT, Apache) | Copyleft (GPL) |
|---|------------------------|----------------|
| Bebas pakai? | ✅ | ✅ |
| Modifikasi? | ✅ | ✅ |
| Komersial? | ✅ | ✅ |
| Wajib buka kode? | ❌ | ✅ (jika distribusi) |
| Contoh | React, Express | Linux, Git |

## Cara Memilih Lisensi

\`\`\`
✅ Library/framework → MIT (adopsi luas)
✅ Tool/utility → MIT atau ISC
✅ Ingin tetap open source → GPL
✅ Kontribusi ke perusahaan → Apache 2.0 (patent protection)
✅ Tidak ingin orang lain pakai → Proprietary (no license)

Situs: choosealicense.com
\`\`\`

## Menambah Lisensi

\`\`\`bash
# Buat file LICENSE di root project
echo "MIT License" > LICENSE
# Copy teks lisensi dari choosealicense.com
\`\`\`

## Cek Lisensi Dependencies

\`\`\`bash
npm install -g license-checker
license-checker --summary
\`\`\`
  `,

  quiz: [
    { question: "MIT license?", options: ["Copyleft", "Permissive (bebas pakai, modifikasi, komersial)", "Proprietary", "No license"], correctAnswer: 1 },
    { question: "GPL?", options: ["Permissive", "Copyleft (pakai GPL → project harus GPL)", "Bebas", "Komersial only"], correctAnswer: 1 }
  ],

  codeExamples: []
};