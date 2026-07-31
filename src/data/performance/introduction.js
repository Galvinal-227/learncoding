export const chapter = {
  slug: "performance-introduction",
  title: "Pengenalan Web Performance",
  description: "Pahami kenapa performa web penting, dampaknya ke bisnis, dan strategi optimasi.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["performance", "web", "optimization", "lighthouse"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Performa Penting?

- 💰 **Revenue** - Amazon: 100ms delay = 1% revenue drop
- 📈 **SEO** - Google ranking factor (Core Web Vitals)
- 😊 **UX** - 53% mobile users leave if >3s load
- 📱 **Mobile** - 70%+ traffic dari mobile
- 🌍 **Inclusive** - Slow sites exclude users with slow connections

## Dampak Bisnis

| Delay | Dampak |
|-------|--------|
| 100ms | -1% conversion |
| 1s | -7% conversion |
| 2s | -20% conversion |
| 3s | 53% bounce rate |

## Strategi Optimasi

\`\`\`
1. Measure → Lighthouse, PageSpeed Insights
2. Analyze → Bundle analyzer, DevTools
3. Optimize → Images, code splitting, caching
4. Monitor → Continuous monitoring
\`\`\`

## Tools

| Tool | Fungsi |
|------|--------|
| **Lighthouse** | Audit performa (Chrome built-in) |
| **PageSpeed Insights** | Google's performance report |
| **WebPageTest** | Detailed waterfall |
| **Chrome DevTools** | Network, Performance, Coverage |
| **Bundle Analyzer** | Analisis bundle size |
| **Lighthouse CI** | Automated performance testing |
  `,

  quiz: [
    { question: "3s load time = bounce rate?", options: ["10%", "53%", "90%", "0%"], correctAnswer: 1 },
    { question: "Lighthouse?", options: ["IDE", "Performance audit tool (Chrome built-in)", "Database", "Framework"], correctAnswer: 1 }
  ],

  codeExamples: []
};