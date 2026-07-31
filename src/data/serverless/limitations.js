export const chapter = {
  slug: "serverless-limitations",
  title: "Keterbatasan & Cold Start",
  description: "Pahami batasan serverless: cold start, timeout, state management.",
  icon: "SiAwslambda",
  color: "#FF9900",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["serverless-aws-lambda"],
  tags: ["serverless", "cold-start", "limitations", "timeout"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Cold Start

Cold start = **delay saat function pertama kali dijalankan** (atau setelah idle).

\`\`\`
Cold start latency (Node.js):
- AWS Lambda: 200-500ms
- GCP Cloud Functions: 100-300ms
- Vercel Functions: 50-200ms
- Cloudflare Workers: 0ms (no cold start!)
\`\`\`

## Cold Start Solutions

\`\`\`javascript
// 1. Keep function warm (ping every 5 min)
import cron from 'node-cron';
cron.schedule('*/5 * * * *', () => {
    fetch('https://api.example.com/health');
});

// 2. Use lighter runtime
// Node.js → Deno → Rust (compile to Wasm)

// 3. Provisioned concurrency (AWS)
// Keep N instances always warm (extra cost)

// 4. Edge functions (Cloudflare Workers)
// No cold start, runs at CDN edge
\`\`\`

## Other Limitations

| Limitation | Impact | Solution |
|-----------|--------|----------|
| **Timeout** | 15 menit (Lambda) | Split into multiple functions |
| **Memory** | 128MB-10GB | Optimize, use cache |
| **Stateless** | No persistent state | Use DB, Redis, S3 |
| **Cold start** | Slow first request | Keep warm, edge compute |
| **Vendor lock-in** | Hard to migrate | Use framework (Serverless.com) |

## Serverless vs Containers

| Serverless | Containers |
|-----------|-----------|
| Pay per execution | Pay per server |
| Auto-scale | Manual/auto |
| Stateless | Stateful possible |
| Limited runtime | Any language |
| Fast deploy | Slower deploy |
  `,

  quiz: [
    { question: "Cold start?", options: ["Fast startup", "Delay when function initializes", "Error state", "Warm start"], correctAnswer: 1 },
    { question: "Serverless: stateful?", options: ["Yes", "Stateless (use external storage)", "Always", "Sometimes"], correctAnswer: 1 }
  ],

  codeExamples: []
};