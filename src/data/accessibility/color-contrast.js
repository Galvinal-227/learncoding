export const chapter = {
  slug: "accessibility-color-contrast",
  title: "Kontras Warna",
  description: "Pastikan website kamu terbaca oleh semua orang dengan rasio kontras yang cukup.",
  icon: "SiAccessibility",
  color: "#0066CC",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["accessibility-introduction"],
  tags: ["aksesibilitas", "warna", "kontras", "wcag"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Kontras Warna Penting?

- 👁️ **Low vision** - butuh kontras tinggi untuk membaca
- 🎨 **Buta warna** - 1 dari 12 pria, 1 dari 200 wanita
- ☀️ **Silau matahari** - kontras rendah tidak terbaca di outdoor
- 👴 **Usia lanjut** - sensitivitas kontras menurun

## Rasio Kontras WCAG

| Level | Teks Normal | Teks Besar (18px+/14px bold) |
|-------|-------------|------------------------------|
| **AA** (minimum) | 4.5:1 | 3:1 |
| **AAA** (enhanced) | 7:1 | 4.5:1 |

## Contoh Kontras

\`\`\`
✅ #333 pada #FFF = 12.6:1 (AA + AAA)
✅ #767676 pada #FFF = 4.5:1 (AA)
❌ #CCC pada #FFF = 1.6:1 (Gagal)
❌ #999 pada #FFF = 2.8:1 (Gagal)
\`\`\`

## Jangan Hanya Andalkan Warna

\`\`\`html
<!-- ❌ Hanya warna - buta warna tidak lihat beda -->
<p style="color:red">Error!</p>
<p style="color:green">Sukses!</p>

<!-- ✅ Warna + ikon + teks -->
<p>❌ <strong>Error:</strong> Email tidak valid</p>
<p>✅ <strong>Sukses:</strong> Data tersimpan</p>
\`\`\`

## Tools Cek Kontras

- **WebAIM Contrast Checker** (online)
- **Chrome DevTools** - klik elemen → cek contrast ratio
- **axe DevTools** extension
- **Stark** (Figma plugin)

## Tips

\`\`\`css
:root {
    --text: #1a1a1a;        /* Kontras bagus di putih */
    --text-light: #666;     /* Hanya untuk teks besar */
    --border: #ccc;         /* Tidak untuk teks */
    --error: #d32f2f;      /* Merah gelap, bukan #f00 */
}
\`\`\`
  `,

  quiz: [
    { question: "Rasio kontras minimum WCAG AA untuk teks normal?", options: ["2:1", "3:1", "4.5:1", "7:1"], correctAnswer: 2, explanation: "WCAG AA mensyaratkan rasio kontras minimal 4.5:1 untuk teks normal." },
    { question: "Kenapa tidak boleh hanya andalkan warna untuk info penting?", options: ["Tidak masalah", "Buta warna tidak bisa bedakan warna", "Hanya estetika", "Browser tidak support"], correctAnswer: 1, explanation: "Pengguna buta warna mungkin tidak bisa membedakan merah/hijau. Tambahkan ikon atau teks sebagai indikator tambahan." }
  ],

  codeExamples: [
    {
      title: "Demo Kontras vs Non-Kontras",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Kontras Demo</title>
<style>
    body { font-family: Arial; padding: 20px; }
    .demo { display: flex; gap: 30px; flex-wrap: wrap; }
    .card { padding: 20px; border-radius: 8px; width: 250px; }
    .good { background: #fff; color: #333; border: 2px solid #4caf50; }
    .bad { background: #fff; color: #ccc; border: 2px solid #f44336; }
    .status { margin-top: 20px; padding: 10px; border-radius: 4px; }
    .error-bad { background: #ffcdd2; color: #ffcdd2; }
    .error-good { background: #ffcdd2; color: #b71c1c; border-left: 4px solid #f44336; padding-left: 12px; }
</style>
</head>
<body>
    <h1>Demo Kontras Warna</h1>
    
    <div class="demo">
        <div class="card good">
            <h3>✅ Kontras Baik</h3>
            <p>Teks #333 di background putih.<br>Rasio: 12.6:1</p>
            <small>Mudah dibaca semua orang</small>
        </div>
        
        <div class="card bad">
            <h3>❌ Kontras Buruk</h3>
            <p>Teks #CCC di background putih.<br>Rasio: 1.6:1</p>
            <small>Sulit dibaca, terutama low vision</small>
        </div>
    </div>
    
    <h3>Notifikasi Error</h3>
    <div class="status error-bad">
        ❌ Error: Hanya andalkan warna (tidak terlihat)
    </div>
    <div class="status error-good">
        ⚠️ <strong>Error:</strong> Ikon + teks + border (terlihat semua)
    </div>
</body>
</html>`
    }
  ]
};