export const chapter = {
  slug: "error-monitoring-alerting",
  title: "Alerting & Notifikasi",
  description: "Setup alert agar langsung tahu saat error terjadi di production.",
  icon: "SiSentry",
  color: "#362D59",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["error-monitoring-sentry"],
  tags: ["error-monitoring", "alerting", "notification", "slack"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Alerting?

Jangan nunggu user lapor. Setup alert → **tim langsung tahu** saat ada error kritis.

## Channel Notifikasi

- 💬 **Slack** - Paling umum untuk dev team
- 📧 **Email** - Untuk error kritis
- 📱 **PagerDuty / Opsgenie** - On-call rotation
- 🎯 **Discord** - Untuk tim informal
- 📊 **Webhook** - Custom integration

## Sentry Alert Rules

### 1. Buat Alert di Sentry
\`\`\`
Sentry Dashboard → Alerts → Create Alert Rule:
- When: "New issue created" / "Error rate exceeds X"
- Conditions: environment=production, level=error
- Actions: Send Slack notification
\`\`\`

### 2. Slack Integration
\`\`\`
Sentry → Settings → Integrations → Slack → Add Workspace
Pilih channel: #production-errors
\`\`\`

## Health Check Monitoring

Endpoint \`/health\` + UptimeRobot (gratis 5 monitor):

\`\`\`javascript
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});
\`\`\`

## Log Aggregation (Bonus)

Kirim log terstruktur untuk monitoring:

\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log' }),
        // Kirim ke Logtail, Datadog, dll
    ]
});
\`\`\`
  `,

  quiz: [
    { question: "Alerting channel paling umum?", options: ["SMS", "Slack", "Fax", "Telepon"], correctAnswer: 1 },
    { question: "UptimeRobot untuk?", options: ["Error tracking", "Monitor website up/down + alert", "Logging", "Analytics"], correctAnswer: 1 }
  ],

  codeExamples: []
};