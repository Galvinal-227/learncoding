export const chapter = {
  slug: "responsive-images",
  title: "Responsive Images",
  description: "Teknik optimalisasi gambar untuk berbagai ukuran layar dan resolusi.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["responsive-introduction"],
  tags: ["images", "optimization", "srcset", "picture", "html"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Mengapa Responsive Images Penting?

1. **Performa** - Load gambar yang sesuai dengan ukuran layar
2. **Bandwidth** - Menghemat data untuk mobile
3. **User Experience** - Loading lebih cepat
4. **SEO** - Core Web Vitals yang lebih baik

## srcset dan sizes

\`\`\`html
<!-- srcset dengan x descriptor (density) -->
<img src="image.jpg" 
     srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x"
     alt="Responsive image">

<!-- srcset dengan w descriptor (width) -->
<img src="image-480w.jpg"
     srcset="image-480w.jpg 480w,
             image-768w.jpg 768w,
             image-1024w.jpg 1024w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
     alt="Responsive image">
\`\`\`

## Picture Element

\`\`\`html
<picture>
    <!-- Mobile: portrait orientation -->
    <source media="(max-width: 480px)" 
            srcset="image-mobile.jpg">
    <!-- Tablet: landscape -->
    <source media="(max-width: 768px)" 
            srcset="image-tablet.jpg">
    <!-- Desktop -->
    <source media="(min-width: 1024px)" 
            srcset="image-desktop.jpg">
    <!-- Fallback -->
    <img src="image-default.jpg" alt="Responsive image">
</picture>
\`\`\`

## WebP & Modern Formats

\`\`\`html
<picture>
    <source type="image/webp" srcset="image.webp">
    <source type="image/avif" srcset="image.avif">
    <img src="image.jpg" alt="Modern formats">
</picture>
\`\`\`

## CSS Images

\`\`\`css
/* CSS background image */
.bg-image {
    background-image: url('image-mobile.jpg');
    background-size: cover;
}

@media (min-width: 768px) {
    .bg-image {
        background-image: url('image-desktop.jpg');
    }
}
\`\`\`

## Lazy Loading

\`\`\`html
<!-- Native lazy loading -->
<img src="image.jpg" loading="lazy" alt="Lazy loaded">

<!-- With decoding async -->
<img src="image.jpg" decoding="async" loading="lazy" alt="Optimized">
\`\`\`
  `,
  quiz: [
    {
      question: "Apa fungsi srcset pada gambar?",
      options: [
        "Menambah sumber gambar alternatif",
        "Mengatur ukuran gambar",
        "Menambah efek filter",
        "Mengubah warna"
      ],
      correctAnswer: 0
    },
    {
      question: "Format gambar modern yang lebih ringan dari JPEG?",
      options: ["PNG", "GIF", "WebP", "BMP"],
      correctAnswer: 2
    },
    {
      question: "Atribut untuk lazy loading native adalah?",
      options: ["lazy", "loading='lazy'", "async", "defer"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Responsive Images",
      code: `<!-- Art direction with picture -->
<picture>
    <!-- Mobile -->
    <source media="(max-width: 480px)" 
            srcset="image-mobile.webp" 
            type="image/webp">
    <source media="(max-width: 480px)" 
            srcset="image-mobile.jpg">
    
    <!-- Tablet -->
    <source media="(max-width: 768px)" 
            srcset="image-tablet.webp" 
            type="image/webp">
    <source media="(max-width: 768px)" 
            srcset="image-tablet.jpg">
    
    <!-- Desktop -->
    <source media="(min-width: 1024px)" 
            srcset="image-desktop.webp" 
            type="image/webp">
    <source srcset="image-desktop.jpg">
    
    <!-- Fallback -->
    <img src="image-default.jpg" 
         alt="Responsive image"
         loading="lazy"
         decoding="async"
         width="1200"
         height="800">
</picture>

<!-- Simple responsive image with srcset -->
<img src="image-480.jpg"
     srcset="image-480.jpg 480w,
             image-768.jpg 768w,
             image-1024.jpg 1024w,
             image-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
     alt="Responsive image"
     loading="lazy"
     decoding="async">`,
      language: "html"
    }
  ]
};