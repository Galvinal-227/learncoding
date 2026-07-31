export const chapter = {
  slug: "next-js-image-optimization",
  title: "Image Optimization",
  description: "Optimasi gambar otomatis dengan next/image: lazy loading, responsive, WebP/AVIF.",
  icon: "SiNextdotjs",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["next-js-introduction"],
  tags: ["nextjs", "image", "optimization", "performance"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## next/image

Komponen \`next/image\` adalah **pengganti \`<img>\`** dengan optimasi otomatis:
- 🖼️ **Resize otomatis** sesuai viewport
- 📱 **Responsive** by default
- ⚡ **Lazy loading** otomatis
- 🎯 **WebP/AVIF** auto-conversion
- 📏 **Prevent layout shift** (width + height wajib)

## Basic Usage

### Local Image
\`\`\`tsx
import Image from 'next/image';
import profilePic from '@/public/profile.jpg';

<Image
    src={profilePic}
    alt="Profile photo"
    width={300}
    height={300}
    priority  // Untuk gambar di atas fold (LCP)
/>
\`\`\`

### Remote Image
\`\`\`tsx
// next.config.js
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
                port: '',
                pathname: '/images/**'
            },
            {
                protocol: 'https',
                hostname: 'cdn.myapp.com'
            }
        ]
    }
};

// Usage
<Image
    src="https://example.com/images/photo.jpg"
    alt="Remote image"
    width={800}
    height={600}
/>
\`\`\`

## Props Penting

| Prop | Fungsi | Default |
|------|--------|---------|
| **width** | Lebar gambar (wajib) | - |
| **height** | Tinggi gambar (wajib) | - |
| **alt** | Alt text (wajib) | - |
| **priority** | Preload (LCP) | false |
| **loading** | "lazy" | "eager" |
| **fill** | Isi parent container | false |
| **sizes** | Responsive sizes | - |
| **quality** | 1-100 | 75 |
| **placeholder** | "blur" / "empty" | "empty" |
| **unoptimized** | Skip optimization | false |

## Fill Mode (Unknown Size)

\`\`\`tsx
<div style={{ position: 'relative', width: '100%', height: '400px' }}>
    <Image
        src="/hero.jpg"
        alt="Hero"
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
    />
</div>
\`\`\`

## Blur Placeholder

\`\`\`tsx
import Image from 'next/image';
import heroImg from '@/public/hero.jpg';

<Image
    src={heroImg}
    alt="Hero"
    placeholder="blur"  // Auto-generate blur data URL
    priority
/>
\`\`\`

## Responsive Images

\`\`\`tsx
<Image
    src="/photo.jpg"
    alt="Photo"
    width={1200}
    height={800}
    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
/>
\`\`\`

## Image vs img

| | next/Image | <img> |
|---|-----------|-------|
| Lazy loading | ✅ Auto | Manual |
| Resize | ✅ Auto (CDN) | Manual |
| WebP/AVIF | ✅ Auto convert | Manual |
| Layout shift | ✅ Prevent (w+h) | ❌ |
| Blur placeholder | ✅ Built-in | Manual |
  `,

  quiz: [
    { question: "next/image: width + height?", options: ["Optional", "Required (prevent layout shift)", "Deprecated", "Auto"], correctAnswer: 1 },
    { question: "priority prop?", options: ["Lazy load", "Preload (above fold / LCP)", "Skip optimization", "Quality"], correctAnswer: 1 }
  ],

  codeExamples: []
};