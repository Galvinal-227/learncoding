export const chapter = {
  slug: "deployment-shared-hosting",
  title: "Shared Hosting (cPanel)",
  description: "Deploy website sederhana ke shared hosting dengan cPanel.",
  icon: "SiVercel",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["deployment-introduction"],
  tags: ["deployment", "shared-hosting", "cpanel", "ftp"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Shared Hosting

Shared hosting = satu server dipakai banyak user. Paling murah dan simpel.

## Provider Indonesia

- **Niagahoster** - Paling populer
- **Hostinger** - Murah, global
- **Rumahweb** - Lokal
- **Dewaweb** - Cloud hosting
- **IDCloudHost** - Lokal

## Deploy Static Site

### Via File Manager (cPanel)
\`\`\`
1. Login cPanel → File Manager
2. Masuk folder public_html/
3. Upload file HTML/CSS/JS
4. Akses via domain
\`\`\`

### Via FTP
\`\`\`bash
# Install FTP client (FileZilla)
# Atau pakai CLI:
ftp your-domain.com
# Upload files ke public_html/
\`\`\`

## Deploy Node.js (Jika Didukung)

Beberapa shared hosting modern (Dewaweb, Hostinger) support Node.js:

\`\`\`
1. cPanel → Setup Node.js App
2. Pilih Node version
3. Set application root
4. Set startup file (app.js / index.js)
5. npm install
6. Start app
\`\`\`

## Keterbatasan Shared Hosting

\`\`\`
❌ Tidak bisa install software system (apt-get)
❌ Terbatas untuk Node.js/Python (tergantung provider)
❌ Resource sharing (CPU/RAM terbatas)
❌ Tidak bisa custom server config (Nginx)
✅ Murah
✅ Mudah setup
✅ Cocok untuk static site / WordPress
\`\`\`
  `,

  quiz: [
    { question: "Folder root shared hosting?", options: ["root/", "public_html/", "www/", "html/"], correctAnswer: 1 },
    { question: "Shared hosting cocok untuk?", options: ["Microservices", "Static site / WordPress sederhana", "Game server", "AI training"], correctAnswer: 1 }
  ],

  codeExamples: []
};