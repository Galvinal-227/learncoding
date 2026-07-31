export const chapter = {
  slug: "gradients",
  title: "Gradients",
  description: "Membuat linear dan radial gradients di SVG.",
  icon: "SiSvg",
  color: "#FFB13B",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["svg-introduction"],
  tags: ["svg", "gradients", "linear", "radial"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Linear Gradient

### Definisi
\`\`\`svg
<defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF6B6B" />
        <stop offset="50%" style="stop-color:#4ECDC4" />
        <stop offset="100%" style="stop-color:#FFE66D" />
    </linearGradient>
</defs>

<rect width="200" height="100" fill="url(#grad1)" />
\`\`\`

### Direction

\`\`\`svg
<!-- Horizontal -->
<linearGradient id="horizontal" x1="0%" y1="0%" x2="100%" y2="0%">

<!-- Vertical -->
<linearGradient id="vertical" x1="0%" y1="0%" x2="0%" y2="100%">

<!-- Diagonal -->
<linearGradient id="diagonal" x1="0%" y1="0%" x2="100%" y2="100%">
\`\`\`

## Radial Gradient

\`\`\`svg
<defs>
    <radialGradient id="radial" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style="stop-color:#FF6B6B" />
        <stop offset="100%" style="stop-color:#4ECDC4" />
    </radialGradient>
</defs>

<circle cx="100" cy="100" r="80" fill="url(#radial)" />
\`\`\`

## Multiple Stops

\`\`\`svg
<linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="red" />
    <stop offset="20%" stop-color="orange" />
    <stop offset="40%" stop-color="yellow" />
    <stop offset="60%" stop-color="green" />
    <stop offset="80%" stop-color="blue" />
    <stop offset="100%" stop-color="purple" />
</linearGradient>
\`\`\`

## Contoh Lengkap

\`\`\`svg
<svg viewBox="0 0 500 400">
    <defs>
        <!-- Linear Gradient -->
        <linearGradient id="linear1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF6B6B" />
            <stop offset="100%" stop-color="#4ECDC4" />
        </linearGradient>
        
        <!-- Radial Gradient -->
        <radialGradient id="radial1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFE66D" />
            <stop offset="100%" stop-color="#F38181" />
        </radialGradient>
        
        <!-- Multiple Stops -->
        <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FF6B6B" />
            <stop offset="25%" stop-color="#FFE66D" />
            <stop offset="50%" stop-color="#4ECDC4" />
            <stop offset="75%" stop-color="#95E1D3" />
            <stop offset="100%" stop-color="#AA96DA" />
        </linearGradient>
    </defs>
    
    <rect x="20" y="20" width="200" height="80" fill="url(#linear1)" rx="8" />
    <circle cx="400" cy="60" r="40" fill="url(#radial1)" />
    <rect x="20" y="130" width="450" height="80" fill="url(#rainbow)" rx="8" />
</svg>
\`\`\`
  `,
  quiz: [
    {
      question: "Element untuk linear gradient adalah?",
      options: [
        "linearGradient",
        "gradient",
        "linear",
        "lg"
      ],
      correctAnswer: 0
    },
    {
      question: "Atribut untuk posisi stop gradient adalah?",
      options: [
        "position",
        "offset",
        "stop",
        "value"
      ],
      correctAnswer: 1
    },
    {
      question: "Element untuk radial gradient adalah?",
      options: [
        "radialGradient",
        "circleGradient",
        "roundGradient",
        "rg"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Gradient Examples",
      code: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <!-- Gradients -->
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF6B6B" />
            <stop offset="100%" stop-color="#4ECDC4" />
        </linearGradient>
        
        <radialGradient id="g2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFE66D" />
            <stop offset="100%" stop-color="#F38181" />
        </radialGradient>
        
        <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#AA96DA" />
            <stop offset="100%" stop-color="#95E1D3" />
        </linearGradient>
        
        <radialGradient id="g4" cx="30%" cy="30%" r="60%">
            <stop offset="0%" stop-color="#white" />
            <stop offset="100%" stop-color="#4ECDC4" />
        </radialGradient>
        
        <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="red" />
            <stop offset="16%" stop-color="orange" />
            <stop offset="33%" stop-color="yellow" />
            <stop offset="50%" stop-color="green" />
            <stop offset="66%" stop-color="blue" />
            <stop offset="83%" stop-color="indigo" />
            <stop offset="100%" stop-color="violet" />
        </linearGradient>
    </defs>
    
    <!-- Rectangles -->
    <rect x="10" y="10" width="180" height="80" fill="url(#g1)" rx="10" />
    <rect x="200" y="10" width="180" height="80" fill="url(#g3)" rx="10" />
    <rect x="400" y="10" width="180" height="80" fill="url(#rainbow)" rx="10" />
    
    <!-- Circles -->
    <circle cx="100" cy="170" r="60" fill="url(#g2)" />
    <circle cx="250" cy="170" r="60" fill="url(#g4)" />
    
    <!-- Text with gradient -->
    <text x="460" y="180" font-size="40" font-weight="bold" fill="url(#rainbow)" text-anchor="middle">
        SVG
    </text>
    
    <!-- Shapes with gradient -->
    <rect x="20" y="250" width="100" height="80" fill="url(#g1)" rx="8" />
    <rect x="150" y="250" width="100" height="80" fill="url(#g2)" rx="8" />
    <rect x="280" y="250" width="100" height="80" fill="url(#g3)" rx="8" />
    <rect x="410" y="250" width="100" height="80" fill="url(#g4)" rx="8" />
</svg>`,
      language: "html"
    }
  ]
};