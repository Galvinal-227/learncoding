export const chapter = {
  slug: "basic-shapes",
  title: "Basic Shapes",
  description: "Membuat shape dasar di SVG: rectangle, circle, ellipse, line, polygon, polyline.",
  icon: "SiSvg",
  color: "#FFB13B",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["svg-introduction"],
  tags: ["svg", "shapes", "rectangle", "circle", "polygon"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Rectangle

\`\`\`svg
<!-- Basic rectangle -->
<rect x="50" y="50" width="200" height="100" fill="blue" />

<!-- Rounded corners -->
<rect x="50" y="200" width="200" height="100" rx="10" ry="10" fill="blue" />

<!-- With stroke -->
<rect x="300" y="50" width="200" height="100" fill="none" stroke="red" stroke-width="4" />
\`\`\`

## Circle

\`\`\`svg
<!-- Basic circle -->
<circle cx="150" cy="150" r="80" fill="red" />

<!-- With stroke -->
<circle cx="400" cy="150" r="80" fill="none" stroke="blue" stroke-width="4" />
\`\`\`

## Ellipse

\`\`\`svg
<ellipse cx="200" cy="200" rx="150" ry="80" fill="green" />
\`\`\`

## Line

\`\`\`svg
<line x1="50" y1="50" x2="350" y2="150" stroke="black" stroke-width="4" />
\`\`\`

## Polygon

\`\`\`svg
<!-- Triangle -->
<polygon points="200,20 50,180 350,180" fill="orange" />

<!-- Star -->
<polygon points="100,10 120,70 180,70 130,110 150,170 100,140 50,170 70,110 20,70 80,70" fill="gold" />
\`\`\`

## Polyline

\`\`\`svg
<polyline points="50,200 150,120 250,180 350,100" fill="none" stroke="purple" stroke-width="4" />
\`\`\`

## Atribut Umum

| Atribut | Deskripsi |
|---------|-----------|
| fill | Warna isian |
| stroke | Warna garis |
| stroke-width | Ketebalan garis |
| fill-opacity | Opasitas isian |
| stroke-opacity | Opasitas garis |
| transform | Transformasi |

## Contoh Lengkap

\`\`\`svg
<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
    <!-- Rectangle -->
    <rect x="20" y="20" width="100" height="80" fill="#FF6B6B" rx="10" />
    
    <!-- Circle -->
    <circle cx="170" cy="60" r="45" fill="#4ECDC4" />
    
    <!-- Ellipse -->
    <ellipse cx="300" cy="60" rx="80" ry="40" fill="#FFE66D" />
    
    <!-- Line -->
    <line x1="20" y1="150" x2="200" y2="150" stroke="#333" stroke-width="4" />
    
    <!-- Polygon (Triangle) -->
    <polygon points="300,120 250,190 350,190" fill="#A8E6CF" />
    
    <!-- Polyline -->
    <polyline points="20,250 100,200 180,260 260,210 340,250" fill="none" stroke="#FF8B94" stroke-width="4" />
    
    <!-- Rectangle with gradient -->
    <rect x="380" y="40" width="100" height="150" fill="url(#grad1)" rx="8" />
    
    <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#FF6B6B" />
            <stop offset="100%" style="stop-color:#4ECDC4" />
        </linearGradient>
    </defs>
</svg>
\`\`\`
  `,
  quiz: [
    {
      question: "Element untuk membuat lingkaran di SVG adalah?",
      options: [
        "circle",
        "ellipse",
        "arc",
        "sphere"
      ],
      correctAnswer: 0
    },
    {
      question: "Atribut untuk membuat sudut melengkung di rectangle adalah?",
      options: [
        "radius",
        "rx",
        "round",
        "arc"
      ],
      correctAnswer: 1
    },
    {
      question: "Element untuk membuat poligon adalah?",
      options: [
        "poly",
        "polygon",
        "path",
        "shape"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "All Shapes Example",
      code: `<svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg">
    <!-- Shapes Gallery -->
    <rect x="10" y="10" width="130" height="90" fill="#FF6B6B" rx="10" />
    <text x="75" y="60" text-anchor="middle" fill="white" font-size="14">Rectangle</text>
    
    <circle cx="200" cy="55" r="45" fill="#4ECDC4" />
    <text x="200" y="115" text-anchor="middle" font-size="14">Circle</text>
    
    <ellipse cx="350" cy="55" rx="80" ry="40" fill="#FFE66D" />
    <text x="350" y="115" text-anchor="middle" font-size="14">Ellipse</text>
    
    <line x1="450" y1="15" x2="550" y2="95" stroke="#95E1D3" stroke-width="4" />
    <text x="500" y="115" text-anchor="middle" font-size="14">Line</text>
    
    <polygon points="75,150 20,230 130,230" fill="#A8E6CF" />
    <text x="75" y="250" text-anchor="middle" font-size="14">Triangle</text>
    
    <polygon points="200,150 230,200 290,200 240,235 260,285 200,255 140,285 160,235 110,200 170,200" fill="#F38181" />
    <text x="200" y="305" text-anchor="middle" font-size="14">Star</text>
    
    <polyline points="340,200 380,150 420,210 460,160 500,220" fill="none" stroke="#AA96DA" stroke-width="6" />
    <text x="420" y="250" text-anchor="middle" font-size="14">Polyline</text>
    
    <!-- Hexagon -->
    <polygon points="520,160 570,190 570,240 520,270 470,240 470,190" fill="#A8D8EA" />
    <text x="520" y="295" text-anchor="middle" font-size="14">Hexagon</text>
    
    <!-- Combined Shapes -->
    <g transform="translate(80, 320)">
        <rect width="100" height="80" fill="#E8D5B7" rx="5" />
        <circle cx="20" cy="20" r="15" fill="#FF6B6B" />
        <circle cx="80" cy="20" r="15" fill="#4ECDC4" />
        <rect x="10" y="45" width="80" height="25" fill="#AA96DA" rx="5" />
    </g>
</svg>`,
      language: "html"
    }
  ]
};