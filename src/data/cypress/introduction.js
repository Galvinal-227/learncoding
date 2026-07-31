export const chapter = {
  slug: "cypress-introduction",
  title: "Pengenalan Cypress",
  description: "Pahami apa itu Cypress dan kenapa jadi pilihan utama untuk E2E testing modern.",
  icon: "SiCypress",
  color: "#69D3A7",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction"],
  tags: ["cypress", "testing", "e2e", "pengenalan"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Cypress?

Cypress adalah **end-to-end testing framework** berbasis JavaScript yang berjalan **di dalam browser**. Dibuat untuk developer yang ingin testing yang cepat, reliable, dan mudah di-debug.

## Kenapa Cypress?

- ⚡ **Real-time reload** - Test berjalan ulang saat kode berubah
- 🐛 **Time Travel** - Snapshot setiap step, bisa mundur ke step sebelumnya
- 🔍 **Debug langsung** - Pakai Chrome DevTools di dalam Cypress
- 📸 **Auto screenshot & video** - Gagal? Ada screenshot + video recording
- 🎯 **Automatic waiting** - Nunggu element muncul, tidak perlu manual wait
- 🌐 **Network control** - Intercept dan stub API calls dengan mudah
- 🔒 **No Selenium** - Berjalan di dalam browser, bukan remote control

## Cypress vs Selenium vs Playwright

| | Cypress | Selenium | Playwright |
|---|---------|----------|------------|
| Arsitektur | In-browser | Remote control | Browser protocol |
| Bahasa | JavaScript | Multi-language | Multi-language |
| Speed | Cepat | Lambat | Cepat |
| Debug | Sangat mudah | Sulit | Mudah |
| Cross-browser | Chrome, Firefox, Edge | Semua browser | Chrome, Firefox, Safari |
| Mobile | Tidak (coming) | Ya (Appium) | Ya |
| Setup | Sangat mudah | Kompleks | Mudah |
| Cocok untuk | Frontend dev, E2E | Enterprise, legacy | Modern web, cross-browser |

## Apa yang Bisa Di-test dengan Cypress?

- ✅ **E2E** - Alur user dari awal sampai akhir
- ✅ **Component Testing** - Test komponen React/Vue/Svelte terisolasi
- ✅ **API Testing** - Test endpoint tanpa UI
- ✅ **Visual Testing** - Screenshot comparison (dengan plugin)
- ✅ **Accessibility Testing** - Cek a11y (dengan plugin)

## Arsitektur Cypress

\`\`\`
┌─────────────────────────────────┐
│        CYPRESS RUNNER           │
│  ┌───────────────────────────┐  │
│  │     Browser (Chrome/FF)   │  │
│  │  ┌─────────────────────┐  │  │
│  │  │   Your Application  │  │  │
│  │  │        +            │  │  │
│  │  │   Cypress Driver    │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
│              ↕                   │
│  ┌───────────────────────────┐  │
│  │   Node.js Process (Test)  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
\`\`\`

## Istilah Penting

- **Spec file** - File test (\`*.cy.js\`)
- **Command** - Perintah Cypress (\`cy.visit()\`, \`cy.get()\`)
- **Assertion** - Cek ekspektasi (\`should('be.visible')\`)
- **Fixture** - Data mock untuk test
- **Custom Command** - Perintah kustom yang reusable
- **Test Runner** - UI Cypress untuk menjalankan & debug test
  `,

  quiz: [
    { question: "Cypress vs Selenium: keunggulan Cypress?", options: ["Cross-browser", "In-browser, real-time reload, time travel debug", "Multi-language", "Mobile testing"], correctAnswer: 1 },
    { question: "Cypress berjalan di mana?", options: ["Server", "Di dalam browser", "Cloud", "Database"], correctAnswer: 1 },
    { question: "Spec file Cypress ekstensi?", options: [".test.js", "*.cy.js", "*.spec.ts", "*.e2e.js"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Cypress Test Pertama",
      language: "javascript",
      code: `// cypress/e2e/first-test.cy.js
describe('My First Test', () => {
    it('should visit the homepage', () => {
        // Kunjungi halaman
        cy.visit('https://example.com');
        
        // Cek judul halaman
        cy.title().should('include', 'Example');
        
        // Cari elemen & klik
        cy.contains('More information').click();
        
        // Assert URL berubah
        cy.url().should('include', '/more');
    });
});`
    }
  ]
};