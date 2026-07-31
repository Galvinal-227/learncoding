export const chapter = {
  slug: "analytics-mixpanel",
  title: "Mixpanel & Product Analytics",
  description: "Pelajari Mixpanel untuk product analytics dan user behavior tracking.",
  icon: "SiGoogleanalytics",
  color: "#E37400",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["analytics-introduction"],
  tags: ["analytics", "mixpanel", "product", "user-behavior"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Mixpanel vs Google Analytics

| | GA4 | Mixpanel |
|---|-----|----------|
| Fokus | Traffic & acquisition | Product & user behavior |
| User tracking | Anonymous + User ID | User profiles kaya |
| Funnels | Basic | Advanced |
| Retention | Basic | Advanced |
| Terbaik untuk | Marketing, SEO | Product teams |

## Setup Mixpanel

\`\`\`bash
npm install mixpanel-browser
\`\`\`

\`\`\`javascript
import mixpanel from 'mixpanel-browser';

mixpanel.init('YOUR_PROJECT_TOKEN', {
    debug: true,
    track_pageview: true,
    persistence: 'localStorage'
});
\`\`\`

## Track Events

\`\`\`javascript
// Basic event
mixpanel.track('Button Clicked', {
    button_name: 'Sign Up',
    page: 'Homepage'
});

// Identify user
mixpanel.identify('user_123');

// Set user properties
mixpanel.people.set({
    $name: 'Budi',
    $email: 'budi@email.com',
    plan: 'Pro',
    signup_date: '2026-01-15'
});
\`\`\`

## Fitur Mixpanel

### Funnels
\`\`\`
Visit Landing → Sign Up → Complete Profile → Purchase
    100%           40%            20%            5%
\`\`\`

### Retention
\`\`\`
Day 0: 100% user sign up
Day 1: 40% kembali
Day 7: 20% kembali
Day 30: 10% kembali
\`\`\`

### User Flows
Visualisasi path user dari halaman ke halaman.

## Mixpanel untuk React

\`\`\`javascript
import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';

function PricingPage() {
    useEffect(() => {
        mixpanel.track('Pricing Page Viewed');
    }, []);
    
    const handleUpgrade = (plan) => {
        mixpanel.track('Plan Upgraded', { plan, price: plan.price });
    };
    
    return <button onClick={() => handleUpgrade('Pro')}>Upgrade</button>;
}
\`\`\`
  `,

  quiz: [
    { question: "Mixpanel fokus ke apa?", options: ["SEO", "Product analytics & user behavior", "Social media", "Server monitoring"], correctAnswer: 1 },
    { question: "mixpanel.identify() untuk?", options: ["Track event", "Mengaitkan user dengan ID unik", "Hapus data", "Logout"], correctAnswer: 1 }
  ],

  codeExamples: []
};