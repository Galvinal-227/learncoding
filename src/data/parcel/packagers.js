export const chapter = {
  slug: "parcel-packagers",
  title: "Packagers & Optimizers",
  description: "Optimasi output dengan packagers, minification, dan tree shaking.",
  icon: "SiParcel",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["parcel-transformers"],
  tags: ["parcel", "packagers", "optimization", "production"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Built-in Optimization

Parcel production build otomatis:
- ✅ **Minification** (JS, CSS, HTML)
- ✅ **Tree shaking** (remove unused code)
- ✅ **Code splitting** (dynamic import)
- ✅ **Image optimization**
- ✅ **Scope hoisting**
- ✅ **Content hashing**

## Image Optimization

\`\`\`html
<!-- Auto-convert ke WebP/AVIF -->
<picture>
    <source srcset="hero.avif" type="image/avif">
    <source srcset="hero.webp" type="image/webp">
    <img src="hero.jpg" alt="Hero">
</picture>
\`\`\`

\`\`\`javascript
// Import dengan query parameters
import heroUrl from 'hero.jpg?width=800&quality=80';
\`\`\`

## Bundle Analysis

\`\`\`bash
npx parcel build index.html --reporter @parcel/reporter-bundle-analyzer
\`\`\`

## Custom Packagers

\`\`\`json
// .parcelrc
{
    "extends": "@parcel/config-default",
    "packagers": {
        "*.js": "@parcel/packager-js",
        "*.css": "@parcel/packager-css"
    }
}
\`\`\`

## Production Build Options

\`\`\`bash
# Production build
npx parcel build index.html

# No optimization (debug)
npx parcel build index.html --no-optimize

# Detailed report
npx parcel build index.html --detailed-report 20

# Public URL
npx parcel build index.html --public-url https://cdn.example.com/

# Custom output dir
npx parcel build index.html --dist-dir build
\`\`\`
  `,

  quiz: [
    { question: "Tree shaking?", options: ["Manual", "Auto remove unused code", "Config only", "Not supported"], correctAnswer: 1 },
    { question: "parcel build --public-url?", options: ["Local", "Set CDN/asset URL prefix", "Debug", "Output dir"], correctAnswer: 1 }
  ],

  codeExamples: []
};