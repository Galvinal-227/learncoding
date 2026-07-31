export const chapter = {
  slug: "performance-image-optimization",
  title: "Image Optimization",
  description: "Optimasi gambar: format modern, responsive images, lazy loading, CDN.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["performance-lazy-loading"],
  tags: ["performance", "images", "webp", "avif"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Modern Formats (WebP, AVIF)

\`\`\`html
<picture>
    <source srcset="hero.avif" type="image/avif">
    <source srcset="hero.webp" type="image/webp">
    <img src="hero.jpg" alt="Hero" width="1200" height="600">
</picture>
\`\`\`

## Responsive Images

\`\`\`html
<img src="small.jpg"
     srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
     alt="Responsive"
     loading="lazy">
\`\`\`

## Next.js Image

\`\`\`jsx
import Image from 'next/image';

<Image src="/hero.jpg" alt="Hero" width={1200} height={600} priority />
<Image src="/photo.jpg" alt="Photo" fill style={{ objectFit: 'cover' }} />
\`\`\`

## Image CDN

\`\`\`
Cloudinary, Imgix, Cloudflare Images:
- Auto-format (WebP/AVIF)
- Auto-resize
- Auto-quality
- Global CDN
\`\`\`
  `,

  quiz: [
    { question: "WebP/AVIF?", options: ["Old format", "Modern image formats (lebih kecil)", "Video", "Audio"], correctAnswer: 1 },
    { question: "srcset?", options: ["One size", "Responsive images (multiple sizes)", "CSS", "JS"], correctAnswer: 1 }
  ],

  codeExamples: []
};