export const chapter = {
  slug: "portfolio-case-studies",
  title: "Case Studies",
  description: "Tulis case study yang compelling untuk setiap project portfolio.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["portfolio-projects"],
  tags: ["portfolio", "case-study", "storytelling", "impact"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Case Study?

Project screenshot tidak cukup. Case study menceritakan **PROSES** dan **IMPACT** dari project kamu.

## Struktur Case Study

\`\`\`
1. Overview
   - Apa project ini?
   - Masalah yang diselesaikan

2. Role & Timeline
   - Peran kamu (Full-Stack Developer)
   - Durasi pengerjaan (3 minggu)

3. Problem
   - Masalah user/bisnis
   - Kenapa butuh solusi ini?

4. Solution
   - Teknologi yang dipakai (kenapa?)
   - Arsitektur (diagram)
   - Fitur kunci

5. Challenges
   - Tantangan teknis
   - Bagaimana kamu menyelesaikannya

6. Results
   - Metrics (user, performance, revenue)
   - Before/after comparison
   - Testimonial (jika ada)

7. Lessons Learned
   - Apa yang kamu pelajari
   - Yang akan dilakukan berbeda
\`\`\`

## Contoh Case Study

\`\`\`markdown
# E-Commerce Platform Redesign

## Overview
Full redesign of legacy e-commerce platform, improving conversion rate and mobile experience.

## Role
Full-Stack Developer | 6 weeks | Solo project

## Problem
- Old platform: 4.2s load time
- Mobile conversion: 0.8% (industry avg: 2.5%)
- 60% cart abandonment

## Solution
**Tech Stack:**
- Next.js (SSG) → faster initial load
- Tailwind CSS → responsive by default
- Stripe → simplified checkout
- PostgreSQL + Prisma → reliable data

**Key Features:**
- Server-side rendering → SEO optimized
- Mobile-first responsive design
- One-click checkout with Stripe
- Real-time inventory tracking

## Challenges
1. **Legacy data migration**
   → Built ETL pipeline with Node.js streams
   
2. **Performance target (<2s)**
   → Image optimization (WebP), code splitting, CDN

## Results
| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Load time | 4.2s | 1.1s | ⬇ 74% |
| Mobile conversion | 0.8% | 3.2% | ⬆ 300% |
| Cart abandonment | 60% | 35% | ⬇ 42% |

## Lessons Learned
- Server components dramatically improved SEO
- Mobile-first design should be default
- Payment integration is simpler than expected
\`\`\`

## Tips Case Study

\`\`\`
✅ Gunakan metrics/angka (improve 30%, save 10 jam)
✅ Sertakan screenshot/GIF/diagram
✅ Ceritakan TANTANGAN (bukan cuma hasil)
✅ Jujur tentang kegagalan/lesson learned
✅ Fokus ke IMPACT, bukan cuma fitur
✅ STAR method: Situation, Task, Action, Result
\`\`\`
  `,

  quiz: [
    { question: "Case study: paling penting?", options: ["Screenshot", "Problem → Solution → Results (metrics!)", "Tech stack", "Warna"], correctAnswer: 1 },
    { question: "STAR method?", options: ["Code pattern", "Situation, Task, Action, Result", "Design pattern", "Testing"], correctAnswer: 1 }
  ],

  codeExamples: []
};