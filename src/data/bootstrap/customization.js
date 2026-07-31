export const chapter = {
  slug: "bootstrap-customization",
  title: "Kustomisasi Bootstrap",
  description: "Kustomisasi Bootstrap dengan SASS variables, CSS custom properties, dan theming.",
  icon: "SiBootstrap",
  color: "#7952B3",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["bootstrap-components"],
  tags: ["bootstrap", "sass", "custom", "theme"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 3 Cara Kustomisasi Bootstrap

### 1. CSS Variables (Paling Mudah)
\`\`\`css
:root {
    --bs-primary: #6f42c1;
    --bs-primary-rgb: 111, 66, 193;
    --bs-body-font-family: 'Inter', sans-serif;
    --bs-border-radius: 0.5rem;
}
\`\`\`

### 2. SASS Variables (Rekomendasi)
\`\`\`bash
npm install bootstrap
\`\`\`

\`\`\`scss
// custom.scss
// Override variables SEBELUM import Bootstrap
$primary: #6f42c1;
$font-family-base: 'Inter', sans-serif;
$border-radius: 0.5rem;
$enable-shadows: true;

// Import Bootstrap
@import "bootstrap/scss/bootstrap";
\`\`\`

### 3. Hanya Komponen Tertentu (Tree Shaking)
\`\`\`scss
// Import yang diperlukan saja
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

// Custom
$primary: #6f42c1;

@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/buttons";
@import "bootstrap/scss/card";
// ... hanya yang diperlukan
\`\`\`

## Dark Mode (Bootstrap 5.3+)

\`\`\`html
<html data-bs-theme="dark">
\`\`\`

\`\`\`javascript
// Toggle dark mode
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-bs-theme');
    html.setAttribute('data-bs-theme', current === 'dark' ? 'light' : 'dark');
}
\`\`\`

## Variabel yang Sering Diubah

\`\`\`scss
// Colors
$primary: #6f42c1;
$secondary: #6c757d;
$success: #198754;
$danger: #dc3545;

// Typography
$font-family-sans-serif: 'Inter', system-ui, sans-serif;
$font-size-base: 1rem;

// Spacing
$spacer: 1rem;
$spacers: (0: 0, 1: $spacer*.25, 2: $spacer*.5, 3: $spacer, 4: $spacer*1.5, 5: $spacer*3);

// Border
$border-radius: .5rem;
$border-radius-lg: .75rem;
$border-radius-sm: .25rem;

// Enable features
$enable-shadows: true;
$enable-gradients: true;
$enable-rounded: true;
\`\`\`
  `,

  quiz: [
    { question: "Cara terbaik kustomisasi Bootstrap?", options: ["Edit file CSS langsung", "Override SASS variables sebelum import", "Inline styles", "!important"], correctAnswer: 1 },
    { question: "Dark mode Bootstrap 5.3 pakai?", options: ["class .dark", "data-bs-theme='dark'", "@media dark", "JavaScript only"], correctAnswer: 1 },
    { question: "Kenapa tree shaking Bootstrap?", options: ["Mempercepat", "Mengurangi ukuran bundle", "Wajib", "Hiasan"], correctAnswer: 1 }
  ],

  codeExamples: []
};