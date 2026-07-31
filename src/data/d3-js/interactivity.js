export const chapter = {
  slug: "d3-js-interactivity",
  title: "Interaktivitas",
  description: "Tambahkan tooltips, zoom, pan, drag, dan brush ke visualisasi D3.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["d3-js-svg"],
  tags: ["d3js", "interaktivitas", "tooltip", "zoom", "brush"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Event Handling

\`\`\`javascript
svg.selectAll('circle')
    .on('mouseover', function(event, d) {
        d3.select(this)
            .transition().duration(200)
            .attr('r', d * 1.5)
            .attr('fill', 'orange');
        
        tooltip.style('display', 'block')
            .html(\`Value: <strong>\${d}</strong>\`)
            .style('left', event.pageX + 10 + 'px')
            .style('top', event.pageY - 20 + 'px');
    })
    .on('mouseout', function() {
        d3.select(this)
            .transition().duration(200)
            .attr('r', d => d)
            .attr('fill', '#F9A03C');
        
        tooltip.style('display', 'none');
    })
    .on('click', function(event, d) {
        console.log('Clicked:', d);
    });
\`\`\`

## Zoom & Pan

\`\`\`javascript
const zoom = d3.zoom()
    .scaleExtent([0.5, 5])
    .on('zoom', (event) => {
        g.attr('transform', event.transform);
    });

svg.call(zoom);

// Double-click reset
svg.on('dblclick.zoom', null);
\`\`\`

## Brush (Selection)

\`\`\`javascript
const brush = d3.brushX()
    .extent([[0, 0], [width, height]])
    .on('brush', (event) => {
        const selection = event.selection;
        // Filter data based on selection
        const filtered = data.filter(d => {
            const xPos = x(d.date);
            return xPos >= selection[0] && xPos <= selection[1];
        });
        updateChart(filtered);
    });

svg.append('g').attr('class', 'brush').call(brush);
\`\`\`

## Drag

\`\`\`javascript
const drag = d3.drag()
    .on('drag', function(event, d) {
        d3.select(this)
            .attr('cx', d.x = event.x)
            .attr('cy', d.y = event.y);
    });

svg.selectAll('circle').call(drag);
\`\`\`
  `,

  quiz: [
    { question: "Tooltip muncul saat event?", options: ["load", "mouseover / hover", "resize", "scroll"], correctAnswer: 1 },
    { question: "d3.zoom() untuk?", options: ["Tooltip", "Zoom & pan", "Drag", "Brush"], correctAnswer: 1 }
  ],

  codeExamples: []
};