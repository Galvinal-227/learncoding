export const chapter = {
  slug: "browser-introduction",
  title: "Pengenalan Browser",
  description: "Pahami apa itu browser, browser engines, dan lanskap browser modern.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["browser", "chrome", "firefox", "safari", "edge"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Browser?

Browser adalah aplikasi yang **mengambil, merender, dan menampilkan** halaman web. Browser menerjemahkan HTML, CSS, dan JavaScript menjadi halaman yang bisa dilihat dan diinteraksi user.

## Browser Populer & Engine

| Browser | Engine | JavaScript Engine | Developer |
|---------|--------|-------------------|-----------|
| **Chrome** | Blink | V8 | Google |
| **Firefox** | Gecko | SpiderMonkey | Mozilla |
| **Safari** | WebKit | JavaScriptCore | Apple |
| **Edge** | Blink | V8 | Microsoft |
| **Opera** | Blink | V8 | Opera |
| **Brave** | Blink | V8 | Brave |
| **Arc** | Blink | V8 | Browser Company |

## Browser Engine vs JavaScript Engine

| Browser Engine | JavaScript Engine |
|---------------|-------------------|
| Rendering HTML+CSS | Eksekusi JavaScript |
| Layout, paint | Compile & run JS |
| Blink, Gecko, WebKit | V8, SpiderMonkey, JSC |

## Market Share (2024-2026)

\`\`\`
Chrome:   ~65%
Safari:   ~18% (dominan di iOS)
Edge:     ~5%
Firefox:  ~3%
Lainnya:  ~9%
\`\`\`

## Kenapa Developer Harus Paham Browser?

- 🐛 **Debugging** - Cari dan perbaiki bug
- ⚡ **Performance** - Optimasi loading & rendering
- 🔒 **Security** - Pahami CORS, CSP, HTTPS
- 📱 **Compatibility** - Pastikan jalan di semua browser
- 🛠️ **DevTools** - Tool wajib developer web
  `,

  quiz: [
    { question: "Engine browser Chrome?", options: ["Gecko", "Blink", "WebKit", "Trident"], correctAnswer: 1 },
    { question: "JavaScript engine Chrome (V8) juga dipakai oleh?", options: ["Firefox", "Node.js", "Safari", "IE"], correctAnswer: 1, explanation: "V8 digunakan Chrome dan Node.js." },
    { question: "Browser dominan di iOS?", options: ["Chrome", "Firefox", "Safari", "Edge"], correctAnswer: 2, explanation: "Semua browser di iOS wajib pakai WebKit, tapi Safari dominan." }
  ],

  codeExamples: []
};