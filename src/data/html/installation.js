export const chapter = {
  slug: "html-installation",
  title: "Instalasi & Persiapan",
  description: "Siapkan lingkungan pengembangan untuk mulai coding HTML.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["html-introduction"],
  tags: ["html", "setup", "vscode", "tools"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Menyiapkan Lingkungan Pengembangan HTML

### Yang Kamu Butuhkan

1. **Text Editor** - Tempat menulis kode
2. **Web Browser** - Tempat melihat hasil
3. **Opsional: Live Server** - Untuk refresh otomatis

## Langkah 1: Install Visual Studio Code

VS Code adalah code editor paling populer untuk web development.

### Download & Install:
1. Buka **[code.visualstudio.com](https://code.visualstudio.com)**
2. Download sesuai OS (Windows/Mac/Linux)
3. Jalankan installer
4. Ikuti wizard instalasi

## Langkah 2: Install Extension Penting

Buka VS Code, klik icon Extensions (atau tekan \`Ctrl+Shift+X\`), lalu install:

### Extension Wajib:
\`\`\`
1. Live Server
   - Auto-refresh browser saat menyimpan
   - Klik kanan file HTML → "Open with Live Server"

2. Prettier
   - Formatter kode
   - Menjaga kode tetap rapi dan konsisten

3. HTML CSS Support
   - IntelliSense untuk HTML & CSS
   - Auto-completion

4. Auto Rename Tag
   - Mengganti nama tag HTML berpasangan secara otomatis
\`\`\`

## Langkah 3: Buat Proyek Pertama

### Struktur Folder:
\`\`\`
websiteku/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
\`\`\`

### Buat index.html:
\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Websiteku</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Selamat Datang!</h1>
    <script src="js/script.js"></script>
</body>
</html>
\`\`\`

## Langkah 4: Lihat Halamanmu

### Opsi 1: Buka langsung di browser
- Cari file \`index.html\` di File Explorer
- Double-click untuk membuka di browser

### Opsi 2: Gunakan Live Server (Disarankan)
- Klik kanan \`index.html\` di VS Code
- Pilih **"Open with Live Server"**
- Browser otomatis terbuka
- Perubahan langsung muncul saat disimpan

## Langkah 5: Opsional - Install Node.js

Untuk development yang lebih advanced nanti:
1. Buka **[nodejs.org](https://nodejs.org)**
2. Download versi LTS
3. Install dengan pengaturan default

## Shortcut Keyboard yang Perlu Diingat

| Aksi | Windows/Linux | Mac |
|------|--------------|-----|
| Simpan | \`Ctrl+S\` | \`Cmd+S\` |
| Buka File | \`Ctrl+O\` | \`Cmd+O\` |
| Command Palette | \`Ctrl+Shift+P\` | \`Cmd+Shift+P\` |
| Format Dokumen | \`Shift+Alt+F\` | \`Shift+Option+F\` |
| Toggle Terminal | \`Ctrl+\` \` | \`Cmd+\` \` |

## Kamu Sudah Siap!

Sekarang kamu punya semua yang dibutuhkan untuk mulai menulis kode HTML. Di chapter berikutnya, kita akan belajar tentang struktur dokumen HTML.
  `,

  quiz: [
    {
      question: "Extension apa yang menyediakan auto-refresh saat menyimpan file HTML di VS Code?",
      options: ["Prettier", "Live Server", "ESLint", "Debugger"],
      correctAnswer: 1,
      explanation: "Live Server secara otomatis me-refresh browser saat kamu menyimpan perubahan pada file HTML."
    },
    {
      question: "Apa nama file default untuk halaman utama website?",
      options: ["home.html", "main.html", "index.html", "page1.html"],
      correctAnswer: 2,
      explanation: "index.html adalah nama file default standar yang dicari web server saat memuat website."
    }
  ],

  codeExamples: [
    {
      title: "Setup Proyek Lengkap",
      language: "html",
      code: `<!-- index.html -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyek Pertamaku</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Selamat Datang di Websiteku</h1>
    <p>Ini adalah proyek HTML pertamaku.</p>
    <script src="js/script.js"></script>
</body>
</html>`,
      output: "File HTML lengkap dan terstruktur dengan baik, siap untuk dikembangkan."
    }
  ]
};