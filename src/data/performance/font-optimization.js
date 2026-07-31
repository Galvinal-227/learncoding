export const chapter = {
  slug: "performance-font-optimization",
  title: "Font Optimization",
  description: "Optimasi web fonts: font-display, preload, subset, variable fonts.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["performance-introduction"],
  tags: ["performance", "fonts", "font-display", "optimization"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## font-display

\`\`\`css
@font-face {
    font-family: 'Inter';
    src: url('/fonts/inter.woff2') format('woff2');
    font-display: swap;  /* Show fallback, swap when ready */
    /* font-display: optional;  Don't swap if late (>100ms) */
    /* font-display: block;     Hide text until font ready (FOIT) */
    /* font-display: fallback;  Hide short time, then fallback */
}
\`\`\`

## Preload Critical Fonts

\`\`\`html
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
\`\`\`

## Subset Fonts

\`\`\`bash
# Gunakan glyphhanger atau google fonts subset
# Hanya karakter yang dibutuhkan (Latin, bukan seluruh Unicode)
# https://fonts.google.com → pilih "Customize" → hanya karakter tertentu
\`\`\`

## Variable Fonts

\`\`\`css
@font-face {
    font-family: 'Inter Variable';
    src: url('/fonts/Inter-Variable.woff2') format('woff2-variations');
    font-weight: 100 900;
    font-stretch: 75% 125%;
}
\`\`\`

Satu file untuk semua weight (400, 700, 900) → hemat requests!

## Next.js Font Optimization

\`\`\`jsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function Layout({ children }) {
    return <body className={inter.className}>{children}</body>;
}
// Auto: self-host, subset, preload, font-display: swap
\`\`\`

## Font Loading Best Practices

\`\`\`
✅ Gunakan WOFF2 (format terbaik)
✅ font-display: swap (hindari invisible text)
✅ Preload font kritis
✅ Subset fonts (hanya karakter yang diperlukan)
✅ Variable fonts (hemat banyak file)
✅ Self-host fonts (hindari Google Fonts external request)
✅ Gunakan font yang sama di seluruh website
\`\`\`
  `,

  quiz: [
    { question: "font-display: swap?", options: ["Hide text", "Show fallback font, swap when ready", "No font", "Block"], correctAnswer: 1 },
    { question: "Variable fonts?", options: ["Many files", "One file for all weights (hemat)", "No support", "Legacy"], correctAnswer: 1 }
  ],

  codeExamples: []
};