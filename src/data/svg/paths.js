export const chapter = {
  slug: "paths",
  title: "Paths",
  description: "Membuat path kompleks di SVG dengan perintah M, L, C, Q, A, Z.",
  icon: "SiSvg",
  color: "#FFB13B",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["svg-introduction", "svg-basic-shapes"],
  tags: ["svg", "path", "curves", "bezier"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Perintah Path

| Perintah | Deskripsi |
|----------|-----------|
| M x y | Move to |
| L x y | Line to |
| H x | Horizontal line |
| V y | Vertical line |
| C x1 y1 x2 y2 x y | Cubic Bezier |
| Q x1 y1 x y | Quadratic Bezier |
| A rx ry x-axis-rotation large-arc sweep x y | Arc |
| Z | Close path |

## Contoh Path

### Garis Sederhana
\`\`\`svg
<path d="M 50 50 L 250 50 L 250 150 L 50 150 Z" fill="blue" />
\`\`\`

### Kurva Bezier
\`\`\`svg
<!-- Cubic Bezier -->
<path d="M 50 200 C 150 50, 300 50, 400 200" fill="none" stroke="red" stroke-width="4" />

<!-- Quadratic Bezier -->
<path d="M 50 300 Q 200 150, 400 300" fill="none" stroke="blue" stroke-width="4" />
\`\`\`

### Arc
\`\`\`svg
<path d="M 100 300 A 100 100 0 0 1 300 300" fill="none" stroke="green" stroke-width="4" />
\`\`\`

## Kombinasi Path

\`\`\`svg
<svg viewBox="0 0 500 400">
    <!-- Heart -->
    <path d="M 250 380 
             C 250 380, 50 280, 50 180 
             C 50 120, 100 70, 150 80 
             C 200 90, 230 130, 250 150 
             C 270 130, 300 90, 350 80 
             C 400 70, 450 120, 450 180 
             C 450 280, 250 380, 250 380 Z" 
          fill="#FF6B6B" />
    
    <!-- Star -->
    <path d="M 150 100 L 170 170 L 240 170 L 185 215 L 205 285 L 150 245 L 95 285 L 115 215 L 60 170 L 130 170 Z" 
          fill="#FFE66D" />
</svg>
\`\`\`

## Tips Membuat Path

1. **Mulai dengan M** (Move to)
2. **Gunakan L** untuk garis lurus
3. **C** untuk kurva halus
4. **Q** untuk kurva sederhana
5. **Z** untuk menutup path
6. **Hati-hati dengan koordinat**
  `,
  quiz: [
    {
      question: "Perintah untuk Move To di path adalah?",
      options: [
        "M",
        "L",
        "C",
        "Q"
      ],
      correctAnswer: 0
    },
    {
      question: "Perintah untuk menutup path adalah?",
      options: [
        "Z",
        "C",
        "L",
        "M"
      ],
      correctAnswer: 0
    },
    {
      question: "Perintah untuk Cubic Bezier adalah?",
      options: [
        "Q",
        "C",
        "L",
        "A"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Path Examples",
      code: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <!-- Basic Path -->
    <path d="M 20 20 L 180 20 L 180 120 L 20 120 Z" fill="#FF6B6B" />
    <text x="100" y="80" text-anchor="middle" fill="white">Square</text>
    
    <!-- Cubic Bezier -->
    <path d="M 220 100 C 220 20, 380 20, 380 100" fill="none" stroke="#4ECDC4" stroke-width="6" />
    <text x="300" y="130" text-anchor="middle" font-size="14">Cubic Bezier</text>
    
    <!-- Quadratic Bezier -->
    <path d="M 20 220 Q 100 120, 180 220" fill="none" stroke="#FFE66D" stroke-width="6" />
    <text x="100" y="250" text-anchor="middle" font-size="14">Quad Bezier</text>
    
    <!-- Arc -->
    <path d="M 220 220 A 80 80 0 0 1 380 220" fill="none" stroke="#AA96DA" stroke-width="6" />
    <text x="300" y="250" text-anchor="middle" font-size="14">Arc</text>
    
    <!-- Heart -->
    <path d="M 480 150 
             C 480 120, 460 100, 440 100 
             C 420 100, 410 115, 410 130 
             C 410 160, 480 200, 480 200 
             C 480 200, 550 160, 550 130 
             C 550 115, 540 100, 520 100 
             C 500 100, 480 120, 480 150 Z" 
          fill="#F38181" />
    
    <!-- Custom Shape -->
    <path d="M 20 320 
             L 50 280 L 80 320 
             L 110 280 L 140 320 
             L 170 280 L 200 320" 
          fill="none" stroke="#95E1D3" stroke-width="4" />
    
    <!-- Closed Shape -->
    <path d="M 250 320 L 290 280 L 330 320 L 370 280 L 410 320 Z" fill="#A8D8EA" />
    
    <!-- Combined -->
    <path d="M 460 320 
             Q 480 280, 500 320 
             Q 520 280, 540 320" 
          fill="none" stroke="#FF8B94" stroke-width="4" />
</svg>`,
      language: "html"
    }
  ]
};