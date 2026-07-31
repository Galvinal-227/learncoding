export const chapter = {
  slug: "deployment-monitoring",
  title: "Monitoring & Logging",
  description: "Monitor aplikasi production: uptime, error tracking, logging, dan alerting.",
  icon: "SiVercel",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["deployment-introduction"],
  tags: ["deployment", "monitoring", "logging", "sentry"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Monitoring?

- 🔍 **Deteksi masalah** sebelum user lapor
- 📊 **Performance insights** - Di mana bottleneck?
- 🚨 **Alerting** - Notifikasi saat error/down
- 📈 **Trend analysis** - Trafik naik/turun?

## Tools Monitoring

| Tool | Fungsi | Harga |
|------|--------|-------|
| **Sentry** | Error tracking | Free tier |
| **Datadog** | Full monitoring | Mahal (enterprise) |
| **Grafana + Prometheus** | Metrics visualization | Self-host gratis |
| **Logtail** | Log management | Free tier |
| **UptimeRobot** | Uptime monitoring | Free (5 monitors) |
| **PM2 + Keymetrics** | Node.js monitoring | Free tier |
| **Vercel Analytics** | Web analytics | Pro plan |

## Sentry Integration (Node.js)

\`\`\`bash
npm install @sentry/node @sentry/profiling-node
\`\`\`

\`\`\`javascript
import * as Sentry from '@sentry/node';

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV,
    tracesSampleRate: 0.1  // 10% of transactions
});

// Global error handler
process.on('uncaughtException', (error) => {
    Sentry.captureException(error);
});
\`\`\`

## PM2 Monitoring

\`\`\`bash
pm2 monit          # Real-time monitoring
pm2 logs           # View logs
pm2 logs --lines 100
pm2 flush          # Clear logs
\`\`\`

## Health Check Endpoint

\`\`\`javascript
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        memory: process.memoryUsage()
    });
});
\`\`\`
  `,

  quiz: [
    { question: "Sentry untuk?", options: ["Hosting", "Error tracking & monitoring", "Database", "CI/CD"], correctAnswer: 1 },
    { question: "UptimeRobot untuk?", options: ["Error tracking", "Cek website up/down + alert", "Logging", "Analytics"], correctAnswer: 1 }
  ],

  codeExamples: []
};