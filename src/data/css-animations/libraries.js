export const chapter = {
  slug: "css-animations-libraries",
  title: "Animation Libraries",
  description: "Percepat development dengan library animasi CSS populer.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["css-animations-keyframes"],
  tags: ["css", "library", "animatecss", "aos"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Library Animasi Populer

### 1. Animate.css
\`\`\`html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
\`\`\`

\`\`\`html
<h1 class="animate__animated animate__bounce">Bounce!</h1>
<div class="animate__animated animate__fadeInUp">Fade In Up</div>
\`\`\`

### 2. AOS (Animate On Scroll)
\`\`\`html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>AOS.init();</script>
\`\`\`

\`\`\`html
<div data-aos="fade-up">Muncul saat di-scroll</div>
<div data-aos="zoom-in" data-aos-delay="300">Delay 300ms</div>
\`\`\`

### 3. Hover.css
Efek hover siap pakai untuk button, link, icon.

### 4. Magic CSS
Efek animasi spesial (magic, twister, swap, dll).

## Kapan Pakai Library vs Custom?

| Library | Custom CSS |
|---------|-----------|
| Prototype cepat | Production final |
| Standard effects | Unique branding |
| Tidak butuh kustomisasi | Butuh kontrol penuh |
| Bundle size tidak masalah | Optimasi performa |
  `,

  quiz: [
    { question: "Library untuk animasi on-scroll?", options: ["Animate.css", "AOS", "Hover.css", "Magic CSS"], correctAnswer: 1 },
    { question: "Animate.css class prefix?", options: ["animate__", "anim-", "an-", "animation-"], correctAnswer: 0 }
  ],

  codeExamples: []
};