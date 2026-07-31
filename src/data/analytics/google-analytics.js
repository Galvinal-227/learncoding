export const chapter = {
  slug: "analytics-google-analytics",
  title: "Google Analytics 4 (GA4)",
  description: "Setup dan gunakan Google Analytics 4 untuk melacak traffic website.",
  icon: "SiGoogleanalytics",
  color: "#E37400",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["analytics-introduction"],
  tags: ["analytics", "ga4", "google", "tracking"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu GA4?

Google Analytics 4 adalah generasi terbaru Google Analytics yang **event-based** (bukan session-based seperti Universal Analytics). GA4 wajib mulai 1 Juli 2023 (UA discontinued).

## Setup GA4

### 1. Buat Property GA4
1. Buka [analytics.google.com](https://analytics.google.com)
2. Admin → Create Property
3. Isi nama, timezone, currency
4. Pilih platform: **Web**
5. Dapatkan **Measurement ID** (format: G-XXXXXXXXXX)

### 2. Install di Website

#### Via Google Tag (gtag.js) - Direkomendasikan
\`\`\`html
<!-- Di <head> setiap halaman -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
\`\`\`

#### Via Google Tag Manager (GTM)
Lebih fleksibel, tidak perlu edit kode setiap kali tambah tracking.

#### Via NPM (untuk SPA)
\`\`\`bash
npm install react-ga4  # React
npm install vue-gtag    # Vue
npm install ngx-google-analytics  # Angular
\`\`\`

## Event di GA4

### Automatic Events (Gratis)
- page_view
- scroll (90% halaman)
- click (outbound link)
- video engagement
- file download

### Custom Events
\`\`\`javascript
// Track custom event
gtag('event', 'generate_lead', {
    'event_category': 'Form',
    'event_label': 'Contact Form',
    'value': 1
});

// Ecommerce: Purchase
gtag('event', 'purchase', {
    'transaction_id': 'T_12345',
    'value': 99.99,
    'currency': 'IDR',
    'items': [{
        'item_id': 'SKU_123',
        'item_name': 'Product A',
        'price': 99.99,
        'quantity': 1
    }]
});
\`\`\`

## Parameter di GA4

\`\`\`javascript
gtag('event', 'search', {
    'search_term': 'sepatu lari',
    'results_count': 25
});
\`\`\`
⚠️ Custom parameters harus didaftarkan dulu di GA4 Console!

## Debugging GA4

- Install **Google Analytics Debugger** Chrome extension
- Buka DevTools → Console → cek log "gtag"
- GA4 Console → Admin → DebugView (real-time events)

## React Example

\`\`\`javascript
import ReactGA from 'react-ga4';

// Init
ReactGA.initialize('G-XXXXXXXXXX');

// Page view
ReactGA.send({ hitType: 'pageview', page: '/about' });

// Event
ReactGA.event({
    category: 'Button',
    action: 'Click',
    label: 'Sign Up'
});
\`\`\`
  `,

  quiz: [
    { question: "GA4 berbasis apa?", options: ["Session", "Event", "Page", "User"], correctAnswer: 1, explanation: "GA4 adalah event-based analytics, berbeda dengan Universal Analytics yang session-based." },
    { question: "Format Measurement ID GA4?", options: ["UA-XXXX-X", "G-XXXXXXXXXX", "AW-XXXX", "GTM-XXXX"], correctAnswer: 1 },
    { question: "Fungsi gtag() untuk apa?", options: ["Styling", "Kirim event/tracking ke GA4", "Database", "Animasi"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Next.js GA4 Setup",
      language: "javascript",
      code: `// app/layout.js (Next.js App Router)
import Script from 'next/script';

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body>
                {children}
                
                <Script
                    src={\`https://www.googletagmanager.com/gtag/js?id=\${process.env.NEXT_PUBLIC_GA_ID}\`}
                    strategy="afterInteractive"
                />
                <Script id="ga4" strategy="afterInteractive">
                    {\`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '\${process.env.NEXT_PUBLIC_GA_ID}', {
                            page_path: window.location.pathname,
                        });
                    \`}
                </Script>
            </body>
        </html>
    );
}`
    }
  ]
};