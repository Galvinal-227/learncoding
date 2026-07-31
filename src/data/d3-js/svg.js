export const chapter = {
  slug: "d3-js-svg",
  title: "SVG Elements & Shapes",
  description: "Buat berbagai bentuk SVG dengan D3: rect, circle, line, path, text.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["d3-js-selections"],
  tags: ["d3js", "svg", "shapes", "elements"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## SVG dengan D3

D3 memudahkan pembuatan elemen SVG dengan method chaining.

## Basic Shapes

### Rectangle
\`\`\`javascript
svg.append('rect')
    .attr('x', 50)
    .attr('y', 50)
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', '#F9A03C')
    .attr('rx', 8)        // Rounded corner
    .attr('stroke', '#333')
    .attr('stroke-width', 2);
\`\`\`

### Circle
\`\`\`javascript
svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 100)
    .attr('r', 50)
    .attr('fill', 'steelblue')
    .attr('opacity', 0.8);
\`\`\`

### Line
\`\`\`javascript
svg.append('line')
    .attr('x1', 0).attr('y1', 0)
    .attr('x2', 200).attr('y2', 200)
    .attr('stroke', 'red')
    .attr('stroke-width', 3);
\`\`\`

### Path (Paling Powerful)
\`\`\`javascript
const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.value));

svg.append('path')
    .datum(data)
    .attr('d', line)
    .attr('fill', 'none')
    .attr('stroke', '#F9A03C')
    .attr('stroke-width', 2);
\`\`\`

### Area
\`\`\`javascript
const area = d3.area()
    .x(d => x(d.date))
    .y0(height)
    .y1(d => y(d.value));

svg.append('path')
    .datum(data)
    .attr('d', area)
    .attr('fill', '#F9A03C')
    .attr('opacity', 0.3);
\`\`\`

### Text
\`\`\`javascript
svg.append('text')
    .attr('x', width/2)
    .attr('y', 30)
    .attr('text-anchor', 'middle')
    .attr('font-size', '20px')
    .attr('font-weight', 'bold')
    .attr('fill', '#333')
    .text('My Chart Title');
\`\`\`

## Group (<g>)

\`\`\`javascript
const g = svg.append('g')
    .attr('transform', \`translate(\${margin.left},\${margin.top})\`);

// Semua elemen di dalam group akan ikut transform
g.append('rect');
g.append('circle');
\`\`\`
  `,

  quiz: [
    { question: "Line chart pakai element?", options: ["rect", "circle", "path (d3.line)", "text"], correctAnswer: 2 },
    { question: "Group element <g> untuk?", options: ["Hiasan", "Group + transform bersama", "Gradient", "Animation"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Line Chart Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><title>D3 Line Chart</title>
<script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
    <svg width="600" height="400"></svg>
    <script>
        const data = [
            {date: new Date('2026-01-01'), value: 30},
            {date: new Date('2026-02-01'), value: 50},
            {date: new Date('2026-03-01'), value: 45},
            {date: new Date('2026-04-01'), value: 70},
            {date: new Date('2026-05-01'), value: 65},
            {date: new Date('2026-06-01'), value: 90}
        ];
        
        const svg = d3.select('svg');
        const margin = {top:20, right:30, bottom:30, left:40};
        const width = +svg.attr('width') - margin.left - margin.right;
        const height = +svg.attr('height') - margin.top - margin.bottom;
        const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`);
        
        const x = d3.scaleTime().domain(d3.extent(data, d => d.date)).range([0, width]);
        const y = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]).range([height, 0]).nice();
        
        const line = d3.line().x(d => x(d.date)).y(d => y(d.value)).curve(d3.curveMonotoneX);
        
        g.append('path').datum(data).attr('d', line).attr('fill', 'none').attr('stroke', '#F9A03C').attr('stroke-width', 3);
        g.append('g').attr('transform', \`translate(0,\${height})\`).call(d3.axisBottom(x));
        g.append('g').call(d3.axisLeft(y));
    </script>
</body>
</html>`
    }
  ]
};