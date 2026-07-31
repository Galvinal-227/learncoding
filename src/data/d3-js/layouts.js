export const chapter = {
  slug: "d3-js-layouts",
  title: "Layouts (Pie, Tree, Force)",
  description: "Gunakan D3 layouts untuk pie chart, tree diagram, dan force-directed graph.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["d3-js-scales"],
  tags: ["d3js", "layout", "pie", "tree", "force"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## D3 Layouts

Layouts adalah **algoritma** yang menghitung posisi dari data. Tidak menggambar, hanya menghasilkan koordinat.

## Pie / Donut Chart

\`\`\`javascript
const pie = d3.pie()
    .value(d => d.value)
    .sort(null);

const arc = d3.arc()
    .innerRadius(0)       // 0 = pie, >0 = donut
    .outerRadius(radius);

const arcs = pie(data);

svg.selectAll('path')
    .data(arcs)
    .join('path')
    .attr('d', arc)
    .attr('fill', (d, i) => color(i));
\`\`\`

### Donut Chart
\`\`\`javascript
const arc = d3.arc()
    .innerRadius(80)      // Lubang di tengah
    .outerRadius(150);
\`\`\`

## Tree Layout

\`\`\`javascript
const tree = d3.tree().size([width, height]);
const root = d3.hierarchy(data);
const links = tree(root).links();
const nodes = tree(root).descendants();

// Gambar links
svg.selectAll('path.link')
    .data(links)
    .join('path')
    .attr('d', d3.linkVertical()
        .x(d => d.x)
        .y(d => d.y));

// Gambar nodes
svg.selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 5);
\`\`\`

## Force-Directed Graph

\`\`\`javascript
const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).distance(100))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width/2, height/2));

simulation.on('tick', () => {
    // Update posisi setiap frame
    link.attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
    
    node.attr('cx', d => d.x).attr('cy', d => d.y);
});
\`\`\`
  `,

  quiz: [
    { question: "D3 layouts menghasilkan?", options: ["Gambar SVG", "Koordinat/posisi (tidak menggambar)", "Warna", "Animasi"], correctAnswer: 1 },
    { question: "Donut chart: innerRadius?", options: ["0", "> 0 (lubang di tengah)", "-1", "Tidak ada"], correctAnswer: 1 },
    { question: "Force layout untuk?", options: ["Bar chart", "Network graph / node-link diagram", "Pie chart", "Line chart"], correctAnswer: 1 }
  ],

  codeExamples: []
};