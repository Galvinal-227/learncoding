export const chapter = {
  slug: "patterns",
  title: "Patterns",
  description: "Membuat pattern berulang di SVG untuk background dan texture.",
  icon: "SiSvg",
  color: "#FFB13B",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["svg-introduction", "svg-basic-shapes"],
  tags: ["svg", "patterns", "texture", "background"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Pattern Dasar

\`\`\`svg
<defs>
    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="4" fill="blue" />
    </pattern>
</defs>

<rect width="400" height="200" fill="url(#dots)" />
\`\`\`

## Pattern Properties

| Atribut | Deskripsi |
|---------|-----------|
| width | Lebar pattern |
| height | Tinggi pattern |
| patternUnits | userSpaceOnUse / objectBoundingBox |
| patternTransform | Transformasi pattern |

## Contoh Pattern

### Stripes
\`\`\`svg
<pattern id="stripes" width="20" height="20" patternUnits="userSpaceOnUse">
    <rect width="20" height="10" fill="red" />
    <rect y="10" width="20" height="10" fill="blue" />
</pattern>
\`\`\`

### Diagonal Stripes
\`\`\`svg
<pattern id="diagonal" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <rect width="20" height="20" fill="white" />
    <line x1="0" y1="0" x2="20" y2="0" stroke="black" stroke-width="2" />
</pattern>
\`\`\`

### Grid
\`\`\`svg
<pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
    <rect width="20" height="20" fill="white" />
    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ccc" stroke-width="1" />
</pattern>
\`\`\`

## Contoh Lengkap

\`\`\`svg
<svg viewBox="0 0 600 400">
    <defs>
        <!-- Dots -->
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="4" fill="#FF6B6B" />
        </pattern>
        
        <!-- Stripes -->
        <pattern id="stripes" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="20" height="20" fill="white" />
            <line x1="0" y1="10" x2="20" y2="10" stroke="#4ECDC4" stroke-width="4" />
        </pattern>
        
        <!-- Grid -->
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="white" />
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" stroke-width="1" />
        </pattern>
        
        <!-- Triangle -->
        <pattern id="tri" width="40" height="40" patternUnits="userSpaceOnUse">
            <polygon points="20,0 0,40 40,40" fill="#FFE66D" />
        </pattern>
    </defs>
    
    <rect x="20" y="20" width="120" height="100" fill="url(#dots)" rx="8" />
    <rect x="160" y="20" width="120" height="100" fill="url(#stripes)" rx="8" />
    <rect x="300" y="20" width="120" height="100" fill="url(#grid)" rx="8" />
    <rect x="440" y="20" width="120" height="100" fill="url(#tri)" rx="8" />
</svg>
\`\`\`
  `,
  quiz: [
    {
      question: "Element untuk pattern di SVG adalah?",
      options: [
        "pattern",
        "repeat",
        "tile",
        "texture"
      ],
      correctAnswer: 0
    },
    {
      question: "Atribut untuk lebar pattern adalah?",
      options: [
        "width",
        "size",
        "span",
        "length"
      ],
      correctAnswer: 0
    },
    {
      question: "patternUnits default adalah?",
      options: [
        "userSpaceOnUse",
        "objectBoundingBox",
        "viewport",
        "screen"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Pattern Examples",
      code: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <!-- Crosshatch -->
        <pattern id="cross" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="white" />
            <path d="M 0 0 L 20 20 M 20 0 L 0 20" stroke="#FF6B6B" stroke-width="2" />
        </pattern>
        
        <!-- Zigzag -->
        <pattern id="zigzag" width="40" height="20" patternUnits="userSpaceOnUse">
            <path d="M 0 10 L 10 0 L 20 10 L 30 0 L 40 10" fill="none" stroke="#4ECDC4" stroke-width="3" />
        </pattern>
        
        <!-- Polka -->
        <pattern id="polka" width="30" height="30" patternUnits="userSpaceOnUse">
            <rect width="30" height="30" fill="#FFE66D" />
            <circle cx="15" cy="15" r="6" fill="#F38181" />
        </pattern>
        
        <!-- Checker -->
        <pattern id="checker" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="20" height="20" fill="#AA96DA" />
            <rect x="20" y="20" width="20" height="20" fill="#AA96DA" />
            <rect x="0" y="20" width="20" height="20" fill="white" />
            <rect x="20" y="0" width="20" height="20" fill="white" />
        </pattern>
    </defs>
    
    <rect x="10" y="10" width="170" height="120" fill="url(#cross)" rx="8" />
    <rect x="190" y="10" width="170" height="120" fill="url(#zigzag)" rx="8" />
    <rect x="370" y="10" width="170" height="120" fill="url(#polka)" rx="8" />
    
    <rect x="10" y="160" width="170" height="120" fill="url(#checker)" rx="8" />
    
    <!-- Custom Pattern -->
    <pattern id="custom" width="50" height="50" patternUnits="userSpaceOnUse">
        <rect width="50" height="50" fill="#95E1D3" />
        <circle cx="25" cy="25" r="10" fill="white" opacity="0.5" />
        <rect x="20" y="5" width="10" height="10" fill="white" opacity="0.3" />
        <rect x="35" y="35" width="10" height="10" fill="white" opacity="0.3" />
    </pattern>
    
    <rect x="190" y="160" width="350" height="120" fill="url(#custom)" rx="8" />
</svg>`,
      language: "html"
    }
  ]
};