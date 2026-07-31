import { chapter as checkout } from './checkout.js';
import { chapter as introduction } from './introduction.js';
import { chapter as midtrans } from './midtrans.js';
import { chapter as paypal } from './paypal.js';
import { chapter as quiz } from './quiz.js';
import { chapter as security } from './security.js';
import { chapter as stripe } from './stripe.js';
import { chapter as webhooks } from './webhooks.js';
import { chapter as xendit } from './xendit.js';

export const category = {
  slug: "payment-integration",
  title: "Payment Integration",
  description: "Integrasikan payment gateway: Stripe, Midtrans, PayPal, Xendit ke aplikasi web.",
  icon: "SiStripe",
  color: "#008CDD",
  totalChapters: 9,
  difficulty: "Advanced",
  order: 97,
  isPublished: true,
  chapters: [
    checkout,
    introduction,
    midtrans,
    paypal,
    quiz,
    security,
    stripe,
    webhooks,
    xendit
  ]
};
