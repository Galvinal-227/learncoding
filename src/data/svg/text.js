export const chapter = {
  slug: "text",
  title: "Text",
  description: "Menambahkan dan memformat teks di SVG.",
  icon: "SiSvg",
  color: "#FFB13B",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["svg-introduction"],
  tags: ["svg", "text", "typography", "font"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Text Dasar

\`\`\`svg
<text x="50" y="50" font-size="24" fill="black">Hello SVG</text>
\`\`\`

## Atribut Text

| Atribut | Deskripsi |
|---------|-----------|
| x | Posisi horizontal |
| y | Posisi vertikal |
| font-size | Ukuran font |
| font-family | Jenis font |
| fill | Warna teks |
| text-anchor | start, middle, end |
| font-weight | bold, normal |

## Text Alignment

\`\`\`svg
<!-- Left aligned -->
<text x="100" y="50" text-anchor="start" font-size="20">Left</text>

<!-- Center aligned -->
<text x="100" y="80" text-anchor="middle" font-size="20">Center</text>

<!-- Right aligned -->
<text x="100" y="110" text-anchor="end" font-size="20">Right</text>
\`\`\`

## Text with Stroke

\`\`\`svg
<text x="50" y="50" font-size="40" 
      fill="none" stroke="blue" stroke-width="2" 
      font-family="Arial">Outline Text</text>
\`\`\`

## Text on Path

\`\`\`svg
<defs>
    <path id="textPath" d="M 50 200 Q 200 100, 400 200" />
</defs>

<text>
    <textPath href="#textPath" font-size="20">
        This text follows a curved path
    </textPath>
</text>
\`\`\`

## Contoh Lengkap

\`\`\`svg
<svg viewBox="0 0 500 300">
    <!-- Basic Text -->
    <text x="250" y="50" text-anchor="middle" font-size="28" font-weight="bold" fill="#333">
        SVG Text Example
    </text>
    
    <!-- Different Styles -->
    <text x="50" y="100" font-size="20" fill="#FF6B6B" font-family="Arial">
        Colored Text
    </text>
    
    <text x="50" y="130" font-size="20" fill="none" stroke="#4ECDC4" stroke-width="2" font-family="Arial">
        Outline Text
    </text>
    
    <text x="50" y="160" font-size="20" font-weight="bold" fill="#AA96DA" font-family="Georgia">
        Bold Text
    </text>
    
    <!-- Text Alignment -->
    <text x="350" y="100" text-anchor="middle" font-size="18" fill="#666">
        Center
    </text>
    
    <text x="450" y="100" text-anchor="end" font-size="18" fill="#666">
        Right
    </text>
    
    <!-- Multi-line -->
    <text x="50" y="210" font-size="16" fill="#333">
        <tspan x="50" dy="0">Line 1</tspan>
        <tspan x="50" dy="25">Line 2</tspan>
        <tspan x="50" dy="25">Line 3</tspan>
    </text>
</svg>
\`\`\`
  `,
  quiz: [
    {
      question: "Atribut untuk alignment teks di SVG adalah?",
      options: [
        "align",
        "text-anchor",
        "text-align",
        "anchor"
      ],
      correctAnswer: 1
    },
    {
      question: "Atribut untuk membuat outline teks adalah?",
      options: [
        "outline",
        "stroke",
        "border",
        "edge"
      ],
      correctAnswer: 1
    },
    {
      question: "Element untuk teks di SVG adalah?",
      options: [
        "text",
        "label",
        "string",
        "content"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Text Examples",
      code: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <!-- Title -->
    <text x="300" y="40" text-anchor="middle" font-size="24" font-weight="bold" fill="#333">
        SVG Text Styling
    </text>
    
    <!-- Different Fonts -->
    <text x="50" y="80" font-family="Arial" font-size="18" fill="#FF6B6B">
        Arial Font
    </text>
    <text x="50" y="105" font-family="Georgia" font-size="18" fill="#4ECDC4">
        Georgia Font
    </text>
    <text x="50" y="130" font-family="Courier New" font-size="18" fill="#FFE66D">
        Courier Font
    </text>
    
    <!-- Font Sizes -->
    <text x="250" y="80" font-size="12" fill="#666">12px</text>
    <text x="250" y="100" font-size="18" fill="#666">18px</text>
    <text x="250" y="130" font-size="24" fill="#666">24px</text>
    <text x="250" y="170" font-size="32" fill="#666">32px</text>
    
    <!-- Text Decorations -->
    <text x="400" y="80" text-decoration="underline" fill="#AA96DA">
        Underline
    </text>
    <text x="400" y="105" text-decoration="line-through" fill="#AA96DA">
        Line-through
    </text>
    <text x="400" y="130" font-weight="bold" fill="#AA96DA">
        Bold
    </text>
    <text x="400" y="155" font-style="italic" fill="#AA96DA">
        Italic
    </text>
    
    <!-- Text on Path -->
    <defs>
        <path id="wave" d="M 50 220 Q 200 180, 350 220 Q 500 260, 550 220" />
    </defs>
    
    <text font-size="18" fill="#F38181">
        <textPath href="#wave">
            This text follows a wave path
        </textPath>
    </text>
    
    <!-- Large Text with Gradient -->
    <defs>
        <linearGradient id="gradText" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FF6B6B" />
            <stop offset="100%" stop-color="#4ECDC4" />
        </linearGradient>
    </defs>
    
    <text x="300" y="320" text-anchor="middle" font-size="48" font-weight="bold" fill="url(#gradText)">
        GRADIENT
    </text>
    
    <!-- Rotated Text -->
    <text x="560" y="300" transform="rotate(-90, 560, 300)" font-size="14" fill="#999">
        ROTATED
    </text>
</svg>`,
      language: "html"
    }
  ]
};