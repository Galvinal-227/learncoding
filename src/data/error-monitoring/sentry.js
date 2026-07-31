export const chapter = {
  slug: "error-monitoring-sentry",
  title: "Sentry",
  description: "Setup Sentry untuk error tracking di Node.js dan React.",
  icon: "SiSentry",
  color: "#362D59",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["error-monitoring-introduction"],
  tags: ["error-monitoring", "sentry", "tracking", "production"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Sentry?

Sentry adalah platform **error tracking & performance monitoring** open-source. Menangkap error, memberikan **stack trace yang readable**, dan **context** lengkap.

## Setup Sentry (Node.js)

### 1. Install
\`\`\`bash
npm install @sentry/node @sentry/profiling-node
\`\`\`

### 2. Inisialisasi (di awal aplikasi)
\`\`\`javascript
import * as Sentry from '@sentry/node';
import { ProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV || 'development',
    release: process.env.APP_VERSION || '1.0.0',
    
    // Sampling (hemat kuota)
    tracesSampleRate: 0.1,    // 10% transactions
    profilesSampleRate: 0.1,  // 10% profiling
    
    // Integrations
    integrations: [
        new ProfilingIntegration(),
        new Sentry.Integrations.Http({ tracing: true }),
        new Sentry.Integrations.Express({ app }),
    ],
    
    // Data scrubbing
    beforeSend(event) {
        // Hapus data sensitif
        if (event.request?.data?.password) {
            delete event.request.data.password;
        }
        return event;
    }
});
\`\`\`

### 3. Express Error Handler
\`\`\`javascript
// HARUS setelah semua route
app.use(Sentry.Handlers.errorHandler());

// Optional: Global error handlers
process.on('uncaughtException', (error) => {
    Sentry.captureException(error);
    process.exit(1);
});

process.on('unhandledRejection', (reason) => {
    Sentry.captureException(reason);
});
\`\`\`

## Setup Sentry (React / Next.js)

\`\`\`bash
npm install @sentry/react @sentry/nextjs
\`\`\`

### Next.js:
\`\`\`javascript
// sentry.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});
\`\`\`

## Manual Error Capture

\`\`\`javascript
// Capture exception
try {
    await riskyOperation();
} catch (error) {
    Sentry.captureException(error, {
        tags: { feature: 'payment' },
        user: { id: user.id, email: user.email },
        extra: { orderId: order.id }
    });
    throw error; // Tetap throw
}

// Capture message
Sentry.captureMessage('Something happened', 'warning');

// Set user context
Sentry.setUser({ id: '123', email: 'budi@email.com' });
\`\`\`

## Breadcrumbs (Jejak User)

\`\`\`javascript
Sentry.addBreadcrumb({
    category: 'auth',
    message: 'User logged in',
    level: 'info'
});

Sentry.addBreadcrumb({
    category: 'payment',
    message: \`User clicked checkout, total: \${total}\`,
    data: { orderId: '123' }
});
\`\`\`

## Performance Monitoring

\`\`\`javascript
// Manual transaction
const transaction = Sentry.startTransaction({ name: 'processOrder' });

try {
    await processPayment();
    await sendEmail();
} catch (error) {
    Sentry.captureException(error);
} finally {
    transaction.finish();
}
\`\`\`

## Release Tracking

\`\`\`bash
# Set release version saat deploy
SENTRY_AUTH_TOKEN=xxx sentry-cli releases new 1.0.0
SENTRY_AUTH_TOKEN=xxx sentry-cli releases set-commits 1.0.0 --auto
\`\`\`
  `,

  quiz: [
    { question: "Sentry.init() properti wajib?", options: ["environment", "dsn", "release", "sampleRate"], correctAnswer: 1, explanation: "DSN (Data Source Name) adalah URL unik yang menghubungkan app ke project Sentry." },
    { question: "Sentry.captureException vs captureMessage?", options: ["Sama", "captureException: error object; captureMessage: string", "Message lebih detail", "Exception deprecated"], correctAnswer: 1 },
    { question: "Breadcrumbs untuk?", options: ["Debug", "Jejak user sebelum error (memudahkan reproduksi)", "Logging", "Performance"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Sentry Setup Express.js",
      language: "javascript",
      code: `import express from 'express';
import * as Sentry from '@sentry/node';

const app = express();

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV,
    tracesSampleRate: 0.1
});

// Request handler HARUS pertama
app.use(Sentry.Handlers.requestHandler());

// Routes
app.get('/api/users', async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        Sentry.captureException(error, {
            user: { id: req.user?.id },
            tags: { endpoint: '/api/users' }
        });
        res.status(500).json({ error: 'Internal error' });
    }
});

// Error handler HARUS terakhir
app.use(Sentry.Handlers.errorHandler());

app.listen(3000);`
    }
  ]
};