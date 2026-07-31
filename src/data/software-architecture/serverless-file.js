export const chapter = {
  slug: "software-architecture-serverless-file",
  title: "Serverless Architecture",
  description: "Pahami arsitektur serverless: FaaS, BaaS, event-driven compute.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["software-architecture-introduction"],
  tags: ["architecture", "serverless", "faas", "cloud"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Serverless Architecture Components

\`\`\`
┌──────────┐     ┌──────────────┐     ┌──────────┐
│  Client  │────▶│   API Gateway│────▶│  Lambda  │
└──────────┘     └──────────────┘     └──────────┘
                                            │
                                     ┌──────┴──────┐
                                     ▼             ▼
                               ┌─────────┐   ┌─────────┐
                               │ DynamoDB│   │   S3    │
                               └─────────┘   └─────────┘
\`\`\`

## Key Concepts

| Concept | Deskripsi |
|---------|-----------|
| **FaaS** | Function as a Service (Lambda) |
| **BaaS** | Backend as a Service (Firebase) |
| **API Gateway** | HTTP endpoint → function |
| **Event Source** | Trigger function (S3, DynamoDB) |
| **Step Functions** | Orchestrate multiple functions |

## Serverless Pattern

\`\`\`
1. Client → API Gateway → Lambda (compute)
2. Lambda → DynamoDB (persist)
3. S3 upload → Lambda (process)
4. Schedule → Lambda (cron)
\`\`\`

## When Serverless Architecture?

\`\`\`
✅ Event-driven workloads
✅ Unpredictable traffic
✅ Microservices / APIs
✅ Prototypes / MVPs
✅ Scheduled tasks

❌ Long-running processes (>15min)
❌ Constant high load (can be expensive)
❌ Need GPU access
\`\`\`
  `,

  quiz: [
    { question: "Serverless: compute?", options: ["EC2", "Lambda (FaaS)", "Kubernetes", "Docker only"], correctAnswer: 1 },
    { question: "API Gateway?", options: ["Database", "HTTP endpoint → function", "Cache", "Queue"], correctAnswer: 1 }
  ],

  codeExamples: []
};