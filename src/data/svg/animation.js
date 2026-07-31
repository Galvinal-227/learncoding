export const chapter = {
  slug: "animation",
  title: "Animation",
  description: "Menganimasi SVG dengan CSS dan SMIL (animate, animateTransform, animateMotion).",
  icon: "SiSvg",
  color: "#FFB13B",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["svg-introduction"],
  tags: ["svg", "animation", "css", "smil"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## CSS Animation

### Keyframes
\`\`\`css
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

@keyframes spin {
    100% { transform: rotate(360deg); }
}

.animated {
    animation: pulse 2s ease-in-out infinite;
}
\`\`\`

### CSS Properties
\`\`\`svg
<circle class="animated" cx="100" cy="100" r="40" fill="blue" />
\`\`\`

## SMIL Animation

### animate
\`\`\`svg
<!-- Animate attribute -->
<circle cx="50" cy="50" r="30" fill="red">
    <animate attributeName="cx" from="50" to="350" dur="2s" repeatCount="indefinite" />
</circle>

<!-- Animate opacity -->
<circle cx="200" cy="50" r="30" fill="blue">
    <animate attributeName="opacity" from="1" to="0.2" dur="1.5s" repeatCount="indefinite" />
</circle>
\`\`\`

### animateTransform
\`\`\`svg
<!-- Rotate -->
<rect x="100" y="100" width="50" height="50" fill="green">
    <animateTransform attributeName="transform" type="rotate" 
        from="0 125 125" to="360 125 125" dur="3s" repeatCount="indefinite" />
</rect>

<!-- Scale -->
<circle cx="300" cy="200" r="30" fill="purple">
    <animateTransform attributeName="transform" type="scale" 
        from="1" to="2" dur="1s" repeatCount="indefinite" />
</circle>
\`\`\`

### animateMotion
\`\`\`svg
<path id="motionPath" d="M 50 300 Q 200 100, 400 300" fill="none" stroke="#ccc" />

<circle r="10" fill="red">
    <animateMotion dur="4s" repeatCount="indefinite">
        <mpath href="#motionPath" />
    </animateMotion>
</circle>
\`\`\`

## Contoh Lengkap

\`\`\`svg
<svg viewBox="0 0 500 400">
    <style>
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
        }
        @keyframes spin {
            100% { transform: rotate(360deg); }
        }
        
        .pulse { animation: pulse 1.5s ease-in-out infinite; }
        .bounce { animation: bounce 1s ease-in-out infinite; }
        .spin { animation: spin 3s linear infinite; transform-origin: center; }
    </style>
    
    <!-- CSS Animation -->
    <circle cx="80" cy="80" r="40" fill="#FF6B6B" class="pulse" />
    <text x="80" y="135" text-anchor="middle" font-size="12">Pulse</text>
    
    <circle cx="200" cy="80" r="40" fill="#4ECDC4" class="bounce" />
    <text x="200" y="135" text-anchor="middle" font-size="12">Bounce</text>
    
    <rect x="260" y="40" width="80" height="80" fill="#FFE66D" class="spin" rx="8" />
    <text x="300" y="135" text-anchor="middle" font-size="12">Spin</text>
    
    <!-- SMIL Animation -->
    <circle cx="80" cy="250" r="30" fill="#AA96DA">
        <animate attributeName="cy" from="250" to="200" dur="1s" 
                 repeatCount="indefinite" values="250;200;250" />
    </circle>
    
    <rect x="200" y="220" width="60" height="60" fill="#F38181" rx="8">
        <animateTransform attributeName="transform" type="rotate"
            from="0 230 250" to="360 230 250" dur="2s" repeatCount="indefinite" />
    </rect>
    
    <!-- Motion -->
    <path id="path" d="M 350 250 C 400 200, 450 300, 500 250" fill="none" stroke="#ddd" />
    <circle r="12" fill="#95E1D3">
        <animateMotion dur="3s" repeatCount="indefinite">
            <mpath href="#path" />
        </animateMotion>
    </circle>
</svg>
\`\`\`
  `,
  quiz: [
    {
      question: "Element SMIL untuk animasi transformasi adalah?",
      options: [
        "animate",
        "animateTransform",
        "transform",
        "motion"
      ],
      correctAnswer: 1
    },
    {
      question: "Element SMIL untuk animasi pergerakan di path adalah?",
      options: [
        "animate",
        "animateTransform",
        "animateMotion",
        "path"
      ],
      correctAnswer: 2
    },
    {
      question: "Atribut untuk durasi animasi SMIL adalah?",
      options: [
        "time",
        "duration",
        "dur",
        "length"
      ],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Animation Examples",
      code: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <style>
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        @keyframes colorShift {
            0% { fill: #FF6B6B; }
            50% { fill: #4ECDC4; }
            100% { fill: #FF6B6B; }
        }
        @keyframes rotatePulse {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
            100% { transform: rotate(360deg) scale(1); }
        }
        
        .float { animation: float 2s ease-in-out infinite; }
        .color { animation: colorShift 3s ease-in-out infinite; }
        .rotate-pulse { animation: rotatePulse 4s ease-in-out infinite; transform-origin: center; }
    </style>
    
    <!-- Float -->
    <g class="float">
        <circle cx="80" cy="100" r="40" fill="#FF6B6B" />
    </g>
    
    <!-- Color Shift -->
    <circle cx="220" cy="100" r="40" class="color" />
    
    <!-- Rotate Pulse -->
    <rect x="320" y="60" width="80" height="80" fill="#FFE66D" class="rotate-pulse" rx="8" />
    
    <!-- SMIL Path Animation -->
    <path d="M 80 250 L 200 150 L 320 250 L 440 150 L 560 250" fill="none" stroke="#ddd" stroke-width="2" />
    
    <circle r="10" fill="#AA96DA">
        <animateMotion dur="4s" repeatCount="indefinite" path="M 80 250 L 200 150 L 320 250 L 440 150 L 560 250" />
    </circle>
    
    <!-- Multiple Attributes -->
    <circle cx="80" cy="350" r="25" fill="#F38181">
        <animate attributeName="r" values="20;35;20" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="fill" values="#F38181;#95E1D3;#F38181" dur="3s" repeatCount="indefinite" />
    </circle>
    
    <!-- Complex Animation -->
    <g>
        <rect x="220" y="330" width="40" height="40" fill="#A8D8EA" rx="4">
            <animateTransform attributeName="transform" type="translate"
                values="0,0; 0,-40; 0,0; 40,0; 0,0" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </rect>
    </g>
    
    <!-- Combined Animation -->
    <circle cx="440" cy="350" r="30" fill="#FF8B94">
        <animate attributeName="r" values="20;40;20" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate"
            values="0,0; 0,-30; 0,0" dur="1s" repeatCount="indefinite" />
    </circle>
</svg>`,
      language: "html"
    }
  ]
};