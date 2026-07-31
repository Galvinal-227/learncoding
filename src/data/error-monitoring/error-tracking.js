export const chapter = {
  slug: "error-monitoring-error-tracking",
  title: "Error Tracking Best Practices",
  description: "Praktik terbaik error tracking: context, grouping, sampling, dan PII scrubbing.",
  icon: "SiSentry",
  color: "#362D59",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["error-monitoring-sentry"],
  tags: ["error-monitoring", "best-practices", "context", "pii"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Beri Context yang Kaya

\`\`\`javascript
Sentry.captureException(error, {
    // User context
    user: { id: user.id, role: user.role },
    
    // Tags (untuk filtering)
    tags: {
        feature: 'checkout',
        paymentMethod: 'gopay',
        environment: 'production'
    },
    
    // Extra data (untuk debugging)
    extra: {
        orderId: order.id,
        cartItems: order.items.length,
        total: order.total
    },
    
    // Severity level
    level: 'error' // 'fatal' | 'error' | 'warning' | 'info' | 'debug'
});
\`\`\`

## 2. Error Grouping

Gunakan **fingerprint** untuk mengelompokkan error yang sama:

\`\`\`javascript
Sentry.captureException(error, {
    fingerprint: ['payment-failure', paymentMethod]
});
\`\`\`

## 3. Sampling (Hemat Kuota)

\`\`\`javascript
Sentry.init({
    // Production: sample 10%
    tracesSampleRate: 0.1,
    
    // Development: sample semua
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
    
    // Error: selalu kirim
    // Transaction: sample 10%
});
\`\`\`

## 4. PII Scrubbing (Hapus Data Sensitif)

\`\`\`javascript
Sentry.init({
    beforeSend(event) {
        // Hapus password
        if (event.request?.data?.password) {
            delete event.request.data.password;
        }
        
        // Hapus email dari breadcrumbs
        event.breadcrumbs?.forEach(crumb => {
            crumb.data = crumb.data || {};
            delete crumb.data.email;
        });
        
        // Jangan kirim error dari development
        if (process.env.NODE_ENV === 'development') return null;
        
        return event;
    }
});
\`\`\`

## 5. Ignore Known Errors

\`\`\`javascript
Sentry.init({
    ignoreErrors: [
        'ResizeObserver loop limit exceeded',
        'Non-Error promise rejection',
        /Network request failed/i
    ]
});
\`\`\`

## 6. Custom Error Boundary (React)

\`\`\`jsx
class ErrorBoundary extends React.Component {
    componentDidCatch(error, errorInfo) {
        Sentry.withScope(scope => {
            scope.setExtras(errorInfo);
            Sentry.captureException(error);
        });
    }
}
\`\`\`
  `,

  quiz: [
    { question: "beforeSend untuk?", options: ["Kirim email", "Filter/modifikasi event sebelum kirim ke Sentry", "Cache", "Redirect"], correctAnswer: 1 },
    { question: "PII scrubbing?", options: ["Hapus error", "Hapus data sensitif (password, email) sebelum kirim", "Compress data", "Encrypt data"], correctAnswer: 1 }
  ],

  codeExamples: []
};