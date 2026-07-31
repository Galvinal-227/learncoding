export const chapter = {
  slug: "ci-cd-deployment-strategies",
  title: "Deployment Strategies",
  description: "Pahami berbagai strategi deployment: rolling, blue-green, canary, dan feature flags.",
  icon: "SiGithubactions",
  color: "#2088FF",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["ci-cd-introduction"],
  tags: ["ci-cd", "deployment", "strategy", "blue-green"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Deployment Strategies

Memilih strategi deployment yang tepat = meminimalkan downtime dan risiko.

## 1. Recreate (Basic)
Stop versi lama → Deploy versi baru. **Ada downtime.**

\`\`\`
[Old App] ──✕── [Downtime] ──▶ [New App]
\`\`\`

## 2. Rolling Update
Ganti instance satu per satu. **Zero downtime** jika multiple instances.

\`\`\`
[Old] [Old] [Old]
[New] [Old] [Old]
[New] [New] [Old]
[New] [New] [New]
\`\`\`

## 3. Blue-Green
Dua environment identik: Blue (live) dan Green (idle).

\`\`\`
1. Deploy versi baru ke Green
2. Test Green
3. Switch traffic ke Green
4. Blue jadi idle (siap rollback)
\`\`\`

**Kelebihan:** Instant rollback (tinggal switch balik)

## 4. Canary Release
Rilis ke **sebagian kecil user** dulu, lalu bertahap.

\`\`\`
10% user → versi baru
90% user → versi lama
Jika OK → 25% → 50% → 100%
Jika error → rollback 10%
\`\`\`

## 5. Feature Flags (Feature Toggles)
Deploy kode, tapi **fitur dimatikan** sampai siap.

\`\`\`javascript
if (featureFlags.isEnabled('new-checkout')) {
    return <NewCheckout />;
}
return <OldCheckout />;
\`\`\`

## Perbandingan

| Strategi | Downtime | Rollback | Kompleksitas |
|----------|----------|----------|--------------|
| Recreate | Ada | Lambat | Rendah |
| Rolling | Zero | Sedang | Sedang |
| Blue-Green | Zero | Instant | Sedang-Tinggi |
| Canary | Zero | Cepat | Tinggi |
| Feature Flags | Zero | Instant | Sedang |
  `,

  quiz: [
    { question: "Blue-Green deployment?", options: ["Warna biru", "Dua environment, switch traffic", "Satu server", "Recreate"], correctAnswer: 1 },
    { question: "Canary release?", options: ["Semua user", "Sebagian kecil user dulu", "Hanya internal", "Langsung production"], correctAnswer: 1 },
    { question: "Feature flags untuk?", options: ["Styling", "Aktif/nonaktif fitur tanpa deploy ulang", "Database", "Logging"], correctAnswer: 1 }
  ],

  codeExamples: []
};