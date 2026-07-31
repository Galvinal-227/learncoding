export const chapter = {
  slug: "interactivity",
  title: "Interactivity",
  description: "Menambahkan interaktivitas pada SVG dengan event handler dan JavaScript.",
  icon: "SiSvg",
  color: "#FFB13B",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["svg-introduction"],
  tags: ["svg", "interactivity", "events", "javascript"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Event Handler

### Mouse Events
\`\`\`svg
<circle cx="100" cy="100" r="50" fill="blue"
        onmouseover="this.fill='red'"
        onmouseout="this.fill='blue'"
        onclick="alert('Clicked!')" />
\`\`\`

### Keyboard Events
\`\`\`svg
<svg tabindex="0" onkeydown="handleKey(event)">
    <!-- SVG content -->
</svg>
\`\`\`

## CSS Interactivity

### Hover
\`\`\`css
.shape {
    transition: all 0.3s ease;
}
.shape:hover {
    fill: red;
    transform: scale(1.1);
}
\`\`\`

### Active
\`\`\`css
.shape:active {
    transform: scale(0.9);
}
\`\`\`

## JavaScript Interactivity

### Get Element
\`\`\`javascript
const shape = document.getElementById('shape');
const shapes = document.querySelectorAll('.shape');
const svg = document.querySelector('svg');
\`\`\`

### Change Attributes
\`\`\`javascript
shape.setAttribute('fill', 'red');
shape.setAttribute('cx', 200);
shape.setAttribute('r', 50);
\`\`\`

### Add Event Listeners
\`\`\`javascript
shape.addEventListener('click', function(e) {
    console.log('Clicked!', e.target);
});

shape.addEventListener('mouseenter', function(e) {
    this.setAttribute('fill', 'red');
});

shape.addEventListener('mouseleave', function(e) {
    this.setAttribute('fill', 'blue');
});
\`\`\`

## Contoh Lengkap

\`\`\`svg
<svg viewBox="0 0 600 400" id="svg">
    <defs>
        <style>
            .shape {
                transition: all 0.3s ease;
                cursor: pointer;
            }
            .shape:hover {
                transform: scale(1.1);
            }
            .shape:active {
                transform: scale(0.9);
            }
            .text-hover {
                font-size: 14px;
                fill: #666;
            }
        </style>
    </defs>
    
    <!-- Interactive Circle -->
    <circle class="shape" cx="100" cy="100" r="50" fill="#FF6B6B"
            onclick="this.fill='#4ECDC4'"
            onmouseenter="this.setAttribute('fill', '#FFE66D')"
            onmouseleave="this.setAttribute('fill', '#FF6B6B')" />
    <text x="100" y="170" text-anchor="middle" font-size="12">Click me!</text>
    
    <!-- Interactive Rectangle -->
    <rect class="shape" x="250" y="50" width="100" height="100" fill="#4ECDC4" rx="8"
          onclick="alert('Rectangle clicked!')" />
    <text x="300" y="170" text-anchor="middle" font-size="12">Click for alert</text>
    
    <!-- Interactive Text -->
    <text x="100" y="270" font-size="20" fill="#AA96DA" cursor="pointer"
          onclick="this.textContent='Clicked!'"
          onmouseenter="this.style.fill='#F38181'"
          onmouseleave="this.style.fill='#AA96DA'">
        Click this text
    </text>
    
    <!-- Interactive Group -->
    <g transform="translate(350, 250)">
        <rect x="0" y="0" width="120" height="80" fill="#FFE66D" rx="8"
              onmouseenter="document.getElementById('status').textContent='Hovering!'"
              onmouseleave="document.getElementById('status').textContent='Idle'" />
        <text x="60" y="30" text-anchor="middle" font-size="12" fill="#333">Hover me</text>
        <text id="status" x="60" y="55" text-anchor="middle" font-size="10" fill="#999">Idle</text>
    </g>
</svg>

<script>
// JavaScript control
const svg = document.getElementById('svg');

// Add event listeners with JS
svg.querySelectorAll('.shape').forEach(el => {
    el.addEventListener('click', function(e) {
        console.log('Clicked:', e.target);
    });
});

// Dynamic creation
function addShape() {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', Math.random() * 500 + 50);
    circle.setAttribute('cy', Math.random() * 300 + 50);
    circle.setAttribute('r', 30);
    circle.setAttribute('fill', '#' + Math.floor(Math.random()*16777215).toString(16));
    circle.setAttribute('class', 'shape');
    circle.addEventListener('click', function() {
        this.parentNode.removeChild(this);
    });
    svg.appendChild(circle);
}
</script>

<button onclick="addShape()">Add Random Shape</button>
\`\`\`
  `,
  quiz: [
    {
      question: "Event untuk mouse hover di SVG adalah?",
      options: [
        "onhover",
        "onmouseenter",
        "onmouseover",
        "onmousehover"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk mengubah atribut SVG di JavaScript adalah?",
      options: [
        "setAttribute",
        "setProperty",
        "changeAttribute",
        "updateAttr"
      ],
      correctAnswer: 0
    },
    {
      question: "Atribut CSS untuk cursor pointer adalah?",
      options: [
        "cursor: pointer",
        "cursor: hand",
        "cursor: click",
        "pointer: true"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Interactive SVG Example",
      code: `<svg viewBox="0 0 500 400" id="interactive-svg">
    <defs>
        <style>
            .draggable { cursor: move; }
            .clickable { cursor: pointer; }
            .hover-effect { transition: all 0.3s ease; }
            .hover-effect:hover { fill: #FF6B6B; transform: scale(1.1); }
        </style>
    </defs>
    
    <!-- Draggable -->
    <circle id="draggable" cx="100" cy="100" r="40" fill="#4ECDC4" class="draggable" />
    <text x="100" y="155" text-anchor="middle" font-size="12">Drag me</text>
    
    <!-- Click Counter -->
    <rect x="250" y="60" width="120" height="80" fill="#FFE66D" rx="8" class="clickable" 
          onclick="document.getElementById('counter').textContent = parseInt(document.getElementById('counter').textContent) + 1" />
    <text x="310" y="95" text-anchor="middle" font-size="14">Click me</text>
    <text id="counter" x="310" y="120" text-anchor="middle" font-size="18" fill="#333">0</text>
    
    <!-- Color Picker -->
    <rect x="420" y="60" width="50" height="80" fill="#FF6B6B" rx="8" class="clickable"
          onclick="document.getElementById('color-target').setAttribute('fill', '#FF6B6B')" />
    <text x="445" y="155" text-anchor="middle" font-size="10">Red</text>
    
    <rect x="420" y="170" width="50" height="80" fill="#4ECDC4" rx="8" class="clickable"
          onclick="document.getElementById('color-target').setAttribute('fill', '#4ECDC4')" />
    <text x="445" y="265" text-anchor="middle" font-size="10">Green</text>
    
    <rect x="420" y="280" width="50" height="80" fill="#AA96DA" rx="8" class="clickable"
          onclick="document.getElementById('color-target').setAttribute('fill', '#AA96DA')" />
    <text x="445" y="375" text-anchor="middle" font-size="10">Purple</text>
    
    <!-- Target Shape -->
    <circle id="color-target" cx="250" cy="280" r="60" fill="#FF6B6B" class="hover-effect" />
</svg>

<script>
// Draggable implementation
const draggable = document.getElementById('draggable');
let isDragging = false;
let offsetX, offsetY;

draggable.addEventListener('mousedown', (e) => {
    const svg = document.getElementById('interactive-svg');
    const rect = svg.getBoundingClientRect();
    offsetX = e.clientX - rect.left - parseFloat(draggable.getAttribute('cx'));
    offsetY = e.clientY - rect.top - parseFloat(draggable.getAttribute('cy'));
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const svg = document.getElementById('interactive-svg');
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left - offsetX;
    const y = e.clientY - rect.top - offsetY;
    draggable.setAttribute('cx', Math.max(40, Math.min(460, x)));
    draggable.setAttribute('cy', Math.max(40, Math.min(360, y)));
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Hover effect for all shapes
document.querySelectorAll('.clickable, .draggable').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.opacity = '0.8';
    });
    el.addEventListener('mouseleave', () => {
        el.style.opacity = '1';
    });
});
</script>`,
      language: "html"
    }
  ]
};