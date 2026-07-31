export const chapter = {
  slug: "browser-performance-profiling",
  title: "Performance Profiling",
  description: "Gunakan Performance panel untuk menganalisis dan optimasi performa website.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["browser-devtools"],
  tags: ["browser", "performance", "profiling", "optimization"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Performance Panel

Performance panel merekam dan menganalisis **semua aktivitas browser** saat halaman berjalan.

## Cara Record

1. Buka Performance panel
2. Klik **Record** (●) atau Ctrl+E
3. Interaksi dengan halaman
4. Klik **Stop**
5. Analisis hasil

## Membaca Flame Chart

\`\`\`
Main Thread:
├── Evaluate Script     [████████░░░░] 80ms
├── Layout              [████░░░░░░░░] 40ms
├── Paint               [███░░░░░░░░░] 30ms
├── Composite           [█░░░░░░░░░░░] 10ms
\`\`\`

## Metrics Penting

| Metric | Arti | Target |
|--------|------|--------|
| **FCP** (First Contentful Paint) | Konten pertama muncul | < 1.8s |
| **LCP** (Largest Contentful Paint) | Konten terbesar muncul | < 2.5s |
| **TBT** (Total Blocking Time) | Main thread blocked | < 200ms |
| **CLS** (Cumulative Layout Shift) | Layout berubah | < 0.1 |
| **TTI** (Time to Interactive) | Bisa interaksi | < 3.8s |

## Analisis Long Tasks

\`\`\`
Performance panel → centang "Web Vitals"
- Garis merah = Long Task (>50ms block main thread)
- Klik long task → lihat detail di bawah
- Optimasi: pecah jadi task kecil
\`\`\`

## JavaScript Profiler

\`\`\`javascript
// Programmatic profiling
console.profile('My Profile');
// ... kode yang ingin diukur ...
console.profileEnd('My Profile');
\`\`\`

## Memory Panel

\`\`\`
Memory panel → Heap snapshot
1. Take snapshot (baseline)
2. Lakukan aksi
3. Take snapshot lagi
4. Comparison view → lihat object baru yang tidak dihapus
\`\`\`

## Lighthouse

\`\`\`
Lighthouse panel → Generate report
- Performance score (0-100)
- Accessibility
- Best Practices
- SEO
- PWA
\`\`\`
  `,

  quiz: [
    { question: "LCP singkatan?", options: ["Large Content Paint", "Largest Contentful Paint", "Layout Content Paint", "Last Content Paint"], correctAnswer: 1 },
    { question: "Long Task = berapa ms?", options: [">10ms", ">50ms", ">100ms", ">500ms"], correctAnswer: 1, explanation: "Long Task adalah task yang memblokir main thread >50ms." },
    { question: "Target LCP yang baik?", options: ["< 1s", "< 2.5s", "< 5s", "< 10s"], correctAnswer: 1 }
  ],

  codeExamples: []
};