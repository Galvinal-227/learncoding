export const chapter = {
  slug: "portfolio-design",
  title: "Desain Portfolio",
  description: "Desain portfolio yang bersih, profesional, dan memorable.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["portfolio-introduction"],
  tags: ["portfolio", "design", "ui", "layout"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Prinsip Desain Portfolio

- 🎯 **Simple** - Less is more. Fokus ke konten.
- ⚡ **Fast** - Lighthouse score 95+
- 📱 **Responsive** - Mobile-first
- 🎨 **Konsisten** - Warna, font, spacing
- ♿ **Accessible** - Alt text, kontras, keyboard nav

## Layout Options

### 1. Single Page
\`\`\`
Hero → About → Projects → Skills → Contact
Cocok: simple, straightforward
\`\`\`

### 2. Multi-Page
\`\`\`
/ → Home
/projects → Project list
/projects/[slug] → Detail project
/about → About
/contact → Contact
Cocok: banyak project, SEO per halaman
\`\`\`

### 3. Terminal-Style
\`\`\`
Interactive terminal-like interface
Cocok: developer yang ingin unik
\`\`\`

## Warna

\`\`\`css
:root {
    --bg: #ffffff;
    --text: #1a1a1a;
    --primary: #3b82f6;      /* Biru */
    --secondary: #8b5cf6;    /* Ungu */
    --accent: #f59e0b;       /* Oranye */
    --gray: #6b7280;
}
\`\`\`

## Typography

\`\`\`css
body {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 16px;
    line-height: 1.6;
}

h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.5rem, 3vw, 2.5rem); }
\`\`\`

## Portfolio Templates & Inspiration

| Resource | Deskripsi |
|----------|-----------|
| **Dribbble** | dribbble.com → search "developer portfolio" |
| **Awwwards** | awwwards.com → developer sites |
| **Bestfolios** | bestfolios.com |
| **Next.js Templates** | vercel.com/templates/next.js |

## Tips Desain

\`\`\`
✅ Banyak whitespace (jangan padat)
✅ Dark mode toggle (bonus!)
✅ Smooth animations (tapi jangan berlebihan)
✅ Loading states (skeleton)
✅ Favicon (jangan lupa!)
✅ Custom 404 page
✅ SEO meta tags
\`\`\`
  `,

  quiz: [
    { question: "Portfolio: warna?", options: ["Banyak warna", "Konsisten (2-3 warna utama)", "Hitam putih saja", "Warna acak"], correctAnswer: 1 },
    { question: "Layout paling umum?", options: ["3 halaman", "Single page (hero→projects→contact)", "Terminal", "Spreadsheet"], correctAnswer: 1 }
  ],

  codeExamples: []
};