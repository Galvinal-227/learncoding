export const chapter = {
  slug: "serverless-benefits",
  title: "Keunggulan Serverless",
  description: "Kenapa serverless jadi pilihan modern: biaya, scaling, dan developer experience.",
  icon: "SiAwslambda",
  color: "#FF9900",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["serverless-introduction"],
  tags: ["serverless", "benefits", "cost", "scaling"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## 1. Biaya (Pay-per-Use)

\`\`\`
Traditional: Bayar server 24/7 = Rp 1jt/bulan
Serverless: Bayar per eksekusi = Rp 100rb/bulan (low traffic)

Formula: Request count + Duration + Memory
\`\`\`

## 2. Auto-Scaling

\`\`\`
Traditional: Provision more servers (minutes/hours)
Serverless: Scale from 0 to 1000 instantly

No idle capacity = no wasted money
\`\`\`

## 3. No Server Management

\`\`\`
✅ No OS updates
✅ No security patches
✅ No capacity planning
✅ No load balancer config
\`\`\`

## 4. Faster Time to Market

\`\`\`
Write function → Deploy → Live in minutes
No infrastructure setup needed
\`\`\`

## 5. Developer Experience

\`\`\`
✅ Focus on code, not servers
✅ Built-in monitoring (CloudWatch)
✅ Easy CI/CD integration
✅ Event-driven architecture
\`\`\`

## When Serverless?

\`\`\`
✅ Unpredictable traffic
✅ Microservices / APIs
✅ Event processing
✅ Scheduled tasks
✅ Prototypes / MVPs

❌ Long-running tasks (>15 min)
❌ Consistent high traffic (can be expensive)
❌ Need GPU access
\`\`\`
  `,

  quiz: [
    { question: "Serverless: pay-per-use?", options: ["Monthly fee", "Pay per execution + duration", "Free always", "Annual license"], correctAnswer: 1 },
    { question: "Serverless: scaling?", options: ["Manual", "Auto-scale (0 to 1000s)", "Not possible", "Pre-configured"], correctAnswer: 1 }
  ],

  codeExamples: []
};