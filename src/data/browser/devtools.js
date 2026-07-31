export const chapter = {
  slug: "browser-devtools",
  title: "Chrome DevTools",
  description: "Kuasai Chrome DevTools untuk debugging, editing, dan profiling.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["browser-introduction"],
  tags: ["browser", "devtools", "debugging", "chrome"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Chrome DevTools

DevTools adalah **toolkit built-in** Chrome untuk developer. Akses: **F12** atau **Ctrl+Shift+I**.

## Panel Utama

| Panel | Fungsi | Shortcut |
|-------|--------|----------|
| **Elements** | Edit HTML + CSS live | F12 default |
| **Console** | JavaScript REPL + log | Esc (toggle) |
| **Sources** | Debug JavaScript | Ctrl+P cari file |
| **Network** | Monitor HTTP requests | - |
| **Performance** | Record & analisis performa | - |
| **Memory** | Deteksi memory leak | - |
| **Application** | Storage, cookies, cache | - |
| **Lighthouse** | Audit performa, a11y, SEO | - |

## Elements Panel

\`\`\`
✅ Edit HTML: double-click element
✅ Edit CSS: click property/value
✅ Add class: klik .cls
✅ Force state: :hov → :hover, :focus
✅ Copy selector: right-click → Copy → Copy selector
✅ Search: Ctrl+F
\`\`\`

## Console Panel

\`\`\`javascript
// Logging
console.log('Info');
console.warn('Warning');
console.error('Error');
console.table([{a:1, b:2}]);
console.group('Group'); console.groupEnd();
console.time('timer'); console.timeEnd('timer');

// DOM
$0;              // Elemen yang dipilih di Elements
$('.card');      // document.querySelector
$$('.card');     // document.querySelectorAll
inspect($0);     // Buka di Elements panel

// Utility
copy(obj);       // Copy ke clipboard
clear();         // Bersihkan console
\`\`\`

## Sources Panel (Debugging)

\`\`\`
✅ Breakpoint: klik nomor baris
✅ Conditional breakpoint: right-click → Add conditional
✅ Watch: tambah ekspresi
✅ Call Stack: lihat urutan pemanggilan
✅ Scope: lihat variabel lokal/global
✅ Step Over (F10), Step Into (F11), Step Out (Shift+F11)
\`\`\`

## Shortcuts Penting

\`\`\`
F12 / Ctrl+Shift+I   → Buka DevTools
Ctrl+Shift+C          → Inspect element
Ctrl+P                → Cari file (Sources)
Ctrl+Shift+F          → Search all files
Ctrl+Shift+M          → Toggle device toolbar
Ctrl+Shift+P          → Command palette
\`\`\`
  `,

  quiz: [
    { question: "Shortcut buka DevTools?", options: ["F5", "F12", "Ctrl+S", "Alt+Tab"], correctAnswer: 1 },
    { question: "Panel untuk edit HTML/CSS live?", options: ["Console", "Elements", "Sources", "Network"], correctAnswer: 1 },
    { question: "$0 di Console berarti?", options: ["Window", "Elemen yang dipilih di Elements", "Error", "jQuery"], correctAnswer: 1 }
  ],

  codeExamples: []
};